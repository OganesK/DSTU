import collections
from goto import with_goto
import sys
from graphviz import Digraph


class Branch:
    def __init__(self, name, conn, connlist):
        self.name = name
        self.conn = conn
        self.line = {}
        self.connlist = connlist

    def fill(self):
        for i in range(len(self.conn)):
            self.line[self.conn[i]] = self.connlist[i]


class Machine:
    def __init__(self, connections, x, branches):
        self.connections = connections
        self.mach = []
        self.x = x
        self.branches = branches

    def fillm(self):

        for i in range(len(self.branches)):
            self.mach.append(Branch(self.branches[i], self.x, self.connections[i]))
            self.mach[i].fill()

    def visualise(self):
        nodes = [x.name for x in self.mach]
        dot = Digraph(comment='Machine')
        for z in nodes:
            dot.node(z, z)
        for i in range(len(self.mach)):
            for x in self.x:
                for j in (self.mach[i].line[x]).split(','):
                    if j == 'none':
                        pass
                    else:
                        dot.edge(self.mach[i].name, j, label=x)

        dot.render('./graph/machine.gv', view=False, format = 'png')



dBranch = collections.namedtuple('dBranch', ['name', 'depend', 'trans'])


class DMachine:
    def __init__(self, machine, x):
        self.machine = machine
        self.x = x
        self.dm = [dBranch('p0', set([x.name for x in machine if 'n' in list(x.name)]), {})]

    @with_goto
    def create(self):
        sch = 1

        label.begin
        for z in range(len(self.dm)):
            bufff = [x for x in self.machine if x.name in self.dm[z].depend]
            bbb = {}
            for q in self.x:
                bbb[q] = set((' '.join(map(str, [x.line[q] for x in bufff]))).replace(',', ' ').split(' '))
                try:
                    if len(bbb[q]) >= 2:
                        bbb[q].remove('none')
                except:
                    pass

            for j in self.x:
                k = 0

                for p in range(len(self.dm)):
                    if bbb[j] == {'none'}:
                        self.dm[z].trans[j] = 'none'
                        k += 1
                    elif self.dm[p].depend == bbb[j]:
                        self.dm[z].trans[j] = self.dm[p].name
                        k += 1

                if k == 0:
                    self.dm.append(dBranch(name=('p' + str(sch)), depend=bbb[j], trans={}))
                    self.dm[z].trans[j] = ('p' + str(sch))
                    sch += 1
                    goto.begin
        label.end

    def dvis(self):
        # nodes = [x.name for x in self.mach]
        # dot = Digraph(comment='Machine')
        # for z in nodes:
        #     dot.node(z, z)
        # for i in range(len(self.mach)):
        #     for x in self.x:
        #         for j in (self.mach[i].line[x]).split(','):
        #             if j == 'none':
        #                 pass
        #             else:
        #                 dot.edge(self.mach[i].name, j, label=x)
        #
        # dot.render('C:/OganesyantsC/Donstu/2 курс/2 семестр/Labs/ATaFL/#4/graph/machine.gv', view=False, format='png')
        nodes = [x.name for x in self.dm]
        ddot = Digraph(comment='DetMachine')
        for z in nodes:
            ddot.node(z, z)
        for i in range(len(self.dm)):
            for x in self.x:
                if self.dm[i].trans[x] == 'none':
                    pass
                else:
                    ddot.edge(self.dm[i].name, self.dm[i].trans[x], label=x)
        ddot.render('./graph/DetMachine.gv', view=False, format='png')

    def check(self, qwe):
        posl = list(qwe)
        wop = [self.dm[0]]
        p = []
        for i in posl:
            for j in self.x:
                if i == j:
                    if wop[0].trans[j] == 'none':
                        return 'Встречено none. Не допускает',p
                        sys.exit()
                    posl = posl[1:]
                    wop = [x for x in self.dm if wop[0].trans[j] == x.name]
                    p.append([wop[0].name, posl])


        if len([x for x in wop[0].depend if 'k' in list(x)]) != 0:
            return 'Допускает',p
        else:
            return "Не допускает",p
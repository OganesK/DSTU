def pri(tre):
    mid = len(tre)//2
    print(['',tre[mid],''])
    print([tre[mid-1],'', tre[mid+1]])
    print([tre[mid - 2],'', tre[mid + 2]])
class Node:

    def __init__(self, data):

        self.left = None
        self.right = None
        self.data = data

    def insert(self, data):
        if self.data:
            if data < self.data:
                if self.left is None:
                    self.left = Node(data)
                else:
                    self.left.insert(data)
            elif data > self.data:
                if self.right is None:
                    self.right = Node(data)
                else:
                    self.right.insert(data)
            else:
                self.data = data

    def inodertravel(self,root):
        res = []
        if root:
            res = self.inodertravel(root.left)
            res.append(root.data)
            res += self.inodertravel(root.right)
        return res

    def PrintTree(self,trr):

        if self.left:
            self.left.PrintTree(trr)
        trr.append(self.data)
        if self.right:
            self.right.PrintTree(trr)
        return trr




    def preordtravel(self,root):
        res = []
        if root:
            res.append(root.data)
            res += self.preordtravel(root.left)
            res += self.preordtravel(root.right)
        return res

    def postordtravel(self,root):
        res = []
        if root:
            res = self.postordtravel(root.left)
            res += self.postordtravel(root.right)
            res.append(root.data)
        return res


root = Node(10)
root.insert(12)
root.insert(5)
root.insert(14)
root.insert(3)
t = []
root.PrintTree(t)

pri(t)

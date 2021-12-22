ch = int(input('Введите номер задания: '))
import os.path
from random import randint as rnd

if ch == 1:

    f = open('textfile.txt', 'w')
    f.close()
    with open('textfile.txt', 'r+') as f:
        for i in range(rnd(0, 100)):
            f.write(str(rnd(-100, 100)) + ' ')
    otrc = int
    with open('textfile.txt', 'r+') as f:
        for line in f:
            if int(line) < 0:
                otrc += 1
    print(otrc)


elif ch == 2:
    x = input('Введите букву: ')
    n = int(input("Введите номер строки: "))
    f = open('textfile.txt', 'w')
    f.close()
    with open('textfile.txt', 'r+') as f:
        for i in range(rnd(0, 100)):
            f.write(str(rnd(-100, 100)) + ' ')
    f = open('textfilee.txt', 'w')
    f.close()
    with open('textfile.txt', 'r+') as f:
        with open('textfilee.txt','r+') as ff:
            count = 0
            for line in f:
                if count == n:
                    ff.write(x)
                else:
                    ff.write(f.readline())
                    count += 1
elif ch == 3:
    f = open('textfile1.txt', 'w')
    f.close()
    with open('textfile1.txt', 'r+') as f:
        for i in range(rnd(1, 1000)):
            f.write(str(rnd(1, 100)) + '\n')
    n = int(input("Введите номер строки: "))
    with open('textfile1.txt','r+') as f:
        count = 0
        for line in f:
            if count == n:
                print(line)
            else:
                pass
            count += 1
elif ch == 4:
    import random
    f = open('textfile3.txt','w')
    f.close()
    slovar = ['slovo', 'slovo1', 'slovo2', 'slovo3', 'slovo4']
    slovo = input("Введите слово: ")
    with open('textfile3.txt', 'r+')as f:
        for i in range(rnd(1, 100)):
            f.write(random.SystemRandom().choice(slovar) + '\n')
        f.write(slovo)
    with open('textfile3.txt', 'r+')as f:
        count = 0
        for line in f:
            if line == slovo:
                print(count)
            else:
                count += 1
elif ch == 5:
    slovar = ['slovo', 'slovo1', 'slovo2', 'slovo3', 'slovo4']
    repl = {'slovo':0, 'slovo1':0, 'slovo2':0, 'slovo3':0, 'slovo4':0}
    f = open('textfile2.txt', 'w')
    f.close()
    import random
    import re

    with open('textfile2.txt', 'r+')as f:
        for i in range(rnd(1, 100)):
            f.write(random.SystemRandom().choice(slovar) + '\n')


    # with open('textfile2.txt','r+') as f:
    #     for line in f:
    #         # print(re.sub(r'[^\w\s]','', line))
    def unic(file, mode):
        count = 0
        unicw = []
        with open(file, mode) as f:
            for line in f:
                if line in unicw:
                    pass
                else:
                    unicw.append(line)
                    count += 1
        return count
    with open('textfile2','r+') as f:
        for line in f:
            if line in repl:
                repl[line] += 1

    print(repl)
    print(unic('textfile2.txt', 'r+'))
elif ch == 6:
    import random

    f = open('textfile6.txt', 'w')
    f.close()
    slovar = ['slovo', 'slovo1', 'slovo2', 'slovo3', 'slovo4']
    slovo = input("Введите слово: ")
    import io
    with open('textfile6.txt', 'r+')as f:
        for i in range(rnd(1, 100)):
            f.write(random.SystemRandom().choice(slovar) + '\n')
        f.write(slovo)
    with open('textfile6.txt','r') as f:
        f.seek(0)
        perv = f.readline(1)
        f.seek(os.path.getsize('textfile6.txt'))
        last = f.readline(0)
        f.write(perv)
        f.seek(0)
        f.write(last)
        

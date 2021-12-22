from functions import *
from random import randint as rnd
from time import time
import numpy as np
from matplotlib import pyplot as plt
#100, 500, 1000, 3000, 10000
lst1 = [rnd(-100, 100) for i in range(100)]
lst2 = [rnd(-100, 100) for i in range(100)]
lst3 = [rnd(-100, 100) for i in range(100)]
lst4 = [rnd(-100, 100) for i in range(500)]
lst5 = [rnd(-100, 100) for i in range(500)]
lst6 = [rnd(-100, 100) for i in range(500)]
lst7 = [rnd(-100, 100) for i in range(1000)]
lst8 = [rnd(-100, 100) for i in range(1000)]
lst9 = [rnd(-100, 100) for i in range(1000)]
lst10 = [rnd(-100, 100) for i in range(3000)]
lst11 = [rnd(-100, 100) for i in range(3000)]
lst12 = [rnd(-100, 100) for i in range(3000)]
lst13 = [rnd(-100, 100) for i in range(10000)]
lst14 = [rnd(-100, 100) for i in range(10000)]
lst15= [rnd(-100, 100) for i in range(10000)]
lst16 = [rnd(-100, 100) for i in range(100)]
lst17 = [rnd(-100, 100) for i in range(100)]
lst18 = [rnd(-100, 100) for i in range(100)]
lst19 = [rnd(-100, 100) for i in range(500)]
lst20 = [rnd(-100, 100) for i in range(500)]
lst21 = [rnd(-100, 100) for i in range(500)]
lst22 = [rnd(-100, 100) for i in range(1000)]
lst23 = [rnd(-100, 100) for i in range(1000)]
lst24 = [rnd(-100, 100) for i in range(1000)]
lst25 = [rnd(-100, 100) for i in range(3000)]
lst26 = [rnd(-100, 100) for i in range(3000)]
lst27 = [rnd(-100, 100) for i in range(3000)]
lst28 = [rnd(-100, 100) for i in range(10000)]
lst29 = [rnd(-100, 100) for i in range(10000)]
lst30 = [rnd(-100, 100) for i in range(10000)]
for i in range(15):
    (locals().get('lst' + str(i + 1)))[rnd(0,len(locals().get('lst' + str(i + 1))))] = 100
    if 100 in locals().get('lst' + str(i + 1)):
        print('Rabotaet')
lintime = []
lincount = []
for i in range(15,30):
    stime = time()
    lincount.append(LinearSearch((locals().get('lst'+str(i+1))), '100')[1])
    ftime = time()
    lintime.append(ftime-stime)
print(lintime)

cat_par = ['100','100','100','500','500','500','1000','1000','1000','3000','3000','3000','10000','10000','10000']

plt.bar(cat_par,lincount)
plt.show()
plt.bar(cat_par, lintime)
plt.show()

lst16 = sorted([rnd(-100, 100) for i in range(10000)])
lst16[50] = 100

lstime = time()
lcount = LinearSearch(lst16, 100)[1]
lftime = time()
ltime = lftime - lstime
print(ltime)

bstime = time()
bcount = BinSearchVirt(lst16,100)[1]
bftime = time()
btime = bftime - bstime
print(btime)

cat = ['Lin', 'Bin']
lbc = [lcount,bcount]
plt.bar(cat,lbc)
plt.show()

cat = ['Lin', 'Bin']
lbcc = [ltime,btime]
plt.bar(cat,lbcc)
plt.show()
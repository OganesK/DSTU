
from random import randint as rnd
import time

import random
from random import randint as rnd
def selection(arr):
    count = 0
    for i in range(0,len(arr) - 1):
        smallest = i
        for j in range(i+1, len(arr)):
            if arr[j] < arr[smallest]:
                smallest = j
                count += 1
            arr[i], arr[smallest] = arr[smallest], arr[i]
    return count

def bubble(array):
    count = 0
    for i in range(len(array)-1):
        for j in range(len(array)-i-1):
            if array[j] > array[j+1]:
                buff = array[j]
                array[j] = array[j+1]
                array[j+1] = buff
                count += 1
    return count

def quicksort(nums):
   count = 0
   if len(nums) <= 1:
       return nums
   else:
       q = random.choice(nums)
       s_nums = []
       m_nums = []
       e_nums = []
       for n in nums:
           if n < q:
               s_nums.append(n)
               count += 1
           elif n > q:
               m_nums.append(n)
               count += 1
           else:
               e_nums.append(n)
               count += 1
       return quicksort(s_nums) + e_nums + quicksort(m_nums)+['qwe']+([s_nums,e_nums,m_nums])

    
mass = [9,4,6,7,8,2,5]
print(quicksort(mass))
tot = time.time()
arr1 = []
arr2 = []
arr3 = []
arr4 = []
arr5 = []
arr6 = []

stotal = time.time()
for i in range(20):
    arr1.append(rnd(-100,100))
for i in range(500):
    arr2.append(rnd(-100,100))
for i in range(1000):
    arr3.append(rnd(-100,100))
for i in range(3000):
    arr4.append(rnd(-100,100))
for i in range(5000):
    arr5.append(rnd(-100,100))
for i in range(10000):
    arr6.append(rnd(-100,100))

sst1 = time.time()
arr11 = arr1
scount1 = selection(arr1)
set1 = time.time()
stt1 = set1 - sst1

sst2 = time.time()
arr22 = arr2
scount2 = selection(arr2)
set2 = time.time()
stt2 = set2 - sst2

sst3 = time.time()
arr33 = arr3
scount3 = selection(arr3)
set3 = time.time()
stt3 = set3 - sst3

sst4 = time.time()
arr44 = arr4
scount4 = selection(arr4)
set4 = time.time()
stt4 = set4 - sst4

sst5 = time.time()
arr55 = arr5
scount5 = selection(arr5)
set5 = time.time()
stt5 = set5 - sst5

sst6 = time.time()
arr66 = arr6
scount6 = selection(arr6)
set6 = time.time()
stt6 = set6 - sst6



bst1 = time.time()
arr111 = arr11
bcount1 = bubble(arr11)
bet1 = time.time()
btt1 = bet1 - bst1

bst2 = time.time()
arr222 = arr22
bcount2 = bubble(arr22)
bet2 = time.time()
btt2 = bet2 - bst2

bst3 = time.time()
arr333 = arr33
bcount3 = bubble(arr33)
bet3 = time.time()
btt3 = bet3 - bst3

bst4 = time.time()
arr444 = arr44
bcount4 = bubble(arr44)
bet4 = time.time()
btt4 = bet4 - bst4

bst5 = time.time()
arr555 = arr55
bcount5 = bubble(arr55)
bet5 = time.time()
btt5 = bet5 - bst5

bst6 = time.time()
arr666 = arr66
bcount6 = bubble(arr66)
bet6 = time.time()
btt6 = bet6 - bst6



qst1 = time.time()
qcount1 =quicksort(arr111)
qet1 = time.time()
qtt1 = qet1 - qst1

qst2 = time.time()
qcount2 = quicksort(arr222)
qet2 = time.time()
qtt2 = qet2 - qst2

qst3 = time.time()
qcount3 = quicksort(arr333)
qet3 = time.time()
qtt3 = qet3 - qst3

qst4 = time.time()
qcount4 = quicksort(arr444)
qet4 = time.time()
qtt4 = qet4 - qst4

qst5 = time.time()
qcount5 = quicksort(arr555)
qet5 = time.time()
qtt5 = qet5 - qst5

qst6 = time.time()
qcount6 = quicksort(arr666)
qet6 = time.time()
qtt6 = qet6 - qst6

etotal = time.time()
ttotal = etotal - stotal

print("Время сортировки прямым выбором:{},{},{},{},{},{} ".format(stt1, stt2, stt3, stt4, stt5, stt6))
print("Кол-во итераций при сортировке прямым выбором:{}, {}, {}, {}, {}, {}".format(scount1,scount2,scount3,scount4,scount5,scount6))
print("Время сортировки пузырьком:{},{},{},{},{},{} ".format(btt1, btt2, btt3, btt4, btt5, btt6))
print("Кол-во итераций при сортировке пузырьком:{}, {}, {}, {}, {}, {}".format(bcount1,bcount2,bcount3,bcount4,bcount5,bcount6))
print("Время при быстрой сортировке:{},{},{},{},{},{} ".format(qtt1, qtt2, qtt3, qtt4, qtt5, qtt6))
# print("Кол-во итераций при быстрой сортировке:{}, {}, {}, {}, {}, {}".format(qcount1,qcount2,qcount3,qcount4,qcount5,qcount6))
print('Общее время сортировки: {}'.format(ttotal))
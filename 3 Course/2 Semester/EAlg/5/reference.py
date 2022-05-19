import random
import copy

def metod1(array,process):
    result = []
    for x in range(0, len(array)):
        process_dop = []
        for j in range(0,len(array[x])):
            if (array[x][j]==-1):
                process_dop.append(888)
                continue
            process_dop.append(array[x][j]+process[j])
        min_element = process_dop[0]
        min_index = 0
        for i in range(0,len(process_dop)):
            if(min_element>process_dop[i]):
                min_element = process_dop[i]
                min_index = i
        process[min_index] = min_element
        result.append([0 for i in process])
        result[x][min_index] = array[x][min_index]
        print('Итерация',process)
    return result

def no_infinity(array):#cортировка
    array_dop = []
    for i in range(0,len(array)):
        for j in range(0,len(array[i])):
            if (array[i][j]!=-1):
                array_dop.append(array[i][j])
                break

    return array_dop

def selection_sort(arr,array):#cортировка
    for i in range(len(arr)):
        minimum = i

        for j in range(i + 1, len(arr)):
            if arr[j] > arr[minimum]:
                minimum = j

        arr[minimum], arr[i] = arr[i], arr[minimum]
        array[minimum],array[i] = array[i],array[minimum]
    return array

def infinity_sort2(arr,array):
    result_array = []
    index_start= 0
    index_stop = 0
    last_element = arr[0]
    if (arr[0] != arr[1]):
        result_array.append(array[0])
        last_element = arr[1]
        index_start = 1
    for i in range(1,len(arr)):
        sorted_array = []
        sorted_arr = []
        if ((last_element!=arr[i])or(i==len(arr)-1)):
            index_stop = i
            if (i==len(arr)-1):
                index_stop = i+1
            for x in range(index_start,index_stop):
                sorted_array.append(array[x])
            sorted_arr = no_infinity(sorted_array)
            result = selection_sort(sorted_arr,sorted_array)
            index_start = i
            for g in result:
                result_array.append(g)
            if (len(arr)>i+1):
                last_element = arr[i+1]
        if (last_element==arr[i]):
            continue
    return  result_array



def infinity_sort(array):
    sorted_array = []
    value_infinity_arr = []
    max_value_infinity = len(array[0]) - 1
    for i in range(0,len(array)):
        value_infinity_str = 0
        for j in range(0,len(array[i])):
            if (array[i][j]==-1):
                value_infinity_str = value_infinity_str+1
        value_infinity_arr.append(value_infinity_str)
    return (value_infinity_arr)

def make_uniform_array(m,n,a,b):
    array_str = [random.randint(a, b) for i in range(0, m)]
    array = []
    for y in array_str:
        array_dop = [y for i in range(0, n)]
        array.append(array_dop)
    for i in range(0, len(array)):
        infinity = random.randint(0, n - 1)
        infinity_array = [random.randint(0, n - 1) for i in range(0, infinity)]
        for j in range(0, len(array[i])):
            if (j in infinity_array):
                array[i][j] = -1
    return array

m = int(input("Введите m "))
n = int(input("Введите n "))
a = int(input("Введите t1: "))
b = int(input("Введите t2: "))
array_start = make_uniform_array(m,n,a,b)
array = copy.copy(array_start)
print("Исходная матрица")
for t in array:
    print(t)
array_infinity = no_infinity(array)
array1 = selection_sort(array_infinity,array)
print("Сортировка 1 вариант")
for t in array1:
    print(t)
print("1 вариант")
process = [0 for i in range(0, n)]
metod1(array1,process)
print("Сортировка 2 вариант")
array_infinity = infinity_sort(array_start)
array2 = copy.copy(array_start)
array2 = selection_sort(array_infinity,array_start)
array3 = copy.copy(array2)
for t in array2:
    print(t)
print("2 вариант")
process2 = [0 for i in range(0, n)]
metod1(array2,process2)
print("Сортировка 3 вариант")
array3 = infinity_sort2(array_infinity,array3)
for t in array3:
    print(t)
print("3 вариант")
process3 = [0 for i in range(0, n)]
metod1(array3, process3)
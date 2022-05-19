def selection_sort(arr,array):#cортировка
    for i in range(len(arr)):
        minimum = i

        for j in range(i + 1, len(arr)):
            if arr[j] > arr[minimum]:
                minimum = j

        arr[minimum], arr[i] = arr[i], arr[minimum]
        array[minimum],array[i] = array[i],array[minimum]
    return array

def metod1(array,process,result):
    for x in range(len(result), len(array)):
        process_dop = []
        for j in range(0,len(array[x])):
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
        print(process)
        print(result)
    return process

def alg(array,process):
    result = []
    sum = 0
    for q in range(0,len(array)):
        minumum = array[q][0]
        for r in range(0,len(array[q])):
            if(minumum>array[q][r]):
                minumum = array[q][r]
        sum= sum+ minumum
    barier = sum/n
    print("Барьер "+str(barier))
    for r in range(0, len(array)):
        minumum_element = array[r][0]
        minumum_element_index = 0
        for e in range(0,len(array[r])):
            if (minumum_element>array[r][e]):
                minumum_element = array[r][e]
                minumum_element_index = e
        proverka = process[minumum_element_index]+minumum_element
        if (proverka<=barier):
            result.append([0 for i in process])
            result[r][minumum_element_index] = array[r][minumum_element_index]
            process[minumum_element_index]=proverka
            print(process)
            print(result)
        else:
            break
    metod1(array,process,result)
    return process


array = [[10,15,17],[19,12,13],[14,16,10],[18,15,13],[11,12,19],[20,19,11],[13,15,14],[10,11,12]]
#array= [[17,14,12],[9,5,11],[15,7,12],[13,10,8],[11,16,14]]
#array = [[20,15,30,10],[11,5,6,20],[100,1,2,3],[12,13,14,15],[41,15,8,9]]
m = int(input("Введите число заданий m "))
n = int(input("Введите число процессоров n "))
a = int(input("Введите начало диапазона для заданий "))
b = int(input("Введите конец диапазона для заданий "))
print("-----------------------------------------------")
print("Полученный массив:")
#array = [[random.randint(a,b) for i in range(0,n)] for j in range(0,m)]
for i in array:
    print(i)
print("Суммы значений в строках")
array_sum = [sum(list) for list in array]
print(array_sum)
print("-----------------------------------------------")
print("Отсортированный массив")
array_sort= selection_sort(array_sum,array) #массив, отсортированный в порядке убывания сумм чисел в строке
for j in array_sort:
    print(j)
process = [0 for i in range(0,n)]
print("-----------------------------------------------")
print("Ход решения")
a = alg(array,process)
print("Полученный результат")
print(max(a))
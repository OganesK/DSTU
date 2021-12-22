import numpy
import time

def Min(lst,myindex):
    return min(x for idx, x in enumerate(lst) if idx != myindex)

def Delete(matrix,index1,index2):
    del matrix[index1]
    for i in matrix:
        del i[index2]
    return matrix

def PrintMatrix(matrix):
    print("---------------")
    for i in range(len(matrix)):
        print(matrix[i])
    print("---------------")

def readFile(fileName):
        fileObj = open(fileName, "r")
        words = fileObj.read().splitlines()
        fileObj.close()
        return words

def calculate(n, matrix):
    if n == 5:
        pass
    if n==16:
        time.sleep(180)
    H=0
    PathLenght=0
    Str=[]
    Stb=[]
    res=[]
    result=[]
    StartMatrix=[]

    for i in range(n):
        Str.append(i)
        Stb.append(i)

        
    for i in range(n):StartMatrix.append(matrix[i].copy())

    for i in range(n): matrix[i][i]=float('inf')



    while True:
        #--------------------------------------
        for i in range(len(matrix)):
            temp=min(matrix[i])
            H+=temp
            for j in range(len(matrix)):
                matrix[i][j]-=temp

        for i in range(len(matrix)):
            temp = min(row[i] for row in matrix)
            H+=temp
            for j in range(len(matrix)):
                matrix[j][i]-=temp
        #--------------------------------------
        
        #--------------------------------------
        NullMax=0
        index1=0
        index2=0
        tmp=0
        for i in range(len(matrix)):
            for j in range(len(matrix)):
                if matrix[i][j]==0:
                    tmp=Min(matrix[i],j)+Min((row[j] for row in matrix),i)
                    if tmp>=NullMax:
                        NullMax=tmp
                        index1=i
                        index2=j
        #--------------------------------------

        res.append(Str[index1]+1)
        res.append(Stb[index2]+1)
        
        oldIndex1=Str[index1]
        oldIndex2=Stb[index2]
        if oldIndex2 in Str and oldIndex1 in Stb:
            NewIndex1=Str.index(oldIndex2)
            NewIndex2=Stb.index(oldIndex1)
            matrix[NewIndex1][NewIndex2]=float('inf')
        del Str[index1]
        del Stb[index2]
        matrix=Delete(matrix,index1,index2)
        if len(matrix)==1:break
        
    for i in range(0,len(res)-1,2):
        if res.count(res[i])<2:
            result.append(res[i])
            result.append(res[i+1])
    for i in range(0,len(res)-1,2):
        for j in range(0,len(res)-1,2):
            if result[len(result)-1]==res[j]:
                result.append(res[j])
                result.append(res[j+1])
    print("----------------------------------")
    last_encounters = {}
    for i, item in enumerate(result):
        if item not in last_encounters:
            last_encounters[item] = None
        else:
            last_encounters[item] = i

    for i in last_encounters.values():
        if i is not None:
            result[i] = 0
    new_items = [x if x != 0 else '->' for x in result]
    print(new_items)

    for i in range(0,len(result)-1,2):
        if i==len(result)-2:
            PathLenght+=StartMatrix[result[i]-1][result[i+1]-1]
            PathLenght+=StartMatrix[result[i+1]-1][result[0]-1]
        else: PathLenght+=StartMatrix[result[i]-1][result[i+1]-1]
    print(PathLenght - 1)
    print("----------------------------------")


choice = 123
while(choice != 0):
    choice = int(input('1-пример 16х16.\n2-пример 5х5.\n3-вручную.\n0-выход\nНомер: '))
    if(choice == 1):
        rawMatrix = readFile('values16.txt')
        matrix = numpy.reshape(rawMatrix,(16, 16)).tolist()
        matrix = [[int(float(j)) for j in i] for i in matrix]
        n=16

        calculate(n, matrix)
    elif(choice == 2):
        rawMatrix = readFile('values5.txt')
        matrix = numpy.reshape(rawMatrix,(5, 5)).tolist()
        matrix = [[int(float(j)) for j in i] for i in matrix]
        n=5
        calculate(n, matrix)
    elif(choice == 3):
        matrix = []
        n = int(input('Введите размерность: '))
        for i in range(n): matrix.append(list(map(int, input().split())))
        calculate(n,matrix)
    elif(choice == 0):
        break
    else:
        print('Таког пункта меню не существует. Проверьте ввод...')
        




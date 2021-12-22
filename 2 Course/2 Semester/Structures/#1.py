import string
a = ord('а')
rusaplh = ''.join([chr(i) for i in range(a,a+32)])
latalph = sorted(set(string.ascii_lowercase))
numb = {1,2,3,4,5,6,7,8,9,0}
ch = int(input('Введите номер задания: '))
if ch == 1:
    l = set(input('Введите элементы множества через запятую: ').split(','))
    print(l)
elif ch == 2:
    first = input('Введите первое предложение: ').split(' ')
    second = input('Введите второе предложение: ').split(' ')
    result = set()
    for char in first:
        if char in second:
            result.add(int(char))
    print(result)
elif ch == 3:
    mn = set(input('Задайте множество элементов через запятую: ').split(','))
    resA = set()
    resB = set()
    resC = set()
    for x in mn:
        try:
            int(x)
            resC.add(int(x))
        except:
            pass
        if x in rusaplh:
            resA.add(x)
        elif x in latalph:
            resB.add(x)
    for x in rusaplh:
        if x in resA:
            print(x)
    for x in numb:
        if int(x) in resC:
            print(x)
    for x in latalph:
        if x in resB:
            print(x)




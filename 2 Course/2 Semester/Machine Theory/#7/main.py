import sys


def main(**args):
    n = int(input("Введите кол-во правил в грамматике: "))
    gram = {}
    for i in range(n):
        x = input('Введите правило:').split('->')
        gram[x[0]] = x[1].split('|')
    l = p = 0
    count = 0
    lp = 0
    # Проверка на 3 тип(праволинейная\леволинейная)
    for i in gram.keys():
        if len(i) == 1 and i.isupper():
            for j in gram[i]:
                count += 1
                for x in j:
                    if x.isupper() and j.index(x) == 0:
                        l += 1
                    elif x.isupper() and (j.index(x) == len(j) - 1):
                        p += 1
                    elif x.isupper() and (len([x for x in gram[i] if x.isupper()]) == 0):
                        lp += 1
        else:
            break
    if l == count and l != 0:
        print("3 тип - леволинейная")
        sys.exit()
    elif p == count and p != 0:
        print("3 тип - праволинейная")
        sys.exit()
    elif l == count - lp:
        print("3 тип - леволинейная")
        sys.exit()
    elif p == count - lp:
        print("3 тип - праволинейная")
        sys.exit()

    # Проверка на 2 тип(КС)
    ks = 0
    for i in gram.keys():
        if len(i) == 1 and i.isupper():
            ks += 1
        else:
            break
    if ks == len(gram.keys()):
        print("Тип 2 - контекстно-свободный язык")
        sys.exit()

    # Проверка на 3 тип(КЗ и Неукорачивающие)
    nk = 0
    for i in gram.keys():
        for j in gram[i]:
            if len(i) <= len(j):
                nk += 1
            else:
                break

    kz = 0
    for i in gram.keys():
        vr = [x for x in i if x.isupper()]
        for j in vr:
            k = i.split(j)
            for z in k:
                if z in gram[i] and (k.index(z) == gram[i].index(z) or k.index(z) >= 0):
                    kz += 1
                else:
                    break
    if kz == count and nk == count:
        print("1 тип - контекстно-зависимый язык и неукорачивающий")
        sys.exit()
    elif nk == count and kz != count:
        print("Тип 1 - неукорачивающий язык и не КЗ")
        sys.exit()
    elif kz == count and nk != count:
        print("Тип 1 - КЗ и не неукорачивающий")
        sys.exit()

    print("Тип 0")


if __name__ == "__main__":
    main()
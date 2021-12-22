def LinearSearch(lys, element):
    count = 0
    for i in range(len(lys)):
        if lys[i] == element:
            count += 1
            return i, count
        count += 1
    count += 1

    return (-1, count)


def BinSearchVirt(li, x):
    count = 0
    i = 0
    j = len(li) - 1
    while i < j:
        m = int((i + j) / 2)
        if x > li[m]:
            i = m + 1
        else:
            j = m
        count += 1
    if li[j] == x:
        return j, count
    else:
        return None


def linear_search_3(lst, x):
    lst.append(x)
    i = 0
    while lst[i] != x:
        print(i)
        i += 1
    return i if i < len(lst) - 1 else None

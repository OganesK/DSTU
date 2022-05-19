import itertools

c = 1
while c < 4:
    for combo in itertools.product(" AB", repeat=c):
        string1 = "".join(combo)
        for i in range(c + 1):
            for combo2 in itertools.product(" АВ", repeat=i):
                string3 = string1 + "AA" + "".join(combo2)
                string2 = string1 + "BB" + "".join(combo2)
                print(string2)
                print(string3)
    c += 1

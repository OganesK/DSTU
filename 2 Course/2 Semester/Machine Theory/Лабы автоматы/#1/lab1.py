import sys
def main():
    ch = int(input("1 - вычисление номера слова; 2 - восстановление слова из номера: "))
    n = int(input("Введите кол-во символов в алфавите: "))
    s = input('Введите элементы алфавита через запятую: ').split(',')
    alph = list(dict.fromkeys(s))
    if ch == 1:
        word = input('Введите слово, номер которого необходимо вычислить: ')
        answ = 0
        k = len(word)
        for i in range(len(word)):
            if word[i] in alph:
                answ += len(alph)**(k-1) * (alph.index(word[i])+1)
                k -= 1
            else:
                print("В слове есть буквы, которых нет в алфавите")
                sys.exit()
        print(answ)
    if ch == 2:
        N = int(input("Введите номер слова, которое необходимо восстановить: "))
        word = ''
        r = int
        while(N > 0 ):
            r = N % len(alph)
            if(r==0):
                r = len(alph)
                N -= r
            word += alph[int(r)-1]
            N = N//len(alph)
        print(list(reversed(word)))

if __name__ == '__main__':
    main()

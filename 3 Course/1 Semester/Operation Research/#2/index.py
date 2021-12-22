import transport
import os

def cls():
    os.system('cls' if os.name=='nt' else 'clear')



def solve():
    inputVariablesCount = int(input('Введите колличество переменных в функции: '))
    inputMainFuncion = input('Введите главную функцию: ')
    inputRestrictionsCount = int(input('Введите количество ограничений: '))

    resctrictions = []
    for i in range(inputRestrictionsCount):
        x = input('Введите ограниченичение #%s'.format(i))
        resctrictions.append(x)
    transport.solveTransport(inputVariablesCount, inputMainFuncion, resctrictions)

choice = 100
while(choice != 0):
    choice = int(input('\n1.Тестовый пример.\n2.Решить задачу ЛП.\n0.Выйти \n'))
    if(choice == 1):
        cls()
        rest = [
            '2*x1 + 3*x2+7*x3 <= 480',
            '7*x1+7*x2+ 7*x3<=960',
            '8*x1+2*x2+7*x3<=1000',
        ]
        transport.solveTransport(3, '17*x1 + 43*x2 + 62*x3', rest);
    elif(choice == 2):
        cls()
        solve()
    else:
        break

solve()
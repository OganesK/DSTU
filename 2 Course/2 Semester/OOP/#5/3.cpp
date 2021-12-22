//Создайте две функции для решения одной и той же задачи: динамическое создание и заполнение случайными числами массива 
//указанного размера. Первая функция должна использовать возвращаемое значение для передачи пользователю сгенерированного
// массива, а вторая должна передавать массив через один из своих аргументов. Стандартная библиотека Си содержит функции 
//int rand() и void srand(unsigned) для генерации псевдослучайных чисел (прототипы в файле stdlib.h).

#include <iostream>
#include <time.h>
#include <stdlib.h>
#include <iomanip>
using namespace std;

int *arr1(int n)//����� �� �������
{
    srand(time(NULL));
    int *arr = new int[n];

    for (int i = 0; i < n; i++)
        arr[i] = rand() % 50 - 25;
    return (arr);
}

void arr2(int **arr2, int n)//����� �� ������
{
    srand(time(NULL));
    for (int i = 0; i < n; i++) {
       *(*arr2 + i) = rand() % 100 - 50;
    }
}

void printarray(int *arr, int n)
{
    for (int i = 0; i < n; i++)
        cout << " " << *arr++;
    cout << endl;
}

int main()
{
    setlocale(LC_ALL, "Russian");
    int n = 0;
    cout << "size mas: " << endl;
    cin >> n;
    int *mas = NULL;

    mas = arr1(n);
    cout << "mas 1: ";
    printarray(mas, n);

    arr2(&mas, n);
    cout << "mas 2: ";
    printarray(mas, n);
    return 0;
}

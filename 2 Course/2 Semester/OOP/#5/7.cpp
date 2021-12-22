//ЗАДАНИЕ 7. Создайте текстовый, основанный на использовании меню, 
//интер-фейс пользователя для тестирования функций, содержащих алгоритмы решения заданий 1-4. Используйте массивы указателей.

#include <iostream>
#include <time.h>
#include <stdlib.h>
#include <iomanip>
#include <string>
#include <cstdio>

using namespace std;

void swp(int *ptrx, int *ptry)
{
    int c;
    c = *ptrx;
    *ptrx = *ptry;
    *ptry = c;
}

void z2()
{
    int x, y;
    cout << "Enter Number x: " << endl;
    cin >> x;
    cout << "Enter Number y: " << endl;
    cin >> y;
    swp(&x, &y);
    cout << "Namber x: " << x << endl;
    cout << "Number y: " << y << endl;
}

int *arr11(int n)
{
    int i;
    srand(time(NULL));
    int *arr = new int[n];
    for (i = 0;i < n;i++)
        arr[i] = rand() % 50 - 25;
    return (arr);
}

void arr22(int **arr2, int n)
{
    int i;
    srand(time(NULL));
    *arr2 = new int[n];
    for (i = 0;i < n;i++) {
        *(*arr2 + i) = rand() % 100 - 50;
    }
}

void printarray1(int *arr, int n)
{
    for (int i = 0;i < n;i++) cout << " " << *arr++;
    cout << endl;
}

void z3()
{
    int n = 0;
    cout << "Enter the size of the arrays : " << endl;
    cin >> n;
    int *mas1 = NULL;
    int *mas2 = NULL;
    mas1 = arr11(n);
    arr22(&mas2, n);
    cout << "Array 1: ";
    printarray1(mas1, n);
    cout << "Array 2: ";
    printarray1(mas2, n);
}

string fun(string str, string ch)
{
    string strmas[50], strtem;
    int k = 0, j = 0, l = 0, h = 0, h1 = 0;
    while (str[k] != '\0') {
        l = 0;
        h = 0;
        while (ch[l] != '\0') {
            if (str[k] == ch[l]) {
                h++;
                k++;
            }
            l++;
        }
        if ((h > 0) && (h1 == 0))
        {
            h1 = h;
            j++;
        }

        if (h == 0) {
            h1 = h;
            strmas[j] += str[k];
            k++;
        }
    }
    strtem = "";

    for (int i = j; i >= 0; i--) {
        strtem += strmas[i];
        strtem += " ";
    }
    return strtem;
}

void z4(){
    string str, ch;
    cout<<"Enter string "<<endl;
    cin>>str;
    cout<<"Enter punctuation marks "<<endl;
    cin>>ch;
    cout << fun(str, ch) << endl;
}

void (*menu[])() = {z2, z3, z4};

int main()
{
    int i = 1;
    while (i != 3)
    {
        cout << " 0) First task" << endl;
        cout << " 1) Second task" << endl;
        cout << " 2) Third task" << endl;
        cout << " 3) Exit" << endl;
        cin >> i;

        menu[i]();
    }
    return 0;
}

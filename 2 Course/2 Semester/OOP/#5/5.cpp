//ЗАДАНИЕ 5. Напишите универсальную функцию для нахождения среднего гео-метрического
// отрицательных элементов матриц с произвольным числом строк и столбцов. Напишите 
//программу-тест с промежуточной конструкцией, позволяющей передавать в функцию двумерные массивы.

#include <iostream>
#include <iomanip>
#include <time.h>
#include <cmath>
#include <stdlib.h>
using namespace std;

float gen(int **ptrarr, int n, int m)
{
    int k = 0;
    float pr = 1;
    float sg;
    for (int i = 0; i < n; i++)
        for (int j = 0; j < m; j++)
        {
            if (ptrarr[i][j] < 0)
            {
                pr *= ptrarr[i][j];
                k++;
            }
        }
    if (pr < 0)
        sg = -pow(abs(pr), 1. / k);
    else
        sg = pow(pr, 1. / k);
    return sg;
}


int main(){
    srand(time(NULL));

    int n = 0, m = 0,i = 0, j = 0;
    float sg;
    cout << "Enter the number of lines: " << endl;
    cin >> n;
    cout << "Enter the number of columns: " << endl;
    cin >> m;

    int **ptrarr = new int*[n];

    for (i = 0; i < n; i++) ptrarr[i] = new int[m];

    for (i = 0; i < n; i++)
        for (j = 0; j < m; j++) ptrarr[i][j] = rand() % 15 - 5;

        cout << "Array: " << endl;
        for (int i = 0; i < n; i++)
        {
            for (int j = 0; j < m; j++)
            cout << setw(4) << ptrarr[i][j] << "   ";
            cout << endl;
        }
        sg = gen(ptrarr, n, m);
        cout << "Geometric mean negative elements of the array : " << sg << endl;
        return 0;
}

//Объявить одномерный массиви заполнить его случайными числами. Записать в файл все положительные элементы массива и их сумму.

#include<iostream>
#include<fstream>
# include <time.h>
#include <cstdlib>
#include <stdlib.h>

using namespace std;

int main3()
{
	setlocale(LC_CTYPE, "Russian");
	srand(time(NULL));
	int a[10], i, sum = 0;
	for (i = 0; i < 10; i++) {
		a[i] = rand() % 100 - 50;
		cout << a[i] << " ";
	}
	cout << endl;
	ofstream pch("1.txt");
	for (i = 0; i < 10; i++) {
		if (a[i] > (-1))
		{
			pch << a[i] << " ";
			sum += a[i];
		}
	}
	pch << sum;
	pch.close();

	system("pause");
	return 0;


}
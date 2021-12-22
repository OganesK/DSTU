/*Файл f1 содержит последовательность целых положительных чисел в 10-й системе счисления.  
Вывести на экран содержимое файла f1. Записать в файл f2 четные числа из файла f1 в 8-ой системе счисления.  
Записать в файл f3 нечетные числа из файла f1 в 16-ой системе счисления. Вывестифайлы f2 и f3на экран
(при этом выводится  10  символов,  для  продолжения  вывода  пользователь  должен  нажать букву ―n‖)
*/

#include<iostream>
#include<fstream>
#include <cstdio>
#include <cstdlib>
#include <conio.h>
using namespace std;

int main4()
{
	int key;
	int count = 0;
	setlocale(LC_CTYPE, "Russian");
	char c; int x;
	ifstream f1("1.txt");
	ofstream f2("2.txt");
	ofstream f3("3.txt");
	int kol;
	while (!f1.eof())
	{
		f1 >> x;
		cout << x << " ";

		if (x % 2 == 0)
		{
			f2 << oct << x << ' ';
		}
		else
		{
			f3 << hex << x << ' ';
		}

	}
	f1.close();
	f2.close();
	f3.close();

	ifstream f22("2.txt");
	ifstream f33("3.txt");
	cout << endl << "2: ";
	int i = 0;
	while (!f22.eof())
	{
		f22 >> oct >> x;
		if (f22) {
			cout << oct << x << ' ';
			if (x<10 || x>-10) {
				count++; count++; count++;
			}
			else {
				count++; count++;
				count++; count++;
			}
			if (count >= 10)
			{
				key = _getch();
				if (key == 110)
				{
					count = 0;
					continue;
				}
				else { break; }
			}
		}
	}
	cout << endl << "3: ";
	int j = 0;
	count = 0;
	while (!f33.eof())
	{

		f33 >> hex >> x;
		if (f33) {
			cout << hex << x << ' ';
			if (x<10 || x>-10) {
				count++; count++; count++;
			}
			else {
				count++; count++;
				count++; count++;
			}
			if (count >= 10)
			{
				key = _getch();
				if (key == 110)
				{
					count = 0;
					continue;
				}
				else { break; }
			}
		}
	}
	cout << endl;
	f22.close();
	f33.close();

	system("pause");
	return 0;

}
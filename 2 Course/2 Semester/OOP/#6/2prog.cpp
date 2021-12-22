//Файл  содержит  как  русские,  английские  буквы  и  другие  символы. 
//Написать программу, которая русские буквы из данного файла переписывает в отдельный новый файл, английские буквы в другой файл

#include<iostream>
#include<fstream>
#include <cstdio>
#include <cstdlib>

using namespace std;

int main2()
{
	setlocale(LC_CTYPE, "Russian");
	char c;
	int i = 0;
	ifstream fin("sourse.txt");
	ofstream rus("rus.txt");
	ofstream eng("eng.txt");
	ofstream num("num.txt");
	while (1)
	{
		fin >> c;
		if (fin) {
			if ((c >= 'а' && c <= 'я') || (c >= 'А' && c <= 'Я'))
			{
				rus << c;
			}
			if ((c >= 'a' && c <= 'z') || (c >= 'A' && c <= 'Z'))
				eng << c;
			if ((c >= '0' && c <= '9'))
			{
				num << c;
			}
		}
		else break;
	}
	fin.close();
	rus.close();
	eng.close();
	system("pause");
	return 0;
}

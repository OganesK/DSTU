//Напишите  подпрограмму,  подсчитывающую  количество  символов  в  указанном файле, открыв 
//его вначале как текстовый, затем как двоичный. В текстовом режиме нужно посчитать также число строк файла.

#include<iostream>
#include<fstream>
#include <cstdio> 
#include <cstdlib>

using namespace std;

int main1()
{
	setlocale(LC_CTYPE, "Russian");
	char c;
	int kc = 0, ks = 1, ksb = 0, i;
	ifstream fin("1.txt");
	while (!fin.eof())
	{
		fin >> noskipws >> c;
		if (fin) {
			kc++;
			if (c == '\n') ks++;
		}
	}
	cout << "" << kc << endl;
	cout << "" << ks << endl;
	fin.close();
	ifstream fan("1.txt", ios_base::binary);
	while (!fan.eof())
	{
		fan >> noskipws >> c;
		if (fan)
			ksb++;
	}
	cout << "" << ksb << endl;
	fan.close();
	
	system("pause");
	return 0;
}
//ЗАДАНИЕ  5.Найти  количество  элементов  одномерного  массива  А(10),  в  значении  которых установлен  пятый  бит.  
//После  этого  у  всех  элементов  массива  инвертировать  3  бит  и  
//новые значения записать в массив В(10). Вывести в шестнадцатеричном виде массивы А и В

#include<iostream>;
#include<iomanip>;
#include<cstdlib>;
using namespace std;

int main()
{
	setlocale(LC_ALL, "Russian");
	int a[10], b[10], i = 0, n = 0;

	cout << "������ : " << endl;
	for (i = 0; i < 10; i++)
	{
		a[i] = rand() % 150;
		cout << a[i] << ' ';
	}

	cout << endl << "����������������� �������� ������� a  : " << endl;
	for (i = 0; i < 10; i++)
	{
		cout << hex << a[i] << ' ';
	}

	for (i = 0; i < 10; i++)
	{
		if (a[i] & 32)
			n++;
	}
	cout << endl << "����������� ��������� " << n << endl;


	cout << "����������������� ������ b  : " << endl;
	for (i = 0; i < 10; i++)
	{
		b[i] = a[i] ^ 8;
		cout << hex << b[i] << ' ';
	}

	return 0;
}

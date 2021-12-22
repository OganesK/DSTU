//Разработайте   динамическую   структуру«стек»для   решения   задачи.
//Последовательность чисел Фибоначчи задается по закономерности: f1 = 1, f2 = 1, ..., fn = fn-1 + fn-2. 
//Распечатайте n чисел Фибоначчи в следующем порядке: сначала все  четные,  затем  все  нечетные  элементы.Все  получаемые  числа  Фибоначчи хранятся в стеке. 

#include <iostream>
#include <iomanip>
#include <time.h>

using namespace std;

struct Node
{
	int Value;
	Node* Next;
};


Node* STEK(Node* Head, int n)
{
	int cache1 = 1, cache2 = 1;
	for (int i = 1; i <= n; i++)
	{
		Node* Vsp = new Node;

		if (i == 1 || i == 2)
		{
			Vsp->Value = 1;
			Vsp->Next = Head;
			Head = Vsp;
		}
		else
		{
			Vsp->Value = cache1 + cache2;
			cache1 = cache2;
			cache2 = Vsp->Value;
			Vsp->Next = Head;
			Head = Vsp;
		}

	}
	return Head;
}

void print(Node* Head, int n)
{
	int* arr = new int[n];
	int j = 0;
	Node* Vsp;
	cout << "Последовательность Фибоначчи из " << n << " элементов: " << endl;

	for (int i = 1; i <= n; i++)
	{
		if (Head->Value % 2 == 0) cout << Head->Value << "  ";
		else
		{
			arr[j] = Head->Value;
			j++;
		}

		Vsp = Head;
		Head = Head->Next;
		delete Vsp;
	}

	for (int i = 0; i < j; i++) cout << arr[i] << "  ";
	cout << endl;
}

int main() {
	setlocale(LC_ALL, "rus.1251");
	int n = 0;
	cout << "Введите колчество чисел Фибоначи: " << endl;
	cin >> n;
	Node* Head = new Node;
	Head = STEK(Head, n);
	print(Head, n);
	return 0;
}

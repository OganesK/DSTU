//Реализовать  представление  и  основные  операции  для  множеств.  
//Помимо добавления,  удаления,  получения  (и  т.д.)    элемента  множества,  реализовать операции объединения и пересечения множеств.

#include <iostream>
#include <stdlib.h>
#include <string>

using namespace std;

struct Node
{
	int Value;
	Node* Next, * Prev;
};

void AddEL(Node** First, Node** Last, int val)
{
	Node* Vsp = new Node, * Tmp;
	int k = 0;
	Vsp->Value = val;
	Vsp->Next = NULL;
	if (!*First)
	{
		Vsp->Prev = NULL;
		*First = Vsp;
		*Last = Vsp;
	}
	else
	{
		Tmp = *First;
		while (Tmp != NULL)
		{
			if (Tmp->Value == Vsp->Value) k++;

			if (Tmp->Next == NULL && k == 0)
			{
				Vsp->Prev = *Last;
				(*Last)->Next = Vsp;
				*Last = Vsp;
			}
			Tmp = Tmp->Next;
		}
	}

}

void DelEL(Node** First, Node** Last, int val)
{
	Node* Vsp = *First, * Tmp;
	if ((*First)->Value == val && (*First)->Next != NULL)
	{
		*First = (*First)->Next;
		(*First)->Prev = NULL;
		delete(Vsp);
		return;
	}
	else if ((*First)->Next == NULL && (*First)->Value == val)
	{
		(*First)->Next = NULL;
		*First = NULL;
		delete* First;
		return;
	}

	if ((*Last)->Value == val)
	{
		Tmp = *Last;
		*Last = (*Last)->Prev;
		(*Last)->Next = NULL;
		delete Tmp;
		return;
	}

	Tmp = *First;

	while (Tmp != NULL)
	{
		Node* Tmp2;
		if (Tmp->Value == val)
		{
			Tmp2 = Tmp;
			Tmp2->Prev->Next = Tmp->Next;
			Tmp2->Next->Prev = Tmp->Prev;
			delete Tmp;
			return;
		}
		Tmp = Tmp->Next;
	}
}

void PrintMN(Node* First)
{
	Node* Vsp = First;
	if (Vsp == NULL)cout << "Множество пустое!" << endl;
	else
	{
		while (Vsp != NULL)
		{
			cout << Vsp->Value << "  ";
			Vsp = Vsp->Next;
		}
		cout << endl;
	}
}

void Comb(Node* First1, Node* First2)
{
	Node* Tmp1 = First1, * Tmp2 = First2, * Tmp;
	int arr[100], j = 0, k = 0;

	while (Tmp1)
	{
		k = 0;
		for (int i = 0; i < j; i++) if (arr[i] == Tmp1->Value) k++;
		if (k == 0)
		{
			arr[j] = Tmp1->Value;
			j++;
		}
		Tmp1 = Tmp1->Next;
	}

	while (Tmp2)
	{
		k = 0;
		for (int i = 0; i < j; i++) if (arr[i] == Tmp2->Value) k++;
		if (k == 0)
		{
			arr[j] = Tmp2->Value;
			j++;
		}
		Tmp2 = Tmp2->Next;
	}

	for (int i = 0; i < j; i++) cout << arr[i] << "  ";

	cout << endl;
}

void Peres(Node** First1, Node** First2)
{
	Node* Tmp1 = *First1, * Tmp2 = *First2, * Tmp;
	int arr[100], j = 0, k = 0;

	while (Tmp1)
	{
		Tmp2 = *First2;

		while (Tmp2)
		{
			if (Tmp2->Value == Tmp1->Value)
			{
				arr[j] = Tmp1->Value;
				j++;
			}

			Tmp2 = Tmp2->Next;
		}

		Tmp1 = Tmp1->Next;
	}

	for (int i = 0; i < j; i++) cout << arr[i] << "  ";

	cout << endl;
}

int main() {
	setlocale(LC_CTYPE, "rus");

	Node* First1 = NULL, * First2 = NULL, * Last1 = NULL, * Last2 = NULL, * Com = NULL;
	int n = 0, val = 0;

	cout << "1. Добавление элемента в множество №1" << endl;
	cout << "2. Добавление элемента в множество №2" << endl;
	cout << "3. Удаление элемента из множества №1" << endl;
	cout << "4. Удаление элемента из множества №2" << endl;
	cout << "5. Вывод элементов множества №1" << endl;
	cout << "6. Вывод элементов множества №2" << endl;
	cout << "7. Объединение множеств №1 и №2" << endl;
	cout << "8. Пересечение множеств №1 и №2" << endl;
	cout << "0. Выход" << endl;

	do {
		cout << "Выбранное действие: " << endl;
		cin >> n;
		switch (n)
		{
		case 1:
			cout << "Введите элемент множества №1: " << endl;
			cin >> val;
			AddEL(&First1, &Last1, val);
			cout << "Элемент добавлен" << endl;
			break;

		case 2:
			cout << "Введите элемент множества №2: " << endl;
			cin >> val;
			AddEL(&First2, &Last2, val);
			cout << "Элемент добавлен" << endl;
			break;

		case 3:
			cout << "Введите элемент для удаления из множества №1: " << endl;
			cin >> val;
			DelEL(&First1, &Last1, val);
			cout << "Удалено!" << endl;
			break;
		case 4:
			cout << "Введите элемент для удаления из множества №2: " << endl;
			cin >> val;
			DelEL(&First2, &Last2, val);
			cout << "Удалено!" << endl;
			break;
		case 5:
			cout << "Элементы множества №1: " << endl;
			PrintMN(First1);
			cout << endl;
			break;
		case 6:
			cout << "Элементы множества №2: " << endl;
			PrintMN(First2);
			cout << endl;
			break;

		case 7:
			cout << "Объединение: " << endl;
			Comb(First1, First2);
			break;

		case 8:
			cout << "Пересечение: " << endl;
			Peres(&First1, &First2);
			break;

		case 0:
			break;

		default: cout << "Ошибка!" << endl; break;
		}
	} while (n != 0);
	return 0;
}



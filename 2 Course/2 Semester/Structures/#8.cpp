#include "stdafx.h"
#include <cstdlib>
#include <iostream>
using namespace std;

typedef struct Node {
	int value;
	struct Node *next;
} Node;

void push(Node **head, int data) {
	Node *tmp = (Node*)malloc(sizeof(Node));
	tmp->value = data;
	tmp->next = (*head);
	(*head) = tmp;
}

int pop(Node **head) {
	Node* prev = NULL;
	int val;
	if (head == NULL) {
		exit(-1);
	}
	prev = (*head);
	val = prev->value;
	(*head) = (*head)->next;
	free(prev);
	return val;
}
void insert(Node *head, unsigned n, int val)//вставить 
{
	unsigned i = 0;
	Node *tmp = NULL;

	while (i < n && head->next) {
		head = head->next;
		i++;
	}
	tmp = (Node*)malloc(sizeof(Node));
	tmp->value = val;
	
	if (head->next) {
		tmp->next = head->next;

	}
	else {
		tmp->next = NULL;
	}
	head->next = tmp;
}

Node* getNth(Node* head, int n) {
	int counter = 0;
	while (counter < n && head) {
		head = head->next;
		counter++;
	}
	return head;
}

int List_Size(Node ** head)
{
	Node* prev = NULL; 
	int counter=1;

		while ((*head)->next)
		{
			prev = (*head);
			(*head) = (*head)->next;
			counter++;		
		}
		return counter;	
}

bool isEmpty(Node * head)
{
	if (head)
		return false;
	else
		return true;
}

int deleteNth(Node **head, int n) {
	if (n == 0) {
		return pop(head);
	}
	else {
		Node *prev = getNth(*head, n - 1);
		Node *elm = prev->next;
		int val = elm->value;
		prev->next = elm->next;
		free(elm);
		return val;
	}
}


void deleteList(Node **head) {
	Node* prev = NULL;
	while ((*head)->next) {
		prev = (*head);
		(*head) = (*head)->next;
		free(prev);
	}
	free(*head);
}


void fromArray(Node **head, int *arr, size_t size) {
	size_t i = size - 1;
	if (arr == NULL || size == 0) {
		return;
	}
	do {
		push(head, arr[i]);
	} while (i-- != 0);
}

int* toArray(const Node *head) {
	int leng = sizeof(head);
	int *values = (int*)malloc(leng*sizeof(int));
	while (head) {
		values[--leng] = head->value;
		head = head->next;
	}
	return values;
}

void print_List(const Node *head) {
	while (head) {
		printf("%d ", head->value);
		head = head->next;
	}
	printf("\n");
}


int main()
{
	setlocale(LC_ALL, "Russian");
	Node* head = NULL;

	int arr[] = { 1,2,3,4,5,6,7,8,9,10 };
	fromArray(&head, arr, 10);

	int key, value,pos;
	do
	{

		cout << "1. Добавить" << endl;
		cout << "2. Удалить" << endl;
		cout << "4. Размер" << endl;
		cout << "5. Показать список" << endl;
		cout << "6. Очистить список" << endl;
		cout << "0. Выход\n " << endl;
		cout << "Команда: "; cin >> key;
		switch (key)
		{
		case(1) :
		{

			cout << "Введите значение:"; cin >> value;
			cout << endl << "Введите позицию: "; cin >> pos;
			insert(head,pos, value);

		} break;
		case(2) :
		{
			if (isEmpty(head)) cout << "Очередь пуста" << endl;
			else
			{
				cout << endl << "Введите позицию: "; cin >> pos;
				deleteNth(&head, pos);
			}
		} break;
		
		case(4) :
		{
			cout << "Размер очереди: " << List_Size(&head) << endl;
		} break;
		case(5) :
		{
			print_List(head);
		} break;
		case(6) :
		{
			deleteList(&head);
		} break;
		
		case 0: break;
		default: cout << endl << "Ошибка\n\n";
			break;
		}
	} while (key != 0);

	system("pause");
    return 0;
}
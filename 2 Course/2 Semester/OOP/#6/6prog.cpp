/*Создайте  текстовое  меню  для  управления  информацией  о  спортивном 
соревновании. Должно поддерживаться следующее поведение: создание таблицы результатов
,  отображение  таблицы,  изменение  таблицы,  сохранение  таблицы  в файле, считывание таблицы из файла. 
Таблица должна содержать  информацию, указанную в предыдущем задании.
*/

#define _CRT_SECURE_NO_WARNINGS
#include<iostream>
#include <stdio.h> 
#include <stdlib.h>
#include <iomanip>

using namespace std;
#pragma pack (push, 1)
struct team
{
	char name[10];
	int win, lose, draw, points;

};
#pragma pack ( pop )
typedef
void(*FPP)();
int n;
team* myteam;
FILE* tb = fopen("C:\\Users\\Evgesha\\Desktop\\OOP 6lab\\6.6lab ++\\table.txt", "wb");
team* Create(int n) {
	team* myteam = new team[n];
	int i;
	for (i = 0; i < n; i++) {
		cout << "" << endl;
		cin >> myteam[i].name;
		cout << "" << endl;
		cin >> myteam[i].win;
		cout << "" << endl;
		cin >> myteam[i].lose;
		cout << "" << endl;
		cin >> myteam[i].draw;
		myteam[i].points = myteam[i].win * 3 + myteam[i].draw * 1;
	}
	return myteam;
}
void Create1() {
	cout << "?" << endl;
	cin >> n;
	myteam = Create(n);
}
void Print(team* myteam, int n) {
	int i;
	cout << "+-----------+-----+------+------+--------+" << endl;
	cout << "|" << setw(8) << "NAME" << setw(5) << "| " << "WIN" << " | " << "LOSE" << " | " << "DRAW" << " | " << "POINTS" << " |" << endl;
	cout << "+-----------+-----+------+------+--------+" << endl;
	for (i = 0; i < n; i++) {
		cout << "|" << setw(8) << left << myteam[i].name << setw(4) << right << "|" << setw(3) << myteam[i].win << setw(3) << "|" << setw(4) << myteam[i].lose << setw(3) << "|" << setw(4) << myteam[i].draw << setw(3) << "|" << setw(5) << myteam[i].points << setw(4) << "|" << endl;
		cout << "+-----------+-----+------+------+--------+" << endl;
	}
}
void Print1() {
	Print(myteam, n);
}

void Change(team* myteam, char* st, int pos, int n) {
	int g, i;
	cout << "?" << endl;
	switch (pos)
	{
	case 1:
	{
		cin >> g;
		for (i = 0; i < n; i++) {
			if (strcmp(myteam[i].name, st) == 0) {
				myteam[i].win = g;
				myteam[i].points = myteam[i].win * 3 + myteam[i].draw * 1;
			}

		}
		break;
	}
	case 2:
	{
		cin >> g;
		for (i = 0; i < n; i++) {
			if (strcmp(myteam[i].name, st) == 0) {
				myteam[i].lose = g;
				myteam[i].points = myteam[i].win * 3 + myteam[i].draw * 1;
			}
		}
		break;
	}
	case 3:
	{
		cin >> g;
		for (i = 0; i < n; i++) {
			if (strcmp(myteam[i].name, st) == 0) {
				myteam[i].draw = g;
				myteam[i].points = myteam[i].win * 3 + myteam[i].draw * 1;
			}

		}
		break;
	}
	default:
	{
		cout << "!!" << endl;
		break;
	}
	}
}
void Change1() {
	char st[10];
	int pos;

	cout << "?" << endl;
	cin >> st;
	cout << "?" << endl;
	cin >> pos;
	Change(myteam, st, pos, n);
}

void saveff(team* pr, FILE* tb, int n)
{
	tb = fopen("table.txt", "wb");
	fwrite(pr, sizeof(team), n, tb);
	fclose(tb);
}

void loadff(team* pr, FILE* tb, int n)
{
	tb = fopen("table.txt", "rb");
	fread(pr, sizeof(team), n, tb);
	fclose(tb);
}
void saveff1() {
	saveff(myteam, tb, n);
}

void loadff1() {
	loadff(myteam, tb, n);
}

void Exit()
{
	exit(0);
}

int main()
{
	setlocale(LC_CTYPE, "Russian");
	FPP fff[]{ Create1,Print1,Change1,saveff1,loadff1,Exit };
	int i = 1;
	while (i)
	{
		cout << " 1) �������� �������" << endl;
		cout << " 2) ����� �������" << endl;
		cout << " 3) ��������� �������" << endl;
		cout << " 4) ���������� ������� � ����" << endl;
		cout << " 5) �������� ������� �� �����" << endl;
		cout << " 6) �����" << endl;
		cin >> i;
		if ((i < 1) || (i > 6))
			cout << "�� ����� ����������� ������!!" << endl;
		else
			fff[i - 1]();

	}


	return 0;
}
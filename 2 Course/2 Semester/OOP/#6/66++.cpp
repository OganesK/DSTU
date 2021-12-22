#define _CRT_SECURE_NO_WARNINGS
#include <iostream>
#include <stdio.h>
#include <stdlib.h>
#include <iomanip>
#include <cstring>
#include <fstream>

using namespace std;

#pragma pack (push, 1)
struct crew
{
	char name[10];
	int pb, por, nih, kb;

};
#pragma pack ( pop )

int n = 0;
crew *creww;
FILE *tb = fopen("C:\\Users\\Evgesha\\Desktop\\OOP 6lab\\6.6lab ++\\table.txt", "rt+");

crew* sozd(int n) {
	crew* creww = new crew[n];
	int i;
	for (i = 0; i < n; i++) {
		cout << "Введите название команды: ";
		cin >> creww[i].name;
		cout << "Введите количество побед: ";
		cin >> creww[i].pb;
		cout << "Введите количество поражений: ";
		cin >> creww[i].por;
		cout << "Введите количество ничьих: ";
		cin >> creww[i].nih;
		creww[i].kb = creww[i].pb + creww[i].nih;
	}
	cout << endl;
	return creww;
}

void sozd1() {
	cout << "Сколько команд в турнире?" << endl;
	cin >> n;
	creww = sozd(n);
}

void pechat(crew* creww, int n) {
	int i = 0;
	cout << setw(9) << "   Победы " << "Поражения " << "Ничьи " << "Баллы " << endl;
	cout << endl;

	for (i = 0; i < n; i++) {
		cout << setw(5) << left << creww[i].name << setw(9)
			<< creww[i].pb << setw(7) << creww[i].por
			<< setw(3) << setw(7) << creww[i].nih << setw(3)
			<< setw(8) << creww[i].kb << endl;
		cout << endl;
	}
}

void pechat1() {
	pechat(creww, n);
}

void izmen(crew* creww, char* st, int pos, int n) {
	int g = 0, i = 0;
	cout << "На что поменять?" << endl;
	switch (pos) {
	case 1: {
		cin >> g;
		for (i = 0; i < n; i++) if (strcmp(creww[i].name, st) == 0) { creww[i].pb = g; creww[i].kb = creww[i].pb + creww[i].nih; }
	} break;
	case 2: {
		cin >> g;
		for (i = 0; i < n; i++) if (strcmp(creww[i].name, st) == 0) { creww[i].por = g; }
	} break;
	case 3: {
		cin >> g;
		for (i = 0; i < n; i++) if (strcmp(creww[i].name, st) == 0) { creww[i].nih = g; creww[i].kb = creww[i].pb + creww[i].nih; }
	} break;
	default: cout << "Вы ввели неверное поле!" << endl;
	}
}

void izmen1() {
	char st[10];
	int pos;
	cout << "В какую команду внести изменения?" << endl;
	cin >> st;
	cout << "Какое поле изменить?" << endl;
	cin >> pos;
	izmen(creww, st, pos, n);
}

/*void sf(crew *pr, FILE*tb,int n)
{
	tb = fopen("t.txt", "wb+");
	fwrite(pr, sizeof(crew), n, tb);
	fclose(tb);
}*/

void sf(crew *pr, int n)
{
	ofstream f("C:\\Users\\Evgesha\\Desktop\\OOP 6lab\\6.6lab ++\\table.txt");
	for (int i = 0; i < n; i++) {
		f << pr[i].name << ' ';
		f << pr[i].pb << ' ';
		f << pr[i].por << ' ';
		f << pr[i].nih << ' ';
		f << pr[i].kb << ' ';
	}
}

/*void lf(crew *pr, FILE*tb,int n)
{
	tb = fopen("t.txt", "rb");
	fread(pr, sizeof(crew), n, tb);
	fclose(tb);
}*/

void lf(crew *pr, int n) {
	ifstream f("C:\\Users\\Evgesha\\Desktop\\OOP 6lab\\6.6lab ++\\table.txt");
	for (int i = 0; i < n; i++) {
		f >> pr[i].name;
		f >> pr[i].pb;
		f >> pr[i].por;
		f >> pr[i].nih;
		f >> pr[i].kb;
	}
}

void lff(crew *pr, int n) {
	int i = 0, tmp = 0, k = 0;
	char s[10], c;
	FILE *f = fopen("C:\\Users\\Evgesha\\Desktop\\OOP 6lab\\6.6lab ++\\table.txt", "rt");
	cout << endl;
	cout << setw(8) << setw(5) << "   Победы " << "Поражения " << "Ничьи " << "Баллы " << endl;
	cout << endl;
	while (1) {
		if (feof(f))
		{
			fclose(f);
			break;
		}

		while (1) {
			c = fgetc(f);
			if (c == ' ')
			{
				s[i] = '\0';
				break;
			}
			else
			{
				s[i] = c;
				i++;
			}
		}
		i = 0;
		printf("%s", s);
		fscanf(f, "%d", &tmp);
		printf("%5d", tmp);
		fscanf(f, "%d", &tmp);
		printf("%8d", tmp);
		fscanf(f, "%d", &tmp);
		printf("%8d", tmp);
		fscanf(f, "%d", &tmp);
		printf("%6d\n", tmp);
		fgetc(f);
		fgetc(f);
		if (feof(f)) break;
		else
		{
			fseek(f, -1, SEEK_CUR);
			k++;
		}
	}
	n = ++k;
	pr = new crew[n];
	lf(pr, n);
}


/*void sf1(){
	sf(creww, tb, n);
}

void lf1(){
	 lf(creww, tb, n);
}*/

void sf1() {
	sf(creww, n);
}

void lf1() {
	lff(creww, n);
}

int main() {
	setlocale(0, "");
	void(*inter[])() = { sozd1, pechat1, izmen1, sf1, lf1 };
	int i = 1;
	while (i) {
		cout << " 1. Создать таблицу" << endl;
		cout << " 2. Вывести таблицу" << endl;
		cout << " 3. Изменить таблицу" << endl;
		cout << " 4. Сохранить таблицу в файл" << endl;
		cout << " 5. Загрузить таблицу из файла" << endl;
		cin >> i;
		inter[i - 1]();
	}
	return 0;
}

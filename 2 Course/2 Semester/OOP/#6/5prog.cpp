/*В  процессе  проведения  некоторого  спортивного  турнира  должна  сохраняться информация о показателях каждой
 участвующей в турнире команды. Информация включает  в  себя  название  команды,  количества  выигранных,  
 проигранных  и сведенных  вничью  партий,  а  также  общее  количество  набранных  баллов. Напишите  функции
для  сохранения  в  файле  и  считывания  из  файла  таблицы текущего состояния турнира.
*/

#define _CRT_SECURE_NO_WARNINGS
#include <io.h>
#include<iostream>
#include<fstream>
#include <stdio.h> 
#include <stdlib.h>

using namespace std;
#pragma pack (push, 1)
struct team
{
	char name[10];
	int win = 0, lose = 0, draw = 0, kb = 0;
};
#pragma pack ( pop )
void savef(team* pr, FILE* tb)
{
	tb = fopen("5.txt", "wb");
	fwrite(pr, sizeof(team), 2, tb);
	fclose(tb);
}

void loadf(team* pr, FILE* tb)
{
	tb = fopen("5.txt", "rb");
	fread(pr, sizeof(team), 2, tb);
	fclose(tb);
}

int main5()
{
	setlocale(LC_CTYPE, "Russian");
	FILE* tb = fopen("w5.txt", "wb");
	team a[2], b[2];
	int i;
	for (i = 0; i < 2; i++)
	{
		cout << "" << endl;
		cin >> a[i].name;
		cout << "" << endl;
		cin >> a[i].win;
		cout << "" << endl;
		cin >> a[i].lose;
		cout << "" << endl;
		cin >> a[i].draw;
		a[i].kb = a[i].win * 3 + a[i].draw * 1;
	}
	savef(a, tb);
	loadf(b, tb);
	for (i = 0; i < 2; i++)
	{
		cout << b[i].name << "      " << b[i].win << "      " << b[i].lose << "      " << b[i].draw << "      " << b[i].kb << endl;
	}
	system("pause");
	return 0;
}
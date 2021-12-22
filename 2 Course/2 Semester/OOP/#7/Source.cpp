#include <windows.h>
#include <iostream>
#include <conio.h>
using namespace std;

int move()
{
	int key;
	key = _getch();
	switch (key)
	{
	case 119: return  1;
	case 115: return  2;
	case 97: return  3;
	case 100: return  4;
	default: return 0;
		break;
	}
	return key;
}
int main()
{
	const int line = 20;
	const int col = 20;
	int Area[line][col];
	int key = 0;
	for (int i = 0; i < line; i++)
		for (int j = 0; j < col; j++)
		{
			Area[i][j] = 0;
			cout << Area[i][j] << " ";
			if (j == col - 1) cout << endl;
		}
	int i = 0, j = 0;
	while (1 < 2)
	{
		key = move();
		switch (key)
		{
		case 1:
		{
			system("cls");
			if (i != 0)
				i--;
			Area[i][j] = 1;
			for (int l = 0; l < line; l++)
				for (int k = 0; k < col; k++)
				{
					cout << Area[l][k] << " ";
					if (k == col - 1) cout << endl;
				}
		} break;
		case 2:
		{
			system("cls");
			if (i != line - 1)
				i++;
			Area[i][j] = 1;
			for (int l = 0; l < line; l++)
				for (int k = 0; k < col; k++)
				{
					cout << Area[l][k] << " ";
					if (k == col - 1) cout << endl;
				}
		}break;
		case 3:
		{
			system("cls");
			if (j != 0)
				j--;
			Area[i][j] = 1;
			for (int l = 0; l < line; l++)
				for (int k = 0; k < col; k++)
				{
					cout << Area[l][k] << " ";
					if (k == col - 1) cout << endl;
				}
		}break;
		case 4:
		{
			system("cls");
			if (j != col - 1)
				j++;
			Area[i][j] = 1;
			for (int l = 0; l < line; l++)
				for (int k = 0; k < col; k++)
				{
					cout << Area[l][k] << " ";
					if (k == col - 1) cout << endl;
				}
		}break;
		default: break;
		}
	}
	system("pause");
	return 0;
}


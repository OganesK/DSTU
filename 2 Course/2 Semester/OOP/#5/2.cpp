//ЗАДАНИЕ2.Написать  функцию,  которая  меняет  местами  значения  двух переменных x и y.

#include<iostream>
using namespace std;

void swp(int *ptrx, int *ptry)
{
	int c = 0;
	c = *ptrx;
	*ptrx = *ptry;
	*ptry = c;
}

int main()
{
	setlocale(LC_ALL, "Russian");
	int x = 0, y = 0;

	cout << "x: " ;
	cin >> x;
	cout << "y: " ;
	cin >> y;

	swp(&x, &y);
	cout << "x2: " << x << endl;
	cout << "y2: " << y << endl;
	return 0;
}

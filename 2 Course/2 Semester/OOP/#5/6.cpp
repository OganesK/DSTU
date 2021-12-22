//Напишите функцию, строящую график заданной функции на заданном интервале изменения аргумента.
#include <iostream>
#include <stdlib.h>
#include <math.h>
#include <iomanip>
#include <algorithm>

using namespace std;

double f(double x){
	return x*x; //f - ф-я парабола
}

void out(double x1, double x2, double(*f)(double), double sh) //x1, x2 - минимальное и максимальное значения функции на заданном интервале изменения х.
{
	double x = x1, y = 0, yMin = 0, yMax = 0;
	int yScr = 0, yScrMin = 0, yScrMax = 50; //yScrMin, xScrMax - пределы изменения "экранной" координаты yScr.

	yMin = yMax = f(x1);

	for (double i = x1 + sh; i <= x2; i += sh){
		if (f(i) < yMin) yMin = f(i);
		if (f(i) > yMax) yMax = f(i);
	}

	cout << yMin << ' ' << "Min" << endl;
	cout << yMax << ' ' << "Max" << endl;

	for (double i = x1; i <= x2; i += sh)
	{
		y = f(i);
		yScr = yScrMin + (y - yMin) / (yMax - yMin) * (yScrMax - yScrMin); //Масштабирование.
		int j = 0;
		for (j = 0; j < yScr; j++) cout << ' ';
		cout << '*';
		cout << endl;

	}
	return;
}

int main()
{
	out(-5, 5, f, 1);
	return 0;
}

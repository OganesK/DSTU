//ЗАДАНИЕ3.Написать программу вычисленияN!

#include<iostream>;
using namespace std;
int main()
{
	setlocale(LC_ALL, "Russian");
	int N,N1, n, i, f1,f;
	cout << "������� ��������" << endl;
	cin >> n;
	if (n < 0)
	{
		cout << "n<0";
	}
	else {
	N = 1;
	for (i = 2; i <= n; i++)
	{
		N = N * i;
	}
	cout << "f! = " << f << endl;
	N1 = 1;
	i = 0;
	do
	{
		i++;
		N1 = N1 * i;
	} while (i < n);
	cout << "N1! = " << N1 << endl;
	}
	return 0;
}

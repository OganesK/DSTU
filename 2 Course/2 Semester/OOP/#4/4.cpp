//ЗАДАНИЕ 4.Написать программу нахождения суммы квадратов всех нечетных чисел.

#include<iostream>;
#include<math.h>;
using namespace std;
int main()
{

	int a[10], q, n, sum=0 , y=0 ;

	cout << "Kol-vo el-ov :" << endl;
	cin >> n;
	cout << "Enter el-ty :" << endl;
	for (q = 0; q < n; q++)
	{
		cin >> a[q];
	}

	for (q = 0; q < n; q++)
	{
		if (a[q] < 0)

		{
			y++;
			a[q] = a[q]*a[q];
			sum = sum + a[q];
		}
	}
	cout << "Kol-vo nechot el-ov " << y << endl;
	cout << "Sum = " << sum << endl;


	return 0;
}

#include<iostream>;
#include<math.h>;
using namespace std;
int main()
{

	int a[10], q, n, sum , y ;

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
			a[q] = pow(a[q], 2);
			sum = (sum + a[q]);
		}
	}
	cout << "Kol-va nechot elov " << y << endl;
	cout << "Sum = " << sum << endl;


	return 0;
}

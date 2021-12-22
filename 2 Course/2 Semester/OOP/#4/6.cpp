//ЗАДАНИЕ6.Найти среднееа рифметическое положительных элементов главной  
//и побочной диагоналей матрицы действительных чиселА(5Х5).

#include <iostream>
 #include <stdlib.h>
  #include <time.h>
  #include <iomanip>

using namespace std;
int main()
{
    int i,j;
    int m=5;
    int n=4;
    int x[5][5];
    srand(time(0));
    cout<<"Array (5,5)"<<endl;
    for(i=0; i<5; i++)
    {
        for(j=0; j<5; j++)
        {
            x[i][j] =-5 + rand() % 15;
            cout<<x[i][j]<<"   ";
        }
        cout<<endl;
    }
    float sum = 0;
    float sum1 = 0;
    int a = 0;
    int b = 0;
    for (i=0;i<5;i++){
		if (i != n-i ){
                if (x[i][i] > 0)
                {
                    sum =sum + x[i][i];
                    a++;}


                if (x[i][n-i] > 0)
                {
                    sum1 =sum1 + x[i][n-i];
                    b++;

                }}
                else {
		  if (x[i][i]>0){
			a++;
		    sum =sum + x[i][i];
		  }
                }
        }
    sum+=sum1;
    cout<<endl<<sum;
    a+=b;
    cout<<endl<<a;
    sum=sum/a;
    cout<<endl<<sum;

    return 0;
}

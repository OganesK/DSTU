//ЗАДАНИЕ 7.Дана матрица целых чисел размера 5х9. Получить одномерный массив, состоящий из средних   
//арифметических   элементов   каждого   из   столбцов,   
//имеющих   четные   номера.   Найти максимальный элемент одномерного массива. 

#include <iostream>
#include <stdlib.h>
#include <time.h>
#include <iomanip>
using namespace std;

int main()
{
    int i,j,b,a;
    float p[4],sum,maxx;
    int x[5][9];
    cout<<"Array (5,9)"<<endl;
    srand(time(0));
    maxx=0;
    for(i=0; i<5; i++)
    {
        for(j=0; j<9; j++)
        {
            x[i][j] =-5 + rand() % 15;
            cout<<x[i][j]<<"  ";
        }
        cout<<endl;
    }
    cout<<endl;
a=0;
        for(j=0; j<9; j++)
        {
            b=5;
            sum=0;
            if (j%2==1){
                    for (i=0;i<5;i++){


                    sum +=x[i][j];

                }


        sum=sum/b;
        p[a]=sum;
        a++;
        cout<<sum<<"  ";
        }}
        cout<<endl;
        for (i = 0 ; i<4 ; i++)
			{
			cout<<p[i]<<"  ";
        }
        for (i = 0 ; i <= 4 ; i++)
			{
			if (p[i]>p[i+1]){
                p[i+1]=p[i];
			}
			else{
                maxx=p[i];
			}
        }
        cout<<endl;
        cout<<"Max element = "<<maxx<<endl;
    return 0;
}

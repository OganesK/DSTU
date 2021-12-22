#include <windows.h>
#include <locale>
#include <iostream>
#include <iomanip>
using namespace std;

int main()
{
    int i,j,b,a,sum,p[4];
    int m=5;
    int n=5;
    int x[5][9];

    cout<<"Array (5,9)"<<endl;
    for(i=1; i<=5; i++)
    {
        for(j=1; j<=9; j++)
        {
            x[i][j] = rand() % 10;
            cout<<x[i][j]<<" ";
        }
        cout<<endl;
    }
    for (i=1;i<=5;i++){
            a=1;
            b=0;
            sum=0;
            if (i%2==0){
        for(j=1; j<=5; j++)
        {
                if (x[i][j] > 0)
                {
                    sum =sum + x[i][j];
                    b++;
                }

        }
        sum=sum/b;
        p[a]=sum;
        a++;
        }
        }
        cout<<endl;
        for (i = 1 ; i<=4 ; i++)
			{
			cout<<p[i];
        }
    return 0;
}

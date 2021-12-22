#include <iostream>
#include <iomanip>
using namespace std;

int main()
{int i,j,k,l;
 float m;
 cout<<"Enter four numbers"<<endl;
    cin>>i;
    cin>>j;
    cin>>k;
    cin>>l;
    if (i>j+(k<<1))
        {
        m=((i>>4)+(j<<7)-17+(k<<1)-(l>>5));
    }
    else
    {
        m=((i>>4)+(j<<7)-17+(k<<1)+(l>>5));
    }
    cout<<"Result = "<<m<<endl;
    return 0;
}

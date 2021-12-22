//Объяснить
#include <iostream>

using namespace std;

int main()
{int i,j,k;
 i=5;
 j=12;
 k=7;
 k=(--i+2*j-k++,j--+i-k);
 cout<<"i="<<i<<endl;
 cout<<"j="<<j<<endl;
 cout<<"k="<<k<<endl;
 return 0;
}

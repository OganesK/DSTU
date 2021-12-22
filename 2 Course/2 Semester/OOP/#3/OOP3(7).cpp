#include <bitset>
#include <iostream>

using namespace std;

int main()
{   char  a;
cin>>a;
for (i=zizeof(a)*8-1; i>=0; --i)
{
 cout<<(char)((a>>i)&1);
}
}

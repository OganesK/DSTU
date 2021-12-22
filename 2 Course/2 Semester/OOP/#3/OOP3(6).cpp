#include <iostream>

using namespace std;
int main()
{
int a;
cout<<"Num :"<<endl;
cin>>a;
cout<<hex<<a<<endl;
a=(a&0xffff)|(a&0xff)<<8 |(a&0xff00)>>8;
cout<<hex<<a<<endl;
return 0;
}

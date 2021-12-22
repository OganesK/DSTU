#include <iostream>

using namespace std;

int main()
{int a,b,x,y;
cout << "Enter first namber: "<< endl;
cin>>a;
cout << "Enter second namber: "<< endl;
cin>>b;
cout << "First namber in hexadecimal: "<< hex << a << endl;
cout << "Second namber in hexadecimal: "<< hex << b << endl;
x=(a&b);
y=(a|b);
cout<<"Logical multiplication: "<<hex<<x<<endl;
cout<<"Logical addition: "<<hex<<y<<endl;
a=(a>>1);
cout<<"Shift right x: "<<hex<<a<<endl;
b=(b>>1);
cout<<"Shift right y: "<<hex<<y<<endl;
return 0;
}

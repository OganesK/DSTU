#include<iostream>;
#include<iomanip>;
#include<math.h>;
#include <stdio.h>
#include <cmath>
#include <cstdlib>
using namespace std;
int main22()
{int b=0,a=0,c=0;
float x1=0,x2=0,D=0;
cout<<"enter values"<<endl;
cin>>b>>a>>c;
cout<<endl<<"b = "<<b<<" a = "<<a<<" c = "<<c<<endl;
if (b==0 && c==0 && a==0){
cout<<"infinit "<<endl;
exit(0);}
if (b==0 && c!=0 && a==0)
{cout<<fixed<<"no solution "<<endl;
exit(0);;}
if (a==0)
{x1=(abs(-c/b));
cout<<fixed<<" x1 = "<<x1<<endl;
exit(0);}
D=(b*b)-4*a*c;
cout<<fixed<<"discriminant = "<<D<<endl;
if (D>0)
{D=sqrt(D);
x1=(-b+D)/(2*a);
x2=(-b-D)/(2*a);
cout<<fixed<<"x1 = " <<x1<< " x2 = "<<fixed<<x2<<endl;}
else
if (D<0)
{D=sqrt(abs(D));
x1=(-b)/(2*a);
cout<<fixed<<"x1 = "<<x1<<" - (i * "<<D/(2*a)<<")"<<endl;
cout<<fixed<<"x2 = "<<x1<<" + (i * "<<D/(2*a)<<")"<<endl;}// i комплексное число
else
if(D==0)
{x1=((-b)/(2*a));
cout<<fixed<<"x1= "<<x1<<endl;}
return 0;}

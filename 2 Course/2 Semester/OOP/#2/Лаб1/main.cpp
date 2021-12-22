#include<iostream>;
using namespace std;
int main()
{int x=0,y=0;
cout<<"enter coordinate"<<endl;
cin>>x>>y;
if (x>0 && y>0)
{cout<<"first plane"<<endl;} //первая
else
if (x<0 && y>0)
{cout<<"second plane"<<endl;} //вторая
else
if (x<0 && y<0)
{cout<<"three plane"<<endl;} //третья
else
if (x>0 && y<0)
{cout<<"fourth plane"<<endl;} //четвертая
if (x==0 && y==0)
{cout<<"point to be 0"<<endl;}
else
if (x==0 && y<0)
{cout<<"x is equal to 0 lies on the y-axis"<<endl;}
else
if (x>0 && y==0)
{cout<<"y is equal to 0 lies on the x-axis"<<endl;}//asis - ось , equal - равен , lies - лежит
else
if (x==0 && y>0)
{cout<<"x is equal to 0 lies on the y-axis"<<endl;}
else
if (x<0 && y==0)
{cout<<"y is equal to 0 lies on the x-axis"<<endl;}
return 0;}

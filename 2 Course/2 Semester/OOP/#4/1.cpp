//ЗАДАНИЕ1.Даныкоординаты точки на плоскости. 
//Определить и вывести на экран номер квадранта, в который попадает точка.

#include<iostream>;
using namespace std;
int main()
{int x=0,y=0;
cout<<"enter coordinate"<<endl;
cin>>x>>y;
if (x>0 && y>0)
{cout<<"first plane"<<endl;} //������
else
if (x<0 && y>0)
{cout<<"second plane"<<endl;} //������
else
if (x<0 && y<0)
{cout<<"three plane"<<endl;} //������
else
if (x>0 && y<0)
{cout<<"fourth plane"<<endl;} //���������
if (x==0 && y==0)
{cout<<"point to be 0"<<endl;}
else
if (x==0 && y<0)
{cout<<"x is equal to 0 lies on the y-axis"<<endl;}
else
if (x>0 && y==0)
{cout<<"y is equal to 0 lies on the x-axis"<<endl;}//asis - ��� , equal - ����� , lies - �����
else
if (x==0 && y>0)
{cout<<"x is equal to 0 lies on the y-axis"<<endl;}
else
if (x<0 && y==0)
{cout<<"y is equal to 0 lies on the x-axis"<<endl;}
return 0;}

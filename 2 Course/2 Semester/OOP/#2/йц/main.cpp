#include <iostream>
#include <string>
#include <cstdlib>

using namespace std;

int main()
{
int table[3][2] = { { 2,1},{ 2,0 },{ 2,1 } };
string input;
cout<<"-----------------|"<<endl;
cout<<"q | a | b |"<<endl;
cout<<"-----------------|"<<endl;
for (int i = 0; i < 3; i++)
{
cout<<"q"<<i<<"--> ";

for (int j = 0; j < 2; j++)
{
if (table[i][j] != 0)
{
cout<<"q"<<table[i][j]<<" |";
}
else
{
cout<<" 0"<<" |";
}

}
cout<<endl;
}
cout<<"-----------------|"<<endl;
cout<<"Enter sequence (a or b )"<<endl;
cin>>input;
int a, b;
a = 0; b = 1;
for (int i = 0; i < input.length(); i++)
{
if (input[i] == 'a' || input[i] == 'b' )
{
}
else
{
cout<<"Error: Invalid chain"<<endl;
exit(0);
}
}
int i = 0;
int n = 0;
cout<<"q"<<i<<","<<input<<"|->";
while (n<input.length())
{
if (input[n] == 'a') {
if (n<input.length() - 1) {
if (table[i][a] != 0)
{
n++;
cout<<"q"<<table[i][a]<<",";
for (int q = n; q < input.length(); q++)
cout<<input[q];
cout<<"|->";
if (n >= input.length())
cout<<"q"<<table[i][a]<<",E";
i = table[i][a];
}
else
{
cout<<endl<<"Error: Wrong chain "<<endl;
exit(0);
}
}
else
{
cout<<"q"<<table[i][a]<<",E";
exit(0);
}
}

if (input[n] == 'b') {
if (n<input.length() - 1) {
if (table[i][b] != 0)
{
n++;
cout<<"q"<<table[i][b]<<",";
for (int q = n; q < input.length(); q++)
cout<<input[q];
cout<<"|->";
if (n >= input.length())
cout<<"q"<<table[i][b]<<",E";
i = table[i][b];
}
else
{
cout<<endl<<"Error: Wrong chain "<<endl;
exit(0);
}
}
else
{
cout<<"q"<<table[i][a]<<",E";
exit(0);
}
}

}

system("PAUSE");
return 0;
}

#include <iostream>
#include <bitset>
using namespace std;

int main()
{
    bitset<8> ch_bit(500);
    cout<<ch_bit<<endl;
int a,b,c;
cout<<"(1) Enter Bit number"<<endl;
cin>>a>>b>>c;
for (int i = 8;i >= 0 ; --i){
if (i==8-a-1){
    if(ch_bit[i]==0){
        ch_bit[i]=1;
    }
else{
    cout<<a<<"bite yge 1"<<endl;
}
}
 if (i==8-c){
    if(ch_bit[i]==0){
        ch_bit[i]=1;
    }
else{
    cout<<b<<"bite yge 1"<<endl;
}
}
if (i==8-b){
    if(ch_bit[i]==0){
        ch_bit[i]=1;
    }
else{
    cout<<c<<"bite yge 1"<<endl;
}
}
}
cout<<ch_bit<<endl;


int d,f,g;
cout<<"(0) Enter Bit number"<<endl;
cin>>d>>f>>g;
for (int i = 8;i >= 0 ; --i){
if (i==8-d){
    if(ch_bit[i]==1){
        ch_bit[i]=0;
        i=i-1;
    }
else{
    cout<<d<<"bite yge 0"<<endl;
}
}
 if (i==8-f){
    if(ch_bit[i]==1){
        ch_bit[i]=0;
        i=i-1;
    }
else{
    cout<<f<<"bite yge 0"<<endl;
}
}
if (i==8-g){
    if(ch_bit[i]==1){
        ch_bit[i]=0;
        i=i-1;
    }
else{
    cout<<g<<"bite yge 0"<<endl;
}
}
}


cout<<ch_bit<<endl;

    return 0;
}

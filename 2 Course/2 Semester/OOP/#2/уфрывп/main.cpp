#include <iostream>

using namespace std;

int main()
{
int i[]={1,2,3,4};
int *pI=&i[2];
cout << *pI << endl;
pI++;
cout << *pI << endl;

    return 0;
}

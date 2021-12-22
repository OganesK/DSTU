#include <stdio.h>
#include <stdlib.h>

int main()
{
char s[]="hello";
char *p=&s[3];
cout << *p << endl;
p++;
cout << *p << endl;


    return 0;
}

#include <iostream>
#include <stdio.h>
using namespace std;

int main(){
	setlocale(LC_ALL, "Rus");

	const int MASK = 0x1a1d1ACF;
	int u = 0x41424344;

	printf("До шифрования: %c%c%c%c\n", u >> 24,(u & 0xffffff) >> 16, (u & 0xffff) >> 8, (u & 0xff) );

	u = u ^ MASK;
	printf("После шифрования: %c%c%c%c\n", u >> 24, (u & 0xffffff) >> 16, (u & 0xffff) >> 8, (u & 0xff));

	u = u ^ MASK;
	printf("После расшифровки: %c%c%c%c\n", u >> 24, (u & 0xffffff) >> 16, (u & 0xffff) >> 8, (u & 0xff));

	return 0;
}

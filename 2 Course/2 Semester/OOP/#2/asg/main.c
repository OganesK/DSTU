#include <iostream>
#include <cmath>
#include <locale.h>
#include <string>
#include <cctype>
using namespace std;
class vill
{
private:
int coldet;
string det;
string prav;
public:
void getvill()
{
cout << "Введите колличество нетерминалов которое будет использоваться"<<endl;
cin >> coldet;

}
void saves()
{
int p, l, ks, kz, type0;
type0 = 0;
ks = 0;
l = 0;
p = 0;
kz = 0;
char ss,kh;
string s,ss1,sss;
string s1 = "->";
string *mass = new string[coldet];
for (int col = 0; col < coldet; col++)
{
cout << "Введите нетерминал" << endl;
cin >> det;
cout << "Введите терминалы соответствующие этому детерминалу разделяя их ';' " << endl;
cin >> prav;
mass[col] = det + s1 + prav;
cout << mass[col] << endl;
for (int col1 = 0; col1 < prav.length(); col1++)
{
if (prav[col1] != (';'))
{
s = s + prav[col1];
}
else
{
//cout « s « endl;
for (int col2 = 0; col2 < s.length(); col2++)
{
int ch = int(s[0]);
if (ch >= 65 && ch <= 90)
{
p++;
break;
}
else
{
int ch = int(s[s.length() - 1]);
if (ch >= 65 && ch <= 90)
{
l++;
break;
}
else
{
int ch = int(s[s.length() / 2]);
if (ch >= 65 && ch <= 90)
{
ks = ks + 10;
break;
}
else
{
if (det.length() > 1)
{
kz = kz + 100;
break;
}
}
}
}
}
s = "";
}
}
}
if(l != 0 && p != 0)
{
goto kzz;
}
if (p > (l) && p > (ks) && p > (kz) && p > (type0))
{
cout << "Праволинейная грамматика" << endl;
}
if (l > (p) && l > (ks) && l > (kz) && l > (type0))
{
cout << "Леволинейная грамматика" << endl;
}
if (ks > (p) && ks > (l) && ks > (kz) && ks > (type0))
{
kzz:cout << "КС грамматика" << endl;
}
if (kz > (l) && kz > (p) && kz > (ks) && kz > (type0))
{
cout << "КЗ грамматика" << endl;
}
cout << "Сформируем цепочку" << endl;
cout << "Выбирете начальный детерминал " << mass[0]<<endl;
cin >> sss;
if (sss[0] == 'e')
{
goto theend;
}
cout << "Начало:S-> " << sss << endl;
do
{
cout << "Выбирете нетерминал или e(Эпсилон)"<<endl;
cin >> ss;
if (ss == 'e')
{
break;
}
cout << "Выбирете детерминал" << endl;
cin >> ss1;
for (int col3 = 0; col3 < sss.length(); col3++)
{
if (sss[col3] == ss)
{
sss.insert(col3, ss1);
sss.erase(col3 + ss1.length(), 1);
break;
}
}
cout << sss << endl;
cout << "Хотите продолжить?" << endl;
cin >> kh;
} while (kh != 'n');
theend:
cout << "Цепочка окончена" << endl;
}

};

int main()
{
setlocale(LC_ALL, "Russian");
vill ob1;
ob1.getvill();
ob1.saves();
system("pause");
return 0;
}

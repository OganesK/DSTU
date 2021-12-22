//ЗАДАНИЕ 4. Дана строка, содержащая текст на естественном языке.
// Напишите функцию, создающую новую строку, в которой все слова 
//из старой строки следуют в обратном порядке и разделены одним знаком пробела. 
//Исходная строка может содержать различные знаки-разделители (пробелы, запятые, точки и т.п.). 
//Полный набор знаков-разделителей передается функции при ее вызове.

#include<iostream>
#include<iomanip>
#include<string>
using namespace std;

string fun(string str, string ch)
{
    string strmas[50], strtem;
    int k = 0, j = 0, l = 0, h = 0, h1 = 0;
    while (str[k] != '\0') {
        l = 0;
        h = 0;
        while (ch[l] != '\0') {
            if (str[k] == ch[l]) {
                h++;
                k++;
            }
            l++;
        }
        if ((h > 0) && (h1 == 0))
        {
            h1 = h;
            j++;
        }

        if (h == 0) {
            h1 = h;
            strmas[j] += str[k];
            k++;
        }
    }
    strtem = "";

    for (int i = j; i >= 0; i--) {
        strtem += strmas[i];
        strtem += " ";
    }
    return strtem;
}


int main() {
    setlocale(LC_CTYPE, "rus");
    string str, ch;
    cout << "Enter string:" << endl;
    getline(cin, str);
    cout << "Vvedi znaki kot ispolz:" << endl;
    getline(cin, ch);
    cout << fun(str, ch) << endl;
    return 0;
}

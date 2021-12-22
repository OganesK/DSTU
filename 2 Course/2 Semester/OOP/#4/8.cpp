//ЗАДАНИЕ8.Вреализацииинтерактивнойигрынеобходимоотслеживатьперемещение, впределахигровогополя, объекта, управляемогоигроком. 
//ПредставимвпрограммеигровоеполемассивомцелыхзначенийАгеа(20Х20). 
//Вначалевсе элементыимеютзначениеноль. Положениеперемещаемогообъектавконкретныймоментвремениможемзадать,
// изменяязначениенужногоэлементаAreaс нулянаединицу. Посленесколькихперемещений"след", оставляемыйобъектом будетвыглядетькакцепочкаединицвполенулей. 
//Напишитесобственнуюфункциюintmove(), которая, спомощьюфункцииintgetch()   (прототипвфайлеconio.h), возвращающейкоднажатойклавиши, определяет, в 
//какуюсторонусместилсяобъектзаодинходивозвращает0, еслисделаннеправильныйход, -1, еслисделаншагвлево, 1 -шагвправо, -11 -вверхи11 -вниз (можноиспользоватьлюбыедругиезначения). 
//Пользовательдолженнажиматьна клавишиссимволамиLилиI, Rилиг, 
//Uилиu, DИЛИd, соответственно. Используйтеоператорswitch. Напишитепрограммутест, создающуюигровоеполе, вы-зывающуюнекотороечислоразфункциюmoveиотображающуюнаэкранерезультат.

#include <windows.h>
#include <iostream>
#include <conio.h>
using namespace std;

int move()
{
   int key;
   key = getch();
   switch (key)
   {
   case 119: return  1;
   case 115: return  -1;
   case 97 : return  11;
   case 100: return  -11;
   default: return 0;
      break;
   }
   return key;
}
int main()
{
   const int line = 20;
   const int col = 20;
   int Area[line][col];
   int key = 0;
   for (int i = 0; i < line; i++)
      for (int j = 0; j < col; j++)
      {
         Area[i][j] = 0;
         cout << Area[i][j] << " ";
         if (j == col - 1) cout << endl;
      }
   int i = 0, j = 0;
   while (1 < 2)
   {
      key = move();
      switch (key)
      {
      case 1:
      {
         system("cls");
         if (i != 0)
            i--;
         Area[i][j] = 1;
         for (int l = 0; l < line; l++)
            for (int k = 0; k < col; k++)
            {
               cout << Area[l][k] << " ";
               if (k == col - 1) cout << endl;
            }
      } break;
      case -1:
      {
         system("cls");
         if (i != line - 1)
            i++;
         Area[i][j] = 1;
         for (int l = 0; l < line; l++)
            for (int k = 0; k < col; k++)
            {
               cout << Area[l][k] << " ";
               if (k == col - 1) cout << endl;
            }
      }break;
      case 11:
      {
         system("cls");
         if (j != 0)
            j--;
         Area[i][j] = 1;
         for (int l = 0; l < line; l++)
            for (int k = 0; k < col; k++)
            {
               cout << Area[l][k] << " ";
               if (k == col - 1) cout << endl;
            }
      }break;
      case -11:
      {
         system("cls");
         if (j != col - 1)
            j++;
         Area[i][j] = 1;
         for (int l = 0; l < line; l++)
            for (int k = 0; k < col; k++)
            {
               cout << Area[l][k] << " ";
               if (k == col - 1) cout << endl;
            }
      }break;
      default: break;
      }
   }
   return 0;
}

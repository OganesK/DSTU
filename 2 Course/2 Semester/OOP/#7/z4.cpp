//Организовать линейный список цветов: хранить название цвета 
//и его числовой код. Упорядочивать  по  первой  букве  названия,  
//если  первые  буквы  совпадают,  то  по второй и т.д.При добавлении нового цвета в список сохранять упорядоченность.

#include <iostream>
#include <iomanip>
#include <time.h>
#include <string>

using namespace std;

struct Node
{
    string Name;
    int Value;
    Node* Next;
    Node* Prev;
};

void AddCol(Node** First, Node** Last, string Name, int val)
{
    Node* Vsp, * Tmp;
    Vsp = new Node;
    Vsp->Name = Name;
    Vsp->Value = val;
    Vsp->Next = NULL;
    Vsp->Prev = NULL;

    if ((*Last == NULL) && (*First == NULL))
    {
        *Last = Vsp;
        *First = Vsp;
    }
    else if (Vsp->Name > (*Last)->Name)
    {
        (*Last)->Next = Vsp;
        Vsp->Prev = *Last;
        *Last = Vsp;
    }
    else if (Vsp->Name < (*First)->Name)
    {
        Vsp->Next = *First;
        Vsp->Prev = (*First)->Prev;
        (*First)->Prev = Vsp;
        *First = Vsp;
    }
    else
    {
        Tmp = (*Last);
        while (Tmp != NULL)
        {
            if ((Tmp->Name > Vsp->Name) && (Tmp->Next->Name < Vsp->Name))
            {
                Vsp->Next = Tmp->Next;
                Vsp->Prev = Tmp;
                Tmp->Next->Prev = Vsp;
                Tmp->Next = Vsp;
                break;
            }
            Tmp = Tmp->Next;
        }
    }
}

void DelCol(Node** First, Node** Last, string Name)
{
    Node* Vsp = *First, * Tmp;

    if ((*First)->Name == Name && (*First)->Next != NULL)
    {
        *First = (*First)->Next;
        (*First)->Prev = NULL;
        delete(Vsp);
        return;
    }
    else if ((*First)->Next == NULL && (*First)->Name == Name)
    {
        (*First)->Next = NULL;
        *First = NULL;
        delete* First;
        return;
    }

    if ((*Last)->Name == Name) {
        Tmp = *Last;
        *Last = (*Last)->Prev;
        (*Last)->Next = NULL;
        delete Tmp;
        return;
    }

    Tmp = *First;

    while (Tmp != NULL)
    {
        Node* Tmp2;

        if (Tmp->Name == Name)
        {
            Tmp2 = Tmp;
            Tmp2->Prev->Next = Tmp->Next;
            Tmp2->Next->Prev = Tmp->Prev;
            delete Tmp;
            return;
        }
        Tmp = Tmp->Next;
    }
}

void ClearCol(Node** First)
{
    Node* Tmp;
    Tmp = (*First);

    while (Tmp != NULL)
    {
        Node* next = Tmp->Next;
        delete Tmp;
        Tmp = next;
    }

    cout << "Удалено";
}

void PrintCol(Node* First)
{
    Node* Vsp = First;
    if (Vsp == NULL) cout << "Список цветов пуст!" << endl;
    else
    {
        while (Vsp != NULL)
        {
            cout << Vsp->Name << "   " << Vsp->Value << endl;
            Vsp = Vsp->Next;
        }
    }
}

int main() {
    setlocale(LC_CTYPE, "rus");
    Node* First = NULL, * Last = NULL;
    int n = 0, val = 0;
    string Name;

    cout << "1. Добавление цвета" << endl;
    cout << "2. Удаление цвета" << endl;
    cout << "3. Вывод списка цветов" << endl;
    cout << "0. Выход" << endl;

    do {
        cout << "Выбранное действие: " << endl;
        cin >> n;
        switch (n)
        {
        case 1:
            cout << "Имя цвета: " << endl;
            cin >> Name;
            cout << "Номер цвета: " << endl;
            cin >> val;
            AddCol(&First, &Last, Name, val);
            cout << "Элемент добавлен" << endl;
            break;

        case 2:
            cout << "Имя цвета для удаления: " << endl;
            cin >> Name;
            DelCol(&First, &Last, Name);
            cout << "Удалено!" << endl;
            break;

        case 3:
            cout << "Элементы списка: " << endl;
            PrintCol(First);
            cout << endl;
            break;

        case 0:
            ClearCol(&First);
            break;

        default: cout << "Ошибка!" << endl; break;
        }
    } while (n != 0);

    return 0;
}

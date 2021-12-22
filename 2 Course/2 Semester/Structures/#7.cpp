// ALGISTR7.cpp : Этот файл содержит функцию "main". Здесь начинается и заканчивается выполнение программы.
//

#include <iostream>
using namespace std;

struct fifo
{
    //bool head;
    int data;
    fifo* next;
    fifo* pref;
};

bool empty(fifo* st)
{
    if (st == nullptr) return true;
    else return false;
}
void add(fifo*& st, int num) {
    fifo* f = st;
    fifo* x = new fifo;
    x->data = num;
    x->next = nullptr;
    while (st->next) {
        st=st->next;
    }
    x->pref = st;
    st->next = x;
    st = f;
}
void del(fifo*& st) {
    fifo* f = st->next;
    delete st;
    st = f;
    f->pref = nullptr;
    
}
void outputref(fifo* st) {
    fifo* save = st;
    //system("cls");
    while (st->next) {
        st = st->next;
    }
    cout << "Содержимое очереди: ";
    cout << st->data << " ";
    st = st->pref;
    while (st) {
        cout << int(st->data) << " ";
        st = st->pref;
    }
    //st = save;
}
void output(fifo* st) {
    fifo* save = st;
    //system("cls");
    if (empty(st)) {
        cout << "Очередь пуста!" << endl;
    }
    else {
        cout << "Содержимое очереди: ";
        cout << st->data << " ";
        st = st->next;
        while (st) {
            cout << int(st->data) << " ";
            st = st->next;
        }
    }
    //st = save;
}
struct linfifo {
    int len;
    int* data[0];
};
bool linempty(linfifo* st) {
    if (st->len == 0)return true;
    else return false;
};
void linoutput(linfifo* st) {
    for (int i = 0; i < st->len; ++i) {
        cout << *st->data[i] << endl;
    }
};
void linadd(linfifo* st, int num) {
    st->len++;

    int* arr = new int[st->len];

    for (int i = 0; i < st->len-1; ++i) {
        arr[i] = *st->data[i];
    }
    arr[st->len-1] = num;
    //delete st->data;
    *st->data = arr;
};
void lindel(linfifo* st) {
    st->len--;
    int* arr = new int[st->len];
    for (int i = st->len; i > -1; i--) {
        arr[i - 1] = *st->data[i];
    }
    //delete st->data;
    *st->data = arr;
};


int main()
{
    setlocale(LC_ALL, "Rus");
    fifo* f = new fifo;
    f->data = 9;
    f->next = nullptr;
    add(f, 10);
    add(f, 11);
    add(f, 12);
    add(f, 13);
    del(f);
    output(f);
    outputref(f);
}

// Запуск программы: CTRL+F5 или меню "Отладка" > "Запуск без отладки"
// Отладка программы: F5 или меню "Отладка" > "Запустить отладку"

// Советы по началу работы 
//   1. В окне обозревателя решений можно добавлять файлы и управлять ими.
//   2. В окне Team Explorer можно подключиться к системе управления версиями.
//   3. В окне "Выходные данные" можно просматривать выходные данные сборки и другие сообщения.
//   4. В окне "Список ошибок" можно просматривать ошибки.
//   5. Последовательно выберите пункты меню "Проект" > "Добавить новый элемент", чтобы создать файлы кода, или "Проект" > "Добавить существующий элемент", чтобы добавить в проект существующие файлы кода.
//   6. Чтобы снова открыть этот проект позже, выберите пункты меню "Файл" > "Открыть" > "Проект" и выберите SLN-файл.

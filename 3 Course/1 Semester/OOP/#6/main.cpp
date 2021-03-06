#include <vector>
#include <iostream>
using namespace std;

//Task1


template<typename T>
T Max(T x, T y) {
    cout <<"Шаблонная функция" << endl;
    return x > y ? x : y;
}
const char* Max(const char* x, const char* y)
{
    cout << "Специализированная функция" << endl;
    return strlen(x) > strlen(y) ? x : y;
}
class Test
{
public:
    int x;
    Test(int _x) { x = _x; }
    bool operator > (Test c2)
    {
        return x > c2.x ? true : false;
    }
};



//Task2
template<typename A>
void Summa(A x, A y) {
    if constexpr (is_same<A, int>::value || is_same<A, float>::value || is_same<A, double>::value)
    {
        cout << x + y << endl;
    }
    else if constexpr (is_same<A, double*>::value || is_same<A, int*>::value || is_same<A, float*>::value)
    {
        cout << *x + *y << endl;
    }
    else cout << "Не правильно задан аргумент" << endl;
}

//=======
// Task3
template<typename T> class Matrix {
private:
    T** matrix;
public:
    size_t N, M;
    Matrix(size_t _N, size_t _M) : N(_N), M(_M) {
        this->matrix = new T * [this->N];
        for (size_t i = 0; i < this->N; i++)
            this->matrix[i] = new T[this->M];
    };
    T* operator[](size_t index) { return this->matrix[index]; }
    T GetElement(const size_t N, const size_t M) const { return this->matrix[N][M]; }
    void SetElement(const size_t N, const size_t M, T num) const { this->matrix[N][M] = num; }
    ~Matrix(void) {
        for (size_t i(0); i < this->N; i++)
            delete this->matrix[i];
        delete this->matrix;
    };
    template<typename T_Inner>
    friend Matrix<T_Inner>* operator+(const Matrix<T_Inner>& d1, const Matrix<T_Inner>& d2);
    template<typename T_Inner>
    friend Matrix<T_Inner>* operator-(const Matrix<T_Inner>& d1, const Matrix<T_Inner>& d2);

    template<typename T_Inner>
    friend istream& operator>>(istream& is, Matrix<T_Inner>& d);
    template<typename T_Inner>
    friend ostream& operator<< (ostream& os, Matrix<T_Inner>& d);


};

template<typename T>
istream& operator>>(istream& is, Matrix<T>& d) {


    for (int i = 0; i < d.N; ++i) {
        for (int j = 0; j < d.M; ++j) {
            is >> d.matrix[i][j];
        }
    }

    return is;
}

template<typename T>
ostream& operator<<(ostream& os, Matrix<T>& d) {

    for (int i = 0; i < d.N; ++i) {
        for (int j = 0; j < d.M; ++j) {
            os << d.matrix[i][j];
        }
        os << endl;
    }

    return os;
}

template<typename T>
Matrix<T>* operator+(const Matrix<T>& d1, const Matrix<T>& d2)
{
    Matrix<T>* tmp = new Matrix<T>(d1.N, d2.M);
    for (size_t i = 0; i < d1.N; i++)
    {
        for (size_t j = 0; j < d1.M; j++)
        {
            tmp->SetElement(i, j, (d1.GetElement(i, j) + d2.GetElement(i, j)));
        }
    }
    return tmp;
}
template<typename T>
Matrix<T>* operator-(const Matrix<T>& d1, const Matrix<T>& d2)
{
    Matrix<T>* tmp = new Matrix<T>(d1.N, d2.M);
    for (size_t i = 0; i < d1.N; i++)
    {
        for (size_t j = 0; j < d1.M; j++)
        {
            tmp->SetElement(i, j, (d1.GetElement(i, j) - d2.GetElement(i, j)));
        }
    }
    return tmp;

}

//template <class T, class T>
//T f1(T x) {
//    return x;
//}
//
//template <class T1, T2>
//void f2(T1 x, T2 y) {
//    cout << "f2: x = " << x << "\ty = " << y << endl;
//}
//
//template <class T>
//T f3(int x) {
//    return T();
//}
//
//inline template <class T>
//T f4(T x, T y) {
//    cout << "f4: x = " << x << "\ty = " << y << endl;
//    return x;
//}

template<typename T>
class TMenu {
private:
    T lst;
protected:
    string* menuItems = nullptr;
    int itemsCount = 0;

public:

    int addMenuItem(const string& item) {
        if (menuItems != nullptr) {
            string* tmp = new string[itemsCount + 1];
            for (int i = 0; i < itemsCount; ++i) {
                tmp[i] = menuItems[i];
            }
            delete[] menuItems;
            tmp[itemsCount] = item;
            menuItems = tmp;
            itemsCount++;
            return itemsCount - 1;
        }
        else {
            menuItems = new string[1];
            menuItems[0] = item;
            itemsCount++;
            return 0;

        }
    }


    void processMenu() {
        int chosen;
        do {
            for (int i = 0; i < itemsCount; ++i) {
                std::cout << i + 1 << ": " << menuItems[i] << endl;
            }
            std::cout << itemsCount + 1 << ": " << "Quit" << endl;

            cin >> chosen;
        } while (!(chosen > 0 && (chosen <= itemsCount + 1)));

        if (chosen == itemsCount + 1) {
            exit(0);
        }

        this->processMenuItem(chosen);

    }

public:

    void processMenuItem(int itemNumber) {
        if (menuItems[itemNumber - 1] == "Добавить элемент в конец списка") {
            int num;
            cout << "Введите номер: ";
            cin >> num;
            lst.pushback(num);
        }
        else if (menuItems[itemNumber - 1] == "Добавить элемент перед позицией в списке") {
            int num, pos;
            cout << "Введите номер: ";
            cin >> num;
            cout << "Ввеедите позицию: ";
            cin >> pos;
            if (pos < itemsCount && pos >= 0) {

                lst.pushindex(pos, num);
            }
            else {
                cout << "Такого индекса нет" << endl;
            }
        }
        else if (menuItems[itemNumber - 1] == "Удалить элемент в списке по индексу") {

            cout << "Введите позицию: ";
            int pos;
            cin >> pos;
            if (pos < itemsCount && pos >= 0) {

                lst.del(pos);
            }
            else {
                cout << "Такого инедекса нет" << endl;
            }
        }
        else if (menuItems[itemNumber - 1] == "Проверить, пусто ли") {

            if (lst.isEmpty()) {
                cout << "Пусто" << endl;
            }
            else {
                cout << "Не пусто" << endl;
            }
        }
        else if (menuItems[itemNumber - 1] == "Получить элемент по идентификатору") {

            int pos;
            cin >> pos;
            if (pos < itemsCount && pos >= 0) {

                cout << lst.getByIndex(pos) << endl;
            }
            else {
                cout << "Такого индекса нет" << endl;
            }
        }
        else if (menuItems[itemNumber - 1] == "Вывести на экран") {

            lst.printout();
        }

        processMenu();
    }

};

class List {
public:

    List()
    {
        items = nullptr;
    }

private:

    struct Node
    {

        int data;
        Node* next;
        Node* prev;

    };

protected:
    Node* items;

public:
    void pushback(int data) //Метод добавления элемента в конец листа
    {
        if (items == nullptr)
        {
            items = new Node;
            items->next = nullptr;
            items->prev = nullptr;
            items->data = data;
        }
        else
        {
            Node* last = items;
            while (last->next) {
                last = last->next;
            }

            Node* e = new Node;
            e->data = data;
            e->next = nullptr;
            e->prev = last;

            last->next = e;
        }
    }

    void pushindex(int index, int data) //Метод добавления элемента по индексу
    {
        if (items == nullptr)
        {
            items = new Node;
            items->next = nullptr;
            items->prev = nullptr;
            items->data = data;
        }
        else
        {
            Node* temp = items;
            for (int i = 0; i < index; ++i) {
                temp = temp->next;
            }

            Node* e = new Node;
            e->data = data;
            e->next = temp;
            e->prev = temp->prev;

            if (temp->prev) {
                temp->prev->next = e;
            }
            else {
                items = e;
            }
            temp->prev = e;
        }
    }

    void printout() //Метод вывода на экран
    {
        if (items != nullptr)
        {
            Node* e = items;

            while (e)
            {
                cout << e->data << ' ';
                e = e->next;
            }
            cout << endl;
        }
    }

    void del(int index) //Метод удаления по позиции
    {

        Node* temp = items;
        if (isEmpty()) {
            return;
        }
        for (int i = 0; i < index; ++i) {
            if (!temp || !temp->next) {
                return;
            }
            temp = temp->next;
        }
        if (temp->next) {
            temp->next->prev = temp->prev;
        }
        if (temp->prev) {
            temp->prev->next = temp->next;
        }
        else {
            items = temp->next;
        }
        delete temp;

    }

    bool isEmpty() { //Проверка на пустосту
        if (!items) {
            return true;
        }
        else {
            return false;
        }
    }




    int& getByIndex(int index) {
        Node* temp = items;
        for (int i = 0; i < index; ++i) {
            temp = temp->next;
        }
        return temp->data;

    }

};

class Queue1 {
private:
    int len = 0;
    List* lst;
public:

    Queue1() {
        lst = new List;
    }


    int& getLast() {
        return lst->getByIndex(len - 1);
    }

    int& getFirst() {
        return lst->getByIndex(0);
    }


    void pushback(int data) //Метод добавления элемента в конец очереди
    {
        lst->pushback(data);
        len++;
    }

    void printout() //Метод вывода на экран
    {
        lst->printout();
    }

    void pop() {
        lst->del(0);
    }


    bool isEmpty() { //Проверка на пустосту
        return lst->isEmpty();
    }

};


int main()
{


    TMenu<List> lstMenu;
    lstMenu.addMenuItem("Вывести на экран");
    lstMenu.addMenuItem("Добавить элемент в конец списка");

    lstMenu.addMenuItem("Проверить, пусто ли");
    lstMenu.processMenuItem(1);




//     setlocale(LC_ALL, "Russian");
//     cout << "2 задание" << endl;
//     char x = Max('a', '1');
//     cout << x<<endl;
//     int  y = Max(0, 1);
//     cout << y << endl;
//     string z = Max("Hello", "World");
//     cout << z << endl;
//     cout << endl;
//     cout << "3 задание" << endl;
//     int tmp[] = { 3, 4, 5 };
//     int tmp1[] = { 2, 4, 5 };
//     Summa("2", "3");
//     Summa(4, 5);
//
//    Matrix<int> test = Matrix<int>(2, 3);
//    cin >> test;
//    cout << test;
//
//    Matrix<int> test2 = Matrix<int>(2, 3);
//    cin >> test2;
//    cout << test2;
//
//    Matrix<int> c = *(test - test2);
//
//    cout << c;
//
//

}

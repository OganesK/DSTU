#include <iostream>

template<typename T>
struct node{
public:
    node(T value){
        this->value = value;
    }

    node<T>* next;
    T value;
};

template<typename T>
struct Stack {
public:
    virtual bool isEmpty() {}

    virtual void pushBack(T value) {}

    virtual void pop() {};

    virtual void clear(){};

    virtual void print(){};
};

template<typename T>
class PtrStack : Stack<T>{
public:
    node<T> *head = NULL;
    int elementsCount = 0;

    bool isEmpty() override{
        if(elementsCount == 0){
            return true;
        }
        return false;
    }


    void del(T value){
        node<T>* tmpNode = head;
        if(tmpNode->value == value){
            node<T>* nodeToDelete  = tmpNode;
            head = tmpNode->next;
            free(nodeToDelete);
            elementsCount--;
            return;
        }

        while(tmpNode->next->next != NULL){
            tmpNode = tmpNode->next;
            if(tmpNode->next->value == value){
                node<T>* nodeToDelete  = tmpNode->next;
                tmpNode->next = tmpNode->next->next;
                free(nodeToDelete);
                elementsCount--;
                return;
            }
        }
    }

    void pushBack(T value) override{

        if(elementsCount == 0){
            this->head = new node<T>(value);
            elementsCount++;
            return;
        }

        node<T>* tmpNode = head;
        for(int i = 0; i < elementsCount - 1; ++i){
            tmpNode = tmpNode->next;
        }
        tmpNode->next = new node<T>(value);

        elementsCount++;

    }

    void pop() override{
        node<T>* tmpNode = head;
        for(int i = 0; i < elementsCount - 2 ; ++i){
            tmpNode = tmpNode->next;
        }

        free(tmpNode->next);

        tmpNode->next = NULL;

        elementsCount--;
    }

    void clear() override{
        while(!isEmpty()){
            this->pop();
        }
    }

    void print() override{
        std::cout << "ELEMENTS: ";
        node<T>* currentNode = this->head;
        for (int i = 0; i < elementsCount; ++i){
            std::cout << currentNode->value << ' ';
            currentNode = currentNode->next;
        }
        std::cout << std::endl;
    }
};

template<typename T>
class ArrayStack : Stack<T> {
public:

    ArrayStack(int size){
        this->size = size;
        this->data = new T[size];
    }

    bool isEmpty() override{
        if(elementsCount == 0){
            return true;
        }
        return false;
    }

    void pushBack(T value) override{

        elementsCount++;
        data[endPos] = value;
        endPos++;


    }

    void pop() override{

        endPos--;
        elementsCount--;
    }

    void clear() override{
        while(!isEmpty()){
            this->pop();
        }
    }

    void print() override{
        std::cout << "ELEMENTS: ";
        for (int i = 0; i < elementsCount; ++i){
            std::cout << data[i] << ' ';
        }
        std::cout << std::endl;
    }

    int elementsCount = 0;

private:
    int size = 0;
    int endPos = 0;

    T* data;
};

int main() {
    {
        PtrStack<int> stack;
        for (int i = 0; i < 10; i++) {
            stack.pushBack(i);
        }

        stack.print();
        stack.del(7);
        stack.del(0);
        stack.del(9);

        stack.print();


    }
    {
        ArrayStack<int> stack(10);
        for (int i = 0; i < 10; i++) {
            stack.pushBack(i);
        }


        stack.print();
        stack.pop();
        stack.print();
        stack.clear();
        std::cout << stack.isEmpty() << std::endl;
        stack.print();

    }

    return 0;
}

#include <string>
#include <set>

#include <iostream>
using namespace std;

typedef int T;

#define CMP_LT(a, b) ((a) < (b))
#define CMP_GT(a, b) ((a) > (b))

typedef struct Node {
    T data;
    struct Node* left;
    struct Node* right;
    struct Node* parent;

    int level = 0;

} Node;

const bool operator < (Node lhs, Node rhs) {
    if (lhs.level != rhs.level)
        return (lhs.level < rhs.level);
    return lhs.data < rhs.data;
}

class Tree {


    Node* getFreeNode(T value, Node* parent, int level) {
        Node* tmp = (Node*)malloc(sizeof(Node));
        tmp->left = tmp->right = NULL;
        tmp->data = value;
        tmp->parent = parent;
        tmp->level = level;
        return tmp;
    }

public: void insert(Node** head, int value) {
        Node* tmp = NULL;
        Node* ins = NULL;
        if (*head == NULL) {
            *head = getFreeNode(value, NULL, 0);
            return;
        }

        int level = 0;

        tmp = *head;
        while (tmp) {
            level++;
            if (CMP_GT(value, tmp->data)) {
                if (tmp->right) {
                    tmp = tmp->right;

                    continue;
                }
                else {
                    tmp->right = getFreeNode(value, tmp, level);
                    return;
                }
            }
            else if (CMP_LT(value, tmp->data)) {
                if (tmp->left) {
                    tmp = tmp->left;
                    continue;
                }
                else {
                    tmp->left = getFreeNode(value, tmp, level);
                    return;
                }
            }
            else {
                exit(2);
            }
        }
    }


public: Node* getNodeByValue(Node* root, T value) {
        while (root) {
            if (CMP_GT(root->data, value)) {
                root = root->left;
                continue;
            }
            else if (CMP_LT(root->data, value)) {
                root = root->right;
                continue;
            }
            else {
                return root;
            }
        }
        return NULL;
    }



    void printTree(Node* root, const char* dir, int level, std::set<Node>& nodes) {



        if (root) {


            nodes.insert(*root);

            printTree(root->left, "left", level + 1, nodes);

            printTree(root->right, "right", level + 1, nodes);
        }


    }
    void print_Tree(Node* root, int level)
    {
        if (root)
        {
            print_Tree(root->left, level + 1);
            for (int i = 0; i < level; i++) cout << "   ";
            cout << root->data << endl;
            print_Tree(root->right, level + 1);
        }
    }



public: void printBT(const std::string& prefix, const Node* node, bool isLeft)
    {
        if (node != nullptr)
        {
            std::cout << prefix;

            std::cout << (isLeft ? "|--" : "'--");

            std::cout << node->data << std::endl;

            printBT(prefix + (isLeft ? "|   " : "    "), node->right, false);
            printBT(prefix + (isLeft ? "|   " : "    "), node->left, true);

        }
    }

public: void printBT(const Node* node)
    {
        printBT("", node, false);
    }
};


class Menu {
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
            std::cout << itemsCount + 1 << ": " << "Exit" << endl;

            cin >> chosen;
        } while (!(chosen > 0 && (chosen <= itemsCount + 1)));

        if (chosen == itemsCount + 1) {
            exit(0);
        }

        this->processMenuItem(chosen);

    }

public:

    virtual void processMenuItem(int itemNumber) = 0;

};

class TreeMenu : public Menu {
private:
    Tree value;

public:
    Node* root = NULL;
    void processMenuItem(int itemNumber) {

        if (menuItems[itemNumber - 1] == "Add elements") {
            int t;
            int n;
            cout << "Nodes count: ";
            cin >> n;
            for (int i = 0; i < n; i++)
            {
                cout << "Node value: ";
                cin >> t;
                value.insert(&root, t);

            }

        }


        else if (menuItems[itemNumber - 1] == "Search elements") {

            cout << "Index:";
            int pos;
            cin >> pos;
            if (pos < itemsCount && pos >= 0) {

                cout << value.getNodeByValue(root, pos)->parent->data << endl;
            }
            else {
                cout << "There is no node with this index" << endl;
            }
        }
        else if (menuItems[itemNumber - 1] == "Print") {
            value.printBT(root);
        }

        processMenu();
    }

};

int main()
{
    setlocale(LC_ALL, "Russian");

    TreeMenu a;

    a.addMenuItem("Add elements");
    a.addMenuItem("Search elements");
    a.addMenuItem("Print");

    a.processMenu();


}


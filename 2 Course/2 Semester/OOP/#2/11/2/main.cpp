#include <iostream>
#include <cmath>
using namespace std;

int main()
{
    double a,b,c,x;
    cout << "Enter value a: ";
    cin >> a;
    cout << "Enter value b: ";
    cin >> b;
    cout << "Enter value c: ";
    cin >> c;

    if (a==0) {
        x=(-1*c)/b;
        cout << "One root " << x << endl;
    }
    else {
    if((b*b - 4*a*c) >= 0)
    {
        x = ( -1*b + sqrt(b*b - 4*a*c) ) / (2 * a);
        cout << "First root " << x << endl;
        x = ( -1*b - sqrt(b*b - 4*a*c) ) / (2 * a);
        cout << "Second root " << x << endl;
    }
    else
    {
        cout << "Discriminant < 0 - no roots." << endl;
    }}

    return 0;
}

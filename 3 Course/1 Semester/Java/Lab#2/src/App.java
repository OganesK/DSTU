class Stack {
    private int mSize;
    private int[] stackArray;
    private int top;
 
    public Stack(int m) {
        this.mSize = m;
        stackArray = new int[mSize];
        top = -1;
    }
 
    public void addElement(int element) {
        stackArray[++top] = element;
    }
 
    public int deleteElement() {
        return stackArray[top--];
    }
 
    public int readTop() {
        return stackArray[top];
 
    }
 
    public boolean isEmpty() {
        return (top == -1);
    }
 
    public boolean isFull() {
        return (top == mSize - 1);
    }
}

 
 
public class App {

    public static void reverseStack(Stack oldOne) {
        Stack newStack = new Stack(10);
        while (!oldOne.isEmpty()) {
            int value = oldOne.deleteElement();
            newStack.addElement(value);
        }
        System.out.println("Перевернутый стек");
        while (!newStack.isEmpty()){
            int value = newStack.deleteElement();
            System.out.println(value);
        }
    }
    
 
    public static void main(String[] args) {
        Stack mStack = new Stack(10);
 
        mStack.addElement(79);
        mStack.addElement(59);
        mStack.addElement(35);
        mStack.addElement(24);
        mStack.deleteElement();


        App.reverseStack(mStack);

 
 
        System.out.print("Стек: ");
        while (!mStack.isEmpty()) {
            int value = mStack.deleteElement();
            System.out.print(value);
            System.out.print(" ");
        }
        System.out.println("");

        
    }
}
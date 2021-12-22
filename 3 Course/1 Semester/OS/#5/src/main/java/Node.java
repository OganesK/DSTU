public class Node {
    public int startBLock;
    public int countBlock;
    public String info;
    public Node(int start,int count){
        startBLock = start;
        countBlock = count;
    }
    public Node(int start,int count,String information){
        startBLock = start;
        countBlock = count;
        info = information;
    }
}

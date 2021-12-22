import java.io.IOException;

public class Main {

    public static void main(String[] args) throws IOException {
        LinkedListBlock linkedListBlock = new LinkedListBlock();
        linkedListBlock.initListBlock(6);
        linkedListBlock.addBlock(6,4);
        linkedListBlock.writeInfoToBlock(6,"Data");
        linkedListBlock.initListBlock(8);
        linkedListBlock.addBlock(8,4);
        linkedListBlock.writeInfoToBlock(8,"Data");
        linkedListBlock.writeListToFile();
        linkedListBlock.printInfoLinkedList();
    }
}

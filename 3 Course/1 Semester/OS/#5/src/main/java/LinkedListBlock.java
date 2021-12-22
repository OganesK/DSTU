import java.io.File;
import java.io.FileWriter;
import java.io.IOException;
import java.util.ArrayList;

public class LinkedListBlock {

    public File file = new File("src/main/resources/File");

    FileWriter fileWriter = new FileWriter(file);

    public LinkedListBlock() throws IOException {
    }

    private static int currentIndex;
    private static int currentStartIndex;

    public void initListBlock(int count) throws IOException {
        Node node = new Node(0,count-1);
        linkedListBlock.add(node);
        currentIndex = count-1;
        currentStartIndex = node.startBLock;
    }

    public void addBlock(int start, int count) throws IOException {
        if(currentIndex>=start){
            linkedListBlock.remove(currentStartIndex);
            Node node = new Node(start,count);
            linkedListBlock.add(node);
        }
        else {
            Node node = new Node(start,count);
            linkedListBlock.add(node);
        }
    }
    public void removeBlock(int start){
        for (var i:linkedListBlock) {
            if(start==i.startBLock){
                linkedListBlock.remove(i);
            }
        }
    }

    public void writeInfoToBlock(int start,String info){
        for (var i:linkedListBlock) {
            if(start==i.startBLock){
                i.info = info;
            }
        }
    }

    public void removeInfoFromBlock(int start){
        for (var i:linkedListBlock) {
            if(start==i.startBLock){
                i.info = null;
            }
        }
    }

    public void printInfoLinkedList(){
        int countEmptyBlock = 0;
        for (var i:linkedListBlock) {
            if(i.info==null){
                countEmptyBlock++;
            }
        }
        System.out.println("Size LinkedListBlock: "+linkedListBlock.size());
        System.out.println("Size block: 32");
        System.out.println("Count empty block: "+countEmptyBlock);
        System.out.println("Count not empty block: "+(linkedListBlock.size()-countEmptyBlock));

    }

    public void writeListToFile() throws IOException {
        for(int i=0;i<linkedListBlock.size();i++){
            fileWriter.write("{"+linkedListBlock.get(i).startBLock+";"+linkedListBlock.get(i).countBlock+";"+linkedListBlock.get(i).info+"}\n");
            fileWriter.flush();
        }
    }

    private ArrayList<Node> linkedListBlock = new ArrayList<>();
}

import java.io.*;
import java.util.Scanner;

public class Task3 {
    public static void main(String[] args) throws IOException {
        FileReader fileReader = new FileReader("C:\\Users\\Roman Bulygin\\IdeaProjects\\LabaOS3\\src\\main\\resources\\input");
        Scanner scanner = new Scanner(fileReader);
        FileWriter fileWriter = new FileWriter("C:\\Users\\Roman Bulygin\\IdeaProjects\\LabaOS3\\src\\main\\resources\\output");

        String line;
        while(scanner.hasNextLine()==true){
            line = scanner.nextLine();
            fileWriter.write(line+"\n");
        }
        fileWriter.close();
    }
}

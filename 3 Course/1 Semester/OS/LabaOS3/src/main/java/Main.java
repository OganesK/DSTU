import java.awt.event.ActionEvent;
import java.awt.event.ActionListener;
import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.io.InputStreamReader;
import java.lang.Process;
import java.util.ArrayList;
import java.util.Scanner;
import java.util.concurrent.TimeUnit;
import javax.swing.Timer;

public class Main {
    public static boolean checkPPOpen(String name) throws IOException {
        String line;
        final Process process = Runtime.getRuntime().exec("tasklist.exe");
        final BufferedReader reader = new BufferedReader(new InputStreamReader(process.getInputStream()));
        while ((line = reader.readLine()) != null) {
            if (!line.contains(name)) {
                continue;
            }
            return true;
        }
        reader.close();
        return false;
    }

    public static void main(String[] args) throws IOException, InterruptedException {
        try {
            FileReader fileReader = new FileReader("C:\\Users\\Roman Bulygin\\IdeaProjects\\LabaOS3\\src\\main\\resources\\config");
            BufferedReader bufferedReader = new BufferedReader(fileReader);
            String[] line = new String[4];
            for (int i=0;i<line.length;i++){
                line[i] = bufferedReader.readLine();
            }
            Process[] processes = new Process[2];
            for(int i=0;i< line.length;i+=2){
                System.out.println("Process name:"+line[i+1]+" time:"+line[i]+"sec");
                processes[0] = new ProcessBuilder(line[i+1]).start();
                TimeUnit.SECONDS.sleep(Long.parseLong(line[i]));
                System.out.println(checkPPOpen(line[i + 1]));
                /*processes[0].waitFor(Long.parseLong(line[i]),TimeUnit.SECONDS);
                processes[0].destroyForcibly();*/
            }
        }
        catch (Exception ex){
            ex.printStackTrace();
        }
    }
}

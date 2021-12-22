import java.io.File;
import java.io.FileFilter;
import java.io.FilenameFilter;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class Task4 {
    public static void main(String[] args) throws IOException, InterruptedException {
        File files = new File("path");
        var items = files.listFiles(new FilenameFilter() {
            @Override
            public boolean accept(File directory, String fileName) {
                if (fileName.endsWith(".sh")) {
                    return true;
                }
                if (fileName.endsWith(".py")) {
                    return true;
                }
                return false;
            }
        });
        if(items==null){
            System.out.println("Ошибка: В каталоге нет исполняемых файлов");
        }
        /*for(int i=0;i<items.length;i++){
            System.out.println(items[i].getName());
        }*/
        for(int i=0;i<items.length;i++){
            ProcessBuilder processBuilder = new ProcessBuilder(items[i].getAbsolutePath());
            var process = processBuilder.start();
            process.waitFor(4, TimeUnit.SECONDS);
            process.exitValue();
            Thread.sleep(40);
            if(!process.isAlive()){
                items[i].delete();
            }
        }
    }
}
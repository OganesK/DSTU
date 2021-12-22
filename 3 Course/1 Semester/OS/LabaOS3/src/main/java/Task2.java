import java.io.File;
import java.io.FileFilter;
import java.io.FilenameFilter;
import java.io.IOException;
import java.util.concurrent.TimeUnit;

public class Task2 {
    public static void main(String[] args) throws IOException, InterruptedException {
        File files = new File("C:\\Users\\Roman Bulygin\\IdeaProjects\\LabaOS3\\src\\main\\resources");
        var items = files.listFiles(new FilenameFilter() {
            @Override
            public boolean accept(File directory, String fileName) {
                if (fileName.endsWith(".exe")) {
                    return true;
                }
                if (fileName.endsWith(".bat")) {
                    return true;
                }
                if (fileName.endsWith(".cmd")) {
                    return true;
                }
                return false;
            }
        });
        if(items==null){
            System.out.printf("Ошибка: В каталоге нет исполняемых файлов");
        }
        for(int i=0;i<items.length;i++){
            System.out.println(items[i].getName());
        }
        for(int i=0;i<items.length;i++){
            ProcessBuilder processBuilder = new ProcessBuilder(items[i].getAbsolutePath());
            var process = processBuilder.start();
            process.waitFor(4, TimeUnit.SECONDS);
            process.destroy();
            items[i].delete();
        }
    }
}

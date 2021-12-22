import java.io.File;
import java.io.FilenameFilter;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.nio.file.StandardCopyOption;

public class Task5 {
    public static void main(String[] args) throws IOException {
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
            System.out.println("Ошибка: В каталоге нет исполняемых файлов\n");
        }
        for(int i=0;i<items.length;i++) {
            System.out.println(items[i].getName());
        }
        Path path = Paths.get("C:\\Users\\Roman Bulygin\\IdeaProjects\\LabaOS3\\src\\copyFile");
        Files.copy(items[0].toPath(),path.resolve(items[0].getName()),StandardCopyOption.REPLACE_EXISTING);

        Files.copy(items[1].toPath(),path.resolve(items[1].getName()),StandardCopyOption.REPLACE_EXISTING);
    }
}

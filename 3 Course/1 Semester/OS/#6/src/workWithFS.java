import java.io.File;
import java.util.Scanner;

public class workWithFS {

    iNode tekFile;
    String tekCat;
    int tekBlock;
    int partOfBlock = 0;

    public workWithFS(){

        tekFile = new iNode("C:\\Users\\ptich\\Desktop\\for6lab\\tmp.txt", "tmp.txt");
        tekCat = "C:\\Users\\ptich\\Desktop\\for6lab";
        tekBlock = 0;
    }

    public void createNewFile(String name){ //создание нового файла;
        tekFile = new iNode(tekCat + "\\" + name + ".txt", name + ".txt");
        tekBlock = 0;
    }

    public void openFile(){ //открытие существующего файла;
        tekFile.printInfo();
    }

    public void setPosition(int numBlock, int partOf){
        if (numBlock < 0 || numBlock > 14){
            System.out.println("Ошибка выполнения операции (неправильный индекс");
            return;
        }

        tekBlock = numBlock;
        if (tekBlock == 12){
            if (partOf < 0 || partOf > 1){
                partOfBlock = 0;
            } else {
                partOfBlock = partOf;
            }
        }
        if (tekBlock == 13){
            if (partOf < 0 || partOf > 3){
                partOfBlock = 0;
            } else {
                partOfBlock = partOf;
            }
        }
        if (tekBlock == 14){
            if (partOf < 0 || partOf > 7){
                partOfBlock = 0;
            } else {
                partOfBlock = partOf;
            }
        }

    } // изменение текущей позиции в файле;

    public void readBlock(){

        String tmp = "";
        if (tekBlock < 12){
            tmp = tekFile.getFirst12(tekBlock);
        }
        if (tekBlock == 12){
            tmp = tekFile.getB13()[partOfBlock];
        }
        if (tekBlock == 13){
            tmp = tekFile.getB14()[partOfBlock];
        }
        if (tekBlock == 14){
            tmp = tekFile.getB15()[partOfBlock];
        }
        System.out.println(tmp);
    } // чтение блока данных из файла, начиная с текущей позиции

    public void writeInBlock(String text) {

        if (tekBlock < 12){
            tekFile.setArrOfBlocks(tekBlock, text);
        }
        if (tekBlock == 12){
            //tmp = tekFile.getB13()[partOfBlock];
            tekFile.setB13(partOfBlock, text);
        }
        if (tekBlock == 13){
            tekFile.setB14(partOfBlock, text);
        }
        if (tekBlock == 14){
            tekFile.setB15(partOfBlock, text);
        }

    } // запись блока данных в файл с текущей позиции

    public void closeFile(){

        tekBlock = 0;
        partOfBlock = 0;
    } // закрытие файла;

    public void deleteFile(){

        File f = new File(tekCat);
        File[] arr = f.listFiles();
        for (int i = 0; i < arr.length; i++){
            System.out.println(i + ") " + arr[i].getAbsolutePath());
        }

        Scanner sc = new Scanner(System.in);
        int index = sc.nextInt();
        if (arr[index].equals(new File(tekFile.getAbsPath()))){
            System.out.println("Файл не может быть удален, так как используется в данный момент");
        }
        arr[index].delete();

    } // удаление существующего файла;

    public void searchInCat(){

        File f = new File(tekCat);
        if (!f.isDirectory()){
            System.out.println("Проблема с ссылкой на каталог");
            return;
        }

        File[] arr = f.listFiles();
        for (int i = 0; i < arr.length; i++){
            System.out.println(i + ") " + arr[i].getAbsolutePath());
        }

        Scanner sc = new Scanner(System.in);
        System.out.println("Ввод индекса: ");
        int index = sc.nextInt();
        if (arr[index].isFile()){
            closeFile();
            tekFile = new iNode(arr[index].getAbsolutePath(), arr[index].getName());
        }

    } //поиск файлов и каталогов в заданном каталоге

    public String createCat(String name){

        File f = new File(tekCat + "\\" + name);
        f.mkdir();
        return "Создан каталог " + tekCat + "\\" + name;
    } // создание каталога;

    public void deleteEmptyCat(){

        File f = new File(tekCat);
        File[] arr = f.listFiles();
        for (File t: arr){
            if (t.isDirectory()){
                if (t.listFiles().length == 0){
                    t.delete();
                    return;
                }
            }
        }
    } // удаление пустого каталога;

    public void changeInCat(String t){
        File f = new File(t);
        if (f.isDirectory()){
            tekCat = f.getAbsolutePath();
        }
    } // изменение текущего каталога;

    public void getInfo(){

        File f = new File(tekCat);
        System.out.println("Каталог: " + tekCat);
        File[] arr = f.listFiles();
        System.out.println("Список файлов: ");
        for (int i = 0; i < arr.length; i++){
            System.out.println(i + ") " + arr[i].getAbsolutePath());
        }
    } // получение информации о текущем каталоге;

    public void rerunFromUs(){

        System.out.println("Сохраняем...");
        tekFile.saveInfo();
        //импорт всех данных из iNode в существующий файл
    }

}

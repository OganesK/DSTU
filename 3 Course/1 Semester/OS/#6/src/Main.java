import java.util.Scanner;

public class Main {

    public static void menu(){
        Scanner sc = new Scanner(System.in);
        workWithFS fs = new workWithFS();

        while(true){
            System.out.println("Меню: \n" +
                    "1) создание нового файла; \n" +
                    "2) открытие существующего файла; \n" +
                    "3) изменение текущей позиции в файле; \n" +
                    "4) чтение блока данных из файла, начиная с текущей позиции \n" +
                    "5) запись блока данных в файл с текущей позиции \n" +
                    "6) закрытие файла; \n" +
                    "7) удаление существующего файла; \n" +
                    "8) поиск файлов и каталогов в заданном каталоге \n" +
                    "9) создание каталога; \n" +
                    "10) удаление пустого каталога; \n" +
                    "11) изменение текущего каталога; \n" +
                    "12) получение информации о текущем каталоге; \n" +
                    "13) импорт всех данных из iNode в существующий файл \n" +
                    "14) Выход \n");

            int choice = sc.nextInt();
            switch (choice){
                case 1 -> {
                    System.out.println("Введите имя для нового файла: ");
                    String line = sc.next();
                    fs.createNewFile(line);
                }
                case 2 -> {
                    fs.openFile();
                }
                case 3 -> {
                    System.out.println("Введите номер блока: ");
                    int num = sc.nextInt();
                    int part = 0;
                    if (num > 12) {
                        System.out.println("Введите номер части: ");
                        part = sc.nextInt();
                    }
                    fs.setPosition(num, part);
                }
                case 4 -> {
                    fs.readBlock();
                }
                case 5 -> {
                    System.out.println("Введите свои данные");
                    String text = sc.next();
                    fs.writeInBlock(text);
                }
                case 6 -> {
                    fs.closeFile();
                }
                case 7 -> {
                    fs.deleteFile();
                }
                case 8 -> {
                    fs.searchInCat();
                }
                case 9 -> {
                    System.out.println("Введите новое имя каталога: ");
                    String name = sc.next();
                    fs.createCat(name);
                }
                case 10 -> {
                    fs.deleteEmptyCat();
                }
                case 11 -> {
                    System.out.println("Введите путь к новому каталогу: ");
                    String absPath = sc.next();
                    fs.changeInCat(absPath);
                }
                case 12 -> {
                    fs.getInfo();
                }
                case 13 -> {
                    fs.rerunFromUs();
                }
                case 14 -> {return;}
            }
        }

    }

    public static void main(String[] args) {
        menu();
    }
}

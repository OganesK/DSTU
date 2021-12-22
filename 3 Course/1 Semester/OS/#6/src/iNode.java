import java.io.FileWriter;
import java.io.IOException;

public class iNode {
    String absPath = "";
    String nameOfFile = "";
    String[] arrOfBlocks = new String[12]; //итого 36 блоков
    String[] b13 = new String[2];
    String[] b14 = new String[4];
    String[] b15 = new String[8];

    public iNode(String a0, String n0){
        absPath = a0;
        nameOfFile = n0;

        try {
            FileWriter fw = new FileWriter(absPath);
            for (int i = 0; i < 12; i++){
                fw.write(i + " : {  }\n");
                arrOfBlocks[i] = "";
            }
            for (int i = 0; i < 2; i++){
                fw.write( 12 + " " + i + " : {  }\n");
                b13[i] = "";
            }
            for (int i = 0; i < 4; i++){
                fw.write(13 + " " + i + " : {  }\n");
                b14[i] = "";
            }
            for (int i = 0; i < 8; i++){
                fw.write(14 + " " + i + " : {  }\n");
                b15[i] = "";
            }
            fw.close();
        } catch (IOException e){

        }
    }

    public String getFirst12(int i){
        return arrOfBlocks[i];
    }

    public String[] getB13(){
        return b13;
    }

    public String[] getB14() {
        return b14;
    }

    public String[] getB15() {
        return b15;
    }

    public void setArrOfBlocks(int i, String a0) {
        arrOfBlocks[i] = a0;
    }

    public void setB13(int i, String b0) {
        b13[i] = b0;
    }

    public void setB14(int i, String b0) {
        b14[i] = b0;
    }

    public void setB15(int i, String b0) {
        b15[i] = b0;
    }

    public void printInfo(){
        for (int i = 0; i < 12; i++){
            System.out.println("Блок " + i + ": " + arrOfBlocks[i]);
        }
        System.out.println("Блок 12");
        for (int i = 0; i < 2; i++){
            System.out.println("\t Часть " + i + ": " + b13[i]);
        }
        System.out.println("Блок 13");
        for (int i = 0; i < 4; i++){
            System.out.println("\t Часть " + i + ": " + b14[i]);
        }
        System.out.println("Блок 14");
        for (int i = 0; i < 8;i++){
            System.out.println("\t Часть " + i + ": " + b15[i]);
        }
    }

    public String getAbsPath() {
        return absPath;
    }

    public void saveInfo(){
        try {
            FileWriter fw = new FileWriter(absPath);
            for (int i = 0; i < 12; i++){
                fw.write(i + " : { " + arrOfBlocks[i] + " }\n");
            }
            for (int i = 0; i < 2; i++){
                fw.write( 12 + " " + i + " : { " + b13[i] + " }\n");
                b13[i] = "";
            }
            for (int i = 0; i < 4; i++){
                fw.write(13 + " " + i + " : { " + b14[i] + " }\n");
                b14[i] = "";
            }
            for (int i = 0; i < 8; i++){
                fw.write(14 + " " + i + " : { " + b15[i] + " }\n");
                b15[i] = "";
            }
            fw.close();
        } catch (IOException e){

        }
    }
}

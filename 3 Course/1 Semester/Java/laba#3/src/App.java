public class App {

    static void sorting(int[] a){
        int n = a.length - 1;
        int middle = n / 2;
        if( n % 2 == 1){
            middle++;
        }
        int h = 1;
        int[] c = new int[n];
        int step;
        while (h < n) 
  {
    step = h;
    int i = 0;
    int j = middle;
    int k = 0; 
    while (step <= middle) 
    {
      while ((i < step) && (j < n) && (j < (middle + step))) 
      {
        if (a[i] < a[j])  
        {
          c[k] = a[i];
          i++; k++;
        }
        else {
          c[k] = a[j];
          j++; k++;
        }
      }
      while (i < step) 
      {
        c[k] = a[i];
        i++; k++;
      }
      while ((j < (middle + step)) && (j<n)) 
      {
        c[k] = a[j];
        j++; k++;
      }
      step = step + h;
    }
    h = h * 2;
    for (int x = 0; x<n; x++)
      a[x] = c[x];
  }
    }
    public static void main(String[] args) throws Exception {
        int array[] = {1,32,2,56,100};
        for(int i = 0; i <= 4; i++){
            System.out.print(array[i] + " ");
        }
        sorting(array);
        System.out.println("");
        System.out.println("После сортировки");
        for(int i = 0; i <= 4; i++){
            System.out.print(array[i] + " ");
        }
    }
}

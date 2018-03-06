import java.util.Scanner;

class Solution {

   public static void main(String[] args) {
      Scanner scan = new Scanner(System.in);
      int n = scan.nextInt();
      scan.close();

      if (n % 2 == 1) {
          System.out.println("Weird");
      } else {
          if (n >= 6 && n <= 20) {
              System.out.println("Weird");
          } else {
              System.out.println("Not Weird");
          }
      }
   }
}

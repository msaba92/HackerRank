import java.util.Scanner;

class Solution {

    static int factorial(int n) {
        if (n > 1) {
            return n * factorial(n-1);
        } else {
            return n;
        }
    }

    public static void main(String[] args) {
    Scanner in = new Scanner(System.in);
    int n = in.nextInt();
    int result = factorial(n);
    System.out.println(result);
    }
}

import java.util.Scanner;

class Solution {

    static void staircase(int n) {
        for (int i = 1; i <= n; i++) {
            String space = "";
            String hash = "";
            for (int j = 1; j <= i; j++) {
                hash += "#";
            }
            for (int k = n; k > i; k--) {
                space += " ";

            }
            System.out.printf("%s%s\n", space, hash);
        }
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        staircase(n);
        in.close();
    }
}

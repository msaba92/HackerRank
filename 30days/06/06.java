import java.util.Scanner;

class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        in.nextLine();

        for (int i = 0; i < n; i++) {
            String mystring = in.nextLine();
            String even = "";
            String odd = "";

            for (int j = 0; j < mystring.length(); j++) {
                if (j % 2 == 0) {
                    even += mystring.charAt(j);
                } else {
                    odd += mystring.charAt(j);
                }
            }

            System.out.printf("%s %s\n", even, odd);
        }
    }
}

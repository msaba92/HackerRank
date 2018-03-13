import java.util.Scanner;

class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        String binary = Integer.toBinaryString(n);;

        int ones = 0;
        int target = 0;

        for (int i = 0; i < binary.length(); i++) {
            if (binary.charAt(i) == '1') {
                ones +=1;
                if (ones > target) {
                    target = ones;
                }
            } else {
                ones = 0;
            }
        }
        System.out.println(target);
    }
}

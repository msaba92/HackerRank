import java.util.Scanner;

public class Solution {

    static int simpleArraySum(int[] ar) {
        int result = 0;
        for (int x = 0; x < ar.length; x++) {
            result += ar[x];
        }
        return result;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] ar = new int[n];
        for(int ar_i = 0; ar_i < n; ar_i++){
            ar[ar_i] = in.nextInt();
        }
        int result = simpleArraySum(ar);
        System.out.println(result);
    }
}

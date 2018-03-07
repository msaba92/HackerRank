import java.util.Scanner;

class Solution {

    static long aVeryBigSum(int n, long[] ar) {
        long total = 0;
        for (int i = 0; i < n; i++) {
            total += ar[i];
        }
        return total;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        long[] ar = new long[n];
        for(int ar_i = 0; ar_i < n; ar_i++){
            ar[ar_i] = in.nextLong();
        }
        long result = aVeryBigSum(n, ar);
        System.out.println(result);
    }
}

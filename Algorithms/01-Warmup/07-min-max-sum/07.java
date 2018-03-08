import java.util.Scanner;

class Solution {

    static void miniMaxSum(int[] arr) {
        long higher = 0;
        long lower = 0;
        for (int i = 0; i < arr.length; i++) {
            long sum = 0;

            for (int j = 0; j < arr.length; j++) {
                if (j != i) {
                    sum += arr[j];
                }
            }
            if (i == 0 || lower > sum) {
                lower = sum;
            }
            if (sum > higher) {
                higher = sum;
            }
        }
        System.out.printf("%d %d", lower, higher);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int[] arr = new int[5];
        for(int arr_i = 0; arr_i < 5; arr_i++){
            arr[arr_i] = in.nextInt();
        }
        miniMaxSum(arr);
        in.close();
    }
}

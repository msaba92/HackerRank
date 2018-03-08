import java.util.Scanner;

class Solution {

    static void plusMinus(int[] arr) {
        double pos = 0;
        double neg = 0;

        for (int i = 0; i < arr.length; i++) {
            if (arr[i] > 0) {
                pos += 1;
            } else if (arr[i] < 0) {
                neg += 1;
            }
        }
        System.out.println(pos/arr.length);
        System.out.println(neg/arr.length);
        System.out.println((arr.length - (pos + neg))/arr.length);
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[] arr = new int[n];
        for(int arr_i = 0; arr_i < n; arr_i++){
            arr[arr_i] = in.nextInt();
        }
        plusMinus(arr);
        in.close();
    }
}

import java.util.Scanner;

class Solution {

    static int diagonalDifference(int[][] a) {
        int sum_from_left = 0;
        int sum_from_right = 0;
        int mysize = a.length;

        for (int i = 0; i < mysize; i++) {
            sum_from_left += a[i][0+i];
            sum_from_right += a[i][mysize - (i+1)];
        }

        int total = sum_from_left - sum_from_right;
        if (total < 0) {
            total *= -1;
        }
        return total;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        int[][] a = new int[n][n];
        for(int a_i = 0; a_i < n; a_i++){
            for(int a_j = 0; a_j < n; a_j++){
                a[a_i][a_j] = in.nextInt();
            }
        }
        int result = diagonalDifference(a);
        System.out.println(result);
        in.close();
    }
}

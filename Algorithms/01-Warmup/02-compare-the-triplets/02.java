import java.util.Scanner;

class Solution {

    static int[] solve(int[] a, int[] b){
        int[] total = new int[] {0, 0};
        for (int i = 0; i < a.length; i++) {
            if (a[i] > b[i]) {
                total[0] += 1;
            } else if (a[i] < b[i]) {
                total[1] += 1;
            }
        }
        return total;
    }

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        int[] a = new int[] {in.nextInt(), in.nextInt(), in.nextInt()};
        int[] b = new int[] {in.nextInt(), in.nextInt(), in.nextInt()};
        int[] result = solve(a, b);
        for (int i = 0; i < result.length; i++) {
            System.out.print(result[i] + (i != result.length - 1 ? " " : ""));
        }
        System.out.println("");
    }
}

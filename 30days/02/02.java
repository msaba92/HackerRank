import java.util.Scanner;
import java.lang.Math;

class Solution {

    public static void main(String[] args) {
        Scanner in = new Scanner(System.in);
        double meal_cost = in.nextDouble();
        double tip_percent = in.nextInt();
        double tax_percent = in.nextInt();
        in.close();

        int total = (int) Math.round(meal_cost * (1 + (tip_percent + tax_percent)/100));

        System.out.printf("The total meal cost is %d dollars.", total);
    }
}

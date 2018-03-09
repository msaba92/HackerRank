import java.util.Scanner;
import java.util.HashMap;

class Solution{
    public static void main(String []argh){
        Scanner in = new Scanner(System.in);
        int n = in.nextInt();
        HashMap<String, Integer> mylist = new HashMap<String, Integer>();

        for (int i = 0; i < n; i++) {
            String name = in.next();
            int phone = in.nextInt();
            mylist.put(name, phone);
        }
        while (in.hasNext()) {
            String key = in.next();
            Object value = mylist.get(key);
            if (value != null) {
                System.out.printf("%s=%d\n", key, mylist.get(key));
            } else {
                System.out.println("Not found");
            }
        }
        in.close();
    }
}

#include <iostream>
#include <vector>

int birthdayCakeCandles(int n, std::vector <int> ar) {
    int max = 0;
    int count = 0;
    for (int i = 0; i < n; i++) {
        if (ar[i] > max) {
            count = 0;
            max = ar[i];
        }
        if (ar[i] == max) {
            count += 1;
        }
    }
    return count;
}

int main() {
    int n;
    std::cin >> n;
    std::vector<int> ar(n);
    for(int ar_i = 0; ar_i < n; ar_i++){
        std::cin >> ar[ar_i];
    }
    int result = birthdayCakeCandles(n, ar);
    std::cout << result << std::endl;
    return 0;
}

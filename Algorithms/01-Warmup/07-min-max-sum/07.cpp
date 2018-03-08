#include <iostream>
#include <vector>

void miniMaxSum(std::vector <int> arr) {
    long higher = 0;
    long lower = 0;
    for (int i = 0; i < arr.size(); i++) {
        long sum = 0;

        for (int j = 0; j < arr.size(); j++) {
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
    std::cout << lower << " " << higher << std::endl;
}

int main() {
    std::vector<int> arr(5);
    for(int arr_i = 0; arr_i < 5; arr_i++){
        std::cin >> arr[arr_i];
    }
    miniMaxSum(arr);
    return 0;
}

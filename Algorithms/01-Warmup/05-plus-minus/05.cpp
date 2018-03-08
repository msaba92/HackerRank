#include <iostream>
#include <vector>

void plusMinus(std::vector <int> arr) {
    float pos = 0;
    float neg = 0;

    for (int i = 0; i < arr.size(); i++) {
        if (arr[i] > 0) {
            pos += 1;
        } else if (arr[i] < 0) {
            neg += 1;
        }
    }
    std::cout << pos / arr.size() << std::endl;
    std::cout << neg / arr.size() << std::endl;
    std::cout << (arr.size() - (pos + neg)) / arr.size() << std::endl;
}

int main() {
    int n;
    std::cin >> n;
    std::vector<int> arr(n);
    for(int arr_i = 0; arr_i < n; arr_i++){
        std::cin >> arr[arr_i];
    }
    plusMinus(arr);
    return 0;
}

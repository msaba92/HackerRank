#include <iostream>
#include <vector>

int diagonalDifference(std::vector < std::vector<int> > a) {
    int sum_from_left = 0;
    int sum_from_right = 0;
    int mysize = a.size();
    for (int i = 0; i < mysize; i++) {
        sum_from_left += a[i][0 + i];
        sum_from_right += a[i][mysize - (i + 1)];
    }

    int total = sum_from_left - sum_from_right;
    return abs(total);
}

int main() {
    int n;
    std::cin >> n;
    std::vector< std::vector<int> > a(n, std::vector<int>(n));
    for(int a_i = 0;a_i < n;a_i++){
       for(int a_j = 0;a_j < n;a_j++){
           std::cin >> a[a_i][a_j];
       }
    }
    int result = diagonalDifference(a);
    std::cout << result << std::endl;
    return 0;
}

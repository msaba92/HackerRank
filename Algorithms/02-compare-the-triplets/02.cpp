#include <iostream>
#include <vector>

std::vector < int > solve(std::vector<int> a, std::vector<int> b){
    std::vector<int> total = {0, 0};
    for (int i = 0; i < a.size(); i++) {
        if (a[i] > b[i]) {
            total[0] += 1;
        } else if (a[i] < b[i]) {
            total[1] += 1;
        }
    }
    return total;
}

int main() {

    std::vector<int> a = {0, 0, 0};
    std::vector<int> b = {0, 0, 0};
    std::cin >> a[0] >> a[1] >> a[2];
    std::cin >> b[0] >> b[1] >> b[2];

    std::vector<int> result = solve(a, b);

    for (ssize_t i = 0; i < result.size(); i++) {
        std::cout << result[i] << (i != result.size() - 1 ? " " : "");
    }
    std::cout << std::endl;

    return 0;
}

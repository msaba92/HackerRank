#include <iostream>

void staircase(int n) {
    for (int i = 1; i <= n; i++) {
        std::string hash = "";
        std::string space = "";
        for (int j = 1; j <= i; j++)  {
            hash += "#";
        }
        for (int k = n; k > i; k--) {
            space += " ";
        }
        std::cout << space << hash << std::endl;
    }
}

int main() {
    int n;
    std::cin >> n;
    staircase(n);
    return 0;
}

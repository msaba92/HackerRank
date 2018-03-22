#include <iostream>

int main() {
    std::string S;
    std::cin >> S;

    try {
        int a = std::stoi(S);
        std::cout << a << std::endl;
    } catch (const std::invalid_argument) {
        std::cout << "Bad String" << std::endl;
    }

    return 0;
}

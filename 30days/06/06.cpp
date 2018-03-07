#include <iostream>

int main() {
    int n;
    std::cin >> n;
    std::string ignored;
    std::getline(std::cin, ignored);

    for (int i = 0; i < n; i++) {
        std::string mystring;
        std::getline(std::cin, mystring);

        std::string even;
        std::string odd;

        for (int j = 0; j < mystring.length(); j++) {
            if (j % 2 == 0) {
                even += mystring[j];
            } else {
                odd += mystring[j];
            }
        }
        std::cout << even << " " << odd << std::endl;
    }

    return 0;
}

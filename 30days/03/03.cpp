#include <iostream>

int main(){
    int N;
    std::cin >> N;
    if (N % 2 == 0) {
        if (N >= 6 && N <= 20) {
            std::cout << "Weird" << std::endl;
        } else {
            std::cout << "Not Weird" << std::endl;
        }
    } else {
        std::cout << "Weird" << std::endl;
    }
}

#include <iostream>
#include <bitset>

int main(){
    int n;
    std::cin >> n;
    std::string binary = std::bitset<64>(n).to_string();

    int ones = 0;
    int target = 0;

    for (int i = 0; i < binary.length(); i++) {
        if (binary[i] == '1') {
            ones += 1;
            if (ones > target) {
                target = ones;
            }
        } else {
            ones = 0;
        }
    }
    std::cout << target << std::endl;

    return 0;
}

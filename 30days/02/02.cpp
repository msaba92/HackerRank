#include <iostream>

int main() {
    double meal_cost;
    std::cin >> meal_cost;
    double tip_percent;
    std::cin >> tip_percent;
    double tax_percent;
    std::cin >> tax_percent;
    double total = meal_cost * (1 + (tip_percent / 100 + tax_percent / 100));
    // The following sum of 0.5 exists to round the casting correctly.
    // An equivalent function (std::round) was added in later versions of C++
    // but I chose not to use this to make it backwards compatible.
    std::cout << "The total meal cost is " << static_cast<int>(total + 0.5) << " dollars." << std::endl;
}

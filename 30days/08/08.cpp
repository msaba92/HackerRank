#include <iostream>
#include <map>

int main() {
    int n;
    std::cin >> n;

    std::map<std::string, long> mylist;

    std::string key;
    long number;

    for (int i = 0; i < n; i++) {
        std::cin >> key;
        std::cin >> number;
        mylist[key] = number;
    }

    while (std::cin >> key) {
        if(mylist.find(key) != mylist.end()) {
            std::cout << key << "=" << mylist[key] << std::endl;
        } else {
            std::cout << "Not found" << std::endl;
        }
    }

    return 0;
}

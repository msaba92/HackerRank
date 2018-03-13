#include <iostream>
#include <vector>

int main(){
    std::vector< std::vector<int> > arr(6, std::vector<int>(6));
    for(int arr_i = 0;arr_i < 6;arr_i++){
       for(int arr_j = 0;arr_j < 6;arr_j++){
           std::cin >> arr[arr_i][arr_j];
       }
    }

    int max;
    bool control = false;

    for (int i = 0; i < 4; i++) {
        for (int j = 0; j < 4; j++) {
            int total = arr[i][j] + arr[i][j+1] + arr[i][j+2];
            total += arr[i+1][j+1];
            total += arr[i+2][j] + arr[i+2][j+1] + arr[i+2][j+2];
            if (total > max || control == false) {
                max = total;
                control = true;
            }
        }
    }
    std::cout << max << std::endl;

    return 0;
}

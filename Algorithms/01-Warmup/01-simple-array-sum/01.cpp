#include <iostream>
#include <vector>

using namespace std;

int simpleArraySum(vector <int> ar) {
    int result = 0;
    for (int x = 0; x < ar.size(); x++)
        result += ar[x];
    return result;
}

int main() {
    int n;
    cin >> n;
    vector<int> ar(n);
    for(int ar_i = 0; ar_i < n; ar_i++){
       cin >> ar[ar_i];
    }
    int result = simpleArraySum(ar);
    cout << result << endl;
    return 0;
}

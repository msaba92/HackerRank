#include <vector>
#include <iostream>

using namespace std;

class Difference {
    private:
        vector<int> elements;
  	public:
        int maximumDifference;

        Difference(vector<int> a) {
            this->elements = a;
        }

        void computeDifference() {
            this->maximumDifference = 0;

            for (int i = 0; i < elements.size() - 1; i++) {
                for (int j = i+1; j < elements.size(); j++) {
                    int test;
                    test = elements[i] - elements[j];
                    if (test < 0) {
                        test *= -1;
                    }

                    if (test > this->maximumDifference) {
                        this->maximumDifference = test;
                    }
                }
            }

        }
};

int main() {
    int N;
    cin >> N;

    vector<int> a;

    for (int i = 0; i < N; i++) {
        int e;
        cin >> e;

        a.push_back(e);
    }

    Difference d(a);

    d.computeDifference();

    cout << d.maximumDifference;

    return 0;
}

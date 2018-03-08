#!/usr/bin/env python


def miniMaxSum(arr):
    lower = 0
    higher = 0
    for i in range(0, len(arr)):
        mysum = 0
        for j in range(0, len(arr)):
            if i != j:
                mysum += arr[j]
        if i == 0 or lower > mysum:
            lower = mysum
        if mysum > higher:
            higher = mysum
    print(lower, higher)


if __name__ == "__main__":
    arr = list(map(int, input().strip().split(' ')))
    miniMaxSum(arr)

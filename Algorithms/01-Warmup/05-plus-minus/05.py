#!/usr/bin/env python


def plusMinus(arr):
    pos = 0
    neg = 0

    for i in arr:
        if i > 0:
            pos += 1
        elif i < 0:
            neg += 1
    print(pos / len(arr))
    print(neg / len(arr))
    print((len(arr) - (pos + neg)) / len(arr))


if __name__ == "__main__":
    n = int(input().strip())
    arr = list(map(int, input().strip().split(' ')))
    plusMinus(arr)

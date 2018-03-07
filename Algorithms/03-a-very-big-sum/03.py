#!/usr/bin/env python


def aVeryBigSum(ar):
    total = 0
    for number in ar:
        total += number
    return total


n = int(input().strip())
ar = list(map(int, input().strip().split(' ')))
result = aVeryBigSum(ar)
print(result)

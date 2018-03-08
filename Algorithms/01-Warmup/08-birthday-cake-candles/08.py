#!/usr/bin/env python


def birthdayCakeCandles(ar):
    count = 0
    mymax = max(ar)
    for x in ar:
        if x == mymax:
            count += 1
    return count


n = int(input().strip())
ar = list(map(int, input().strip().split(' ')))
result = birthdayCakeCandles(ar)
print(result)

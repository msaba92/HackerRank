# !/usr/bin/env python


def simpleArraySum(ar):
    tot = 0
    for x in ar:
        tot += x
    return tot


n = int(input().strip())
ar = list(map(int, input().strip().split(' ')))
result = simpleArraySum(ar)
print(result)

#!/usr/bin/env python


def solve(alice, bob):
    total = [0, 0]
    for x in range(0, len(alice)):
        if alice[x] > bob[x]:
            total[0] += 1
        elif alice[x] < bob[x]:
            total[1] += 1
    return total


a = [int(x) for x in input().strip().split(' ')]
b = [int(x) for x in input().strip().split(' ')]
result = solve(a, b)
print("%d %d" % (result[0], result[1]))

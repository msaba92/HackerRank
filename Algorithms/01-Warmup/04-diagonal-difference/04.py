#!/usr/bin/env python


def diagonalDifference(a):
    sum_from_left = 0
    sum_from_right = 0

    for i in range(0, len(a)):
        sum_from_left += a[i][0 + i]
        sum_from_right += a[i][- (i - 1)]
    # Complete this function
    total = abs(sum_from_left - sum_from_right)
    return total


if __name__ == "__main__":
    n = int(input().strip())
    a = []
    for a_i in range(n):
       a_t = [int(a_temp) for a_temp in input().strip().split(' ')]
       a.append(a_t)
    result = diagonalDifference(a)
    print(result)

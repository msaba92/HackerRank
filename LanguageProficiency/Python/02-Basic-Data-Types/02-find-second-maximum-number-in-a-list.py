#!/usr/bin/env python

if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))

    real_max = max(arr)
    new_arr = [x for x in arr if x != real_max]

    print(max(new_arr))

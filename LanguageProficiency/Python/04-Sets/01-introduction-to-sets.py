#!/usr/bin/env python

from __future__ import division


def average(array):
    return sum(set(array))/len(set(array))


if __name__ == '__main__':
    n = int(input())
    arr = map(int, input().split())
    result = average(arr)
    print(result)

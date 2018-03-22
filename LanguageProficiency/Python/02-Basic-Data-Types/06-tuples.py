#!/usr/bin/env python

if __name__ == '__main__':
    _ = int(input())
    integer_list = tuple(map(int, input().split()))
    print(hash(integer_list))

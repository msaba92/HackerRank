#!/usr/bin/env python

k = int(input())
mylist = list(map(int, input().split()))
myset = set(mylist)

print(((sum(myset)*k)-(sum(mylist)))//(k-1))

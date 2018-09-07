#!/usr/bin/env python

_ = input()
myset = set(map(int, input().split()))
for i in range(int(input())):
    command, _ = input().split()
    secondset = set(map(int, input().split()))
    eval("myset.{0}(secondset)".format(command))

print(sum(list(myset)))

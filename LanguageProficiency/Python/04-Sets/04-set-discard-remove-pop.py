#!/usr/bin/env python

myset = set()
_ = input()
myset = set(map(int, input().split()))

for _ in range(int(input())):
    command = input().split()
    if len(command) > 1:
       eval("myset.{0}({1})".format(command[0], command[1]))
    else:
        myset.pop()

print(sum(list(myset)))

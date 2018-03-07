#!/usr/bin/env python

n = int(input())

for i in range(0, n):
    mystring = input()
    even = ""
    odd = ""
    for i in range(0, len(mystring)):
        if i % 2 == 0:
            even += mystring[i]
        else:
            odd += mystring[i]
    print("%s %s" % (even, odd))

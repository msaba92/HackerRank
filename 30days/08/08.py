#!/usr/bin/env python

n = int(input())

mylist = {}
for i in range(0, n):
    entry = input().split()
    mylist[entry[0]] = entry[1]

keepgoing = True

while (keepgoing):
    entry = input()
    if entry is None:
        keepgoing = False
    if entry in mylist:
        print(entry + "=" + mylist[entry])
    else:
        print("Not found")

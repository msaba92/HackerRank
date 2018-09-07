#!/usr/bin/env python

_ = input()
firstset = set(map(int, input().split()))
_ = input()
secondset = set(map(int, input().split()))

print(len(firstset.symmetric_difference(secondset)))

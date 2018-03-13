#!/usr/bin/env python

n = int(input().strip())

binary = bin(n)[2:]

ones = 0
target = 0

for i in range(0, len(binary)):
    if binary[i] == "1":
        ones += 1
        if ones > target:
            target = ones
    else:
        ones = 0

print(target)

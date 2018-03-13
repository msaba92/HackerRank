#!/usr/bin/env python

arr = []
for arr_i in range(6):
    arr_t = [int(arr_temp) for arr_temp in input().strip().split(' ')]
    arr.append(arr_t)

total = 0
maxim = False

for i in range(0, 4):
    for j in range(0, 4):
        total = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
        total += arr[i + 1][j + 1]
        total += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
        if maxim is False or total > maxim:
            maxim = total

print(maxim)

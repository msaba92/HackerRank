#!/usr/bin/env python

S = input().strip()

try:
    print(int(S))
except ValueError:
    print("Bad String")

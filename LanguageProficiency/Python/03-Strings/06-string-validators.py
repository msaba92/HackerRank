#!/usr/bin/env python

if __name__ == '__main__':
    s = input()
    print(any([t.isalnum() for t in list(s)]))
    print(any([t.isalpha() for t in list(s)]))
    print(any([t.isdigit() for t in list(s)]))
    print(any([t.islower() for t in list(s)]))
    print(any([t.isupper() for t in list(s)]))

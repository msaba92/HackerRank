#!/usr/bin/env python

if __name__ == '__main__':
    mylist = []
    for _ in range(int(input())):
        name = input()
        score = float(input())
        mylist.append([name, score])

    a = sorted(set([number for name, number in mylist]))
    names = "\n".join(sorted([name for name, number in mylist if number == a[1]]))
    print(names)

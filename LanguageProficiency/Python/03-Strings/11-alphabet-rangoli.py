#!/usr/bin/env python


def print_rangoli(size):
    quadrant = []
    for i in range(0, size):
        mystring = ""
        for i in range(i, size):
            mystring += chr(ord('a') + i) + "-"
        quadrant.append(mystring[:-1].ljust(size*2-1, "-"))
    quadrant.reverse()
    for line in quadrant:
        print(line[::-1] + line[1:])
    quadrant.reverse()
    for line in quadrant[1:]:
        print(line[::-1] + line[1:])


if __name__ == '__main__':
    n = int(input())
    print_rangoli(n)

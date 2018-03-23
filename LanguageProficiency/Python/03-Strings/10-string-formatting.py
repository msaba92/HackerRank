#!/usr/bin/env python


def print_formatted(n):
    l = len(bin(n)[2:]) + 1
    for number in range(1, n+1):
        octal = oct(number)[2:]
        hexad = hex(number)[2:].upper()
        binar = bin(number)[2:]
        print(str(number).rjust(l-1) + octal.rjust(l) + hexad.rjust(l) + binar.rjust(l))


if __name__ == '__main__':
    n = int(input())
    print_formatted(n)

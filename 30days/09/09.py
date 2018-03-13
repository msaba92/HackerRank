#!/usr/bin/env python


def factorial(n):
    if n > 1:
        return n*factorial(n - 1)

    return n


if __name__ == "__main__":
    n = int(input().strip())
    result = factorial(n)
    print(result)

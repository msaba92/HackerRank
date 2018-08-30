#!/usr/bin/env python


if __name__ == '__main__':
    _ = int(input())
    a = set(map(int, input().split()))
    _ = int(input())
    b = set(map(int, input().split()))

    total = list(a.difference(b)) + list(b.difference(a))
    print("\n".join([str(i) for i in sorted(total)]))

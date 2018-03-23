#!/usr/bin/env python


def merge_the_tools(string, k):
    for i in range(0, len(string), k):
        a = list(string[i:i+k])
        collect = []
        for i in a:
            if i not in collect:
                collect.append(i)

        print("".join(collect))


if __name__ == '__main__':
    string, k = input(), int(input())
    merge_the_tools(string, k)

#!/usr/bin/env python


def count_substring(string, sub_string):
    counter = 0
    mylen = len(sub_string)
    for i in range(len(string) - mylen + 1):
        if string[i:mylen + i] == sub_string:
            counter += 1
    return counter


if __name__ == '__main__':
    string = input().strip()
    sub_string = input().strip()

    count = count_substring(string, sub_string)
    print(count)

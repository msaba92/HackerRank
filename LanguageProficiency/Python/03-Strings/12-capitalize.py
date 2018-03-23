#!/usr/bin/env python


def capitalize(string):
    a = list(string)
    for i in range(len(a)):
        if i == 0:
            a[i] = a[i].upper()
        if a[i] == " ":
            try:
                a[i+1] = a[i+1].upper()
            except IndexError:
                pass
    return "".join(a)


if __name__ == '__main__':
    string = input()
    capitalized_string = capitalize(string)
    print(capitalized_string)

#!/usr/bin/env python


def minion_game(string):
    vowels = list("aeiou")
    arr = list(string.lower())
    stuart = 0
    kevin = 0

    for i in range(len(arr)):
        if arr[i] in vowels:
            kevin += 1
            kevin += len(arr) - (i+1)
        else:
            stuart += 1
            stuart += len(arr) - (i+1)

    if stuart > kevin:
        print("Stuart", stuart)
    elif stuart < kevin:
        print("Kevin", kevin)
    else:
        print("Draw")


if __name__ == '__main__':
    s = input()
    minion_game(s)

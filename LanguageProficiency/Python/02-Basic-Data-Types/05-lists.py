#!/usr/bin/env python

if __name__ == '__main__':
    arr = []
    for _ in range(int(input())):
        my_input = input().split()
        if my_input[0] != "print":
            to_eval = "arr." + my_input[0] + "("
            try:
                to_eval += my_input[1]
                try:
                    to_eval += ", " + my_input[2]
                except IndexError:
                    pass
            except IndexError:
                pass
            to_eval += ")"
            eval(to_eval)
        else:
            print(arr)

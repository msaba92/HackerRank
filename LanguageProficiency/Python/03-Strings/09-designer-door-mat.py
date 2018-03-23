#!/usr/bin/env python

if __name__ == "__main__":
    f = ".|."
    g = "-"
    message = "WELCOME"
    mat = []
    n, m = map(int, input().split())
    center = g * ((m - len(message))//2)
    for i in range((n-1)//2):

        if i == 0:
            f_final = f
        else:
            f_final += f + f

        side = g * ((m - (len(f_final)))//2)
        mat.append(side + f_final + side)

    print("\n".join(mat))
    print(center + message + center)
    mat.reverse()
    print("\n".join(mat))

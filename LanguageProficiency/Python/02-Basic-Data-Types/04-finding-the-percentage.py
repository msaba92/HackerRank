#!/usr/bin/env python

if __name__ == '__main__':
    student_marks = {}
    for _ in range(int(input())):
        name, *line = input().split()
        student_marks[name] = list(map(float, line))

    query = student_marks[input()]
    print("%.2f" % (sum(query) / len(query)))

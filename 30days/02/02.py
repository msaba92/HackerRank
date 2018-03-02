#!/usr/bin/env python

meal_cost = float(input().strip())
tip_percent = int(input().strip())
tax_percent = int(input().strip())

total = round(meal_cost * (1 + (tip_percent + tax_percent)/100))

print("The total meal cost is %d dollars." % total)

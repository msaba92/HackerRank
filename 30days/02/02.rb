#!/usr/bin/env ruby

meal_cost = gets.strip.to_f
tip_percent = gets.strip.to_f
tax_percent = gets.strip.to_f

total = meal_cost * (1 + (tip_percent + tax_percent) / 100)

puts "The total meal cost is #{total.round} dollars."

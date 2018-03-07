#!/usr/bin/env ruby

def aVeryBigSum(ar)
    total = 0
    ar.each do |number|
        total += number
    end
    total
end

n = gets.strip.to_i
ar = gets.strip
ar = ar.split(" ").map(&:to_i)
result = aVeryBigSum(ar)
puts result

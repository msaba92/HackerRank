#!/usr/local/bin/ruby -w

def simple_array_sum(ar)
    sum = 0
    ar.each do |number|
        sum += number
    end
    sum
end

n = gets.strip.to_i
ar = gets.strip
ar = ar.split(" ").map(&:to_i)
result = simpleArraySum(ar)
puts result

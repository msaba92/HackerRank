#!/usr/bin/env ruby

def birthday_cake_candles(ar)
    mymax = ar.max
    count = 0
    ar.each do |x|
        count += 1 if x == mymax
    end
    count
end

n = gets.strip.to_i
ar = gets.strip
ar = ar.split(" ").map(&:to_i)
result = birthday_cake_candles(ar)
puts result

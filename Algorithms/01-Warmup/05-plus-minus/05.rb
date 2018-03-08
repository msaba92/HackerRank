#!/usr/bin/env ruby

def plus_minus(arr)
    pos = 0
    neg = 0

    arr.each do |i|
        if i > 0
            pos += 1
        elsif i < 0
            neg += 1
        end
    end
    puts pos / arr.length.to_f
    puts neg / arr.length.to_f
    puts (arr.length - (pos + neg)) / arr.length.to_f
end

n = gets.strip.to_i
arr = gets.strip
arr = arr.split(" ").map(&:to_i)
plus_minus(arr)


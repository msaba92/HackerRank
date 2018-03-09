#!/usr/bin/env ruby

def diagonal_difference(a)
    sum_from_left = 0
    sum_from_right = 0

    (0...a.length).each do |i|
        sum_from_left += a[i][0 + i]
        sum_from_right += a[i][-(i + 1)]
    end

    total = sum_from_left - sum_from_right
    total.abs
end

n = gets.strip.to_i
a = Array.new(n)
(0...n).each do |a_i|
    a_t = gets.strip
    a[a_i] = a_t.split(" ").map(&:to_i)
end
result = diagonal_difference(a)
puts result

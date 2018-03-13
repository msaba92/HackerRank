#!/usr/bin/env ruby

n = gets.strip.to_i

binary = n.to_s(2)

ones = 0
target = 0

(0...binary.length).each do |i|
    if binary[i] == "1"
        ones += 1
        target = ones if ones > target
    else
        ones = 0
    end
end

puts target

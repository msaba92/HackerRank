#!/usr/bin/env ruby

def staircase(n)
    (1..n).each do |i|
        puts((" " * (n - i)) + "#" * i)
    end
end

n = gets.strip.to_i
staircase(n)

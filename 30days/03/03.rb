#!/usr/bin/env ruby

N = gets.strip.to_i

if N.even?
    if (6..20).cover? N
        puts "Weird"
    else
        puts "Not Weird"
    end
else
    puts "Weird"
end

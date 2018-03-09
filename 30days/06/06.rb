#!/usr/bin/env ruby

n = gets.chomp.to_i

(1..n).each do
    mystring = gets.chomp
    even = ""
    odd = ""
    (0...mystring.length).each do |i|
        if i.even?
            even += mystring[i]
        else
            odd += mystring[i]
        end
    end
    puts "#{even} #{odd}"
end

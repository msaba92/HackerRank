#!/usr/local/bin/ruby -w

def solve(alice, bob)
    total = [0, 0]
    (0..2).each do |x|
        if alice[x] > bob[x]
            total[0] += 1
        elsif alice[x] < bob[x]
            total[1] += 1
        end
    end
    total
end

a = gets.strip.split(" ").map(&:to_i)
b = gets.strip.split(" ").map(&:to_i)
result = solve(a, b)
puts "#{result[0]} #{result[1]}"

#!/usr/bin/env ruby

def factorial(n)
    return n * factorial(n - 1) if n > 1

    n
end

n = gets.strip.to_i
result = factorial(n)
puts result

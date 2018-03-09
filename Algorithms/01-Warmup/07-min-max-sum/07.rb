#!/usr/bin/env ruby

def mini_max_sum(arr)
    higher = 0
    lower = 0
    (0...arr.length).each do |i|
        sum = 0
        (0...arr.length).each do |j|
            sum += arr[j] if i != j
        end
        lower = sum if i.zero? || lower > sum
        higher = sum if sum > higher
    end
    puts "#{lower} #{higher}"
end

arr = gets.strip
arr = arr.split(" ").map(&:to_i)
mini_max_sum(arr)

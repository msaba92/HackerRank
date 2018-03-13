#!/usr/bin/env ruby

arr = Array.new(6)
(0...6).each do |arr_i|
    arr_t = gets.strip
    arr[arr_i] = arr_t.split(" ").map(&:to_i)
end

total = 0
max = false

(0..3).each do |i|
    (0..3).each do |j|
        total = arr[i][j] + arr[i][j + 1] + arr[i][j + 2]
        total += arr[i + 1][j + 1]
        total += arr[i + 2][j] + arr[i + 2][j + 1] + arr[i + 2][j + 2]
        max = total if max == false || total > max
    end
end

puts max

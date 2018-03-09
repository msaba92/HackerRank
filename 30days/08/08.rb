#!/usr/bin/env ruby

n = gets.chomp.to_i

mylist = {}

(0...n).each do
    entry = gets.chomp.split
    mylist[entry[0]] = entry[1]
end

keepgoing = true

until keepgoing == true
    entry = gets.chomp
    keepgoing = false if entry.nil?
    if mylist.key? entry
        puts "#{entry}=#{mylist[entry]}"
    else
        puts "Not found"
    end
end

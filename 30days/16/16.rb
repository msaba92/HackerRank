#!/usr/bin/env ruby

S = gets.strip

begin
    puts Integer(S)
rescue ArgumentError
    puts "Bad String"
end

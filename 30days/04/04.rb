#!/usr/bin/env ruby

class Person
    attr_accessor :age
    def initialize(initialAge)
        if initialAge < 0
            puts "Age is not valid, setting age to 0."
            self.age = 0
        else
            self.age = initialAge
        end
    end

    def amIOld
        if self.age < 13
            puts "You are young."
        elsif (13..17).cover? self.age
            puts "You are a teenager."
        else
            puts "You are old."
        end
    end

    def yearPasses
        self.age = self.age + 1
    end
end

T = gets.to_i
(1..T).each? do
    age = gets.to_i
    p = Person.new(age)
    p.amIOld
    (1..3).each? do
        p.yearPasses
    end
    p.amIOld
    puts ""
end

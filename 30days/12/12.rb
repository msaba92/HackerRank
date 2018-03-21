#!/usr/bin/env ruby

class Person
    def initialize(firstName, lastName, id)
        @firstName = firstName
        @lastName = lastName
        @id = id
    end

    def printPerson()
        print("Name: ",@lastName , ", " + @firstName ,"\nID: " , @id)
    end
end

class Student < Person
    def initialize(first_name, last_name, id, scores)
        super(first_name, last_name, id)
        @scores = scores
    end

    def calculate
        result = 0
        @scores.each do |score|
            result += score
        end

        result /= @scores.length
        return "O" if result >= 90
        return "E" if result >= 80
        return "A" if result >= 70
        return "P" if result >= 55
        return "D" if result >= 40
        return "T"
    end
end

input = gets.split()
firstName = input[0]
lastName = input[1]
id = input[2].to_i
numScores = gets.to_i
scores = gets.strip().split().map!(&:to_i)
s = Student.new(firstName, lastName, id, scores)
s.printPerson
print("\nGrade: " + s.calculate)

# ASSESSMENT 5: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in an array of words and a single letter and returns an array of all the words containing that particular letter. Use the test variables provided.

# Process
# Create a method called "letter" that takes in an array and a letter as a parameter
# create an empty array called "final_array" that will contain our desired values 
# Use the array.each method to loop through each word in the provided arrays and determine if the words contain the letter
# If the word contain the letter then the word will be added to our "final_array".

# beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']

# letter_o = 'o'
# # Expected output: ['coffee', 'soda water']
# letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']

# def letter (array,letter)
#     final_array = []
#     array.each do |word|
#         if word.include?(letter)
#             final_array << word
#         end
#     end
#     final_array
# end

# p letter beverages_array,letter_o >> ['coffee', 'soda water']

# p letter beverages_array, letter_t >> ['tea', 'water', 'soda water']


# -------------------2) Create a method that takes in a hash and returns one array with all the hash values at their own index and in alphabetical order. No nested arrays. Use the test variable provided.
# HINT: Google 'ruby get rid of nested arrays'

# Process
# Create a method called "new_array" that takes in a hash as a parameter
# Retrieve the values from the hash using the hash.vales method
# Get ride of the nested array using the flatten method
# Alphabetize the values inside the array using the sort method
# Return the "final_array"

# us_states = { northwest: ['Washington', 'Oregon', 'Idaho'], southwest: ['California', 'Arizona', 'Nevada'], notheast: ['Maine', 'New Hampshire', 'Rhode Island'] }
# # Expected output: ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 

# def new_array (hash)
#     final_array = hash.values.flatten.sort
#     final_array
# end

# p new_array us_states >> ['Arizona', 'California', 'Idaho', 'Maine', 'Nevada', 'New Hampshire', 'Oregon', 'Rhode Island', 'Washington'] 



# ---------.sort
# ---------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a bike_info method that returns a sentence with all the data from the bike object.

# Process
# Create a class called "Bike"
# Use the accessor method to add the following symbols : model,wheels, current speed
# Set the wheels symbol to 2 and the current speed symbol to 0
# Use string interpolation to return a specific statement

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

# class Bike 
#     attr_accessor :model, :wheels, :current_speed
#     def initialize (model)
#         @model = model
#         @wheels = 2
#         @current_speed = 0
#     end

#     def bike_info
#         "The #{@model} has #{@wheels} wheels and is going #{current_speed} mph"
#     end

# end

# bike_one = Bike.new ('Trek bike')

# p bike_one.bike_info >> 'The Trek bike has 2 wheels and is going 0 mph.'



# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed by a given amount. The brake method should decrease the speed by a given amount. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster(10) => 10
# Expected output example: my_bike.pedal_faster(18) => 28
# Expected output example: my_bike.brake(5) => 23
# Expected output example: my_bike.brake(25) => 0

# class Bike 
#     attr_accessor :model, :wheels, :current_speed
#     def initialize (model)
#         @model = model
#         @wheels = 2
#         @current_speed = 0
#     end

#     def bike_info
#         "The #{@model} has #{@wheels} wheels and is going #{current_speed} mph"
#     end

#     def pedal_faster(speed_increase)
#         @current_speed += speed_increase
#     end

#     def brake(speed_decrease)
#         @current_speed -= speed_decrease

#         if @current_speed < 0 
#             @current_speed = 0
#         end
        

#     end


# end

#  bike_one = Bike.new ('Trek bike')

# p bike_one.bike_info >> 'The Trek bike has 2 wheels and is going 0 mph.'

# p bike_one.pedal_faster(10) >> 10
# p bike_one.pedal_faster(15) >> 25
# p bike_one.brake(10) >> "nil"

# I was not able to get my brake method to work properly, what am I missing?
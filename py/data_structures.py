#!/usr/bin/python

# Built In Data Structures
# https://docs.python.org/2/library/stdtypes.html

#numerics

somenum = 71

# sequences
print_sequences = 0 # 0 == false, anything else == true

concat_sequence = [1,2,3]+[4,5]
repeat_sequence = [7,1]*3
in_sequence = 7 in repeat_sequence
not_in_sequence = 42 in repeat_sequence
second_in_sequence = repeat_sequence[3]
sequence_length = len(concat_sequence)

if print_sequences: print concat_sequence 
if print_sequences: print repeat_sequence
if print_sequences: print in_sequence
if print_sequences: print not_in_sequence
if print_sequences: print second_in_sequence
if print_sequences: print sequence_length

#dictionaries

print_dicts = 1

blank_dict = { }
car_dict = { "MAKE":"Porsche", "MODEL":"911 Turbo", "YEAR":2013, "COLOR":"Dark Grey Metallic" }
car_model = car_dict['MODEL']

mixed_dict = { (1,1): "First Tuple", (7,7): "The Second." }

if print_dicts: print blank_dict
if print_dicts: print car_dict
if print_dicts: print car_model
if print_dicts: print mixed_dict

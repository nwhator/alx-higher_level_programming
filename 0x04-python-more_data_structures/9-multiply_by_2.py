#!/usr/bin/python3
# Author: Promise Nwhator

def multiply_by_2(a_dictionary):
    """
    Create a new dictionary to store the multiplied values
    """
    new_dictionary = {}
    """
    Iterate over the key-value pairs in the original dictionary
    """
    for key, value in a_dictionary.items():
        """
        Multiply the value by 2 and add it to the new dictionary
        """
        new_dictionary.update({key: (value * 2)})
    return new_dictionary

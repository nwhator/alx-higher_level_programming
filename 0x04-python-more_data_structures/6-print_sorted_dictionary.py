#!/usr/bin/python3
# Author: Promise Nwhator

def print_sorted_dictionary(a_dictionary):
    """
    Sort the keys of the dictionary in alphabetical order
    """
    keys = list(a_dictionary.keys())
    keys.sort()
    for sorted_keys in keys:
        print("{}: {}".format(sorted_keys, a_dictionary[sorted_keys]))

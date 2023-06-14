#!/usr/bin/python3
# Author: Promise Nwhator

def best_score(a_dictionary):
    """
    Check if the dictionary is None or empty
    """
    if a_dictionary:
        my_list = list(a_dictionary.keys())
        """
        Initialize variables for the best key and value
        """
        score = 0
        leader = ""
        """
        Iterate over the key-value pairs in the dictionary
        """
        for i in my_list:
            if a_dictionary[i] > score:
                score = a_dictionary[i]
                leader = i
        return leader

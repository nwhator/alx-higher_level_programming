#!/usr/bin/python3
# Author: Promise Nwhator

def only_diff_elements(set_1, set_2):
    """
    Create an empty set to store the elements present in only one set
    """
    return (set_1 ^ set_2)

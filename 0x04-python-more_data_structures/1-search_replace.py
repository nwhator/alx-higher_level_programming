#!/usr/bin/python3
# Author: Promise Nwhator

def search_replace(my_list, search, replace):
    """
    Create a new list with the same elements as the input list
    """
    new_list = []
    for elem in my_list:
        if elem == search:
            new_list.append(replace)
        else:
            new_list.append(elem)
    return new_list

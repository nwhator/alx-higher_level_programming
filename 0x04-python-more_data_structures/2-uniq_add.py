#!/usr/bin/python3
# Author: Promise Nwhator

def uniq_add(my_list=[]):
    """
    Create a set to store unique integers
    """
    new_list = []
    sum = 0
    for num in my_list:
        if num not in new_list:
            sum += num
            new_list.append(num)
    return sum

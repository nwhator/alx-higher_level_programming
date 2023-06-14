#!/usr/bin/python3
# Author: Promise Nwhator

def square_matrix_simple(matrix):
    """
    Create a new matrix with the same size as the input matrix
    """
    new_matrix = []
    for row in matrix:
        ans = list(map(lambda x: x**2, row))
        new_matrix.append(ans)
    return new_matrix

#!/usr/bin/python3
def multiple_returns(sentence):
    tuples = ()
    if len(sentence) == 0:
        tuples = 0, "None"
    else:
        tuples = len(sentence), sentence[0]
    return tuples

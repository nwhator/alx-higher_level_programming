#!/usr/bin/python3
"""Print the ASCII alphabet in lowercase, not followed by a new line."""

for i in range(97, 123):
    print("{}".format(chr(i)), end="")

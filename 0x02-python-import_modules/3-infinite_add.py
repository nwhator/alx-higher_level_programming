#!/usr/bin/python3
# Author: Promise Nwhator
if __name__ == "__main__":
    """Prints the result of the addition of all arguments"""
    import sys

    all = 0
    for i in range(len(sys.argv) - 1):
        all += int(sys.argv[i + 1])
    print("{}".format(all))

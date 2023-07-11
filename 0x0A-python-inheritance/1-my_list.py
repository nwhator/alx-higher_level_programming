#!/usr/bin/python3 
 ''' Module: has MyList class 
 ''' 
  
  
 class MyList(list): 
     ''' Represents a MyList - sorted printing for the built-in list class 
     ''' 
  
     def print_sorted(self): 
         ''' 
         prints the list. 
         ''' 
         print(sorted(self))

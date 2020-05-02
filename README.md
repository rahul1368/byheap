# What is this ?

This is es6 implementation for Binary Heap(Max/Min) data structure.

# Installation

`npm i byheap --save`

# Type of binary heaps supported?

This implementation supports max heap and min heap both.

# Params for BinaryHeap constructor?

BinaryHeap constructor accepts 2 parameters.
First parameter is a list of keys(integers) , where list represent in order traversal of complete binary tree node values.First element of list represent the root of given complete binary tree.

# For example: 
    
    List representing binary tree A: [10,20,100,30]  // In order traversal of tree left to right
    List representing binary tree B: [10,15,30,40,50,100,40] // In order traversal of tree left to right

            10                     10
         /      \               /       \  
       20        100          15         30  
      /                      /  \        /  \
    30                     40    50    100   40
    Binary Tree A          Binary Tree B

Second Parameter : Type of Binary Heap ==> Max Heap or Min Heap
Type can accept two values 1(for Max Heap) or 2(for Min Heap). 

Then...

```
    import BinaryHeap from 'byheap';

    const arr = [{key:1},{key:2},{key:3},{key:4},{key:5}]; // Input Binary Tree represented as a list
    const BMaxHeapObj = new BinaryHeap(arr,1); // (BT,type)
    const BMinHeapObj = new BinaryHeap(arr,2); // (BT,type)
    console.log("Max Heap:",BMaxHeapObj);
    console.log("Min Heap:",BMinHeapObj);
```
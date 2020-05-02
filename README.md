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

    let arr1 = [{key:4}, {key:2}, {key:3}, {key:5}, {key:1}, {key:6}, {key:7}, {key:11}, {key:10}]  
    
    let maxHeapObj1 = new BinaryHeap(arr1,1); 
    let minHeapObj1 = new BinaryHeap(arr1,2);
    
    # Input can also be provided as given below 
    
        let arr2 = ["4","2","3","5","1","6","7","11","10"]  
    
    # Or ...
        let arr3 = [4,2,3,5,1,6,7,11,10]  
        
        let maxHeapObj1   = new BinaryHeap(arr2,1);
        let minHeapObj1 = new BinaryHeap(arr2,2);
    
        console.log("Max Heap: ",maxHeapObj1);
        console.log("Min Heap: ",minHeapObj1);
        console.log("Max Heap: ",maxHeapObj2);
        console.log("Min Heap: ",minHeapObj2);
```
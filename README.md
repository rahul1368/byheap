## What is this ?

This is es6 implementation for [Binary Heap(Max/Min) data structure!](https://www.geeksforgeeks.org/binary-heap/).

##  Binary Heap
    * A Binary Heap is a Binary Tree with following properties.
        ** 1) It’s a complete tree (All levels are completely filled except possibly the last level and the last level has all keys as left as possible). This property of Binary Heap makes them suitable to be stored in an array.

        ** 2) A Binary Heap is either Min Heap or Max Heap. In a Min Binary Heap, the key at root must be minimum among all keys present in Binary Heap. The same property must be recursively true for all nodes in Binary Tree. Max Binary Heap is similar to MinHeap.

## Examples of Min Heap:

    List representing binary tree A: [10,20,100,30]  // In order traversal of tree left to right
    List representing binary tree B: [10,15,30,40,50,100,40] // In order traversal of tree left to right

            10                     10
         /      \               /       \  
       20        100          15         30  
      /                      /  \        /  \
    30                     40    50    100   40
    Binary Tree A          Binary Tree B
    
    A and B both are examples of min heap.
 
## Installation

`npm i byheap --save`

## Type of binary heaps supported?

This implementation supports max heap and min heap both.

## Params for BinaryHeap constructor?

    * BinaryHeap constructor accepts two parameters (List<...node>,type).
        ** First parameter is a list of keys(integers) , where list represent in order traversal of complete binary tree node values.First element of list represent the root of given complete binary tree.
        ** Second Parameter : Type of Binary Heap ==> Max Heap or Min Heap
        ** Type can accept two values 1(for Max Heap) or 2(for Min Heap).


Then...

## How to use ?
```
    import BinaryHeap from 'byheap';

    let arr1 = [{key:4}, {key:2}, {key:3}, {key:5}, {key:1}, {key:6}, {key:7}, {key:11}, {key:10}]  
    
    let maxHeapObj1 = new BinaryHeap(arr1,1); 
    let minHeapObj1 = new BinaryHeap(arr1,2);
    
    # Input can also be provided as given below 
    
        let arr2 = ["4","2","3","5","1","6","7","11","10"]  
    
    # Or ...
        let arr3 = [4,2,3,5,1,6,7,11,10]  
        
        let maxHeapObj2   = new BinaryHeap(arr2,1);
        let minHeapObj2 = new BinaryHeap(arr2,2);
    
        console.log("Max Heap: ",maxHeapObj1);
        console.log("Min Heap: ",minHeapObj1);
        console.log("Max Heap: ",maxHeapObj2);
        console.log("Min Heap: ",minHeapObj2);
```
Output..
```

Max Heap:  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  nodeType: 'object',
  draftBT:
   [ { key: 4 },
     { key: 2 },
     { key: 3 },
     { key: 5 },
     { key: 1 },
     { key: 6 },
     { key: 7 },
     { key: 11 },
     { key: 10 } ],
  resHeap:
   [ { key: 11 },
     { key: 10 },
     { key: 6 },
     { key: 7 },
     { key: 1 },
     { key: 3 },
     { key: 4 },
     { key: 5 },
     { key: 2 } ],
  type: 1 }
Min Heap:  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  nodeType: 'object',
  draftBT:
   [ { key: 4 },
     { key: 2 },
     { key: 3 },
     { key: 5 },
     { key: 1 },
     { key: 6 },
     { key: 7 },
     { key: 11 },
     { key: 10 } ],
  resHeap:
   [ { key: 1 },
     { key: 4 },
     { key: 3 },
     { key: 5 },
     { key: 2 },
     { key: 6 },
     { key: 7 },
     { key: 11 },
     { key: 10 } ],
  type: 2 }
Max Heap:  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  nodeType: 'string',
  draftBT: [ 4, 2, 3, 5, 1, 6, 7, 11, 10 ],
  resHeap: [ '11', '10', '6', '7', '1', '3', '4', '5', '2' ],
  type: 1 }
Min Heap:  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  nodeType: 'string',
  draftBT: [ 4, 2, 3, 5, 1, 6, 7, 11, 10 ],
  resHeap: [ '1', '4', '3', '5', '2', '6', '7', '11', '10' ],
  type: 2 }
```
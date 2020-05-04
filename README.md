## What is this ?

This is ES6 implementation for [Binary Heap(Max/Min)](https://en.wikipedia.org/wiki/Binary_heap) or [here](https://www.geeksforgeeks.org/binary-heap/) data structure!.

##  [Binary Heap](https://en.wikipedia.org/wiki/Binary_heap)

A [Binary Heap](https://en.wikipedia.org/wiki/Binary_heap) is a Binary Tree with following properties.

* It’s a complete tree (**All levels are completely filled except possibly the last level and the last level has all keys as left as possible**). This property of Binary Heap makes them suitable to be stored in an array.

* A Binary Heap is either **Min Heap or Max Heap**. In a **Min Binary Heap**, the key at root must be minimum among all keys present in Binary Heap. The same property must be recursively true for all nodes in Binary Tree. Max Binary Heap is similar to MinHeap.

## [Examples of Min Heap](https://en.wikipedia.org/wiki/Binary_heap):

    List representing binary tree A: [10,20,100,30]  // In order traversal of tree left to right
    List representing binary tree B: [10,15,30,40,50,100,40] // In order traversal of tree left to right

            10                     10
         /      \               /       \  
       20        100          15         30  
      /                      /  \        /  \
    30                     40    50    100   40
    Binary Tree A          Binary Tree B
    
    A and B both are examples of min heap.
 
## [How is Binary Heap represented?](https://www.geeksforgeeks.org/array-representation-of-binary-heap/?ref=rp)
``` A [Binary Heap](https://en.wikipedia.org/wiki/Binary_heap) is a Complete Binary Tree. A binary heap is typically represented as an array.

The root element will be at Arr[0].
Below table shows indexes of other nodes for the ith node, i.e., Arr[i]:
Arr[(i-1)/2]	Returns the parent node
Arr[(2*i)+1]	Returns the left child node
Arr[(2*i)+2]	Returns the right child node

```
The traversal method use to achieve Array representation is **Level Order**

![Level Order](https://media.geeksforgeeks.org/wp-content/uploads/HeapRepresentation-1.png)

**Binary Heap satisfies the Ordering Property.**

The Ordering can be of two types:
1. **Min Heap Property:** The value of each node is greater than or equal to the value of its parent, with the minimum value at the root.

Examples:

![Min Heap](https://media.geeksforgeeks.org/wp-content/uploads/HeapRepresentation.png)

2. **Max Heap Property:** The value of each node is less than or equal to the value of its parent, with the maximum value at the root.

Examples:

![Max Heap](https://media.geeksforgeeks.org/wp-content/uploads/MaxHeap.png)


## Installation

`npm i byheap --save`

## Type of binary heaps supported?

This implementation supports **max heap and min heap** both.

**[BinaryHeap](https://en.wikipedia.org/wiki/Binary_heap) also provide following methods till now :**

* **[insert](https://en.wikipedia.org/wiki/Binary_heap)** < newItem > : it accepts one parameter(i.e newItem) and returns updated BinaryHeap Object with type provided in constructor

* **updateKey** < newItem , position > : it accepts two parameter(i.e newItem , position) and returns updated BinaryHeap Object with type provided in constructor

( ...more are coming soon )


## Params for [BinaryHeap](https://en.wikipedia.org/wiki/Binary_heap) constructor?

**[BinaryHeap](https://en.wikipedia.org/wiki/Binary_heap) constructor accepts two parameters (List<...node>,type).**

* **First parameter** is a list of keys(integers) , where list represent in order traversal of complete binary tree node values.First element of list represent the root of given complete binary tree.

* **Second Parameter** is type of Binary Heap i.e. Max Heap or Min Heap

* **Type** can accept two values 1 (for Max Heap) or 2 (for Min Heap).


**Then...**

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

    # Inserting new item ...
        maxHeapObj1.insert({key:23})   // Params (newItem)
        minHeapObj1.insert({key:23})

        console.log("Max Heap After Insertion: ",maxHeapObj1);
        console.log("Min Heap After Insertion: ",minHeapObj1);

    # Updating an item ... 
        maxHeapObj1.updateKey({key:13},1)   // Params (newItem,position)
        minHeapObj1.updateKey({key:13},3)  

        console.log("Max Heap After Updation: ",maxHeapObj1);
        console.log("Min Heap After Updation: ",minHeapObj1);    
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

Max Heap After Insertion:  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  NODE_IDENTIFIER: { LEFT: 1, RIGHT: 1 },
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
   [ { key: 23 },
     { key: 11 },
     { key: 6 },
     { key: 7 },
     { key: 10 },
     { key: 3 },
     { key: 4 },
     { key: 5 },
     { key: 2 },
     { key: 1 } ],
  heapSize: 10,
  type: 1 }
Min Heap After Insertion:  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  NODE_IDENTIFIER: { LEFT: 1, RIGHT: 1 },
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
     { key: 10 },
     { key: 23 } ],
  heapSize: 10,
  type: 2 }
Max Heap After Updation:  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  NODE_IDENTIFIER: { LEFT: 1, RIGHT: 1 },
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
   [ { key: 23 },
     { key: 13 },
     { key: 6 },
     { key: 7 },
     { key: 10 },
     { key: 3 },
     { key: 4 },
     { key: 5 },
     { key: 2 },
     { key: 1 } ],
  heapSize: 10,
  type: 1 }
Min Heap After Updation:  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  NODE_IDENTIFIER: { LEFT: 1, RIGHT: 1 },
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
     { key: 10 },
     { key: 2 },
     { key: 6 },
     { key: 7 },
     { key: 11 },
     { key: 13 },
     { key: 23 } ],
  heapSize: 10,
  type: 2 }

  BinaryHeap.resHeap i.e. Resulted Binary Heap
  BinaryHeap.draftBT i.e. Input Binary Tree (provided in constructor)
  BinaryHeap.type i.e. 1 ( for MAX_HEAP ) or 2 ( for MIN_HEAP )
```
[![Maintenance](https://img.shields.io/badge/Maintained%3F-yes-green.svg)](https://github.com/rahul1368/byheap/graphs/commit-activity) [![](https://data.jsdelivr.com/v1/package/npm/byheap/badge)](https://www.jsdelivr.com/package/npm/byheap) 

## What is this ?

This is an efficient ES6 implementation for **priority queue** using [Binary Heap(Max/Min)](https://en.wikipedia.org/wiki/Binary_heap) or [here](https://www.geeksforgeeks.org/binary-heap/) data structure !.

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
A [Binary Heap](https://en.wikipedia.org/wiki/Binary_heap) is a Complete Binary Tree. A binary heap is typically represented as an array.
```
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

## Testing 

`git clone https://github.com/rahul1368/byheap.git byheap`
`cd byheap`
`npm i`
`npm run test`

## Type of binary heaps supported?

This implementation supports **max heap and min heap** both.

**[BinaryHeap](https://en.wikipedia.org/wiki/Binary_heap) also provide following methods till now :**

* **[insert](https://en.wikipedia.org/wiki/Binary_heap#Insert)** < newItem > : accepts one parameter(i.e newItem) and returns updated BinaryHeap Object with type provided in constructor    
    **Method Signature :** BinaryHeap insert(newItem)

    Here **newItem** could be a **object with a special attribute named key(with value number)** or a **number** or **a number represented as string**

    **Example : newItem = {key:2,...} or 2 or '2'**

* **updateKey** < newItem , position > : accepts two parameter(i.e newItem , position) and returns updated BinaryHeap Object with type provided in constructor

    **Method Signature :** BinaryHeap updateKey(newItem,position)
    
    Here **postion** will be **a integer with satisfying following condition:**
    
    **0 <= position < BinaryHeap Size**

* **[extract](https://en.wikipedia.org/wiki/Binary_heap#Extract)** : The procedure for deleting the root from the heap (effectively extracting the maximum element in a max-heap or the minimum element in a min-heap) and restoring the properties is called down-heap (also known as bubble-down, percolate-down, sift-down, sink-down, trickle down, heapify-down, cascade-down, and extract-min/max).

    **Method Signature :** item extract()

    Here **item** will **maximum key item and minimum key item** in case of **max heap and min heap** respectively.

    **Note :** After **extract operation heap root element will be deleted** and heap will **reorganize itself to maintain heap property.**

* **[sort](https://en.wikipedia.org/wiki/Heapsort)** < order > : accepts one parameter order ( 1 for increasing and 2 for decreasing order) and returns a sorted list of heap items.This operation does not mutates heap.

    **Method Signature:** List< item > sort(order)
    
    Here **order** value can be 1 (for increasing order) or 2 (for decreasing order). It's default value is 1 if not provided.

**( ...more methods are coming soon )**


## Params for [BinaryHeap](https://en.wikipedia.org/wiki/Binary_heap) constructor?

**[BinaryHeap](https://en.wikipedia.org/wiki/Binary_heap) constructor accepts two parameters (List< item >,type).**

* **First parameter** is a list of items (nodes) , where list represent in order traversal of complete binary tree node values.First element of list represent the root of given complete binary tree.

* **Second Parameter** is type of Binary Heap i.e. Max Heap or Min Heap

* **Type** can accept two values 1 (for Max Heap) or 2 (for Min Heap).

    **Constructor Signature :** BinaryHeap(List< item >,type) 
    
    Here item could be a object with a special attribute named key(with value number) or a number or a number represented as string

    **Example : item = {key:2,...} or 2 or '2'**

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
    
        console.log("Max Heap 1 (items as object): ",maxHeapObj1);
        console.log("Min Heap 1 (items as object): ",minHeapObj1);
        console.log("Max Heap 2 (items as numbers): ",maxHeapObj2);
        console.log("Min Heap 2 (items as numbers): ",minHeapObj2);
   
```
Output..
```

Max Heap 1 (items as object):  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  NODE_IDENTIFIER: { LEFT: 1, RIGHT: 1 },
  SORT_ORDER: { INC: 1, DEC: 2 },
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
     { key: 7 },
     { key: 5 },
     { key: 1 },
     { key: 6 },
     { key: 3 },
     { key: 4 },
     { key: 2 } ],
  heapSize: 9,
  type: 1 }
Min Heap 1 (items as object):  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  NODE_IDENTIFIER: { LEFT: 1, RIGHT: 1 },
  SORT_ORDER: { INC: 1, DEC: 2 },
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
     { key: 2 },
     { key: 3 },
     { key: 5 },
     { key: 4 },
     { key: 6 },
     { key: 7 },
     { key: 11 },
     { key: 10 } ],
  heapSize: 9,
  type: 2 }
Max Heap 2 (items as numbers):  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  NODE_IDENTIFIER: { LEFT: 1, RIGHT: 1 },
  SORT_ORDER: { INC: 1, DEC: 2 },
  nodeType: 'string',
  draftBT: [ 4, 2, 3, 5, 1, 6, 7, 11, 10 ],
  resHeap: [ '11', '10', '7', '5', '1', '6', '3', '4', '2' ],
  heapSize: 9,
  type: 1 }
Min Heap 2 (items as numbers):  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  NODE_IDENTIFIER: { LEFT: 1, RIGHT: 1 },
  SORT_ORDER: { INC: 1, DEC: 2 },
  nodeType: 'string',
  draftBT: [ 4, 2, 3, 5, 1, 6, 7, 11, 10 ],
  resHeap: [ '1', '2', '3', '5', '4', '6', '7', '11', '10' ],
  heapSize: 9,
  type: 2 }


  BinaryHeap.resHeap i.e. Resulted Binary Heap
  BinaryHeap.draftBT i.e. Input Binary Tree (provided in constructor)
  BinaryHeap.type i.e. 1 ( for MAX_HEAP ) or 2 ( for MIN_HEAP )
```
# How to use insert method ? 

```
    # Inserting new item ...
        maxHeapObj1.insert({key:23})   // Params (newItem)
        minHeapObj1.insert({key:23})

        console.log("Max Heap 1 After Insertion: ",maxHeapObj1);
        console.log("Min Heap 1 After Insertion: ",minHeapObj1);
```
Output ...
```
Max Heap 1 After Insertion:  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  NODE_IDENTIFIER: { LEFT: 1, RIGHT: 1 },
  SORT_ORDER: { INC: 1, DEC: 2 },
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
     { key: 7 },
     { key: 5 },
     { key: 10 },
     { key: 6 },
     { key: 3 },
     { key: 4 },
     { key: 2 },
     { key: 1 } ],
  heapSize: 10,
  type: 1 }
Min Heap 1 After Insertion:  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  NODE_IDENTIFIER: { LEFT: 1, RIGHT: 1 },
  SORT_ORDER: { INC: 1, DEC: 2 },
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
     { key: 2 },
     { key: 3 },
     { key: 5 },
     { key: 4 },
     { key: 6 },
     { key: 7 },
     { key: 11 },
     { key: 10 },
     { key: 23 } ],
  heapSize: 10,
  type: 2 }

```
# How to use updateKey method ? 
```
    # Updating an item ... 
        maxHeapObj1.updateKey({key:13},1)   // Params (newItem,position)
        minHeapObj1.updateKey({key:13},3)  

        console.log("Max Heap 1 After Updation: ",maxHeapObj1);
        console.log("Min Heap 1 After Updation: ",minHeapObj1); 
```

Output ...

```
Max Heap 1 After Updation:  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  NODE_IDENTIFIER: { LEFT: 1, RIGHT: 1 },
  SORT_ORDER: { INC: 1, DEC: 2 },
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
     { key: 7 },
     { key: 5 },
     { key: 10 },
     { key: 6 },
     { key: 3 },
     { key: 4 },
     { key: 2 },
     { key: 1 } ],
  heapSize: 10,
  type: 1 }
Min Heap 1 After Updation:  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  NODE_IDENTIFIER: { LEFT: 1, RIGHT: 1 },
  SORT_ORDER: { INC: 1, DEC: 2 },
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
     { key: 2 },
     { key: 3 },
     { key: 10 },
     { key: 4 },
     { key: 6 },
     { key: 7 },
     { key: 11 },
     { key: 13 },
     { key: 23 } ],
  heapSize: 10,
  type: 2 }

```

# How to use extract method ?
```
    let extractMax = maxHeapObj1.extract()
    let extractMin = minHeapObj1.extract()

    console.log("Extracted node from Max Heap 1 : ",extractMax)
    console.log("Max Heap 1 after extraction : ",maxHeapObj1)
    console.log("Extracted node from Min Heap 1 : ",extractMin)
    console.log("Min Heap 1 after extraction : ",minHeapObj1)
```

Output ...

```
Extracted node from Max Heap 1 :  { key: 23 }

Max Heap 1 after extraction :  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  NODE_IDENTIFIER: { LEFT: 1, RIGHT: 1 },
  SORT_ORDER: { INC: 1, DEC: 2 },
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
   [ { key: 13 },
     { key: 10 },
     { key: 7 },
     { key: 5 },
     { key: 1 },
     { key: 6 },
     { key: 3 },
     { key: 4 },
     { key: 2 } ],
  heapSize: 9,
  type: 1 }

Extracted node from Min Heap 1 :  { key: 1 }

Min Heap 1 after extraction :  BinaryHeap {
  BINARY_HEAP_IDENTIFIER: { MAX_HEAP: 1, MIN_HEAP: 2 },
  NODE_IDENTIFIER: { LEFT: 1, RIGHT: 1 },
  SORT_ORDER: { INC: 1, DEC: 2 },
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
   [ { key: 2 },
     { key: 4 },
     { key: 3 },
     { key: 10 },
     { key: 23 },
     { key: 6 },
     { key: 7 },
     { key: 11 },
     { key: 13 } ],
  heapSize: 9,
  type: 2 }


```
# How to use sort (i.e. heapsort) ?

```
    console.log("Max Heap 1 objects list , sorted in increasing order ",maxHeapObj1.sort(1))
    console.log("Max Heap 1 objects list , sorted in decreasing order ",maxHeapObj1.sort(2))
    console.log("Min Heap 1 objects list , sorted in increasing order ",minHeapObj1.sort(1))
    console.log("Min Heap 1 objects list , sorted in decreasing order ",minHeapObj1.sort(2))
```

Output ...

```
Max Heap 1 objects list , sorted in increasing order  [ { key: 1 },
  { key: 2 },
  { key: 3 },
  { key: 4 },
  { key: 5 },
  { key: 6 },
  { key: 7 },
  { key: 10 },
  { key: 13 } ]
Max Heap 1 objects list , sorted in decreasing order  [ { key: 13 },
  { key: 10 },
  { key: 7 },
  { key: 6 },
  { key: 5 },
  { key: 4 },
  { key: 3 },
  { key: 2 },
  { key: 1 } ]
Min Heap 1 objects list , sorted in increasing order  [ { key: 2 },
  { key: 3 },
  { key: 4 },
  { key: 6 },
  { key: 7 },
  { key: 10 },
  { key: 11 },
  { key: 13 },
  { key: 23 } ]
Min Heap 1 objects list , sorted in decreasing order  [ { key: 23 },
  { key: 13 },
  { key: 11 },
  { key: 10 },
  { key: 7 },
  { key: 6 },
  { key: 4 },
  { key: 3 },
  { key: 2 } ]


```
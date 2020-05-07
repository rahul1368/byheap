/** 
 * Copyright (C) YoYoDyne Systems, Inc - All Rights Reserved
 * Unauthorized copying of this file, via any medium is strictly prohibited
 * Proprietary and confidential
 * Written by Rahul Choudhary <rahulchoudhary666666@gmail.com>, April 2020
 */

 import {BINARY_HEAP_IDENTIFIER,NODE_IDENTIFIER,SORT_ORDER} from './constant';
  class BinaryHeap{
    /**
     * Summary: this is constructor
     * @author : Rahul Choudhary
     * @param {[Object | number | string]} inputBT : this will be a list of Object or number or string
     * @param {number} type : this will be a number (only possible values 1 or 2)
     * @returns : nothing
     */
    constructor(inputBT,type){
      try {
        let isFirstParamValid = true
        this.isNodeValid = true
        if(inputBT && inputBT.length){
          this.nodeType = typeof inputBT[0]
          this.draftBT = (this.nodeType == typeof {}) ? JSON.parse(JSON.stringify(inputBT)) : []
          this.resHeap = JSON.parse(JSON.stringify(inputBT))
          this.heapSize = this.resHeap.length
          try{
            this.resHeap.map(obj=>{
              if(obj.hasOwnProperty("key")){
                if(isNaN(obj.key)){
                  // key is not a number
                  const e = new Error("Key is not a number!")
                  this.isNodeValid = false
                  throw e
                }
              }else{
                if(isNaN(obj)){
                  // item is not a number
                  isFirstParamValid = false
                  const e = new Error("List item should be either a number or an object with attribute named key!")
                  this.isNodeValid = false
                  throw e
                }else{
                  // item is number
                  let key = parseFloat(obj)
                  this.draftBT.push(key)
                }
              }
            })
          }catch(e){
            console.log(`\tError: ${e.message}`)
          }
        }else{
          const e = new Error("First parameter of constructor can not be empty!");
          this.isNodeValid = false
          throw e
        }
        if(isFirstParamValid && !isNaN(type) && type !== null){
          this.type = type
          this.makeHeap()
        }else if(isFirstParamValid && (type === null || type === undefined || isNaN(type))){
          const e = new Error(`Type passed to constructor as second argument is ${type} which is of type `+ typeof type + `.\n\t Only 1 or 2 are accepted values as second parameter. \n\n\t Relation between (node or item)'s priority and (node or item)'s key attribute value will depend on this parameter value. \n\t 1: ${BINARY_HEAP_IDENTIFIER.MAX_HEAP.description}\n\t 2: ${BINARY_HEAP_IDENTIFIER.MIN_HEAP.description} \n\n\t So if you want that item's with high key attribute value should have high priority in priority queue,then pass 1 as second parameter value.\n\t Otherwise if you want that item's with low key attribute value should have high priority in priority queue,then pass 2 as second parameter value.`)
          this.isNodeValid = false
          throw e;
        }
      } catch (e) {
        console.error(`\tError: ${e.message}`);
      }
    }
    /**
     * Summary : Checks if binary heap property is voilated
     * @param {number} cI :  index of child in array representation of heap
     * @param {number} pI : index of parent in array representation of heap
     * @returns {Boolean} : true if heap property voilated
     */
    isHeapPropertyVoilated(cI,pI){
      try{
        // child index is out from the heap 
        if(cI >= this.heapSize ) return false
        let a = this.getKey(this.resHeap[pI])
        let b = this.getKey(this.resHeap[cI])
        if(isNaN(a) || isNaN(b)){
          throw("Error: Input tree node are not comparable!")
        }else{
          
          if(this.type == BINARY_HEAP_IDENTIFIER.MAX_HEAP.id){
            return (a < b)
          }else if(this.type == BINARY_HEAP_IDENTIFIER.MIN_HEAP.id){
            return (a > b)
          }
        }
      }catch(e){
        console.log(e);
      }
    }

    /**
     * Summary : Swaps item at array[cI] with array[pI]
     * @param {number} cI 
     * @param {number} pI 
     * @returns : nothing
     */
    swap(cI,pI){
      let tmp = this.resHeap[cI]
      this.resHeap[cI] = this.resHeap[pI]
      this.resHeap[pI] = tmp
    }
    
    /**
     * Summary : Calculates parent index for a given child index 
     * @param {number} cI : index of child element
     * @returns : index of parent element of given child element 
     */
    calcParentIndex(cI){
      let pI = (cI % 2 == 0) ? (cI - 2) / 2 : (cI - 1) / 2
      return pI
    }

    /**
     * Summary : Calculates possible child index's (left or right or both) for a given parent index 
     * @param {number} pI : index of parent element
     * @returns : index of child element of given parent element with whom swap is required
     */
    calcChildIndex(pI){
      let swapNode = null,cI = NaN;
      let pLimit = (this.heapSize % 2 == 0) ? parseInt((this.heapSize-2)/2) : parseInt((this.heapSize-1)/2)
      if(pI > pLimit) return cI
      let lI = (2*pI+1),rI = (2*pI+2)
      if(lI >= this.heapSize && rI >= this.heapSize) return cI
      let leftChildVoilationFlag = this.isHeapPropertyVoilated(lI,pI)
      let rightChildVoilationFlag = this.isHeapPropertyVoilated(rI,pI)
      if(leftChildVoilationFlag && rightChildVoilationFlag){
        //Check from whom parent should be swapped
        //a and b are left and right node values respectively
        let a = this.getKey(this.resHeap[lI])
        let b = this.getKey(this.resHeap[rI])
        if(this.type == BINARY_HEAP_IDENTIFIER.MAX_HEAP.id){
          swapNode = (a > b) ? NODE_IDENTIFIER.LEFT : NODE_IDENTIFIER.RIGHT
          cI = (a > b) ? lI : rI
        }else if(this.type == BINARY_HEAP_IDENTIFIER.MIN_HEAP.id){
          swapNode = (a < b) ? NODE_IDENTIFIER.LEFT : NODE_IDENTIFIER.RIGHT
          cI = (a < b) ? lI : rI
        }
      }else if(leftChildVoilationFlag){
        //Swap parent with left child
        swapNode = NODE_IDENTIFIER.LEFT
        cI = lI
      }else if(rightChildVoilationFlag){
        //Swap parent with right child
        swapNode = NODE_IDENTIFIER.RIGHT
        cI = rI
      }else{
        //No swapping required
      }
      return cI
    }
    
    /**
     * Summary : this checks heap property for all the nodes from given node to root upward
     * Description : this method assumes that subtree rooted at cI is already a heap, so checks from cI to root if a swap is required
     * @param {number} cI : child index
     * @returns : nothing 
     */
    heapifyBottomToTop(cI){
      let pI = this.calcParentIndex(cI)
      while (pI >= 0 && this.isHeapPropertyVoilated(cI,pI)) {
        this.swap(cI,pI)
        // New Child
        cI = pI
        // New Parent
        pI = this.calcParentIndex(cI)
      }
    }
    /**
     * Summary : this checks heap property for all the nodes from given node to leaf downward 
     * Description : this method assumes that entire subtree other than the subtree rooted at pI is already a heap, so convert subtree rooted at pI to heap
     * @param {number} pI : parent index
     * @returns : nothing 
     */
    heapifyTopToBottom(pI){
      let cI = this.calcChildIndex(pI)
      let pLimit = (this.heapSize % 2 == 0) ? parseInt((this.heapSize-2)/2) : parseInt((this.heapSize-1)/2)
      while (!isNaN(cI) && pI <= pLimit && cI >=0 ) {
        this.swap(cI,pI)
        // New Parent
        pI = cI
        // New Child
        if(pI<=pLimit)
        cI = this.calcChildIndex(pI)
      }
    }
    /**
     * Summary : Heapify all internal nodes
     * @returns : nothing
     */
    makeHeap() {
      let n = this.heapSize
      for (let i = parseInt(n / 2); i >=0; i--) {
        //Heapify all internal nodes , because leaf node's are already heap
        this.heapifyTopToBottom(i)
      }
    }
    /**
     * Summary : Test if the given item is appropriate to insert in heap
     * @param {Object | number | string} item 
     * @returns {Boolean} : true if item is valid
     */
    testItem(item){
      return ((this.nodeType == typeof item) || !isNaN(item))
    }
    /**
     * Summary : insert a item to heap 
     * @param {Object | number | string} item 
     * @returns : nothing
     */
    insert(item){
      try{
        if(this.testItem(item)){
          this.resHeap.push(item)
          this.heapSize += 1
          this.heapifyBottomToTop(this.heapSize-1);
        }else{
          throw("Error: Invalid item is provided!")
        }
      }catch(e){
        console.log(e)
      }
    }
    /**
     * Summary : returns the key of a node
     * @param {Object | number | string} item
     * @returns {number} 
     */
    getKey(item){
      return (this.nodeType == typeof {}) ? parseFloat(item.key) : (this.nodeType == typeof "" || this.nodeType == typeof 0) ? parseFloat(item) : NaN
    }
    /**
     * Summary : update(increase/decrease) the key|priority value
     * @param {Object | number | string} newItem 
     * @param {number} position 
     * @returns : nothing
     */
    updateKey(newItem,position){
      try {
        if(!(position >= 0 && position < this.heapSize )){
          throw("Error: Second param of updateKey function should be between 0 and "+(this.heapSize-1)+" inclusive.")
        }
        if(this.testItem(newItem)){
          let prevItem = this.resHeap[position];
          this.resHeap[position] = newItem
          let diff = this.getKey(newItem) - this.getKey(prevItem)
          if(diff < 0){
            // Newer item's key is less than older item
            if(this.type == BINARY_HEAP_IDENTIFIER.MAX_HEAP.id){
              this.heapifyTopToBottom(position)
            }else{
              this.heapifyBottomToTop(position)
            }
          }else if(diff > 0){
            // Newer item's key is greater than older item
            if(this.type == BINARY_HEAP_IDENTIFIER.MIN_HEAP.id){
              this.heapifyTopToBottom(position)
            }else{
              this.heapifyBottomToTop(position)
            }
          }
        }else{
          throw("Error: Invalid item is provided!")
        }
      } catch (error) {
        console.log(error)
      }
    }

    /**
     * Summary : returns max key element or min key element in case of max heap and min heap respectively
     * @returns {Object | number | string} item
     */
    extract(){
      try {
        if(this.heapSize > 0){
          let extractedNode = this.resHeap[0]
          this.swap(0,this.heapSize-1)
          this.resHeap = this.resHeap.slice(0,this.heapSize-1)
          this.heapSize -= 1
          this.heapifyTopToBottom(0)
          return extractedNode
        }else{
          throw("Error: Nothing to extract ,heap is empty!")
        }
      } catch (e) {
        console.log(e)
      }     
    }
    /**
     * Summary : performs heap sort on heap items to get required sorted order
     * @param {number} order : (1 for increasing order and 2 for decreasing order)
     * @returns {[Object | number | string]} : sorted list 
     */
    sort(order = SORT_ORDER.INC){
      try{
        let sortedList = []
        let n = this.heapSize
        let oldHeapCopy = JSON.parse(JSON.stringify(this.resHeap))
        for(let i=0;i<n;i++){
          let extractedNode = this.extract()
          sortedList.push(extractedNode)
        }
        this.resHeap = oldHeapCopy
        this.heapSize = n
        if(this.type == BINARY_HEAP_IDENTIFIER.MAX_HEAP.id){
          if(order == SORT_ORDER.INC){
            return sortedList.reverse()
          }else{
            return sortedList
          }
        }else{
          if(order == SORT_ORDER.DEC){
            return sortedList.reverse()
          }else{
            return sortedList
          }
        }
      }catch(e){
        console.log(e)
      }
    }
  }
  module.exports = BinaryHeap
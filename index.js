  class BinaryHeap{
    constructor(inputBT,type){
      this.BINARY_HEAP_IDENTIFIER = {
        MAX_HEAP:1,
        MIN_HEAP:2
      }
      this.NODE_IDENTIFIER = {
        LEFT:1,
        RIGHT:1
      }
      try {
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
                  throw("Key is not a number!")
                }
              }else{
                if(isNaN(obj)){
                  // item is not a number
                  throw("List item should be either a number or an object with attribute named key!")
                }else{
                  // item is number
                  let key = parseInt(obj)
                  this.draftBT.push(key)
                }
              }
            })
          }catch(e){
            console.log("Error: ",e)
          }
        }else{
          throw("Error: First parameter can not be empty!");
        }
        if(!!type){
          this.type = type
          this.makeHeap()
        }else{
          throw("Error: type 1 or 2 should be passed as second parameter!");
        }
      } catch (e) {
        console.error(e);
      }
    }
    /*@ Return true if heap property is voilated */
    isHeapPropertyVoilated(cI,pI){
      try{
        let a = this.getKey(this.resHeap[pI])
        let b = this.getKey(this.resHeap[cI])
        if(isNaN(a) || isNaN(b)){
          throw("Error: Input tree node are not comparable!")
        }else{
          
          if(this.type == this.BINARY_HEAP_IDENTIFIER.MAX_HEAP){
            return (a < b)
          }else if(this.type == this.BINARY_HEAP_IDENTIFIER.MIN_HEAP){
            return (a > b)
          }
        }
      }catch(e){
        console.log(e);
      }
    }
    swap(cI,pI){
      let tmp = this.resHeap[cI]
      this.resHeap[cI] = this.resHeap[pI]
      this.resHeap[pI] = tmp
    }
    /* @ Return the index of parent of a node whose index is cI */
    calcParentIndex(cI){
      let pI = (cI % 2 == 0) ? (cI - 2) / 2 : (cI - 1) / 2
      return pI
    }
    /* @ Return the index of left and right child of a node whose index is pI */
    calcChildIndex(pI){
      let lI = (2*pI+1),rI = (2*pI+2)
      let leftChildVoilationFlag = this.isHeapPropertyVoilated(lI,pI)
      let rightChildVoilationFlag = this.isHeapPropertyVoilated(rI,pI)
      let swapNode = NaN,cI = NaN;
      if(leftChildVoilationFlag && rightChildVoilationFlag){
        //Check from whom parent should be swapped
        //a and b are left and right node values respectively
        let a = this.getKey(this.resHeap[lI])
        let b = this.getKey(this.resHeap[rI])
        if(this.type == this.BINARY_HEAP_IDENTIFIER.MAX_HEAP){
          swapNode = (a > b) ? this.NODE_IDENTIFIER.LEFT : this.NODE_IDENTIFIER.RIGHT
          cI = (a > b) ? lI : rI
        }else if(this.type == this.BINARY_HEAP_IDENTIFIER.MIN_HEAP){
          swapNode = (a < b) ? this.NODE_IDENTIFIER.LEFT : this.NODE_IDENTIFIER.RIGHT
          cI = (a < b) ? lI : rI
        }
      }else if(leftChildVoilationFlag){
        //Swap parent with left child
        swapNode = this.NODE_IDENTIFIER.LEFT
        cI = lI
      }else if(rightChildVoilationFlag){
        //Swap parent with right child
        swapNode = this.NODE_IDENTIFIER.RIGHT
        cI = rI
      }else{
        //No swapping required
      }
      return cI
    }
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
    makeHeap() {
      let n = this.heapSize
      for (let i = parseInt(n / 2); i < n; i++) {
        this.heapifyBottomToTop(i)
      }
    }
    testItem(item){
      return ((this.nodeType == typeof item) || !isNaN(item))
    }
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
    getKey(item){
      return (this.nodeType == typeof {}) ? parseInt(item.key) : (this.nodeType == typeof "" || this.nodeType == typeof 0) ? parseInt(item) : NaN
    }
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
            if(this.type == this.BINARY_HEAP_IDENTIFIER.MAX_HEAP){
              this.heapifyTopToBottom(position)
            }else{
              this.heapifyBottomToTop(position)
            }
          }else if(diff > 0){
            // Newer item's key is greater than older item
            if(this.type == this.BINARY_HEAP_IDENTIFIER.MIN_HEAP){
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
  }
  module.exports = BinaryHeap
  
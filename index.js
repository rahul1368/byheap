  class BinaryHeap{
    constructor(inputBT,type){
      this.BINARY_HEAP_IDENTIFIER = {
        MAX_HEAP:1,
        MIN_HEAP:2
      }
      try {
        if(inputBT && inputBT.length){
          this.nodeType = typeof inputBT[0]
          this.draftBT = (this.nodeType == typeof {}) ? JSON.parse(JSON.stringify(inputBT)) : []
          this.resHeap = JSON.parse(JSON.stringify(inputBT))
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
        let a = (this.nodeType == typeof {}) ? this.resHeap[pI].key : (this.nodeType == typeof "" || this.nodeType == typeof 0) ? parseInt(this.resHeap[pI]) : NaN
        let b = (this.nodeType == typeof {}) ? this.resHeap[cI].key : (this.nodeType == typeof "" || this.nodeType == typeof 0) ? parseInt(this.resHeap[cI]) : NaN
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
    heapify(cI){
      let pI = this.calcParentIndex(cI)
      while (pI >= 0 && this.isHeapPropertyVoilated(cI,pI)) {
        this.swap(cI,pI)
        // New Child
        cI = pI
        // New Parent
        pI = this.calcParentIndex(cI)
      }
    }
    makeHeap() {
      let n = this.resHeap.length
      for (let i = parseInt(n / 2); i < n; i++) {
        this.heapify(i)
      }
    }
  }
  module.exports = BinaryHeap  
  

  
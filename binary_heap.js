const BINARY_HEAP_IDENTIFIER = {
    MAX_HEAP:1,
    MIN_HEAP:2
  }
  export default class BinaryHeap{
    constructor(inputBT,type){
      this.inputBT = inputBT
      this.type = type
      this.makeHeap()
    }
    /*@ Return true if heap property is voilated */
    isHeapPropertyVoilated(cI,pI){
      if(this.type == BINARY_HEAP_IDENTIFIER.MAX_HEAP){
        return (this.inputBT[pI] < this.inputBT[cI])
      }else if(this.type == BINARY_HEAP_IDENTIFIER.MIN_HEAP){
        return (this.inputBT[pI] > this.inputBT[cI])
      }
    }
    swap(cI,pI){
      let tmp = this.inputBT[cI]
      this.inputBT[cI] = this.inputBT[pI]
      this.inputBT[pI] = tmp
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
      let n = this.inputBT.length
      for (let i = parseInt(n / 2); i < n; i++) {
        this.heapify(i)
      }
    }
  }
  
  
  /* Example to create min & max heap */
  let arr = [4, 2, 3, 5, 1, 6, 7, 11, 10]
  
  let maxHeapObj = new BinaryHeap(arr,BINARY_HEAP_IDENTIFIER.MAX_HEAP);
  let minHeapObj = new BinaryHeap(arr,BINARY_HEAP_IDENTIFIER.MIN_HEAP);
  
  console.log("Max Heap: ",maxHeapObj);
  console.log("Min Heap: ",minHeapObj);
  
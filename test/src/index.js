const assert = require('chai').assert;
const BinaryHeap = require('../../lib/index');

describe('byheap module Testing:',function(){
    describe("Constructor Function Tests:",function(){
        describe("Constructor First Parameter Tests:",function() {
            it('When First Parameter is Empty:',function(){
                let inputBT = []
                let heapObj = new BinaryHeap(inputBT,1)
                assert.equal(heapObj.isNodeValid,false)
            })
            it('When First Parameter is Valid List of Objects with key attribute:',function(){
                let inputBT = [{key:1},{key:2}]
                let heapObj = new BinaryHeap(inputBT,1)
                assert.equal(heapObj.isNodeValid,true)
            })
            it('When First Parameter is Valid List of Objects with no key attribute:',function(){
                let inputBT = [{a:1},{b:2}]
                let heapObj = new BinaryHeap(inputBT,1)
                //console.log("type received",heapObj)
                assert.equal(heapObj.isNodeValid,false)
            })
            it('When First Parameter is Valid List of Numbers:',function(){
                let inputBT = [1,2]
                let heapObj = new BinaryHeap(inputBT,1)
                assert.equal(heapObj.isNodeValid,true)
            })
            it('When First Parameter is Valid List of String which are numbers:',function(){
                let inputBT = ['1','2']
                let heapObj = new BinaryHeap(inputBT,1)
                assert.equal(heapObj.isNodeValid,true)
            })
            it('When First Parameter is Valid List of Number and String which are numbers:',function(){
                let inputBT = [1,'2','3','4']
                let heapObj = new BinaryHeap(inputBT,1)
                assert.equal(heapObj.isNodeValid,true)
            })
            it('When First Parameter is Valid List of String which are not numbers:',function(){
                let inputBT = ['a','b']
                let heapObj = new BinaryHeap(inputBT,1)
                assert.equal(heapObj.isNodeValid,false);
            })
        })
        describe("Constructor Second Parameter Tests:",function(){
            it('When Second Parameter is null:',function(){
                let inputBT = [{key:1},{key:2}]
                let heapObj = new BinaryHeap(inputBT,null)
                assert.equal(heapObj.isNodeValid,false);
            })
            it('When Second Parameter is undefined:',function(){
                let inputBT = [{key:1},{key:2}]
                let heapObj = new BinaryHeap(inputBT,undefined)
                assert.equal(heapObj.isNodeValid,false);
            })
            it('When Second Parameter is a string which is not a number:',function(){
                let inputBT = [{key:1},{key:2}]
                let heapObj = new BinaryHeap(inputBT,"null")
                assert.equal(heapObj.isNodeValid,false);
            })
            it('When Second Parameter is a string which is a number:',function(){
                let inputBT = [{key:1},{key:2}]
                let heapObj = new BinaryHeap(inputBT,"1")
                assert.equal(heapObj.isNodeValid,true);
            })
            it('When Second Parameter is a number:',function(){
                let inputBT = [{key:1},{key:2}]
                let heapObj = new BinaryHeap(inputBT,1)
                assert.equal(heapObj.isNodeValid,true);
            })
            it('When Second Parameter is a number:',function(){
                let inputBT = [{key:1},{key:2}]
                let heapObj = new BinaryHeap(inputBT,2)
                assert.equal(heapObj.isNodeValid,true);
            })
        })
    })
})
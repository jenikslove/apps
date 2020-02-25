'use strict';
class hashGenerator {
    //start
    constructor(hashLength){
this.startSymbolCode = 48;
this.finishSymbol    = 126;
if  ( !isNaN(parseInt(hashLength)) ){
this.hashLength = parseInt(hashLength);
this.generateHash();
}else{
    this.hash = false;
}
    }
    //вспомогательные
randomInteger(min, max) {
        var rand = min - 0.5 + Math.random() * (max - min + 1)
        rand = Math.round(rand);
        return rand;
      }
generateHash(){
    this.hash = '';
    for (let i=0; i < this.hashLength; i++){
        this.hash += String.fromCharCode(this.randomInteger(this.startSymbolCode, this.finishSymbol));
    }
}
}

let hash = new hashGenerator(20);
console.log(hash.hash)
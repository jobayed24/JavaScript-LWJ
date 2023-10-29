Array.prototype.uCName=function(){
    
    for(let i=0; i<this.length; i++){
        this[i]=this[i].toUpperCase();
    }
   
}

const storeName=['jobayed','hossen','tanvir','rasel'];

storeName.uCName();



console.log(storeName)
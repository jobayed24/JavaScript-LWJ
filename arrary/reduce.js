const numbers=[156,23,23];

const myreduce=numbers.reduce(reduceFn,20);

function reduceFn(Total,cvalue,cindex){
    
   console.log( `Total ${Total} current Value ${cvalue} current Index ${cindex} `);
   return Total+cvalue;
}

console.log(myreduce)
const newnumber=[3,2];

function checkvalue(cvalue,index,arr){
    console.log( `[${arr}] [${index}]->${cvalue}`);
    return cvalue>2;
}
const myValue=newnumber.every(checkvalue);

console.log(myValue)


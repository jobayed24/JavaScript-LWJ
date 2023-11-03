///reviver function

let myObj = '{"name":"John","age":31,"city":"New York"}';

let getObFromSt=JSON.parse(myObj,function(key,value){
    if(key=="city"){
        return value.toUpperCase();
    }else{
        return value;
    }
})
console.log(getObFromSt.city)
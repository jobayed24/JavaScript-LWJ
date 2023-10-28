const myArray=[];

const fruits=["Banana", "Orange", "Apple", "Mango","Apple","Jackfruit","Pineapple","Apple"];



const element="Apple";

let findValue=fruits.indexOf(element);

while(findValue!==-1){
    myArray.push(findValue);

    findValue=fruits.indexOf(element,(findValue+1))
}

document.getElementById('demo').innerHTML=myArray;
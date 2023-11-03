let myObj = {"name":"John","age":31,"city":"New York"};

let makeJSonOb=JSON.stringify(myObj);

localStorage.setItem('testJSON',makeJSonOb);

let getJSon=localStorage.getItem('testJSON');
let text=JSON.parse(getJSon);

console.log(text.age)
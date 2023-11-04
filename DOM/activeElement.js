
//textContent get and set the element content it's mean it's override the existing content

//createTextNode use create indepent text and add it to any element 
const h1Element=document.getElementById('demo');
const gettextcontenet=document.createTextNode(' is hubmle person')
console.log(gettextcontenet)
h1Element.appendChild(gettextcontenet);

document.body.append(h1Element);

let getLink=document.getElementsByTagName('a')[0];

let createHref=document.createAttribute('href');

createHref.value='https://jobayed.net';

getLink.setAttributeNode(createHref);

console.log(getLink)
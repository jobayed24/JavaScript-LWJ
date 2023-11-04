const createElement=document.createElement('h1')

const createAtt=document.createAttribute("style");

createAtt.value="color:red";

createElement.setAttributeNode(createAtt);

createElement.textContent='jobayed is humble';

document.body.append(createElement)

const createAttributes=document.createAttribute("style");

createAttributes.value="background-color: gray";

const getH1=document.getElementsByTagName("h1")[0];

getH1.setAttributeNode(createAttributes);

function addTextNode(){
    const createTextNode=document.createTextNode("create Text Node.    ");
    const getBody=document.body;
    getBody.appendChild(createTextNode);
    let getCC=document.getElementById('cc');
    let getChildNodeLength= getBody.childNodes.length;
    console.log(document.body.childNodes)
    console.log(getChildNodeLength)
    getCC.innerHTML=(getChildNodeLength)
}

function nomalizeDocument(){
    document.normalize();
    const getBody=document.body;
    let getCC=document.getElementById('cc');
    getCC.innerHTML=getBody.childNodes.length;
}
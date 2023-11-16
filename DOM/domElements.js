function getBodyChild(){
    let getChildren=document.getElementById('mySelect').children;
    document.getElementById('demo').innerHTML=getChildren[1].text
    console.log(getChildren[1])
}
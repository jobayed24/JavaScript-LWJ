function getBodyChild(){
    let getChildren=document.getElementById('myDIV').children;
    console.log(getChildren)
    if(getChildren[1]){
        getChildren[1].style='background-color:red'
    }
}
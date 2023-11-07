let getButton=document.getElementById('moveItem');
getButton.addEventListener('click',moveItem);
function moveItem(){
    let getMyList=document.getElementById('myList');
    let getMyList2=document.getElementById('myList2');
    let getItem=getMyList.lastElementChild;
    getMyList2.appendChild(getItem);
    
}
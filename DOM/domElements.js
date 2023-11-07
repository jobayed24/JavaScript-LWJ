document.getElementById('div').addEventListener('click',function(){
    newCallBack('You click Div');
},false)
document.getElementById('p').addEventListener('click',function(){
    newCallBack('you click p element');
},false)

document.getElementById('div2').addEventListener('click',function(){
    newCallBack('you click div2 element')
},true)

document.getElementById('p2').addEventListener('click',function(){
    newCallBack('click p2 element')
},true)

function newCallBack(text){
    document.getElementById('demo').innerHTML+=text;
}
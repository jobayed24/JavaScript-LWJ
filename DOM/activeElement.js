setInterval("getFocused()",1);

function getFocused(){
    let text;
    if(document.hasFocus()){
        text='you focused on document';
    }else{
        text='you didn\'t focused on doucment';
    }
    document.getElementById("demo").innerHTML=text
}



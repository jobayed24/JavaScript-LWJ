function myButton(){
    let getInputFeild=document.getElementById('textRang');
    let getInputValue=getInputFeild.value;
    let text;
    if(isNaN(getInputValue) || getInputValue <1 || getInputValue > 10){
        text='Value is Invalid';
    }else{
        text='value ok';
    }
    document.getElementById('demo').innerHTML=text;
}
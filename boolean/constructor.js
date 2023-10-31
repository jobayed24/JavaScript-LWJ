Boolean.prototype.myColor=function(){
    if(this.valueOf()==true){
        return "green";
    }else{
        return "false";
    }
}

let x=true;

console.log(x.myColor());
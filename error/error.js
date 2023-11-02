try{
    addalert("jobayed");
}catch(err){
    document.getElementById('demo').innerHTML=err.name+"<br />"+err.message;
}
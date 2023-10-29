const reservedName=[];
document.getElementById("submit").addEventListener('click',submitDatas);

function submitDatas(){
    let putName=document.getElementById('inputData').value;
    let checkExist=reservedName.includes(putName);
    if(!checkExist){
        reservedName.push(putName)
        console.log(`The ${putName} data succussfully reserved`);
    }else{
        console.log(`The ${putName} has already exist in Databases`);
    }
    
    document.getElementById('demo').innerHTML=reservedName;
}

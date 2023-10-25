const ages = [32, 33, 16, 40];

function checkData1(){
    function checkData(el){
        let getValue=document.getElementById('submit').value;
        return el>getValue;
    }

    const getHigherValue=ages.filter(checkData);
    console.log(getHigherValue)
}




 
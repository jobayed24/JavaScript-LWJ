const ages = [3, 10, 18, 20];


const singleValueCheck=ages.some(getsingleValueCheck);

function getsingleValueCheck(ele){
    return ele>19;
}



console.log(singleValueCheck);
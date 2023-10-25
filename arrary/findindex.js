const ages = [3, 10, 18, 20];

function agesIndex(el){
    return el>3;
}

const getMyIndex=ages.findIndex(agesIndex);

console.log(getMyIndex)
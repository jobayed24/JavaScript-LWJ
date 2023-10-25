const ages = [32, 33, 16, 40];

function checkHeigherValue(el){
    return el>20;
}

const getHigherValue=ages.filter(checkHeigherValue);

console.log(getHigherValue)

console.log(ages)
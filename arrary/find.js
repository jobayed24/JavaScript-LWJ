const ages = [3, 10, 18, 20];

function checkAge(el){
    return el>20;
}

const getTheFindValue=ages.find(checkAge);

console.log(getTheFindValue);

console.log(ages)
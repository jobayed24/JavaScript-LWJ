const newnumber=[23,23,34,12,35];

function checkpass(cvalue){
    return cvalue>10;
}

const getbolvalue=newnumber.every(checkpass);

console.log(getbolvalue)
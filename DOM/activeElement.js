let getImg=document.images;
const getLinks=[];
for( let i=0; i<getImg.length; i++){
    getLinks.push(getImg[i].src);
}
const getHttps=getLinks.filter(checkFilter);

function checkFilter(value){
   return value.includes('.com/jk');
}
console.dir(getHttps)


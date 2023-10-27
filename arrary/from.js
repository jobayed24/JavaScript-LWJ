const getImg=document.querySelectorAll('img');


const convertArrGetImg=Array.from(getImg,(img)=>img.src);

const imgSrcFilter=convertArrGetImg.filter((x)=>x.startsWith("https://"));

document.getElementById('demo').innerHTML=imgSrcFilter;
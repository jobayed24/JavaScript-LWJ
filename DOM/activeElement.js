

document.addEventListener('click',function(){
   let myNewWindow=window.open();
   myNewWindow.document.open();
   myNewWindow.document.write("<h1>Jobayed</h1>");
   myNewWindow.document.close();
 
})
const survey = [
    { name: "Steve", answer: "No"},
    { name: "Jessica", answer: "No"},
    { name: "Peter", answer: "No"},
    { name: "Elaine", answer: "No"}
  ];
  function isSameAnswer(el,index,arr){
    if(index===0){
        return true;
    }else{
        return (el.answer===arr[index-1].answer)
    }
  }
  const getValue=survey.every(isSameAnswer);
  console.log(getValue)



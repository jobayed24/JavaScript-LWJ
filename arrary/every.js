const survey = [
    { name: "Steve", answer: "Yes"},
    { name: "Jessica", answer: "Yes"},
    { name: "Peter", answer: "Yes"},
    { name: "Elaine", answer: "Yes"}
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



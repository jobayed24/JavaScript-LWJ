const persons = [
    {firstname : "Malcom", lastname: "Reynolds"},
    {firstname : "Kaylee", lastname: "Frye"},
    {firstname : "Jayne", lastname: "Cobb"}
  ];

const fullName=persons.map(getFullName);

function getFullName(ele){
    return [ele.firstname,ele.lastname].join(" ");
}

console.log(fullName[0]);

console.log(persons)
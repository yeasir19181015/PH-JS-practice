const person = {
    name : "yeasir",
    age : 26,
    status : 'single',
    student : false,
    friends : ["Noman", "showon"]
}

const newPerson = JSON.stringify(person);
console.log(newPerson);

const newPerson2 = JSON.parse(newPerson);
console.log(newPerson2);






const handleLocalStorage =() => {
    const person ={
        name :"yeasir",
        age : 26,
        friends : ["showon","noman"]
    }

    const convertedToString = JSON.stringify(person);
    localStorage.setItem("yeasir",convertedToString)


} 

const data = localStorage.getItem("yeasir");
const converted = JSON.parse(data);
console.log(converted);

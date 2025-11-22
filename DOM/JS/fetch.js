// fetch('https://jsonplaceholder.typicode.com/todos/1')
//       .then(response => response.json())
//       .then(json => console.log(json))


const handleLoadUser = () => {
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(res => res.json())
    .then(data => showUser(data))
}

// const showUser = (users) => {
//     for(let i =0 ; i< users.length; i++){
//         const user = users[i]
//         console.log(user);
        
//     }
// }

const showUser = (users) => {
    

const userContainer = document.getElementById('users');

for (const user of users ){
    console.log(user.name)
        const li = document.createElement("li");
        li.innerText = user.name;
        userContainer.appendChild(li);
}

}



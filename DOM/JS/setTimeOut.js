// let count = 0;

// const clockID = setInterval(() => {
//    count ++;
//    console.log(count);
//    clearInterval(clockID)
    
// }, 3000);



// TASK 1 
const delay = setTimeout((message) => {
    console.log("this is displayed after 5 seconds")
}, 5000);

function delayGreeting(name,time){
    setTimeout(() => {
        console.log(name)
    }, time);
}

console.log(delay);
delayGreeting('Yeasir', 3000)


// TASK 2 

function tellJoke(){
    console.log("why don't scientists trust atoms? because they made up everything");
}

const jokeInterval = setInterval(tellJoke, 2000);

setTimeout(() => {
    clearInterval (jokeInterval);
    console.log("No more jokes !");
    
}, 10000);
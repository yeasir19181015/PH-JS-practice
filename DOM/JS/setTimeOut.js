let count = 0;

const clockID = setInterval(() => {
   count ++;
   console.log(count);
   clearInterval(clockID)
    
}, 3000);
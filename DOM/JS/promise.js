const fetchData = () => {
    return new Promise((resolve,reject) => {
        const status = true;
        if(status){
            resolve({name:"yeasir"})
        }
        else{
            reject("server error")
        }
    })
}

fetchData()
.then(res => console.log(res))
.catch(err => console.log(err))
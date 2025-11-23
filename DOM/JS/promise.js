// How to create a promise ? 

const fetchData = () => {
    return new Promise((resolve,reject) => {
        const status = true;
        if(status){
         const mockData ={
            JSON:() => Promise.resolve({name:"yeasir"})
         }
         resolve(mockData)
            //
        }
        else{
            reject("server error")
        }
    })
}

fetchData()
.then(res => res.JSON())
.then(data => console.log(data))
.catch(err => console.log(err))




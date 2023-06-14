const url = `https://jsonplaceholder.typicode.com/posts/1/comments`
fetch(url).then(res=>{
    console.log(res);
    if(!res.ok){
        throw new Error(`Somenthing went wrong!! status(${res.status})`)
    }else{
        return res.json();
    }
}).then(data=>{
    console.log(data);
}).catch(e=>{
    console.log(`Error: ${e.message}`);
})
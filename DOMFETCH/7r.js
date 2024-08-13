fetch("http://localhost:3000/data",
{
    method:'POST',
    body:JSON.stringify({
        "id":4,
        "name":"x"
    }),
    headers:{
        'Content-type':'Application/JSON'
    }
    ,

})
.then((response)=>response.json())
.then((json)=>console.log(json))


async function api(){
    let id= document.getElementById("id").value
    let respostas= await fetch(`https://jsonplaceholder.typicode.com/posts?id=${id}`)
            .then(Response => {
                return Response.json()
            })
    document.getElementById("userId").value = respostas[0].userId
    document.getElementById("title").value = respostas[0].title
    document.getElementById("body").value = respostas[0].body
}
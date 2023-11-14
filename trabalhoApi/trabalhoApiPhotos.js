async function api(){
    let id= document.getElementById("id").value
    let respostas= await fetch(`https://jsonplaceholder.typicode.com/photos?id=${id}`)
            .then(Response => {
                return Response.json()
            })
    document.getElementById("albumId").value = respostas[0].albumId
    document.getElementById("title").value = respostas[0].title
    document.getElementById("url").src =  respostas[0].url
    document.getElementById("thumbnailUrl").src =  respostas[0].thumbnailUrl
    
}
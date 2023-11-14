async function api(){
    let movie= document.getElementById("movie").value
    let respostas= await fetch(`https://www.omdbapi.com/?t=${movie}&apikey=a95a50e8`)
            .then(Response => { //garante que somente vai retornar o resultado quando o mesmo chegar 
                return Response.json()
            })
    //let dados = await respostas.json()

    document.getElementById("titulo").value = respostas.Title
    document.getElementById("ano").value = respostas.Year
    document.getElementById("genero").value = respostas.Genre
    document.getElementById("diretor").value = respostas.Director
    document.getElementById("escritor").value = respostas.Writer
    document.getElementById("ator").value = respostas.Actors
    document.getElementById("sinopse").value = respostas.Plot
    document.getElementById("pais").value = respostas.Country
    document.getElementById("foto").src =  respostas.Poster
    

}
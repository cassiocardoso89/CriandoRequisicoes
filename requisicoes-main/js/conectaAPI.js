async function ListaVideos(){
    const connection = await fetch("http://localhost:3000/videos");
    console.log(connection);
}

ListaVideos();
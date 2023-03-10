import { conectaAPI } from "./conectaAPI.js";
import ConstroiCard from "./mostrarVideos.js"

async function BuscarVideo(evento){
    evento.preventDefault();
    const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
    const busca = await conectaAPI.BuscaVideo(dadosDePesquisa);

    const lista =  document.querySelector("[data-lista]");
    while(lista.firstChild){
        lista.removeChild(lista.firstChild);
    }
    
    busca.forEach(elemento => lista.appendChild(ConstroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.imagem)))

    if (busca.length == 0){
        lista.innerHTML = `<h2 class="mensagem__titulo">Não foi possivel busca este video</h2>`;
    }
}

const btnPesquisa = document.querySelector("[data-btnPesquisa]");

btnPesquisa.addEventListener("click", evento => BuscarVideo(evento))
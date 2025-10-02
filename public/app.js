const portfolioItems = {
    minhasObras: [
    {
        id: 1,
        title: "Recortes do Fundo do Mar",
        artist: "Erica Regina",
        description: "Breve representação da beleza marinha em aquarela.",
        image: "images/recortes_do_fundo_do_mar.jpg" 
    },
    {
        id: 2,
        title: "A Beleza de Reina",
        artist: "Erica Regina",
        description: "Uma representação da serenidade, utilizando tons frios.",
        image: "images/reina.jpg"
    },
    {
        id: 3,
        title: "A Beleza de Celina",
        artist: "Erica Regina",
        description: "Retrato em grafite capturando a força do olhar.",
        image: "images/celina.jpg"
    },
    {
        id: 4,
        title: "Apenas um sketch comum",
        artist: "Erica Regina",
        description: "Sem significado importante, apenas um sketch.",
        image: "images/apenas_um_sketch_comum.jpg"
    },
    {
        id: 5,
        title: "O Eco da Dor",
        artist: "Erica Regina",
        description: "A dor representada e apenas o reflexo (eco) de algo além do que está sendo mostrado.",
        image: "images/o_eco_da_dor.jpg"
    }
],
albunsFavoritos: [
        {
            id: 6,
            titulo: "Hard to imagine the neighbourhood ever changing",
            artista: "The Neighbourhood",
            imagem: "images/hard_to_imagine_the_neighbourhood_ever_changing.jpg",
            categoria: "albuns"
        },
        {
            id: 7,
            titulo: "Nevermind",
            artista: "Nirvana",
            imagem: "images/nevermind - Nirvana.jpg",
            categoria: "albuns", 
        },
        {
            id: 8,
            titulo: "Freudian",
            artista: "Daniel Cesar",
            imagem: "images/freudian.jpg",
            categoria: "albuns",
        },
        {
            id: 9,
            titulo: "Djavan ao vivo 1999",
            artista: "Djavan",
            imagem: "images/djavan_ao_vivo_1999.jpg",
            categoria: "albuns",
        },
        {
            id: 10,
            titulo: "Dam",
            artista: "Kendrick Lamar",
            imagem: "images/damn_KendrickLamar.jpg",
            categoria: "albuns",
        }
    ]

}
function criarCard(item) {
    return `
        <div class="card-pequeno">
            <img src="${item.imagem}" class="card-img-top" alt="${item.titulo}">
            <div class="item-info">
                <h3 class="card-title">${item.titulo}</h3>
                <p class="card-text">${item.descricao}</p>
                <p class="card-artista">${item.artista}</p>
                <a href="detalhes.html?id=${item.id}" class="btn-detalhes">Ver Detalhes</a>
            </div>
        </div>
    `;
}
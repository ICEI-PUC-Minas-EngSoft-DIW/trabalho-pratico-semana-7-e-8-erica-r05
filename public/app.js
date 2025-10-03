const portfolioItems = {
    minhasObras: [
    {
        id: 1,
        titulo:"Recortes do Fundo do Mar",
        artista: "Erica Regina",
        descricao: "Breve representação da beleza marinha.",
        imagem:"images/recortes_do_fundo_do_mar.jpg" 
    },
    {
        id: 2,
        title: "A Beleza de Reina",
        artista: "Erica Regina",
        descricao: "Uma representação da serenidade.",
        imagem: "images/reina.jpg"
    },
    {
        id: 3,
        titulo:"A Beleza de Celina",
        artista:"Erica Regina",
        descricao: "Celina é a representação do que eu acredito estar mais proximo da beleza dos anjos.",
        imagem:"images/celina.jpg"
    },
    {
        id: 4,
        titulo: "Apenas um sketch comum",
        artista: "Erica Regina",
        descricao: "Sem significado importante, apenas um sketch.",
        imagem:"images/apenas_um_sketch_comum.jpg"
    },
    {
        id: 5,
        titulo: "O Eco da Dor",
        artista: "Erica Regina",
        descricao: "A dor representada é o reflexo (eco) de algo além do que está sendo mostrado.",
        imagem:"images/o_eco_da_dor.jpg"
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
            categoria: "albuns"
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
    ],
    recomendacoesDeArte: [
         {
            id: 11,
            titulo: "Operários",
            artista: "Tarsila do Amaral",
            descricao:"A pintura Operários, de Tarsila do Amaral, é um dos quadros mais representativos do Modernismo brasileiro. Criada em 1933, a obra retrata a industrialização de São Paulo através de uma multidão de rostos de diferentes etnias, sugerindo a diversidade de imigrantes que trabalhavam nas fábricas. Ao fundo, a fumaça de chaminés simboliza o progresso industrial. A obra não é apenas um retrato. Ela é uma reflexão sobre as questões sociais e o trabalho no Brasil da época, mostrando a mistura de culturas que impulsionava a economia e levantando perguntas sobre a desigualdade. Com sua estética modernista, Operários se tornou um símbolo da identidade nacional e das complexas relações sociais do país.",
            imagem: "images/_operários_tarsila_do_amaral.jpg",
            categoria: "pinturas"
        },
        {
            id: 12,
            titulo: "Abaporu",
            artista: "Tarsila do Amaral",
            descricao: "A obra Abaporu, de Tarsila do Amaral, é um ícone do modernismo brasileiro. Pintada em 1928, a tela apresenta uma figura humana desproporcional com uma cabeça pequena e pés e mãos gigantes, sentada sob um sol tropical. O quadro foi o principal inspirador do \"Manifesto Antropófago\", de Oswald de Andrade. O nome, que significa \"homem que come gente\" em tupi-guarani, simboliza a ideia de devorar a cultura estrangeira para criar uma arte genuinamente brasileira, livre de imitações. É uma obra-chave na busca pela identidade cultural do Brasil e um marco na história da arte nacional.", 
            imagem: "images/abaporu_tarsila_do_amaral.jpg",
            categoria: "pinturas", 
        },
        {
            id: 13,
            titulo: "As Damas d'Avignon",
            artista: "Pablo Picasso",
            descricao:"A obra As Damas d'Avignon, de Pablo Picasso, é um quadro de 1907 que marcou o início do cubismo. A pintura mostra cinco mulheres nuas com corpos e rostos fragmentados e geométricos, inspirados em máscaras africanas. O quadro rompeu com a arte tradicional ao apresentar as figuras de vários ângulos ao mesmo tempo, revolucionando a forma de representar a realidade e abrindo caminho para a arte moderna.",
            imagem: "images/as_damas_davignon_de_pablo_picasso.jpg",
            categoria: "pinturas",
        },
        {
            id: 14,
            titulo: "Impresión, sol naciente",
            artista: "Claude Monet",
            descricao: "A obra Impressão, sol nascente, de Claude Monet, é o quadro que deu nome ao impressionismo. Pintado em 1872, o quadro retrata o porto de Le Havre, na França, com pinceladas soltas e rápidas. Em vez de focar nos detalhes, Monet buscou capturar a luz e a atmosfera do amanhecer. A obra simboliza a busca por uma nova forma de pintar, valorizando o momento e a percepção do artista sobre a natureza.",
            imagem: "images/Impresión_sol_naciente - Monet.jpg",
            categoria: "pinturas",
        },
        {
            id: 15,
            titulo: "Starry night over the Rhone",
            artista: "Vincent van Gogh",
            descricao:"A obra Noite Estrelada sobre o Ródano, de Vincent van Gogh, é uma pintura de 1888 que retrata a vista do rio Ródano em Arles, França, sob um céu noturno estrelado. Com suas cores vibrantes e pinceladas expressivas, Van Gogh capturou a beleza e a tranquilidade da cena, destacando o reflexo das estrelas na água. A obra é um exemplo marcante do estilo pós-impressionista de Van Gogh, transmitindo emoção e movimento através da cor e da luz.",
            imagem: "images/Starry_night_over_the_Rhone.jpg",
            categoria: "pinturas",
        }
    ],

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
document.addEventListener('DOMContentLoaded', function() {
    adicionarIdsAosLinks();
});

function adicionarIdsAosLinks() {
    const mapeamentoItens = {
        'Recortes do fundo do mar': 1,
        'A beleza de Reina': 2,
        'A beleza de Celina': 3,
        'Apenas um sketch comum': 4,
        'O eco da dor': 5,
        
        'Hard to imagine th neighbourhood ever changing': 6,
        'Nevermind': 7,
        'Freudian': 8,
        'Djavan ao vivo 1999': 9,
        'Damn': 10,
        
        'Operários': 11,
        'Abaporu': 12,
        'As Damas d\'Avignon': 13,
        'Impresión, sol naciente': 14,
        'Starry night over the Rhone': 15
    };

    const links = document.querySelectorAll('a[href="detalhes.html"]');
    links.forEach(link => {
        const card = link.closest('.card-pequeno');
        if (card) {
            const tituloElement = card.querySelector('.card-title');
            if (tituloElement) {
                const titulo = tituloElement.textContent.trim();
                const id = mapeamentoItens[titulo];
                if (id) {
                    link.href = `detalhes.html?id=${id}`;
                }
            }
        }
    });
}
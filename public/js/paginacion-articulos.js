const pages = {
    1: [
        {
            title: "Neuralink: el primer chip cerebral funcional",
            desc: "Neuralink, la empresa de Elon Musk, ha logrado implantar un chip capaz de interpretar señales del cerebro.",
            url: "../articulos/tecnologia/neuralink-implanta-primer-chip-cerebral"
        },
        {
            title: "Qué es la IA Superinteligente y por qué preocupa",
            desc: "La IA superinteligente: el nivel de inteligencia artificial que podría superar al ser humano.",
            url: "../articulos/Inteligencia-Artificial/Inteligencia-Artificial-SuperInteligente"
        }
    ],
    2: [
        {
            title: "Baterías de sodio: la alternativa barata al litio",
            desc: "Una nueva generación de baterías más baratas, seguras y ecológicas.",
            url: "../articulos/tecnologia/baterias-de-sodio-alternativas-baratas-al-litio"
        },
        {
            title: "¿Qué tipos de IA existen?",
            desc: "Una visión clara de los tipos de inteligencia artificial.",
            url: "../articulos/Inteligencia-Artificial/tipos-de-inteligencia-artificial-(IA-AI)"
        }
    ]
};

function changePage(num) {
    const container = document.getElementById("latest-articles");
    container.innerHTML = pages[num].map(article => `
        <div class="article-card">
            <h3>${article.title}</h3>
            <p>${article.desc}</p>
            <a href="${article.url}" class="article-link">Leer más →</a>
        </div>
    `).join("");
    // Quitar la clase activa de todos los botones
    document.querySelectorAll('.pagination button').forEach(btn => {
        btn.classList.remove('active-page');
    });

    // Añadirla al botón actual
    document.querySelectorAll('.pagination button')[num - 1].classList.add('active-page');
}

// Cargar página 1 al entrar
changePage(1);
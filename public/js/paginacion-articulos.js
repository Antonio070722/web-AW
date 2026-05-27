

const pages = {
    1: [
        {
            title: "Neuralink: el primer chip cerebral funcional",
            desc: "Neuralink, la empresa de Elon Musk, ha logrado implantar un chip capaz de interpretar señales del cerebro.",
            url: "/articulos/tecnologia/neuralink-implanta-primer-chip-cerebral/"
        },
        {
            title: "Inteligencia Artificial Superinteligente: qué es y por qué preocupa",
            desc: "La IA superinteligente: el nivel de inteligencia artificial que podría superar al ser humano.",
            url: "/articulos/inteligencia-artificial/inteligencia-artificial-superInteligente"
        },
        {
            title: "Baterías de sodio: la alternativa barata al litio",
            desc: "Una nueva generación de baterías más baratas, seguras y ecológicas.",
            url: "/articulos/tecnologia/baterias-de-sodio-alternativas-baratas-al-litio/"
        }

    ],
    2: [
        {
            title: "IA débil vs IA fuerte: diferencias y ejemplos",
            desc: "Una visión clara de los tipos de inteligencia artificial.",
            url: "/articulos/inteligencia-artificial/tipos-de-inteligencia-artificial-ia-ai"
        },
        {
            title: "Instalar y configurar tu primer IDE, IntelliJ IDEA",
            desc: "Guía de instalación de IntelliJ IDEA explicada paso a paso y acompañada de imágenes claras.",
            url: "/articulos/programacion/configurar-intellij"
        },
        {
            title: "Cómo activar GitHub Copilot y su autocompletado predictivo en IntelliJ IDEA",
            desc: "Aprende a instalar y activar GitHub Copilot en IntelliJ IDEA para obtener autocompletado predictivo en tiempo real.",
            url: "/articulos/programacion/activar-autocompletado-github-copilot"
        }
    ],

    3: [
        {
            title: "Tu primera aplicación en Java: guía paso a paso para principiantes (Parte 1)",
            desc: "Inicia tu primer proyecto en Java y comprende los elementos básicos del entorno de desarrollo para comenzar a programar correctamente.",
            url: "/articulos/programacion/guia-java-parte-1"
        },
        {
            title: "Tu primera aplicación en Java (Parte 2): variables, tipos de datos y entrada del usuario",
            desc: "Sigue la serie de Java para principiantes. Aprende a guardar datos con variables y a leer lo que escribe el usuario con Scanner. Ejemplos y ejercicios incluidos.",
            url: "/articulos/programacion/guia-java-parte-2"
        }
    ],
    4: [
        {
            title: "Tu primera aplicación en Java (Parte 3): condicionales y bucles",
            desc: "Aprende a usar condicionales y bucles en Java para que tus programas tomen decisiones y repitan acciones. Resolveremos el reto anterior y crearás tu primer juego interactivo.",
            url: "/articulos/programacion/guia-java-parte-3"
        }, 
        {
            title: "Deep Learning vs Machine Learning: diferencias y ejemplos",
            desc: "Aprende qué es el Deep Learning, cómo funcionan las redes neuronales profundas y por qué es la base de la IA moderna. Sin tecnicismos.",
            url: "/articulos/inteligencia-artificial/deep-learning"
        }
        
    ]

};

function changePage(num) {
    const container = document.getElementById("latest-articles");
    container.innerHTML = pages[num].map(article => `
        <div class="article-card">
            <h3>${article.title}</h3>
            <p>${article.desc}</p>
            <a href="${article.url}" class="article-link">Leer articulo →</a>
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
changePage(3);
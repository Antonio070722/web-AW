

const pages = {
    1: [
        {
            title: "Meta, TikTok, Snapchat y YouTube pagan 27 millones por daños a la salud mental de estudiantes",
            desc: "Meta, TikTok, Snapchat y YouTube pagan 27 millones de dólares para evitar un juicio histórico por dañar la salud mental de estudiantes en EEUU.",
            url: "/articulos/tecnologia/meta-tiktok-youtube-salud-mental"
        },
        {
            title: "Amazon bloquea a Muse, la IA de Meta: qué pasó y qué significa para ti",
            desc: "Amazon bloquea a Muse, el agente de IA de Meta que compra por ti, tras acusarlo de capturar credenciales sin identificarse.",
            url: "/articulos/inteligencia-artificial/amazon-bloquea-muse-meta"
        },
        {
            title: "Amodei, Altman y Musk piden frenar la IA: qué está pasando de verdad",
            desc: "Los CEOs de Anthropic, OpenAI y xAI piden frenar el desarrollo de la IA. Qué dice la carta de Amodei y por qué la Casa Blanca se opone.",
            url: "/articulos/inteligencia-artificial/amodei-altman-musk-frenar-ia"
        }
    ],
    2: [
        {
            title: "El CEO de Nvidia responde a Altman, Amodei y Musk: 'la IA no va a acabar con el mundo'",
            desc: "Jensen Huang (Nvidia) rechaza las peticiones de frenar la IA y acusa a otros líderes del sector de buscar exenciones normativas.",
            url: "/articulos/inteligencia-artificial/nvidia-huang-responde-ia"
        },
        {
            title: "Neuralink: el primer chip cerebral funcional",
            desc: "Neuralink, la empresa de Elon Musk, ha logrado implantar un chip capaz de interpretar señales del cerebro.",
            url: "/articulos/tecnologia/neuralink-implanta-primer-chip-cerebral/"
        },
        {
            title: "La caída simultánea de ChatGPT, Claude, Gemini y Grok: qué pasó de verdad",
            desc: "Qué se sabe realmente de la caída global de IA de septiembre de 2026 y por qué depender de un solo proveedor es un riesgo real.",
            url: "/articulos/inteligencia-artificial/caida-ia-septiembre-2026"
        },
        
        
        
    ],

    3: [
        {
            title: "Alibaba presenta el chip que planta cara a Nvidia en China",
            desc: "Alibaba presenta el Zhenwu V900, un chip de IA que triplica el rendimiento de su predecesor, como respuesta a los controles de exportación de EEUU.",
            url: "/articulos/tecnologia/alibaba-zhenwu-v900"
        },
        {
            title: "Instalar y configurar tu primer IDE, IntelliJ IDEA",
            desc: "Guía de instalación de IntelliJ IDEA explicada paso a paso y acompañada de imágenes claras.",
            url: "/articulos/programacion/configurar-intellij"
        },
        {
            title: "Tu primera aplicación en Java: guía paso a paso para principiantes (Parte 1)",
            desc: "Inicia tu primer proyecto en Java y comprende los elementos básicos del entorno de desarrollo para comenzar a programar correctamente.",
            url: "/articulos/programacion/guia-java-parte-1"
        }
        
    ],
    4: [
        {
            title: "Tu primera aplicación en Java (Parte 2): variables, tipos de datos y entrada del usuario",
            desc: "Sigue la serie de Java para principiantes. Aprende a guardar datos con variables y a leer lo que escribe el usuario con Scanner. Ejemplos y ejercicios incluidos.",
            url: "/articulos/programacion/guia-java-parte-2"
        },
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
        
    ],
    5: [
        {
            title: "IA Generativa: qué es y cómo está cambiando la creación de contenido",
            desc: "Descubre qué es la IA generativa, cómo funcionan los modelos que crean texto, imágenes y vídeo, y qué riesgos plantea.",
            url: "/articulos/inteligencia-artificial/inteligencia-artificial-generativa"
        },
        {
            title: "Inteligencia Artificial Superinteligente: qué es y por qué preocupa",
            desc: "La IA superinteligente: el nivel de inteligencia artificial que podría superar al ser humano.",
            url: "/articulos/inteligencia-artificial/inteligencia-artificial-superInteligente"
        },
        {
            title: "5G: qué es, cómo funciona y por qué cambiará internet",
            desc: "Descubre qué es el 5G, cómo funciona, en qué se diferencia del 4G y cuáles son sus aplicaciones reales.",
            url: "/articulos/tecnologia/5g-revolucion-conectividad"
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

// Cargar página en el parentesis al entrar
changePage(1);
/* ----- NAVIGATION BAR FUNCTION ----- */
    function myMenuFunction(){
      var menuBtn = document.getElementById("myNavMenu");

      if(menuBtn.className === "nav-menu"){
        menuBtn.className += " responsive";
      } else {
        menuBtn.className = "nav-menu";
      }
    }
    
    function closeMenuOnNavigate() {
      // Obtener el elemento sidebar
      var sidebar = document.querySelector(".sidebar");
      
      // Verificar si estamos en modo móvil (si el sidebar tiene la clase active)
      if(sidebar && sidebar.classList.contains("active")) {
        // Quitar la clase active para cerrar el sidebar
        sidebar.classList.remove("active");
      }
    }
    
    // Agregar event listeners a todos los enlaces de navegación cuando la página se carga
    document.addEventListener("DOMContentLoaded", function() {
      // Seleccionar todos los enlaces de navegación en el sidebar
      var navLinks = document.querySelectorAll(".sidebar-link");
      
      // Agregar el evento click a cada enlace
      navLinks.forEach(function(link) {
        link.addEventListener("click", closeMenuOnNavigate);
      });
    });

/* ----- ADD SHADOW ON NAVIGATION BAR WHILE SCROLLING ----- */
    window.onscroll = function() {headerShadow()};

    function headerShadow() {
      const navHeader =document.getElementById("header");

      if (document.body.scrollTop > 50 || document.documentElement.scrollTop >  50) {

        navHeader.style.boxShadow = "0 1px 6px rgba(0, 0, 0, 0.1)";
        navHeader.style.height = "70px";
        navHeader.style.lineHeight = "70px";

      } else {

        navHeader.style.boxShadow = "none";
        navHeader.style.height = "90px";
        navHeader.style.lineHeight = "90px";

      }
    }


/* ----- TYPING EFFECT ----- */
   var typingEffect = new Typed(".typedText",{
      strings : ["Ingeniero de Software","Desarrollador Full-Stack"],
      loop : true,
      typeSpeed : 100, 
      backSpeed : 80,
      backDelay : 2000
   })


/* ----- ## -- SCROLL REVEAL ANIMATION -- ## ----- */
   const sr = ScrollReveal({
          origin: 'top',
          distance: '60px',
          duration: 1200,
          reset: false
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-stats',{delay: 250})
  sr.reveal('.featured-text-btn',{delay: 300})
  sr.reveal('.social_icons',{delay: 350})
  sr.reveal('.featured-image',{delay: 300})


  /* -- PROJECT / WORK CARDS -- */
  sr.reveal('.project-box',{interval: 150})
  sr.reveal('.work-card',{interval: 120})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '60px',
    duration: 1200,
    reset: false
  })

  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '60px',
    duration: 1200,
    reset: false
  })
  
  srRight.reveal('.skills-box',{delay: 100})
  srRight.reveal('.form-control',{delay: 100})
  
/* ----- TOGGLE SIDEBAR IN SMARTPHONE -----*/

function toggleSidebar() {
  const sidebar = document.querySelector(".sidebar");
  const toggleButton = document.querySelector(".sidebar-toggle");

  sidebar.classList.toggle("active"); // Alterna la clase para mostrar u ocultar la barra

  // Opcional: Mover el botón de menú cuando la barra está visible

}


/* ----- CHANGE ACTIVE LINK ----- */
  
const sections = document.querySelectorAll("section[id]");

function scrollActive() {
  const scrollY = window.scrollY;

  sections.forEach((current) => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 50;
    const sectionId = current.getAttribute("id");

    // Seleccionar correctamente los enlaces en el sidebar
    const link = document.querySelector(`.sidebar-link[href="#${sectionId}"]`);

    if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
      if (link) link.classList.add("active");
    } else {
      if (link) link.classList.remove("active");
    }
  });
}

window.addEventListener("scroll", scrollActive);


/** Download CV */

  function downloadCV() {
      var pathCV = 'https://drive.google.com/uc?export=download&id=16LW9EJ-VHhakOZmPuSLihjXcOqI4wzVX';
      var linkTemp = document.createElement('a');

      linkTemp.href = pathCV;
      linkTemp.target = '_blank';
      linkTemp.download = 'curriculum-PabloIbanez.pdf';
      document.body.appendChild(linkTemp);
      linkTemp.click();

      document.body.removeChild(linkTemp);
}

/** Google Meet */

  function scheduleMeeting() {
    window.open('https://paiba.youcanbook.me/', '_blank');
  }

  // Add a click event to the button
  document.getElementById('scheduleMeetingBtn').addEventListener('click', scheduleMeeting);

/** Redirect Proyect */
function redirectProject(url) {
  window.location.href = url;
}

/** Translate */

var translations = {
  es: {
    language: "English",
    home: "Inicio",
    about: "Sobre mí",
    trajectory: "Trayectoria",
    projects: "Proyectos",
    contact: "Contacto",
    scheduleMeeting: "Programar Reunión",
    downloadCV: "Descargar CV",
    discoverMore: "Desliza!",
    name: "Pablo Ibañez Fdez-Delgado",
    developerDescription:
      "Full Stack Developer con <strong>3 años de experiencia</strong> construyendo y modernizando un SaaS de logística en producción. Desarrollo interfaces con <strong>React y TypeScript</strong> y APIs con Symfony, Laravel y PHP, y me mantengo al día de las formas más modernas de desarrollo, incluidas las herramientas de IA.",
    aboutMe:
      "Hola, soy Pablo Ibañez, un apasionado desarrollador web full stack con experiencia comprobada en el éxito de proyectos propios y en contribuciones clave al desarrollo digital de una reconocida empresa de logística y transporte. Mi habilidad para desenvolverme con soltura tanto en el front-end como en el back-end me permite adaptarme con facilidad a diferentes entornos y desafíos, siempre buscando soluciones innovadoras y eficaces.",
    footerText:
      "Todos los derechos reservados",
    paragraph1: 
      "Hola, soy Pablo Ibañez, Ingeniero Informático (mención en Ingeniería del Software) y Full Stack Developer con <strong>3 años de experiencia</strong> desarrollando y modernizando el SaaS de logística de Eurotransportcar, un producto en producción activa que usan a diario empresas del sector de la automoción.",
    paragraph2: 
      "Trabajo en todo el stack: en el frontend construyo interfaces responsive con <strong>React y TypeScript</strong>, componentes reutilizables y vistas basadas en datos que consumen nuestras propias APIs; en el backend diseño microservicios y endpoints REST con <strong>Symfony, Laravel y PHP</strong> sobre MySQL. He liderado varias integraciones B2B de principio a fin y la modernización del legacy (Symfony 2.8 → 6.4, PHP 7.1 → 8.1).",
    paragraph3: 
      "Soy pragmático y detallista: me importa la calidad del código, evitar regresiones y entregar software fiable. Por eso introduje tests de caracterización como red de seguridad para refactorizar código sin tests, y participo en todo el ciclo de vida del desarrollo: análisis, implementación, code review y despliegue.",
    databasesTitle: "Bases de datos",
    aiTitle: "Desarrollo asistido por IA",
    aiDescription: "Tengo un conocimiento profundo del proceso de desarrollo con IA y la integro en mi día a día: uso agentes de código como <strong>Claude Code</strong> y modelos de <strong>OpenAI</strong> para analizar código legacy, generar tests, refactorizar, revisar PRs y acelerar la entrega sin sacrificar calidad. Sé configurar estos agentes para cada proyecto: instrucciones de contexto (CLAUDE.md / AGENTS.md), <strong>skills</strong> personalizadas para tareas recurrentes, hooks y permisos. Así automatizo lo mecánico y dedico más tiempo a lo que aporta valor, sabiendo cuándo delegar en la IA, cómo darle buen contexto y cómo validar lo que produce.",
    aiSkillsTitle: "IA",
    aiAgents: "Configuración de agentes",
    microservices: "Microservicios",
    toolsTitle: "Herramientas",
    languagesTitle: "Idiomas",
    spanish: "Español",
    spanishLevel: "Nativo",
    english: "Inglés",
    eurotransportcarTitle: "Eurotransportcar servicios logisticos SL",
    eurotransportcarLocation: "Híbrido",
    eurotransportcarJobTitle: "Full Stack Developer",
    eurotransportcarDescription: "Desarrollo y mantenimiento del SaaS de logística principal de la empresa, en producción activa.",
    eurotransportcarStart: "Oct 2023",
    eurotransportcarDuration: "3 años",
    eurotransportcarBullet1: "Desarrollo el frontend del producto con <strong>React y TypeScript</strong>: interfaces responsive, componentes reutilizables y vistas basadas en datos que consumen nuestras propias APIs, conviviendo con vistas legacy en Twig/jQuery.",
    eurotransportcarBullet2: "Desarrollador principal en varias <strong>integraciones B2B</strong> con empresas del sector de la automoción, responsable del diseño y la entrega desde el análisis hasta producción.",
    eurotransportcarBullet3: "Diseño y construyo a diario <strong>microservicios y endpoints REST</strong> con Symfony, Laravel y PHP que dan soporte a estas integraciones y a funcionalidades internas.",
    eurotransportcarBullet4: "Sustituí flujos manuales con partners por integraciones automatizadas, mejorando la fiabilidad y reduciendo errores operativos.",
    eurotransportcarBullet5: "Estandaricé el formato de respuesta de la API REST en todos los endpoints, mejorando la consistencia y reduciendo el tiempo de integración de nuevos partners.",
    eurotransportcarBullet6: "Lideré la <strong>modernización del legacy</strong>: migración de Symfony 2.8 → 6.4 y PHP 7.1 → 8.1, introduciendo tests de caracterización como red de seguridad para refactorizar sin regresiones.",
    eurotransportcarBullet7: "Participo en todo el ciclo de desarrollo (análisis, implementación, code review y despliegue), organizando el trabajo en Jira/Monday.",
    eurotransportcarPracticesTitle: "Eurotransportcar servicios logisticos SL",
    eurotransportcarPracticesLocation: "Híbrido",
    eurotransportcarPracticesJobTitle: "Full-Stack (Prácticas)",
    eurotransportcarPracticesDescription: "Inicié mi carrera profesional realizando mi formación en la empresa líder en logística de transportes, donde tuve la oportunidad de explorar y trabajar con tecnologías más allá de lo aprendido en mi formación universitaria. Durante este período, amplié mis conocimientos prácticos y adquirí experiencia real en el desarrollo y mantenimiento de soluciones web, lo que me permitió consolidar habilidades clave y entender mejor las necesidades tecnológicas del sector.",
    universidadDeCordobaTitle: "Universidad de Córdoba",
    universidadDeCordobaLocation: "Córdoba",
    universidadDeCordobaJobTitle: "Ingeniería Informática",
    universidadDeCordobaDescription: "Grado en Ingeniería Informática con mención en Ingeniería del Software. Formación sólida en algoritmia, estructuras de datos, bases de datos y metodologías ágiles (Scrum), trabajando con Java, JavaScript, C, C++, SQL y Bash.",
    universidadComplutenseDeMadridTitle: "Universidad Complutense de Madrid",
    universidadComplutenseDeMadridLocation: "Remoto",
    universidadComplutenseDeMadridJobTitle: "Desarrollo de Apps Móviles",
    universidadComplutenseDeMadridYear: "2022",
    universidadComplutenseDeMadridDescription: "En el curso, absorbiendo conocimientos y herramientas clave, exploré a fondo el desarrollo de aplicaciones móviles. Desde la creación de interfaces llamativas hasta la implementación de funciones dinámicas, adquirí habilidades esenciales que ahora me permiten dar vida a ideas innovadoras en el mundo de las apps móviles.",
    universidadDeAlicanteTitle: "Universidad de Alicante",
    universidadDeAlicanteLocation: "Remoto",
    universidadDeAlicanteJobTitle: "Introducción al Desarrollo Web",
    universidadDeAlicanteDescription: "En el curso de Introducción al Desarrollo Web, adquirí los fundamentos esenciales para construir experiencias web. Exploré conceptos clave y me sumergí en herramientas indispensables como HTML, CSS y JavaScript.",
    institutoNacionalDeCiberseguridadTitle: "Instituto Nacional de Ciberseguridad",
    institutoNacionalDeCiberseguridadLocation: "Remoto",
    institutoNacionalDeCiberseguridadJobTitle: "Ciberseguridad Teletrabajando",
    institutoNacionalDeCiberseguridadDescription: "En el curso de Ciberseguridad en el Teletrabajo, me sumergí en las estrategias esenciales para proteger la información en entornos remotos. Desde técnicas de prevención de amenazas hasta prácticas de seguridad digital, adquirí conocimientos sólidos para salvaguardar la integridad de los datos en el mundo del teletrabajo.",
    arenaAllyTitle: "ArenaAlly",
    arenaAllyDescription: "Aplicación web para la gestión de competiciones de la Federación de Balonmano",
    wordleTitle: "Wordle",
    wordleDescription: "Aplicación web del famoso juego de adivinar palabras",
    ucoDexTitle: "UcoDex",
    ucoDexDescription: "Aplicación móvil de una enciclopedia Pokémon",
    gestorDeCriticasTitle: "Gestor de críticas",
    gestorDeCriticasDescription: "Aplicación web de gestión de críticas",
    calculadoraTitle: "Calculadora",
    calculadoraDescription: "Aplicación de escritorio de una calculadora",
    editorTitle: "Editor",
    editorDescription: "Aplicación de escritorio de un editor de texto",
    adivinarRefranesTitle: "Adivinar refranes",
    adivinarRefranesDescription: "Juego de refranes mediante socket",
    tresEnRayaTitle: "Tres en Raya",
    tresEnRayaDescription: "Famoso juego del tres en raya", 
    portfolioTitle: "Portfolio Personal",
    portfolioDescription: "Proyecto de este portfolio",    
    contactSubtitle: "¿Tienes un proyecto en mente? ¡Contáctame desde aquí!",
    contactInfoTitle: "Mis datos",
    contactPhone: "Teléfono: 693 328 312",
    contactEmail: "Correo electrónico: paiba2012@gmail.com",
    contactFormTitle: "Envíame un mensaje",
    nombrePlaceholder: "Nombre",
    correoPlaceholder: "Correo electrónico",
    mensajePlaceholder: "Mensaje",
    contactSubmitButton: "Enviar",
    qualityTitle: "Calidad",
    qualityDescription: "Trabajos de alta calidad",
    innovationTitle: "Innovación",
    innovationDescription: "Ideas frescas",
    collaborationTitle: "Colaboración",
    collaborationDescription: "Colaboramos para el éxito",
    statsProjects: "Proyectos",
    statsTech: "Tecnologías",
    statsExperience: "Años de experiencia",
    viewCode: "Ver código",
    present: "Actualidad",
    formSuccess: "¡Mensaje enviado! Te responderé pronto.",
    formError: "No se pudo enviar. Inténtalo de nuevo o escríbeme por correo.",
    formSending: "Enviando...",
  },
  en: {
    language: "Español",
    home: "Home",
    about: "About Me",
    trajectory: "Trajectory",
    projects: "Projects",
    contact: "Contact",
    scheduleMeeting: "Schedule Meeting",
    downloadCV: "Download CV",
    discoverMore: "Slide!",
    name: "Pablo Ibañez Fdez-Delgado",
    developerDescription:
      "Full Stack Developer with <strong>3 years of experience</strong> building and modernizing a production logistics SaaS. I build interfaces with <strong>React and TypeScript</strong> and APIs with Symfony, Laravel and PHP, and I keep up to date with the latest development practices, including AI tooling.",
    aboutMe:
      "Hello, I'm Pablo Ibañez, a passionate full stack web developer with proven experience in the success of my own projects and in key contributions to the digital development of a renowned logistics and transport company. My ability to be fluent in both front-end and back-end allows me to easily adapt to different environments and challenges, always looking for innovative and effective solutions.",
    footerText:
      "All rights reserved",
    paragraph1: 
      "Hi, I'm Pablo Ibañez, a Computer Engineer (Software Engineering major) and Full Stack Developer with <strong>3 years of experience</strong> building and modernizing Eurotransportcar's logistics SaaS, a product in active production used daily by companies in the automotive sector.",
    paragraph2: 
      "I work across the whole stack: on the frontend I build responsive interfaces with <strong>React and TypeScript</strong>, reusable components and data-driven views consuming our own APIs; on the backend I design microservices and REST endpoints with <strong>Symfony, Laravel and PHP</strong> on top of MySQL. I have led several end-to-end B2B integrations and the legacy modernization (Symfony 2.8 → 6.4, PHP 7.1 → 8.1).",
    paragraph3: 
      "I'm pragmatic and detail-oriented, with a strong focus on code quality, regression safety and shipping reliable software. That's why I introduced characterization tests as a safety net to refactor untested code, and I take part in the full SDLC: analysis, implementation, code review and deployment.",
    databasesTitle: "Databases",
    aiTitle: "AI-assisted development",
    aiDescription: "I have deep knowledge of the AI-assisted development process and use it every day: I work with coding agents like <strong>Claude Code</strong> and <strong>OpenAI</strong> models to analyze legacy code, generate tests, refactor, review PRs and speed up delivery without sacrificing quality. I know how to set up these agents for each project: context instructions (CLAUDE.md / AGENTS.md), custom <strong>skills</strong> for recurring tasks, hooks and permissions. That way I automate the mechanical work and spend more time where it adds value, knowing when to delegate to AI, how to give it the right context and how to validate its output.",
    aiSkillsTitle: "AI",
    aiAgents: "Agent configuration",
    microservices: "Microservices",
    toolsTitle: "Tools",
    languagesTitle: "Languages",
    spanish: "Spanish",
    spanishLevel: "Native",
    english: "English",
    eurotransportcarTitle: "Eurotransportcar servicios logisticos SL",
    eurotransportcarLocation: "Hybrid",
    eurotransportcarJobTitle: "Full Stack Developer",
    eurotransportcarDescription: 
      "Development and maintenance of the company's core logistics SaaS, in active production.",
    eurotransportcarStart: "Oct 2023",
    eurotransportcarDuration: "3 years",
    eurotransportcarBullet1: "Build the product's frontend with <strong>React and TypeScript</strong>: responsive interfaces, reusable components and data-driven views consumed from our own APIs, alongside legacy Twig/jQuery views.",
    eurotransportcarBullet2: "Lead developer on several <strong>B2B integrations</strong> with companies in the automotive sector, owning design and delivery from analysis to production.",
    eurotransportcarBullet3: "Design and build <strong>microservices and REST endpoints</strong> daily with Symfony, Laravel and PHP, powering these integrations and internal features.",
    eurotransportcarBullet4: "Replaced manual partner workflows with automated integrations, improving reliability and reducing operational errors.",
    eurotransportcarBullet5: "Standardized the REST API response format across all endpoints, improving consistency and reducing integration time for new partners.",
    eurotransportcarBullet6: "Led the <strong>legacy modernization</strong>: migration path from Symfony 2.8 → 6.4 and PHP 7.1 → 8.1, introducing characterization tests as a safety net to refactor without regressions.",
    eurotransportcarBullet7: "Take part in the full SDLC (analysis, implementation, code review and deployment), organizing daily work in Jira/Monday.",
    eurotransportcarPracticesTitle: "Eurotransportcar servicios logisticos SL",
    eurotransportcarPracticesLocation: "Hybrid",
    eurotransportcarPracticesJobTitle: "Full-Stack (Internship)",
    eurotransportcarPracticesDescription: 
      "I started my professional career training at the leading transport logistics company, where I had the opportunity to explore and work with technologies beyond what I had learnt in my university education. During this period, I broadened my practical knowledge and gained real-world experience in developing and maintaining web solutions, which allowed me to consolidate key skills and better understand the technological needs of the sector.",
    universidadDeCordobaTitle: "University of Córdoba",
    universidadDeCordobaLocation: "Córdoba",
    universidadDeCordobaJobTitle: "Computer Engineering",
    universidadDeCordobaYear: "2023",
    universidadDeCordobaDescription: 
      "Computer Engineering degree with a major in Software Engineering. Solid background in algorithms, data structures, databases and agile methodologies (Scrum), working with Java, JavaScript, C, C++, SQL and Bash.",
    arenaAllyTitle: "ArenaAlly",
    arenaAllyDescription: "Web application for handball Federation competitions management",
    wordleTitle: "Wordle",
    wordleDescription: "Web application of the famous word guessing game",
    ucoDexTitle: "UcoDex",
    ucoDexDescription: "Mobile application of a Pokémon encyclopedia",
    editorTitle: "Editor",
    editorDescription: "Desktop application of a text editor",
    adivinarRefranesTitle: "Guess the Proverbs",
    adivinarRefranesDescription: "Proverbs guessing game through socket",
    tresEnRayaTitle: "Tic-Tac-Toe",
    tresEnRayaDescription: "Famous game of tic-tac-toe",
    portfolioTitle: "Personal Portfolio",
    portfolioDescription: "Project of this portfolio",
    contactSubtitle: "Do you have a project in mind? Contact me from here!",
    contactInfoTitle: "My data",
    contactPhone: "Phone: 693 328 312",
    contactEmail: "Email: paiba2012@gmail.com",
    contactFormTitle: "Send me a message",
    nombrePlaceholder: "Name",
    correoPlaceholder: "Email",
    mensajePlaceholder: "Message",
    contactSubmitButton: "Send",
    qualityTitle: "Quality",
    qualityDescription: "High-quality work",
    innovationTitle: "Innovation",
    innovationDescription: "Fresh ideas",
    collaborationTitle: "Collaboration",
    collaborationDescription: "We collaborate for success",
    statsProjects: "Projects",
    statsTech: "Technologies",
    statsExperience: "Years of experience",
    viewCode: "View code",
    present: "Present",
    formSuccess: "Message sent! I'll get back to you soon.",
    formError: "Couldn't send it. Try again or email me directly.",
    formSending: "Sending...",
  },
};

function updateTypedText(language) {
  if (typingEffect) {
    typingEffect.destroy();
  }

  var typedStrings = (language === 'es') ? ["Ingeniero de Software", "Desarrollador Full-Stack"] : ["Software Engineer", "Full-Stack Developer"];

  typingEffect = new Typed(".typedText", {
    strings: typedStrings,
    loop: true,
    typeSpeed: 100,
    backSpeed: 80,
    backDelay: 2000
  });
}

// Change language
function toggleLanguage() {
  var currentLanguage = document.documentElement.lang || "es";
  var newLanguage = currentLanguage === "es" ? "en" : "es";

  document.documentElement.lang = newLanguage;
  updateContent(newLanguage);
  updateTypedText(newLanguage);
}

function updateContent(language) {
  var elements = document.querySelectorAll("[data-i18n]");
  elements.forEach(function (element) {
    var key = element.getAttribute("data-i18n");
    if (translations[language] && translations[language][key]) {
      var translation = translations[language][key];

      if (element.tagName === "INPUT" || element.tagName === "TEXTAREA") {
        element.setAttribute("placeholder", translation);
      } else {
        element.innerHTML = translation;
      }
    }
  });
}

/** Contact form — envío asíncrono con feedback */
(function () {
  var form = document.getElementById("contactForm");
  if (!form) return;

  var statusEl = document.getElementById("formStatus");

  function t(key) {
    var lang = document.documentElement.lang || "es";
    return (translations[lang] && translations[lang][key]) || translations.es[key];
  }

  form.addEventListener("submit", function (e) {
    e.preventDefault();

    var submitBtn = form.querySelector('button[type="submit"]');
    statusEl.className = "form-status";
    statusEl.textContent = t("formSending");
    if (submitBtn) submitBtn.disabled = true;

    fetch(form.action, {
      method: "POST",
      headers: { "Content-Type": "application/x-www-form-urlencoded" },
      body: new URLSearchParams(new FormData(form)).toString()
    })
      .then(function (res) {
        if (!res.ok) throw new Error("Bad response");
        statusEl.className = "form-status form-status--ok";
        statusEl.textContent = t("formSuccess");
        form.reset();
      })
      .catch(function () {
        statusEl.className = "form-status form-status--error";
        statusEl.textContent = t("formError");
      })
      .finally(function () {
        if (submitBtn) submitBtn.disabled = false;
      });
  });
})();

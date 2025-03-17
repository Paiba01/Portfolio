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
          distance: '80px',
          duration: 2000,
          reset: true     
   })

  /* -- HOME -- */
  sr.reveal('.featured-text-card',{})
  sr.reveal('.featured-name',{delay: 100})
  sr.reveal('.featured-text-info',{delay: 200})
  sr.reveal('.featured-text-btn',{delay: 200})
  sr.reveal('.social_icons',{delay: 200})
  sr.reveal('.featured-image',{delay: 300})
  

  /* -- PROJECT BOX -- */
  sr.reveal('.project-box',{interval: 200})

  /* -- HEADINGS -- */
  sr.reveal('.top-header',{})

/* ----- ## -- SCROLL REVEAL LEFT_RIGHT ANIMATION -- ## ----- */

  /* -- ABOUT INFO & CONTACT INFO -- */
  const srLeft = ScrollReveal({
    origin: 'left',
    distance: '80px',
    duration: 2000,
    reset: true
  })
  
  srLeft.reveal('.about-info',{delay: 100})
  srLeft.reveal('.contact-info',{delay: 100})

  /* -- ABOUT SKILLS & FORM BOX -- */
  const srRight = ScrollReveal({
    origin: 'right',
    distance: '80px',
    duration: 2000,
    reset: true
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
      linkTemp.download = 'curriculum-JoseAngelDorado.pdf';
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
      "Soy un desarrollador web fullstack, especializado en backend en tecnologías como PHP y NodeJS y en frontend tecnologías como Html/Css/Javascript y React. Siempre trato de estar actualizado con las últimas tendencias tecnológicas para garantizar que mis soluciones sean adecuadas.",
    aboutMe:
      "Hola, soy Pablo Ibañez, un apasionado desarrollador web full stack con experiencia comprobada en el éxito de proyectos propios y en contribuciones clave al desarrollo digital de una reconocida empresa de logística y transporte. Mi habilidad para desenvolverme con soltura tanto en el front-end como en el back-end me permite adaptarme con facilidad a diferentes entornos y desafíos, siempre buscando soluciones innovadoras y eficaces.",
    footerText:
      "Todos los derechos reservados",
    paragraph1: 
      "Hola, soy Pablo Ibañez, un apasionado desarrollador web full stack con experiencia comprobada en el éxito de proyectos propios y en contribuciones clave al desarrollo digital de una reconocida empresa de logística y transporte. Mi habilidad para desenvolverme con soltura tanto en el front-end como en el back-end me permite adaptarme con facilidad a diferentes entornos y desafíos, siempre buscando soluciones innovadoras y eficaces.",
    paragraph2: 
      "En mi trayectoria, he destacado por mi enfoque proactivo y mi capacidad de razonamiento lógico, cualidades que me han permitido abordar problemas complejos y encontrar soluciones eficientes. Me caracterizo por mi habilidad para coordinar equipos de manera efectiva, fomentando la colaboración, aportando ideas innovadoras y valorando las perspectivas de los demás para alcanzar los mejores resultados.",
    paragraph3: 
      "Además de mi experiencia técnica, me considero una persona creativa y versátil. Aunque mi especialidad está en el backend, disfruto profundamente trabajar en aspectos de diseño, aportando valor con ideas frescas y funcionales. Estoy siempre explorando nuevas tecnologías y tendencias en el desarrollo web para mantenerme actualizado con las últimas innovaciones. Mi enfoque flexible y mi mente abierta me permiten adaptarme rápidamente a los cambios y proponer soluciones creativas a los desafíos.",
    paragraph4: 
      "En mi trabajo actual en el desarrollo web para una empresa líder en el sector de logística de transportes, me encargo de proporcionar soluciones simples y de alta calidad, siempre con el foco en mejorar la experiencia del usuario. Este enfoque ha sido clave para optimizar procesos y fortalecer la interacción digital con los clientes, consolidando aún más nuestra posición como referentes en el mercado.",
    paragraph5: 
      "Mis habilidades van más allá de la programación; también valoro profundamente el trabajo en equipo y la colaboración. Creo en el poder de compartir conocimientos y aprender juntos para alcanzar resultados excepcionales. Mi actitud positiva y mi capacidad para comunicarme de manera clara y efectiva facilitan la colaboración en proyectos complejos, asegurando que todos los miembros del equipo estén alineados y motivados hacia el mismo objetivo.",
    paragraph6: 
      "En resumen, soy un desarrollador web apasionado, listo para enfrentar cualquier desafío que se presente. Siempre estoy en busca de oportunidades emocionantes para seguir aprendiendo y creciendo en el mundo del desarrollo web.",
    databasesTitle: "Bases de datos",
    eurotransportcarTitle: "Eurotransportcar servicios logisticos SL",
    eurotransportcarLocation: "Hibrido",
    eurotransportcarJobTitle: "Full-Stack",
    eurotransportcarDescription: "Formo parte del equipo de desarrollo encargado de crear y mantener el producto principal de una empresa líder en logística de transportes. En este rol, trabajo con tecnologías como HTML, Bootstrap, PHP y MySQL, desarrollando soluciones eficientes que optimizan procesos y mejoran la experiencia del usuario. Además, he contribuido al diseño y mantenimiento de interfaces intuitivas y funcionales, asegurando un producto de alta calidad que satisface las necesidades del mercado.",
    eurotransportcarPracticesTitle: "Eurotransportcar servicios logisticos SL",
    eurotransportcarPracticesLocation: "Hibrido",
    eurotransportcarPracticesJobTitle: "Full-Stack (Prácticas)",
    eurotransportcarPracticesDescription: "Inicié mi carrera profesional realizando mi formación en la empresa líder en logística de transportes, donde tuve la oportunidad de explorar y trabajar con tecnologías más allá de lo aprendido en mi formación universitaria. Durante este período, amplié mis conocimientos prácticos y adquirí experiencia real en el desarrollo y mantenimiento de soluciones web, lo que me permitió consolidar habilidades clave y entender mejor las necesidades tecnológicas del sector.",
    universidadDeCordobaTitle: "Universidad de Córdoba",
    universidadDeCordobaLocation: "Córdoba",
    universidadDeCordobaJobTitle: "Ingeniería Informática",
    universidadDeCordobaDescription: "Durante mi etapa universitaria, me enfoqué en la ingeniería de software, colaborando en entornos ágiles con Scrum y Trello. Desarrollé habilidades en backend como Java, PHP o Python, y frontend con CSS, HTML y JavaScript. También gané experiencia en la gestión de bases de datos como MySQL o MongoDB. Esta formación sólida me preparó para abordar desafíos complejos con creatividad y eficacia.",
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
    collabotarionDescription: "Colaboramos para el éxito",
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
      "I am an experienced backend web developer, specialized in technologies like Python and Java. I stay updated with the latest technological trends to ensure my solutions are at the forefront.",
    aboutMe:
      "Hello, I'm Pablo Ibañez, a passionate full stack web developer with proven experience in the success of my own projects and in key contributions to the digital development of a renowned logistics and transport company. My ability to be fluent in both front-end and back-end allows me to easily adapt to different environments and challenges, always looking for innovative and effective solutions.",
    footerText:
      "All rights reserved",
    paragraph1: 
      "Hi, I'm Pablo Ibañez, a passionate full stack web developer with proven experience in the success of my own projects and in key contributions to the digital development of a renowned logistics and transport company. My ability to be fluent in both front-end and back-end allows me to easily adapt to different environments and challenges, always looking for innovative and effective solutions.",
    paragraph2: 
      "Throughout my career, I have stood out for my proactive approach and logical reasoning skills, qualities that have enabled me to tackle complex problems and find efficient solutions. I am known for my ability to coordinate teams effectively, fostering collaboration, contributing innovative ideas and valuing the perspectives of others to achieve the best results.",
    paragraph3: 
      "In addition to my technical expertise, I consider myself a creative and versatile person. Although my speciality is in the backend, I deeply enjoy working on design aspects, adding value with fresh and functional ideas. I am always exploring new technologies and trends in web development to keep up to date with the latest innovations. My flexible approach and open mind allow me to adapt quickly to changes and come up with creative solutions to challenges.",
    paragraph4: 
      "In my current work in web development for a leading company in the transport logistics sector, I am responsible for providing simple and high quality solutions, always with a focus on improving the user experience. This approach has been key to optimising processes and strengthening digital interaction with customers, further consolidating our position as a market leader.",
    paragraph5: 
      "My skills are not limited to programming alone; I also value and promote a collaborative work environment. I believe in the importance of teamwork and knowledge-sharing to achieve exceptional results. My positive attitude and effective communication skills make it easy to collaborate with me on complex and challenging projects.",
    paragraph6: 
      "In short, I am a passionate web developer, ready to take on any challenge that comes my way. I am always looking for exciting opportunities to keep learning and growing in the world of web development.",
    databasesTitle: "Databases",
    eurotransportcarTitle: "Eurotransportcar servicios logisticos SL",
    eurotransportcarLocation: "Hybrid",
    eurotransportcarJobTitle: "Full-Stack",
    eurotransportcarDescription: 
      "I am part of the development team in charge of creating and maintaining the core product of a leading transport logistics company. In this role, I work with technologies such as HTML, Bootstrap, PHP and MySQL, developing efficient solutions that optimize processes and improve the user experience. In addition, I have contributed to the design and maintenance of intuitive and functional interfaces, ensuring a high quality product that meets the needs of the market.",
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
      "During my university years, I focused on software engineering, collaborating in agile environments with Scrum and Trello. I developed skills in backend technologies such as Java, PHP, or Python, and frontend technologies with CSS, HTML, and JavaScript. I also gained experience in managing databases like MySQL or MongoDB. This solid education prepared me to tackle complex challenges with creativity and efficiency.",
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

// Todo el contenido editable del sitio vive aquí.
// Cambia el nombre de marca, textos o datos de contacto sin tocar los componentes.

export const site = {
  name: "Armartech",
  tagline: "Lean, automatización con IA y desarrollo web",
  url: "https://www.armartechweb.com",
  // Descripción para Google y redes (máximo unos 155 caracteres)
  description:
    "Automatizaciones con IA para talleres, instaladores y pymes del Anoia y Barcelona: presupuestos, citas, facturas y cobros. Diagnóstico gratuito.",
  location: "Piera (Barcelona) · Anoia, Baix Llobregat y Barcelona",
  locale: "es_ES",
  // Correo único de empresa. Provisional: cámbialo cuando tengas el dominio y el buzón creados.
  email: "info@armartechweb.com",
  // Teléfono de contacto: el mismo que en el Perfil de Empresa de Google
  phone: "656 33 25 68",
  phoneHref: "tel:+34656332568",
  whatsapp: "https://wa.me/34656332568?text=Hola%20Marianela%2C%20quiero%20informaci%C3%B3n%20sobre%20el%20diagn%C3%B3stico%20gratuito",
  // Perfiles en redes (para Google)
  sameAs: [
    "https://www.instagram.com/armartechweb",
    "https://www.linkedin.com/in/marianela-mar%C3%ADn-mazaira",
  ],
  // Imagen que se ve al compartir la web en LinkedIn, WhatsApp, etc. (1200 x 630 px)
  ogImage: "/og-armartech.png",
};

// Imágenes de fondo opcionales. Si el archivo existe en /public se usa;
// si no, se muestra un fondo azul con trama técnica. Formato recomendado: JPG horizontal de 1920 px.
export const images = {
  hero: "images/portada.jpg",
  pageHeader: "images/cabecera.jpg",
};

export const nav = [
  { href: "/automatizaciones-empresas-barcelona", label: "Automatizaciones" },
  { href: "/servicios", label: "Servicios" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/equipo", label: "Sobre mí" },
  { href: "/blog", label: "Blog" },
  { href: "/contacto", label: "Contacto" },
];

// Acción principal de toda la web: pedir el diagnóstico gratuito
export const diagnosticoTema = "Diagnóstico gratuito";
export const ctaDiagnostico = { href: "/contacto?tema=diagnostico", label: "Diagnóstico gratuito" };

export const hero = {
  // Frase pequeña encima del título: a quién va dirigida la web
  eyebrow: "Para talleres, instaladores y pequeñas empresas del Anoia y el Baix Llobregat",
  titleLead: "Menos tareas repetitivas,",
  titleMain: "más tiempo para tu negocio",
  lead: "Automatizamos con IA lo que te quita horas cada semana: presupuestos, citas, facturas y cobros. Si tu taller o tu fábrica necesita ordenar sus procesos, empezamos por Lean Manufacturing. En persona desde Piera y con precio cerrado.",
  cta: { href: "#diagnostico", label: "Quiero ahorrar tiempo" },
  note: "Sin compromiso · Respuesta en 2 días laborables",
};
export type Pillar = {
  id: string;
  name: string;
  summary: string;
  title: string;
  body: string;
  items: string[];
  // Pasos numerados (se muestran en lugar de las etiquetas cuando existen)
  steps?: string[];
  motto?: string;
  image: string;
  // Encuadre de la foto en franjas estrechas (por defecto, centrada)
  imagePosition?: string;
  // Enlaces a las páginas de detalle del servicio
  links?: { href: string; label: string }[];
  // Servicio principal: aparece en la portada
  destacado?: boolean;
};

export const services: {
  heading: string;
  intro: string;
  pillars: Pillar[];
  closing: string;
} = {
  heading: "Nuestros servicios",
  intro:
    "Primero simplificamos tus procesos, después automatizamos lo que se repite y desarrollamos las herramientas que te faltan. También formamos a tu equipo y, con Silver Home, llevamos la tecnología útil a los hogares de las personas mayores.",
  pillars: [
    {
      id: "automatizaciones",
      name: "Automatizaciones con IA",
      summary: "Las tareas repetitivas de tu negocio, hechas solas",
      title: "Automatizaciones con IA",
      body: "Presupuestos en minutos, clientes atendidos por WhatsApp, citas en tu agenda y facturas que se cobran sin perseguir a nadie. Conectamos las herramientas que ya usas.",
      items: [
        "Presupuestos con IA",
        "Atención y citas por WhatsApp",
        "Facturas y cobros",
        "Datos sin copiar a mano",
        "Informes y avisos",
      ],
      image: "images/cabecera.jpg",
      destacado: true,
    },
    {
      id: "consultoria",
      name: "Consultoría Lean",
      summary: "Elimina lo que sobra en tus procesos y reduce costes",
      title: "Consultoría para optimizar",
      body: "Analizamos el trabajo real para convertir cada operación en un sistema más ágil, seguro y eficiente.",
      items: [
        "Procesos",
        "Lean Manufacturing",
        "Ergonomía",
        "Tiempos",
        "Derroches",
      ],
      steps: [
        "Procesos",
        "Lean Manufacturing",
        "Ergonomía",
        "Tiempos",
        "Derroches",
      ],
      motto: "Diagnosticar, simplificar, mejorar.",
      image: "images/consultoria.jpg",
      destacado: true,
      links: [
        {
          href: "/consultoria-lean-manufacturing",
          label: "Ver consultoría Lean",
        },
      ],
    },
    {
      id: "web",
      name: "Webs y aplicaciones",
      summary: "Webs y aplicaciones que trabajan para la empresa",
      title: "Webs, aplicaciones y digitalización",
      body: "Diseño, desarrollo y soporte continuo de webs y aplicaciones. También digitalizamos procesos de planta para dejar atrás el papel y las hojas de cálculo.",
      items: [
        "Creación de páginas web",
        "Mantenimiento web",
        "Aplicaciones a medida",
        "Partes de producción e incidencias",
        "Indicadores y costes",
        "Gestión documental",
      ],
      image: "images/web.jpg",
      destacado: true,
      links: [
        { href: "/diseno-web-barcelona", label: "Ver diseño web" },
        { href: "/digitalizacion-industrial", label: "Ver digitalización" },
      ],
    },
    {
      id: "formacion",
      name: "Formación",
      summary: "Áreas industriales, energéticas y tecnológicas",
      title: "Formación para avanzar",
      body: "Conocimiento técnico aplicado para convertir conceptos complejos en capacidades reales. Cursos in-company, adaptados a tu equipo y a tus instalaciones.",
      items: [
        "Lean",
        "Energía",
        "Electricidad",
        "Vehículo eléctrico",
        "Robótica y automatización",
      ],
      image: "images/formacion.jpg",
      imagePosition: "object-[50%_20%]",
      links: [{ href: "/formacion-tecnica-empresas", label: "Ver formación" }],
    },
    {
      id: "silver",
      name: "Silver Home",
      summary: "Tecnología para personas mayores que viven en casa",
      title: "Más autonomía en casa",
      body: "Relojes SOS, tablets adaptadas y sensores de movimiento, humo, fugas de agua y apertura de puertas. Lo instalamos sin obras, lo configuramos, lo explicamos a la persona y a su familia, y damos soporte.",
      items: [
        "Relojes SOS",
        "Tablets adaptadas",
        "Sensores en el hogar",
        "Avisos a familiares",
      ],
      steps: [
        "Analizamos el hogar",
        "Instalamos y configuramos",
        "Formamos y acompañamos",
      ],
      image: "images/silver-home.jpg",
      links: [{ href: "/silver-home", label: "Ver Silver Home" }],
    },
  ],
  closing:
    "Servicios complementarios para mejorar procesos, impulsar la presencia digital, desarrollar conocimiento técnico y dar más autonomía a las personas mayores en su casa.",
};

// Paquetes con precio orientativo.
// show: false las oculta de la web (los datos se conservan para recuperarlas).
// draft: true muestra la etiqueta "Precios provisionales" hasta que fijéis los precios definitivos.
export type Package = {
  pillar: string;
  name: string;
  description: string;
  includes: string[];
  price: string;
  unit?: string;
  note?: string;
};

export const solutions: {
  heading: string;
  intro: string;
  show: boolean;
  draft: boolean;
  footnote: string;
  list: Package[];
} = {
  heading: "Soluciones",
  show: false,
  intro:
    "Servicios con alcance definido y precio de partida, para que sepas desde el principio de qué hablamos.",
  draft: true,
  footnote:
    "Precios orientativos sin IVA. El presupuesto final se cierra por escrito tras la primera reunión o el diagnóstico. Los servicios con cuota mensual se indican aparte.",
  list: [
    {
      pillar: "Consultoría",
      name: "Diagnóstico de procesos",
      description:
        "Visita a planta u oficina para detectar dónde se pierde tiempo, calidad o dinero.",
      includes: [
        "Observación del proceso real",
        "Medición de tiempos y desperdicios",
        "Informe con mejoras priorizadas",
      ],
      price: "750 €",
    },
    {
      pillar: "Consultoría",
      name: "Implantación Lean y 5S",
      description:
        "Acompañamiento para ordenar puestos y estandarizar el trabajo con el equipo.",
      includes: [
        "Plan de implantación",
        "Sesiones en planta con el equipo",
        "Estándares de trabajo documentados",
      ],
      price: "2.400 €",
    },
    {
      pillar: "Web y digitalización",
      name: "Web corporativa",
      description:
        "Web profesional para presentar la empresa y recibir contactos.",
      includes: [
        "Diseño adaptado a móvil",
        "SEO básico y accesibilidad",
        "Formulario de contacto y textos legales",
      ],
      price: "1.200 €",
      note: "Mantenimiento opcional desde 50 €/mes.",
    },
    {
      pillar: "Web y digitalización",
      name: "Digitalización de un proceso",
      description:
        "Aplicación a medida para sustituir papel y hojas de cálculo en un proceso concreto.",
      includes: [
        "Partes de producción, pedidos o incidencias",
        "Panel de indicadores y costes para dirección",
        "Formación a los usuarios",
      ],
      price: "2.500 €",
    },
    {
      pillar: "Web y digitalización",
      name: "Gestión documental",
      description:
        "Un único sitio, ordenado y con permisos, para procedimientos, manuales y expedientes.",
      includes: [
        "Acceso por roles: dirección, planta, clientes",
        "Versiones y búsqueda de documentos",
        "Flujos de aprobación y área de cliente",
      ],
      price: "2.000 €",
    },
    {
      pillar: "Formación",
      name: "Curso in-company",
      description:
        "Formación técnica adaptada a tu equipo y a tus instalaciones.",
      includes: [
        "Lean, 5S, riesgo eléctrico o vehículo eléctrico",
        "Material didáctico propio",
        "Evaluación y certificado de asistencia",
      ],
      price: "80 €",
      unit: "/hora",
      note: "Puede ser bonificable con el crédito de formación de la empresa (FUNDAE). Te ayudamos a comprobarlo.",
    },
  ],
};

// Trabajos realizados.
// tag "ejemplo": texto provisional que hay que sustituir por un caso real antes de publicar.
// tag "propio": proyecto propio o prototipo, no encargado por un cliente.
export type Case = {
  pillar: string;
  title: string;
  client: string;
  problem: string;
  solution: string;
  result: string;
  href?: string;
  tag?: "ejemplo" | "propio";
};

export const cases: { heading: string; intro: string; list: Case[] } = {
  heading: "Proyectos realizados",
  intro:
    "Algunos proyectos realizados. Pulsa en cada uno para ver el detalle.",
  list: [
    {
      pillar: "Formación",
      title: "Formación en Lean Manufacturing para el equipo de producción",
      client: "Altoplast, fabricante de embalajes para grandes empresas",
      problem:
        "El equipo necesitaba un método común para detectar desperdicios y proponer mejoras en planta.",
      solution:
        "Formación práctica en Lean Manufacturing adaptada a su planta y a sus procesos de producción.",
      result:
        "El equipo comparte un mismo lenguaje y unas herramientas para aplicar la mejora continua en su día a día.",
    },
    {
      pillar: "Web y digitalización",
      title: "Web de captación de clientes con blog y SEO local",
      client: "Armartech",
      problem:
        "Hacía falta una web que explicara los servicios con claridad y convirtiera las visitas en solicitudes de diagnóstico.",
      solution:
        "Web en Next.js con una página por servicio, blog de casos, formulario conectado al correo, dominio y correo propios, analítica de visitas, Google Search Console y Perfil de Empresa de Google.",
      result:
        "Una web rápida y publicada, con sus páginas indexadas en Google y lista para medir visitas y contactos.",
      tag: "propio",
    },
    {
      pillar: "Web y digitalización",
      title: "Rediseño web y posicionamiento local",
      client: "M-G White Services, empresa de limpieza en Austin (Texas)",
      problem:
        "Una web anticuada que no ayudaba a conseguir clientes en su zona.",
      solution:
        "Nueva web, optimización SEO y configuración del perfil de Google Business.",
      result:
        "Una presencia digital clara, preparada para captar clientes por búsqueda local.",
    },
    {
      pillar: "Web y digitalización",
      title: "Panel de indicadores para pymes de servicios",
      client: "ServiceFlow",
      problem:
        "Las pymes de servicios gestionan trabajos, clientes e ingresos en hojas de cálculo dispersas.",
      solution:
        "Panel web con métricas de actividad, clientes y facturación en un solo lugar.",
      result:
        "Una visión del negocio de un vistazo, sin rehacer informes a mano.",
      tag: "propio",
    },
  ],
};

export const method = {
  heading: "Cómo trabajamos",
  intro:
    "Cuatro pasos, siempre en el mismo orden, para que sepas en todo momento qué estamos haciendo y qué viene después.",
  steps: [
    {
      title: "Diagnóstico",
      body: "Visitamos la empresa, hablamos con el equipo y medimos dónde se pierde tiempo, calidad o dinero.",
    },
    {
      title: "Propuesta",
      body: "Alcance, plazos y presupuesto cerrados por escrito antes de empezar.",
    },
    {
      title: "Implantación",
      body: "Aplicamos las mejoras y desarrollamos las herramientas en entregas cortas que el equipo prueba.",
    },
    {
      title: "Formación y seguimiento",
      body: "Formamos a quien lo va a usar y dejamos documentación para que el cambio se mantenga.",
    },
  ],
};

export type Person = {
  name: string;
  role: string;
  photo?: string;
  initials: string;
  bio: string;
};

export const team = {
  heading: "Sobre mí",
  intro: "Hablas directamente conmigo: hago el trabajo, te lo explico y respondo si algo falla.",
  people: [
    {
      name: "Marianela Marín Mazaira",
      role: "Automatizaciones con IA, desarrollo web y finanzas",
      // Guarda tu foto con este nombre en /public; mientras no exista se muestran las iniciales.
      photo: "/marianela-marin-mazaira.jpg",
      initials: "MM",
      bio: "Licenciada en Económicas, con diez años en contabilidad y costes de producción en la industria. Técnica superior en Desarrollo de Aplicaciones Web, con prácticas de desarrollo en Volkswagen Group Services. He impartido clases de marketing y de mejora de negocio para empresas. Trabajo con Next.js, React, TypeScript, Node.js y Spring Boot para clientes en España y Estados Unidos.",
    },
  ] satisfies Person[],
  // Colaboradores sin nombre: se muestran debajo de la biografía.
  colaboracion:
    "En los proyectos de Lean Manufacturing y formación técnica trabajo con un ingeniero de procesos colaborador, con más de 30 años de experiencia en automoción. Yo coordino el proyecto y soy tu persona de contacto en todo momento.",
};

// Servicio Silver Home: tecnología para personas mayores que viven en casa.
export const silverHome = {
  name: "Silver Home",
  badge: "Servicio Armartech",
  title: "Silver Home",
  lead: "Tecnología para vivir en casa con más autonomía, seguridad y tranquilidad.",
  intro:
    "Relojes SOS, tablets adaptadas y sensores de movimiento, humo, fugas de agua y apertura de puertas para personas mayores que viven en su domicilio. Nosotros lo instalamos, lo configuramos, lo explicamos y damos soporte.",
  // Foto opcional: guárdala como public/images/silver-home.jpg (si falta, se ve la trama azul).
  image: "images/silver-home.jpg",
  devices: [
    {
      id: "reloj",
      name: "Relojes SOS",
      body: "Un botón para pedir ayuda desde cualquier lugar de la casa, y aviso a la familia si hace falta.",
    },
    {
      id: "tablet",
      name: "Tablets adaptadas",
      body: "Pantalla sencilla para hacer videollamadas, ver fotos y hablar con la familia sin complicaciones.",
    },
    {
      id: "sensor",
      name: "Sensores en el hogar",
      body: "Detectores de movimiento, humo, fugas de agua y apertura de puertas, colocados donde realmente hacen falta.",
    },
    {
      id: "aviso",
      name: "Avisos a familiares",
      body: "Si algo no va bien, las personas de contacto reciben un aviso en el móvil al momento.",
    },
  ],
  stepsHeading: "Nos ocupamos de todo, no solo de la tecnología",
  steps: [
    {
      title: "Analizamos el hogar",
      body: "Revisamos accesos, baño, cocina y dormitorio, y escuchamos la rutina y el nivel de autonomía de la persona.",
    },
    {
      title: "Instalamos y configuramos",
      body: "Elegimos los dispositivos justos, sin obras, y dejamos los avisos y los contactos preparados desde el primer día.",
    },
    {
      title: "Formamos y acompañamos",
      body: "Lo explicamos a la persona y a su familia con calma, y damos soporte y revisiones periódicas.",
    },
  ],
  families: {
    heading: "Para familias",
    points: [
      "Tranquilidad sin renunciar a que tu familiar siga en su casa.",
      "Dispositivos sencillos, pensados para personas mayores.",
      "Una sola persona de contacto que se encarga de todo.",
    ],
  },
  partners: {
    heading: "Para centros, farmacias y servicios de atención",
    audience:
      "Centros de día, residencias, ayuda a domicilio, farmacias y ortopedias.",
    points: [
      "Complementa el servicio y la teleasistencia que ya tenga la persona.",
      "Tecnología sencilla, configurada para que sea útil desde el primer día.",
      "Una única persona de contacto durante todo el proceso.",
      "Posibilidad de prueba piloto con algunas de las personas a las que atendéis.",
    ],
  },
  cta: {
    title: "¿Hablamos 30 minutos?",
    body: "Os presentamos el proyecto y vemos juntos cómo colaborar. Primera reunión sin compromiso.",
    href: "/contacto",
    label: "Solicitar una reunión",
  },
};

// Portada
export const home = {
  serviciosTitulo: "Tres formas de ahorrar tiempo y dinero",
  automatizacionesTitulo: "Lo que más tiempo te quita, automatizado",
  automatizaciones: [
    {
      icono: "documento",
      problema: "Tardas días en enviar un presupuesto y el cliente contrata a otro.",
      solucion: "Dictas la visita en el móvil y la IA prepara el presupuesto en PDF con tus precios.",
      ahorro: "3-5 h a la semana",
    },
    {
      icono: "chat",
      problema: "Mientras trabajas no puedes contestar llamadas ni WhatsApp.",
      solucion: "Un asistente responde las dudas habituales, recoge los datos y apunta la cita en tu agenda.",
      ahorro: "3-4 h a la semana",
    },
    {
      icono: "euro",
      problema: "Facturas tarde y pasas horas reclamando pagos.",
      solucion: "Las facturas salen solas desde tu programa y los recordatorios de pago también.",
      ahorro: "2-4 h al mes",
    },
  ],
  pasosTitulo: "Cómo trabajamos",
  pasos: [
    { titulo: "Diagnóstico gratuito", texto: "Vemos qué tareas y procesos te quitan más tiempo y cuántas horas puedes ahorrar." },
    { titulo: "Propuesta cerrada", texto: "Una solución concreta, con plazo y precio por escrito." },
    { titulo: "Puesta en marcha", texto: "La montamos en una o dos semanas y la probamos con tus datos reales." },
    { titulo: "Seguimiento", texto: "Vigilamos que todo funcione, ajustamos y ampliamos cuando lo necesites." },
  ],
  garantias: [
    "Funciona en la nube las 24 horas, sin instalar nada",
    "Tus cuentas y tus datos siguen siendo tuyos",
    "Cumplimos el RGPD",
    "Una sola persona de contacto",
  ],
  diagnostico: {
    titulo: "Pide tu diagnóstico gratuito",
    texto: "Cuéntanos a qué se dedica tu empresa y qué tarea te gustaría no volver a hacer a mano. Te respondemos en 2 días laborables.",
    incluye: [
      "Qué tareas y procesos se pueden simplificar o automatizar",
      "Cuántas horas al mes podrías ahorrar",
      "Una propuesta con plazo y precio, sin compromiso",
    ],
  },
  otrosTitulo: "También hacemos",
};

export const contact = {
  heading: "Contacto",
  body: "Cuéntanos qué quieres mejorar y te preparamos un diagnóstico gratuito, sin compromiso. Trabajamos de forma presencial en toda Catalunya, híbrida u online.",
  topics: [
    "Diagnóstico gratuito",
    "Automatizaciones con IA",
    "Consultoría Lean / procesos",
    "Web o aplicación",
    "Formación técnica",
    "Silver Home (personas mayores)",
    "Otro",
  ],
};

// Datos legales: completa antes de publicar (LSSI-CE y RGPD).
export const legal = {
  holder: "[Nombre y apellidos o razón social]",
  nif: "[NIF]",
  address: "[Domicilio fiscal]",
  email: site.email,
};

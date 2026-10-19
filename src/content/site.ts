// Todo el contenido editable del sitio vive aquí.
// Cambia el nombre de marca, textos o datos de contacto sin tocar los componentes.

export const site = {
  name: "Armartech",
  tagline: "Ingeniería, digital y formación",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Consultoría de procesos, servicios web y formación técnica para pymes e industria en Catalunya. Soluciones para transformar, digitalizar y formar.",
  location: "Catalunya",
  locale: "es_ES",
  // Correo único de empresa. Provisional: cámbialo cuando tengas el dominio y el buzón creados.
  email: "info@armartechweb.com",
};

// Imágenes de fondo opcionales. Si el archivo existe en /public se usa;
// si no, se muestra un fondo azul con trama técnica. Formato recomendado: JPG horizontal de 1920 px.
export const images = {
  hero: "images/portada.jpg",
  pageHeader: "images/cabecera.jpg",
};

export const nav = [
  { href: "/servicios", label: "Servicios" },
  { href: "/como-trabajamos", label: "Cómo trabajamos" },
  { href: "/equipo", label: "Equipo" },
  { href: "/proyectos", label: "Proyectos" },
  { href: "/contacto", label: "Contacto" },
];

export const hero = {
  titleLead: "Soluciones para",
  titleMain: "transformar, digitalizar y formar",
  lead: "Consultoría, servicios web y formación técnica para pymes e industria. Un mismo equipo para mejorar cómo trabajáis, cómo os encuentran y lo que sabe vuestro equipo.",
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
};

export const services: {
  heading: string;
  intro: string;
  pillars: Pillar[];
  closing: string;
} = {
  heading: "Tres pilares, una propuesta integral",
  intro:
    "Cada proyecto combina lo que necesita: mejorar el proceso, darle soporte digital y formar a las personas que lo hacen funcionar.",
  pillars: [
    {
      id: "consultoria",
      name: "Consultoría",
      summary: "Mejora de la actividad y los procesos",
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
    },
    {
      id: "web",
      name: "Web y digitalización",
      summary: "Webs y aplicaciones que trabajan para la empresa",
      title: "Presencia web y digitalización",
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
    },
    {
      id: "formacion",
      name: "Formación",
      summary: "Áreas industriales, energéticas y tecnológicas",
      title: "Formación para avanzar",
      body: "Conocimiento técnico aplicado para convertir conceptos complejos en capacidades reales. In-company, para centros de formación y en FP Dual.",
      items: [
        "Lean",
        "Energía",
        "Electricidad",
        "Vehículo eléctrico",
        "Robótica y automatización",
      ],
      image: "images/formacion.jpg",
      imagePosition: "object-[50%_20%]",
    },
  ],
  closing:
    "Tres pilares complementarios para mejorar procesos, impulsar la presencia digital y desarrollar conocimiento técnico.",
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
        "Formación técnica adaptada a vuestro equipo y a vuestras instalaciones.",
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
    "Algunos proyectos que muestran cómo combinamos procesos, tecnología y formación. Pulsa en cada uno para ver el detalle.",
  list: [
    {
      pillar: "Formación",
      title: "Colaboración en acciones formativas",
      client: "GRUPO VAGINDAUTO",
      problem: "Acciones formativas técnicas en el ámbito del automóvil.",
      solution:
        "Colaboramos como formadores, aportando experiencia profesional y conocimientos aplicados al sector del automóvil.",
      result:
        "Formaciones que combinan los fundamentos técnicos con la experiencia práctica, con contenidos directamente aplicables al entorno profesional.",
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
      pillar: "Formación",
      title: "Formación técnica en centros y empresas",
      client:
        "IQS, UPC, máster ELTICA (UPC), Escuela de Aprendices de SEAT y EOI",
      problem:
        "Equipos que necesitan dominar tecnologías nuevas: vehículo eléctrico, automatización y Lean.",
      solution:
        "Programas de alta tensión y riesgo eléctrico, robótica ABB, Lean Manufacturing y formación de formadores.",
      result:
        "Profesionales capacitados en materias técnicas, con actividad registrada en FUNDAE desde 2017.",
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
  heading: "Equipo",
  intro: "Un equipo pequeño: hablas directamente con quien hace el trabajo.",
  people: [
    {
      name: "Manuel García Gómez",
      role: "Ingeniería de procesos y formación",
      photo: "/manuel-garcia-gomez.jpg",
      initials: "MG",
      bio: "Ingeniero Técnico Industrial en Electrónica y Química, con trayectoria en automoción desde 1988: producción, ingeniería de desarrollo con AUDI AG e ingeniería de procesos. Formador en IQS, UPC, máster ELTICA (UPC), Escuela de Aprendices de SEAT y EOI. Posgrado en Vehículo Conectado por la UPC.",
    },
    {
      name: "Marianela Marín Mazaira",
      role: "Desarrollo de software y finanzas",
      // Guarda tu foto con este nombre en /public; mientras no exista se muestran las iniciales.
      photo: "/marianela-marin-mazaira.jpg",
      initials: "MM",
      bio: "Licenciada en Económicas, con diez años en contabilidad y costes de producción en la industria. Desarrolladora fullstack (CFGS DAW), con prácticas de desarrollo en Volkswagen Group Services. Trabaja con Next.js, React, TypeScript, Node.js y Spring Boot para clientes en España y Estados Unidos.",
    },
  ] satisfies Person[],
};

export const homeCta = {
  title: "¿Hablamos de tu proyecto?",
  body: "Una primera reunión sin compromiso para entender qué necesitas.",
  cta: { href: "/contacto", label: "Solicitar una reunión" },
};

export const contact = {
  heading: "Contacto",
  body: "Cuéntanos qué quieres mejorar y te proponemos una primera reunión sin compromiso. Trabajamos de forma presencial en toda Catalunya, híbrida u online.",
  topics: [
    "Consultoría de procesos",
    "Web o digitalización",
    "Formación técnica",
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

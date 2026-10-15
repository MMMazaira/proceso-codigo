// Todo el contenido editable del sitio vive aquí.
// Cambia el nombre de marca, textos o datos de contacto sin tocar los componentes.

export const site = {
  name: "Proceso & Código",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000",
  description:
    "Consultoría industrial, formación técnica y desarrollo de software para pymes en Barcelona. Mejoramos procesos y construimos las herramientas digitales que los sostienen.",
  location: "Barcelona",
  locale: "es_ES",
  // Correo único de empresa. Cámbialo cuando tengas el dominio y el buzón creados.
  email: "contacto@procesoycodigo.es",
};

export const nav = [
  { href: "/#servicios", label: "Servicios" },
  { href: "/#metodo", label: "Cómo trabajamos" },
  { href: "/#equipo", label: "Equipo" },
  { href: "/#contacto", label: "Contacto" },
];

export const hero = {
  title: "Consultoría industrial y desarrollo de software para pymes",
  lead: "Analizamos cómo trabaja tu empresa, mejoramos los procesos y construimos las herramientas digitales que los hacen funcionar. Ingeniería, formación y tecnología con un mismo equipo.",
  primaryCta: { href: "/#contacto", label: "Solicitar una reunión" },
  secondaryCta: { href: "/#servicios", label: "Ver servicios" },
};

export type Service = { title: string; body: string };

export const services: { heading: string; intro: string; list: Service[] } = {
  heading: "Servicios",
  intro:
    "Un único equipo para la parte técnica, la organizativa y la digital. Combinamos los servicios según lo que necesite cada proyecto.",
  list: [
    {
      title: "Optimización de procesos",
      body: "Análisis de flujos de producción, eficiencia y calidad. Lean Manufacturing, 5S y resolución de incidencias.",
    },
    {
      title: "Digitalización e Industria 4.0",
      body: "Aplicaciones para sustituir el papel y las hojas de cálculo: partes de producción, incidencias, indicadores y costes.",
    },
    {
      title: "Webs y aplicaciones a medida",
      body: "Webs corporativas, áreas de cliente y herramientas internas. Diseño, desarrollo, puesta en marcha y mantenimiento.",
    },
    {
      title: "Formación técnica",
      body: "Formación in-company y para centros: Lean, robótica, electricidad del automóvil, vehículo eléctrico y alta tensión.",
    },
    {
      title: "Electrificación y movilidad",
      body: "Asesoramiento en tecnologías del vehículo eléctrico, híbrido y conectado, y en la transición energética.",
    },
    {
      title: "Documentación y acompañamiento",
      body: "Manuales, materiales didácticos y apoyo técnico continuado para transferir el conocimiento al equipo.",
    },
  ],
};

export const method = {
  heading: "Cómo trabajamos",
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
      bio: "Ingeniero Técnico Industrial en Electrónica y Química, con trayectoria en automoción desde 1988: producción, ingeniería de desarrollo con AUDI AG e ingeniería de procesos. Formador en EOI, IQS, ELTICA UPC y la Escuela de Aprendices de SEAT. Posgrado en Vehículo Conectado por la UPC.",
    },
    {
      name: "Marianela Marín Mazaira",
      role: "Desarrollo de software y finanzas",
      photo: "/marianela-marin-mazaira.jpg",
      initials: "MM",
      bio: "Desarrolladora fullstack (CFGS DAW) con diez años previos en contabilidad y costes de producción en la industria. Prácticas de desarrollo en Volkswagen Group Services. Trabaja con Next.js, React, TypeScript, Node.js y Spring Boot para clientes en España y Estados Unidos.",
    },
  ] satisfies Person[],
};

export const contact = {
  heading: "Contacto",
  body: "Cuéntanos qué quieres mejorar y te proponemos una primera reunión de 30 minutos, sin compromiso. Trabajamos de forma presencial en el área de Barcelona, híbrida u online.",
  topics: [
    "Mejora de procesos",
    "Digitalización",
    "Web o aplicación a medida",
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

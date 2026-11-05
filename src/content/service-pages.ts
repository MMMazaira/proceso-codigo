// Una página por servicio, pensada para salir en Google con búsquedas concretas
// (por ejemplo «consultoría Lean Manufacturing Barcelona»).
// Cada entrada se publica en armartechweb.com/<slug>. Para añadir otra, copia un bloque y cambia el slug.

export type ServicePage = {
  slug: string;
  // Pilar al que pertenece (debe coincidir con el id en services.pillars de site.ts)
  pillar: "consultoria" | "web" | "formacion" | "silver";
  // Texto corto para los enlaces desde la página Servicios
  linkLabel: string;
  title: string;
  lead: string;
  metaTitle: string;
  metaDescription: string;
  problem: string;
  whatHeading: string;
  what: string[];
  how: string[];
  faqs: { q: string; a: string }[];
  cta: string;
  image: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "consultoria-lean-manufacturing",
    pillar: "consultoria",
    linkLabel: "Consultoría Lean Manufacturing",
    title: "Consultoría Lean Manufacturing en Barcelona",
    lead: "Mejora tu producción, reduce costes y elimina desperdicios con métodos probados.",
    metaTitle: "Consultoría Lean Manufacturing en Barcelona",
    metaDescription:
      "Consultoría Lean Manufacturing para empresas en Barcelona y Catalunya: mapas de flujo de valor, 5S, reducción de tiempos de cambio y formación del equipo.",
    problem:
      "Tiempos de espera, exceso de stock, fallos de calidad y procesos lentos hacen que una empresa pierda dinero sin darse cuenta. Detectamos dónde se pierde valor y lo corregimos.",
    whatHeading: "¿Qué hacemos?",
    what: [
      "Análisis de procesos y mapas de flujo de valor",
      "Organización del puesto de trabajo con 5S",
      "Reducción de tiempos de cambio",
      "Mejora continua",
      "Formación para tu equipo",
    ],
    how: [
      "Visitamos tu planta",
      "Medimos la situación actual",
      "Proponemos mejoras concretas",
      "Las aplicamos con tu equipo",
      "Medimos los resultados",
    ],
    faqs: [
      { q: "¿Sirve para empresas pequeñas?", a: "Sí, cualquier empresa con procesos puede mejorar." },
      { q: "¿Cuándo se ven resultados?", a: "Las primeras mejoras suelen notarse en pocas semanas." },
    ],
    cta: "Solicita una visita de diagnóstico",
    image: "images/consultoria.jpg",
  },
  {
    slug: "automatizaciones-empresas-barcelona",
    pillar: "web",
    linkLabel: "Automatizaciones",
    title: "Automatizaciones para empresas en Barcelona",
    lead: "Ahorra horas de trabajo repetitivo y reduce errores con procesos automáticos hechos a tu medida.",
    metaTitle: "Automatizaciones para empresas en Barcelona",
    metaDescription:
      "Automatizamos facturas, presupuestos, respuestas a clientes, informes y avisos, y conectamos Excel, correo y CRM. Para empresas de Barcelona y Catalunya.",
    problem:
      "Muchas empresas pierden tiempo copiando datos, enviando correos a mano o preparando informes. Nosotros automatizamos esas tareas para que tu equipo se dedique a lo importante.",
    whatHeading: "¿Qué automatizamos?",
    what: [
      "Facturas y presupuestos",
      "Respuestas a clientes",
      "Informes",
      "Conexión entre herramientas como Excel, correo y CRM",
      "Avisos automáticos",
    ],
    how: ["Analizamos tus procesos", "Diseñamos la solución", "La ponemos en marcha", "Te damos soporte"],
    faqs: [
      { q: "¿Cuánto tarda?", a: "Normalmente entre una y cuatro semanas." },
      { q: "¿Necesito conocimientos técnicos?", a: "No, nosotros nos encargamos de todo." },
    ],
    cta: "Pide tu diagnóstico gratuito",
    image: "images/web.jpg",
  },
  {
    slug: "consultoria-web-barcelona",
    pillar: "web",
    linkLabel: "Consultoría web",
    title: "Consultoría web para empresas en Barcelona",
    lead: "Te ayudamos a que tu web atraiga clientes, no solo visitas.",
    metaTitle: "Consultoría web para empresas en Barcelona",
    metaDescription:
      "Auditoría web, posicionamiento en Google, velocidad, versión móvil y estrategia de contenidos, con un informe de mejoras priorizadas. Barcelona y Catalunya.",
    problem:
      "Muchas webs son bonitas, pero no aparecen en Google, cargan lento o no convierten visitas en contactos. Analizamos la tuya y te decimos exactamente qué mejorar.",
    whatHeading: "¿Qué hacemos?",
    what: [
      "Auditoría de tu web",
      "Revisión del posicionamiento en Google",
      "Análisis de la velocidad y la versión móvil",
      "Estrategia de contenidos",
      "Propuesta de mejoras priorizadas",
    ],
    how: [
      "Revisamos tu web y tu competencia",
      "Te entregamos un informe claro con acciones concretas",
      "Si quieres, las ponemos en marcha nosotros",
    ],
    faqs: [
      { q: "¿Necesito una web nueva?", a: "No siempre, muchas veces basta con mejorar la actual." },
      { q: "¿Cuánto tarda la auditoría?", a: "Unos pocos días." },
    ],
    cta: "Pide tu auditoría web gratuita",
    image: "images/web.jpg",
  },
  {
    slug: "mantenimiento-web-barcelona",
    pillar: "web",
    linkLabel: "Actualización y mantenimiento web",
    title: "Actualización y mantenimiento de páginas web en Barcelona",
    lead: "Tu web siempre al día, segura, rápida y con una imagen moderna.",
    metaTitle: "Actualización y mantenimiento de páginas web en Barcelona",
    metaDescription:
      "Rediseño, adaptación a móviles, velocidad, actualización de contenidos, copias de seguridad y mantenimiento mensual de tu web. Barcelona y Catalunya.",
    problem:
      "Una web anticuada da mala imagen, puede tener fallos de seguridad y pierde posiciones en Google. Nos encargamos de renovarla y mantenerla para que tú no tengas que preocuparte.",
    whatHeading: "¿Qué hacemos?",
    what: [
      "Rediseño de la imagen",
      "Adaptación a móviles",
      "Mejora de la velocidad",
      "Actualización de contenidos",
      "Copias de seguridad",
      "Mantenimiento mensual",
    ],
    how: [
      "Revisamos tu web actual",
      "Te proponemos los cambios",
      "Los aplicamos sin que tu web deje de funcionar",
      "La mantenemos con un plan mensual",
    ],
    faqs: [
      { q: "¿Perderé mi contenido actual?", a: "No, lo conservamos y lo mejoramos." },
      { q: "¿Ofrecéis mantenimiento continuo?", a: "Sí, con planes mensuales a tu medida." },
    ],
    cta: "Solicita presupuesto sin compromiso",
    image: "images/web.jpg",
  },
  // Borradores: revisad estos tres textos (no venían en el documento).
  {
    slug: "diseno-web-barcelona",
    pillar: "web",
    linkLabel: "Diseño de páginas web",
    title: "Diseño de páginas web para empresas en Barcelona",
    lead: "Una web profesional, rápida y fácil de encontrar, pensada para conseguir contactos.",
    metaTitle: "Diseño de páginas web para empresas en Barcelona",
    metaDescription:
      "Diseñamos y desarrollamos webs corporativas adaptadas a móvil, con SEO básico, formulario de contacto y textos legales. Barcelona y Catalunya.",
    problem:
      "Sin una web clara, tus clientes no entienden qué haces ni cómo contactarte, y acaban yendo a la competencia. Creamos una web que explica bien tu negocio y convierte visitas en contactos.",
    whatHeading: "¿Qué incluye?",
    what: [
      "Diseño a medida adaptado a móvil",
      "Textos orientados a tus clientes",
      "SEO básico y accesibilidad",
      "Formulario de contacto y correo con tu dominio",
      "Aviso legal y política de privacidad",
    ],
    how: [
      "Hablamos de tu negocio y tus clientes",
      "Te proponemos estructura y diseño",
      "Desarrollamos y publicamos la web",
      "Te enseñamos a usarla y la mantenemos si quieres",
    ],
    faqs: [
      { q: "¿Cuánto tarda una web?", a: "Una web corporativa suele estar lista en dos a cuatro semanas." },
      { q: "¿Podré cambiar los textos yo mismo?", a: "Sí, te dejamos la web preparada y te explicamos cómo hacerlo." },
    ],
    cta: "Solicita presupuesto sin compromiso",
    image: "images/web.jpg",
  },
  {
    slug: "digitalizacion-industrial",
    pillar: "web",
    linkLabel: "Digitalización industrial",
    title: "Digitalización de procesos industriales",
    lead: "Deja atrás el papel y las hojas de cálculo con aplicaciones hechas para tu planta.",
    metaTitle: "Digitalización de procesos industriales en Catalunya",
    metaDescription:
      "Aplicaciones a medida para partes de producción, incidencias, indicadores, costes y gestión documental. Digitalización industrial para pymes en Catalunya.",
    problem:
      "Partes en papel, datos repetidos en varias hojas de cálculo e indicadores que llegan tarde hacen difícil saber qué pasa en la planta. Digitalizamos esos procesos para que la información llegue a tiempo y sin errores.",
    whatHeading: "¿Qué digitalizamos?",
    what: [
      "Partes de producción e incidencias",
      "Indicadores y costes para dirección",
      "Gestión documental con permisos por rol",
      "Pedidos y seguimiento de trabajos",
      "Formación a los usuarios",
    ],
    how: [
      "Analizamos el proceso en planta",
      "Diseñamos la aplicación con quien la va a usar",
      "La implantamos por fases",
      "Formamos al equipo y damos soporte",
    ],
    faqs: [
      { q: "¿Tengo que cambiar mis programas actuales?", a: "No necesariamente: podemos conectarnos a lo que ya usáis." },
      { q: "¿Funciona en tablets y móviles?", a: "Sí, las aplicaciones se usan desde cualquier dispositivo." },
    ],
    cta: "Pide tu diagnóstico gratuito",
    image: "images/web.jpg",
  },
  {
    slug: "formacion-tecnica-empresas",
    pillar: "formacion",
    linkLabel: "Formación técnica para empresas",
    title: "Formación técnica para empresas",
    lead: "Formación práctica en Lean, energía, electricidad, vehículo eléctrico y robótica.",
    metaTitle: "Formación técnica para empresas en Barcelona y Catalunya",
    metaDescription:
      "Cursos in-company de Lean, riesgo eléctrico, vehículo eléctrico, energía y robótica, adaptados a tu equipo. Pueden ser bonificables por FUNDAE.",
    problem:
      "Las tecnologías cambian más rápido que la formación de los equipos. Formamos a tu personal con contenidos técnicos aplicados a su trabajo real, para que lo pueda usar desde el primer día.",
    whatHeading: "¿Qué formamos?",
    what: [
      "Lean Manufacturing y 5S",
      "Electricidad y riesgo eléctrico",
      "Vehículo eléctrico y alta tensión",
      "Energía",
      "Robótica y automatización",
    ],
    how: [
      "Analizamos las necesidades del equipo",
      "Adaptamos el programa a vuestras instalaciones",
      "Impartimos la formación, en vuestra empresa o en un centro",
      "Evaluamos y entregamos certificado de asistencia",
    ],
    faqs: [
      { q: "¿Es bonificable?", a: "Puede serlo con el crédito de formación de la empresa (FUNDAE). Te ayudamos a comprobarlo." },
      { q: "¿Formáis también a centros educativos?", a: "Sí, colaboramos con centros de formación y en FP Dual." },
    ],
    cta: "Solicita información",
    image: "images/formacion.jpg",
  },
];

export function servicePagesFor(pillar: ServicePage["pillar"]) {
  return servicePages.filter((p) => p.pillar === pillar);
}

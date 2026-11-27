// Una página por servicio, pensada para salir en Google con búsquedas concretas
// (por ejemplo «consultoría Lean Manufacturing Barcelona»).
// Cada entrada se publica en armartechweb.com/<slug>. Para añadir otra, copia un bloque y cambia el slug.

export type ServicePage = {
  slug: string;
  // Pilar al que pertenece (debe coincidir con el id en services.pillars de site.ts)
  pillar: "automatizaciones" | "consultoria" | "web" | "formacion";
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
  // Opcionales: una lista de garantías y una línea de precio orientativo
  extra?: { heading: string; points: string[] };
  price?: string;
};

export const servicePages: ServicePage[] = [
  {
    slug: "consultoria-lean-manufacturing",
    pillar: "consultoria",
    linkLabel: "Consultoría Lean Manufacturing",
    title: "Produce más con el mismo equipo, ordenando antes de invertir",
    lead: "Analizamos tu planta, reducimos paradas, tiempos de cambio y desperdicios, y solo después digitalizamos lo que de verdad ayuda. Con más de 30 años de experiencia en automoción detrás.",
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
      {
        q: "¿Quién hace el trabajo en planta?",
        a: "Coordino el proyecto y soy tu contacto. El análisis en planta lo hago junto a un ingeniero de procesos colaborador, con más de 30 años de experiencia en automoción.",
      },
    ],
    cta: "Solicita una visita de diagnóstico",
    image: "images/consultoria.jpg",
  },
  {
    slug: "automatizaciones-empresas-barcelona",
    pillar: "automatizaciones",
    linkLabel: "Automatizaciones con IA",
    title: "Tú das los datos una vez; el resto se hace solo",
    lead: "Dictas un presupuesto o marcas un trabajo como terminado, y se preparan el PDF, la factura, los recordatorios de cobro y las respuestas por WhatsApp. Con inteligencia artificial y con las herramientas que ya usas.",
    metaTitle: "Automatizaciones con IA para pymes en Barcelona",
    metaDescription:
      "Automatizamos presupuestos, atención por WhatsApp, citas, facturas y cobros con IA, conectando las herramientas que ya usas. Para pymes y autónomos de Barcelona y Catalunya.",
    problem:
      "En una pequeña empresa se pierden muchas horas cada semana en lo mismo: preparar presupuestos, contestar las mismas preguntas, apuntar citas, copiar datos de un programa a otro y reclamar facturas. Estudiamos cómo trabaja tu negocio y automatizamos esas tareas con las herramientas que ya usas: tu correo, tu calendario, WhatsApp, tus hojas de cálculo y tu programa de facturación.",
    whatHeading: "¿Qué automatizamos?",
    what: [
      "Presupuestos en minutos: dictas la visita en el móvil y recibes el presupuesto en PDF con tus precios",
      "Atención y citas: un asistente responde por WhatsApp o desde la web y apunta la cita en tu agenda",
      "Facturas y cobros: la factura se prepara al terminar el trabajo y los recordatorios de pago salen solos",
      "Datos sin copiar a mano: pedidos, formularios y correos que pasan solos a tu hoja o tu programa",
      "Informes y avisos: un resumen semanal en tu correo y avisos cuando pasa algo importante",
      "A medida: si una tarea se repite en tu negocio, la estudiamos",
    ],
    how: [
      "Diagnóstico gratuito de tus tareas",
      "Propuesta cerrada con plazo y precio",
      "Puesta en marcha en 1-2 semanas",
      "Mantenimiento mensual",
    ],
    extra: {
      heading: "Tranquilidad y seguridad",
      points: [
        "Funciona en la nube las 24 horas, aunque tengas el ordenador apagado. No hay que instalar nada.",
        "Tus cuentas y tus datos son tuyos: si un día lo dejas, todo sigue siendo tuyo.",
        "Cumplimos el RGPD y firmamos contigo un contrato de tratamiento de datos.",
        "Una sola persona de contacto que conoce tu negocio.",
      ],
    },
    price: "Puesta en marcha desde 290 € y mantenimiento desde 29 € al mes (IVA no incluido). Precio especial para los 5 primeros negocios. En el diagnóstico te doy el precio exacto.",
    faqs: [
      { q: "¿Necesito saber de informática?", a: "No. Te dejamos todo funcionando y te enseñamos a usarlo en una sesión corta." },
      { q: "¿Tengo que cambiar los programas que uso?", a: "Normalmente no. Conectamos lo que ya tienes: Gmail, Outlook, Google Calendar, WhatsApp Business, hojas de cálculo y los programas de facturación más habituales." },
      { q: "¿Qué pasa si algo deja de funcionar?", a: "Con el mantenimiento mensual lo vigilamos nosotros y lo arreglamos sin coste adicional." },
      { q: "¿La IA se puede equivocar?", a: "Por eso las tareas importantes, como un presupuesto, siempre pasan por tu revisión antes de enviarse." },
      { q: "¿Cuánto tiempo se tarda?", a: "Entre una y dos semanas por automatización." },
    ],
    cta: "Pide tu diagnóstico gratuito",
    image: "images/cabecera.jpg",
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
    title: "Tu web siempre al día, sin que tengas que pensar en ella",
    lead: "Actualizo textos, fotos y precios, reviso que funcione y que sea segura, y te digo cada mes cuánta gente la visita y desde dónde. Una cuota mensual fija, sin sorpresas.",
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
    title: "Una web que te trae clientes, no solo una tarjeta de visita",
    lead: "Webs rápidas para pequeños negocios y pymes, preparadas para salir en Google, con WhatsApp y formulario de contacto, y fáciles de actualizar. Te la entrego funcionando y, si quieres, me encargo de mantenerla al día.",
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
    slug: "aplicaciones-web-a-medida",
    pillar: "web",
    linkLabel: "Aplicaciones web a medida",
    title: "Un programa a la medida de tu negocio, sin pagar por lo que no usas",
    lead: "Desarrollo aplicaciones web para pequeños negocios y pymes: clientes, pedidos, partes de trabajo o stock, todo en un solo sitio y desde el móvil o el ordenador. Empiezas con lo que necesitas hoy y lo ampliamos cuando crezcas.",
    metaTitle: "Aplicaciones web a medida para pequeños negocios y pymes",
    metaDescription:
      "Desarrollo de aplicaciones web a medida para pymes y autónomos: clientes, pedidos, partes de trabajo y stock, desde el móvil o el ordenador. Anoia, Baix Llobregat y Barcelona.",
    problem:
      "Muchos negocios trabajan con hojas de cálculo que se duplican, libretas y programas que cuestan cada mes y solo usan a medias. La información se pierde entre el móvil, el correo y el ordenador. Hacemos una aplicación sencilla con lo que tu negocio necesita de verdad, y nada más.",
    whatHeading: "¿Qué puede hacer tu aplicación?",
    what: [
      "Clientes y contactos: todo el historial de cada cliente en una ficha",
      "Pedidos y presupuestos: de la petición a la entrega, sin perder nada",
      "Partes de trabajo desde el móvil, con fotos y firma del cliente",
      "Stock y materiales, con aviso cuando algo se acaba",
      "Resumen del negocio: facturado, cobrado y pendiente",
      "Conectada con tu correo, WhatsApp o tu programa de facturación",
    ],
    how: [
      "Vemos cómo trabajas hoy y qué te sobra o te falta",
      "Te enseño un prototipo antes de desarrollar",
      "Primera versión funcionando en pocas semanas",
      "La ampliamos por fases, cuando lo necesites",
    ],
    faqs: [
      { q: "¿Es mejor que un programa de los que ya existen?", a: "Si un programa estándar te sirve, te lo diré. La aplicación a medida compensa cuando pagas por funciones que no usas o cuando ninguno se adapta a tu forma de trabajar." },
      { q: "¿Funciona en el móvil?", a: "Sí, se usa desde el móvil, la tablet o el ordenador, sin instalar nada." },
      { q: "¿De quién son los datos?", a: "Tuyos. Si algún día dejas de trabajar conmigo, te los llevas." },
    ],
    cta: "Pide tu diagnóstico gratuito",
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
      "Adaptamos el programa a tus instalaciones",
      "Impartimos la formación, en tu empresa o en un centro",
      "Evaluamos y entregamos certificado de asistencia",
    ],
    faqs: [
      { q: "¿Es bonificable?", a: "Puede serlo con el crédito de formación de la empresa (FUNDAE). Te ayudamos a comprobarlo." },
      {
        q: "¿Quién imparte los cursos?",
        a: "Los cursos técnicos los imparten formadores colaboradores con experiencia en la industria. La formación en IA y herramientas digitales la imparto yo.",
      },
    ],
    cta: "Solicita información",
    image: "images/formacion.jpg",
  },
];

export function servicePagesFor(pillar: ServicePage["pillar"]) {
  return servicePages.filter((p) => p.pillar === pillar);
}

// Artículos del blog (armartechweb.com/blog/<slug>).
// Para añadir un artículo nuevo, copia uno de los bloques de abajo y cambia el texto.
// El más reciente va el primero. Las fechas van en formato AAAA-MM-DD.
//
// Importante: son casos ilustrativos, no clientes reales. Cada artículo lo dice
// al principio ("caso"). Cuando haya clientes reales, se pueden sustituir con su permiso.

export type BlogPost = {
  slug: string;
  /** Título visible en la página (h1) */
  title: string;
  /** Título para Google (pestaña del navegador y resultados de búsqueda) */
  metaTitle: string;
  /** Descripción corta para Google y para la tarjeta del listado */
  description: string;
  date: string;
  /** Icono de la tarjeta (ver PillarIcon) */
  icon: string;
  category: string;
  /** Página de servicio relacionada */
  service: { href: string; label: string };
  image: string;
  /** Aviso de caso ilustrativo */
  caso: string;
  historia: string[];
  cambiosIntro?: string;
  cambios: string[];
  cambiosCierre?: string;
  resultado: string[];
  /** Pregunta de la llamada final al diagnóstico gratuito */
  pregunta: string;
};

const automatizaciones = { href: "/automatizaciones-empresas-barcelona", label: "Automatizaciones con IA" };
const lean = { href: "/consultoria-lean-manufacturing", label: "Consultoría Lean Manufacturing" };

export const blog = {
  title: "Blog: casos que resolvemos",
  lead: "Situaciones habituales en talleres, oficios y pequeñas empresas, y cómo se solucionan con Lean y automatizaciones con IA.",
  aviso:
    "Los casos son ilustrativos: están basados en situaciones habituales en pymes de la zona y las cifras son estimaciones.",
};

export const posts: BlogPost[] = [
  {
    slug: "presupuestos-automaticos-taller",
    title: "El taller que tardaba tres días en enviar un presupuesto",
    metaTitle: "Cómo un taller puede enviar presupuestos en 2 minutos con IA",
    description:
      "Si tardas días en enviar presupuestos, pierdes trabajos. Así se automatiza el proceso sin cambiar tu forma de trabajar.",
    date: "2026-11-19",
    icon: "documento",
    category: "Automatizaciones con IA",
    service: automatizaciones,
    image: "images/cabecera.jpg",
    caso: "Caso ilustrativo, basado en situaciones habituales en talleres de la zona.",
    historia: [
      "Jordi tiene un taller en el Anoia con tres mecánicos. Trabajo no le falta. El problema llega por la tarde: cuando cierra, se sienta a preparar los presupuestos del día, a mano, mirando precios de recambios y calculando horas. Muchos días se van al día siguiente. Algunos, a la semana.",
      "El resultado es conocido: el cliente que espera tres días un presupuesto llama a otro taller. Jordi no pierde esos trabajos por precio ni por calidad. Los pierde por tiempo.",
    ],
    cambiosIntro:
      "Primero miramos cómo trabaja: qué datos apunta, de dónde saca los precios y qué tipo de reparaciones repite más. Con eso preparamos una automatización sencilla:",
    cambios: [
      "Jordi dicta en el móvil lo que ha visto en el coche.",
      "La IA lo convierte en partidas: recambios con sus precios, horas de mano de obra e IVA.",
      "Sale un presupuesto en PDF con su logo. Jordi lo revisa y lo envía con un clic.",
      "Si el cliente no contesta en tres días, le llega un recordatorio automático.",
    ],
    resultado: [
      "En un taller así, el presupuesto pasa de días a minutos, y se recuperan entre 3 y 5 horas a la semana. Lo más importante: el cliente recibe la respuesta el mismo día, cuando todavía está decidiendo.",
      "Y Jordi no ha tenido que cambiar de programa ni aprender nada complicado: sigue revisando cada presupuesto antes de enviarlo.",
    ],
    pregunta: "¿Te pasa algo parecido?",
  },
  {
    slug: "atencion-whatsapp-instaladores",
    title: "El instalador que perdía clientes por no coger el teléfono",
    metaTitle: "Atención automática por WhatsApp para instaladores y fontaneros",
    description:
      "Mientras trabajas no puedes atender llamadas. Un asistente por WhatsApp responde, recoge los datos y te agenda la visita.",
    date: "2026-11-19",
    icon: "chat",
    category: "Automatizaciones con IA",
    service: automatizaciones,
    image: "images/cabecera.jpg",
    caso: "Caso ilustrativo, basado en situaciones habituales en instaladores de la zona.",
    historia: [
      "Marc es fontanero y electricista en el Anoia. Pasa el día en obras y urgencias, subido a una escalera o metido en un cuarto de calderas. El móvil suena diez veces al día y no puede cogerlo.",
      "Por la noche devuelve llamadas, pero muchos ya han encontrado a otro. Otros le escriben por WhatsApp y el mensaje se pierde entre los demás. Algunos clientes acaban dejando una mala reseña: «no contestan». Y no es que Marc no quiera; es que no llega.",
    ],
    cambiosIntro: "Montamos un asistente en su WhatsApp Business que trabaja mientras él trabaja:",
    cambios: [
      "Responde al momento las preguntas de siempre: zona que cubre, horario, tipo de trabajos y si atiende urgencias.",
      "Pide al cliente qué le pasa, su dirección y una foto del problema.",
      "Le propone huecos libres y apunta la visita en el calendario de Marc.",
      "El día antes, envía un recordatorio al cliente para que esté en casa.",
    ],
    cambiosCierre:
      "Marc recibe cada aviso ordenado, con la foto, y decide. Las urgencias de verdad le llegan marcadas para llamar enseguida.",
    resultado: [
      "En un negocio así se recuperan 3-4 horas a la semana de llamadas y mensajes, se pierden menos clientes y se reducen las visitas en las que no hay nadie en casa. Y la imagen cambia: el cliente siente que le han atendido al momento.",
    ],
    pregunta: "¿Se te quedan llamadas sin contestar?",
  },
  {
    slug: "lean-partes-produccion-digitales",
    title: "La pequeña fábrica que primero simplificó y después automatizó",
    metaTitle: "Lean Manufacturing y partes de producción digitales para pequeñas fábricas",
    description:
      "Antes de automatizar, ordena el proceso. Así una pequeña fábrica puede dejar el papel y saber cada día cuánto produce de verdad.",
    date: "2026-11-19",
    icon: "consultoria",
    category: "Consultoría Lean",
    service: lean,
    image: "images/consultoria.jpg",
    caso: "Caso ilustrativo, basado en situaciones habituales en pequeñas fábricas y talleres de producción.",
    historia: [
      "Anna dirige una fábrica de piezas metálicas con 12 personas. Cada turno rellena partes en papel: piezas hechas, paradas, rechazos. Al final de la semana alguien los pasa a un Excel, con errores y con días de retraso.",
      "Anna quería «una app para los partes». Pero al mirar el proceso de cerca vimos otra cosa: el material esperaba entre máquinas, los cambios de herramienta eran largos y nadie tenía claro qué parada era la que más costaba. Digitalizar ese desorden solo habría servido para tener el desorden en una pantalla.",
    ],
    cambiosIntro: "Primero Lean, después tecnología:",
    cambios: [
      "Recorrimos la planta y dibujamos el flujo real del material, de la entrada a la expedición.",
      "Ordenamos los puestos con 5S y estandarizamos el cambio de herramienta más frecuente.",
      "Con el proceso ya simplificado, cambiamos los partes de papel por un formulario en una tablet: tres toques por parada.",
      "Los datos llegan solos a un panel sencillo que muestra producción, paradas y rechazos del día.",
    ],
    cambiosCierre: "La formación del equipo fue parte del proyecto: nadie usa una herramienta que no entiende.",
    resultado: [
      "En un taller así es razonable reducir de forma notable el tiempo de cambio de herramienta, eliminar las horas semanales de pasar partes a Excel y, sobre todo, decidir con datos del mismo día en vez de con datos de la semana pasada.",
    ],
    pregunta: "¿Quieres saber dónde se pierde tiempo en tu planta?",
  },
  {
    slug: "automatizar-facturas-recordatorios-cobro",
    title: "El negocio que cobraba tarde y perseguía facturas",
    metaTitle: "Automatizar facturas y recordatorios de cobro en una pyme",
    description:
      "Facturas que salen tarde y clientes que pagan tarde. Con recordatorios automáticos y un control sencillo, cobras antes y sin llamadas incómodas.",
    date: "2026-11-19",
    icon: "euro",
    category: "Automatizaciones con IA",
    service: automatizaciones,
    image: "images/cabecera.jpg",
    caso: "Caso ilustrativo, basado en situaciones habituales en pequeñas empresas de servicios.",
    historia: [
      "Sergi tiene una empresa de mantenimiento con cinco técnicos. Los trabajos se hacen bien, pero las facturas salen cuando hay un rato, a veces semanas después. Y luego toca perseguir los pagos: mirar el banco, cruzarlo con la lista y llamar a los clientes que no han pagado. A nadie le gusta hacer esa llamada, así que se va dejando.",
      "Resultado: dinero que ya es suyo tarda meses en llegar, y la tesorería va siempre justa.",
    ],
    cambios: [
      "Al cerrar un trabajo, el técnico marca «terminado» y se genera el borrador de factura con los datos del parte.",
      "Sergi la revisa y la envía con un clic. Nada sale sin su visto bueno.",
      "Si al vencimiento no hay pago, el cliente recibe un recordatorio amable. Si sigue sin pagar, un segundo aviso.",
      "Cada lunes, Sergi recibe un resumen: qué se ha cobrado, qué está pendiente y quién lleva más retraso.",
    ],
    cambiosCierre:
      "Todo funciona con su programa de facturación actual o con una hoja de cálculo; no hace falta cambiar de software.",
    resultado: [
      "En un negocio así se ahorran 2-3 horas a la semana de administración, las facturas salen el mismo día del trabajo y se acorta el tiempo medio de cobro. Menos llamadas incómodas y más tranquilidad con la tesorería.",
    ],
    pregunta: "¿Te cuesta cobrar a tiempo?",
  },
];

/** Fecha legible en castellano, p. ej. "19 de noviembre de 2026" */
export function fechaLarga(date: string) {
  const [y, m, d] = date.split("-").map(Number);
  const meses = [
    "enero", "febrero", "marzo", "abril", "mayo", "junio",
    "julio", "agosto", "septiembre", "octubre", "noviembre", "diciembre",
  ];
  return `${d} de ${meses[m - 1]} de ${y}`;
}

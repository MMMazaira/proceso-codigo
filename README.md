# Armartech

Web conjunta de consultoría industrial y formación técnica (Manuel García Gómez) y desarrollo web y aplicaciones (Marianela Marín Mazaira).

Next.js 16 (App Router) · React 19 · TypeScript · Tailwind CSS 4.

## Arrancar

```bash
npm install
cp .env.example .env.local   # rellena NEXT_PUBLIC_SITE_URL
npm run dev                  # http://localhost:3000
npm run build && npm start   # comprobar build de producción
npm run lint && npm run typecheck
```

## Dónde se cambia cada cosa

| Qué | Archivo |
| --- | --- |
| Nombre de marca, textos, menú, servicios, proyectos, equipo, contacto | `src/content/site.ts` |
| Páginas (una por opción del menú) | `src/app/<ruta>/page.tsx`: servicios, proyectos, como-trabajamos, equipo, contacto |
| Datos legales (titular, NIF, domicilio) | `legal` en `src/content/site.ts` |
| Colores y tipografía | `src/app/globals.css` (`@theme`) y `src/app/layout.tsx` |
| Logotipo | `public/brand/` (símbolo, nombre y nombre en blanco); favicon e imagen para redes en `src/app/icon.png`, `apple-icon.png` y `opengraph-image.png` |
| Fotos del equipo | `public/manuel-garcia-gomez.jpg` y `public/marianela-marin-mazaira.jpg` (si falta, se ven las iniciales) |
| Imágenes de fondo | `public/images/`: `portada.jpg`, `cabecera.jpg`, `consultoria.jpg`, `web.jpg`, `formacion.jpg` (si falta alguna, se ve un fondo azul con trama técnica) |
| Envío del formulario | `src/app/api/contact/route.ts` |

## Formulario de contacto

- Validación compartida cliente/servidor en `src/lib/contact.ts`.
- Anti-spam: campo trampa oculto y límite de 5 envíos por IP cada 10 minutos (en memoria).
- Sin `RESEND_API_KEY` los mensajes solo se registran en el log del servidor. Con Resend configurado (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` con un dominio verificado) se envían por correo con `reply-to` del remitente.

## Antes de publicar

- [ ] Registrar el dominio de Armartech y comprobar la marca en la OEPM.
- [ ] Completar titular, NIF y domicilio en `legal` (aviso legal y privacidad, LSSI-CE y RGPD).
- [ ] Añadir `public/marianela-marin-mazaira.jpg`.
- [ ] Añadir las fotos de fondo en `public/images/` (ver tabla).
- [ ] Crear el buzón de empresa y cambiar `site.email` en `src/content/site.ts` si no es contacto@armartech.es.
- [ ] Sustituir el texto del caso de Altoplast (marcado `tag: "ejemplo"`) por la descripción real y pedir permiso a Altoplast y a M-G White Services para nombrarlos.
- [ ] (Opcional) Para mostrar las soluciones con precios: fijar los precios en `solutions` y poner `show: true` y `draft: false`.
- [ ] Configurar Resend y probar un envío real.

## Vista previa sin Next.js

`preview/` renderiza las páginas con React y stubs de `next/*` para depurar sin instalar dependencias:

```bash
cd preview
tsx --tsconfig tsconfig.json render.tsx      # genera dist/pages.json con todas las rutas
tsx --tsconfig tsconfig.json test-api.mts    # prueba la API de contacto
node build-preview.mjs                       # HTML de vista previa con Tailwind por CDN
```

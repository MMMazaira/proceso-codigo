# Proceso & Código

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
| Nombre de marca, textos, servicios, equipo, contacto | `src/content/site.ts` |
| Datos legales (titular, NIF, domicilio) | `legal` en `src/content/site.ts` |
| Colores y tipografía | `src/app/globals.css` (`@theme`) y `src/app/layout.tsx` |
| Foto de Manuel | `public/manuel-garcia-gomez.jpg` |
| Envío del formulario | `src/app/api/contact/route.ts` |

## Formulario de contacto

- Validación compartida cliente/servidor en `src/lib/contact.ts`.
- Anti-spam: campo trampa oculto y límite de 5 envíos por IP cada 10 minutos (en memoria).
- Sin `RESEND_API_KEY` los mensajes solo se registran en el log del servidor. Con Resend configurado (`RESEND_API_KEY`, `CONTACT_TO_EMAIL`, `CONTACT_FROM_EMAIL` con un dominio verificado) se envían por correo con `reply-to` del remitente.

## Antes de publicar

- [ ] Elegir el nombre de marca definitivo (`site.name`) y el dominio.
- [ ] Completar titular, NIF y domicilio en `legal` (aviso legal y privacidad, LSSI-CE y RGPD).
- [ ] Añadir foto de Marianela (`photo` en `team`) o dejar las iniciales.
- [ ] Confirmar con Manuel que quiere publicar su teléfono.
- [ ] Configurar Resend y probar un envío real.
- [ ] Añadir `opengraph-image.png` en `src/app/` para compartir en redes.

## Vista previa sin Next.js

`preview/` renderiza las páginas con React y stubs de `next/*` para depurar sin instalar dependencias:

```bash
cd preview
tsx --tsconfig tsconfig.json render.tsx      # genera dist/*.body.html
tsx --tsconfig tsconfig.json test-api.mts    # prueba la API de contacto
node build-preview.mjs                       # HTML de vista previa con Tailwind por CDN
```

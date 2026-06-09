# Web de Tom

Esta es la web pública de Tom (la cara comercial). No es la app del producto — es solo la landing que ve la gente antes de escribirnos por WhatsApp.

## Cómo está organizada

```
/
├── index.html          → Home (la página principal)
├── precios.html        → Página de precios
├── contadores.html     → Página para contadores
├── assets/
│   ├── css/styles.css  → Todos los estilos (colores, tipografías)
│   ├── js/main.js      → Animaciones suaves del menú
│   └── logos/          → Logos de clientes del carrusel (ver su README)
├── config.js           → ⚠️ ACÁ está el número de WhatsApp
├── vercel.json         → Config de hosting (no tocar)
└── README.md           → Este archivo
```

## Cómo se actualiza la web

Cada vez que se cambia algo y se hace "push" al repo en GitHub, **Vercel publica la web sola en 1-2 minutos.** No hay que hacer nada manual.

## ⚠️ Lo que Diego tiene que reemplazar

1. **Número de WhatsApp** — en `config.js`, línea 2. Ahora hay un placeholder (`595981000000`). Cambialo por el real (sin `+`, sin espacios).
2. **Logos de clientes** — el carrusel de logos está debajo del hero (sección `CLIENTES (carrusel de logos)` en `index.html`). Hoy muestra los nombres en texto. Cuando tengas los archivos, ponelos en `assets/logos/` y seguí las instrucciones de `assets/logos/README.md` para cambiarlos por imágenes. La web los pinta de gris sola.
3. **Testimonios y casos** — por ahora no van. La prueba social es solo el carrusel de logos. Cuando haya reseñas o casos reales, se agrega una sección nueva (en `index.html` hay un comentario `TESTIMONIOS / CASOS (pendiente)` que marca el lugar).
4. **Precios finales** — están como `desde 149.000 / 390.000 / 690.000` Gs. Si decidís otro número, editalo en `precios.html`.

## Cómo cambiar un texto

1. Abrí el archivo `.html` que corresponde (`index.html` para el home).
2. Buscá el texto que querés cambiar (Ctrl+F).
3. Editalo.
4. Guardá. Subí el cambio (commit + push). En 1-2 minutos está online.

Si no estás cómodo con eso, pedile a Claude Code que te lo cambie.

## Stack

- HTML/CSS/JS estático. Sin build step, sin framework. Carga rápido, mantenible.
- Fuentes: Google Fonts (Baloo 2, Hanken Grotesk, JetBrains Mono).
- Hosting: Vercel (auto-deploy desde la rama `main`).

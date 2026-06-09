# Logos de clientes

Acá van los archivos de logo que se muestran en el **carrusel de la home**
(sección "Clientes que confían en Tom", justo debajo del hero).

## Cómo agregar / cambiar un logo

1. **Guardá el archivo en esta carpeta.**
   - Formato ideal: **SVG** (se ve nítido en cualquier pantalla y pesa poco).
   - También sirve **PNG con fondo transparente** o JPG.
   - Nombre en minúsculas, sin espacios ni acentos. Ej: `snicks.svg`,
     `pyae-movil.svg`, `morado.svg`.

2. **En `index.html`**, buscá la sección con el comentario
   `CLIENTES (carrusel de logos)` y cambiá el nombre en texto por la imagen.
   Es decir, reemplazá esto:

   ```html
   <span class="marquee__logo">SNICKS</span>
   ```

   por esto:

   ```html
   <img class="marquee__logo" src="/assets/logos/snicks.svg" alt="Snicks">
   ```

3. **Importante:** hacé el mismo cambio en los **dos** bloques `marquee__group`.
   El segundo es una copia idéntica del primero y es lo que hace que el carrusel
   gire en loop sin cortes.

## Sobre el color

No hace falta que prepares los logos en gris. La web los pasa a **gris
automáticamente** (funciona con logos a color, en negro o en blanco) y funde el
fondo blanco con el fondo crema de la sección, para que todos se vean parejos.
Al pasar el mouse, cada logo recupera su color.

Tip: los logos quedan más prolijos si vienen **sin mucho margen blanco
alrededor**. Igual, al subirlos los recortamos para que se vean del mismo alto.

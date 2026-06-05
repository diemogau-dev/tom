# PROMPT MAESTRO — Construcción de la web de Tom (para Claude Code)

> **Cómo usar este documento.** Pegá este prompt completo en Claude Code, dentro del repo donde vas a construir la web. Junto con esto, Claude Code va a tener el documento maestro de contexto de Tom y el archivo `Tom - Brand Kit.html`. Este prompt manda sobre el copy y la estructura; el brand kit manda sobre los colores, tipografía y tokens visuales.

---

## 0. Quién sos y con quién estás trabajando

Sos el desarrollador y diseñador frontend de **Tom**, un SaaS paraguayo. Estás construyendo la web pública (landing comercial).

**Importante sobre con quién hablás:** Diego, el founder con el que trabajás, **no es programador.** Es comercial y estratega, y construye con vos vía prompts. Por lo tanto:

- Explicá lo que hacés en lenguaje claro, sin asumir conocimiento técnico. Cuando uses un término técnico, aclaralo en una línea.
- Cuando le pidas a Diego que haga algo (instalar algo, pegar una clave, conectar una cuenta), dale el paso exacto, en orden, como si fuera la primera vez. No asumas que sabe usar la terminal de memoria.
- Tomá vos las decisiones técnicas (estructura de carpetas, nombres de componentes, librerías). No le preguntes a Diego cosas que él no puede responder. Preguntale solo decisiones de negocio o de contenido.
- Si algo te falta para avanzar, asumí la opción más razonable, dejalo andando, y avisale a Diego qué asumiste para que lo revise.

---

## 1. Qué vamos a construir

Una **web pública de una sola página principal (home)** + **una página secundaria para contadores** + las páginas de soporte mínimas (Precios). Es la cara comercial de Tom: tiene que generar confianza, explicar qué hace Tom, y llevar al visitante a escribir por WhatsApp.

**No** es la aplicación del producto (eso ya existe aparte). **No** lleva login, ni base de datos, ni backend. Es puro frontend estático: contenido, diseño y un botón que abre WhatsApp.

---

## 2. Herramientas y forma de trabajo (instrucciones técnicas)

Diego no es técnico, así que el flujo tiene que ser a prueba de fricción y el sitio tiene que estar **siempre en producción automáticamente**. Usá esto:

- **Framework:** elegí vos el stack frontend que mejor domines para una landing estática rápida y bien diseñada (recomendado: Next.js o Astro, lo que te resulte más sólido). Priorizá: carga rápida, mobile-first, y que sea fácil de mantener.
- **Repositorio:** todo el código vive en un repositorio de **GitHub**. Si todavía no existe, creá la estructura y dejá el `README.md` explicado para no técnicos (cómo está organizado, qué es cada cosa, cómo se actualiza un texto).
- **Hosting y deploy:** **Vercel**, conectado al repo de GitHub. Configuralo para que **cada push a la rama principal despliegue automáticamente a producción.** O sea: cuando se actualiza el código, la web se actualiza sola, sin que Diego tenga que hacer nada manual. Dejá esto andando y explicale a Diego en una línea cómo es ("cada vez que cambiamos algo, en 1-2 minutos está online solo").
- **Sin base de datos por ahora.** El CTA es un link directo a WhatsApp (formato `https://wa.me/NUMERO?text=MENSAJE`). Dejá el número como una variable fácil de cambiar en un solo lugar, y que Diego te pase el número real (mientras tanto poné un placeholder visible y avisale que hay que reemplazarlo).
- **Formularios:** no hay. Todo va a WhatsApp.
- **Analítica:** dejá preparado el lugar para meter un tag de analítica (Google Analytics o Vercel Analytics) pero no es bloqueante para el lanzamiento.

---

## 3. Identidad visual — usá el Brand Kit, NO el copy del Brand Kit

Tenés el archivo `Tom - Brand Kit.html`. **De ese archivo se usa TODO lo visual y NADA del texto de ejemplo.**

### Lo que SÍ tomás del brand kit (es la fuente de verdad visual):

- **Tokens de color** (sección 07 del brand kit, bloque `tokens.css`). Copialos tal cual:
  - Acento: Lima Tom `#C6F03D`, Lima Tenue `#DBF782`
  - Base oscura: Verde Bosque `#15291E`, Bosque Profundo `#0F1F16`, Verde Musgo `#21402F`, Musgo Elevado `#2C5239`
  - Claro cálido: Crema Hueso `#F2ECDD`, Crema Suave `#FBF7EE`
  - Neutros: Tinta `#16231B`, Humo `#5E6E63`, Niebla `#E4DCC9`, Claro `#ECF2E7`, Claro Tenue `#9BB0A1`
  - Estados: Verde Señal `#5FBE83` (éxito/cobrado), Ámbar `#E89A5B` (atención/vence pronto)
- **Proporción de uso de color: 60% verde bosque / 30% crema / 10% lima.** El lima es **acento, no base.** Nunca bañes pantallas enteras de neón. Esto es un producto de impuestos: la confianza vale más que el impacto.
- **Tipografía** (Google Fonts):
  - Display/titulares: **Baloo 2** (la misma del logo, pesos 400–800)
  - Texto y UI: **Hanken Grotesk** (400–800)
  - Mono/detalles técnicos (eyebrows, captions, etiquetas): **JetBrains Mono**
- **Logo / wordmark:** la palabra **`tom`** siempre en **minúsculas**, en Baloo 2 ExtraBold. Sobre fondo oscuro va en lima; sobre fondo claro va en tinta. Nunca lima sobre claro (pierde contraste). El ícono de app es la **`t`** sobre lima.
- **Radios:** sm 10px, base 16px, lg 24px, xl 34px, pill 999px.
- **Elemento gráfico de apoyo:** las **líneas curvas finas y paralelas** (las ves en el brand kit como `.curvas`). Sugieren movimiento y avance — la plata que fluye hacia el cliente. Van finas (1–1.5px), en lima sobre oscuro o tinta sobre crema, como textura de fondo discreta en heros y separadores. Nunca rellenas ni gruesas.

### Reglas de uso del logo (respetalas):
- Siempre en minúsculas (`tom`, nunca `Tom` ni `TOM` en el logo).
- Sin deformar, sin sombras, sin efectos, sin rotaciones, sin gradientes detrás.
- Área de protección: margen libre igual a la altura de la "o" en los cuatro lados.

### Estética general (criterio de dirección):
- Minimalismo con calidez. Mucho espacio en blanco (o en bosque). Pocas palabras por pantalla.
- Referencia de sobriedad y confianza: Stripe, Mercury, Linear. **NO** estética "startup de Silicon Valley genérica", **NO** gradientes neón saturados, **NO** ilustraciones cartoon, **NO** stock photos de gente con auriculares, **NO** íconos genéricos de cerebro/circuito/IA.
- Mobile-first siempre. El buyer vive en el celular.
- Donde se muestre a "Tom hablando", usá una simulación de interfaz tipo WhatsApp real (fondo crema, burbujas), como la del brand kit. Eso transmite el producto mejor que cualquier descripción.

### ⚠️ Lo que NO tomás del brand kit:
**Todos los textos del brand kit (`Tom - Brand Kit.html`) son ilustrativos y fueron escritos sin contexto. NO los uses.** En particular:
- **NO uses los números "+3.500 negocios" ni "₲ 90 MM cobrados".** Son inventados y falsos. Usar un número falso en la web es un riesgo real (un cliente o comprador que pregunta nos quema). El copy real está en este documento, sección 5.
- El copy de marca correcto, palabra por palabra, es el de la sección 5 de este prompt. Ante cualquier diferencia entre el brand kit y este documento en materia de **texto**, gana este documento.

---

## 4. El posicionamiento (para que entiendas qué estás comunicando)

Tom **no** es "un facturador más". Tampoco es "una IA que cobra" (eso lo subvende). Tom es:

> **El SaaS vertical que arranca en facturación electrónica y construye toda la cadena financiera de la PYME sobre esos datos.**

La facturación electrónica es la **base obligatoria** (por ley en Paraguay todas las empresas van a tener que facturar electrónicamente — cronograma DNIT que se completa en diciembre 2026). Esa obligatoriedad es nuestra mejor puerta de entrada, no algo a esconder. Pero el valor profundo está en lo que Tom hace **con los datos** que genera cada factura.

**La idea madre de toda la web:**
> *"Todos te ayudan a emitir la factura. Tom te ayuda con todo lo que viene después."*

Las **5 capas** de Tom, presentadas como una **escalera de profundidad** (no como un menú de features sueltos). Todo nace de la misma vertical y del mismo dato:

1. **Facturación electrónica** — la base. Facturás legal, fácil, en 24hs.
2. **Cobranza automática** — Tom sabe quién te debe y le cobra por vos.
3. **Reactivación de clientes** — Tom detecta a los que dejaron de comprar y los trae de vuelta.
4. **Mapa de obligaciones DNIT** — Tom te ordena qué le debés a la DNIT, cuánto y cuándo.
5. **Liquidación con contador** — Tom le pasa todo ordenado a tu contador.

El mensaje subyacente del moat (no se dice así de técnico, pero el diseño debe transmitirlo): **una factura alimenta todo lo demás. Tom funciona mejor mientras más lo usás.**

**Sobre la "IA":** no se nombra como tecnología. Se muestra como comportamiento de Tom. No escribas "IA generativa", "automatización inteligente", "machine learning". Escribí "Tom te avisa", "Tom aprende tu negocio", "Tom lo hace por vos". **IA invisible.**

**El canal es WhatsApp.** Tom vive donde el cliente ya vive. Nada de "abrí una app nueva".

---

## 5. EL COPY — texto exacto, listo para usar

Este es el contenido real. Usalo tal cual (podés ajustar microcopy menor si mejora el ritmo, pero respetá el mensaje y el tono). Tono: paraguayo, cercano, adulto, sobrio, frases cortas y declarativas, cero entusiasmo forzado, cero jerga, cero inglés (salvo "WhatsApp"). Tutea.

### NAV
- Logo: `tom`
- Links: Cómo funciona · Precios · Para contadores · Ayuda
- CTA (pill lima): **Probá Tom**

---

### BLOQUE 1 — HERO
- **Eyebrow (mono):** ● Tu asistente de negocios por WhatsApp
- **H1 (display grande, "cobra por vos" en lima):** Tom factura. Y cobra por vos.
- **Subtítulo:** Facturá electrónico en minutos, sabé quién te debe, recuperá clientes y mantené tus impuestos al día. Todo desde el WhatsApp que ya usás. Sin aprender ningún sistema nuevo.
- **Botón primario (lima):** Probá Tom en WhatsApp →
- **Botón secundario (ghost):** Ver cómo funciona
- **Trust strip (3 ítems, mono, separados):**
  - Negocios que facturan con Tom desde 2023
  - Activación asistida en 24 horas
  - Funciona donde ya trabajás: WhatsApp
- Fondo: bosque, con líneas curvas finas en lima de textura.

---

### BLOQUE 2 — PROBLEMA
- **Eyebrow:** El problema real
- **H2:** Facturar es lo fácil. El problema es todo lo que viene después.
- **Subtítulo:** Emitís la factura y ahí empieza el verdadero trabajo: perseguir el cobro, acordarte quién te debe, darte cuenta de qué clientes desaparecieron, y no morir con la DNIT. Eso te roba el día.
- **3 tarjetas (fondo crema, tinta):**
  - **Vendés bien, pero cobrás tarde.** La plata está, pero dispersa entre facturas, capturas y tu cabeza. Nunca tenés el número claro.
  - **Perseguir el cobro te incomoda.** Mandás el mensajito, esperás, volvés a insistir. Desgasta la relación y te quita energía.
  - **La DNIT te asusta.** Fechas, montos, obligaciones. Y ahora estás obligado a facturar electrónico. El miedo a equivocarte te saca el sueño.

---

### BLOQUE 3 — REFRAME (el bloque más importante; dale aire y contraste)
- Fondo bosque profundo. Una sola idea, grande.
- **H2 (display grande, "después" en lima):**
  El problema no es emitir la factura. Es todo lo que pasa *después*.
- **Subtítulo:** Por eso Tom no es otro facturador. Tom arranca donde los demás terminan: con cada factura que emitís, aprende cómo funciona tu negocio y trabaja por vos. Cobrar, recuperar clientes, ordenar tus impuestos. Todo nace del mismo lugar.

---

### BLOQUE 4 — LA ESCALERA (las 5 capas como profundidad conectada)
- **Eyebrow:** Una sola plataforma, toda tu plata ordenada
- **H2:** Empezás facturando. Tom hace el resto.
- **5 escalones** (presentados como secuencia que sube y se conecta — número grande, sensación de cadena, no de grilla suelta):
  1. **Facturá electrónico, fácil.** Emitís en minutos, legal y sin entender de impuestos. Te activamos en 24 horas y te acompañamos hasta tu primera factura.
  2. **Cobrá sin perseguir a nadie.** Tom sabe quién te debe, cuánto y desde cuándo. Le manda el recordatorio justo a cada cliente, con el tono justo. Vos ni te enterás del bochorno.
  3. **Recuperá clientes que se fueron.** Tom detecta a los que dejaron de comprarte y los trae de vuelta con el mensaje correcto. Plata que estabas dejando en la mesa.
  4. **Cumplí con la DNIT sin susto.** Qué le debés, cuánto y cuándo — ordenado y a tiempo. Tom te avisa antes de cada vencimiento. Sin multas, sin sorpresas.
  5. **Tu contador, con todo servido.** Tom le entrega la información lista a tu contador para que liquide tus impuestos. Menos trabajo para él, cero estrés para vos.
- **Cierre del bloque (una línea, destacada):** Todo conectado. Una factura alimenta todo lo demás. Por eso Tom funciona mejor mientras más lo usás.

---

### BLOQUE 5 — CÓMO FUNCIONA
- **Eyebrow:** Cómo arranca
- **H2:** En tres pasos. Sin instalar nada.
  1. **Te activamos.** Nos escribís por WhatsApp y en 24 horas tenés Tom funcionando con tu negocio cargado. Te acompañamos persona a persona.
  2. **Tom aprende tu negocio.** Con cada factura, Tom entiende quién te paga bien, quién te debe y cómo se mueve tu plata.
  3. **Tom te habla todos los días.** Te avisa, te cobra, te recuerda. Vos seguí atendiendo tu negocio.
- Buen lugar para una simulación de chat de WhatsApp (estilo brand kit) mostrando a Tom avisando un cobro.

---

### BLOQUE 6 — DIFERENCIACIÓN (tabla simple)
- **Eyebrow:** Por qué Tom
- **H2:** No es un facturador. Es lo que viene después del facturador.
- **Tabla comparativa** (no nombrar competidores reales; usar "Un facturador común"):

| | Un facturador común | Tom |
|---|---|---|
| Emite facturas legales | Sí | Sí |
| Te dice quién te debe | No | Sí |
| Le cobra a tus clientes por vos | No | Sí |
| Recupera clientes que se fueron | No | Sí |
| Te ordena la DNIT | No | Sí |
| Te habla por WhatsApp | No | Sí |
| Te acompaña una persona de verdad | No | Sí |

- Visual: los "No" en humo/apagado, los "Sí" de Tom en verde señal o lima. Que se vea de un golpe que la columna de Tom está toda llena.

---

### BLOQUE 7 — PRUEBA SOCIAL (placeholder honesto — NO inventar nada)
- **Título:** Negocios paraguayos que facturan con Tom desde 2023
- Franja de logos: dejá el espacio para 8 logos de clientes. Como placeholder, cajas con el nombre en texto (La Efe, Madera, Malak, Marite Dietrich, Perez Ramirez, RAP, Sulit, Benco). Diego va a reemplazarlos por los logos reales.
- **Dejá maquetado pero vacío** un carrusel de testimonios y una sección de casos de éxito (estructura lista, contenido pendiente). Diego va a traer testimonios y casos reales más adelante. **No escribas testimonios de ejemplo ni inventes citas.** Si necesitás mostrar algo, dejá un comentario en el código indicando "PENDIENTE: testimonios reales".
- **No pongas ningún número de clientes, montos cobrados, ni porcentajes que no estén confirmados en este documento.**

---

### BLOQUE 8 — CTA FINAL
- Fondo lima, alto contraste, líneas curvas en bosque.
- **H2 (tinta/bosque):** Dejá que Tom se encargue.
- **Subtítulo:** Escribinos por WhatsApp y te mostramos en 10 minutos cómo funcionaría en tu negocio. Sin compromiso, sin instalar nada.
- **Botón (bosque, texto lima):** Hablar con Tom por WhatsApp →

---

### FOOTER
- Logo `tom` + tagline: "Cobrá lo que te deben, sin perseguir a nadie."
- Links: Cómo funciona · Precios · Para contadores · Ayuda
- Nota legal mínima / contacto WhatsApp.

---

## 6. PRECIOS (página secundaria + sección resumida en el home si querés un teaser)

Tres planes + un complemento. El plan del medio (**Pro**) es el destacado ("el más elegido"). La lógica: el plan de entrada cubre el cumplimiento (facturación), los de arriba cubren la cadena completa (cobranza, reactivación, DNIT). Precios en guaraníes, opción mensual.

> Nota para Diego: estos rangos son la hipótesis de pricing del documento maestro. Definí el número final exacto vos. Dejé el precio como variable fácil de editar.

| Plan | Precio (Gs/mes) | Para quién | Incluye |
|---|---|---|---|
| **Tom Base** | desde 149.000 | El que necesita cumplir y empezar | Facturación electrónica ilimitada, envío por WhatsApp, registro de cobros, estados (pendiente/vencida/pagada), activación asistida en 24hs |
| **Tom Pro** ★ *(el más elegido)* | desde 390.000 | El que quiere cobrar a tiempo y ordenar su plata | Todo lo de Base + **cobranza automática** (Tom te dice quién te debe y le cobra por vos) + **recordatorios personalizados** + **predicción de cuánto vas a cobrar** + asistente por WhatsApp |
| **Tom Max** | desde 690.000 | El negocio que quiere todo resuelto | Todo lo de Pro + **reactivación de clientes** + **mapa de obligaciones DNIT** + asistente conversacional completo + multiusuario |
| **Complemento: Tu contador** | costo del contador + comisión Tom | El que quiere los impuestos hechos | Conectás tu contador dentro de Tom. Tom le entrega todo ordenado y él liquida. |

- **Ancla de valor (mostrar cerca del pricing):** "Tom cuesta menos que la plata que dejás de perder cuando no cobrás a tiempo."
- Ofrecé también la opción semestral si Diego la confirma (mejora caja, baja churn).
- CTA de cada plan: WhatsApp ("Quiero Tom Pro" pre-cargado en el mensaje).

---

## 7. PÁGINA "PARA CONTADORES" (landing secundaria — narrativa distinta)

El contador es un canal de distribución clave: tiene carteras de 30–100 PYMES y puede recomendar Tom. Esta página le habla **a él**, no al dueño de negocio. El mensaje no es "cobrá mejor" — es "menos trabajo manual + un nuevo ingreso + tus clientes ordenados".

### Copy de la página:

- **Eyebrow:** Para contadores
- **H1:** Tus clientes, ordenados. Tu trabajo, más liviano.
- **Subtítulo:** Tom le entrega a tus clientes la información lista para liquidar: facturas, cobros e impuestos al día. Vos dejás de perseguir papeles y ganás una comisión por cada cliente que sumás.
- **Bloque "Por qué te conviene" (3 tarjetas):**
  - **Menos trabajo manual.** Los datos de tus clientes te llegan ordenados y a tiempo. Menos planillas, menos errores, menos corridas a fin de mes.
  - **Un nuevo ingreso.** Ganás una comisión por cada cliente que se suma a Tom por tu recomendación. Sin captar nada nuevo: ordenás a los que ya tenés.
  - **Tus clientes, al día.** Tom les recuerda sus obligaciones y te avisa a vos. Menos clientes en falta, menos incendios.
- **Bloque "Cómo funciona con vos" (simple):**
  1. Sumás a tus clientes a Tom (te ayudamos nosotros).
  2. Tom organiza su facturación, cobros e impuestos.
  3. Vos recibís todo listo para liquidar, y una comisión por cada cliente activo.
- **CTA:** Sumate como contador aliado → WhatsApp ("Soy contador, quiero saber más" pre-cargado).
- Tono: profesional pero cercano. El contador es aliado, no cliente final. Cero jerga de software igual.

> Nota para Diego: el % de comisión todavía no está definido en el documento maestro. No lo pongas en la web por ahora. La página invita a la conversación, no cierra números.

---

## 8. Checklist final antes de dar por lista la primera versión

- [ ] Todo el copy es el de la sección 5–7 de este documento, no el del brand kit.
- [ ] Cero números inventados (sin "+3.500", sin "₲90MM", sin porcentajes no confirmados).
- [ ] La palabra "IA" no aparece como tecnología en ningún texto visible al cliente.
- [ ] Colores en proporción 60/30/10 (bosque/crema/lima). El lima es acento.
- [ ] Logo `tom` siempre en minúsculas, lima sobre oscuro / tinta sobre claro.
- [ ] Tipografías Baloo 2 + Hanken Grotesk + JetBrains Mono cargadas.
- [ ] Mobile-first, carga rápida, se ve bien en celular.
- [ ] Todos los CTA abren WhatsApp con un mensaje pre-cargado (número en una variable editable).
- [ ] Link "Para contadores" en el nav, apuntando a su página.
- [ ] Repo en GitHub con README para no técnicos.
- [ ] Vercel conectado: push a la rama principal = producción automática.
- [ ] Slots de testimonios/casos maquetados pero vacíos, con comentario "PENDIENTE: contenido real".
- [ ] Avisale a Diego, en lenguaje simple: qué construiste, qué falta que él te dé (número de WhatsApp, logos, precio final), y cómo se actualiza un texto.

---

*Fin del prompt maestro. Construí la primera versión completa, dejala desplegada en Vercel, y reportá a Diego en lenguaje no técnico qué hiciste y qué necesitás de él.*

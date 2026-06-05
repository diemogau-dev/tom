# TOM — Documento Maestro de Contexto del Proyecto

> **Propósito de este documento.** Esta es la fuente de verdad del proyecto Tom. Cualquier instancia de Claude (o Claude Code) debe leer este documento completo antes de responder cualquier pedido dentro del proyecto: branding, web, pricing, features, go-to-market, copywriting, P&L, roadmap, **y desarrollo técnico** (este documento incluye toda la información técnica necesaria para que Claude pueda generar prompts y código que Diego llevará a Claude Code). Todo lo que se produzca debe ser coherente con la estrategia, la categoría, la voz de marca y los números aquí definidos.
>
> **Estado: documento vivo. Se actualiza mensualmente con resultados reales.** Los números, palancas y prioridades cambian según la evidencia de mercado que se vaya acumulando. Lo que está acá es el plan a hoy, no la verdad permanente.
> **Última actualización:** Junio 2026 (versión consolidada; corrección de énfasis: Tom es la cadena de 5 capas sobre la vertical, no solo cobranza — la facturación electrónica es la base obligatoria que no se esconde).
> **Documento hermano:** *"Tom — Flujo de trabajo Diego↔Néstor"* (sección §17 acá): cómo se construye Tom día a día entre los dos.

---

## 0. Resumen ejecutivo (TL;DR)

Tom es un SaaS paraguayo de facturación electrónica que existe y funciona desde 2023, con integración propia contra SIFEN/DNIT, ~20 clientes activos de altísima retención (2+ años, casi sin churn) y ~Gs 4.000.000 de ingreso mensual. Sus dueños —Diego (comercial, network amplísimo en Paraguay) y Néstor (técnico, full-stack)— son el 100% del negocio, repartido 50/50, y deciden **relanzarlo con todo**, montados sobre dos olas que se alinean por única vez: **la obligatoriedad escalonada de facturación electrónica (cronograma DNIT que se completa en dic-2026)** y **la ola global de IA aplicada a verticales**.

**La tesis del relanzamiento:** el mercado paraguayo de facturación electrónica se está *commoditizando* (todos emiten el XML y lo mandan a la DNIT; compiten por precio y cumplimiento). Pero la facturación electrónica **no se abandona ni se esconde — es la base obligatoria de toda la vertical y nuestra mejor puerta de entrada**: por ley, todas las empresas paraguayas van a tener que facturar electrónicamente (cronograma DNIT que se completa en dic-2026), lo que crea un mercado obligado con fecha límite. La jugada no es dejar de hablar de facturación; es **ser el mejor facturador Y construir, sobre los datos que cada factura genera, toda la cadena financiera del negocio.** Tom deja de venderse como "un facturador más" y se reposiciona como **un SaaS vertical de profundidad: facturación electrónica + cobranza + reactivación de clientes + cumplimiento DNIT + liquidación con contadores, todo naciendo del mismo dato.**

**La categoría que creamos:** no "facturación electrónica" a secas, sino **"el asistente de negocios con IA por WhatsApp que arranca en tu factura y ordena toda tu plata"**. Tom factura (la base), y sobre eso **te ayuda a cobrar, recupera a tus clientes, te ordena tus obligaciones con la DNIT y te conecta con tu contador — todo por WhatsApp.** Ninguna capa reemplaza a la facturación: todas se apoyan en ella.

> **Aclaración crítica de énfasis (no reducir Tom a "cobranza").** A lo largo de este documento la cobranza se destaca como diferenciador #1 porque ataca el dolor más universal (caja) y es el gancho más vendible. Pero **Tom NO es "una IA que cobra".** Eso lo subvende. Tom es la **cadena completa de 5 capas sobre una sola vertical** (ver §5): (1) facturación electrónica como base obligatoria, (2) cobranza automática, (3) reactivación de clientes/ventas, (4) mapa de obligaciones y cumplimiento DNIT, (5) liquidación con contadores afiliados. La cobranza es la punta de lanza comercial, no el techo del producto. El moat es la **profundidad en la vertical**: el que tiene facturación + datos + IA en un solo lugar siempre da mejor producto que el que cuelga una sola feature.

**La distribución es multi-canal y escalable, no se limita a contadores.** Los contadores son una pieza estratégica del mix (no la única). El GTM completo combina: (1) base instalada (upsell), (2) canal de contadores y aliados gremiales, (3) inbound y founders con presencia pública, (4) **alianzas masivas con cámaras y gremios** (ASEPY, CAPACE, Cámara FinTech, UIP, universidades, colegios), (5) **eventos, charlas y prensa**, (6) **ads pagos con escalado por evidencia** (no un techo fijo), (7) **bases de datos de PYMES + comunicación masiva**, y (8) referidos incentivados. *Diego está a una llamada de inversores, gobierno, cámaras, periodistas y gremios; cualquier alianza relevante se puede gestionar en 48 horas.* Ver §8 (GTM expandido) y §9 (canal de contadores).

**Lo único que NO se hace:** atajos que comprometan el foso o la marca — no ser wrapper de otros facturadores, no buscar endoso político; la relación con la DNIT se usa solo para inteligencia regulatoria y homologación transparente (§9.4). La confianza y la independencia valen más que cualquier atajo.

**Los objetivos (dos horizontes, dos escenarios):**

- **12 meses, escenario base ("seguimos bootstrapped"):** SaaS rentable con **MRR de salida ~Gs 45–55M** (~150–200 clientes) y utilidad neta mensual ~Gs 18–28M hacia fin de año. Multiplica el negocio ~12–14x. *Ejecución excelente para un bootstrap.*
- **12 meses, escenario ambicioso ("hay market fit y meto carbón"):** **MRR de salida ~Gs 90–150M** (~250–400 clientes) y utilidad mensual ~Gs 40–70M hacia fin de año, activando todas las palancas (capital adicional vía caja reinvertida o préstamo, jornada full de los founders, equipo creciendo, alianzas gremiales masivas, ads escalando 5–10x el inicial). Requiere haber cruzado los gatillos de evidencia (ver §10.4).
- **3–5 años (meta de salida):** ~Gs 100M de utilidad neta por mes (~Gs 1.200M/año, ~USD 164k/año) y **venta** por ~USD 2M para cada socio (~USD 4M+ total). El salto a esta meta se apoya en escalar contadores y comisión + activar **cobros embebidos** (take-rate sobre dinero movido).

> **Principio rector:** Tom no se limita por capital, horas ni canales. Se limita por **evidencia de product-market fit**. Cuando hay señales claras de que la propuesta funciona, **no hay techo en capital, horas, ni canales que no se pueda mover**. Antes de esas señales, se ejecuta con disciplina para no quemar pólvora antes de saber adónde apuntar. Las palancas (capital, equipo, ads, eventos) tienen **gatillos por evidencia, no cronograma fijo** (§10.4). Esto se documenta como **documento vivo, actualizado mensualmente con resultados reales.**

---

## 1. La empresa hoy (punto de partida real)

### 1.1 Qué es Tom hoy
- SaaS web de facturación electrónica para Paraguay, operativo desde 2023.
- Integración **propia y directa** (API propia) contra **SIFEN/DNIT**, sin intermediarios. (Nota: la web actual dice "SET"; hoy la autoridad es **DNIT**. Corregir en todo el material nuevo.)
- Envío de facturas a clientes **por WhatsApp ya integrado vía API oficial** (no es wa.me manual).
- Funciones actuales: activación asistida (certificado + configuración DNIT), emisión de facturas electrónicas, registro de cobros, vista de pendientes/vencidas/cobros esperados, y un módulo de stock en el plan más alto.

**Stack técnico (confirmado con Néstor):**
- **Backend:** Node.js
- **Frontend:** React.js
- **Base de datos:** MongoDB
- **Integración fiscal:** API propia directa contra SIFEN (sin intermediarios) — *este es el foso más profundo de Tom y no se compromete por ningún atajo*
- **Mensajería:** WhatsApp Business API directa
- **Hosting:** DigitalOcean
- **Decisión: no migrar el stack.** Es maduro, sólido, ampliamente soportado por Claude Code y auditable por un comprador. Migrar a Supabase/Vercel costaría 2–3 meses de Néstor en una migración que no genera un cliente nuevo, con riesgo de romper a los 20 clientes actuales (el activo más valioso). La regla: no se migra un stack que funciona; se migra cuando el stack impide hacer algo que se necesita hacer. Hoy no impide nada.

### 1.2 Tracción y economía actual
- **~20 clientes activos.**
- **Retención excepcional:** la mayoría lleva 2+ años, churn casi nulo. *Este es el activo más valioso y la prueba de product-market fit silencioso.*
- **Ingreso (MRR):** ~Gs 4.000.000/mes (~Gs 48.000.000/año).
- **Costos:** ~Gs 1.000.000/mes (infra y operación; muy bajos).
- **Utilidad actual:** ~Gs 2.000.000–3.000.000/mes. El negocio **ya es rentable**, a pequeña escala.
- **Origen de los clientes:** 100% inbound orgánico — boca a boca y conocidos. **Nunca hubo una máquina comercial.** El cuello de botella histórico de Tom es **distribución, no producto.**

### 1.3 Perfil de clientes actuales
- En su mayoría **PYMES de venta de productos** (comercios).
- Algunos **profesionales independientes**: abogados, personal trainers, psicólogas.
- Logos actuales en la web (sin testimonios aún): La Efe, Madera, Malak, Marite Dietrich, Perez Ramirez, RAP, Sulit, Benco.

### 1.4 Planes y precios actuales
| Plan | Mensual | Semestral (equiv.) | Incluye |
|---|---|---|---|
| Emprendedor | Gs 89.000 (79.000 sem.) | Gs 474.000/6m | Hasta 20 facturas/mes, registro de cobros, pendientes, 1 usuario, 1 sucursal, activación asistida |
| Comercio (★ más elegido) | Gs 199.000 (169.000 sem.) | Gs 1.014.000/6m | Facturas ilimitadas, cobros 1 clic, pendientes/vencidas, envío WhatsApp/email, 1 usuario, 1 sucursal |
| Comercio + Stock | Gs 349.000 (310.000 sem.) | Gs 1.860.000/6m | Todo lo anterior + módulo de stock (productos/compras/movimientos) |

> **Observación estratégica:** estos precios están anclados a "facturación" y compiten de frente con BillPy/Goekua (~Gs 79.000). Al sumar IA, Tom debe **escapar de esa guerra de precios** con un plan superior (ver §7 Pricing).

---

## 2. Los fundadores y la estructura

- **Diego** — Comercial, estrategia, go-to-market, marca, ventas, **UI/UX y prototipado con Claude Code**. Founder serial con experiencia previa construyendo y operando empresas tecnológicas. Buen nivel comercial y estratégico; no programador, pero **construye prototipos funcionales y features de UI sobre el repo real de Tom usando Claude Code**, para entregárselos a Néstor 90% listos vía Pull Request (ver §17). **Network amplio en Paraguay** (inversores, gobierno, cámaras como ASEPY/CAPACE/Cámara FinTech/UIP, gremios, periodistas, universidades, colegios): puede gestionar reuniones de alianza con cualquier organización relevante en ~48 horas. *Este network es una ventaja competitiva real y un canal de distribución por sí mismo* (ver §8).
- **Néstor** — Técnico. Full-stack developer. Dueño del desarrollo, la arquitectura, la integración con SIFEN y el deploy. **Revisa y mergea los Pull Requests de Diego, mantiene producción, decide arquitectura.** Responsable de preparar el repo y el entorno local de Diego para que el flujo de trabajo funcione (ver §17.4).
- **Reparto:** 50/50 a partir del relanzamiento.

**Dedicación, capital y equipo: escalables por gatillo de evidencia, no por techo fijo.**

| Fase | Dedicación founders | Equipo nuevo | Capital adicional |
|---|---|---|---|
| **Arranque (primeros ~3 meses, sin PMF confirmado)** | ~30 h/semana cada uno | Solo los 2 founders | ~Gs 5M en ads (inicial) + caja propia |
| **Validación (3–6 meses, primeras señales claras)** | Hasta 50 h/semana c/u si hace falta | Incorporar **Product Owner / ATC + venta** (gatillo §10) | Reinvertir 100% utilidad + escalar ads 3–5x |
| **Aceleración ("hay PMF, metemos carbón")** | **Full time + 15h/día si la oportunidad lo pide** | Sumar comercial, marketing, soporte, devs según necesidad | Préstamo, inversor o reinversión total; ads escalando 5–10x; eventos, charlas, pauta masiva |

> **Principio rector del equipo y capital:** *cero techo arbitrario*. La barrera no es la disposición de los founders ni el dinero — es la **evidencia de que cada peso y cada hora extra produce retorno**. Los gatillos están definidos en §10.4. Cuando se cumplen, se pisa el acelerador sin culpa. Antes, se ejecuta con disciplina para no quemar pólvora antes de tener puntería.

- **Presupuesto inicial de relanzamiento:** ~Gs 5.000.000 en los primeros ~2 meses, principalmente para **ads iniciales de prueba**. Pero esto es solo el ticket de entrada: **no es el presupuesto total del año**, es la apuesta inicial para encontrar los canales y mensajes que funcionan. Cuando algo funcione, se duplica, se triplica, se decuplica.

---

## 3. La visión, la categoría y el posicionamiento

### 3.1 El problema real que resuelve Tom
Las PYMES y profesionales paraguayos:
1. **Están obligados a facturar electrónicamente** (cronograma DNIT, obligatoriedad creciente hasta la universalización) y muchos no saben cómo. *(Dolor de cumplimiento — la puerta de entrada.)*
2. **Pierden plata y tiempo persiguiendo cobros a mano**, uno por uno, por WhatsApp. *(Dolor de caja — el dolor más universal y el corazón de Tom.)*
3. **No tienen visibilidad** de cuánto les deben, qué vence, cuánto van a cobrar, qué deben a la DNIT. *(Dolor de control.)*
4. **No reactivan** a clientes que dejaron de comprar. *(Dolor de ventas perdidas.)*

### 3.2 La categoría que creamos
No competimos en "software de facturación". **Creamos y lideramos una categoría nueva:**

> **Tom es el asistente de negocios con IA, por WhatsApp, que arranca en tu factura y ordena toda tu plata.**
> Factura, cobra por vos, recupera a tus clientes, te ordena la DNIT y te conecta con tu contador.

La facturación es **la base obligatoria y la fuente de datos** — no un mero "caballo de Troya" que se menciona y se esconde. Por el contrario: es nuestro mejor gancho de entrada (obligatoriedad por ley) y sigue siendo el feature más mencionado de cara al cliente. El valor agregado —y el motivo por el que un cliente paga más y no se va— son las **capas que se construyen ENCIMA de esos datos**: cobranza inteligente, reactivación de clientes, mapa de obligaciones DNIT y liquidación con contadores. 

**Jerarquía correcta de las capas (orden de la cadena, no de importancia para esconder ninguna):**
1. **Facturación electrónica** — la base. Obligatoria por ley, puerta de entrada, fuente de todos los datos.
2. **Cobranza automática** — el diferenciador comercial #1, ataca el dolor de caja.
3. **Reactivación de clientes (ventas)** — recupera clientes que dejaron de comprar.
4. **Mapa de obligaciones y cumplimiento DNIT** — ordena qué se debe, cuánto y cuándo.
5. **Liquidación con contadores afiliados** — segunda fuente de ingreso + canal de distribución.

Todo nace de la misma vertical y del mismo dato. **Profundidad en una vertical, no amplitud dispersa.**

### 3.3 Posicionamiento de una frase (interno)
*"Mientras todos te ayudan a EMITIR la factura, Tom te ayuda con todo lo que viene DESPUÉS."*
(Cobrar, recuperar clientes, ordenar la DNIT, liquidar. La factura es la base; el valor está en la cadena que se construye sobre ella. Nota: esto no significa minimizar la facturación en el copy —seguimos siendo el mejor facturador y lo decimos— sino mostrar la profundidad que nadie más tiene.)

### 3.4 Posicionamiento de cara al cliente (externo, tono humano)
*"Tom es como tener un asistente que te factura, te avisa quién te debe, le cobra por vos, te recupera clientes y te ordena los impuestos. Todo desde WhatsApp, sin que muevas un dedo."*

### 3.5 Lo que Tom NO es (límites estratégicos — críticos)
- **Tom NO es un ERP.** No vamos hacia inventario complejo, compras, bancos, nómina, conciliación. Ese terreno ya lo ocupan eVendeha y BIMS, y pelear ahí mata nuestra simplicidad —que es justo lo que aman los 20 clientes actuales.
- **Tom NO es una API para developers.** Ese es el negocio de FacturaSend/Sifende/FactPy. Otro cliente, otra venta.
- **Tom NO es un wrapper sobre otros facturadores.** No vivimos colgados de la data de Goekua/BillPy/etc. Tom factura *él mismo* (su integración propia con la DNIT es su foso) y por eso da mejor producto. (Ver decisión completa en §9.4.)
- **Tom NO es atención al cliente automatizada.** El asistente de WhatsApp es para el *dueño del negocio* (gestión) y para *cobranza/reactivación*, no para responder a los clientes finales del comercio. Esa es otra complejidad y otro producto: no entrar.
- **Regla de oro para cada feature futura:** *"¿esto me hace mejor en el ciclo facturar → cobrar → entender mi plata, o me convierte en otra cosa?"* Si es lo segundo, no se construye. **Profundidad sobre amplitud.**

---

## 4. El mercado y la competencia (mapa real)

### 4.1 Contexto de mercado (Paraguay)
- **Obligatoriedad de facturación electrónica en expansión** (RG DNIT 21/2024; cronograma escalonado hacia la universalización; proveedores del Estado obligados desde enero 2026). → Demanda no discrecional, con fecha límite. Viento de cola estructural.
- **Pagos digitales masificados:** QR ~64% de pagos digitales (dic-2025), celular ~68% del total electrónico, sistema QR interoperable (Bancard, +75 apps), SPI del BCP. → **Cobrar es fácil de habilitar; Tom puede apoyarse en rieles existentes.**
- **WhatsApp universal:** mensajería usada por el 97,5% de los internautas; acceso ~90% móvil. → **El canal es WhatsApp, sin discusión.**

### 4.2 La competencia, segmentada (no todos compiten con nosotros)
| Competidor | Qué es realmente | Su pitch / propuesta | ¿Compite con Tom? |
|---|---|---|---|
| **FacturaSend** | API para integradores/devs | "La mejor API para conectar tu sistema a SIFEN" | **No.** Otro cliente (developers). |
| **Sifende** | API REST, plan gratis para devs | "Olvidate del SOAP y los certificados; API + free tier" | **No.** Infraestructura para devs. |
| **FactPy** | POS web + API | "POS en minutos, API en horas; código on-premise" | Parcial (POS con caja física). |
| **eVendeha** | ERP / gestión completa | "Sistema completo: stock, compras, bancos, nómina, RRHH" | **No directo.** Juega a ser grande/ERP. |
| **BIMS** | ERP / gestión + POS | "Gestión integral con facturación integrada" | **No directo.** ERP. |
| **BillPy** | Facturador por volumen | "Cumplí con SIFEN barato (desde Gs 79.000), multiempresa, API" | **Sí**, el más cercano. Compite por precio/cumplimiento. |
| **Goekua** | Facturador + firma digital | "Facturá tranquilo; +300.000 docs; respaldo institucional" | **Sí.** Marca consolidada, foco cumplimiento. |
| **Facturiti / eVende / Factpy / otros** | Facturadores varios | Cumplimiento + simplicidad | Sí, periféricos. |

### 4.3 El hueco que nadie ocupa
- Los **APIs** miran hacia abajo (infraestructura para devs).
- Los **ERPs** miran hacia arriba (gestión total para empresas grandes).
- Los **facturadores** pelean en el medio por **precio y cumplimiento**.
- **NADIE** está construyendo la capa de **inteligencia sobre los datos de facturación** (cobranza con IA, asistente conversacional, predicción de caja, reactivación). **Ese hueco es de Tom.**

### 4.4 Nuestra diferenciación, en una tabla
| Eje | La competencia | Tom (relanzado) |
|---|---|---|
| Promesa central | "Emití facturas legales" | "Cobrá lo que te deben" |
| Tecnología | Facturación + reportes | **IA: cobranza, asistente, remarketing** |
| Canal | Web (entrás a mirar) | **WhatsApp (Tom te habla y ejecuta)** |
| Cliente ideal | Quien necesita cumplir | Quien quiere cobrar y ordenar su plata sin un ERP |
| Activación | Variable / autoservicio | **Asistida y humana (heredada de hoy)** |
| Modelo extra | — | **Comisión por liquidación con contadores** |

> **Ventaja heredada que NO se debe perder en el rebranding:** la **activación asistida humana** ("listo en 24hs, te acompañamos hasta tu primera factura"). Para el micro-contribuyente asustado, ese acompañamiento es la mitad de la venta. El futuro de Tom es **IA para cobrar + humano para activar**. Esa combinación es más defendible que cualquier IA sola.

---

## 5. Producto: las capas de IA (el valor agregado)

Orden por valor estratégico y defendibilidad. **La facturación electrónica no es "Capa 0 a mantener simple y olvidar" — es la base obligatoria de toda la vertical, el feature más mencionado de cara al cliente, y la fuente de datos de la que viven todas las demás capas.** El relanzamiento construye las capas superiores SOBRE la facturación, sin abandonarla ni esconderla. La regla mental para la comunicación: *"todos te ayudan a emitir la factura; Tom te ayuda con todo lo que viene después — pero seguimos siendo el mejor en emitirla."*

> **Cadena de la vertical (cómo se presenta y se construye), todo desde el mismo dato:**
> facturación electrónica (base) → cobranza automática → reactivación de clientes → mapa/cumplimiento DNIT → liquidación con contadores.
> El moat es la **profundidad**: facturación + datos + IA en un solo lugar. Cada capa hace a la siguiente más valiosa, y todas dependen de que la factura nazca dentro de Tom.

### Capa 0 — Núcleo existente (mantener y pulir)
Facturación electrónica + envío por WhatsApp + registro de cobros + estados (pendiente/vencida/pagada) + activación asistida. Es la base de datos y la puerta de entrada. **Mantener simple.**

### Capa 1 — Cobranza inteligente *(el corazón y diferenciador #1)*
- IA que decide **a quién, cuándo y con qué tono** cobrarle, según el historial de pago de cada cliente.
- Aprende patrones ("este paga a 30 días, este necesita 2 recordatorios, este no paga sin llamada").
- **Genera el mensaje de WhatsApp personalizado** y lo envía automáticamente; **escala el tono** (amable → firme) según corresponda.
- **Predice cuánto se va a cobrar esta semana** y con qué probabilidad (flujo de caja proyectado).
- *Por qué primero:* es la posición única de Tom, ataca el dolor #1 (caja), y los datos para entrenarla ya se generan con cada factura.

### Capa 2 — Asistente conversacional por WhatsApp *(diferenciador #2, "el formato ganador")*
- Un agente por WhatsApp donde el **dueño** escribe: *"¿cuánto facturé este mes?"*, *"¿quién me debe más?"*, *"¿cuánto IVA tengo que pagar?"*, *"mandá recordatorio a los que deben de marzo"* — y Tom **responde y ejecuta**.
- Convierte a Tom de "web donde entro a mirar" en **"asistente que me responde donde ya vivo"**. Refuerza la marca (Tom = asistente).
- *Por qué:* es el patrón global ganador (agente que hace el trabajo) aplicado a datos propios. Nadie en el mercado local lo tiene.

### Capa 3 — Remarketing / reactivación de clientes *(feature premium, no pilar)*
- Detecta clientes que **no compraron en X tiempo** y lanza campañas de **recuperación/seguimiento por WhatsApp** (no atención).
- *Matiz honesto:* depende de que el negocio tenga clientes recurrentes identificables y motivo de recompra. Sirve mucho para comercios de productos; menos para servicios puntuales. **Va como feature del plan alto, no como columna vertebral.**

### Capa 4 — Mapa de obligaciones DNIT + marketplace de contadores *(segunda fuente de ingreso + canal de distribución)*
- **Recordatorios y mapa simple** de las obligaciones del comercio con la DNIT (qué debe presentar, cuándo).
- **Conexión con contadores externos** que ofrecen su servicio de liquidación de impuestos *dentro de Tom*, por un costo extra, con **Tom quedándose una comisión**.
- División del trabajo: el contador hace la presentación física/formal; **Tom le entrega la información ya ordenada.**
- *Por qué es más grande de lo que parece:* (a) **ingreso por comisión** (take-rate, no solo suscripción); (b) y sobre todo **canal de distribución** — los contadores tienen carteras de 30–100 clientes; si Tom les da comisión y les simplifica la vida, **se vuelven nuestra fuerza de ventas** y resuelven el cuello de botella histórico de distribución. Ver §9 (afiliados/contadores).

### Lo que NO se construye (dispersión disfrazada de innovación)
Generación de facturas "con IA", OCR de tickets, predicción de demanda, control de stock avanzado, atención al cliente final. No atacan el dolor central ni el diferenciador.

---

## 6. Marca, narrativa e identidad

### 6.1 El nombre
**Tom** se queda. La idea original (2023) era un "asistente", **anterior** al boom de IA — coincidencia afortunada que ahora podemos capitalizar de lleno. Tom es un nombre: humano, corto, cercano, fácil de decir y de querer. Tratamos a Tom como **una persona/personaje**, no como un acrónimo.

### 6.2 Personalidad de marca (cómo "es" Tom)
- **Cercano, no corporativo.** Habla en paraguayo, sin tecnicismos. Tutea.
- **Confiable y tranquilizador.** Quita el miedo a la DNIT y al "no sé cómo".
- **Proactivo.** Tom no espera: avisa, recuerda, sugiere, cobra.
- **Eficiente y simple.** Hace el trabajo aburrido para que el dueño se dedique a su negocio.
- **Con un toque de alivio/humor amable.** "Yo me encargo." "Vos tranquilo."
- **Arquetipo de marca:** una mezcla de **El Asistente/Sirviente leal** (hace el trabajo por vos) y **El Sabio cercano** (sabe de impuestos y plata, te cuida). No es el héroe; **el héroe es el dueño del negocio; Tom es su mano derecha.**

### 6.3 Principios de diseño (branding desde cero)
- Estética que **venda y genere confianza** (psicología de marca aplicada): limpieza, claridad, calidez. Confianza es la moneda en fintech/impuestos.
- Mobile-first y "WhatsApp-native" en la comunicación visual (el producto vive donde vive el cliente).
- Sistema visual simple y memorable: un Tom reconocible (posible mascota/personaje o símbolo), paleta cálida y profesional, tipografía legible y humana.
- Coherencia total entre web, app, mensajes de WhatsApp, ads y perfiles de los founders.

### 6.4 Referencias de marca y comunicación (para inspirar el rebranding)

**Producto-como-asistente / personaje y cercanía:**
- **Duolingo** — personaje (Duo) con personalidad fuerte; marca querible y memorable; tono humano y atrevido en social. *Lección: un personaje con voz propia construye amor de marca.*
- **Mailchimp** (Freddie) — mascota + ilustración cálida que humaniza una herramienta "aburrida". *Lección: lo administrativo puede ser simpático.*
- **Slack** — branding amable sobre una herramienta de trabajo; copy humano ("Where work happens"). *Lección: simpleza + calidez en B2B.*

**Fintech / dinero con confianza y simpleza:**
- **Mercury** (banca para startups) — estética limpísima, premium, confiable, minimal. *Lección: confianza vía sobriedad y claridad.*
- **Ramp / Brex** — comunicación de "te hago ahorrar / te simplifico la plata", enfoque en outcome. *Lección: vender el resultado (ahorro/tiempo), no el feature.*
- **Nubank** (LatAm) — humanizó la banca, lenguaje simple, anti-burocracia, cercanía masiva. *Lección: el anti-establishment cercano funciona en LatAm.*
- **Wise** — claridad radical en pricing y propuesta. *Lección: transparencia como diferenciador.*

**Vertical AI / "vender trabajo" (categoría que habitamos):**
- **Carecode** (LatAm, salud por WhatsApp, respaldo a16z/QED) — agentes de IA por WhatsApp que hacen el trabajo administrativo. *Referencia directa de modelo en LatAm.*
- **Avoca / EvenUp / Abridge** — agentes verticales que ejecutan tareas reales en una industria. *Lección: profundidad vertical + outcome medible.*

**Comunicación de founders / building in public:**
- **Estilo de founders que comparten el camino** (transparencia de métricas, aprendizajes, decisiones) — para LinkedIn/Twitter de Diego y Néstor. Referencias de tono: founders de Latitud, de SaaS bootstrapped (MicroConf/Indie Hackers), y el género "build in public". *Lección: contar el viaje genera distribución y confianza.*

### 6.5 Mensajes y copywriting (biblioteca inicial)

**Tagline candidatos (elegir/testear):**
- "Tom factura. Y cobra por vos."
- "Vos vendé. De cobrar me encargo yo."
- "Tu asistente de facturación y cobranzas."
- "Facturá fácil. Cobrá sin perseguir a nadie."
- "El asistente que te factura, te cobra y te avisa de la DNIT."

**Frases de apoyo (web/ads):**
- "Dejá de perseguir a tus clientes por WhatsApp. Tom lo hace por vos."
- "Sabé quién te debe, cuánto y cuándo vas a cobrar — en segundos."
- "Cumplí con la DNIT sin entender de impuestos."
- "Tom te avisa lo que tenés que pagar. Y te conecta con un contador si querés."

**Tono del WhatsApp de Tom (ejemplos de voz):**
- "¡Hola! Soy Tom 👋 Te aviso que Pérez SRL te debe Gs 1.200.000 y vence mañana. ¿Le mando un recordatorio?"
- "Esta semana esperás cobrar ~Gs 4.300.000. Hay 3 facturas en riesgo. ¿Las reviso con vos?"
- "Llegó fin de mes: te toca presentar IVA. ¿Te conecto con tu contador?"

---

## 7. Pricing y modelo de negocio

### 7.1 Principio de pricing
Al sumar IA, Tom **cambia de categoría** y debe **cobrar como otra categoría** — no competir a Gs 79.000 con los facturadores. El ancla de valor es brutal y debe comunicarse: **"Tom cuesta menos que la plata que dejás de perder por morosidad."** Vender outcome, no features.

### 7.2 Estructura de planes propuesta (a validar y testear)
Mantener un peldaño de entrada (cumplimiento) y crear peldaños superiores de IA donde está el margen y la diferenciación.

| Plan | Rango sugerido (Gs/mes) | Foco | Incluye (núcleo) |
|---|---|---|---|
| **Tom Base** | 99.000–149.000 | Cumplimiento | Facturación electrónica, envío WhatsApp, registro de cobros, estados, activación asistida |
| **Tom Pro** ★ | 290.000–390.000 | **Cobranza con IA** | Todo Base + **cobranza inteligente** (recordatorios automáticos personalizados, scoring de pago, predicción de caja) + asistente WhatsApp básico |
| **Tom Max** | 490.000–690.000 | **Negocio completo** | Todo Pro + **asistente conversacional completo** + **remarketing/reactivación** + mapa de obligaciones DNIT + multiusuario/sucursal |
| **Complemento: Liquidación con contador** | costo del contador + **comisión Tom** | Impuestos hechos | Conexión con contador dentro de Tom; Tom entrega info ordenada y cobra comisión |

> Notas:
> - Los rangos son hipótesis ancladas en (a) precios de competencia, (b) el salto de categoría por IA, y (c) la disposición a pagar a validar con los 20 clientes actuales (primer test de upsell).
> - Mantener opción **semestral** (mejora caja y baja churn).
> - El **plan ★ (Pro)** debe ser el "más elegido": la cobranza con IA es el gancho.
> - Evitar exceso de planes; 3 peldaños + 1 complemento es suficiente.

### 7.3 Fuentes de ingreso (3)
1. **Suscripción** (recurrente, el grueso).
2. **Comisión por liquidación con contadores** (take-rate sobre un servicio que igual iban a pagar; ver §9).
3. **(Futuro / Etapa 3)** **Cobros embebidos**: pago desde el recordatorio de WhatsApp (QR/link) con conciliación automática → posible **take-rate sobre el dinero movido**. Mayor valor, requiere cuidado regulatorio. No es para el lanzamiento; es la dirección.

### 7.4 Por qué este modelo escala hacia una salida
- Ingreso **recurrente y predecible** (lo que más valora un comprador).
- **Retención alta** ya demostrada → NRR sano → múltiplos de salida más altos.
- **Segunda y tercera fuente de ingreso** (comisión, cobros) → expande ARPU sin adquirir más clientes (NRR > 100%).

---

## 8. Estrategia Go-To-Market (GTM expandido y multi-canal)

### 8.1 La realidad y la oportunidad
El cuello de botella histórico de Tom **nunca fue el producto; fue la distribución** (0 máquina comercial en 2 años, todo boca a boca). El relanzamiento con IA da una **razón nueva para vender** (narrativa, prensa, diferenciación), montado sobre **dos olas que se alinean por única vez**: la obligatoriedad escalonada de facturación electrónica (cronograma DNIT que se completa en dic-2026) crea un mercado obligado que tiene fecha límite; la ola de IA aplicada a verticales abrió la categoría que hoy lideramos. **Esta ventana se aprovecha con un motor comercial multi-canal, no con una sola palanca.**

### 8.2 Los 8 canales del GTM (paralelos, no secuenciales)

No hay un "canal principal" único. Hay un **mix que se ejecuta en paralelo desde el día uno**, midiendo CAC y conversión de cada uno, y doblando el presupuesto en los que funcionan. El canal de contadores es **uno importante** entre varios, no el centro.

1. **Base instalada (upsell).** Los 20 clientes actuales son el primer mercado y el banco de testimonios. Migración a Tom Pro/Max; testimonios en video; referidos pagados.
2. **Canal de contadores y aliados profesionales (§9).** Comisión y revenue-share con contadores; sus carteras (30–100 PYMES c/u) se convierten en fuerza de ventas. *Pieza estratégica pero no exclusiva.* Sumar también: estudios jurídicos que asesoran a PYMES, consultores fiscales independientes.
3. **Alianzas con cámaras y gremios.** Diego se suma como socio activo de **ASEPY (emprendedores), CAPACE (comercio), Cámara Paraguaya FinTech, UIP (Unión Industrial Paraguaya)** y otros que sean relevantes. Ofrecer **Tom con descuento exclusivo para socios** (lead magnet potente: cada cámara se convierte en canal). Dar **charlas educativas** sobre obligatoriedad DNIT y cobranza en cada cámara → posicionamiento + leads. *Diego puede gestionar estas alianzas en ~48hs gracias a su network.*
4. **Eventos, charlas y prensa.** Charlas propias (webinars y presenciales) sobre "cómo cumplir con la DNIT sin morir en el intento" y "cómo cobrar a tiempo en una PYME paraguaya". Participación como speaker en eventos del ecosistema (Asunción Startup Week, eventos de cámaras, universidades). **Prensa**: notas en medios económicos (5Días, MarketData, La Nación negocios) sobre la categoría que Tom inaugura; aprovechar el network de Diego con periodistas.
5. **Inbound de contenido + founders en público (§11).** LinkedIn (el más relevante en Paraguay B2B), Twitter/X, newsletter mensual. Diego y Néstor construyen audiencia con build-in-public + educación. Costo cero, retorno acumulativo.
6. **Ads pagos escalables, NO con techo fijo.** Inicio ~Gs 5M/2 meses en Meta y TikTok para probar ángulos y mensajes. *Cuando un ángulo muestre CAC sostenible (gatillo §10.4), se escala 3–5–10x sin culpa.* Click-to-WhatsApp como destino, retargeting sobre visitantes y leads. Ver §12.
7. **Comunicación masiva a bases de datos de PYMES.** Conseguir o construir base de PYMES paraguayas (Diego tiene acceso vía cámaras, contactos en gobierno, listados públicos de la DNIT de obligados). Campañas dirigidas por WhatsApp y email respetando políticas. Segmentadas por rubro y por momento de obligatoriedad.
8. **Universidades, colegios técnicos y centros de formación.** Charlas sobre facturación electrónica y herramientas digitales para emprendedores; semilla para futuros usuarios y aliados. Aprovechar el network de Diego en educación.

### 8.3 Lógica de inversión por canal: gatillos de evidencia, no presupuesto fijo
Cada canal se evalúa mensualmente con dos métricas: **CAC (costo de adquirir un cliente)** y **payback period (cuántos meses tarda en recuperarse esa inversión)**. Regla simple:
- CAC < 6 meses de ARPU = **escalar fuerte** (duplicar/triplicar inversión).
- CAC entre 6–12 meses de ARPU = **mantener y optimizar**.
- CAC > 12 meses de ARPU = **pausar y rediseñar**.

> **El presupuesto de ads y eventos NO tiene techo predefinido.** Tiene una piso (los Gs 5M iniciales) y un crecimiento por evidencia: si un canal funciona, se le mete todo lo que se pueda hasta que deje de funcionar. Financiamiento: reinversión total de utilidad, préstamo si la oportunidad lo amerita, o inversor si el momento es claro.

### 8.4 Proceso de captación de leads (funnel)
- **TOFU (atracción):** contenido educativo (¿estás obligado a facturar electrónicamente?, ¿cómo cobrar a tiempo?), ads de dolor, posts de founders, recomendaciones de contadores y cámaras, prensa, charlas.
- **MOFU (consideración):** landing por segmento (comercios / profesionales / "obligado por la DNIT" / "socio de [cámara]"), demo del asistente y la cobranza, casos/testimonios, comparativa honesta vs "facturador común".
- **BOFU (conversión):** **WhatsApp como canal de venta** (ya es el contacto principal hoy). Demo en vivo con la propia data del prospecto; **activación asistida** como cierre ("en 24hs facturás").
- **Lead magnet principal:** "Diagnóstico gratis: ¿estás al día con la DNIT y cuánto te deben tus clientes?" → captura + conversación.
- **Lead magnet por cámara/gremio:** descuento exclusivo para socios + charla de educación financiera.

### 8.5 Aprovechar el network de Diego como ventaja estratégica
Diego está a una llamada o mensaje de inversores, gobierno, cámaras (ASEPY, CAPACE, FinTech, UIP, otras), periodistas, gremios, universidades y colegios. **Cualquier alianza relevante se puede gestionar en ~48 horas.** Esta es una ventaja real y rara en early-stage; el documento la trata como un canal en sí mismo y un acelerador transversal a los otros 8. *Se usa con generosidad pero con criterio: cada alianza debe servir a la categoría que construimos, no diluirla.*

### 8.6 Onboarding (la experiencia que retiene)
El onboarding actual (activación asistida humana) es una fortaleza. Estandarizarlo y potenciarlo:
1. **Contacto por WhatsApp** → diagnóstico rápido.
2. **Activación asistida** (certificado + configuración DNIT) — acompañamiento humano hasta la primera factura (≤24hs).
3. **Carga inicial** (clientes/Excel) — asistida.
4. **Activación de la IA**: configurar cobranza inteligente con el cliente (mostrar el primer "vas a cobrar X esta semana").
5. **Primer "momento mágico":** que Tom mande el primer recordatorio y el cliente **cobre** algo en la primera semana. Ese es el aha que retiene.
6. **Check-in** a los 7 y 30 días (rol del Product Owner).

---

## 9. Canal de contadores (afiliados/distribución) — pieza estratégica

### 9.1 Doble rol
- **Ingreso:** comisión por cada liquidación de impuestos contratada dentro de Tom.
- **Distribución (lo más importante):** los contadores **recomiendan** Tom a su cartera (30–100 PYMES c/u). Se vuelven nuestra fuerza de ventas.

### 9.2 Propuesta para el contador (por qué les conviene)
- Tom les **entrega la info ya ordenada** (menos trabajo manual, menos errores).
- **Nuevo ingreso** sin captar clientes: liquidan a clientes que llegan vía Tom.
- **Comisión / revenue share** por cliente referido que se suscribe.
- Posible **panel de contador** (multi-cliente) para gestionar su cartera dentro de Tom.

### 9.3 Cómo negociar/activar
- Empezar con **3–5 contadores aliados** (calidad sobre cantidad), idealmente de la red de Diego.
- Modelo claro de comisión (definir % por suscripción referida y % por liquidación).
- Materiales co-branded y soporte para que el contador venda sin fricción.
- Medir: clientes traídos por contador, retención de esos clientes, ingresos por comisión.

> **Advertencia de foco:** el panel de contador puede tentarnos hacia "software para contadores" (otro producto). Mantenerlo **mínimo y al servicio de la distribución**, no como una nueva vertical.

### 9.4 Alianzas, contactos estratégicos y decisiones tomadas (qué SÍ y qué NO)

Los fundadores cuentan con contactos relevantes (dueños de Goekua, contactos fuertes en la DNIT, y una relación personal cercana a la presidencia de la República). Se debatieron a fondo y se tomaron decisiones explícitas. **Documentar los "NO" es deliberado: blinda al equipo de reabrir, en un momento de desesperación por crecer, caminos que se descartaron por buenas razones.**

**Lo que SÍ hacemos:**
- **Camino propio, apalancado en contadores.** La distribución central de Tom es el canal de contadores (§9): escalable, legítimo y **bajo nuestro control**. No dependemos de terceros que puedan cortarnos ni de favores que puedan evaporarse.
- **Integración propia con la DNIT como foso.** Es lo más difícil de copiar que tenemos; se protege y se mantiene siempre actualizada a la normativa vigente.
- **DNIT como fuente de inteligencia regulatoria y velocidad.** Usar los contactos en la DNIT para lo legítimo y valioso: anticipar cambios normativos y del cronograma de obligatoriedad, interpretar resoluciones, y resolver trabas técnicas de integración más rápido que la competencia. Esto nos hace mejor producto sin comprometer la marca.
- **Homologación transparente, si existe la vía.** Explorar ser proveedor homologado/listado por la DNIT **por mérito y requisitos técnicos públicos, abiertos a todos** — no por dedo. La diferencia entre "homologado porque cumplo requisitos públicos" y "oficial porque conozco a alguien" es toda la diferencia para una marca cuyo activo es la confianza.

**Lo que decidimos NO hacer (y por qué):**
- **NO ser un wrapper sobre otros facturadores.** Se evaluó una capa tipo API para extraer data de sistemas de terceros (ej. Goekua, BillPy) y ofrecer las capas de IA encima. **Descartado como estrategia:** crea dependencia de un sistema que no controlamos (puede cambiar/cerrar su API), degrada la calidad de data que la IA necesita, y —lo más importante— regala nuestro propio foso (la integración con la DNIT), volviéndonos un wrapper fácil de copiar. *El que tiene facturación + data + IA en un solo lugar siempre dará mejor producto que el que cuelga la IA de un tercero.* (Matiz: una conexión puntual como **anzuelo para migrar** un cliente a Tom podría considerarse a futuro, pero el objetivo sería migrarlo, nunca quedarse de wrapper. Hoy: fuera de alcance.)
- **NO usar a Goekua (ni competidores) como canal de distribución.** Goekua compite por el mismo cliente y el mismo ingreso recurrente; pedirle acceso a su base es pedirle que se ayude a perder su negocio. *No ocurre desde una posición de fuerza.* **Reservar esa relación para una eventual conversación de M&A en ~12 meses** (compra de cartera o fusión), cuando Tom esté relanzado y creciendo y podamos negociar desde la fuerza, no como el chico pidiendo favores. Quemarla hoy pidiendo distribución desperdicia una carta valiosa.
- **NO buscar el "endoso oficial" vía la relación con la presidencia.** Conseguir un contrato o endoso del gobierno a través de una amistad personal con allegados al presidente se lee —en Paraguay y en cualquier lado— como tráfico de influencias. **Riesgos que superan cualquier upside:** (a) incendia el activo de marca (la confianza, que es nuestra propuesta de valor en un producto de impuestos); (b) dependencia política frágil (un favor dura lo que dura el político; el próximo gobierno podría marcarnos); (c) los facturadores existentes nos atacarían política y judicialmente, y somos el más chico de esa pelea; (d) el Estado como cliente/socio es lento y tóxico para la caja de una startup. **Decisión: este contacto queda completamente fuera de la estrategia de Tom.** Si algún día Tom es grande, que el reconocimiento llegue por mérito y de forma pública.

> **Principio rector de alianzas:** la confianza y la independencia son activos más valiosos que cualquier atajo. **Preferimos un camino propio, legítimo y agresivo** —apalancado en el network de Diego, en alianzas masivas con cámaras y gremios, en eventos y prensa, y en ads escalables— sobre cualquier acelerador que nos vuelva dependientes o que comprometa la marca. *Independencia no significa lentitud; significa que la velocidad la decidimos nosotros, no terceros.* Cada oportunidad de alianza se evalúa con esta vara.

---

## 10. Plan financiero y P&L (realista, bootstrap)

> **Aviso:** cifras en guaraníes (Gs). Tipo de cambio referencial usado para metas en USD: ~Gs 7.300/USD (ajustar al real). Estos números son un **modelo de rumbo**, no una promesa; se recalibran con datos reales mensuales. Construidos sobre benchmarks SaaS 2025 (márgenes brutos 71–77%; NRR objetivo ≥100%; CAC payback objetivo <12 meses para SMB; SaaS AI-native crece ~3x más rápido que SaaS tradicional; valoraciones privadas 4–12x ARR según crecimiento y retención).

### 10.1 Punto de partida (hoy)
- MRR ~Gs 4.000.000 · Costos ~Gs 1.000.000/mes · Utilidad ~Gs 2–3M/mes.
- ARPU actual ≈ Gs 200.000 (mezcla de planes) — **subirá** con Tom Pro/Max.

### 10.2 La tensión central del plan (y cómo la resolvemos)
Multiplicar el negocio 12–14x en un año exige absorber costos nuevos (PO full-time ~Gs 6–10M/mes, BSP de WhatsApp, herramientas de IA, ads que escalan). En modo bootstrap puro, esos costos se comen la utilidad actual y más. **La resolución no es ser conservador; es ser disciplinado.** El equipo, el capital y los ads se escalan **por gatillos de evidencia (§10.4)**, no por cronograma fijo. Cuando los gatillos se cumplen, se acelera sin culpa; capital adicional puede venir de reinversión total, préstamo o inversor. Cuando no se cumplen, se ajusta el plan y se valida más.

### 10.3 Palancas para llegar a la meta
1. **ARPU ↑** vía migración a Tom Pro/Max (de ~Gs 200k a ~Gs 350–450k promedio).
2. **Clientes ↑** vía los 8 canales paralelos del GTM (§8), no solo contadores.
3. **NRR ≥ 100%** vía baja churn (ya la tenemos) + expansión (comisión contadores, upsell).
4. **Costos bajo control en infra** (es barata); el gran costo es el equipo y la adquisición, **atados a evidencia de retorno**.
5. **Capital adicional cuando la evidencia lo justifica:** reinversión total de utilidad, préstamo bancario, o inversor. Cero techo arbitrario.

### 10.4 Dos escenarios de 12 meses + gatillos de evidencia

**Escenario A — Base ("seguimos bootstrapped").** Founders a 30h/semana, PO contratado en T2, ads escalando moderado, contadores y cámaras como canales activos. Es el camino que se ejecuta hasta que aparezca evidencia clara para acelerar.

| Trimestre | Clientes (fin) | ARPU (Gs) | MRR (Gs) | Costos/mes (Gs) | Utilidad/mes (Gs) | Hitos |
|---|---|---|---|---|---|---|
| **Hoy** | 20 | 200.000 | 4.000.000 | 1.000.000 | ~2.500.000 | Punto de partida |
| **T1** | 35 | 270.000 | ~9.500.000 | ~3.500.000 | ~6.000.000 | Relanzamiento marca/web/pricing, upsell base, 3–5 contadores, 2 cámaras, ads on |
| **T2** | 70 | 320.000 | ~22.400.000 | ~9.000.000 | ~13.400.000 | **Gatillo PO full-time**, canal contadores+cámaras escala, primeros testimonios convertidos |
| **T3** | 115 | 360.000 | ~41.400.000 | ~15.000.000 | ~26.400.000 | Asistente + remarketing maduros; 2º comercial; comisión contadores aporta |
| **T4** | 150 | 380.000 | ~57.000.000 | ~20.000.000 | ~37.000.000 | Run-rate de salida; preparar cobros embebidos (Etapa 3) |

**Escenario B — Ambicioso ("hay PMF, metemos carbón").** Se activa cuando se cruzan los **gatillos** del recuadro siguiente. Founders full-time + horas extra, equipo creciendo, ads escalando 5–10x, eventos + prensa + base de datos masiva, posible préstamo/inversor.

| Trimestre | Clientes (fin) | ARPU (Gs) | MRR (Gs) | Costos/mes (Gs) | Utilidad/mes (Gs) | Hitos |
|---|---|---|---|---|---|---|
| **T1** | 50 | 280.000 | ~14.000.000 | ~6.000.000 | ~8.000.000 | Relanzamiento + primer round de prensa + 3 cámaras activas |
| **T2** | 120 | 340.000 | ~40.800.000 | ~18.000.000 | ~22.800.000 | PO + 1º comercial + ads escalando; charla en CAPACE o ASEPY |
| **T3** | 220 | 380.000 | ~83.600.000 | ~35.000.000 | ~48.600.000 | 2º comercial + marketing dedicado + eventos propios |
| **T4** | 350 | 400.000 | ~140.000.000 | ~70.000.000 | ~70.000.000 | Empieza a tocar la meta de salida; cobros embebidos en desarrollo |

> **Gatillos para pasar del escenario A al B (todos deben cumplirse, no opcionales):**
> 1. **MRR ≥ Gs 20M sostenido por 2 meses** (no un mes pico).
> 2. **CAC payback < 8 meses** en al menos 2 canales medidos.
> 3. **Churn mensual < 2%** sostenido y NRR ≥ 100%.
> 4. **Tom Pro y/o Max captura ≥ 50% del MRR nuevo** (validación de pricing IA).
> 5. **Al menos un canal escalable mostrando elasticidad** (más ads/más eventos = más clientes con CAC estable).
>
> Cuando los 5 gatillos se cumplen, **no hay culpa en acelerar**: capital, equipo, ads, eventos, todo se multiplica. Si solo 3 o 4 se cumplen, se mantiene el escenario base y se trabaja el gatillo faltante antes de meter más combustible. **Esta es la forma de ser ambicioso sin ser temerario.**

- **Lectura honesta del año 1:** el escenario base deja un run-rate de salida ~Gs 25–37M netos/mes (excelente para bootstrap); el ambicioso, ~Gs 50–70M (que ya entra en territorio de "venta cercana"). **Ambos son consistentes con la meta de salida** (Gs 100M/mes en 3–5 años) — el ambicioso simplemente la adelanta.
- **Gatillo de contratación del PO:** cuando MRR ≥ ~Gs 15–18M/mes sostenido (≈ T2 base, T1–T2 ambicioso), el costo del PO < ~40% de la utilidad mensual.
- **Camino a la meta de salida:** del run-rate de fin de año 1 hacia **Gs 200–250M de MRR**. En el ambicioso, eso son ~12–18 meses adicionales; en el base, ~24–30 meses. El salto final lo habilitan los **cobros embebidos** (take-rate) + la **comisión de contadores** + expansión de ARPU.

### 10.5 Unit economics a vigilar (KPIs núcleo)
- **Margen bruto** (objetivo > 70%; con infra barata y producto digital, alcanzable).
- **NRR / churn** (mantener churn bajísimo; expandir ARPU).
- **CAC y CAC payback** (objetivo < 12 meses; el canal contadores y el inbound deben mantenerlo bajo).
- **LTV/CAC** (objetivo ≥ 3:1).
- **ARPU** y **mezcla de planes** (que el ★ Pro domine).
- **Rule of 40** (crecimiento % + margen %) como termómetro de salud.

### 10.6 Camino a la salida (3–5 años)
- **Doble objetivo, misma meta:** que el negocio deje **~Gs 100M de utilidad neta/mes** (~Gs 1.200M/año, ~USD 164k/año) **y** se venda por **~USD 2M por socio** (salida total ~USD 4M+).
- **Lente de valuación 1 (múltiplo de utilidad):** un SaaS rentable se vende típicamente a 3–6x utilidad anual en mercados privados pequeños; ~USD 164k netos/año a ese rango ya se acerca, y con crecimiento + retención fuerte el múltiplo sube. Para asegurar ~USD 4M+ conviene combinar utilidad sólida con crecimiento sostenido.
- **Lente de valuación 2 (múltiplo de ARR):** a múltiplos privados de **4–12x ARR** (según crecimiento/retención), llegar a **~Gs 200–250M de MRR** (≈ USD 330–410k MRR → ~USD 4–5M ARR) a ~5x daría ~USD 20–25M de valuación; aun a múltiplos conservadores, el rango USD 4M+ por socio es alcanzable. *Rangos a refinar con datos reales y con el tipo de cambio del momento.*
- **Lo que rompe el techo:** el modelo de pura suscripción difícilmente llega solo a Gs 200–250M de MRR en este mercado; el salto lo habilitan los **cobros embebidos** (take-rate sobre el dinero movido) + la **comisión de contadores** + expansión de ARPU. Esa es la razón estratégica de construir hacia la Etapa 3.
- **Implicación operativa desde hoy:** construir para ser **auditable y vendible** — métricas limpias, cohortes desde el día uno, ingresos recurrentes predecibles, código ordenado. (Por eso importa el tracking de datos desde ya.)

---

## 11. Comunicación de founders (LinkedIn, Twitter/X, Newsletter)

### 11.1 Estrategia
**Build in public + educación.** Diego y Néstor construyen audiencia contando el viaje de relanzar Tom y educando al mercado sobre DNIT, cobranza y PYMES paraguayas. Genera **distribución orgánica + confianza + inbound** sin costo de ads.

### 11.2 Reparto de voces
- **Diego (comercial/estrategia):** narrativa de negocio, GTM, aprendizajes de venta, cultura PYME paraguaya, decisiones estratégicas, hitos. Tono: mentor cercano, directo, sin humo.
- **Néstor (técnico):** cómo se construye Tom, IA aplicada, decisiones de producto/arquitectura, "cómo le metimos IA a la cobranza". Tono: builder, didáctico.

### 11.3 Plataformas
- **LinkedIn:** el más relevante para B2B en Paraguay/LatAm. Posts de aprendizajes, hitos, casos, opinión de mercado. 2–3/semana c/u.
- **Twitter/X:** build in public, hilos cortos, métricas, comunidad tech LatAm/global. Más informal.
- **Newsletter:** mensual o quincenal. "El detrás de escena de Tom" + valor para PYMES (tips de cobranza/impuestos). Construye lista propia (activo de marketing que no depende de algoritmos).

### 11.4 Pilares de contenido
1. **Educación PYME:** cobranza, flujo de caja, obligaciones DNIT (sin tecnicismos).
2. **Build in public:** métricas, decisiones, fracasos y aciertos del relanzamiento.
3. **Producto/IA:** cómo Tom resuelve problemas reales (con ejemplos/casos).
4. **Visión de categoría:** por qué el futuro es "asistente financiero con IA", no "facturador".
5. **Cliente al centro:** historias de PYMES paraguayas (testimonios, casos).

---

## 12. Publicidad paga (Instagram, Facebook, TikTok) — piso de prueba, no techo

### 12.1 Principio: presupuesto escalable por evidencia, no por límite arbitrario
- **Piso inicial:** ~Gs 5M en los primeros ~2 meses. Es el **ticket de entrada para probar ángulos y mensajes**, no el presupuesto total del año.
- **Lógica de escalado:** cualquier ángulo que muestre CAC payback < 8 meses se escala **3x al mes siguiente**, y si sigue funcionando, **5–10x al tercer mes**. *No hay techo arbitrario.* Si un canal funciona, recibe todo el capital que pueda absorber sin perder eficiencia.
- **Cuándo se justifica meter capital adicional (préstamo, inversor, reinversión total):** cuando 2+ ángulos muestren elasticidad sostenida (más plata = más clientes con CAC estable) durante al menos 2 meses. Eso es product-market fit publicitario.
- **Outcome > feature:** vender "cobrá lo que te deben" / "cumplí con la DNIT sin estrés", no "software de facturación".
- **Momento de dolor:** apuntar a obligados por la DNIT y a quienes sufren morosidad.
- **Creatividades nativas y locales:** video corto, paraguayo, mostrando a Tom "trabajando" (el asistente que cobra por vos).
- **WhatsApp como destino** (click-to-WhatsApp ads): el canal de venta natural y baja fricción.
- **Probar barato, escalar lo que funciona:** múltiples ángulos pequeños, doblar el ganador.

### 12.2 Por plataforma
- **Instagram/Facebook (Meta):** el caballo de batalla en Paraguay. Segmentar por intereses de negocio/emprendedores; click-to-WhatsApp; retargeting de visitantes de la web. La mayor parte del presupuesto inicial.
- **TikTok:** contenido educativo/entretenido (formato "POV: dejás de perseguir a tus clientes"), orgánico + algo de paga; bueno para alcance barato y marca con público joven emprendedor.
- **Retargeting:** a quienes visitaron la web o escribieron por WhatsApp y no cerraron.

### 12.3 Ángulos creativos a testear
1. Dolor de cobranza: "POV: son las 11pm y seguís mandando 'hola, ¿te acordás de la factura?'"
2. Miedo DNIT: "¿Estás obligado a facturar electrónicamente y no sabés por dónde empezar?"
3. Outcome/alivio: "Tom te dice quién te debe y le cobra por vos."
4. Asistente: "Tu nuevo empleado se llama Tom. Y trabaja 24/7 por Gs [x] al mes."
5. Contadores: "Tu contador + Tom = impuestos sin que muevas un dedo."

---

## 13. Roadmap de producto y de negocio

### 13.1 Fases del relanzamiento (producto)

> **Estimaciones honestas, no de marketing.** Asumen repo ordenado, entorno local de Diego funcionando, flujo Diego↔Néstor activo (§17), y trabajo dedicado de los dos. La realidad de software suele ser 1,5x lo estimado: el cuello de botella no es escribir código (Claude Code acelera eso 2–3x), es decidir qué hacer, integrar sin romper, aprobaciones de Meta para plantillas de WhatsApp, casos borde y soporte. Eso no se acelera con IA.

- **Fase 0 — Inteligencia y preparación (1–2 semanas, antes de código):**
   - Entrevistar a los 20 clientes (Diego); validar las capas de IA con su realidad; recoger testimonios.
   - Néstor sube el repo a GitHub, escribe el README, crea el entorno local para Diego, define la estrategia de ramas (ver §17).
- **Fase 1 — Cobranza inteligente (3–5 semanas):** scoring de comportamiento de pago, mensajes con IA, envío automatizado por WhatsApp, predicción de caja semanal. *Núcleo del nuevo Tom.* Incluye aprobación de plantillas en WhatsApp Business API (días de espera de Meta) y piloto con 2–3 clientes.
- **Fase 2 — Asistente conversacional WhatsApp (3–4 semanas):** preguntas + ejecución sobre la data ("¿cuánto facturé?", "mandá recordatorio a los que deben"). Lo técnico es razonable; lo complejo es el diseño conversacional, que requiere iteración con usuarios reales.
- **Fase 3 — Remarketing/reactivación (2–3 semanas):** feature premium. Se apoya en la infraestructura de las Fases 1 y 2.
- **Fase 4 — Mapa DNIT + contadores (en paralelo, 2–3 semanas):** recordatorios de obligaciones + conexión y comisión con contadores.
- **Fase 5 — Rebranding + landing nueva + pricing (en paralelo, 2–3 semanas):** *Lo difícil acá no es técnico, es decidir.* La identidad visual y los textos toman ~1 semana de iteración; la construcción técnica de la landing con Claude Code, 3–5 días; el resto, tests y ajustes. Puede arrancar en paralelo a las capas de IA porque no depende del backend.
- **Fase 6 — Relanzamiento comercial:** base instalada → contadores → contenido → ads.

**Estimación total realista hasta tener las 3 capas + landing en producción:**
- **En serie (una capa a la vez):** **3 a 4 meses**.
- **Con paralelismo inteligente** (Diego construye landing/Capa 2 mientras Néstor termina Capa 1, etc.): **2,5 a 3 meses**.

> **Disciplina de prioridad:** lo crítico de los primeros 3 meses **no es construir las capas de IA**. Son las 20 entrevistas, los primeros 3–5 contadores aliados, la validación de pricing y la narrativa con clientes reales. Si una semana solo se hicieran 5 entrevistas y nada de código, sería una semana excelente. Las horas no técnicas son tan críticas como las técnicas y son completamente de Diego — no se desplazan.

### 13.2 Evolución del SaaS (dirección de largo plazo)
1. **Hoy:** facturador con control de cobros.
2. **Etapa 1 (relanzamiento):** **asistente de facturación y cobranza con IA** — categoría propia.
3. **Etapa 2:** **capa de inteligencia de flujo de caja** — Tom *aconseja* (riesgo de clientes, proyección, descuentos por pronto pago). Con datos de muchas PYMES.
4. **Etapa 3 (la grande):** **cobros embebidos** — pagar desde el recordatorio (QR/link), conciliación automática, posible take-rate. Toca fintech con cuidado regulatorio. *De "te informo el cobro" a "muevo tu plata".*

> Dirección en una frase: **"te ayudo a facturar" → "te ayudo a cobrar" → "te ayudo a entender tu plata" → "muevo tu plata".** Cada paso se apoya en el anterior y en los datos ya generados. No saltar pasos.

### 13.3 Objetivos por horizonte
- **Trimestral (T1):** relanzar marca+web+pricing; migrar base a Pro/Max; 3–5 contadores activos; ads on; primeros testimonios; MRR ~Gs 9M.
- **Trimestral (T2):** canal contadores escalando; **contratar PO**; asistente y cobranza maduros; MRR ~Gs 21M.
- **Trimestral (T3):** remarketing maduro; 2º comercial; comisión contadores aportando; MRR ~Gs 43M.
- **Mediano plazo (12 meses):** SaaS rentable y en crecimiento acelerado; **MRR de salida ~Gs 45–57M** (~150–200 clientes); utilidad mensual de salida ~Gs 25–37M; NRR ≥ 100%; canal de contadores activo; base lista para cobros embebidos.
- **Largo plazo (3–5 años):** plataforma de cobranza/finanzas para PYMES; escalar a **~Gs 200–250M de MRR** para dejar **~Gs 100M de utilidad neta por mes** (~Gs 1.200M/año); **salida ~USD 4M+** (≈ USD 2M por socio). El salto de año 1 a esta meta se apoya en escalar contadores + comisión + **cobros embebidos** (take-rate).

---

## 14. Riesgos y cómo mitigarlos

| Riesgo | Por qué importa | Mitigación |
|---|---|---|
| **Falta de foco** (patrón histórico: "Tom nunca tuvo foco") | Mata el relanzamiento | Tratar Tom como proyecto principal 3+ meses; metas trimestrales; PO dedicado pronto |
| **Quedar como "facturador más"** | Guerra de precios perdida | Liderar con IA/cobranza y categoría nueva; pricing de otra categoría |
| **Distribución (cuello histórico)** | 20 clientes en 2 años por no vender | Motor comercial serio: contadores + contenido + ads + referidos |
| **Meta financiera vs costo de equipo** | El PO se come la utilidad | Contratación por gatillo de MRR; honestidad en el P&L |
| **Enamorarse de la IA y descuidar activación** | La activación humana es media venta | IA para cobrar + humano para activar |
| **Dependencia de WhatsApp (políticas/API)** | Canal central | Usar API oficial vía BSP; cumplir políticas; plantillas aprobadas |
| **Riesgo regulatorio (Etapa 3, cobros)** | Tocar dinero = regulación | Entrar a cobros embebidos con asesoría legal; no antes de tiempo |
| **Cambios normativos DNIT** | Afectan el núcleo | Mantener la integración actualizada (NT vigentes); es también barrera de entrada |
| **Sesgo de validación** (construir sin escuchar) | Construir lo que nadie paga | Validar cada capa con los 20 clientes y con contadores antes de escalar |
| **Tentación de atajos de distribución** (wrapper sobre competidores, endoso político) | Comprometen foso, independencia o marca | Decisiones tomadas en §9.4; preferir camino propio/legítimo; no reabrir bajo presión de crecer |

---

## 15. Cómo trabajar dentro de este proyecto (instrucciones para Claude)

1. **Leer este documento completo antes de cada respuesta** dentro del proyecto Tom.
2. **Coherencia obligatoria** con: la categoría ("asistente financiero con IA por WhatsApp"), los límites estratégicos (§3.5: no ERP, no ser API/infra para developers, no atención al cliente final), las **decisiones de alianzas y distribución (§9.4: no wrapper sobre competidores, no endoso político; DNIT solo para inteligencia regulatoria y homologación transparente)**, la voz de marca (§6), el pricing (§7) y los números del P&L (§10). *Nota: Tom SÍ tiene API propia contra la DNIT (es su foso); lo que se descarta es ofrecer Tom como API/infra para developers o como wrapper sobre otros facturadores.*
3. **Actuar como mentor, no como validador.** Contradecir cuando haga falta, explicar el porqué y proponer el camino correcto. Priorizar la verdad útil sobre la respuesta cómoda.
4. **Pragmatismo de operador:** velocidad, simplicidad, validación rápida, rentabilidad. Construir para vender en 3–5 años (auditable, métricas limpias).
5. **Contexto técnico (integrado en este documento, §1.1 y §17):** stack confirmado Node.js + React.js + MongoDB, integración propia y directa con SIFEN/DNIT, WhatsApp Business API directa, hosting en DigitalOcean. **No migrar el stack** (decisión en §1.1). Para prompts de Claude Code, este documento ya contiene todo lo necesario sobre arquitectura, flujo de trabajo (§17) y restricciones; los detalles finos de modelos de datos, variables de entorno y estructura del repo viven en el README del repositorio que Néstor prepara para Diego (§17.4), no en otro documento de contexto.
5b. **Flujo de trabajo:** respetar la separación de roles Diego↔Néstor (§17). Claude en claude.ai = cerebro estratégico (planeo, diseño, prompts, revisión). Claude Code en la máquina de Diego = manos sobre el repo real, en ramas separadas, vía Pull Requests a Néstor. Diego construye UI y prototipos funcionales; Néstor revisa y mergea. No promover atajos que salteen este flujo (ej: pedirle a Diego que "toque producción directo").
6. **Idioma y tono:** español rioplatense/paraguayo, cercano, claro, sin tecnicismos innecesarios (salvo en documentos técnicos).
7. **Datos del negocio (no inventar):** MRR ~Gs 4M, ~20 clientes, costos ~Gs 1M/mes, presupuesto ads ~Gs 5M/2 meses, 50/50 Diego (comercial) y Néstor (técnico). **Meta 12m:** MRR de salida ~Gs 45–57M (~150–200 clientes), utilidad mensual de salida ~Gs 25–37M. **Meta de salida (3–5 años):** ~Gs 100M de utilidad neta/mes y venta por ~USD 2M/socio. *No confundir el Gs 100M/mes con el año 1: es la meta de salida.* Si un dato no está aquí, preguntar o marcarlo pendiente.
8. **Mantener este documento actualizado:** cuando se tomen decisiones nuevas (marca final, pricing definitivo, datos técnicos, métricas reales), reflejarlas aquí o señalar que deben reflejarse.

---

## 16. Lista de pendientes / a completar

- [ ] **README técnico del repo** (mantenido por Néstor en GitHub): estructura del repo, modelo de datos en MongoDB, arquitectura de integración SIFEN, integración WhatsApp, deploys en DigitalOcean, variables de entorno, scripts. *Vive en el repo, no en un documento separado.*
- [ ] **Datos finos de clientes:** plan exacto de cada uno, MRR desglosado, antigüedad por cliente, rubro detallado.
- [ ] **Resultados de las 20 entrevistas** (Fase 0) → validación de capas de IA + testimonios.
- [ ] **Decisión de marca final:** identidad visual, paleta, tipografía, personaje/mascota (sí/no), tagline elegido.
- [ ] **Pricing definitivo:** validado con base instalada (test de upsell real).
- [ ] **Modelo de comisión con contadores:** % por suscripción referida y % por liquidación.
- [ ] **Setup de BSP de WhatsApp** (proveedor, costos, plantillas).
- [ ] **Tipo de cambio y números reales** para recalibrar el P&L.
- [ ] **Métricas base** (instrumentar tracking de cohortes/NRR/CAC desde el inicio del relanzamiento).
- [ ] **Setup del entorno local de Diego** (ver §17): repo en GitHub, README, branches, MongoDB de desarrollo, credenciales sandbox SIFEN/WhatsApp.

---

## 17. Cómo construimos Tom: flujo de trabajo Diego ↔ Néstor

Esta sección define **cómo se construye Tom día a día** entre los dos fundadores. Es tan importante como la estrategia, porque sin un flujo claro la velocidad cae a la mitad y aparece la fricción que históricamente bloqueó a Diego en otros proyectos.

### 17.1 El problema a resolver
Diego no es programador, pero **puede prototipar y construir features reales con Claude Code asistido por IA**. Néstor es el dueño técnico. El riesgo histórico que se busca evitar: pedidos comerciales que mueren con un "no se puede / es difícil / lleva mucho tiempo / lo dejamos para más adelante". La solución no es saltarse a Néstor; es **convertir los pedidos de Diego en código real y testeado que llega a Néstor 90% listo para revisar y mergear**, no en ideas verbales que él tiene que descifrar e implementar desde cero.

### 17.2 Arquitectura de herramientas (dos lugares, un solo código)

- **Claude en claude.ai (el cerebro estratégico).** Acá vive este documento de contexto y todos los documentos hermanos. Acá se planea, se debaten arquitecturas, se decide qué construir, se redactan prompts maestros, se revisa código y se razona sobre el negocio. Claude en claude.ai *no ejecuta código ni toca el repo*; es el copiloto de pensamiento.
- **Claude Code en la computadora de Diego (las manos ejecutoras).** Corre en la terminal local de Diego, conectado al repositorio real de Tom (clonado de GitHub). Lee, modifica y prueba el código real. No es un sandbox paralelo: **es el mismo código que Néstor mantiene en producción**, trabajado en una rama (branch) de Diego.

> **Aclaración clave:** Diego *no* tiene un "repo paralelo de juguete". Trabaja sobre el repo real de Tom, en su propia rama de Git, en su máquina local, contra una base de datos MongoDB de desarrollo (separada de producción). Cuando termina, abre un Pull Request a Néstor, quien revisa, ajusta y mergea a producción. Esto cumple el objetivo de Diego: *exportar código que ya esté 90% listo para que Néstor lo suba a producción*, no un prototipo paralelo que haya que reescribir.

### 17.3 Roles claros (y por qué importa respetarlos)
- **Néstor — dueño técnico (producción).** Mantiene la rama `main`, define arquitectura, revisa todos los PRs antes de mergear, decide qué pasa a producción, cuida la integración con SIFEN y la deuda técnica. Es el guardián del código que ven los clientes.
- **Diego — dueño del problema del cliente y de la experiencia (UI/UX).** Su ventaja diferencial está en entender al cliente, diseñar la usabilidad, simplificar la plataforma, y traducir el dolor del mercado en flujos concretos. **Construye prototipos funcionales en su propia rama** sobre el repo real, prueba con clientes (o pre-clientes), y le pasa el código a Néstor vía PR.
- **Regla de oro:** un PR de Diego es **una pregunta funcional**, no una orden técnica. La conversación es *"acá está cómo se ve, ¿qué te preocupa específicamente?"*, no *"hacelo así"*. Néstor puede aceptar el código, modificarlo, o rechazarlo con una alternativa. Si Diego cruza esa línea, mata la sociedad 50/50. Si la respeta, la sociedad es 3x más productiva que cualquier otra alternativa.

> **Advertencia honesta:** a veces Néstor va a tener razón cuando diga "esto rompe X". La resistencia técnica no es siempre desidia; a veces es contexto que Diego no ve (deuda técnica que va a explotar, integración frágil, caso borde que pierde un cliente). El flujo no elimina esa tensión; la *traslada* a un nivel mucho mejor: en vez de discutir verbalmente sobre un feature imaginario, discuten sobre código concreto que se puede ver y ajustar.

### 17.4 Lo que Néstor necesita preparar (una sola vez, ~medio día)

1. **Subir el código de Tom a un repositorio privado en GitHub** (si todavía no está) y dar acceso de colaborador a Diego.
2. **Escribir un `README.md` en la raíz** que explique:
   - Qué hace el proyecto en dos líneas.
   - Cómo levantarlo localmente paso a paso (versión de Node, instalar MongoDB local o usar Atlas, comandos `npm install`, `npm run dev`, etc.).
   - Qué variables de entorno necesita y qué hace cada una.
   - Estructura de carpetas: backend, frontend, modelos, integraciones SIFEN y WhatsApp.
   - Cómo correr los tests si los hay.
3. **Crear un archivo `.env.example`** con los nombres de las variables de entorno (sin valores reales). Pasarle los valores a Diego por canal privado, no por GitHub.
4. **Configurar un MongoDB de desarrollo separado para Diego** (cluster gratuito en MongoDB Atlas, o local). *Crítico: Diego nunca se conecta a la base de producción.*
5. **Configurar credenciales sandbox** para SIFEN (si la DNIT ofrece entorno de testing) y WhatsApp; o documentar qué partes funcionan sin esas integraciones.
6. **Definir la estrategia de ramas en Git** con Diego:
   - `main` o `production` → solo Néstor, código que ven los clientes.
   - `diego/<feature>` → ramas de Diego para cada feature (ej. `diego/cobranza-ia`, `diego/landing-rebranding`).
   - Pull Requests de Diego → revisión de Néstor → merge a `main`.

### 17.5 El flujo de un feature, paso a paso

1. **Conversación con clientes (Diego, 1–3 días).** Diego habla con 3+ clientes/pre-clientes sobre un dolor concreto. Ejemplo: "los recordatorios de cobranza no me sirven porque mando el mismo mensaje a todos".
2. **Diseño del feature (Diego + Claude en claude.ai, ~1 hora).** Diego trae el problema acá y conversamos: cómo se vería el flujo, qué pantallas/lógica necesita, qué impacto tiene sobre la data existente. Salen: una descripción clara del feature, un prompt maestro para Claude Code, y eventuales mockups en texto.
3. **Implementación (Diego + Claude Code en su rama, 2 horas a 3 días según el feature).** Diego abre su rama, levanta Claude Code apuntando al repo, le pasa el prompt maestro y construye el feature respetando la arquitectura de Tom. Prueba en su entorno local. Muestra el resultado funcionando a 1–2 clientes para validar.
4. **Pull Request a Néstor.** Diego abre un PR con: descripción del problema del cliente, decisión de producto, capturas/video del feature funcionando, y el código. Néstor revisa, comenta, sugiere ajustes técnicos o de arquitectura.
5. **Iteración (entre los dos).** Diego ajusta lo que Néstor pide en su propia rama. Si hay decisiones técnicas que no llega a hacer solo, las pasamos por Claude en claude.ai y Diego las aplica con Claude Code.
6. **Merge y deploy (Néstor).** Cuando el PR está aprobado, Néstor lo mergea a `main` y deploya a DigitalOcean. El feature está en producción.

> **Objetivo del flujo:** que el PR de Diego llegue a Néstor con el código **90% listo**. Néstor invierte el 10% restante en lo que solo él puede hacer (arquitectura, casos borde, seguridad), no en reescribir todo desde una idea verbal. *Eso es lo que multiplica la velocidad.*

### 17.6 Donde Diego tiene ventaja real (y donde NO)

**Ventaja real de Diego (su frente de batalla):**
- **UI/UX y usabilidad.** Diseñar pantallas simples, jerarquía visual clara, flujos que no requieran explicación.
- **Landing pages y copywriting** dentro del producto (mensajes de onboarding, microcopy de botones, tono de Tom).
- **Prototipos rápidos** de features nuevos para validar con clientes antes de invertir tiempo de Néstor.
- **Traducir conversaciones con clientes en decisiones de producto** (qué simplificar, qué eliminar, qué priorizar).

**Donde Diego NO compite con Néstor (y debe respetarlo):**
- Arquitectura de backend, seguridad, performance.
- Integración con SIFEN (el foso técnico) — Diego puede tocar UI alrededor, pero no la lógica fiscal.
- Decisiones sobre el modelo de datos en MongoDB.
- Deploys, infraestructura, escalabilidad.
- Manejo de deuda técnica.

### 17.7 Una verdad incómoda sobre la IA y el desarrollo
Claude Code acelera la *implementación* de código en 2–3x. Pero **no acelera** la decisión de qué construir, la conversación con clientes, la aprobación de plantillas en WhatsApp Business API, los casos borde, ni el soporte a primeros usuarios. La IA baja la curva de "escribir el código" — no la curva de "hacer producto bien hecho". Por eso las estimaciones del roadmap (§13) son realistas y no eufóricas: incluyen todo lo que Claude Code no acelera.

Además, sobre UI: **el mejor UI no se descubre con Claude Code; se descubre hablando con clientes.** Claude Code lo *implementa*. Las 20 entrevistas y observar a clientes reales usando Tom son lo que hace el UI excepcional. Después la herramienta lo construye. No enamorarse de la herramienta antes que de la fuente.

---

*Fin del documento maestro de contexto. Versión viva — actualizar a medida que el proyecto avanza.*

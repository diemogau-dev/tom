// ⚠️ EDITAR ACÁ: número de WhatsApp de Tom (sin "+", sin espacios).
// ATENCIÓN: al ser un sitio estático, este número queda visible en el navegador de todos los visitantes.
// No lo commitees en GitHub; usá una variable de entorno de Vercel con un build step si querés ocultarlo del repo.
const WHATSAPP_NUMBER = "595981625546";

// Mensajes pre-cargados por contexto
const WHATSAPP_MESSAGES = {
  default: "Hola Tom, quiero probarlo en mi negocio.",
  base: "Hola Tom, me interesa el plan Base.",
  pro: "Hola Tom, quiero Tom Pro.",
  max: "Hola Tom, quiero Tom Max.",
  contador: "Soy contador, quiero saber más.",
  liquidacion: "Hola Tom, quiero liquidar mis impuestos con un contador aliado.",
  demo: "Hola Tom, quiero una demo de 10 minutos.",
};

function waLink(key) {
  const msg = WHATSAPP_MESSAGES[key] || WHATSAPP_MESSAGES.default;
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(msg)}`;
}

document.addEventListener("DOMContentLoaded", () => {
  document.querySelectorAll("[data-wa]").forEach((el) => {
    el.setAttribute("href", waLink(el.dataset.wa));
    el.setAttribute("target", "_blank");
    el.setAttribute("rel", "noopener");
  });
});

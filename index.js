/* empty css                      */(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const t of e)if(t.type==="childList")for(const n of t.addedNodes)n.tagName==="LINK"&&n.rel==="modulepreload"&&s(n)}).observe(document,{childList:!0,subtree:!0});function r(e){const t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?t.credentials="include":e.crossOrigin==="anonymous"?t.credentials="omit":t.credentials="same-origin",t}function s(e){if(e.ep)return;e.ep=!0;const t=r(e);fetch(e.href,t)}})();document.querySelectorAll(".faq-acc-el-trigger").forEach(c=>{c.addEventListener("click",()=>{const o=c.closest(".faq-acc-el"),r=o.querySelector(".faq-acc-el-descr-frame"),s=c.querySelector("svg"),e=o.classList.contains("open"),t=`
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M14 6V22" stroke="#F4A93D" stroke-width="2" stroke-linecap="round" />
  <path d="M22 14L6 14" stroke="#F4A93D" stroke-width="2" stroke-linecap="round" />
</svg>`,n=`
<svg width="28" height="28" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M22 14L6 14" stroke="#F4A93D" stroke-width="2" stroke-linecap="round" />
</svg>`;e?(o.classList.remove("open"),r.style.maxHeight="0",s.outerHTML=t):(o.classList.add("open"),r.style.maxHeight=r.scrollHeight+"px",s.outerHTML=n)})});
//# sourceMappingURL=index.js.map

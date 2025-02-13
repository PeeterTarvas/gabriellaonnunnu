(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))r(e);new MutationObserver(e=>{for(const i of e)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function s(e){const i={};return e.integrity&&(i.integrity=e.integrity),e.referrerPolicy&&(i.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?i.credentials="include":e.crossOrigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(e){if(e.ep)return;e.ep=!0;const i=s(e);fetch(e.href,i)}})();function c(n){let t=0;const s=r=>{t=r,n.innerHTML=`count is ${t}`};n.addEventListener("click",()=>s(t+1)),s(0)}document.querySelector("#app").innerHTML=`
    <div class="card">
        <h1 class="title">Kena sõbrapäeva nunnu,
         armastan sind hästi hästi palju ja igatsen sind väga!
          Musi :*, Sinu beebsu
         </h1>
        <div class="image-grid">
            <div class="animation">
                <img src="/images/cat-01.gif" class="cat img-fluid">
            </div>
            <div class="animation">
                <img src="/images/gabriellaonnuunnu1.jpg" class="cat img-fluid">
            </div>
            <div class="animation">
                <img src="/images/gabriellaonnuunnu2.jpg" class="cat img-fluid">
            </div>
            <div class="animation">
                <img src="/images/gabriellaonnuunnu3.jpg" class="cat img-fluid">
            </div>
        </div>
    </div>
`;c(document.querySelector("#counter"));

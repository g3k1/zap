async function d(n){return new Promise(t=>{if(chrome!=null&&chrome.storage)chrome.storage.local.get(n,e=>{try{const o=JSON.parse(e[n]);t(o)}catch{t(e[n])}});else{const e=localStorage.getItem(n);try{const o=JSON.parse(e);t(o)}catch{t(e)}}})}async function y(){return await d("nmb")}let u;const i=new Uint8Array(16);function m(){if(!u&&(u=typeof crypto<"u"&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto),!u))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return u(i)}const c=[];for(let n=0;n<256;++n)c.push((n+256).toString(16).slice(1));function g(n,t=0){return(c[n[t+0]]+c[n[t+1]]+c[n[t+2]]+c[n[t+3]]+"-"+c[n[t+4]]+c[n[t+5]]+"-"+c[n[t+6]]+c[n[t+7]]+"-"+c[n[t+8]]+c[n[t+9]]+"-"+c[n[t+10]]+c[n[t+11]]+c[n[t+12]]+c[n[t+13]]+c[n[t+14]]+c[n[t+15]]).toLowerCase()}const p=typeof crypto<"u"&&crypto.randomUUID&&crypto.randomUUID.bind(crypto),a={randomUUID:p};function s(n,t,e){if(a.randomUUID&&!t&&!n)return a.randomUUID();n=n||{};const o=n.random||(n.rng||m)();if(o[6]=o[6]&15|64,o[8]=o[8]&63|128,t){e=e||0;for(let r=0;r<16;++r)t[e+r]=o[r];return t}return g(o)}export{y as a,d as g,s as v};

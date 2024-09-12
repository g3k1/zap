import{s as w,a as T,b as x,e as C,d as I,c as N,f as M}from"./chunk-971f66c7.js";import{u as v,g as y}from"./chunk-61361a5e.js";import{g as u,v as P,a as b}from"./chunk-37259eac.js";import{g as E}from"./chunk-75e1c25d.js";async function F(){const e="deviceId",t=await u(e);if(!t){const r=P();return await w({[e]:r}),r}return t}const D="/static/js/chunk-a6f853b2.js",O=`#main{position:relative!important;height:calc(100% - 48px)}:not(.zvWithShortcuts)>#main{height:100%!important}
`,U=["contains","not_contains","starts","equals"];function V({keywordRules:e,message:t,ignoreCaseSensitive:r=!1}){if(!t||typeof t!="string"||Array.isArray(e)===!1||!e||e.length===0)return!1;if(e.some(({type:s})=>Object.values(U).includes(s)===!1))return console.error("Alguma keywordRule tem um type inv\xE1lido",e),!1;if(e.some(({keywords:s})=>Array.isArray(s)===!1||!s||s.length===0||s.some(a=>typeof a!="string")))return console.error("Alguma keywordRule tem um array de keywords inv\xE1lido",e),!1;const n=r?String(t).toLowerCase():t;return e.every(({keywords:s,type:a})=>{const o=s.map(i=>r?String(i).toLowerCase():i);return H({type:a,keywords:o,message:n})})}function H({type:e,keywords:t,message:r}){switch(e){case"equals":return t&&t.some(n=>n.trim()===r.trim());case"contains":return t&&t.some(n=>r.trim().includes(n.trim()));case"not_contains":return t&&t.every(n=>!r.trim().includes(n.trim()));case"starts":return t&&t.some(n=>r.trim().substring(0,n.trim().length)===n.trim());default:return!1}}async function _(){return await u("flags")}async function W(){var e;return(e=await u(v.storedName))!=null?e:[]}async function Y(e){try{await w({[v.storedName]:JSON.stringify(e)})}catch(t){console.error("Error setting item on storage:",t)}}const K=3e4,j=6e4,R=100;function B(e,t){const r=e.filter(a=>!a.synced).sort((a,o)=>a.timestamp-o.timestamp),n=r.slice(0,t),s=r.length-n.length;return{hitsToSync:n,remainingHitsAmount:s}}async function X(e,t){const r=await T(),n=await x(),s=await b(),a=String(r).toLowerCase().trim(),o=await F();if((await fetch(C.VITE_KAFKA_USAGE_URL,{method:"POST",headers:{Accept:"application/json","Content-Type":"application/json"},body:JSON.stringify({hitsToSync:e,remainingHitsAmount:t,deviceId:o,formattedKey:a,whatsappVersion:n,phoneNumber:String(s),extensionId:chrome!=null&&chrome.runtime?chrome.runtime.id:"localExtensionId"})})).status>=400)throw new Error("Error syncing usage hits")}function q({hitsToSync:e,savedHits:t}){const r=e.map(n=>n.id);return t.map(n=>r.includes(n.id)?{...n,synced:!0}:n)}async function S(){var n,s;const e=await _(),t=((n=e==null?void 0:e.usageMonitorSettings)==null?void 0:n.min_delay)||K,r=((s=e==null?void 0:e.usageMonitorSettings)==null?void 0:s.max_delay)||j;setTimeout(A,y(t,r))}async function A(){var a;const e=await _();if((e==null?void 0:e.usageMonitor)!==!0){S();return}const t=await W();if(t.length===0){S();return}const r=((a=e.usageMonitorSettings)==null?void 0:a.max_hits_per_request)||R,{hitsToSync:n,remainingHitsAmount:s}=B(t,r);if(n.length===0){S();return}try{await X(n,s);const o=q({savedHits:t,hitsToSync:n});await Y(o)}catch(o){console.error("Error syncing usage hits:",o)}S()}function G(){A()}function J(){var e=navigator.userAgent.match(/Chrom(e|ium)\/([0-9]+)./);return e?parseInt(e[2],10):1/0}chrome.runtime.onInstalled.addListener(e=>{(e.reason==="install"||e.reason==="update")&&E().then(t=>{t!=null&&t.id?chrome.tabs.reload(t.id):chrome.tabs.create({url:"https://web.whatsapp.com",active:!0})})});chrome.runtime.onMessage.addListener(({type:e,data:t},r,n)=>{var s,a;if(e==="WPPInit"){let o=function(i){J()>=102&&chrome.scripting.executeScript({files:[D],target:{tabId:i,allFrames:!0},world:"MAIN"}),chrome.scripting.insertCSS({css:O,target:{tabId:i,allFrames:!0}})};(s=r.tab)!=null&&s.id?o(r.tab.id):E(!0).then(i=>{i!=null&&i.id&&o(i.id)})}else if(e==="WPPLoaded"&&((a=r.origin)==null?void 0:a.includes("https://web.whatsapp.com"))){const{nmb:o,wppVersion:i}=t;i&&w({wppVersion:i}),o&&w({nmb:o}),n({ZVExtensionId:I});const h=chrome!=null&&chrome.runtime?chrome.runtime.getManifest():{version_name:"Local Development",version:"Local Development"},p=h.version_name||h.version,l=new URLSearchParams;p&&l.append("version",p),o&&l.append("nmb",o),i&&l.append("wppVersion",i),l.append("extensionId",I),chrome.runtime.setUninstallURL(`https://zapvoice.com.br/uninstall-page?${l.toString()}`)}});const L=async({type:e,data:t},r,n)=>{var s,a,o,i,h,p,l;if(!(!((s=r.url)!=null&&s.includes("web.whatsapp.com"))||e!=="checkTriggersShouldFireByMessage"&&e!=="getIndexesFromStorage"&&e!=="getSmallItemFromStorage"&&e!=="checkPremium"&&e!=="getFlags"&&e!=="saveValidOnStorage"&&e!=="openOptionsPage"&&e!=="newChat")){if(e==="checkPremium")try{const{premium:m,data:d,number_warning:f}=await N();n({type:e,response:{premium:m,data:d,number_warning:f}})}catch(m){n({type:e,response:{premium:!1,data:m.toString(),number_warning:!1}})}else if(e==="saveValidOnStorage")await M();else if(e==="getIndexesFromStorage"){const m=(a=await u("audiosIndex"))!=null?a:[],d=(o=await u("mensagensIndex"))!=null?o:[],f=(i=await u("mediasIndex"))!=null?i:[],g=(h=await u("docsIndex"))!=null?h:[],c=(p=await u("funis"))!=null?p:[];n({type:e,response:{mensagensIndex:d,audiosIndex:m,mediasIndex:f,docsIndex:g,funis:c}})}else if(e==="getSmallItemFromStorage"){const{id:m}=t,d=await u(m);n({type:e,response:{item:d}})}else if(e==="checkTriggersShouldFireByMessage"){const m=(l=await u("triggers"))!=null?l:[],{message:d}=t,f=m.reduce((g,c)=>(!!c.funnelId&&!!c.enabled&&!!c.keywordRules&&c.keywordRules.length>0&&V({message:d,keywordRules:c.keywordRules,ignoreCaseSensitive:!!c.ignoreCaseSensitive})&&g.push({triggerId:c.id,funnelId:c.funnelId,secondsBeforeSend:c.secondsBeforeSend,name:c.name,dontSendToContact:!!c.dontSendToContact,dontSendToGroups:!!c.dontSendToGroups}),g),[]);n({type:e,response:f})}else if(e==="getFlags"){const m=await _();n({type:e,response:m})}else if(e==="openOptionsPage")chrome.runtime.openOptionsPage(),n({type:e,Response:{}});else if(e==="newChat"){const{phone:m,name:d,operatorPhone:f}=t,g=await u("newChatWebhook");if(g){try{await fetch(g,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({phone:m,name:d,operatorPhone:f})})}catch{}n({type:e})}}}};chrome.runtime.onMessage.addListener(L);chrome.runtime.onMessageExternal.addListener(L);chrome.runtime.onUpdateAvailable.addListener(()=>{chrome.runtime.reload()});G();

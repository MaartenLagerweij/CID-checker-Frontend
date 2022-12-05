import{S as We,i as Ye,s as Xe,a as Ze,e as B,c as Qe,b as z,g as le,t as F,d as ce,f as J,h as G,j as xe,o as be,k as et,l as tt,m as nt,n as ye,p as q,q as rt,r as at,u as st,v as H,w as Se,x as W,y as Y,z as Ce}from"./chunks/index-a3e7e3a5.js";import{g as Be,f as Fe,s as K,a as ve,b as ot,i as it}from"./chunks/singletons-5caa45c3.js";function lt(r,e){return r==="/"||e==="ignore"?r:e==="never"?r.endsWith("/")?r.slice(0,-1):r:e==="always"&&!r.endsWith("/")?r+"/":r}function ct(r){for(const e in r)r[e]=r[e].replace(/%23/g,"#").replace(/%3[Bb]/g,";").replace(/%2[Cc]/g,",").replace(/%2[Ff]/g,"/").replace(/%3[Ff]/g,"?").replace(/%3[Aa]/g,":").replace(/%40/g,"@").replace(/%26/g,"&").replace(/%3[Dd]/g,"=").replace(/%2[Bb]/g,"+").replace(/%24/g,"$");return r}const ft=["href","pathname","search","searchParams","toString","toJSON"];function ut(r,e){const t=new URL(r);for(const o of ft){let s=t[o];Object.defineProperty(t,o,{get(){return e(),s},enumerable:!0,configurable:!0})}return t[Symbol.for("nodejs.util.inspect.custom")]=(o,s,l)=>l(r,s),pt(t),t}function pt(r){Object.defineProperty(r,"hash",{get(){throw new Error("Cannot access event.url.hash. Consider using `$page.url.hash` inside a component instead")}})}function dt(r){let e=5381;if(typeof r=="string"){let t=r.length;for(;t;)e=e*33^r.charCodeAt(--t)}else if(ArrayBuffer.isView(r)){const t=new Uint8Array(r.buffer,r.byteOffset,r.byteLength);let o=t.length;for(;o;)e=e*33^t[--o]}else throw new TypeError("value must be a string or TypedArray");return(e>>>0).toString(36)}const fe=window.fetch;window.fetch=(r,e)=>{if((r instanceof Request?r.method:(e==null?void 0:e.method)||"GET")!=="GET"){const o=new URL(r instanceof Request?r.url:r.toString(),document.baseURI).href;ie.delete(o)}return fe(r,e)};const ie=new Map;function ht(r,e,t){let s=`script[data-sveltekit-fetched][data-url=${JSON.stringify(r instanceof Request?r.url:r)}]`;(t==null?void 0:t.body)&&(typeof t.body=="string"||ArrayBuffer.isView(t.body))&&(s+=`[data-hash="${dt(t.body)}"]`);const l=document.querySelector(s);if(l!=null&&l.textContent){const{body:n,...f}=JSON.parse(l.textContent),h=l.getAttribute("data-ttl");return h&&ie.set(e,{body:n,init:f,ttl:1e3*Number(h)}),Promise.resolve(new Response(n,f))}return fe(r,t)}function mt(r,e){const t=ie.get(r);if(t){if(performance.now()<t.ttl)return new Response(t.body,t.init);ie.delete(r)}return fe(r,e)}const gt=/^(\.\.\.)?(\w+)(?:=(\w+))?$/;function _t(r){const e=[],t=[];let o=!0;return{pattern:r===""?/^\/$/:new RegExp(`^${r.split(/(?:\/|$)/).filter(yt).map((l,n,f)=>{const h=decodeURIComponent(l),d=/^\[\.\.\.(\w+)(?:=(\w+))?\]$/.exec(h);if(d)return e.push(d[1]),t.push(d[2]),"(?:/(.*))?";const _=n===f.length-1;return h&&"/"+h.split(/\[(.+?)\]/).map((w,S)=>{if(S%2){const U=gt.exec(w);if(!U)throw new Error(`Invalid param: ${w}. Params and matcher names can only have underscores and alphanumeric characters.`);const[,D,V,T]=U;return e.push(V),t.push(T),D?"(.*?)":"([^/]+?)"}return _&&w.includes(".")&&(o=!1),w.normalize().replace(/%5[Bb]/g,"[").replace(/%5[Dd]/g,"]").replace(/#/g,"%23").replace(/\?/g,"%3F").replace(/[.*+?^${}()|[\]\\]/g,"\\$&")}).join("")}).join("")}${o?"/?":""}$`),names:e,types:t}}function yt(r){return!/^\([^)]+\)$/.test(r)}function wt(r,e,t,o){const s={};for(let l=0;l<e.length;l+=1){const n=e[l],f=t[l],h=r[l+1]||"";if(f){const d=o[f];if(!d)throw new Error(`Missing "${f}" param matcher`);if(!d(h))return}s[n]=h}return s}function bt(r,e,t,o){const s=new Set(e);return Object.entries(t).map(([f,[h,d,_]])=>{const{pattern:w,names:S,types:U}=_t(f),D={id:f,exec:V=>{const T=w.exec(V);if(T)return wt(T,S,U,o)},errors:[1,..._||[]].map(V=>r[V]),layouts:[0,...d||[]].map(n),leaf:l(h)};return D.errors.length=D.layouts.length=Math.max(D.errors.length,D.layouts.length),D});function l(f){const h=f<0;return h&&(f=~f),[h,r[f]]}function n(f){return f===void 0?f:[s.has(f),r[f]]}}function vt(r){let e,t,o;var s=r[0][0];function l(n){return{props:{data:n[2],form:n[1]}}}return s&&(e=new s(l(r))),{c(){e&&H(e.$$.fragment),t=B()},l(n){e&&Se(e.$$.fragment,n),t=B()},m(n,f){e&&W(e,n,f),z(n,t,f),o=!0},p(n,f){const h={};if(f&4&&(h.data=n[2]),f&2&&(h.form=n[1]),s!==(s=n[0][0])){if(e){le();const d=e;F(d.$$.fragment,1,0,()=>{Y(d,1)}),ce()}s?(e=new s(l(n)),H(e.$$.fragment),J(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else s&&e.$set(h)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&F(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&Y(e,n)}}}function Et(r){let e,t,o;var s=r[0][0];function l(n){return{props:{data:n[2],$$slots:{default:[kt]},$$scope:{ctx:n}}}}return s&&(e=new s(l(r))),{c(){e&&H(e.$$.fragment),t=B()},l(n){e&&Se(e.$$.fragment,n),t=B()},m(n,f){e&&W(e,n,f),z(n,t,f),o=!0},p(n,f){const h={};if(f&4&&(h.data=n[2]),f&523&&(h.$$scope={dirty:f,ctx:n}),s!==(s=n[0][0])){if(e){le();const d=e;F(d.$$.fragment,1,0,()=>{Y(d,1)}),ce()}s?(e=new s(l(n)),H(e.$$.fragment),J(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else s&&e.$set(h)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&F(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&Y(e,n)}}}function kt(r){let e,t,o;var s=r[0][1];function l(n){return{props:{data:n[3],form:n[1]}}}return s&&(e=new s(l(r))),{c(){e&&H(e.$$.fragment),t=B()},l(n){e&&Se(e.$$.fragment,n),t=B()},m(n,f){e&&W(e,n,f),z(n,t,f),o=!0},p(n,f){const h={};if(f&8&&(h.data=n[3]),f&2&&(h.form=n[1]),s!==(s=n[0][1])){if(e){le();const d=e;F(d.$$.fragment,1,0,()=>{Y(d,1)}),ce()}s?(e=new s(l(n)),H(e.$$.fragment),J(e.$$.fragment,1),W(e,t.parentNode,t)):e=null}else s&&e.$set(h)},i(n){o||(e&&J(e.$$.fragment,n),o=!0)},o(n){e&&F(e.$$.fragment,n),o=!1},d(n){n&&G(t),e&&Y(e,n)}}}function Je(r){let e,t=r[5]&&Ge(r);return{c(){e=et("div"),t&&t.c(),this.h()},l(o){e=tt(o,"DIV",{id:!0,"aria-live":!0,"aria-atomic":!0,style:!0});var s=nt(e);t&&t.l(s),s.forEach(G),this.h()},h(){ye(e,"id","svelte-announcer"),ye(e,"aria-live","assertive"),ye(e,"aria-atomic","true"),q(e,"position","absolute"),q(e,"left","0"),q(e,"top","0"),q(e,"clip","rect(0 0 0 0)"),q(e,"clip-path","inset(50%)"),q(e,"overflow","hidden"),q(e,"white-space","nowrap"),q(e,"width","1px"),q(e,"height","1px")},m(o,s){z(o,e,s),t&&t.m(e,null)},p(o,s){o[5]?t?t.p(o,s):(t=Ge(o),t.c(),t.m(e,null)):t&&(t.d(1),t=null)},d(o){o&&G(e),t&&t.d()}}}function Ge(r){let e;return{c(){e=rt(r[6])},l(t){e=at(t,r[6])},m(t,o){z(t,e,o)},p(t,o){o&64&&st(e,t[6])},d(t){t&&G(e)}}}function Rt(r){let e,t,o,s,l;const n=[Et,vt],f=[];function h(_,w){return _[0][1]?0:1}e=h(r),t=f[e]=n[e](r);let d=r[4]&&Je(r);return{c(){t.c(),o=Ze(),d&&d.c(),s=B()},l(_){t.l(_),o=Qe(_),d&&d.l(_),s=B()},m(_,w){f[e].m(_,w),z(_,o,w),d&&d.m(_,w),z(_,s,w),l=!0},p(_,[w]){let S=e;e=h(_),e===S?f[e].p(_,w):(le(),F(f[S],1,1,()=>{f[S]=null}),ce(),t=f[e],t?t.p(_,w):(t=f[e]=n[e](_),t.c()),J(t,1),t.m(o.parentNode,o)),_[4]?d?d.p(_,w):(d=Je(_),d.c(),d.m(s.parentNode,s)):d&&(d.d(1),d=null)},i(_){l||(J(t),l=!0)},o(_){F(t),l=!1},d(_){f[e].d(_),_&&G(o),d&&d.d(_),_&&G(s)}}}function St(r,e,t){let{stores:o}=e,{page:s}=e,{components:l}=e,{form:n}=e,{data_0:f=null}=e,{data_1:h=null}=e;xe(o.page.notify);let d=!1,_=!1,w=null;return be(()=>{const S=o.page.subscribe(()=>{d&&(t(5,_=!0),t(6,w=document.title||"untitled page"))});return t(4,d=!0),S}),r.$$set=S=>{"stores"in S&&t(7,o=S.stores),"page"in S&&t(8,s=S.page),"components"in S&&t(0,l=S.components),"form"in S&&t(1,n=S.form),"data_0"in S&&t(2,f=S.data_0),"data_1"in S&&t(3,h=S.data_1)},r.$$.update=()=>{r.$$.dirty&384&&o.page.set(s)},[l,n,f,h,d,_,w,o,s]}class Ot extends We{constructor(e){super(),Ye(this,e,St,Rt,Xe,{stores:7,page:8,components:0,form:1,data_0:2,data_1:3})}}const Lt=function(){const e=document.createElement("link").relList;return e&&e.supports&&e.supports("modulepreload")?"modulepreload":"preload"}(),It=function(r,e){return new URL(r,e).href},Ke={},Q=function(e,t,o){return!t||t.length===0?e():Promise.all(t.map(s=>{if(s=It(s,o),s in Ke)return;Ke[s]=!0;const l=s.endsWith(".css"),n=l?'[rel="stylesheet"]':"";if(document.querySelector(`link[href="${s}"]${n}`))return;const f=document.createElement("link");if(f.rel=l?"stylesheet":Lt,l||(f.as="script",f.crossOrigin=""),f.href=s,document.head.appendChild(f),l)return new Promise((h,d)=>{f.addEventListener("load",h),f.addEventListener("error",()=>d(new Error(`Unable to preload CSS for ${s}`)))})})).then(()=>e())},$t={},ue=[()=>Q(()=>import("./chunks/0-cb6265d2.js"),["chunks/0-cb6265d2.js","chunks/_layout-3a8bd00f.js","chunks/firestore-6e6d4b9b.js","chunks/singletons-5caa45c3.js","chunks/index-8008ec97.js","chunks/index-a3e7e3a5.js","chunks/store-491c53bf.js","components/pages/_layout.svelte-3d09b6e0.js","assets/_layout-3ca53fd5.css","assets/style-b883f9fd.css","chunks/stores-376aa3c8.js"],import.meta.url),()=>Q(()=>import("./chunks/1-f12760ef.js"),["chunks/1-f12760ef.js","components/error.svelte-010e0196.js","chunks/index-a3e7e3a5.js","chunks/stores-376aa3c8.js","chunks/singletons-5caa45c3.js","chunks/index-8008ec97.js"],import.meta.url),()=>Q(()=>import("./chunks/2-0a1f4dc5.js"),["chunks/2-0a1f4dc5.js","chunks/_page-2d8a7792.js","components/pages/_page.svelte-26172dd8.js","assets/_page-4de87923.css","assets/style-b883f9fd.css","chunks/index-a3e7e3a5.js","chunks/index-c8b6d230.js","chunks/firestore-6e6d4b9b.js","chunks/store-491c53bf.js","chunks/index-8008ec97.js"],import.meta.url),()=>Q(()=>import("./chunks/3-97a61dec.js"),["chunks/3-97a61dec.js","components/pages/link-replacer/_page.svelte-9e09b14a.js","assets/_page-eec35fa7.css","chunks/index-a3e7e3a5.js","chunks/index-c8b6d230.js"],import.meta.url),()=>Q(()=>import("./chunks/4-b104fa86.js"),["chunks/4-b104fa86.js","components/pages/login/_page.svelte-b90e2794.js","assets/_page-39dc2e22.css","chunks/index-a3e7e3a5.js","chunks/firestore-6e6d4b9b.js","chunks/index-c8b6d230.js"],import.meta.url)],jt=[],At={"":[2],"link-replacer":[3],login:[4]},Nt={handleError:({error:r})=>{console.error(r)}};class Ee{constructor(e,t){this.status=e,typeof t=="string"?this.body={message:t}:t?this.body=t:this.body={message:`Error: ${e}`}}toString(){return JSON.stringify(this.body)}}class ze{constructor(e,t){this.status=e,this.location=t}}const Pt="/__data.json";async function Ut(r){var e;for(const t in r)if(typeof((e=r[t])==null?void 0:e.then)=="function")return Object.fromEntries(await Promise.all(Object.entries(r).map(async([o,s])=>[o,await s])));return r}Object.getOwnPropertyNames(Object.prototype).sort().join("\0");Object.getOwnPropertyNames(Object.prototype).sort().join("\0");const Tt=-1,Dt=-2,Vt=-3,qt=-4,Ct=-5,Bt=-6;function Ft(r){const e=JSON.parse(r);if(typeof e=="number")return s(e);const t=e,o=Array(t.length);function s(l){if(l===Tt)return;if(l===Vt)return NaN;if(l===qt)return 1/0;if(l===Ct)return-1/0;if(l===Bt)return-0;if(l in o)return o[l];const n=t[l];if(!n||typeof n!="object")o[l]=n;else if(Array.isArray(n))if(typeof n[0]=="string")switch(n[0]){case"Date":o[l]=new Date(n[1]);break;case"Set":const h=new Set;o[l]=h;for(let w=1;w<n.length;w+=1)h.add(s(n[w]));break;case"Map":const d=new Map;o[l]=d;for(let w=1;w<n.length;w+=2)d.set(s(n[w]),s(n[w+1]));break;case"RegExp":o[l]=new RegExp(n[1],n[2]);break;case"Object":o[l]=Object(n[1]);break;case"BigInt":o[l]=BigInt(n[1]);break;case"null":const _=Object.create(null);o[l]=_;for(let w=1;w<n.length;w+=2)_[n[w]]=s(n[w+1]);break}else{const f=new Array(n.length);o[l]=f;for(let h=0;h<n.length;h+=1){const d=n[h];d!==Dt&&(f[h]=s(d))}}else{const f={};o[l]=f;for(const h in n){const d=n[h];f[h]=s(d)}}return o[l]}return s(0)}const He="sveltekit:scroll",C="sveltekit:index",ae=bt(ue,jt,At,$t),ke=ue[0],Re=ue[1];ke();Re();let ee={};try{ee=JSON.parse(sessionStorage[He])}catch{}function we(r){ee[r]=ve()}function Jt({target:r,base:e,trailing_slash:t}){var De;const o=[];let s=null;const l={before_navigate:[],after_navigate:[]};let n={branch:[],error:null,url:null},f=!1,h=!1,d=!0,_=!1,w=!1,S,U=(De=history.state)==null?void 0:De[C];U||(U=Date.now(),history.replaceState({...history.state,[C]:U},"",location.href));const D=ee[U];D&&(history.scrollRestoration="manual",scrollTo(D.x,D.y));let V=!1,T,Oe,te;async function Le(){te=te||Promise.resolve(),await te,te=null;const a=new URL(location.href),u=me(a,!0);s=null,await $e(u,a,[])}async function pe(a,{noscroll:u=!1,replaceState:p=!1,keepfocus:i=!1,state:c={}},m,g){return typeof a=="string"&&(a=new URL(a,Be(document))),ge({url:a,scroll:u?ve():null,keepfocus:i,redirect_chain:m,details:{state:c,replaceState:p},nav_token:g,accepted:()=>{},blocked:()=>{},type:"goto"})}async function Ie(a){const u=me(a,!1);if(!u)throw new Error("Attempted to prefetch a URL that does not belong to this app");return s={id:u.id,promise:Ne(u)},s.promise}async function $e(a,u,p,i,c={},m){var k,E;Oe=c;let g=a&&await Ne(a);if(g||(g=await Te(u,null,x(new Error(`Not found: ${u.pathname}`),{url:u,params:{},routeId:null}),404)),u=(a==null?void 0:a.url)||u,Oe!==c)return!1;if(g.type==="redirect")if(p.length>10||p.includes(u.pathname))g=await ne({status:500,error:x(new Error("Redirect loop"),{url:u,params:{},routeId:null}),url:u,routeId:null});else return pe(new URL(g.location,u).href,{},[...p,u.pathname],c),!1;else((E=(k=g.props)==null?void 0:k.page)==null?void 0:E.status)>=400&&await K.updated.check()&&await re(u);if(o.length=0,w=!1,_=!0,i&&i.details){const{details:b}=i,v=b.replaceState?0:1;b.state[C]=U+=v,history[b.replaceState?"replaceState":"pushState"](b.state,"",u)}if(s=null,h){n=g.state,g.props.page&&(g.props.page.url=u);const b=oe();S.$set(g.props),b()}else je(g);if(i){const{scroll:b,keepfocus:v}=i;if(!v){const O=document.body,I=O.getAttribute("tabindex");O.tabIndex=-1,O.focus({preventScroll:!0}),setTimeout(()=>{var $;($=getSelection())==null||$.removeAllRanges()}),I!==null?O.setAttribute("tabindex",I):O.removeAttribute("tabindex")}if(await Ce(),d){const O=u.hash&&document.getElementById(u.hash.slice(1));b?scrollTo(b.x,b.y):O?O.scrollIntoView():scrollTo(0,0)}}else await Ce();d=!0,g.props.page&&(T=g.props.page),m&&m(),_=!1}function je(a){var c,m;n=a.state;const u=document.querySelector("style[data-sveltekit]");u&&u.remove(),T=a.props.page;const p=oe();S=new Ot({target:r,props:{...a.props,stores:K},hydrate:!0}),p();const i={from:null,to:se("to",{params:n.params,routeId:(m=(c=n.route)==null?void 0:c.id)!=null?m:null,url:new URL(location.href)}),type:"load"};l.after_navigate.forEach(g=>g(i)),h=!0}async function X({url:a,params:u,branch:p,status:i,error:c,route:m,form:g}){var I;const k=p.filter(Boolean),E={type:"loaded",state:{url:a,params:u,branch:p,error:c,route:m},props:{components:k.map($=>$.node.component)}};g!==void 0&&(E.props.form=g);let b={},v=!T;for(let $=0;$<k.length;$+=1){const N=k[$];b={...b,...N.data},(v||!n.branch.some(P=>P===N))&&(E.props[`data_${$}`]=b,v=v||Object.keys((I=N.data)!=null?I:{}).length>0)}if(v||(v=Object.keys(T.data).length!==Object.keys(b).length),!n.url||a.href!==n.url.href||n.error!==c||g!==void 0||v){E.props.page={error:c,params:u,routeId:m&&m.id,status:i,url:a,form:g,data:v?b:T.data};const $=(N,P)=>{Object.defineProperty(E.props.page,N,{get:()=>{throw new Error(`$page.${N} has been replaced by $page.url.${P}`)}})};$("origin","origin"),$("path","pathname"),$("query","searchParams")}return E}async function de({loader:a,parent:u,url:p,params:i,routeId:c,server_data_node:m}){var b,v,O,I,$;let g=null;const k={dependencies:new Set,params:new Set,parent:!1,url:!1},E=await a();if((b=E.shared)!=null&&b.load){let N=function(...L){for(const y of L){const{href:R}=new URL(y,p);k.dependencies.add(R)}};const P={routeId:c,params:new Proxy(i,{get:(L,y)=>(k.params.add(y),L[y])}),data:(v=m==null?void 0:m.data)!=null?v:null,url:ut(p,()=>{k.url=!0}),async fetch(L,y){let R;L instanceof Request?(R=L.url,y={body:L.method==="GET"||L.method==="HEAD"?void 0:await L.blob(),cache:L.cache,credentials:L.credentials,headers:L.headers,integrity:L.integrity,keepalive:L.keepalive,method:L.method,mode:L.mode,redirect:L.redirect,referrer:L.referrer,referrerPolicy:L.referrerPolicy,signal:L.signal,...y}):R=L;const A=new URL(R,p).href;return N(A),h?mt(A,y):ht(R,A,y)},setHeaders:()=>{},depends:N,parent(){return k.parent=!0,u()}};Object.defineProperties(P,{props:{get(){throw new Error("@migration task: Replace `props` with `data` stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1},session:{get(){throw new Error("session is no longer available. See https://github.com/sveltejs/kit/discussions/5883")},enumerable:!1},stuff:{get(){throw new Error("@migration task: Remove stuff https://github.com/sveltejs/kit/discussions/5774#discussioncomment-3292693")},enumerable:!1}}),g=(O=await E.shared.load.call(null,P))!=null?O:null,g=g?await Ut(g):null}return{node:E,loader:a,server:m,shared:(I=E.shared)!=null&&I.load?{type:"data",data:g,uses:k}:null,data:($=g!=null?g:m==null?void 0:m.data)!=null?$:null}}function Ae(a,u,p,i){if(w)return!0;if(!p)return!1;if(p.parent&&u||p.url&&a)return!0;for(const c of p.params)if(i[c]!==n.params[c])return!0;for(const c of p.dependencies)if(o.some(m=>m(new URL(c))))return!0;return!1}function he(a,u){var p,i;return(a==null?void 0:a.type)==="data"?{type:"data",data:a.data,uses:{dependencies:new Set((p=a.uses.dependencies)!=null?p:[]),params:new Set((i=a.uses.params)!=null?i:[]),parent:!!a.uses.parent,url:!!a.uses.url}}:(a==null?void 0:a.type)==="skip"&&u!=null?u:null}async function Ne({id:a,invalidating:u,url:p,params:i,route:c}){var L;if((s==null?void 0:s.id)===a)return s.promise;const{errors:m,layouts:g,leaf:k}=c,E=[...g,k];m.forEach(y=>y==null?void 0:y().catch(()=>{})),E.forEach(y=>y==null?void 0:y[1]().catch(()=>{}));let b=null;const v=n.url?a!==n.url.pathname+n.url.search:!1,O=E.reduce((y,R,A)=>{var Z;const j=n.branch[A],M=!!(R!=null&&R[0])&&((j==null?void 0:j.loader)!==R[1]||Ae(v,y.some(Boolean),(Z=j.server)==null?void 0:Z.uses,i));return y.push(M),y},[]);if(O.some(Boolean)){try{b=await Me(p,O)}catch(y){return ne({status:500,error:x(y,{url:p,params:i,routeId:c.id}),url:p,routeId:c.id})}if(b.type==="redirect")return b}const I=b==null?void 0:b.nodes;let $=!1;const N=E.map(async(y,R)=>{var Z;if(!y)return;const A=n.branch[R],j=I==null?void 0:I[R];if((!j||j.type==="skip")&&y[1]===(A==null?void 0:A.loader)&&!Ae(v,$,(Z=A.shared)==null?void 0:Z.uses,i))return A;if($=!0,(j==null?void 0:j.type)==="error")throw j;return de({loader:y[1],url:p,params:i,routeId:c.id,parent:async()=>{var qe;const Ve={};for(let _e=0;_e<R;_e+=1)Object.assign(Ve,(qe=await N[_e])==null?void 0:qe.data);return Ve},server_data_node:he(j===void 0&&y[0]?{type:"skip"}:j!=null?j:null,A==null?void 0:A.server)})});for(const y of N)y.catch(()=>{});const P=[];for(let y=0;y<E.length;y+=1)if(E[y])try{P.push(await N[y])}catch(R){if(R instanceof ze)return{type:"redirect",location:R.location};let A=500,j;I!=null&&I.includes(R)?(A=(L=R.status)!=null?L:A,j=R.error):R instanceof Ee?(A=R.status,j=R.body):j=x(R,{params:i,url:p,routeId:c.id});const M=await Pe(y,P,m);return M?await X({url:p,params:i,branch:P.slice(0,M.idx).concat(M.node),status:A,error:j,route:c}):await Te(p,c.id,j,A)}else P.push(void 0);return await X({url:p,params:i,branch:P,status:200,error:null,route:c,form:u?void 0:null})}async function Pe(a,u,p){for(;a--;)if(p[a]){let i=a;for(;!u[i];)i-=1;try{return{idx:i+1,node:{node:await p[a](),loader:p[a],data:{},server:null,shared:null}}}catch{continue}}}async function ne({status:a,error:u,url:p,routeId:i}){var b;const c={},m=await ke();let g=null;if(m.server)try{const v=await Me(p,[!0]);if(v.type!=="data"||v.nodes[0]&&v.nodes[0].type!=="data")throw 0;g=(b=v.nodes[0])!=null?b:null}catch{(p.origin!==location.origin||p.pathname!==location.pathname||f)&&await re(p)}const k=await de({loader:ke,url:p,params:c,routeId:i,parent:()=>Promise.resolve({}),server_data_node:he(g)}),E={node:await Re(),loader:Re,shared:null,server:null,data:null};return await X({url:p,params:c,branch:[k,E],status:a,error:u,route:null})}function me(a,u){if(Ue(a))return;const p=decodeURI(a.pathname.slice(e.length)||"/");for(const i of ae){const c=i.exec(p);if(c){const m=new URL(a.origin+lt(a.pathname,t)+a.search+a.hash);return{id:m.pathname+m.search,invalidating:u,route:i,params:ct(c),url:m}}}}function Ue(a){return a.origin!==location.origin||!a.pathname.startsWith(e)}async function ge({url:a,scroll:u,keepfocus:p,redirect_chain:i,details:c,type:m,delta:g,nav_token:k,accepted:E,blocked:b}){var N,P,L,y;let v=!1;const O=me(a,!1),I={from:se("from",{params:n.params,routeId:(P=(N=n.route)==null?void 0:N.id)!=null?P:null,url:n.url}),to:se("to",{params:(L=O==null?void 0:O.params)!=null?L:null,routeId:(y=O==null?void 0:O.route.id)!=null?y:null,url:a}),type:m};g!==void 0&&(I.delta=g);const $={...I,cancel:()=>{v=!0}};if(l.before_navigate.forEach(R=>R($)),v){b();return}we(U),E(),h&&K.navigating.set(I),await $e(O,a,i,{scroll:u,keepfocus:p,details:c},k,()=>{l.after_navigate.forEach(R=>R(I)),K.navigating.set(null)})}async function Te(a,u,p,i){return a.origin===location.origin&&a.pathname===location.pathname&&!f?await ne({status:i,error:p,url:a,routeId:u}):await re(a)}function re(a){return location.href=a.href,new Promise(()=>{})}return{after_navigate:a=>{be(()=>(l.after_navigate.push(a),()=>{const u=l.after_navigate.indexOf(a);l.after_navigate.splice(u,1)}))},before_navigate:a=>{be(()=>(l.before_navigate.push(a),()=>{const u=l.before_navigate.indexOf(a);l.before_navigate.splice(u,1)}))},disable_scroll_handling:()=>{(_||!h)&&(d=!1)},goto:(a,u={})=>pe(a,u,[]),invalidate:a=>{if(a===void 0)throw new Error("`invalidate()` (with no arguments) has been replaced by `invalidateAll()`");if(typeof a=="function")o.push(a);else{const{href:u}=new URL(a,location.href);o.push(p=>p.href===u)}return Le()},invalidateAll:()=>(w=!0,Le()),prefetch:async a=>{const u=new URL(a,Be(document));await Ie(u)},prefetch_routes:async a=>{const p=(a?ae.filter(i=>a.some(c=>i.exec(c))):ae).map(i=>Promise.all([...i.layouts,i.leaf].map(c=>c==null?void 0:c[1]())));await Promise.all(p)},apply_action:async a=>{if(a.type==="error"){const u=new URL(location.href),{branch:p,route:i}=n;if(!i)return;const c=await Pe(n.branch.length,p,i.errors);if(c){const m=await X({url:u,params:n.params,branch:p.slice(0,c.idx).concat(c.node),status:500,error:a.error,route:i});n=m.state;const g=oe();S.$set(m.props),g()}}else if(a.type==="redirect")pe(a.location,{},[]);else{const u={form:a.data,page:{...T,form:a.data,status:a.status}},p=oe();S.$set(u),p()}},_start_router:()=>{history.scrollRestoration="manual",addEventListener("beforeunload",i=>{var g,k;let c=!1;const m={from:se("from",{params:n.params,routeId:(k=(g=n.route)==null?void 0:g.id)!=null?k:null,url:n.url}),to:null,type:"unload",cancel:()=>c=!0};l.before_navigate.forEach(E=>E(m)),c?(i.preventDefault(),i.returnValue=""):history.scrollRestoration="auto"}),addEventListener("visibilitychange",()=>{if(document.visibilityState==="hidden"){we(U);try{sessionStorage[He]=JSON.stringify(ee)}catch{}}});const a=i=>{const{url:c,options:m}=Fe(i);if(c&&m.prefetch){if(Ue(c))return;Ie(c)}};let u;const p=i=>{clearTimeout(u),u=setTimeout(()=>{var c;(c=i.target)==null||c.dispatchEvent(new CustomEvent("sveltekit:trigger_prefetch",{bubbles:!0}))},20)};addEventListener("touchstart",a),addEventListener("mousemove",p),addEventListener("sveltekit:trigger_prefetch",a),addEventListener("click",i=>{if(i.button||i.which!==1||i.metaKey||i.ctrlKey||i.shiftKey||i.altKey||i.defaultPrevented)return;const{a:c,url:m,options:g}=Fe(i);if(!c||!m)return;const k=c instanceof SVGAElement;if(!k&&!(m.protocol==="https:"||m.protocol==="http:"))return;const E=(c.getAttribute("rel")||"").split(/\s+/);if(c.hasAttribute("download")||E.includes("external")||g.reload||(k?c.target.baseVal:c.target))return;const[b,v]=m.href.split("#");if(v!==void 0&&b===location.href.split("#")[0]){V=!0,we(U),n.url=m,K.page.set({...T,url:m}),K.page.notify();return}ge({url:m,scroll:g.noscroll?ve():null,keepfocus:!1,redirect_chain:[],details:{state:{},replaceState:m.href===location.href},accepted:()=>i.preventDefault(),blocked:()=>i.preventDefault(),type:"link"})}),addEventListener("popstate",i=>{if(i.state){if(i.state[C]===U)return;const c=i.state[C]-U;ge({url:new URL(location.href),scroll:ee[i.state[C]],keepfocus:!1,redirect_chain:[],details:null,accepted:()=>{U=i.state[C]},blocked:()=>{history.go(-c)},type:"popstate",delta:c})}}),addEventListener("hashchange",()=>{V&&(V=!1,history.replaceState({...history.state,[C]:++U},"",location.href))});for(const i of document.querySelectorAll("link"))i.rel==="icon"&&(i.href=i.href);addEventListener("pageshow",i=>{i.persisted&&K.navigating.set(null)})},_hydrate:async({status:a,error:u,node_ids:p,params:i,routeId:c,data:m,form:g})=>{var b;f=!0;const k=new URL(location.href);let E;try{const v=p.map(async(O,I)=>{const $=m[I];return de({loader:ue[O],url:k,params:i,routeId:c,parent:async()=>{const N={};for(let P=0;P<I;P+=1)Object.assign(N,(await v[P]).data);return N},server_data_node:he($)})});E=await X({url:k,params:i,branch:await Promise.all(v),status:a,error:u,form:g,route:(b=ae.find(O=>O.id===c))!=null?b:null})}catch(v){if(v instanceof ze){await re(new URL(v.location,location.href));return}E=await ne({status:v instanceof Ee?v.status:500,error:x(v,{url:k,params:i,routeId:c}),url:k,routeId:c})}je(E)}}}async function Me(r,e){const t=new URL(r);t.pathname=r.pathname.replace(/\/$/,"")+Pt;const o=await fe(t.href,{headers:{"x-sveltekit-invalidated":e.map(l=>l?"1":"").join(",")}}),s=await o.text();if(!o.ok)throw new Error(JSON.parse(s));return Ft(s)}function x(r,e){var t;return r instanceof Ee?r.body:(t=Nt.handleError({error:r,event:e}))!=null?t:{message:e.routeId!=null?"Internal Error":"Not Found"}}const Gt=["hash","href","host","hostname","origin","pathname","port","protocol","search","searchParams","toString","toJSON"];function se(r,e){for(const t of Gt)Object.defineProperty(e,t,{get(){throw new Error(`The navigation shape changed - ${r}.${t} should now be ${r}.url.${t}`)},enumerable:!1});return e}function oe(){return()=>{}}async function Mt({env:r,hydrate:e,paths:t,target:o,trailing_slash:s}){ot(t);const l=Jt({target:o,base:t.base,trailing_slash:s});it({client:l}),e?await l._hydrate(e):l.goto(location.href,{replaceState:!0}),l._start_router()}export{Mt as start};

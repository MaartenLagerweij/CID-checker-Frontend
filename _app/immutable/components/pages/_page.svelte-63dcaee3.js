import{S as ve,i as ke,s as ge,k as S,q as T,a as w,e as J,l as y,m as C,r as P,h as c,c as $,n as g,G as ee,b as k,D as b,L as te,M as W,N as Se,f as M,t as le,d as ye,u as B,E as K,O as de,p as Ee,P as Y,Q as re,R as be,A as Z,g as Ce}from"../../chunks/index-c2761df6.js";import{s as se,f as me}from"../../chunks/index-95483d02.js";/* empty css                         */const Te="https://europe-west1-cid-checker-362410.cloudfunctions.net/cidChecker";async function Pe(s,e){return await fetch(Te+e,{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({urls:s})})}function ae(s,e,l){const t=s.slice();return t[18]=e[l].url,t[19]=e[l].cid,t[20]=e[l].brandName,t[21]=e[l].brandCID,t[22]=e[l].error,t}function ie(s,e,l){const t=s.slice();return t[25]=e[l],t}function oe(s,e,l){const t=s.slice();return t[28]=e[l],t}function ne(s){let e,l,t,r=s[28]+"",a,u,p,_,d;return{c(){e=S("label"),l=S("input"),t=w(),a=T(r),u=w(),p=S("span"),this.h()},l(n){e=y(n,"LABEL",{class:!0});var i=C(e);l=y(i,"INPUT",{type:!0,class:!0}),t=$(i),a=P(i,r),u=$(i),p=y(i,"SPAN",{class:!0}),C(p).forEach(c),i.forEach(c),this.h()},h(){g(l,"type","radio"),l.__value=s[28],l.value=l.__value,g(l,"class","svelte-o028uv"),s[14][0].push(l),g(p,"class","checkmark svelte-o028uv"),g(e,"class","container-radio svelte-o028uv")},m(n,i){k(n,e,i),b(e,l),l.checked=l.__value===s[5],b(e,t),b(e,a),b(e,u),b(e,p),_||(d=[W(l,"click",s[12]),W(l,"change",s[13])],_=!0)},p(n,i){i&32&&(l.checked=l.__value===n[5])},d(n){n&&c(e),s[14][0].splice(s[14][0].indexOf(l),1),_=!1,de(d)}}}function fe(s){let e,l,t,r,a,u;return{c(){e=S("p"),l=T("selected value: "),t=S("strong"),r=S("span"),a=T(s[5]),u=w(),this.h()},l(p){e=y(p,"P",{class:!0});var _=C(e);l=P(_,"selected value: "),t=y(_,"STRONG",{});var d=C(t);r=y(d,"SPAN",{style:!0});var n=C(r);a=P(n,s[5]),n.forEach(c),d.forEach(c),_.forEach(c),u=$(p),this.h()},h(){Ee(r,"text-decoration","underline"),g(e,"class","radio-value svelte-o028uv")},m(p,_){k(p,e,_),b(e,l),b(e,t),b(t,r),b(r,a),k(p,u,_)},p(p,_){_&32&&B(a,p[5])},d(p){p&&c(e),p&&c(u)}}}function ce(s){let e,l,t,r;return{c(){e=S("p"),l=T("Please enter url's first"),this.h()},l(a){e=y(a,"P",{class:!0});var u=C(e);l=P(u,"Please enter url's first"),u.forEach(c),this.h()},h(){g(e,"class","alert alert-danger")},m(a,u){k(a,e,u),b(e,l),r=!0},i(a){r||(Y(()=>{t||(t=re(e,se,{},!0)),t.run(1)}),r=!0)},o(a){t||(t=re(e,se,{},!1)),t.run(0),r=!1},d(a){a&&c(e),a&&t&&t.end()}}}function ue(s){let e,l;return{c(){e=T("for "),l=T(s[5])},l(t){e=P(t,"for "),l=P(t,s[5])},m(t,r){k(t,e,r),k(t,l,r)},p(t,r){r&32&&B(l,t[5])},d(t){t&&c(e),t&&c(l)}}}function _e(s){let e,l,t,r,a,u,p=s[10],_=[];for(let i=0;i<p.length;i+=1)_[i]=he(ie(s,p,i));let d=s[8],n=[];for(let i=0;i<d.length;i+=1)n[i]=pe(ae(s,d,i));return{c(){for(let i=0;i<_.length;i+=1)_[i].c();e=S("br"),l=S("br"),t=w(),r=S("div"),a=S("table");for(let i=0;i<n.length;i+=1)n[i].c();this.h()},l(i){for(let m=0;m<_.length;m+=1)_[m].l(i);e=y(i,"BR",{}),l=y(i,"BR",{}),t=$(i),r=y(i,"DIV",{id:!0,class:!0});var h=C(r);a=y(h,"TABLE",{class:!0});var o=C(a);for(let m=0;m<n.length;m+=1)n[m].l(o);o.forEach(c),h.forEach(c),this.h()},h(){g(a,"class","svelte-o028uv"),g(r,"id","output"),g(r,"class","svelte-o028uv")},m(i,h){for(let o=0;o<_.length;o+=1)_[o].m(i,h);k(i,e,h),k(i,l,h),k(i,t,h),k(i,r,h),b(r,a);for(let o=0;o<n.length;o+=1)n[o].m(a,null)},p(i,h){if(h&1088){p=i[10];let o;for(o=0;o<p.length;o+=1){const m=ie(i,p,o);_[o]?(_[o].p(m,h),M(_[o],1)):(_[o]=he(m),_[o].c(),M(_[o],1),_[o].m(e.parentNode,e))}for(;o<_.length;o+=1)_[o].d(1);_.length=p.length}if(h&448){d=i[8];let o;for(o=0;o<d.length;o+=1){const m=ae(i,d,o);n[o]?n[o].p(m,h):(n[o]=pe(m),n[o].c(),n[o].m(a,null))}for(;o<n.length;o+=1)n[o].d(1);n.length=d.length}},i(i){for(let h=0;h<p.length;h+=1)M(_[h]);u||Y(()=>{u=be(a,me,{x:-200,duration:1600}),u.start()})},o:Z,d(i){K(_,i),i&&c(e),i&&c(l),i&&c(t),i&&c(r),K(n,i)}}}function he(s){let e,l,t,r=s[25]+"",a,u,p,_,d,n,i;return{c(){e=S("label"),l=S("input"),t=w(),a=T(r),u=w(),p=S("span"),d=w(),this.h()},l(h){e=y(h,"LABEL",{class:!0});var o=C(e);l=y(o,"INPUT",{type:!0,class:!0}),t=$(o),a=P(o,r),u=$(o),p=y(o,"SPAN",{class:!0}),C(p).forEach(c),o.forEach(c),d=$(h),this.h()},h(){g(l,"type","radio"),l.__value=s[25],l.value=l.__value,g(l,"class","svelte-o028uv"),s[14][1].push(l),g(p,"class","checkmark svelte-o028uv"),g(e,"class","container-radio svelte-o028uv")},m(h,o){k(h,e,o),b(e,l),l.checked=l.__value===s[6],b(e,t),b(e,a),b(e,u),b(e,p),k(h,d,o),n||(i=W(l,"change",s[16]),n=!0)},p(h,o){o&64&&(l.checked=l.__value===h[6])},i(h){_||Y(()=>{_=be(e,me,{x:200,duration:1600}),_.start()})},o:Z,d(h){h&&c(e),s[14][1].splice(s[14][1].indexOf(l),1),h&&c(d),n=!1,i()}}}function De(s){let e;function l(a,u){if(a[6]==="Salesforce Syntax")return Ae;if(a[6]==="HTML Salesforce Syntax")return Re;if(a[6]==="CID only")return Ue;if(a[6]==="cat-info-bottom")return $e}let t=l(s),r=t&&t(s);return{c(){r&&r.c(),e=J()},l(a){r&&r.l(a),e=J()},m(a,u){r&&r.m(a,u),k(a,e,u)},p(a,u){t===(t=l(a))&&r?r.p(a,u):(r&&r.d(1),r=t&&t(a),r&&(r.c(),r.m(e.parentNode,e)))},d(a){r&&r.d(a),a&&c(e)}}}function Ne(s){let e;function l(a,u){if(a[6]==="Salesforce Syntax")return Oe;if(a[6]==="HTML Salesforce Syntax")return Le;if(a[6]==="CID only")return Ie;if(a[6]==="cat-info-bottom")return Be}let t=l(s),r=t&&t(s);return{c(){r&&r.c(),e=J()},l(a){r&&r.l(a),e=J()},m(a,u){r&&r.m(a,u),k(a,e,u)},p(a,u){t===(t=l(a))&&r?r.p(a,u):(r&&r.d(1),r=t&&t(a),r&&(r.c(),r.m(e.parentNode,e)))},d(a){r&&r.d(a),a&&c(e)}}}function we(s){let e,l=s[22]+"",t;return{c(){e=S("span"),t=T(l),this.h()},l(r){e=y(r,"SPAN",{id:!0,class:!0});var a=C(e);t=P(a,l),a.forEach(c),this.h()},h(){g(e,"id","error-message"),g(e,"class","svelte-o028uv")},m(r,a){k(r,e,a),b(e,t)},p(r,a){a&256&&l!==(l=r[22]+"")&&B(t,l)},d(r){r&&c(e)}}}function $e(s){let e=`cat-info-bottom-${s[19]}-${s[21]}`,l;return{c(){l=T(e)},l(t){l=P(t,e)},m(t,r){k(t,l,r)},p(t,r){r&256&&e!==(e=`cat-info-bottom-${t[19]}-${t[21]}`)&&B(l,e)},d(t){t&&c(l)}}}function Ue(s){let e,l;return{c(){e=S("span"),l=T("can't give cid for combination"),this.h()},l(t){e=y(t,"SPAN",{id:!0,class:!0});var r=C(e);l=P(r,"can't give cid for combination"),r.forEach(c),this.h()},h(){g(e,"id","error-message"),g(e,"class","svelte-o028uv")},m(t,r){k(t,e,r),b(e,l)},p:Z,d(t){t&&c(e)}}}function Re(s){let e=`<a href="$httpsUrl('Search-Show','cgid','${s[19]}','prefn1','brand','prefv1','${s[20]}')$"></a>`,l;return{c(){l=T(e)},l(t){l=P(t,e)},m(t,r){k(t,l,r)},p(t,r){r&256&&e!==(e=`<a href="$httpsUrl('Search-Show','cgid','${t[19]}','prefn1','brand','prefv1','${t[20]}')$"></a>`)&&B(l,e)},d(t){t&&c(l)}}}function Ae(s){let e=`$httpsUrl('Search-Show','cgid','${s[19]}','prefn1','brand','prefv1','${s[20]}')$`,l;return{c(){l=T(e)},l(t){l=P(t,e)},m(t,r){k(t,l,r)},p(t,r){r&256&&e!==(e=`$httpsUrl('Search-Show','cgid','${t[19]}','prefn1','brand','prefv1','${t[20]}')$`)&&B(l,e)},d(t){t&&c(l)}}}function Be(s){let e=`cat-info-bottom-${s[19]}`,l;return{c(){l=T(e)},l(t){l=P(t,e)},m(t,r){k(t,l,r)},p(t,r){r&256&&e!==(e=`cat-info-bottom-${t[19]}`)&&B(l,e)},d(t){t&&c(l)}}}function Ie(s){let e=s[19]+"",l;return{c(){l=T(e)},l(t){l=P(t,e)},m(t,r){k(t,l,r)},p(t,r){r&256&&e!==(e=t[19]+"")&&B(l,e)},d(t){t&&c(l)}}}function Le(s){let e=`<a href="$httpsUrl('Search-Show','cgid','${s[19]}')$"></a>`,l;return{c(){l=T(e)},l(t){l=P(t,e)},m(t,r){k(t,l,r)},p(t,r){r&256&&e!==(e=`<a href="$httpsUrl('Search-Show','cgid','${t[19]}')$"></a>`)&&B(l,e)},d(t){t&&c(l)}}}function Oe(s){let e=`$httpsUrl('Search-Show','cgid','${s[19]}')$`,l;return{c(){l=T(e)},l(t){l=P(t,e)},m(t,r){k(t,l,r)},p(t,r){r&256&&e!==(e=`$httpsUrl('Search-Show','cgid','${t[19]}')$`)&&B(l,e)},d(t){t&&c(l)}}}function pe(s){let e,l,t=s[18]+"",r,a,u,p;function _(i,h){if(i[22])return we;if(i[7]==="Brand pages"||i[7]==="Category pages")return Ne;if(i[7]==="Combination pages")return De}let d=_(s),n=d&&d(s);return{c(){e=S("tr"),l=S("td"),r=T(t),a=w(),u=S("td"),n&&n.c(),p=w(),this.h()},l(i){e=y(i,"TR",{});var h=C(e);l=y(h,"TD",{class:!0});var o=C(l);r=P(o,t),o.forEach(c),a=$(h),u=y(h,"TD",{class:!0});var m=C(u);n&&n.l(m),m.forEach(c),p=$(h),h.forEach(c),this.h()},h(){g(l,"class","svelte-o028uv"),g(u,"class","svelte-o028uv")},m(i,h){k(i,e,h),b(e,l),b(l,r),b(e,a),b(e,u),n&&n.m(u,null),b(e,p)},p(i,h){h&256&&t!==(t=i[18]+"")&&B(r,t),d===(d=_(i))&&n?n.p(i,h):(n&&n.d(1),n=d&&d(i),n&&(n.c(),n.m(u,null)))},d(i){i&&c(e),n&&n.d()}}}function Me(s){let e,l,t,r,a,u,p,_,d,n,i,h,o,m,Q,H,I,V,q,G,O,L,X,F=s[9],U=[];for(let f=0;f<F.length;f+=1)U[f]=ne(oe(s,F,f));let R=s[5]&&fe(s),D=s[4]&&ce(),A=s[5]&&ue(s),N=s[8].length>0&&_e(s);return{c(){e=S("h1"),l=T("CID Checker"),t=w(),r=S("form");for(let f=0;f<U.length;f+=1)U[f].c();a=w(),R&&R.c(),u=S("br"),p=S("br"),_=w(),d=S("textarea"),n=w(),i=S("br"),h=w(),D&&D.c(),o=w(),m=S("button"),Q=T("Get CID's "),A&&A.c(),H=w(),I=S("p"),V=T(s[2]),q=w(),N&&N.c(),G=J(),this.h()},l(f){e=y(f,"H1",{});var E=C(e);l=P(E,"CID Checker"),E.forEach(c),t=$(f),r=y(f,"FORM",{});var v=C(r);for(let z=0;z<U.length;z+=1)U[z].l(v);a=$(v),R&&R.l(v),u=y(v,"BR",{}),p=y(v,"BR",{}),_=$(v),d=y(v,"TEXTAREA",{class:!0,placeholder:!0,rows:!0,cols:!0,type:!0,id:!0}),C(d).forEach(c),n=$(v),i=y(v,"BR",{}),h=$(v),D&&D.l(v),o=$(v),m=y(v,"BUTTON",{class:!0,type:!0});var j=C(m);Q=P(j,"Get CID's "),A&&A.l(j),j.forEach(c),v.forEach(c),H=$(f),I=y(f,"P",{class:!0});var x=C(I);V=P(x,s[2]),x.forEach(c),q=$(f),N&&N.l(f),G=J(),this.h()},h(){g(d,"class","form-control"),g(d,"placeholder","Paste url's here"),g(d,"rows","15"),g(d,"cols","80"),g(d,"type","text"),g(d,"id","input"),g(m,"class","btn btn-outline-success svelte-o028uv"),m.disabled=s[3],g(m,"type","submit"),g(I,"class","svelte-o028uv"),ee(I,"alert-message",s[1]===!0)},m(f,E){k(f,e,E),b(e,l),k(f,t,E),k(f,r,E);for(let v=0;v<U.length;v+=1)U[v].m(r,null);b(r,a),R&&R.m(r,null),b(r,u),b(r,p),b(r,_),b(r,d),te(d,s[0]),b(r,n),b(r,i),b(r,h),D&&D.m(r,null),b(r,o),b(r,m),b(m,Q),A&&A.m(m,null),k(f,H,E),k(f,I,E),b(I,V),k(f,q,E),N&&N.m(f,E),k(f,G,E),O=!0,L||(X=[W(d,"input",s[15]),W(r,"submit",Se(s[11]))],L=!0)},p(f,[E]){if(E&552){F=f[9];let v;for(v=0;v<F.length;v+=1){const j=oe(f,F,v);U[v]?U[v].p(j,E):(U[v]=ne(j),U[v].c(),U[v].m(r,a))}for(;v<U.length;v+=1)U[v].d(1);U.length=F.length}f[5]?R?R.p(f,E):(R=fe(f),R.c(),R.m(r,u)):R&&(R.d(1),R=null),E&1&&te(d,f[0]),f[4]?D?E&16&&M(D,1):(D=ce(),D.c(),M(D,1),D.m(r,o)):D&&(Ce(),le(D,1,1,()=>{D=null}),ye()),f[5]?A?A.p(f,E):(A=ue(f),A.c(),A.m(m,null)):A&&(A.d(1),A=null),(!O||E&8)&&(m.disabled=f[3]),(!O||E&4)&&B(V,f[2]),(!O||E&2)&&ee(I,"alert-message",f[1]===!0),f[8].length>0?N?(N.p(f,E),E&256&&M(N,1)):(N=_e(f),N.c(),M(N,1),N.m(G.parentNode,G)):N&&(N.d(1),N=null)},i(f){O||(M(D),M(N),O=!0)},o(f){le(D),O=!1},d(f){f&&c(e),f&&c(t),f&&c(r),K(U,f),R&&R.d(),D&&D.d(),A&&A.d(),f&&c(H),f&&c(I),f&&c(q),N&&N.d(f),f&&c(G),L=!1,de(X)}}}function Ge(s,e,l){let t="",r=!1,a="",u=!0,p,_="",d="Salesforce Syntax",n="";const i=["Brand pages","Category pages","Combination pages"],h={"Brand pages":"/check-brands/","Category pages":"/check-categories/","Combination pages":"/check-combinations/"},o=["Salesforce Syntax","HTML Salesforce Syntax","CID only","cat-info-bottom"];let m=[];const Q=async()=>{if(t==="")return l(4,p=!0);l(4,p=!1);const O=h[_];l(7,n=_),console.log("sending request to: ",O);let L=t.split(/\n/);if(l(1,r=!1),l(8,m=[]),L[L.length-1]===""&&L.pop(),L.length>100){l(1,r=!0),l(2,a="Max 100 url's");return}else l(2,a=`Creating CID url's for ${L.length} pages... Loading...`);console.log(L);const X=await Pe(L,O);l(8,m=await X.json()),l(2,a="")},H=[[],[]],I=()=>l(3,u=!1);function V(){_=this.__value,l(5,_)}function q(){t=this.value,l(0,t)}function G(){d=this.__value,l(6,d)}return[t,r,a,u,p,_,d,n,m,i,o,Q,I,V,H,q,G]}class Fe extends ve{constructor(e){super(),ke(this,e,Ge,Me,ge,{})}}export{Fe as default};

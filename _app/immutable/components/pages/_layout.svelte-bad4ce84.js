import{S as q,i as N,s as S,k as $,B as y,a as I,l as E,m as d,C as k,h as v,c as b,n as u,b as C,D as p,A,E as V,F as Z,q as G,r as J,G as B,H as K,v as R,w as U,x as z,I as O,J as P,K as Q,f as H,t as F,y as T}from"../../chunks/index-c2761df6.js";/* empty css                         */import{p as W}from"../../chunks/stores-0ef78eea.js";function M(c,e,s){const a=c.slice();return a[2]=e[s],a}function j(c){let e,s,a=c[2].title+"",n;return{c(){e=$("li"),s=$("a"),n=G(a),this.h()},l(l){e=E(l,"LI",{class:!0});var i=d(e);s=E(i,"A",{href:!0,class:!0});var o=d(s);n=J(o,a),o.forEach(v),i.forEach(v),this.h()},h(){u(s,"href",c[2].path),u(s,"class","svelte-18x26l4"),u(e,"class","svelte-18x26l4"),B(e,"active",c[0].url.pathname===c[2].path)},m(l,i){C(l,e,i),p(e,s),p(s,n)},p(l,i){i&3&&B(e,"active",l[0].url.pathname===l[2].path)},d(l){l&&v(e)}}}function X(c){let e,s,a,n,l,i,o,t,_,m=c[1],f=[];for(let h=0;h<m.length;h+=1)f[h]=j(M(c,m,h));return{c(){e=$("header"),s=$("nav"),a=y("svg"),n=y("path"),l=I(),i=$("ul");for(let h=0;h<f.length;h+=1)f[h].c();o=I(),t=y("svg"),_=y("path"),this.h()},l(h){e=E(h,"HEADER",{class:!0});var g=d(e);s=E(g,"NAV",{class:!0});var r=d(s);a=k(r,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var x=d(a);n=k(x,"path",{d:!0,class:!0}),d(n).forEach(v),x.forEach(v),l=b(r),i=E(r,"UL",{class:!0});var w=d(i);for(let L=0;L<f.length;L+=1)f[L].l(w);w.forEach(v),o=b(r),t=k(r,"svg",{viewBox:!0,"aria-hidden":!0,class:!0});var D=d(t);_=k(D,"path",{d:!0,class:!0}),d(_).forEach(v),D.forEach(v),r.forEach(v),g.forEach(v),this.h()},h(){u(n,"d","M0,0 L1,2 C1.5,3 1.5,3 2,3 L2,0 Z"),u(n,"class","svelte-18x26l4"),u(a,"viewBox","0 0 2 3"),u(a,"aria-hidden","true"),u(a,"class","svelte-18x26l4"),u(i,"class","svelte-18x26l4"),u(_,"d","M0,0 L0,3 C0.5,3 0.5,3 1,2 L2,0 Z"),u(_,"class","svelte-18x26l4"),u(t,"viewBox","0 0 2 3"),u(t,"aria-hidden","true"),u(t,"class","svelte-18x26l4"),u(s,"class","svelte-18x26l4"),u(e,"class","svelte-18x26l4")},m(h,g){C(h,e,g),p(e,s),p(s,a),p(a,n),p(s,l),p(s,i);for(let r=0;r<f.length;r+=1)f[r].m(i,null);p(s,o),p(s,t),p(t,_)},p(h,[g]){if(g&3){m=h[1];let r;for(r=0;r<m.length;r+=1){const x=M(h,m,r);f[r]?f[r].p(x,g):(f[r]=j(x),f[r].c(),f[r].m(i,null))}for(;r<f.length;r+=1)f[r].d(1);f.length=m.length}},i:A,o:A,d(h){h&&v(e),V(f,h)}}}function Y(c,e,s){let a;return Z(c,W,l=>s(0,a=l)),[a,[{title:"CID Checker",path:"/CID-checker-Frontend/"},{title:"Link replacer",path:"/CID-checker-Frontend/link-replacer/"}]]}class ee extends q{constructor(e){super(),N(this,e,Y,X,S,{})}}function te(c){let e,s,a,n,l;e=new ee({});const i=c[1].default,o=K(i,c,c[0],null);return{c(){R(e.$$.fragment),s=I(),a=$("main"),n=$("div"),o&&o.c(),this.h()},l(t){U(e.$$.fragment,t),s=b(t),a=E(t,"MAIN",{class:!0});var _=d(a);n=E(_,"DIV",{class:!0});var m=d(n);o&&o.l(m),m.forEach(v),_.forEach(v),this.h()},h(){u(n,"class","container svelte-1aljuoa"),u(a,"class","svelte-1aljuoa")},m(t,_){z(e,t,_),C(t,s,_),C(t,a,_),p(a,n),o&&o.m(n,null),l=!0},p(t,[_]){o&&o.p&&(!l||_&1)&&O(o,i,t,t[0],l?Q(i,t[0],_,null):P(t[0]),null)},i(t){l||(H(e.$$.fragment,t),H(o,t),l=!0)},o(t){F(e.$$.fragment,t),F(o,t),l=!1},d(t){T(e,t),t&&v(s),t&&v(a),o&&o.d(t)}}}function se(c,e,s){let{$$slots:a={},$$scope:n}=e;return c.$$set=l=>{"$$scope"in l&&s(0,n=l.$$scope)},[n,a]}class ne extends q{constructor(e){super(),N(this,e,se,te,S,{})}}export{ne as default};

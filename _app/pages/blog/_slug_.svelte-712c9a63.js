import{S as N,i as R,s as T,J as q,K as D,e as v,t as J,k as d,j as y,L as K,c as w,a as M,g as S,d as o,n as k,m as x,b as h,Q as P,H as g,f as _,o as b,x as E,u as C,v as H,A as U,R as I,h as z}from"../../chunks/vendor-ec7912c1.js";import{N as A}from"../../chunks/Nav-91c775a9.js";import{b as B}from"../../chunks/paths-28a87002.js";function Q($){let a,i=$[0].metadata.title+"",l,f,e,p,t,r,c=$[0].content+"";return{c(){a=v("h1"),l=J(i),f=d(),e=v("h4"),p=J($[1]),t=d(),r=v("div"),this.h()},l(s){a=w(s,"H1",{class:!0});var m=M(a);l=S(m,i),m.forEach(o),f=k(s),e=w(s,"H4",{class:!0});var n=M(e);p=S(n,$[1]),n.forEach(o),t=k(s),r=w(s,"DIV",{class:!0});var u=M(r);u.forEach(o),this.h()},h(){h(a,"class","title svelte-1u95kwm"),h(e,"class","date"),h(r,"class","post_content svelte-1u95kwm")},m(s,m){_(s,a,m),g(a,l),_(s,f,m),_(s,e,m),g(e,p),_(s,t,m),_(s,r,m),r.innerHTML=c},p(s,m){m&1&&i!==(i=s[0].metadata.title+"")&&z(l,i),m&1&&c!==(c=s[0].content+"")&&(r.innerHTML=c)},d(s){s&&o(a),s&&o(f),s&&o(e),s&&o(t),s&&o(r)}}}function V($){let a,i,l,f,e,p;return a=new A({}),l=new I({}),e=new I({props:{$$slots:{default:[Q]},$$scope:{ctx:$}}}),{c(){y(a.$$.fragment),i=d(),y(l.$$.fragment),f=d(),y(e.$$.fragment)},l(t){x(a.$$.fragment,t),i=k(t),x(l.$$.fragment,t),f=k(t),x(e.$$.fragment,t)},m(t,r){b(a,t,r),_(t,i,r),b(l,t,r),_(t,f,r),b(e,t,r),p=!0},p(t,r){const c={};r&5&&(c.$$scope={dirty:r,ctx:t}),e.$set(c)},i(t){p||(E(a.$$.fragment,t),E(l.$$.fragment,t),E(e.$$.fragment,t),p=!0)},o(t){C(a.$$.fragment,t),C(l.$$.fragment,t),C(e.$$.fragment,t),p=!1},d(t){H(a,t),t&&o(i),H(l,t),t&&o(f),H(e,t)}}}function F($){let a,i,l,f,e,p,t,r,c,s,m;return document.title=i=$[0].metadata.title,r=new q({}),s=new D({props:{sm:!0,$$slots:{default:[V]},$$scope:{ctx:$}}}),{c(){a=v("link"),l=v("script"),f=J(`MathJax = {
      tex: {
        inlineMath: [
          ["$", "$"],
          ["\\\\(", "\\\\)"],
        ],
      },
    };
  `),e=v("script"),t=d(),y(r.$$.fragment),c=d(),y(s.$$.fragment),this.h()},l(n){const u=K('[data-svelte="svelte-1izcv9f"]',document.head);a=w(u,"LINK",{rel:!0,href:!0}),l=w(u,"SCRIPT",{});var j=M(l);f=S(j,`MathJax = {
      tex: {
        inlineMath: [
          ["$", "$"],
          ["\\\\(", "\\\\)"],
        ],
      },
    };
  `),j.forEach(o),e=w(u,"SCRIPT",{id:!0,src:!0});var L=M(e);L.forEach(o),u.forEach(o),t=k(n),x(r.$$.fragment,n),c=k(n),x(s.$$.fragment,n),this.h()},h(){h(a,"rel","stylesheet"),h(a,"href","https://cdn.jsdelivr.net/gh/aymanbagabas/iosevka-fonts@v6.1.2/dist/iosevka/iosevka.min.css"),h(e,"id","MathJax-script"),e.async=!0,P(e.src,p="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js")||h(e,"src",p)},m(n,u){g(document.head,a),g(document.head,l),g(l,f),g(document.head,e),_(n,t,u),b(r,n,u),_(n,c,u),b(s,n,u),m=!0},p(n,[u]){(!m||u&1)&&i!==(i=n[0].metadata.title)&&(document.title=i);const j={};u&5&&(j.$$scope={dirty:u,ctx:n}),s.$set(j)},i(n){m||(E(r.$$.fragment,n),E(s.$$.fragment,n),m=!0)},o(n){C(r.$$.fragment,n),C(s.$$.fragment,n),m=!1},d(n){o(a),o(l),o(e),n&&o(t),H(r,n),n&&o(c),H(s,n)}}}async function Y({page:$,fetch:a}){const i=$.params.slug;return{props:{post:await a(`${B}/blog/${i}.json`).then(f=>f.json())}}}function G($,a,i){let{post:l}=a,f=l.metadata.date.toUpperCase();return U(()=>{MathJax.typeset()}),$.$$set=e=>{"post"in e&&i(0,l=e.post)},[l,f]}class Z extends N{constructor(a){super();R(this,a,G,F,T,{post:0})}}export{Z as default,Y as load};

import{S as R,i as q,s as L,e as h,t as H,k as w,j as M,M as N,c as y,a as x,g as T,d as o,n as g,m as b,b as v,T as D,H as d,f as _,o as k,x as C,u as E,v as S,A as P,h as U}from"../../chunks/index-a7288a3e.js";import{S as z,N as A}from"../../chunks/Nav-8128698c.js";import{b as B}from"../../chunks/paths-28a87002.js";import{C as K,R as I}from"../../chunks/Row-767c12f9.js";function V(u){let a,i=u[0].metadata.title+"",l,f,e,p,t,r,c=u[0].content+"";return{c(){a=h("h1"),l=H(i),f=w(),e=h("h4"),p=H(u[1]),t=w(),r=h("div"),this.h()},l(s){a=y(s,"H1",{class:!0});var m=x(a);l=T(m,i),m.forEach(o),f=g(s),e=y(s,"H4",{class:!0});var n=x(e);p=T(n,u[1]),n.forEach(o),t=g(s),r=y(s,"DIV",{class:!0});var $=x(r);$.forEach(o),this.h()},h(){v(a,"class","title svelte-1sy90yj"),v(e,"class","date svelte-1sy90yj"),v(r,"class","post_content svelte-1sy90yj")},m(s,m){_(s,a,m),d(a,l),_(s,f,m),_(s,e,m),d(e,p),_(s,t,m),_(s,r,m),r.innerHTML=c},p(s,m){m&1&&i!==(i=s[0].metadata.title+"")&&U(l,i),m&1&&c!==(c=s[0].content+"")&&(r.innerHTML=c)},d(s){s&&o(a),s&&o(f),s&&o(e),s&&o(t),s&&o(r)}}}function F(u){let a,i,l,f,e,p;return a=new A({}),l=new I({}),e=new I({props:{$$slots:{default:[V]},$$scope:{ctx:u}}}),{c(){M(a.$$.fragment),i=w(),M(l.$$.fragment),f=w(),M(e.$$.fragment)},l(t){b(a.$$.fragment,t),i=g(t),b(l.$$.fragment,t),f=g(t),b(e.$$.fragment,t)},m(t,r){k(a,t,r),_(t,i,r),k(l,t,r),_(t,f,r),k(e,t,r),p=!0},p(t,r){const c={};r&5&&(c.$$scope={dirty:r,ctx:t}),e.$set(c)},i(t){p||(C(a.$$.fragment,t),C(l.$$.fragment,t),C(e.$$.fragment,t),p=!0)},o(t){E(a.$$.fragment,t),E(l.$$.fragment,t),E(e.$$.fragment,t),p=!1},d(t){S(a,t),t&&o(i),S(l,t),t&&o(f),S(e,t)}}}function G(u){let a,i,l,f,e,p,t,r,c,s,m;return document.title=i=u[0].metadata.title,r=new z({}),s=new K({props:{sm:!0,$$slots:{default:[F]},$$scope:{ctx:u}}}),{c(){a=h("link"),l=h("script"),f=H(`MathJax = {
      tex: {
        inlineMath: [
          ["$", "$"],
          ["\\\\(", "\\\\)"],
        ],
      },
    };
  `),e=h("script"),t=w(),M(r.$$.fragment),c=w(),M(s.$$.fragment),this.h()},l(n){const $=N('[data-svelte="svelte-1izcv9f"]',document.head);a=y($,"LINK",{rel:!0,href:!0}),l=y($,"SCRIPT",{});var j=x(l);f=T(j,`MathJax = {
      tex: {
        inlineMath: [
          ["$", "$"],
          ["\\\\(", "\\\\)"],
        ],
      },
    };
  `),j.forEach(o),e=y($,"SCRIPT",{id:!0,src:!0});var J=x(e);J.forEach(o),$.forEach(o),t=g(n),b(r.$$.fragment,n),c=g(n),b(s.$$.fragment,n),this.h()},h(){v(a,"rel","stylesheet"),v(a,"href","https://cdn.jsdelivr.net/gh/aymanbagabas/iosevka-fonts@v6.1.2/dist/iosevka/iosevka.min.css"),v(e,"id","MathJax-script"),e.async=!0,D(e.src,p="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js")||v(e,"src",p)},m(n,$){d(document.head,a),d(document.head,l),d(l,f),d(document.head,e),_(n,t,$),k(r,n,$),_(n,c,$),k(s,n,$),m=!0},p(n,[$]){(!m||$&1)&&i!==(i=n[0].metadata.title)&&(document.title=i);const j={};$&5&&(j.$$scope={dirty:$,ctx:n}),s.$set(j)},i(n){m||(C(r.$$.fragment,n),C(s.$$.fragment,n),m=!0)},o(n){E(r.$$.fragment,n),E(s.$$.fragment,n),m=!1},d(n){o(a),o(l),o(e),n&&o(t),S(r,n),n&&o(c),S(s,n)}}}async function Z({page:u,fetch:a}){const i=u.params.slug;return{props:{post:await a(`${B}/blog/${i}.json`).then(f=>f.json())}}}function O(u,a,i){let{post:l}=a,f=l.metadata.date.toUpperCase();return P(()=>{MathJax.typeset()}),u.$$set=e=>{"post"in e&&i(0,l=e.post)},[l,f]}class tt extends R{constructor(a){super(),q(this,a,O,G,L,{post:0})}}export{tt as default,Z as load};

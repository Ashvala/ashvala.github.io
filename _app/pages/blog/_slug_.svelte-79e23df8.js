import{S as J,i as R,s as T,e as h,t as S,k as w,j as y,M as L,c as g,a as j,g as H,d as o,n as M,m as x,b as v,P as N,H as d,f as _,o as k,x as q,u as C,v as E,A as P,h as D}from"../../chunks/index-fb3eacf8.js";import{S as U,N as A}from"../../chunks/Nav-4e798ce2.js";import{b as B}from"../../chunks/paths-28a87002.js";import{C as K}from"../../chunks/Container-ac0d5b81.js";import{R as z}from"../../chunks/Row-1273e342.js";function V(u){let a,i=u[0].metadata.title+"",l,f,e,p,t,r,c=u[0].content+"";return{c(){a=h("h1"),l=S(i),f=w(),e=h("h4"),p=S(u[1]),t=w(),r=h("div"),this.h()},l(s){a=g(s,"H1",{class:!0});var m=j(a);l=H(m,i),m.forEach(o),f=M(s),e=g(s,"H4",{class:!0});var n=j(e);p=H(n,u[1]),n.forEach(o),t=M(s),r=g(s,"DIV",{class:!0});var $=j(r);$.forEach(o),this.h()},h(){v(a,"class","title svelte-nbzgqa"),v(e,"class","date svelte-nbzgqa"),v(r,"class","post_content svelte-nbzgqa")},m(s,m){_(s,a,m),d(a,l),_(s,f,m),_(s,e,m),d(e,p),_(s,t,m),_(s,r,m),r.innerHTML=c},p(s,m){m&1&&i!==(i=s[0].metadata.title+"")&&D(l,i),m&1&&c!==(c=s[0].content+"")&&(r.innerHTML=c)},d(s){s&&o(a),s&&o(f),s&&o(e),s&&o(t),s&&o(r)}}}function F(u){let a,i,l,f,e,p;return a=new A({}),l=new z({}),e=new z({props:{$$slots:{default:[V]},$$scope:{ctx:u}}}),{c(){y(a.$$.fragment),i=w(),y(l.$$.fragment),f=w(),y(e.$$.fragment)},l(t){x(a.$$.fragment,t),i=M(t),x(l.$$.fragment,t),f=M(t),x(e.$$.fragment,t)},m(t,r){k(a,t,r),_(t,i,r),k(l,t,r),_(t,f,r),k(e,t,r),p=!0},p(t,r){const c={};r&5&&(c.$$scope={dirty:r,ctx:t}),e.$set(c)},i(t){p||(q(a.$$.fragment,t),q(l.$$.fragment,t),q(e.$$.fragment,t),p=!0)},o(t){C(a.$$.fragment,t),C(l.$$.fragment,t),C(e.$$.fragment,t),p=!1},d(t){E(a,t),t&&o(i),E(l,t),t&&o(f),E(e,t)}}}function G(u){let a,i,l,f,e,p,t,r,c,s,m;return document.title=i=u[0].metadata.title,r=new U({}),s=new K({props:{sm:!0,$$slots:{default:[F]},$$scope:{ctx:u}}}),{c(){a=h("link"),l=h("script"),f=S(`MathJax = {
      tex: {
        inlineMath: [
          ["$", "$"],
          ["\\\\(", "\\\\)"],
        ],
      },
    };
  `),e=h("script"),t=w(),y(r.$$.fragment),c=w(),y(s.$$.fragment),this.h()},l(n){const $=L('[data-svelte="svelte-1izcv9f"]',document.head);a=g($,"LINK",{rel:!0,href:!0}),l=g($,"SCRIPT",{});var b=j(l);f=H(b,`MathJax = {
      tex: {
        inlineMath: [
          ["$", "$"],
          ["\\\\(", "\\\\)"],
        ],
      },
    };
  `),b.forEach(o),e=g($,"SCRIPT",{id:!0,src:!0});var I=j(e);I.forEach(o),$.forEach(o),t=M(n),x(r.$$.fragment,n),c=M(n),x(s.$$.fragment,n),this.h()},h(){v(a,"rel","stylesheet"),v(a,"href","https://cdn.jsdelivr.net/gh/aymanbagabas/iosevka-fonts@v6.1.2/dist/iosevka/iosevka.min.css"),v(e,"id","MathJax-script"),e.async=!0,N(e.src,p="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js")||v(e,"src",p)},m(n,$){d(document.head,a),d(document.head,l),d(l,f),d(document.head,e),_(n,t,$),k(r,n,$),_(n,c,$),k(s,n,$),m=!0},p(n,[$]){(!m||$&1)&&i!==(i=n[0].metadata.title)&&(document.title=i);const b={};$&5&&(b.$$scope={dirty:$,ctx:n}),s.$set(b)},i(n){m||(q(r.$$.fragment,n),q(s.$$.fragment,n),m=!0)},o(n){C(r.$$.fragment,n),C(s.$$.fragment,n),m=!1},d(n){o(a),o(l),o(e),n&&o(t),E(r,n),n&&o(c),E(s,n)}}}async function tt({page:u,fetch:a}){const i=u.params.slug;return{props:{post:await a(`${B}/blog/${i}.json`).then(f=>f.json())}}}function O(u,a,i){let{post:l}=a,f=l.metadata.date.toUpperCase();return P(()=>{MathJax.typeset()}),u.$$set=e=>{"post"in e&&i(0,l=e.post)},[l,f]}class et extends J{constructor(a){super(),R(this,a,O,G,T,{post:0})}}export{et as default,tt as load};

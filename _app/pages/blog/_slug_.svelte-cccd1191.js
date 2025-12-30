import{S as X,i as Y,s as Z,e as i,t as I,k as j,j as tt,I as et,c,a as h,g as x,d as a,n as A,m as at,b as s,J as st,H as t,f as O,o as nt,h as lt,x as rt,u as ot,v as it,A as ct}from"../../chunks/index-2764c135.js";import{N as dt}from"../../chunks/Nav-c3bdf3ae.js";import{b as ut}from"../../chunks/paths-28a87002.js";function ht(d){let n,p,r,f,l,V,T,m,z,D,v,u,_,g,L,N,R,M,k=d[0].metadata.title+"",C,q,y,w,P,E,H=d[0].content+"",$;return document.title=p=d[0].metadata.title,z=new dt({}),{c(){n=i("link"),r=i("script"),f=I(`MathJax = {
      tex: {
        inlineMath: [
          ["$", "$"],
          ["\\\\(", "\\\\)"],
        ],
      },
    };
  `),l=i("script"),T=j(),m=i("div"),tt(z.$$.fragment),D=j(),v=i("article"),u=i("header"),_=i("a"),g=i("span"),L=I("\u2190"),N=I(" All posts"),R=j(),M=i("h1"),C=I(k),q=j(),y=i("time"),w=I(d[1]),P=j(),E=i("div"),this.h()},l(e){const o=et('[data-svelte="svelte-1izcv9f"]',document.head);n=c(o,"LINK",{rel:!0,href:!0}),r=c(o,"SCRIPT",{});var B=h(r);f=x(B,`MathJax = {
      tex: {
        inlineMath: [
          ["$", "$"],
          ["\\\\(", "\\\\)"],
        ],
      },
    };
  `),B.forEach(a),l=c(o,"SCRIPT",{id:!0,src:!0});var Q=h(l);Q.forEach(a),o.forEach(a),T=A(e),m=c(e,"DIV",{class:!0});var J=h(m);at(z.$$.fragment,J),D=A(J),v=c(J,"ARTICLE",{class:!0});var S=h(v);u=c(S,"HEADER",{class:!0});var b=h(u);_=c(b,"A",{href:!0,class:!0});var U=h(_);g=c(U,"SPAN",{class:!0});var K=h(g);L=x(K,"\u2190"),K.forEach(a),N=x(U," All posts"),U.forEach(a),R=A(b),M=c(b,"H1",{class:!0});var F=h(M);C=x(F,k),F.forEach(a),q=A(b),y=c(b,"TIME",{class:!0});var G=h(y);w=x(G,d[1]),G.forEach(a),b.forEach(a),P=A(S),E=c(S,"DIV",{class:!0});var W=h(E);W.forEach(a),S.forEach(a),J.forEach(a),this.h()},h(){s(n,"rel","stylesheet"),s(n,"href","https://cdn.jsdelivr.net/gh/aymanbagabas/iosevka-fonts@v6.1.2/dist/iosevka/iosevka.min.css"),s(l,"id","MathJax-script"),l.async=!0,st(l.src,V="https://cdn.jsdelivr.net/npm/mathjax@3/es5/tex-chtml.js")||s(l,"src",V),s(g,"class","svelte-13zt5z7"),s(_,"href","/blog"),s(_,"class","back-link svelte-13zt5z7"),s(M,"class","title svelte-13zt5z7"),s(y,"class","date svelte-13zt5z7"),s(u,"class","post-header svelte-13zt5z7"),s(E,"class","post_content svelte-13zt5z7"),s(v,"class","post svelte-13zt5z7"),s(m,"class","container svelte-13zt5z7")},m(e,o){t(document.head,n),t(document.head,r),t(r,f),t(document.head,l),O(e,T,o),O(e,m,o),nt(z,m,null),t(m,D),t(m,v),t(v,u),t(u,_),t(_,g),t(g,L),t(_,N),t(u,R),t(u,M),t(M,C),t(u,q),t(u,y),t(y,w),t(v,P),t(v,E),E.innerHTML=H,$=!0},p(e,[o]){(!$||o&1)&&p!==(p=e[0].metadata.title)&&(document.title=p),(!$||o&1)&&k!==(k=e[0].metadata.title+"")&&lt(C,k),(!$||o&1)&&H!==(H=e[0].content+"")&&(E.innerHTML=H)},i(e){$||(rt(z.$$.fragment,e),$=!0)},o(e){ot(z.$$.fragment,e),$=!1},d(e){a(n),a(r),a(l),e&&a(T),e&&a(m),it(z)}}}async function ft({page:d,fetch:n}){const p=d.params.slug;return{props:{post:await n(`${ut}/blog/${p}.json`).then(f=>f.json())}}}function mt(d,n,p){let{post:r}=n,f=r.metadata.date.toUpperCase();return ct(()=>{MathJax.typeset()}),d.$$set=l=>{"post"in l&&p(0,r=l.post)},[r,f]}class zt extends X{constructor(n){super(),Y(this,n,mt,ht,Z,{post:0})}}export{zt as default,ft as load};

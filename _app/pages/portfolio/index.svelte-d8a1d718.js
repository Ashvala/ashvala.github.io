import{S as H,i as I,s as K,J as L,K as R,e as j,k as _,j as p,L as A,c as y,d as c,n as h,m as d,b as $,H as v,f as u,o as g,x as k,u as w,v as b,R as D,M as J,t as x,a as N,g as C,h as M,l as P,O}from"../../chunks/vendor-f762ad99.js";import{N as V}from"../../chunks/Nav-27d955f5.js";import{b as E}from"../../chunks/paths-28a87002.js";function S(i,t,l){const s=i.slice();return s[1]=t[l],s}function q(i){let t,l,s=i[1].metadata.title+"",f,a,o,e;return{c(){t=j("a"),l=j("div"),f=x(s),o=_(),this.h()},l(r){t=y(r,"A",{href:!0});var n=N(t);l=y(n,"DIV",{class:!0,"data-title":!0});var m=N(l);f=C(m,s),m.forEach(c),o=h(n),n.forEach(c),this.h()},h(){$(l,"class","portfolio_link svelte-1pkml4e"),$(l,"data-title",a=i[1].metadata.title),$(t,"href",e=`${E}/${i[1].portfolioslug}`)},m(r,n){u(r,t,n),v(t,l),v(l,f),v(t,o)},p(r,n){n&1&&s!==(s=r[1].metadata.title+"")&&M(f,s),n&1&&a!==(a=r[1].metadata.title)&&$(l,"data-title",a),n&1&&e!==(e=`${E}/${r[1].portfolioslug}`)&&$(t,"href",e)},d(r){r&&c(t)}}}function z(i){let t,l,s,f,a=i[0],o=[];for(let e=0;e<a.length;e+=1)o[e]=q(S(i,a,e));return{c(){t=j("h2"),l=x("Portfolio"),s=_();for(let e=0;e<o.length;e+=1)o[e].c();f=P(),this.h()},l(e){t=y(e,"H2",{class:!0});var r=N(t);l=C(r,"Portfolio"),r.forEach(c),s=h(e);for(let n=0;n<o.length;n+=1)o[n].l(e);f=P(),this.h()},h(){$(t,"class","svelte-1pkml4e")},m(e,r){u(e,t,r),v(t,l),u(e,s,r);for(let n=0;n<o.length;n+=1)o[n].m(e,r);u(e,f,r)},p(e,r){if(r&1){a=e[0];let n;for(n=0;n<a.length;n+=1){const m=S(e,a,n);o[n]?o[n].p(m,r):(o[n]=q(m),o[n].c(),o[n].m(f.parentNode,f))}for(;n<o.length;n+=1)o[n].d(1);o.length=a.length}},d(e){e&&c(t),e&&c(s),O(o,e),e&&c(f)}}}function B(i){let t,l;return t=new J({props:{$$slots:{default:[z]},$$scope:{ctx:i}}}),{c(){p(t.$$.fragment)},l(s){d(t.$$.fragment,s)},m(s,f){g(t,s,f),l=!0},p(s,f){const a={};f&17&&(a.$$scope={dirty:f,ctx:s}),t.$set(a)},i(s){l||(k(t.$$.fragment,s),l=!0)},o(s){w(t.$$.fragment,s),l=!1},d(s){b(t,s)}}}function F(i){let t,l,s,f;return t=new V({}),s=new D({props:{$$slots:{default:[B]},$$scope:{ctx:i}}}),{c(){p(t.$$.fragment),l=_(),p(s.$$.fragment)},l(a){d(t.$$.fragment,a),l=h(a),d(s.$$.fragment,a)},m(a,o){g(t,a,o),u(a,l,o),g(s,a,o),f=!0},p(a,o){const e={};o&17&&(e.$$scope={dirty:o,ctx:a}),s.$set(e)},i(a){f||(k(t.$$.fragment,a),k(s.$$.fragment,a),f=!0)},o(a){w(t.$$.fragment,a),w(s.$$.fragment,a),f=!1},d(a){b(t,a),a&&c(l),b(s,a)}}}function G(i){let t,l,s,f,a,o;return s=new L({}),a=new R({props:{$$slots:{default:[F]},$$scope:{ctx:i}}}),{c(){t=j("link"),l=_(),p(s.$$.fragment),f=_(),p(a.$$.fragment),this.h()},l(e){const r=A('[data-svelte="svelte-vioogd"]',document.head);t=y(r,"LINK",{rel:!0,href:!0}),r.forEach(c),l=h(e),d(s.$$.fragment,e),f=h(e),d(a.$$.fragment,e),this.h()},h(){$(t,"rel","stylesheet"),$(t,"href","https://cdn.jsdelivr.net/gh/aymanbagabas/iosevka-fonts@v6.1.2/dist/iosevka/iosevka.min.css")},m(e,r){v(document.head,t),u(e,l,r),g(s,e,r),u(e,f,r),g(a,e,r),o=!0},p(e,[r]){const n={};r&17&&(n.$$scope={dirty:r,ctx:e}),a.$set(n)},i(e){o||(k(s.$$.fragment,e),k(a.$$.fragment,e),o=!0)},o(e){w(s.$$.fragment,e),w(a.$$.fragment,e),o=!1},d(e){c(t),e&&c(l),b(s,e),e&&c(f),b(a,e)}}}async function X({fetch:i}){return{props:{posts:await i(`${E}/portfolio/portfolio.json`).then(l=>l.json())}}}function Q(i,t,l){let{posts:s}=t;return console.log(s),i.$$set=f=>{"posts"in f&&l(0,s=f.posts)},[s]}class Y extends H{constructor(t){super();I(this,t,Q,G,K,{posts:0})}}export{Y as default,X as load};

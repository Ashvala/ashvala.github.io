import{S as F,i as H,s as R,e as b,t as E,c as w,a as x,g as P,d as $,b as k,f as m,H as D,C,j as _,m as v,o as d,x as u,u as p,v as g,k as y,n as V,r as S,w as q,N as B}from"../../chunks/index-047f7d26.js";import{C as Y}from"../../chunks/Col-c1b93b68.js";import{C as z,R as G}from"../../chunks/Row-962239be.js";import{b as J}from"../../chunks/paths-28a87002.js";import{N as K}from"../../chunks/Nav-d2a73844.js";import{p as N,P as L}from"../../chunks/Footer.svelte_svelte_type_style_lang-c8b8fb08.js";import"../../chunks/preload-helper-e4860ae8.js";function M(f){let t,n,s;return{c(){t=b("div"),n=E(f[0]),s=E(", Ashvala Vinay"),this.h()},l(e){t=w(e,"DIV",{class:!0});var a=x(t);n=P(a,f[0]),s=P(a,", Ashvala Vinay"),a.forEach($),this.h()},h(){k(t,"class","footer svelte-1xjalne")},m(e,a){m(e,t,a),D(t,n),D(t,s)},p:C,i:C,o:C,d(e){e&&$(t)}}}function O(f){return[new Date().getFullYear()]}class Q extends F{constructor(t){super(),H(this,t,O,M,R,{})}}function j(f,t,n){const s=f.slice();return s[1]=t[n],s}function A(f){let t,n,s,e;return n=new L({props:{url:J+"/pdfs/"+f[1].url,meta:f[1]}}),{c(){t=b("div"),_(n.$$.fragment),s=y(),this.h()},l(a){t=w(a,"DIV",{class:!0});var r=x(t);v(n.$$.fragment,r),s=V(r),r.forEach($),this.h()},h(){k(t,"class","pdf_container svelte-t28k36")},m(a,r){m(a,t,r),d(n,t,null),D(t,s),e=!0},p:C,i(a){e||(u(n.$$.fragment,a),e=!0)},o(a){p(n.$$.fragment,a),e=!1},d(a){a&&$(t),g(n)}}}function T(f){let t,n,s=N.publications,e=[];for(let r=0;r<s.length;r+=1)e[r]=A(j(f,s,r));const a=r=>p(e[r],1,1,()=>{e[r]=null});return{c(){t=b("div");for(let r=0;r<e.length;r+=1)e[r].c();this.h()},l(r){t=w(r,"DIV",{class:!0});var i=x(t);for(let o=0;o<e.length;o+=1)e[o].l(i);i.forEach($),this.h()},h(){k(t,"class","content svelte-t28k36")},m(r,i){m(r,t,i);for(let o=0;o<e.length;o+=1)e[o].m(t,null);n=!0},p(r,i){if(i&0){s=N.publications;let o;for(o=0;o<s.length;o+=1){const h=j(r,s,o);e[o]?(e[o].p(h,i),u(e[o],1)):(e[o]=A(h),e[o].c(),u(e[o],1),e[o].m(t,null))}for(S(),o=s.length;o<e.length;o+=1)a(o);q()}},i(r){if(!n){for(let i=0;i<s.length;i+=1)u(e[i]);n=!0}},o(r){e=e.filter(Boolean);for(let i=0;i<e.length;i+=1)p(e[i]);n=!1},d(r){r&&$(t),B(e,r)}}}function U(f){let t,n;return t=new Y({props:{$$slots:{default:[T]},$$scope:{ctx:f}}}),{c(){_(t.$$.fragment)},l(s){v(t.$$.fragment,s)},m(s,e){d(t,s,e),n=!0},p(s,e){const a={};e&16&&(a.$$scope={dirty:e,ctx:s}),t.$set(a)},i(s){n||(u(t.$$.fragment,s),n=!0)},o(s){p(t.$$.fragment,s),n=!1},d(s){g(t,s)}}}function W(f){let t,n,s,e,a,r,i,o,h;return t=new K({}),r=new G({props:{$$slots:{default:[U]},$$scope:{ctx:f}}}),o=new Q({}),{c(){_(t.$$.fragment),n=y(),s=b("h2"),e=E("Publications"),a=y(),_(r.$$.fragment),i=y(),_(o.$$.fragment),this.h()},l(l){v(t.$$.fragment,l),n=V(l),s=w(l,"H2",{class:!0});var c=x(s);e=P(c,"Publications"),c.forEach($),a=V(l),v(r.$$.fragment,l),i=V(l),v(o.$$.fragment,l),this.h()},h(){k(s,"class","svelte-t28k36")},m(l,c){d(t,l,c),m(l,n,c),m(l,s,c),D(s,e),m(l,a,c),d(r,l,c),m(l,i,c),d(o,l,c),h=!0},p(l,c){const I={};c&16&&(I.$$scope={dirty:c,ctx:l}),r.$set(I)},i(l){h||(u(t.$$.fragment,l),u(r.$$.fragment,l),u(o.$$.fragment,l),h=!0)},o(l){p(t.$$.fragment,l),p(r.$$.fragment,l),p(o.$$.fragment,l),h=!1},d(l){g(t,l),l&&$(n),l&&$(s),l&&$(a),g(r,l),l&&$(i),g(o,l)}}}function X(f){let t,n,s;return n=new z({props:{$$slots:{default:[W]},$$scope:{ctx:f}}}),{c(){t=b("div"),_(n.$$.fragment),this.h()},l(e){t=w(e,"DIV",{class:!0});var a=x(t);v(n.$$.fragment,a),a.forEach($),this.h()},h(){k(t,"class","mainContainer svelte-t28k36")},m(e,a){m(e,t,a),d(n,t,null),s=!0},p(e,[a]){const r={};a&16&&(r.$$scope={dirty:a,ctx:e}),n.$set(r)},i(e){s||(u(n.$$.fragment,e),s=!0)},o(e){p(n.$$.fragment,e),s=!1},d(e){e&&$(t),g(n)}}}function Z(f,t,n){return[!1]}class ot extends F{constructor(t){super(),H(this,t,Z,X,R,{ssr:0})}get ssr(){return this.$$.ctx[0]}}export{ot as default};

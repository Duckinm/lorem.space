import{S as t,i as s,s as a,e,a as l,c as n,b as r,d as c,f as i,g as o,h,j as x,n as d}from"../../../svelte.internal.v3.43.0-96cb0da8.js";function f(t){let s,a,f,v,m,u;return{c(){s=e("div"),a=e("div"),f=e("div"),v=e("h1"),m=l(),u=e("p"),this.h()},l(t){s=n(t,"DIV",{class:!0});var e=r(s);a=n(e,"DIV",{class:!0});var l=r(a);f=n(l,"DIV",{});var o=r(f);v=n(o,"H1",{class:!0}),r(v).forEach(c),m=i(o),u=n(o,"P",{class:!0}),r(u).forEach(c),o.forEach(c),l.forEach(c),e.forEach(c),this.h()},h(){o(v,"class","mb-5 text-4xl font-black lg:text-5xl xl:text-6xl"),o(u,"class","mb-5 text-4xl font-black -rotate-6 font-handwriting text-primary lg:text-5xl xl:text-6xl"),o(a,"class","text-center hero-content"),o(s,"class","hero min-h-[50vh]")},m(e,l){h(e,s,l),x(s,a),x(a,f),x(f,v),v.innerHTML=t[0],x(f,m),x(f,u),u.innerHTML=t[1]},p(t,[s]){1&s&&(v.innerHTML=t[0]),2&s&&(u.innerHTML=t[1])},i:d,o:d,d(t){t&&c(s)}}}function v(t,s,a){let{title:e=""}=s,{desc:l=""}=s;return t.$$set=t=>{"title"in t&&a(0,e=t.title),"desc"in t&&a(1,l=t.desc)},[e,l]}class m extends t{constructor(t){super(),s(this,t,v,f,a,{title:0,desc:1})}}export{m as default};
(this["webpackJsonp03-gifapp-node"]=this["webpackJsonp03-gifapp-node"]||[]).push([[0],[,,,,,,,,,,,,,,,function(t,e,n){},function(t,e,n){},,,function(t,e,n){},function(t,e,n){},function(t,e,n){},function(t,e,n){"use strict";n.r(e);var a=n(1),c=n(7),i=n.n(c),r=(n(15),n(2)),s=n(9),u=(n(16),n(0)),o=function(t){var e=t.setCategories,n=Object(a.useState)("Search..."),c=Object(r.a)(n,2),i=c[0],o=c[1],j=function(){o("")};return Object(u.jsx)("form",{onSubmit:function(t){t.preventDefault(),e((function(t){return[i].concat(Object(s.a)(t))})),j()},children:Object(u.jsx)("input",{type:"text",value:i,onChange:function(t){var e=t.target.value;o(e)},onClick:j})})},j=n(10),f=n(6),d=n.n(f),l=n(8),b=function(){var t=Object(l.a)(d.a.mark((function t(e){var n,a,c,i,r;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return n="https://api.giphy.com/v1/gifs/search?api_key=iA39iJnWzk5bUHe4cgfuJC9ZT6RniYOf&q=".concat(encodeURI(e),"&limit=5&rating=r"),t.next=3,fetch(n);case 3:return a=t.sent,t.next=6,a.json();case 6:return c=t.sent,i=c.data,r=i.map((function(t){var e=t.id,n=t.title,a=t.images,c=n.indexOf(" ");return{id:e,title:n.substring(0,c),url:null===a||void 0===a?void 0:a.downsized_medium.url}})),t.abrupt("return",r);case 10:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}(),p=function(t){var e=Object(a.useState)({data:[],loading:!0}),n=Object(r.a)(e,2),c=n[0],i=n[1];return Object(a.useEffect)((function(){b(t).then((function(t){i({data:t,loading:!1})}))}),[t]),c},g=(n(19),n(20),function(t){t.id;var e=t.title,n=t.url;return Object(u.jsxs)("div",{className:"gif-card animate__animated animate__backInDown",children:[Object(u.jsx)("img",{src:n,alt:e,className:"gif-card-image"}),Object(u.jsx)("p",{className:"gif-title",children:e})]})}),O=function(t){var e=t.category,n=p(e),a=n.data,c=n.loading;return Object(u.jsxs)(u.Fragment,{children:[Object(u.jsx)("h1",{children:e}),c&&"Loading...",Object(u.jsx)("div",{className:"gif-grid",children:a.map((function(t){return Object(u.jsx)(g,Object(j.a)({},t),t.id)}))})]})};n(21);var m=function(){var t=Object(a.useState)([]),e=Object(r.a)(t,2),n=e[0],c=e[1];return Object(u.jsxs)("div",{className:"gif-app",children:[Object(u.jsx)("h2",{className:"title-app",children:"GifApp"}),Object(u.jsx)(o,{setCategories:c}),Object(u.jsx)("hr",{}),Object(u.jsx)("ol",{children:n.map((function(t){return Object(u.jsx)(O,{category:t},t)}))})]})};i.a.render(Object(u.jsx)(m,{}),document.getElementById("root"))}],[[22,1,2]]]);
//# sourceMappingURL=main.82b2c242.chunk.js.map
(this["webpackJsonpshopping-cart"]=this["webpackJsonpshopping-cart"]||[]).push([[0],[,,,,,,,,,,,,,function(e,t,n){},function(e,t,n){},function(e,t,n){},,function(e,t,n){},function(e,t,n){},function(e,t,n){"use strict";n.r(t);var c=n(1),i=n.n(c),a=n(8),s=n.n(a),r=(n(13),n(5)),o=n(6),d=n(7),j=(n(14),n(15),n(0)),m=function(e){var t=e.item,n=e.children;return Object(j.jsxs)("div",{className:"Item",children:[Object(j.jsxs)("div",{className:"Item-left",children:[Object(j.jsx)("div",{className:"Item-image",children:Object(j.jsx)("a",{children:Object(j.jsx)("img",{src:t.img})})}),Object(j.jsx)("div",{className:"Item-title",children:t.name}),Object(j.jsx)("div",{className:"Item-description",children:t.description})]}),Object(j.jsxs)("div",{className:"Item-right",children:[Object(j.jsxs)("div",{className:"Item-price",children:["$",t.price]}),n]})]})};var l=function(e){var t=e.items,n=e.onAddToCart;return Object(j.jsx)("ul",{className:"ItemPage-items",children:t.map((function(e){return Object(j.jsx)("li",{className:"ItemPage-item",children:Object(j.jsx)(m,{item:e,onAddToCart:function(){return n(e)},children:Object(j.jsx)("button",{className:"Item-addToCart",onClick:function(){return n(e)},children:"Add to Cart"})})},e.id)}))})},u=[{id:0,img:n.p+"static/media/img1.03e139f6.png",name:"Apple Ipad",descriptions:"The newest Ipad",price:399.99},{id:1,img:n.p+"static/media/img2.d9ac1441.png",name:"Apple Ipad Pro",descriptions:"The newest professional Ipad",price:499.99}],b=function(e){var t=e.activeTab,n=e.onTabChange,c=function(e){return"App-nav-item ".concat(t===e?"selected":"")};return Object(j.jsx)("nav",{className:"App-nav",children:Object(j.jsxs)("ul",{children:[Object(j.jsx)("li",{className:c("items"),children:Object(j.jsx)("button",{onClick:function(){return n("items")},children:"Items"})}),Object(j.jsx)("li",{className:c("cart"),children:Object(j.jsx)("button",{onClick:function(){return n("cart")},children:"Cart"})})]})})};n(17),n(18);var O=function(e){var t=e.items,n=e.onAddOne,c=e.onRemoveOne;return Object(j.jsx)("ul",{className:"CartPage-items",children:t.map((function(e){return Object(j.jsx)("li",{className:"CartPage-item",children:Object(j.jsx)(m,{item:e,children:Object(j.jsxs)("div",{className:"CartItem-controls",children:[Object(j.jsx)("button",{className:"CartItem-removeOne",onClick:function(){return c(e)},children:"-"}),Object(j.jsx)("span",{className:"CartItem-count",children:e.count}),Object(j.jsx)("button",{className:"CartItem-onAddOne",onClick:function(){return n(e)},children:"+"})]})})},e.id)}))})},h=function(e){var t=e.reduce((function(e,t){return e[t.id]=e[t.id]||Object(d.a)(Object(d.a)({},t),{},{count:0}),e[t.id].count++,e}),{});return Object.values(t)},p=function(e){var t=e.tab,n=e.onAddToCart,c=e.cart,i=e.onRemoveItem;switch(t){case"items":return Object(j.jsx)(l,{items:u,onAddToCart:n});case"cart":return Object(j.jsx)(O,{items:c,onAddOne:n,onRemoveOne:i})}},x=function(){var e=Object(c.useState)("items"),t=Object(o.a)(e,2),n=t[0],i=t[1],a=Object(c.useState)([]),s=Object(o.a)(a,2),d=s[0],m=s[1];return Object(j.jsxs)("div",{className:"App",children:[Object(j.jsx)(b,{activeTab:n,onTabChange:i}),Object(j.jsx)("main",{className:"App-content",children:Object(j.jsx)(p,{tab:n,onAddToCart:function(e){m([].concat(Object(r.a)(d),[e]))},cart:h(d),onRemoveItem:function(e){var t=d.findIndex((function(t){return t.id===e.id}));t>=0&&m((function(e){var n=Object(r.a)(e);return n.splice(t,1),n}))}})})]})},f=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,20)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(x,{})}),document.getElementById("root")),f()}],[[19,1,2]]]);
//# sourceMappingURL=main.bc56ef27.chunk.js.map
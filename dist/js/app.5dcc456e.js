(function(){"use strict";var e={7106:function(e,n,t){var r=t(3751),o=t(1250),i=t(1021),a=t(3688),c=t.n(a),u=t(4042),d=t.n(u),l=t(8640);function s(e){const n=parseInt(e,10);return`${n.toFixed(0).replace(/./g,((e,n,t)=>n&&"."!==e&&(t.length-n)%3===0?`, ${e}`.replace(/\s/g,""):e))}`}function f(e){const n=new Date(1e3*e);return n.toLocaleDateString()}var p=t(5261),m=t(3505),h=t(7013),b=t(1066),v=t(641);function g(e,n){const t=(0,v.g2)("router-view");return(0,v.uX)(),(0,v.Wv)(t)}var y=t(6262);const w={},P=(0,y.A)(w,[["render",g]]);var k=P,O=t(5220);const E=[{path:"/login",name:"login",component:()=>Promise.all([t.e(114),t.e(744)]).then(t.bind(t,5744))},{path:"/dashboard",name:"dashboard",component:()=>Promise.all([t.e(114),t.e(681),t.e(73),t.e(149)]).then(t.bind(t,4149)),children:[{path:"products",name:"products",component:()=>Promise.all([t.e(114),t.e(681),t.e(350),t.e(600)]).then(t.bind(t,3600))},{path:"orders",name:"orders",component:()=>Promise.all([t.e(681),t.e(350),t.e(417)]).then(t.bind(t,1417))},{path:"coupon",name:"coupon",component:()=>Promise.all([t.e(681),t.e(350),t.e(550)]).then(t.bind(t,1550))},{path:"articles",name:"articles",component:()=>Promise.all([t.e(681),t.e(350),t.e(543)]).then(t.bind(t,8543))}]},{path:"/user",name:"user",component:()=>Promise.all([t.e(114),t.e(681),t.e(73),t.e(825)]).then(t.bind(t,6055)),children:[{path:"index",name:"index",component:()=>Promise.all([t.e(114),t.e(910),t.e(268)]).then(t.bind(t,8569))},{path:"productsList",name:"productsList",component:()=>Promise.all([t.e(114),t.e(681),t.e(461)]).then(t.bind(t,4461))},{path:"product/:productId",name:"product",component:()=>Promise.all([t.e(114),t.e(681),t.e(910),t.e(621)]).then(t.bind(t,7621))},{path:"articlesList",name:"articlesList",component:()=>Promise.all([t.e(114),t.e(498)]).then(t.bind(t,9498))},{path:"article/:id",name:"article",component:()=>t.e(919).then(t.bind(t,4919))},{path:"favorite",name:"favorite",component:()=>Promise.all([t.e(114),t.e(746)]).then(t.bind(t,1746))},{path:"cart",name:"cart",component:()=>Promise.all([t.e(114),t.e(589)]).then(t.bind(t,1589))},{path:"information",name:"information",component:()=>Promise.all([t.e(114),t.e(938)]).then(t.bind(t,4938))},{path:"checkout/:orderId",name:"checkout",component:()=>t.e(974).then(t.bind(t,974))},{path:"inquire",name:"inquire",component:()=>t.e(865).then(t.bind(t,7865))}]}],j=(0,O.aE)({history:(0,O.Bt)("http://127.0.0.1:5500/dist/"),base:"/dist/",routes:E,linkActiveClass:"active",scrollBehavior(e){return e.fullPath.match("user")?{top:0}:{}}});var x=j;(0,p.Km)("required",m.mw),(0,p.Km)("email",m.Rp),(0,p.Km)("min",m.jk),(0,p.jK)({generateMessage:(0,h.kg)({zh_TW:b}),validateOnInput:!0}),(0,h.xS)("zh_TW");const C=(0,r.Ef)(k);C.config.globalProperties.$filters={currency:s,date:f},d().init({duration:1500}),C.use(i.A,o.A),C.use(x),C.use(l.A),C.component("Loading",c()),C.component("Form",p.lV),C.component("Field",p.D0),C.component("ErrorMessage",p.Kw),C.mount("#app")}},n={};function t(r){var o=n[r];if(void 0!==o)return o.exports;var i=n[r]={id:r,loaded:!1,exports:{}};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}t.m=e,function(){t.amdO={}}(),function(){var e=[];t.O=function(n,r,o,i){if(!r){var a=1/0;for(l=0;l<e.length;l++){r=e[l][0],o=e[l][1],i=e[l][2];for(var c=!0,u=0;u<r.length;u++)(!1&i||a>=i)&&Object.keys(t.O).every((function(e){return t.O[e](r[u])}))?r.splice(u--,1):(c=!1,i<a&&(a=i));if(c){e.splice(l--,1);var d=o();void 0!==d&&(n=d)}}return n}i=i||0;for(var l=e.length;l>0&&e[l-1][2]>i;l--)e[l]=e[l-1];e[l]=[r,o,i]}}(),function(){t.n=function(e){var n=e&&e.__esModule?function(){return e["default"]}:function(){return e};return t.d(n,{a:n}),n}}(),function(){t.d=function(e,n){for(var r in n)t.o(n,r)&&!t.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:n[r]})}}(),function(){t.f={},t.e=function(e){return Promise.all(Object.keys(t.f).reduce((function(n,r){return t.f[r](e,n),n}),[]))}}(),function(){t.u=function(e){return"js/"+e+"."+{73:"9a26f2c3",114:"4da00857",149:"841e286d",268:"c3e3a29e",350:"5b596c35",417:"fffddd56",461:"ee21c70d",498:"d0274641",543:"34dfd487",550:"01258f7e",589:"bc463485",600:"e7b43aca",621:"37089f0d",681:"77ac97af",744:"ffa0a3da",746:"4396b476",825:"eed92c89",865:"d576e2d1",910:"a92df498",919:"7f1ec794",938:"823ea68b",974:"31a8534c"}[e]+".js"}}(),function(){t.miniCssF=function(e){return"css/"+e+"."+{268:"5f6aa9fc",621:"5f6aa9fc"}[e]+".css"}}(),function(){t.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(e){if("object"===typeof window)return window}}()}(),function(){t.hmd=function(e){return e=Object.create(e),e.children||(e.children=[]),Object.defineProperty(e,"exports",{enumerable:!0,set:function(){throw new Error("ES Modules may not assign module.exports or exports.*, Use ESM export syntax, instead: "+e.id)}}),e}}(),function(){t.o=function(e,n){return Object.prototype.hasOwnProperty.call(e,n)}}(),function(){var e={},n="final-hw:";t.l=function(r,o,i,a){if(e[r])e[r].push(o);else{var c,u;if(void 0!==i)for(var d=document.getElementsByTagName("script"),l=0;l<d.length;l++){var s=d[l];if(s.getAttribute("src")==r||s.getAttribute("data-webpack")==n+i){c=s;break}}c||(u=!0,c=document.createElement("script"),c.charset="utf-8",c.timeout=120,t.nc&&c.setAttribute("nonce",t.nc),c.setAttribute("data-webpack",n+i),c.src=r),e[r]=[o];var f=function(n,t){c.onerror=c.onload=null,clearTimeout(p);var o=e[r];if(delete e[r],c.parentNode&&c.parentNode.removeChild(c),o&&o.forEach((function(e){return e(t)})),n)return n(t)},p=setTimeout(f.bind(null,void 0,{type:"timeout",target:c}),12e4);c.onerror=f.bind(null,c.onerror),c.onload=f.bind(null,c.onload),u&&document.head.appendChild(c)}}}(),function(){t.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}}(),function(){t.p="/dist/"}(),function(){if("undefined"!==typeof document){var e=function(e,n,r,o,i){var a=document.createElement("link");a.rel="stylesheet",a.type="text/css",t.nc&&(a.nonce=t.nc);var c=function(t){if(a.onerror=a.onload=null,"load"===t.type)o();else{var r=t&&t.type,c=t&&t.target&&t.target.href||n,u=new Error("Loading CSS chunk "+e+" failed.\n("+r+": "+c+")");u.name="ChunkLoadError",u.code="CSS_CHUNK_LOAD_FAILED",u.type=r,u.request=c,a.parentNode&&a.parentNode.removeChild(a),i(u)}};return a.onerror=a.onload=c,a.href=n,r?r.parentNode.insertBefore(a,r.nextSibling):document.head.appendChild(a),a},n=function(e,n){for(var t=document.getElementsByTagName("link"),r=0;r<t.length;r++){var o=t[r],i=o.getAttribute("data-href")||o.getAttribute("href");if("stylesheet"===o.rel&&(i===e||i===n))return o}var a=document.getElementsByTagName("style");for(r=0;r<a.length;r++){o=a[r],i=o.getAttribute("data-href");if(i===e||i===n)return o}},r=function(r){return new Promise((function(o,i){var a=t.miniCssF(r),c=t.p+a;if(n(a,c))return o();e(r,c,null,o,i)}))},o={524:0};t.f.miniCss=function(e,n){var t={268:1,621:1};o[e]?n.push(o[e]):0!==o[e]&&t[e]&&n.push(o[e]=r(e).then((function(){o[e]=0}),(function(n){throw delete o[e],n})))}}}(),function(){var e={524:0};t.f.j=function(n,r){var o=t.o(e,n)?e[n]:void 0;if(0!==o)if(o)r.push(o[2]);else{var i=new Promise((function(t,r){o=e[n]=[t,r]}));r.push(o[2]=i);var a=t.p+t.u(n),c=new Error,u=function(r){if(t.o(e,n)&&(o=e[n],0!==o&&(e[n]=void 0),o)){var i=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;c.message="Loading chunk "+n+" failed.\n("+i+": "+a+")",c.name="ChunkLoadError",c.type=i,c.request=a,o[1](c)}};t.l(a,u,"chunk-"+n,n)}},t.O.j=function(n){return 0===e[n]};var n=function(n,r){var o,i,a=r[0],c=r[1],u=r[2],d=0;if(a.some((function(n){return 0!==e[n]}))){for(o in c)t.o(c,o)&&(t.m[o]=c[o]);if(u)var l=u(t)}for(n&&n(r);d<a.length;d++)i=a[d],t.o(e,i)&&e[i]&&e[i][0](),e[i]=0;return t.O(l)},r=self["webpackChunkfinal_hw"]=self["webpackChunkfinal_hw"]||[];r.forEach(n.bind(null,0)),r.push=n.bind(null,r.push.bind(r))}();var r=t.O(void 0,[504],(function(){return t(7106)}));r=t.O(r)})();
//# sourceMappingURL=app.5dcc456e.js.map
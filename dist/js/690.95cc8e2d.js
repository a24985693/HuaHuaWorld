"use strict";(self["webpackChunkfinal_hw"]=self["webpackChunkfinal_hw"]||[]).push([[690],{5690:function(a,t,e){e.r(t),e.d(t,{default:function(){return y}});var s=e(641);const n={class:"container",style:{"margin-top":"80px"}};function o(a,t,e,o,l,r){const c=(0,s.g2)("Navbar"),i=(0,s.g2)("ToastMessages"),u=(0,s.g2)("router-view");return(0,s.uX)(),(0,s.CE)(s.FK,null,[(0,s.bF)(c),(0,s.Lk)("div",n,[(0,s.bF)(i),(0,s.bF)(u)])],64)}e(4114);var l=e(7483),r=e(3751);const c={class:"navbar fixed-top navbar-expand-md navbar-light bg-light"},i={class:"container"},u=(0,s.Lk)("button",{class:"navbar-toggler border-none",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNav","aria-controls":"navbarNav","aria-expanded":"false","aria-label":"Toggle navigation"},[(0,s.Lk)("span",{class:"navbar-toggler-icon"})],-1),d={class:"collapse navbar-collapse",id:"navbarNav"},v={class:"navbar-nav ms-auto"},b={class:"nav-item"},h={class:"nav-item"},k={class:"nav-item"},p={class:"nav-item"},g={class:"nav-item"};function m(a,t,e,n,o,l){const m=(0,s.g2)("router-link");return(0,s.uX)(),(0,s.CE)("nav",c,[(0,s.Lk)("div",i,[(0,s.bF)(m,{class:"navbar-brand",to:"/"},{default:(0,s.k6)((()=>[(0,s.eW)("花花世界")])),_:1}),u,(0,s.Lk)("div",d,[(0,s.Lk)("ul",v,[(0,s.Lk)("li",b,[(0,s.bF)(m,{class:"nav-link mx-1",to:"/dashboard/products"},{default:(0,s.k6)((()=>[(0,s.eW)("產品列表")])),_:1})]),(0,s.Lk)("li",h,[(0,s.bF)(m,{class:"nav-link mx-1",to:"/dashboard/orders"},{default:(0,s.k6)((()=>[(0,s.eW)("訂單")])),_:1})]),(0,s.Lk)("li",k,[(0,s.bF)(m,{class:"nav-link mx-1",to:"/dashboard/coupon"},{default:(0,s.k6)((()=>[(0,s.eW)("優惠券")])),_:1})]),(0,s.Lk)("li",p,[(0,s.bF)(m,{class:"nav-link mx-1",to:"/dashboard/articles"},{default:(0,s.k6)((()=>[(0,s.eW)("文章")])),_:1})]),(0,s.Lk)("li",g,[(0,s.Lk)("a",{class:"nav-link mx-1",type:"button",onClick:t[0]||(t[0]=(0,r.D$)(((...a)=>l.logout&&l.logout(...a)),["prevent"]))},"登出")])])])])])}var f=e(8647),L=e.n(f),x={methods:{logout(){const a="https://vue3-course-api.hexschool.io/logout";this.$http.post(a).then((a=>{a.data.success&&this.$router.push("/login")}))}},created(){},mounted(){const a=document.querySelectorAll(".nav-item"),t=document.getElementById("navbarNav"),e=new(L())(t,{toggle:!1});a.forEach((a=>{a.addEventListener("click",(()=>{e.toggle()}))}))}},F=e(6262);const $=(0,F.A)(x,[["render",m]]);var _=$,w=e(1653),A={components:{Navbar:_,ToastMessages:w.A},provide(){return{emitter:l.A}},created(){const a=document.cookie.replace(/(?:(?:^|.*;\s*)hexToken\s*=\s*([^;]*).*$)|^.*$/,"$1");this.$http.defaults.headers.common.Authorization=a;const t="https://vue3-course-api.hexschool.io/api/user/check";this.$http.post(t).then((a=>{a.data.success||this.$router.push("/login")}))}};const N=(0,F.A)(A,[["render",o]]);var y=N}}]);
//# sourceMappingURL=690.95cc8e2d.js.map
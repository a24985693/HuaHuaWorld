"use strict";(self["webpackChunkfinal_hw"]=self["webpackChunkfinal_hw"]||[]).push([[744],{5744:function(s,e,t){t.r(e),t.d(e,{default:function(){return f}});var n=t(641),a=t(3751);const o={class:"container"},r={class:"col-md-6"},i=(0,n.Lk)("h1",{class:"h3 mb-3"},"請先登入",-1),u={class:"mb-3"},d=(0,n.Lk)("label",{for:"inputEmail"},"Email address",-1),l={class:"mb-3"},c=(0,n.Lk)("label",{for:"inputPassword"},"Password",-1),p=(0,n.Lk)("div",{class:"text-end"},[(0,n.Lk)("button",{class:"btn btn-lg btn-primary",type:"submit"},"登入")],-1);function m(s,e,t,m,h,k){return(0,n.uX)(),(0,n.CE)("div",o,[(0,n.Lk)("form",{class:"row justify-content-center",onSubmit:e[2]||(e[2]=(0,a.D$)(((...s)=>k.signIn&&k.signIn(...s)),["prevent"]))},[(0,n.Lk)("div",r,[i,(0,n.Lk)("div",u,[d,(0,n.bo)((0,n.Lk)("input",{type:"email",id:"inputEmail",class:"form-control","onUpdate:modelValue":e[0]||(e[0]=s=>h.user.username=s)},null,512),[[a.Jo,h.user.username]])]),(0,n.Lk)("div",l,[c,(0,n.bo)((0,n.Lk)("input",{type:"password",id:"inputPassword",class:"form-control","onUpdate:modelValue":e[1]||(e[1]=s=>h.user.password=s)},null,512),[[a.Jo,h.user.password]])]),p])],32)])}t(4114);var h={data(){return{user:{username:"",password:""}}},methods:{signIn(){const s="https://vue3-course-api.hexschool.io/admin/signin";this.$http.post(s,this.user).then((s=>{if(s.data.success){const{token:e,expired:t}=s.data;document.cookie=`hexToken=${e}; expires=${new Date(t)}`,this.$router.push("/dashboard/products")}}))}},created(){}},k=t(6262);const b=(0,k.A)(h,[["render",m]]);var f=b}}]);
//# sourceMappingURL=744.ffa0a3da.js.map
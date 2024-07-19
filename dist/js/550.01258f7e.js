"use strict";(self["webpackChunkfinal_hw"]=self["webpackChunkfinal_hw"]||[]).push([[550],{1550:function(t,e,o){o.r(e),o.d(e,{default:function(){return at}});var a=o(641),n=o(3751),l=o(33);const s={class:"text-end"},i={class:"table-responsive"},d={class:"table text-nowrap"},u=(0,a.Lk)("thead",null,[(0,a.Lk)("tr",null,[(0,a.Lk)("th",null,"名稱"),(0,a.Lk)("th",null,"折扣百分比"),(0,a.Lk)("th",null,"到期日"),(0,a.Lk)("th",null,"是否啟用"),(0,a.Lk)("th",null,"編輯")])],-1),p={key:0,class:"text-success"},c={key:1,class:"text-muted"},m={class:"btn-group"},r=["onClick"],b=["onClick"];function h(t,e,o,h,k,C){const L=(0,a.g2)("Loading"),g=(0,a.g2)("CouponModal"),v=(0,a.g2)("DelCouponModal"),f=(0,a.g2)("Pagination");return(0,a.uX)(),(0,a.CE)(a.FK,null,[(0,a.bF)(L,{active:k.isLoading},null,8,["active"]),(0,a.Lk)("div",s,[(0,a.Lk)("button",{class:"btn btn-secondary",onClick:e[0]||(e[0]=(0,n.D$)((t=>C.openModal(!0)),["prevent"]))},"新增優惠券 ")]),(0,a.Lk)("div",i,[(0,a.Lk)("table",d,[u,(0,a.Lk)("tbody",null,[((0,a.uX)(!0),(0,a.CE)(a.FK,null,(0,a.pI)(k.coupons,(e=>((0,a.uX)(),(0,a.CE)("tr",{key:e.id},[(0,a.Lk)("td",null,(0,l.v_)(e.title),1),(0,a.Lk)("td",null,(0,l.v_)(e.percent)+"%",1),(0,a.Lk)("td",null,(0,l.v_)(t.$filters.date(e.due_date)),1),(0,a.Lk)("td",null,[e.is_enabled?((0,a.uX)(),(0,a.CE)("span",p,"啟用")):((0,a.uX)(),(0,a.CE)("span",c,"未啟用"))]),(0,a.Lk)("td",null,[(0,a.Lk)("div",m,[(0,a.Lk)("button",{class:"btn btn-outline-gray btn-sm",onClick:t=>C.openModal(!1,e)},"編輯",8,r),(0,a.Lk)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>C.openDelModal(e)},"刪除",8,b)])])])))),128))])])]),(0,a.bF)(g,{ref:"CouponModal",coupon:k.tempCoupon,onUpdateCoupon:C.updateCoupon},null,8,["coupon","onUpdateCoupon"]),(0,a.bF)(v,{ref:"DelCouponModal",coupon:k.tempCoupon,onDeleteCoupon:C.deleteCoupon},null,8,["coupon","onDeleteCoupon"]),(0,a.bF)(f,{pagination:k.pagination,onUpdatePage:C.getCoupons},null,8,["pagination","onUpdatePage"])],64)}const k={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},C={class:"modal-dialog modal-lg"},L={class:"modal-content"},g={class:"modal-header bg-dark text-white"},v={class:"modal-title",id:"exampleModalLabel"},f={key:0},y={key:1},M=(0,a.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),x={class:"modal-body"},D={class:"mb-3"},w=(0,a.Lk)("label",{for:"title"},"請輸入標題",-1),_={class:"mb-3"},$=(0,a.Lk)("label",{for:"code"},"請輸入優惠碼",-1),E={class:"mb-3"},U=(0,a.Lk)("label",{for:"dueDate"},"到期日",-1),X={class:"mb-3"},A=(0,a.Lk)("label",{for:"price"},"請輸入折扣百分比",-1),F={class:"mb-3"},P=(0,a.Lk)("label",{for:"is_enabled"},"是否啟用",-1),V={class:"modal-footer"},J=(0,a.Lk)("button",{type:"button",class:"btn btn-gray","data-bs-dismiss":"modal"},"取消",-1);function N(t,e,o,l,s,i){return(0,a.uX)(),(0,a.CE)("div",k,[(0,a.Lk)("div",C,[(0,a.Lk)("div",L,[(0,a.Lk)("div",g,[(0,a.Lk)("h5",v,[s.tempCoupon.id?((0,a.uX)(),(0,a.CE)("span",f,"編輯優惠券")):((0,a.uX)(),(0,a.CE)("span",y,"新增優惠券"))]),M]),(0,a.Lk)("div",x,[(0,a.Lk)("div",D,[w,(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[0]||(e[0]=t=>s.tempCoupon.title=t)},null,512),[[n.Jo,s.tempCoupon.title]])]),(0,a.Lk)("div",_,[$,(0,a.bo)((0,a.Lk)("input",{type:"text",class:"form-control",id:"code","onUpdate:modelValue":e[1]||(e[1]=t=>s.tempCoupon.code=t)},null,512),[[n.Jo,s.tempCoupon.code]])]),(0,a.Lk)("div",E,[U,(0,a.bo)((0,a.Lk)("input",{type:"date",class:"form-control",id:"dueDate","onUpdate:modelValue":e[2]||(e[2]=t=>s.dueDate=t)},null,512),[[n.Jo,s.dueDate]])]),(0,a.Lk)("div",X,[A,(0,a.bo)((0,a.Lk)("input",{type:"number",class:"form-control",id:"price","onUpdate:modelValue":e[3]||(e[3]=t=>s.tempCoupon.percent=t)},null,512),[[n.Jo,s.tempCoupon.percent]])]),(0,a.Lk)("div",F,[(0,a.bo)((0,a.Lk)("input",{type:"checkbox",class:"form-check-input",id:"is_enabled","true-value":1,"false-value":0,"onUpdate:modelValue":e[4]||(e[4]=t=>s.tempCoupon.is_enabled=t)},null,512),[[n.lH,s.tempCoupon.is_enabled]]),P])]),(0,a.Lk)("div",V,[J,(0,a.Lk)("button",{type:"button",class:"btn btn-secondary",onClick:e[5]||(e[5]=e=>t.$emit("update-coupon",s.tempCoupon))},"確認")])])])],512)}var j=o(3286),I={props:{coupon:{}},watch:{coupon(){this.tempCoupon=this.coupon;const t=new Date(1e3*this.tempCoupon.due_date).toISOString().split("T");[this.dueDate]=t},dueDate(){this.tempCoupon.due_date=Math.floor(new Date(this.dueDate)/1e3)}},data(){return{tempCoupon:{},dueDate:""}},mixins:[j.A]},K=o(6262);const S=(0,K.A)(I,[["render",N]]);var T=S;const H={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},O={class:"modal-dialog"},q={class:"modal-content"},z=(0,a.Lk)("div",{class:"modal-header bg-dark"},[(0,a.Lk)("h5",{class:"modal-title text-white",id:"exampleModalLabel"},"刪除優惠券"),(0,a.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),B={class:"modal-body"},G={class:"modal-footer"},Q=(0,a.Lk)("button",{type:"button",class:"btn btn-gray","data-bs-dismiss":"modal"},"取消",-1);function R(t,e,o,n,s,i){return(0,a.uX)(),(0,a.CE)("div",H,[(0,a.Lk)("div",O,[(0,a.Lk)("div",q,[z,(0,a.Lk)("div",B," 確定要刪除 "+(0,l.v_)(s.tempCoupon.title)+" 嗎? ",1),(0,a.Lk)("div",G,[Q,(0,a.Lk)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=e=>t.$emit("delete-coupon",s.tempCoupon))},"刪除")])])])],512)}var W={props:{coupon:{}},watch:{coupon(){this.tempCoupon=this.coupon}},data(){return{tempCoupon:{}}},mixins:[j.A]};const Y=(0,K.A)(W,[["render",R]]);var Z=Y,tt=o(4977),et={components:{CouponModal:T,DelCouponModal:Z,Pagination:tt.A},data(){return{coupons:[],tempCoupon:{},pagination:{},isNew:!1,isLoading:!1}},inject:["emitter"],methods:{getCoupons(t=1){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/cms67/admin/coupons?page=${t}`;this.$http.get(e).then((t=>{this.isLoading=!1,this.coupons=t.data.coupons,this.pagination=t.data.pagination}))},openModal(t,e){this.isNew=t,this.tempCoupon=t?{due_date:(new Date).getTime()/1e3}:{...e},this.$refs.CouponModal.showModal()},updateCoupon(t){this.isLoading=!0,this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/cms67/admin/coupon",o="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/cms67/admin/coupon/${t.id}`,o="put"),this.$http[o](e,{data:this.tempProduct}).then((t=>{this.isLoading=!1,this.$refs.CouponModal.hideModal();let e="新增成功";this.isNew||(e="更新成功"),t.data.success?(this.getCoupons(),this.emitter.emit("push-message",{style:"success",title:e})):this.emitter.emit("push-message",{style:"danger",title:e,content:t.data.message.join("、")})}))},openDelModal(t){this.tempCoupon=t,this.$refs.DelCouponModal.showModal()},deleteCoupon(t){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/cms67/admin/coupon/${t.id}`;this.$http.delete(e).then((t=>{this.isLoading=!1,this.$refs.DelCouponModal.hideModal(),this.getCoupons(),t.data.success?this.emitter.emit("delete-message",{style:"success",title:"刪除成功"}):this.emitter.emit("delete-message",{style:"danger",title:"刪除失敗",content:t.data.message.join("、")})}))}},created(){this.getCoupons()}};const ot=(0,K.A)(et,[["render",h]]);var at=ot}}]);
//# sourceMappingURL=550.01258f7e.js.map
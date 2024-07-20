"use strict";(self["webpackChunkfinal_hw"]=self["webpackChunkfinal_hw"]||[]).push([[630],{3630:function(t,e,l){l.r(e),l.d(e,{default:function(){return Lt}});var i=l(641),a=l(33);const s={class:"text-end"},o={class:"table-responsive"},n={class:"table text-nowrap"},c=(0,i.Lk)("thead",null,[(0,i.Lk)("tr",null,[(0,i.Lk)("th",null,"標籤"),(0,i.Lk)("th",null,"標題"),(0,i.Lk)("th",{width:"120"},"創作時間"),(0,i.Lk)("th",{width:"120"},"作者"),(0,i.Lk)("th",{width:"100"},"是否啟用"),(0,i.Lk)("th",{width:"200"},"編輯")])],-1),r={key:0,class:"text-success"},d={key:1,class:"text-muted"},p={class:"btn-group"},u=["onClick"],m=["onClick"];function h(t,e,l,h,b,k){const L=(0,i.g2)("Loading"),g=(0,i.g2)("Pagination"),A=(0,i.g2)("ArticleModal"),f=(0,i.g2)("DelArticleModal");return(0,i.uX)(),(0,i.CE)(i.FK,null,[(0,i.bF)(L,{active:b.isLoading},null,8,["active"]),(0,i.Lk)("div",s,[(0,i.Lk)("button",{type:"button",class:"btn btn-secondary",onClick:e[0]||(e[0]=t=>k.openModal(!0))}," 新增文章 ")]),(0,i.Lk)("div",o,[(0,i.Lk)("table",n,[c,(0,i.Lk)("tbody",null,[((0,i.uX)(!0),(0,i.CE)(i.FK,null,(0,i.pI)(b.articles,(e=>((0,i.uX)(),(0,i.CE)("tr",{key:e.id},[(0,i.Lk)("td",null,(0,a.v_)(e.tag),1),(0,i.Lk)("td",null,(0,a.v_)(e.title),1),(0,i.Lk)("td",null,(0,a.v_)(t.$filters.date(e.create_at)),1),(0,i.Lk)("td",null,(0,a.v_)(e.author),1),(0,i.Lk)("td",null,[e.isPublic?((0,i.uX)(),(0,i.CE)("span",r,"公開")):((0,i.uX)(),(0,i.CE)("span",d,"未公開"))]),(0,i.Lk)("td",null,[(0,i.Lk)("div",p,[(0,i.Lk)("button",{class:"btn btn-outline-gray btn-sm",type:"button",onClick:t=>k.getArticle(!1,e)},"編輯",8,u),(0,i.Lk)("button",{class:"btn btn-outline-danger btn-sm",type:"button",onClick:t=>k.openDelModal(e)},"刪除",8,m)])])])))),128))])])]),(0,i.bF)(g,{pagination:b.pagination,onUpdatePage:k.getArticles},null,8,["pagination","onUpdatePage"]),(0,i.bF)(A,{ref:"ArticleModal",article:b.tempArticle,onUpdateArticle:k.updateArticle},null,8,["article","onUpdateArticle"]),(0,i.bF)(f,{ref:"DelArticleModal",article:b.tempArticle,onDeleteArticle:k.deleteArticle},null,8,["article","onDeleteArticle"])],64)}var b=l(3751);const k={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},L={class:"modal-dialog modal-lg",role:"document"},g={class:"modal-content border-0"},A={class:"modal-header bg-dark text-white"},f={class:"modal-title",id:"exampleModalLabel"},v={key:0},y={key:1},x=(0,i.Lk)("button",{type:"button",class:"btn-close text-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),w={class:"modal-body"},M={class:"modal-body"},C={class:"mb-3"},$=(0,i.Lk)("label",{for:"tag"},"請輸入標籤",-1),_={class:"mb-3"},F=(0,i.Lk)("label",{for:"title"},"請輸入標題",-1),D={class:"mb-3"},U=(0,i.Lk)("label",{for:"author"},"請輸入作者",-1),E={class:"mb-3"},X=(0,i.Lk)("label",{for:"content"},"請輸入內容",-1),P={class:"mb-3"},V=(0,i.Lk)("label",{for:"create_at"},"創作日期",-1),J={class:"mb-3"},j=(0,i.Lk)("label",{for:"is_public"},"是否公開",-1),N=(0,i.Lk)("hr",null,null,-1),I={class:"my-5"},K={class:"mb-5"},S=(0,i.Lk)("label",{for:"image",class:"form-label"},"輸入圖片網址",-1),T={class:"mb-3 input-group"},H={type:"text",class:"form-control",placeholder:"請輸入圖片連結",ref:"inputLink"},O=(0,i.Lk)("label",{for:"customFile",class:"form-label"},[(0,i.eW)("或上傳圖片 "),(0,i.Lk)("i",{class:"fas fa-spinner fa-spin"})],-1),Q={key:0,class:"row justify-content-center"},W={class:"col-md-6"},q=["src"],z={class:"mb-3 input-group"},B={class:"modal-footer"},G=(0,i.Lk)("button",{type:"button",class:"btn btn-gray","data-bs-dismiss":"modal"},"取消",-1);function R(t,e,l,a,s,o){return(0,i.uX)(),(0,i.CE)("div",k,[(0,i.Lk)("div",L,[(0,i.Lk)("div",g,[(0,i.Lk)("div",A,[(0,i.Lk)("h5",f,[s.tempArticle.id?((0,i.uX)(),(0,i.CE)("span",v,"編輯文章")):((0,i.uX)(),(0,i.CE)("span",y,"新增文章"))]),x]),(0,i.Lk)("div",w,[(0,i.Lk)("div",M,[(0,i.Lk)("div",C,[$,(0,i.bo)((0,i.Lk)("input",{type:"text",class:"form-control",id:"tag","onUpdate:modelValue":e[0]||(e[0]=t=>s.tempArticle.tag=t)},null,512),[[b.Jo,s.tempArticle.tag]])]),(0,i.Lk)("div",_,[F,(0,i.bo)((0,i.Lk)("input",{type:"text",class:"form-control",id:"title","onUpdate:modelValue":e[1]||(e[1]=t=>s.tempArticle.title=t)},null,512),[[b.Jo,s.tempArticle.title]])]),(0,i.Lk)("div",D,[U,(0,i.bo)((0,i.Lk)("input",{type:"text",class:"form-control",id:"author","onUpdate:modelValue":e[2]||(e[2]=t=>s.tempArticle.author=t)},null,512),[[b.Jo,s.tempArticle.author]])]),(0,i.Lk)("div",E,[X,(0,i.bo)((0,i.Lk)("textarea",{type:"text",class:"form-control",id:"content","onUpdate:modelValue":e[3]||(e[3]=t=>s.tempArticle.content=t)},"\r\n              ",512),[[b.Jo,s.tempArticle.content]])]),(0,i.Lk)("div",P,[V,(0,i.bo)((0,i.Lk)("input",{type:"date",class:"form-control",id:"create_at","onUpdate:modelValue":e[4]||(e[4]=t=>s.createdAt=t)},null,512),[[b.Jo,s.createdAt]])]),(0,i.Lk)("div",J,[(0,i.bo)((0,i.Lk)("input",{type:"checkbox",class:"form-check-input",id:"is_public","onUpdate:modelValue":e[5]||(e[5]=t=>s.tempArticle.isPublic=t)},null,512),[[b.lH,s.tempArticle.isPublic]]),j]),N,(0,i.Lk)("div",I,[(0,i.Lk)("div",K,[S,(0,i.Lk)("div",T,[(0,i.Lk)("input",H,null,512),(0,i.Lk)("button",{type:"button",class:"btn btn-secondary",onClick:e[6]||(e[6]=(...t)=>o.uploadLink&&o.uploadLink(...t))}," 新增圖片 ")]),O,(0,i.Lk)("input",{type:"file",id:"customFile",class:"form-control mb-3",onChange:e[7]||(e[7]=(...t)=>o.uploadFile&&o.uploadFile(...t)),ref:"inputFile"},null,544)]),s.tempArticle.image?((0,i.uX)(),(0,i.CE)("div",Q,[(0,i.Lk)("div",W,[(0,i.Lk)("img",{class:"img-fluid object-fit-cover",alt:"圖片",src:s.tempArticle.image},null,8,q),(0,i.Lk)("div",z,[(0,i.bo)((0,i.Lk)("input",{type:"url",class:"form-control",placeholder:"請輸入連結","onUpdate:modelValue":e[8]||(e[8]=t=>s.tempArticle.image=t)},null,512),[[b.Jo,s.tempArticle.image]]),(0,i.Lk)("button",{type:"button",class:"btn btn-outline-danger",onClick:e[9]||(e[9]=t=>{s.tempArticle.image=""})}," 移除 ")])])])):(0,i.Q3)("",!0)])])]),(0,i.Lk)("div",B,[G,(0,i.Lk)("button",{type:"button",class:"btn btn-secondary",onClick:e[10]||(e[10]=e=>t.$emit("update-article",s.tempArticle))},"確認")])])])],512)}var Y=l(3286),Z={props:{article:{}},watch:{article(){this.tempArticle=this.article;const t=new Date(1e3*this.tempArticle.create_at).toISOString().split("T");[this.createdAt]=t},createdAt(){this.tempArticle.create_at=Math.floor(new Date(this.createdAt)/1e3)}},data(){return{tempArticle:{},createdAt:""}},mixins:[Y.A],methods:{uploadFile(){const t=this.$refs.inputFile.files[0],e=new FormData;e.append("file-to-upload",t);const l="https://vue3-course-api.hexschool.io/api/cms67/admin/upload";this.$http.post(l,e).then((t=>{this.tempArticle.image=t.data.image}))},uploadLink(){this.tempArticle.image=this.$refs.inputLink.value,this.$refs.inputLink.value=""}}},tt=l(6262);const et=(0,tt.A)(Z,[["render",R]]);var lt=et;const it={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},at={class:"modal-dialog"},st={class:"modal-content"},ot=(0,i.Lk)("div",{class:"modal-header bg-dark"},[(0,i.Lk)("h5",{class:"modal-title text-white",id:"exampleModalLabel"},"刪除文章"),(0,i.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),nt={class:"modal-body"},ct={class:"modal-footer"},rt=(0,i.Lk)("button",{type:"button",class:"btn btn-gray","data-bs-dismiss":"modal"},"取消",-1);function dt(t,e,l,s,o,n){return(0,i.uX)(),(0,i.CE)("div",it,[(0,i.Lk)("div",at,[(0,i.Lk)("div",st,[ot,(0,i.Lk)("div",nt," 確定要刪除 "+(0,a.v_)(o.tempArticle.title)+" 嗎? ",1),(0,i.Lk)("div",ct,[rt,(0,i.Lk)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=e=>t.$emit("delete-article",o.tempArticle))},"刪除")])])])],512)}var pt={props:{article:{}},watch:{article(){this.tempArticle=this.article}},data(){return{tempArticle:{}}},mixins:[Y.A]};const ut=(0,tt.A)(pt,[["render",dt]]);var mt=ut,ht=l(4977),bt={components:{ArticleModal:lt,DelArticleModal:mt,Pagination:ht.A},data(){return{articles:[],pagination:{},tempArticle:{},isNew:!1,isLoading:!1}},inject:["emitter"],methods:{getArticles(t=1){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/cms67/admin/articles?page=${t}`;this.$http.get(e).then((t=>{this.isLoading=!1,this.articles=t.data.articles,this.pagination=t.data.pagination}))},openModal(t,e){this.isNew=t,this.tempArticle=t?{create_at:(new Date).getTime()/1e3}:{...e},this.$refs.ArticleModal.showModal()},getArticle(t,e){this.isLoading=!0,this.isNew=t;const l=`https://vue3-course-api.hexschool.io/api/cms67/admin/article/${e.id}`;this.$http.get(l).then((l=>{this.isLoading=!1,this.openModal(t,e),this.tempArticle.content=l.data.article.content}))},openDelModal(t){this.tempArticle=t,this.$refs.DelArticleModal.showModal()},updateArticle(t){this.isLoading=!0,this.tempArticle=t;let e="https://vue3-course-api.hexschool.io/api/cms67/admin/article",l="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/cms67/admin/article/${t.id}`,l="put"),this.$http[l](e,{data:this.tempArticle}).then((t=>{this.isLoading=!1,this.$refs.ArticleModal.hideModal();let e="新增成功";this.isNew||(e="更新成功"),t.data.success?(this.getArticles(),this.emitter.emit("push-message",{style:"success",title:e})):this.emitter.emit("push-message",{style:"danger",title:e,content:t.data.message.join("、")})}))},deleteArticle(t){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/cms67/admin/article/${t.id}`;this.$http.delete(e).then((t=>{t.data.success?this.emitter.emit("delete-message",{style:"success",title:"刪除成功"}):this.emitter.emit("delete-message",{style:"danger",title:"刪除失敗",content:t.data.message.join("、")}),this.isLoading=!1,this.$refs.DelArticleModal.hideModal(),this.getArticles()}))}},created(){this.getArticles()}};const kt=(0,tt.A)(bt,[["render",h]]);var Lt=kt}}]);
//# sourceMappingURL=630.08a55964.js.map
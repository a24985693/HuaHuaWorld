"use strict";(self["webpackChunkfinal_hw"]=self["webpackChunkfinal_hw"]||[]).push([[600],{3600:function(t,e,l){l.r(e),l.d(e,{default:function(){return It}});var o=l(641),a=l(33);const s={class:"text-end"},i={class:"table-responsive"},d={class:"table text-nowrap"},c=(0,o.Lk)("thead",null,[(0,o.Lk)("tr",null,[(0,o.Lk)("th",{width:"120"},"分類"),(0,o.Lk)("th",null,"產品名稱"),(0,o.Lk)("th",{width:"120"},"原價"),(0,o.Lk)("th",{width:"120"},"售價"),(0,o.Lk)("th",{width:"100"},"是否啟用"),(0,o.Lk)("th",{width:"200"},"編輯")])],-1),n={scope:"row"},r={key:0,class:"text-success"},u={key:1,class:"text-muted"},p={class:"btn-group"},m=["onClick"],b=["onClick"];function k(t,e,l,k,h,L){const g=(0,o.g2)("Loading"),f=(0,o.g2)("Pagination"),v=(0,o.g2)("ProductModal"),P=(0,o.g2)("DeleteModal");return(0,o.uX)(),(0,o.CE)(o.FK,null,[(0,o.bF)(g,{active:h.isLoading},null,8,["active"]),(0,o.Lk)("div",s,[(0,o.Lk)("button",{type:"button",class:"btn btn-secondary",onClick:e[0]||(e[0]=t=>L.openModal(!0))}," 新增產品 ")]),(0,o.Lk)("div",i,[(0,o.Lk)("table",d,[c,(0,o.Lk)("tbody",null,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(h.products,(e=>((0,o.uX)(),(0,o.CE)("tr",{key:e.id},[(0,o.Lk)("td",n,(0,a.v_)(e.category),1),(0,o.Lk)("td",null,(0,a.v_)(e.title),1),(0,o.Lk)("td",null,(0,a.v_)(t.$filters.currency(e.origin_price)),1),(0,o.Lk)("td",null,(0,a.v_)(t.$filters.currency(e.price)),1),(0,o.Lk)("td",null,[e.is_enabled?((0,o.uX)(),(0,o.CE)("span",r,"啟用")):((0,o.uX)(),(0,o.CE)("span",u,"不啟用"))]),(0,o.Lk)("td",null,[(0,o.Lk)("div",p,[(0,o.Lk)("button",{class:"btn btn-outline-gray btn-sm",onClick:t=>L.openModal(!1,e)},"編輯",8,m),(0,o.Lk)("button",{class:"btn btn-outline-danger btn-sm",onClick:t=>L.openDelModal(e)},"刪除",8,b)])])])))),128))])])]),(0,o.bF)(f,{pagination:h.pagination,onUpdatePage:L.getProducts},null,8,["pagination","onUpdatePage"]),(0,o.bF)(v,{ref:"productModal",product:h.tempProduct,onUpdateProduct:L.updateProduct},null,8,["product","onUpdateProduct"]),(0,o.bF)(P,{ref:"deleteModal",product:h.tempProduct,onDeleteProduct:L.deleteProduct},null,8,["product","onDeleteProduct"])],64)}var h=l(3751);const L={class:"modal fade",id:"exampleModal",tabindex:"-1","aria-labelledby":"exampleModalLabel","aria-hidden":"true",ref:"modal"},g={class:"modal-dialog modal-xl",role:"document"},f={class:"modal-content border-0"},v={class:"modal-header bg-dark text-white"},P={class:"modal-title",id:"exampleModalLabel"},y={key:0},x={key:1},C=(0,o.Lk)("button",{type:"button",class:"btn-close text-white","data-bs-dismiss":"modal","aria-label":"Close"},null,-1),w={class:"modal-body"},U={class:"mb-3"},F=(0,o.Lk)("label",{for:"title",class:"form-label"},"標題",-1),$={class:"row gx-2"},M={class:"mb-3 col-md-6"},_=(0,o.Lk)("label",{for:"category",class:"form-label"},"分類",-1),S={class:"mb-3 col-md-6"},E=(0,o.Lk)("label",{for:"price",class:"form-label"},"單位",-1),X={class:"row gx-2"},V={class:"mb-3 col-md-6"},J=(0,o.Lk)("label",{for:"origin_price",class:"form-label"},"原價",-1),D={class:"mb-3 col-md-6"},j=(0,o.Lk)("label",{for:"price",class:"form-label"},"售價",-1),A=(0,o.Lk)("hr",null,null,-1),I={class:"mb-3"},N=(0,o.Lk)("label",{for:"description",class:"form-label"},"產品描述",-1),B={class:"mb-3"},K=(0,o.Lk)("label",{for:"content",class:"form-label"},"說明內容",-1),Q={class:"mb-5"},W={class:"form-check"},H=(0,o.Lk)("label",{class:"form-check-label",for:"is_enabled"}," 是否啟用 ",-1),q=(0,o.Lk)("hr",null,null,-1),z={class:"mainImg my-5"},G={class:"mb-5"},O=(0,o.Lk)("label",{for:"image",class:"form-label"},"輸入主圖片網址",-1),R={class:"mb-3 input-group"},T={type:"text",class:"form-control",placeholder:"請輸入圖片連結",ref:"inputLink"},Y=(0,o.Lk)("label",{for:"customFile",class:"form-label"},[(0,o.eW)("或上傳主圖片 "),(0,o.Lk)("i",{class:"fas fa-spinner fa-spin"})],-1),Z={key:0,class:"row justify-content-center"},tt={class:"col-md-6"},et={class:"ratio ratio-1x1"},lt=["src"],ot={class:"mb-3 input-group"},at=(0,o.Lk)("hr",null,null,-1),st={class:"subImg my-5"},it={class:"mb-5"},dt=(0,o.Lk)("label",{for:"image",class:"form-label"},"輸入副圖片網址",-1),ct={class:"mb-3 input-group"},nt={type:"text",class:"form-control",placeholder:"請輸入副圖片連結",ref:"inputSubLink"},rt=(0,o.Lk)("label",{for:"customSubFile",class:"form-label"},[(0,o.eW)("或上傳副圖片 "),(0,o.Lk)("i",{class:"fas fa-spinner fa-spin"})],-1),ut={key:0,class:"row"},pt={class:"ratio ratio-1x1"},mt=["src"],bt={class:"input-group"},kt=["onUpdate:modelValue"],ht=["onClick"],Lt={class:"modal-footer"},gt=(0,o.Lk)("button",{type:"button",class:"btn btn-gray","data-bs-dismiss":"modal"},"取消",-1);function ft(t,e,l,a,s,i){return(0,o.uX)(),(0,o.CE)("div",L,[(0,o.Lk)("div",g,[(0,o.Lk)("div",f,[(0,o.Lk)("div",v,[(0,o.Lk)("h5",P,[s.tempProduct.id?((0,o.uX)(),(0,o.CE)("span",y,"編輯產品")):((0,o.uX)(),(0,o.CE)("span",x,"新增產品"))]),C]),(0,o.Lk)("div",w,[(0,o.Lk)("div",U,[F,(0,o.bo)((0,o.Lk)("input",{type:"text",class:"form-control",id:"title",placeholder:"請輸入標題","onUpdate:modelValue":e[0]||(e[0]=t=>s.tempProduct.title=t)},null,512),[[h.Jo,s.tempProduct.title]])]),(0,o.Lk)("div",$,[(0,o.Lk)("div",M,[_,(0,o.bo)((0,o.Lk)("input",{type:"text",class:"form-control",id:"category",placeholder:"請輸入分類","onUpdate:modelValue":e[1]||(e[1]=t=>s.tempProduct.category=t)},null,512),[[h.Jo,s.tempProduct.category]])]),(0,o.Lk)("div",S,[E,(0,o.bo)((0,o.Lk)("input",{type:"text",class:"form-control",id:"unit",placeholder:"請輸入單位","onUpdate:modelValue":e[2]||(e[2]=t=>s.tempProduct.unit=t)},null,512),[[h.Jo,s.tempProduct.unit]])])]),(0,o.Lk)("div",X,[(0,o.Lk)("div",V,[J,(0,o.bo)((0,o.Lk)("input",{type:"number",class:"form-control",id:"origin_price",placeholder:"請輸入原價","onUpdate:modelValue":e[3]||(e[3]=t=>s.tempProduct.origin_price=t)},null,512),[[h.Jo,s.tempProduct.origin_price]])]),(0,o.Lk)("div",D,[j,(0,o.bo)((0,o.Lk)("input",{type:"number",class:"form-control",id:"price",placeholder:"請輸入售價","onUpdate:modelValue":e[4]||(e[4]=t=>s.tempProduct.price=t)},null,512),[[h.Jo,s.tempProduct.price]])])]),A,(0,o.Lk)("div",I,[N,(0,o.bo)((0,o.Lk)("textarea",{type:"text",class:"form-control",id:"description",placeholder:"請輸入產品描述","onUpdate:modelValue":e[5]||(e[5]=t=>s.tempProduct.description=t)},null,512),[[h.Jo,s.tempProduct.description]])]),(0,o.Lk)("div",B,[K,(0,o.bo)((0,o.Lk)("textarea",{type:"text",class:"form-control",id:"content",placeholder:"請輸入產品說明內容","onUpdate:modelValue":e[6]||(e[6]=t=>s.tempProduct.content=t),style:{"white-space":"pre"}},null,512),[[h.Jo,s.tempProduct.content]])]),(0,o.Lk)("div",Q,[(0,o.Lk)("div",W,[(0,o.bo)((0,o.Lk)("input",{class:"form-check-input",type:"checkbox","true-value":1,"false-value":0,id:"is_enabled","onUpdate:modelValue":e[7]||(e[7]=t=>s.tempProduct.is_enabled=t)},null,512),[[h.lH,s.tempProduct.is_enabled]]),H])]),q,(0,o.Lk)("div",z,[(0,o.Lk)("div",G,[O,(0,o.Lk)("div",R,[(0,o.Lk)("input",T,null,512),(0,o.Lk)("button",{type:"button",class:"btn btn-secondary",onClick:e[8]||(e[8]=(...t)=>i.uploadLink&&i.uploadLink(...t))}," 新增圖片 ")]),Y,(0,o.Lk)("input",{type:"file",id:"customFile",class:"form-control mb-3",onChange:e[9]||(e[9]=(...t)=>i.uploadFile&&i.uploadFile(...t)),ref:"inputFile"},null,544)]),s.tempProduct.imageUrl?((0,o.uX)(),(0,o.CE)("div",Z,[(0,o.Lk)("div",tt,[(0,o.Lk)("div",et,[(0,o.Lk)("img",{class:"img-fluid object-fit-cover",alt:"",src:s.tempProduct.imageUrl},null,8,lt)]),(0,o.Lk)("div",ot,[(0,o.bo)((0,o.Lk)("input",{type:"url",class:"form-control",placeholder:"請輸入連結","onUpdate:modelValue":e[10]||(e[10]=t=>s.tempProduct.imageUrl=t)},null,512),[[h.Jo,s.tempProduct.imageUrl]]),(0,o.Lk)("button",{type:"button",class:"btn btn-outline-danger",onClick:e[11]||(e[11]=t=>{s.tempProduct.imageUrl="",console.log(s.tempProduct.imageUrl)})}," 移除 ")])])])):(0,o.Q3)("",!0)]),at,(0,o.Lk)("div",st,[(0,o.Lk)("div",it,[dt,(0,o.Lk)("div",ct,[(0,o.Lk)("input",nt,null,512),(0,o.Lk)("button",{type:"button",class:"btn btn-secondary",onClick:e[12]||(e[12]=(...t)=>i.uploadSubLink&&i.uploadSubLink(...t))}," 新增圖片 ")]),rt,(0,o.Lk)("input",{type:"file",id:"customSubFile",class:"form-control mb-3",onChange:e[13]||(e[13]=(...t)=>i.uploadSubFile&&i.uploadSubFile(...t)),ref:"inputSubFile"},null,544)]),s.tempProduct.images?((0,o.uX)(),(0,o.CE)("div",ut,[((0,o.uX)(!0),(0,o.CE)(o.FK,null,(0,o.pI)(s.tempProduct.images,((t,e)=>((0,o.uX)(),(0,o.CE)("div",{key:e,class:"col-md-4 mb-3"},[(0,o.Lk)("div",pt,[(0,o.Lk)("img",{class:"img-fluid object-fit-cover",alt:"",src:t},null,8,mt)]),(0,o.Lk)("div",bt,[(0,o.bo)((0,o.Lk)("input",{type:"url",class:"form-control",placeholder:"請輸入連結","onUpdate:modelValue":t=>s.tempProduct.images[e]=t},null,8,kt),[[h.Jo,s.tempProduct.images[e]]]),(0,o.Lk)("button",{type:"button",class:"btn btn-outline-danger",onClick:t=>s.tempProduct.images.splice(e,1)}," 移除 ",8,ht)])])))),128))])):(0,o.Q3)("",!0)])]),(0,o.Lk)("div",Lt,[gt,(0,o.Lk)("button",{type:"button",class:"btn btn-secondary",onClick:e[14]||(e[14]=e=>t.$emit("update-product",s.tempProduct))},"確認")])])])],512)}l(4114);var vt=l(3286),Pt={watch:{product(){this.tempProduct=this.product,this.tempProduct.images||(this.tempProduct.images=[])}},props:{product:{}},data(){return{tempProduct:{}}},methods:{uploadFile(){const t=this.$refs.inputFile.files[0],e=new FormData;e.append("file-to-upload",t);const l="https://vue3-course-api.hexschool.io/api/cms67/admin/upload";this.$http.post(l,e).then((t=>{this.tempProduct.imageUrl=t.data.imageUrl}))},uploadSubFile(){const t=this.$refs.inputSubFile.files[0],e=new FormData;e.append("file-to-upload",t);const l="https://vue3-course-api.hexschool.io/api/cms67/admin/upload";this.$http.post(l,e).then((t=>{t.data.success&&(this.tempProduct.images.push(t.data.imageUrl),this.$refs.inputSubFile.value="")}))},uploadLink(){this.tempProduct.imageUrl=this.$refs.inputLink.value,this.$refs.inputLink.value=""},uploadSubLink(){this.tempProduct.images.push(this.$refs.inputSubLink.value),this.$refs.inputSubLink.value=""}},mixins:[vt.A]},yt=l(6262);const xt=(0,yt.A)(Pt,[["render",ft]]);var Ct=xt;const wt={class:"modal fade",id:"staticBackdrop","data-bs-backdrop":"static","data-bs-keyboard":"false",tabindex:"-1","aria-labelledby":"staticBackdropLabel","aria-hidden":"true",ref:"modal"},Ut={class:"modal-dialog"},Ft={class:"modal-content"},$t=(0,o.Lk)("div",{class:"modal-header bg-dark"},[(0,o.Lk)("h5",{class:"modal-title text-white",id:"staticBackdropLabel"},"刪除產品"),(0,o.Lk)("button",{type:"button",class:"btn-close","data-bs-dismiss":"modal","aria-label":"Close"})],-1),Mt={class:"modal-body"},_t={class:"modal-footer"},St=(0,o.Lk)("button",{type:"button",class:"btn btn-gray","data-bs-dismiss":"modal"},"取消",-1);function Et(t,e,l,s,i,d){return(0,o.uX)(),(0,o.CE)("div",wt,[(0,o.Lk)("div",Ut,[(0,o.Lk)("div",Ft,[$t,(0,o.Lk)("div",Mt," 確定要刪除 "+(0,a.v_)(this.tempProduct.category)+" - "+(0,a.v_)(this.tempProduct.title)+" 嗎 ",1),(0,o.Lk)("div",_t,[St,(0,o.Lk)("button",{type:"button",class:"btn btn-danger",onClick:e[0]||(e[0]=e=>t.$emit("delete-product",this.tempProduct.id))},"確認")])])])],512)}var Xt={watch:{product(){this.tempProduct=this.product}},props:{product:{}},data(){return{tempProduct:{}}},mixins:[vt.A]};const Vt=(0,yt.A)(Xt,[["render",Et]]);var Jt=Vt,Dt=l(4977),jt={components:{ProductModal:Ct,DeleteModal:Jt,Pagination:Dt.A},watch:{},data(){return{products:[],pagination:{},tempProduct:{},isNew:!1,isLoading:!1}},inject:["emitter"],methods:{getProducts(t=1){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/cms67/admin/products?page=${t}`;this.$http.get(e).then((t=>{this.isLoading=!1,this.products=t.data.products,this.pagination=t.data.pagination}))},openModal(t,e){this.isNew=t,this.tempProduct=t?{}:{...e},this.$refs.productModal.showModal()},openDelModal(t){this.tempProduct=t,this.$refs.deleteModal.showModal()},updateProduct(t){this.isLoading=!0,this.tempProduct=t;let e="https://vue3-course-api.hexschool.io/api/cms67/admin/product",l="post";this.isNew||(e=`https://vue3-course-api.hexschool.io/api/cms67/admin/product/${t.id}`,l="put"),this.$http[l](e,{data:this.tempProduct}).then((t=>{this.isLoading=!1,this.$refs.productModal.hideModal();let e="新增成功";this.isNew||(e="更新成功"),t.data.success?(this.getProducts(),this.emitter.emit("push-message",{style:"success",title:e})):this.emitter.emit("push-message",{style:"danger",title:e,content:t.data.message.join("、")})}))},deleteProduct(t){this.isLoading=!0;const e=`https://vue3-course-api.hexschool.io/api/cms67/admin/product/${t}`;this.$http.delete(e).then((t=>{t.data.success?this.emitter.emit("delete-message",{style:"success",title:"刪除成功"}):this.emitter.emit("delete-message",{style:"danger",title:"刪除失敗",content:t.data.message.join("、")}),this.isLoading=!1,this.$refs.deleteModal.hideModal(),this.getProducts()}))}},created(){this.getProducts()}};const At=(0,yt.A)(jt,[["render",k]]);var It=At}}]);
//# sourceMappingURL=600.e7b43aca.js.map
(function(t){function e(e){for(var o,r,n=e[0],s=e[1],l=e[2],u=0,A=[];u<n.length;u++)r=n[u],Object.prototype.hasOwnProperty.call(a,r)&&a[r]&&A.push(a[r][0]),a[r]=0;for(o in s)Object.prototype.hasOwnProperty.call(s,o)&&(t[o]=s[o]);d&&d(e);while(A.length)A.shift()();return i.push.apply(i,l||[]),c()}function c(){for(var t,e=0;e<i.length;e++){for(var c=i[e],o=!0,n=1;n<c.length;n++){var s=c[n];0!==a[s]&&(o=!1)}o&&(i.splice(e--,1),t=r(r.s=c[0]))}return t}var o={},a={app:0},i=[];function r(e){if(o[e])return o[e].exports;var c=o[e]={i:e,l:!1,exports:{}};return t[e].call(c.exports,c,c.exports,r),c.l=!0,c.exports}r.m=t,r.c=o,r.d=function(t,e,c){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:c})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var c=Object.create(null);if(r.r(c),Object.defineProperty(c,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)r.d(c,o,function(e){return t[e]}.bind(null,o));return c},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],s=n.push.bind(n);n.push=e,n=n.slice();for(var l=0;l<n.length;l++)e(n[l]);var d=s;i.push([0,"chunk-vendors"]),c()})({0:function(t,e,c){t.exports=c("56d7")},"156e":function(t,e,c){},"3b15":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAARklEQVR4AWOgBhgFCkD8AIj/o+EHYDkywX9yMB0toD+g3BeD2AICYJBbMGrBqAWjFjwioZh4RI4F/kB8nQjDr4PVkgtGAQBAiHefqmc5YAAAAABJRU5ErkJggg=="},"56d7":function(t,e,c){"use strict";c.r(e);c("4989"),c("ab8b");var o=c("1786");const a={id:"app"};function i(t,e,c,i,r,n){const s=Object(o["w"])("Menu"),l=Object(o["w"])("router-view"),d=Object(o["w"])("Footer");return Object(o["r"])(),Object(o["d"])("div",a,[Object(o["h"])(s),Object(o["h"])(l),Object(o["h"])(d)])}const r={class:"bg-dark"},n={class:"container"},s={class:"row justify-content-between"},l={class:"navbar navbar-expand-lg navbar-dark bg-dark",style:{width:"100%"}},d=Object(o["g"])("Shopping Site Demo "),u=Object(o["h"])("br",null,null,-1),A=Object(o["h"])("span",{style:{color:"#808080","font-size":"60%"}},"Coded in Vue 3 and ASP.NET Core",-1),b={class:"show-on-small-screen"},j={class:"cart-number",style:{color:"white"}},p=Object(o["h"])("button",{class:"navbar-toggler",type:"button","data-toggle":"collapse","data-target":"#navbarTogglerDemo01","aria-controls":"navbarTogglerDemo01","aria-expanded":"false","aria-label":"Toggle navigation"},[Object(o["h"])("span",{class:"navbar-toggler-icon"})],-1),h={class:"collapse navbar-collapse",id:"navbarTogglerDemo01","data-toggle":"collapse","data-target":".navbar-collapse"},O={class:"navbar-nav ml-auto mt-2 mt-lg-0"},m={class:"nav-item"},g=Object(o["g"])("Home"),v={class:"nav-item"},y=Object(o["g"])("Admin"),K={class:"nav-item"},U=Object(o["g"])("Cart "),F={class:"cart-number",style:{color:"white"}};function R(t,e,a,i,R,f){const w=Object(o["w"])("router-link");return Object(o["r"])(),Object(o["d"])("div",r,[Object(o["h"])("div",n,[Object(o["h"])("div",s,[Object(o["h"])("nav",l,[Object(o["h"])(w,{to:"/",class:"navbar-brand text-align-left"},{default:Object(o["D"])(()=>[d,u,A],void 0,!0),_:1}),Object(o["h"])("div",b,[Object(o["h"])(w,{to:"/cart",class:"nav-link"},{default:Object(o["D"])(()=>[Object(o["h"])("div",{class:"cart-icon",style:{backgroundImage:"url("+c("fbb2")+")"}},[Object(o["h"])("span",j,Object(o["y"])(i.cartNumber),1)],4)],void 0,!0),_:1})]),p,Object(o["h"])("div",h,[Object(o["h"])("ul",O,[Object(o["h"])("li",m,[Object(o["h"])(w,{to:"/",class:"nav-link"},{default:Object(o["D"])(()=>[g],void 0,!0),_:1})]),Object(o["h"])("li",v,[Object(o["h"])(w,{to:"/admin",class:"nav-link"},{default:Object(o["D"])(()=>[y],void 0,!0),_:1})]),Object(o["h"])("li",K,[Object(o["h"])(w,{to:"/cart",class:"nav-link"},{default:Object(o["D"])(()=>[U,Object(o["h"])("div",{class:"cart-icon",style:{backgroundImage:"url("+c("fbb2")+")"}},[Object(o["h"])("span",F,Object(o["y"])(i.cartNumber),1)],4)],void 0,!0),_:1})])])])])])])])}var f=c("5502"),w={name:"Menu",setup(){const t=Object(f["b"])(),e=Object(o["b"])(()=>t.getters["cart/cartTotalItemNumber"]);return{cartNumber:e}}},Q=c("6b0d"),I=c.n(Q);const C=I()(w,[["render",R]]);var B=C;const k=Object(o["h"])("p",null,"© 2020 - 2021 Janet Wang",-1);function S(t,e,c,a,i,r){return Object(o["r"])(),Object(o["d"])("footer",null,[k])}var E={name:"Footer"};const P=I()(E,[["render",S]]);var q=P,M={name:"App",components:{Menu:B,Footer:q}};c("cc15");const H=I()(M,[["render",i]]);var T=H,V=c("6c02"),N=c("c223"),J=c.n(N);const Y={class:"main"},x=Object(o["h"])("h1",null,"Product list",-1),D={key:0,class:"alert alert-dismissible alert-warning"},W=Object(o["h"])("button",{type:"button",class:"close","data-dismiss":"alert"}," × ",-1),z={class:"mb-0"},G={class:"card mb-3"},L={class:"row no-gutters"},X=Object(o["h"])("div",{class:"col-5 col-lg-4"},[Object(o["h"])("img",{src:J.a,class:"card-img img-fluid"})],-1),Z={class:"col-7 col-lg-8 text-left"},_={class:"card-body"},$={class:"card-text"},tt={class:"card-text"};function et(t,e,c,a,i,r){const n=Object(o["w"])("router-link");return Object(o["r"])(),Object(o["d"])("div",Y,[x,a.isProductsEmpty?(Object(o["r"])(),Object(o["d"])("div",D,[W,Object(o["h"])("p",z,Object(o["y"])(a.msg),1)])):Object(o["e"])("",!0),(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(a.products,t=>(Object(o["r"])(),Object(o["d"])("div",{class:"container",key:t.id},[Object(o["h"])("div",G,[Object(o["h"])(n,{to:{name:"Product",params:{id:t.id}}},{default:Object(o["D"])(()=>[Object(o["h"])("div",L,[X,Object(o["h"])("div",Z,[Object(o["h"])("div",_,[Object(o["h"])("p",$,Object(o["y"])(t.title),1),Object(o["h"])("p",tt,"$"+Object(o["y"])(t.price),1)])])])],void 0,!0),_:2},1032,["to"])])]))),128))])}var ct={name:"Home",setup(){const t=Object(f["b"])();t.dispatch("products/getAllProducts");const e=Object(o["b"])(()=>t.state.products.all),c=Object(o["b"])(()=>0===e.value.length);return{products:e,isProductsEmpty:c,msg:"No products, please go to Admin page and add products to database."}}};const ot=I()(ct,[["render",et]]);var at=ot,it=c("61fb"),rt=c.n(it),nt=c("3b15"),st=c.n(nt);const lt={class:"main"},dt=Object(o["h"])("h1",null,"Add products to database",-1),ut={key:0,class:"alert alert-dismissible alert-warning"},At=Object(o["h"])("button",{type:"button",class:"close","data-dismiss":"alert"}," × ",-1),bt=Object(o["h"])("h4",{class:"alert-heading"},"Error!",-1),jt={class:"mb-0"},pt={class:"container"},ht={class:"row align-items-center"},Ot={class:"col-4"},mt={class:"form-group"},gt=Object(o["h"])("label",{for:"title"},"Title",-1),vt={class:"col-4"},yt={class:"form-group"},Kt=Object(o["h"])("label",{for:"price"},"Price",-1),Ut={class:"col-4"},Ft={class:"form-group"},Rt=Object(o["h"])("label",{for:"inventory"},"Inventory",-1),ft=Object(o["h"])("div",{class:"row"},[Object(o["h"])("div",{class:"col-12"},[Object(o["h"])("button",{type:"submit",class:"btn btn-dark mt-3"},"Add product")])],-1),wt=Object(o["h"])("hr",null,null,-1),Qt={class:"container"},It=Object(o["h"])("h1",null,"Product list",-1),Ct={class:"datatable display table table-striped"},Bt=Object(o["h"])("thead",null,[Object(o["h"])("tr",null,[Object(o["h"])("th",{scope:"col"},"Product name"),Object(o["h"])("th",{scope:"col"},"Price"),Object(o["h"])("th",{scope:"col"},"Inventory"),Object(o["h"])("th",{scope:"col"})])],-1),kt=Object(o["h"])("img",{src:rt.a,"data-toggle":"tooltip","data-placement":"bottom",title:"Edit product"},null,-1);function St(t,e,c,a,i,r){const n=Object(o["w"])("router-link");return Object(o["r"])(),Object(o["d"])("div",lt,[dt,Object(o["h"])("form",{onSubmit:e[4]||(e[4]=Object(o["F"])((...t)=>a.addProduct&&a.addProduct(...t),["prevent"]))},[a.error?(Object(o["r"])(),Object(o["d"])("div",ut,[At,bt,Object(o["h"])("p",jt,Object(o["y"])(a.error),1)])):Object(o["e"])("",!0),Object(o["h"])("div",pt,[Object(o["h"])("div",ht,[Object(o["h"])("div",Ot,[Object(o["h"])("div",mt,[gt,Object(o["E"])(Object(o["h"])("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>a.newItem.title=t),type:"text",class:"form-control",id:"title",placeholder:"Enter a product name",required:""},null,512),[[o["A"],a.newItem.title]])])]),Object(o["h"])("div",vt,[Object(o["h"])("div",yt,[Kt,Object(o["E"])(Object(o["h"])("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>a.newItem.price=t),type:"number",min:"0",step:"0.01",class:"form-control",id:"price",placeholder:"Enter product price",required:""},null,512),[[o["A"],a.newItem.price]])])]),Object(o["h"])("div",Ut,[Object(o["h"])("div",Ft,[Rt,Object(o["E"])(Object(o["h"])("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>a.newItem.inventory=t),type:"number",class:"form-control",id:"inventory",placeholder:"Enter product inventory",required:""},null,512),[[o["A"],a.newItem.inventory]])])])]),ft])],32),wt,Object(o["h"])("div",Qt,[It,Object(o["h"])("table",Ct,[Bt,Object(o["h"])("tbody",null,[(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(a.products,(t,e)=>(Object(o["r"])(),Object(o["d"])("tr",{key:e,style:{cursor:"pointer"}},[Object(o["h"])("td",null,Object(o["y"])(t.title),1),Object(o["h"])("td",null,"$"+Object(o["y"])(t.price),1),Object(o["h"])("td",null,Object(o["y"])(t.inventory),1),Object(o["h"])("td",null,[Object(o["h"])(n,{to:{name:"Edit",params:{id:t.id}}},{default:Object(o["D"])(()=>[kt],void 0,!0),_:2},1032,["to"]),Object(o["h"])("img",{src:st.a,"data-toggle":"tooltip","data-placement":"bottom",title:"Delete product",onClick:c=>a.deleteProduct(e,t.id)},null,8,["onClick"])])]))),128))])])])])}var Et=c("bc3a"),Pt=c.n(Et);const qt="https://shoppingsiteapi.herokuapp.com",Mt=qt+"/api/products",Ht=qt+"/api/products";var Tt={name:"Admin",setup(){let t="";const e=Object(o["u"])([]),c=Object(o["u"])({title:"",price:0,inventory:0});Object(o["p"])(async()=>{try{const t=await Pt.a.get(Mt);e.value=t.data}catch(c){t="Something went wrong with getting products data from database!"}});const a=async()=>{try{const o=await Pt.a.post(Ht,c.value);e.value.push(o.data),t="",c.value={title:"",price:0,inventory:0},alert("One product has been added to database.")}catch(o){t="Something went wrong with saving form data!"}},i=async(c,o)=>{const a=`${qt}/api/products/${o}`,i=confirm("Are you sure that you need to delete this product?");if(i)try{await Pt.a.delete(a,{id:o}),e.value.splice(c,1)}catch(r){t="Something went wrong with deleting product!"}};return{error:t,products:e,newItem:c,addProduct:a,deleteProduct:i}}};const Vt=I()(Tt,[["render",St]]);var Nt=Vt;const Jt={class:"main"},Yt=Object(o["h"])("h1",null,"Product detail",-1),xt={class:"container"},Dt={class:"row no-gutters"},Wt=Object(o["h"])("div",{class:"col-12 col-sm-5 col-lg-4"},[Object(o["h"])("img",{src:J.a,class:"card-img img-fluid"})],-1),zt={class:"col-12 col-sm-7 col-lg-8 text-left"},Gt={class:"card-body"},Lt={class:"card-text"},Xt={class:"card-text"},Zt={class:"card-text"},_t={class:"container pl-0"},$t={class:"row"},te={class:"col-6 col-lg-3"},ee={class:"form-group"},ce={class:"col-6 col-lg-4 text-left"},oe={key:0,class:"card-text",style:{color:"red"}};function ae(t,e,c,a,i,r){return Object(o["r"])(),Object(o["d"])("div",Jt,[Yt,Object(o["h"])("div",xt,[Object(o["h"])("div",Dt,[Wt,Object(o["h"])("div",zt,[Object(o["h"])("div",Gt,[Object(o["h"])("p",Lt,Object(o["y"])(a.product.title),1),Object(o["h"])("p",Xt,"$"+Object(o["y"])(a.product.price),1),Object(o["h"])("p",Zt," Inventory: "+Object(o["y"])(a.product.inventory>0?"In stock":"Out of stock"),1),Object(o["h"])("form",{onSubmit:e[2]||(e[2]=Object(o["F"])(t=>a.addToCart(),["prevent"]))},[Object(o["h"])("div",_t,[Object(o["h"])("div",$t,[Object(o["h"])("div",te,[Object(o["h"])("div",ee,[Object(o["E"])(Object(o["h"])("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>a.quantity=t),type:"number",min:"0",class:"form-control",id:"quantity",required:""},null,512),[[o["A"],a.quantity]])])]),Object(o["h"])("div",ce,[Object(o["h"])("button",{disabled:!a.isInventoryGood,type:"submit",class:"btn btn-dark"}," Add to cart ",8,["disabled"])])])])],32),a.isInventoryGood?Object(o["e"])("",!0):(Object(o["r"])(),Object(o["d"])("p",oe," This product's inventory is lower than the quantity you required. "))])])])])])}var ie={name:"Product",setup(){const t=Object(f["b"])(),e=Object(V["c"])(),{id:c}=e.params,a=Object(o["u"])(0),i=t.getters["products/getOneProduct"](c),r=Object(o["b"])(()=>parseInt(i.inventory,10)>=a.value),n=()=>t.dispatch("cart/addProductToCart",{id:c,quantity:a.value}),s=()=>{a.value?(n().then(()=>setTimeout(()=>alert("Added to cart."),500)),a.value=0):alert("Quantity should be greater than 0.")};return{id:c,quantity:a,product:i,isInventoryGood:r,addProductToCart:n,addToCart:s}}};const re=I()(ie,[["render",ae]]);var ne=re;const se={class:"main"},le=Object(o["h"])("h1",null,"Your Cart",-1),de=Object(o["f"])('<div class="container"><div class="row align-items-center"><div class="col-4"></div><div class="col-5"></div><div class="col-3"> Price </div></div></div><hr>',2),ue={class:"container"},Ae={class:"row align-items-center"},be=Object(o["h"])("div",{class:"col-4"},[Object(o["h"])("img",{src:J.a,class:"img-fluid"})],-1),je={class:"col-5 text-left"},pe={class:"font-weight-bold"},he=Object(o["h"])("p",null,"Quantity:",-1),Oe={class:"form-group"},me={key:0,style:{color:"red"}},ge={class:"col-3"},ve=Object(o["h"])("hr",null,null,-1),ye={class:"container"},Ke={class:"row"},Ue=Object(o["h"])("div",{class:"col-9 text-right"},"Subtotal:",-1),Fe={class:"col-3"},Re={class:"mt-5 mb-5"};function fe(t,e,c,a,i,r){return Object(o["r"])(),Object(o["d"])("div",se,[le,Object(o["E"])(Object(o["h"])("p",null," Your cart is empty, add some products to cart. ",512),[[o["B"],!a.products.length]]),Object(o["h"])("form",{onSubmit:e[1]||(e[1]=Object(o["F"])(t=>a.checkout(),["prevent"]))},[Object(o["E"])(Object(o["h"])("div",null,[de,(Object(o["r"])(!0),Object(o["d"])(o["a"],null,Object(o["v"])(a.products,(t,e)=>(Object(o["r"])(),Object(o["d"])("li",{key:e},[Object(o["h"])("div",ue,[Object(o["h"])("div",Ae,[be,Object(o["h"])("div",je,[Object(o["h"])("h5",pe,Object(o["y"])(t.title),1),he,Object(o["h"])("div",Oe,[Object(o["E"])(Object(o["h"])("input",{"onUpdate:modelValue":t=>a.quantities[e]=t,type:"number",min:"1",class:"form-control",style:{width:"80px"},onInput:c=>a.changeQuantity(e,t.inventory,t.id,a.quantities[e])},null,40,["onUpdate:modelValue","onInput"]),[[o["A"],a.quantities[e]]]),parseInt(t.inventory,10)<a.quantities[e]?(Object(o["r"])(),Object(o["d"])("span",me," Low inventory ")):Object(o["e"])("",!0)]),Object(o["h"])("p",null,[Object(o["h"])("a",{href:"javascript:void(0)",onClick:e=>a.removeItem(t.id),style:{color:"#808080","text-decoration":"underline","font-size":"85%"}},"Remove",8,["onClick"])])]),Object(o["h"])("div",ge,"$"+Object(o["y"])(t.price),1)])])]))),128)),ve,Object(o["h"])("div",ye,[Object(o["h"])("div",Ke,[Ue,Object(o["h"])("div",Fe,"$"+Object(o["y"])(a.total),1)])])],512),[[o["B"],a.products.length&&!a.checkoutStatus]]),Object(o["h"])("p",Re,[Object(o["h"])("button",{disabled:!a.products.length||a.flag,type:"submit",class:"btn btn-dark"}," Checkout ",8,["disabled"])])],32)])}var we={name:"Cart",setup(){const t=Object(o["u"])([]),e=Object(o["u"])([]);let c=!1;const a=Object(f["b"])(),{checkoutStatus:i}=a.state.cart,r=Object(o["b"])(()=>a.getters["cart/cartProducts"]),n=Object(o["b"])(()=>a.getters["cart/cartTotalPrice"]),s=(t,o,a)=>{e.value[t]=parseInt(o,10)<a?1:0,c=e.value.reduce((t,e)=>t+e,0)>0},l=(t,e,c,o)=>{a.dispatch("cart/changeQuantity",{id:c,quantity:o}),s(t,e,o)},d=()=>{a.dispatch("cart/checkout",r.value).then(()=>setTimeout(()=>alert("Checkout successful."),500))},u=t=>{a.dispatch("cart/removeItem",{id:t}),window.location.reload()};return r.value.forEach((e,c)=>{t.value.push(e.quantity),s(c,e.inventory,t.value[c])}),{quantities:t,inventoryFlag:e,flag:c,checkoutStatus:i,products:r,total:n,changeQuantity:l,checkout:d,removeItem:u}}};const Qe=I()(we,[["render",fe]]);var Ie=Qe;const Ce={class:"main"},Be=Object(o["h"])("h1",null,"Edit product",-1),ke={key:0,class:"alert alert-dismissible alert-warning"},Se=Object(o["h"])("button",{type:"button",class:"close","data-dismiss":"alert"}," × ",-1),Ee=Object(o["h"])("h4",{class:"alert-heading"},"Error!",-1),Pe={class:"mb-0"},qe={class:"container"},Me={class:"row align-items-left"},He={class:"col-8 text-left"},Te={class:"row align-items-center mt-3"},Ve={class:"col-4"},Ne={class:"form-group"},Je=Object(o["h"])("label",{for:"title"},"Title",-1),Ye={class:"col-4"},xe={class:"form-group"},De=Object(o["h"])("label",{for:"price"},"Price",-1),We={class:"col-4"},ze={class:"form-group"},Ge=Object(o["h"])("label",{for:"inventory"},"Inventory",-1),Le=Object(o["h"])("div",{class:"row"},[Object(o["h"])("div",{class:"col-12"},[Object(o["h"])("button",{type:"submit",class:"btn btn-dark mt-3"},"Save")])],-1);function Xe(t,e,c,a,i,r){return Object(o["r"])(),Object(o["d"])("div",Ce,[Be,Object(o["h"])("form",{onSubmit:e[4]||(e[4]=Object(o["F"])((...t)=>a.editProduct&&a.editProduct(...t),["prevent"]))},[a.error?(Object(o["r"])(),Object(o["d"])("div",ke,[Se,Ee,Object(o["h"])("p",Pe,Object(o["y"])(a.error),1)])):Object(o["e"])("",!0),Object(o["h"])("div",qe,[Object(o["h"])("div",Me,[Object(o["h"])("p",He,"Product ID: "+Object(o["y"])(a.id),1)]),Object(o["h"])("div",Te,[Object(o["h"])("div",Ve,[Object(o["h"])("div",Ne,[Je,Object(o["E"])(Object(o["h"])("input",{"onUpdate:modelValue":e[1]||(e[1]=t=>a.product.title=t),type:"text",class:"form-control",id:"title"},null,512),[[o["A"],a.product.title]])])]),Object(o["h"])("div",Ye,[Object(o["h"])("div",xe,[De,Object(o["E"])(Object(o["h"])("input",{"onUpdate:modelValue":e[2]||(e[2]=t=>a.product.price=t),type:"number",min:"0",step:"0.01",class:"form-control",id:"price",required:""},null,512),[[o["A"],a.product.price]])])]),Object(o["h"])("div",We,[Object(o["h"])("div",ze,[Ge,Object(o["E"])(Object(o["h"])("input",{"onUpdate:modelValue":e[3]||(e[3]=t=>a.product.inventory=t),type:"number",class:"form-control",id:"inventory",required:""},null,512),[[o["A"],a.product.inventory]])])])]),Le])],32)])}const Ze="https://shoppingsiteapi.herokuapp.com";var _e={name:"Edit",setup(){const t=Object(V["c"])(),e=Object(o["u"])(""),{id:c}=t.params,a=`${Ze}/api/products/${c}`,i=`${Ze}/api/products/${c}`,r=Object(o["u"])({});Object(o["p"])(async()=>{try{const t=await Pt.a.get(a);r.value=t.data}catch(t){e.value="Something went wrong with getting product data from database!"}});const n=async()=>{try{await Pt.a.put(i,r.value),e.value="",alert("The product has been updated in database!"),window.location.href=Ze+"/admin"}catch(t){e.value="Something went wrong with editing product!"}};return{error:e,id:c,product:r,editProduct:n}}};const $e=I()(_e,[["render",Xe]]);var tc=$e;const ec=[{path:"/",name:"Home",component:at},{path:"/admin",name:"Admin",component:Nt},{path:"/product/:id",name:"Product",component:ne},{path:"/edit/:id",name:"Edit",component:tc},{path:"/cart",name:"Cart",component:Ie}],cc=Object(V["a"])({history:Object(V["b"])(),routes:ec});var oc=cc,ac=c("0e44");const ic="https://shoppingsiteapi.herokuapp.com",rc=ic+"/api/products",nc=ic+"/api/products/updateinventory";let sc=[];var lc={getProducts(t){Pt.a.get(rc).then(e=>{sc=e.data,t(sc)}).catch(t=>{console.log(t)})},buyProducts(t,e){setTimeout(()=>{e()},100)},updateInventoryInDB(t){Pt.a.put(nc,t).catch(t=>{console.log(t)})}};const dc=()=>({items:[],checkoutStatus:null}),uc={cartProducts:(t,e,c)=>t.items.map(({id:t,quantity:e})=>{const o=c.products.all.find(e=>e.id===t);return{id:t,title:o.title,price:o.price,quantity:e}}),cartTotalPrice:(t,e)=>{const c=e.cartProducts.reduce((t,e)=>t+e.price*e.quantity,0);return Math.round(100*c)/100},cartTotalItemNumber:t=>{const e=t.items.reduce((t,e)=>t+parseInt(e.quantity,10),0);return Number.isNaN(e)?0:e}},Ac={checkout({commit:t},e){t("setCheckoutStatus",null),t("setCartItems",{items:[]}),lc.buyProducts(e,()=>{t("setCheckoutStatus",!0),lc.updateInventoryInDB(e)})},addProductToCart({state:t,commit:e},{id:c,quantity:o}){e("setCheckoutStatus",null);const a=t.items.find(t=>t.id===c);e(a?"incrementItemQuantity":"pushProductToCart",{id:c,quantity:o})},changeQuantity({commit:t},{id:e,quantity:c}){t("changeItemQuantity",{id:e,quantity:c})},removeItem({commit:t},{id:e}){t("removeCartItem",{id:e})}},bc={pushProductToCart(t,{id:e,quantity:c}){t.items.push({id:e,quantity:c})},incrementItemQuantity(t,{id:e,quantity:c}){const o=t.items.find(t=>t.id===e);o.quantity=parseInt(o.quantity,10)+parseInt(c,10)},changeItemQuantity(t,{id:e,quantity:c}){const o=t.items.find(t=>t.id===e);o.quantity=parseInt(c,10)},removeCartItem(t,{id:e}){t.items=t.items.filter(t=>t.id!==e)},setCartItems(t,{items:e}){t.items=e},setCheckoutStatus(t,e){t.checkoutStatus=e}};var jc={namespaced:!0,state:dc,getters:uc,actions:Ac,mutations:bc};const pc=()=>({all:[]}),hc={getOneProduct:t=>e=>t.all.find(t=>t.id===e)},Oc={getAllProducts({commit:t}){lc.getProducts(e=>{t("setProducts",e)})}},mc={setProducts(t,e){t.all=e}};var gc={namespaced:!0,state:pc,getters:hc,actions:Oc,mutations:mc};const vc=!1;var yc=Object(f["a"])({modules:{cart:jc,products:gc},strict:vc,plugins:[Object(ac["a"])()]});Object(o["c"])(T).use(oc).use(yc).mount("#app")},"61fb":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABIAAAASCAQAAAD8x0bcAAAAgUlEQVR4AbzKoQ3CQAAAwHNIwBBMLUOgMDhME0QNg+GZAvM13QGFw5eQkIqHZwH+myA4ff6gdjJRtPeShFKbWbhKkqOMtbta5Sba+WrjqRc1Vg65MugsPURVvgRzwVszVuJY6UT1z2VrcC4XWhfTcqHV++w2WAkeMAGo7AAwvmgOAOzzMg3fchUyAAAAAElFTkSuQmCC"},c223:function(t,e){t.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQEAYABgAAD//gA+Q1JFQVRPUjogZ2QtanBlZyB2MS4wICh1c2luZyBJSkcgSlBFRyB2ODApLCBkZWZhdWx0IHF1YWxpdHkK/9sAQwAIBgYHBgUIBwcHCQkICgwUDQwLCwwZEhMPFB0aHx4dGhwcICQuJyAiLCMcHCg3KSwwMTQ0NB8nOT04MjwuMzQy/9sAQwEJCQkMCwwYDQ0YMiEcITIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIyMjIy/8AAEQgAyAEsAwEiAAIRAQMRAf/EAB8AAAEFAQEBAQEBAAAAAAAAAAABAgMEBQYHCAkKC//EALUQAAIBAwMCBAMFBQQEAAABfQECAwAEEQUSITFBBhNRYQcicRQygZGhCCNCscEVUtHwJDNicoIJChYXGBkaJSYnKCkqNDU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6g4SFhoeIiYqSk5SVlpeYmZqio6Slpqeoqaqys7S1tre4ubrCw8TFxsfIycrS09TV1tfY2drh4uPk5ebn6Onq8fLz9PX29/j5+v/EAB8BAAMBAQEBAQEBAQEAAAAAAAABAgMEBQYHCAkKC//EALURAAIBAgQEAwQHBQQEAAECdwABAgMRBAUhMQYSQVEHYXETIjKBCBRCkaGxwQkjM1LwFWJy0QoWJDThJfEXGBkaJicoKSo1Njc4OTpDREVGR0hJSlNUVVZXWFlaY2RlZmdoaWpzdHV2d3h5eoKDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uLj5OXm5+jp6vLz9PX29/j5+v/aAAwDAQACEQMRAD8A9VoooqiwooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACmebHv2eYm/wDu55pl1ax3kQilL7M5IRyu72OO1VToWlGPy/7Pt8eoQA/n1oA0KRmVVLMQAOpJrM0NnEN1AZWljt7hoonY5O0AcZ74JI/Cq2n2sWtK2pXyCZJHIt4n5REBwDjpk4zmgDcVlcZVgw9Qc0tYeo2kWjINTsYxCI2HnxR8LImcH5emRnOasavNK8lpp9vI0b3bndIp5WNRlsHseg/GgDS8xN+zeu/+7nmnVm/2BpXk+X9hi/3iPn+u7rn8abpMssc93p08jSNaspSRjktGwyufUjBGaANSiio4biG4DmGRX2MUbaejDqDQBJRTJZY4ImllcJGgyzMcAClR1kRXRgysAQR3FADqYZY1ba0ihvQnmm3EAuYGhZ3VW6mNip/MVTGhaUIyn2CAg9Sy5b8zzQBo0EgDJOAKydI3297f6dvZ4bco0RY5KqwJ259sVFHAutahdSXQL2ltIYYoSflZh95mHfngfSgDZR0kGUZWHqDmnVjahpUVrbveabEltdQLvHlDaJAOSrAcHNPv9RkbSLeW0+Wa9KRwk87S4zn8Bn8qANRpEVgrOoY9AT1p1ZsegaakW2S1SdyPmlmG92PqSec1Fp++w1WXTC7PAYhNbljkoM4K59jjH1oA16KKKACiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKxrnTdWlXC6vuXvH5QTd7blOR+FaN3eRWUayTCTyycFkQsF9zjoKrPr+lJHv+3wt6BG3MfwHNAEdhNG2m3FrHbi2ltgY3hU5CnGQQe4PXNSaBj+wLHb08lfzpmkRyvNe38sTQm6kBSNhhgijAJHYnrVawuo9FDadfMIY0Zjbyt9x0JyBnsRnFAF3XMf2FfbunkN+eKqKMa5pm/r9jfH1+XNN1C7i1pRptg/nLIw+0TJykaA5Iz0JPTAqzq0MqPaX9vGZHtHJaNerIwwwHv0P4UAalZUP/I03WOn2WPd9dzf0p3/AAkGleT5hvIx/sfx/Tb1zSaRFM8t1qE8bRPdMNkbdVjUYXPoTknHvQBqVkalbPZSPqtmyJIq5njY7UmUevow7GtesprSfUrwvepss4X/AHUBOfNI/jb29B+dAFazceI3F1LxYxPhLcnl3Hdx7dh+Nb1Zd9YzQ3J1HTgPtGP3sJOFnUfyb0NaSMWRWKlSQCVPUe1ADqr3t5FY2rTzE7RwFAyWPYAdyaS/vodOspLq4JEaDsMknsKw7TU9Pubhb/Ub6281f9TAHysI/q3v+VAGrpNrLDFLc3IAurp/MkGc7eyr+A4qHw9j+z5f732mXd9d5q7aajZ3xYWtxHKU+9sOcVmxzrouoXMd1lLS5kM0c2DtVj95WPbnkUAbEuPJfd93ac/SuatR/oHhvf08z/2RsVev9VivLd7LTJFuLqYbAYuVjB4LMegwKlv9OcaTbxWgDTWZSSEHjcU4x+IyPxoA1ayrn/kZrDHXyJd30+WnR+INNaLfLcpA4+9FL8rqfTBqPTw99qkupsjpAI/Jtw4wWXOS2O2TjHsKANeiiigAooooAKKKKACiiigAooooAKKKKACiiigAooooAKKKKACmhEDbgqhvXFOooAKQgEYIBHoaWigBAoUYUAD0FLRRQAmxd27aN3rjmloooAKKKKACiiigAooooAKOtFFACKqoMKoA9hS0UUAIUViCVBI6EjpS0UUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFABRRRQAUUUUAFFFFAH//2Q=="},cc15:function(t,e,c){"use strict";c("156e")},fbb2:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACYAAAAaCAYAAADbhS54AAABbmlDQ1BpY2MAACiRdZHNK0RRGMZ/M0PEiGIhUXcxJgtTomSpUWywmBllsJm586XuHbd7Z5JslY2FshAbXwv/AVtlSylFSrLwF/jaSNd75qqRZs7t3PfXc87zds5zwD9t6KbTMARmsWTHpqLafHJBa3ohSB8dhImkdMeaiU8mqDs+7/CpehtRvervqzlaM1lHB1+z8Khu2SXhceHp1ZKleEu4Sy+kMsKHwoO2HFD4Sulpj58V5z1+V2wnYhPgVz21/B9O/2G9YJvCA8Ih0yjrv+dRNwlmi3NxqT0ye3GIMUUUjTRlljEoEZFalMxq+4YqvllWxKPL32INWxx5CuIdFLUsXbNSc6Jn5TNYU7n/z9PJjQx73YNRaHxy3bd+aNqB723X/Tpy3e9jCDzCRbHqX5Gcxj5E365qoQNo34Czy6qW3oXzTeh+sFJ2qiIFZPpzOXg9hbYkdN5Ay6KX1e86J/eQWJcnuoa9fQjL/valH1RLaDEvfZWdAAAACXBIWXMAAAsSAAALEgHS3X78AAACQUlEQVRIS+2WsWsUQRTG79zEKDFaGIhgYWOTSpsQUButNSSxuEYhRRoLm1Qp8gdIrNKliFaCjcKBkCKF1yRyEEJSiBBQMFEkR4okRQwk7Ky/J7Pe3LG7szObEwsHPvbdzHvf++bN29krlf6PAhWIssdMAepioRZhH1m/WCxD/uiy6UrilbZQxe/r4Iqef1Iul+fz05+SJ8KCBFSYU7qan3j2nVK6TJqWiiV5IuQs8zVwS69PUrUXRcXBK7mfgqtA7HV4XzvxQjJuVG0D+4ITQYIzHHeMnj7EvuHMKVWT/msSqQlnEiNAqgXeGsKee/NB8rBZNbVO2533JSN2GK4jLWyX5zVfrhLBPW1Ve+RLhrBXRrVmfXn+xEE2ZlRtDfucK6n0EsKkp2Q0ClUrTg5Jt1E1uUIqHsIWjGo9c41P9W/ttaguYvOS4zsIDvL0VldeUsPvHfYHcBsMg8ckWtJ3kY1uCof4s/aSe2srLcB6wSYFImSU+TcgAMfgp0VYpNflq3EGNGRTWcJsO0xc1722bPSKq2ntLa+KiVqU3Ocx57gzybcPRqnWdlastzAtTuLlmOR7KseaNkJ95HKMXYiS488cPs3/m1C/jQ+wLikVVYMg2EvLhO8AayPgB1i0ifJeJ5EIm40bSylVw+5NImS+H8hlHI9p78S2QDLIR/2zkSzEvpki7G7bm7EqG7MNOXOfcUJQ3QjcxP6WIuwLQr4ba3IHdm6Q7DJ4zzF+DcNwKCsTPvfw3QFV8Ff+AXdu5/8q8y/hVlQ3n00UEQAAAABJRU5ErkJggg=="}});
//# sourceMappingURL=app.ba749dfa.js.map
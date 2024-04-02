import{o as _,c as u,a as t,t as a,l as g,w as b,m as v,n as r,q as c,s as l,u as d,v as w}from"./entry.d9b90025.js";import{u as y}from"./fetch.63c9fdec.js";const P={class:"card"},C={class:"grid lg:grid-cols-2 gap-10 md:grid-cols-1"},k={class:"p-7"},D=["src"],$={class:"p-7"},B={class:"text-4xl my-7"},H={class:"text-xl my-7"},M=t("h3",{class:"font-bold border-b-2 mb-4 pb-2"},"Product description:",-1),N={class:"mb-7"},T=t("button",{class:"btn flex"},[t("i",{class:"material-icons mr-2"},"add_shopping_cart"),t("span",null,"Add to cart")],-1),V={__name:"ProductDetails",props:["product"],setup(s){return(e,n)=>(_(),u("div",P,[t("div",C,[t("div",k,[t("img",{src:`${s.product.image}`,class:"sm:max-w-sm md:max-w-10 my-7"},null,8,D)]),t("div",$,[t("h2",B,a(s.product.title),1),t("p",H,"Price - $"+a(s.product.price),1),M,t("p",N,a(s.product.description),1),T])])]))}},F={__name:"[id]",async setup(s){let e,n;const{id:i}=g().params,p="https://fakestoreapi.com/products/"+i,{data:o}=([e,n]=b(()=>y(p,{key:i},"$H3OxYP9tuC")),e=await e,n(),e);if(!o.value)throw v({statusCode:404,statusMessage:"Product not found"});return(A,E)=>{const m=r("Title"),h=r("Meta"),x=r("Head"),f=V;return _(),u("div",null,[c(x,null,{default:l(()=>[c(m,null,{default:l(()=>[w("Demo Store | "+a(d(o).title),1)]),_:1}),c(h,{name:"description",content:d(o).description},null,8,["content"])]),_:1}),c(f,{product:d(o)},null,8,["product"])])}}};export{F as default};
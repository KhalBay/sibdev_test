import{B as C,l as p,y as k,C as E,e as b,o as v,c,a as n,s as y,v as N,_ as S,t as f,g as q,q as R,F as B,u as Q,x as D,D as V,n as F,b as i,w as _,d as g}from"./_plugin-vue_export-helper-2c13a467.js";import{I as x,a as h}from"./InputButton-bc0fcb10.js";const $=C("data",()=>{const s=p(!1),a=p(!1);return{isModal:s,callModal:()=>{s.value=!s.value},isSaved:a}});const te={__name:"ModalWindow",setup(s){const a=$();return(l,o)=>k((v(),c("div",{class:"modal",onClick:o[1]||(o[1]=t=>b(a).callModal())},[n("div",{class:"modal-content",onClick:o[0]||(o[0]=N(()=>{},["stop"]))},[y(l.$slots,"default")])],512)),[[E,b(a).isModal]])}};const U={class:"select-wrap"},T={key:0},W=["value"],j={__name:"InputSelect",props:{label:String,mb:String,modelValue:String},emits:["update:modelValue"],setup(s,{emit:a}){const l=s,o=t=>{a("update:modelValue",t.target.value)};return(t,r)=>(v(),c("div",U,[l.label?(v(),c("label",T,f(l.label),1)):q("",!0),n("select",{value:s.modelValue,class:R(`mb-${l.mb}`),onChange:o},[y(t.$slots,"default",{},void 0,!0)],42,W)]))}},z=S(j,[["__scopeId","data-v-3aeffb6b"]]);const A={key:0},O=["value","min","max","step"],G={__name:"InputRange",props:{label:String,mb:String,min:Number,max:Number,modelValue:Number,step:Number,disabled:Boolean},emits:["update:modelValue"],setup(s,{emit:a}){const l=s,o=t=>{a("update:modelValue",t.target.value)};return(t,r)=>(v(),c(B,null,[l.label?(v(),c("label",A,f(s.label),1)):q("",!0),n("div",{class:R(["input-wrap",`mb-${l.mb}`])},[n("input",{class:"input-range",value:s.modelValue,type:"range",name:"maxResults",min:l.min,max:l.max,step:l.step,onChange:o},null,40,O),y(t.$slots,"default",{},void 0,!0)],2)],64))}},H=S(G,[["__scopeId","data-v-9faa47bf"]]);const J={class:"modal-form"},K=n("option",{value:"date"},"Дате",-1),L=n("option",{value:"rating"},"Рейтингу",-1),P=n("option",{value:"relevance"},"Релевантности",-1),X=n("option",{value:"title"},"Названию",-1),Y=n("option",{value:"viewCount"},"Количеству просмотров",-1),Z={class:"button-block"},le={__name:"FormModal",props:{isEdit:Boolean,query:Object},setup(s){const a=s,l=Q(),o=$(),t=D(),r=p(!0),e=p({id:"",q:t.searchQuery,title:"",order:"",maxResults:12}),w=()=>e.value.maxResults<51?r.value=!1:r.value=!0,M=()=>e.value.title.length>1?r.value=!1:r.value=!0,I=()=>{a.isEdit?(l.user.querys.forEach(m=>{m.id===a.query.id&&(m.maxResults=e.value.maxResults,m.order=e.value.order,m.title=e.value.title,m.q=e.value.q)}),t.saveQuery()):(e.value.id=Date.now(),t.saveQuery(e.value),o.isSaved=!0),o.callModal(),e.value.title="",e.value.order="",e.value.maxResults=12};return V(()=>t.searchQuery,()=>{e.value.q=t.searchQuery}),V(()=>a.query,()=>{e.value.q=a.query.q,e.value.title=a.query.title,e.value.order=a.query.order,e.value.maxResults=a.query.maxResults}),F(()=>{a.isEdit?r.value=!1:r.value=!0}),(m,u)=>(v(),c("form",J,[n("h3",null,f(a.isEdit?"Изменить запрос":"Сохранить запрос"),1),i(x,{modelValue:e.value.q,"onUpdate:modelValue":u[0]||(u[0]=d=>e.value.q=d),label:"Запрос",disabled:!a.isEdit,placeholder:b(t).searchQuery,mb:"1"},null,8,["modelValue","disabled","placeholder"]),i(x,{modelValue:e.value.title,"onUpdate:modelValue":[u[1]||(u[1]=d=>e.value.title=d),M],label:"Название",placeholder:"Укажите название",mb:"1",required:""},null,8,["modelValue"]),i(z,{modelValue:e.value.order,"onUpdate:modelValue":u[2]||(u[2]=d=>e.value.order=d),label:"Сортировать по",mb:"1"},{default:_(()=>[K,L,P,X,Y]),_:1},8,["modelValue"]),i(H,{label:"Максимальное количество",min:"1",max:"50",step:"1",modelValue:e.value.maxResults,"onUpdate:modelValue":u[4]||(u[4]=d=>e.value.maxResults=d),mb:"1"},{default:_(()=>[i(x,{modelValue:e.value.maxResults,"onUpdate:modelValue":[u[3]||(u[3]=d=>e.value.maxResults=d),w],"text-center":""},null,8,["modelValue"])]),_:1},8,["modelValue"]),n("div",Z,[i(h,{tonal:"","auto-width":"",onClick:u[5]||(u[5]=d=>b(o).callModal())},{default:_(()=>[g("Не сохранять")]),_:1}),i(h,{"auto-width":"",onClick:I,disabled:r.value},{default:_(()=>[g(f(a.isEdit?"Изменить":"Сохранить"),1)]),_:1},8,["disabled"])])]))}};export{te as _,le as a,$ as u};

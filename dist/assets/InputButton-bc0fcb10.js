import{_ as i,o as n,c as o,q as a,t as c,g as u,a as r,F as _,s as m,v as b}from"./_plugin-vue_export-helper-2c13a467.js";const y=["value","type","disabled","placeholder"],h={__name:"InputField",props:{label:String,type:String,eye:Boolean,mb:String,modelValue:String,disabled:Boolean,placeholder:String,required:Boolean,textCenter:Boolean},emits:["update:modelValue","showPass"],setup(l,{emit:t}){const e=l,s=d=>{t("update:modelValue",d.target.value)},p=()=>{t("showPass")};return(d,g)=>(n(),o(_,null,[e.label?(n(),o("label",{key:0,class:a({required:e.required})},c(e.label),3)):u("",!0),r("div",{class:a({textCenter:e.textCenter})},[r("input",{value:l.modelValue,type:e.type,class:a(`mb-${e.mb}`),onInput:s,disabled:e.disabled,placeholder:e.placeholder},null,42,y),e.label==="Пароль"?(n(),o("div",{key:0,class:a({"btn-in-input":!0,hide:e.eye}),onClick:p},null,2)):u("",!0)],2)],64))}},f=i(h,[["__scopeId","data-v-c006759f"]]);const v=["disabled"],B={__name:"InputButton",props:{autoWidth:Boolean,tonal:Boolean,disabled:Boolean},setup(l){const t=l;return(e,s)=>(n(),o("button",{class:a({"w-100":t.autoWidth,tonal:t.tonal}),type:"submit",onClick:s[0]||(s[0]=b(()=>{},["prevent"])),disabled:t.disabled},[m(e.$slots,"default",{},void 0,!0)],10,v))}},x=i(B,[["__scopeId","data-v-043195e4"]]);export{f as I,x as a};

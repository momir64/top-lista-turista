import{ai as s,aj as t}from"./VMain.1d14ca28.js";import{h as d,$ as i}from"./index.47f7c269.js";const v=d()({name:"VHover",props:{disabled:Boolean,modelValue:{type:Boolean,default:void 0},...s()},emits:{"update:modelValue":e=>!0},setup(e,n){let{slots:a}=n;const l=i(e,"modelValue"),{runOpenDelay:u,runCloseDelay:r}=t(e,o=>!e.disabled&&(l.value=o));return()=>{var o;return(o=a.default)==null?void 0:o.call(a,{isHovering:l.value,props:{onMouseenter:u,onMouseleave:r}})}}});export{v as V};
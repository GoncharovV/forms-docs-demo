import{c as e,j as a,a as h,F as k}from"./chunks/styles.BAyKnI2L.js";import{z as E}from"./chunks/index.DXqQCM1T.js";import{u as r,I as t,F as d,a as g}from"./chunks/input.DkJVty3J.js";import{p as y,v as o,c as F,ae as p,j as c,o as m}from"./chunks/framework.DZiWE35w.js";function C(){return new g({name:new k("123",{validators:[E.string().max(3)],mode:"onSubmit"}),lastName:new k("")})}const u=()=>{const{api:n,fields:i,instance:l}=r(C,{onValidSubmit:s=>console.log("VALID SUBMIT. DATA:",JSON.stringify(s)),onAnySubmit:()=>console.log("ANY SUBMIT ATTEMPT"),onInvalidSubmit:()=>{console.log("INVALID SUBMIT"),i.name.setValidationMode("onChange")}});return a.jsxs("form",{onSubmit:n.onSubmit,className:"example-form",children:[a.jsx(h,{control:i.name,children:s=>a.jsx(t,{data:s,description:"max len: 3"})}),a.jsx(h,{control:i.lastName,children:s=>a.jsx(t,{data:s})}),a.jsx(d,{form:l})]})};function B(n){e(n).render(a.jsx(u,{}))}const x=JSON.parse('{"title":"Base Form Example","description":"","frontmatter":{},"headers":[],"relativePath":"ru/examples/base-form-example.md","filePath":"ru/examples/base-form-example.md"}'),A={name:"ru/examples/base-form-example.md"},S=Object.assign(A,{setup(n){const i=y();return o(()=>B(i.value)),(l,s)=>(m(),F("div",null,[s[0]||(s[0]=p("",17)),c("div",{ref_key:"el",ref:i},null,512),s[1]||(s[1]=p("",2))]))}});export{x as __pageData,S as default};

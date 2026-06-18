import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./RoleForm-CzZOwCHM.js";import{n as r,r as i}from"./roles-CtoM7FpO.js";var a,o,s,c;e((()=>{i(),t(),a={title:`Requisitos/Gestión de Roles/IGU-15 (Registrar Roles)/RoleForm`,component:n,parameters:{layout:`padded`}},o={args:{onSubmit:e=>console.log(`Guardar rol`,e),onCancel:()=>console.log(`Cancelar`)}},s={args:{initialData:r[0],onSubmit:e=>console.log(`Actualizar rol`,e),onCancel:()=>console.log(`Cancelar`)}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    onSubmit: data => console.log("Guardar rol", data),
    onCancel: () => console.log("Cancelar")
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    initialData: MOCK_ROLES[0],
    onSubmit: data => console.log("Actualizar rol", data),
    onCancel: () => console.log("Cancelar")
  }
}`,...s.parameters?.docs?.source}}},c=[`Default`,`Edit`]}))();export{o as Default,s as Edit,c as __namedExportsOrder,a as default};
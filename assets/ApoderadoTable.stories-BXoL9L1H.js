import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./apoderados-CDXjgJEw.js";import{n as r,t as i}from"./ApoderadoTable-YfDq1kNm.js";var a,o,s,c;e((()=>{t(),r(),a={title:`Requisitos/Gestión de Apoderados/IGU-12 (Consultar Apoderados)/ApoderadoTable`,component:i,parameters:{layout:`padded`}},o={args:{apoderados:n,onVerDetalle:e=>console.log(`Ver detalle apoderado`,e),onEditar:e=>console.log(`Editar apoderado`,e),onEliminar:e=>console.log(`Eliminar/Inactivar apoderado`,e)}},s={args:{apoderados:[]}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    apoderados: MOCK_APODERADOS,
    onVerDetalle: id => console.log("Ver detalle apoderado", id),
    onEditar: id => console.log("Editar apoderado", id),
    onEliminar: id => console.log("Eliminar/Inactivar apoderado", id)
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    apoderados: []
  }
}`,...s.parameters?.docs?.source}}},c=[`Default`,`Empty`]}))();export{o as Default,s as Empty,c as __namedExportsOrder,a as default};
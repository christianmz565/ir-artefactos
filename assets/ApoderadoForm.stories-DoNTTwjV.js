import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,t as n}from"./apoderados-CDXjgJEw.js";import{n as r,t as i}from"./ApoderadoForm-CHMNZBe0.js";var a,o,s,c,l;e((()=>{t(),r(),a={title:`Requisitos/Gestión de Apoderados/IGU-11 (Registrar Apoderado)/ApoderadoForm`,component:i,parameters:{layout:`padded`}},o=[{id:1,nombre:`Juan Pérez`},{id:2,nombre:`Ana Ruiz`},{id:3,nombre:`Luis Gómez`},{id:4,nombre:`Pedro Martínez`}],s={args:{estudiantesDisponibles:o,onSubmit:e=>console.log(`Guardar apoderado`,e),onCancel:()=>console.log(`Cancelar`)}},c={args:{estudiantesDisponibles:o,initialData:n[0],onSubmit:e=>console.log(`Actualizar apoderado`,e),onCancel:()=>console.log(`Cancelar`)}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    estudiantesDisponibles: mockEstudiantes,
    onSubmit: data => console.log("Guardar apoderado", data),
    onCancel: () => console.log("Cancelar")
  }
}`,...s.parameters?.docs?.source}}},c.parameters={...c.parameters,docs:{...c.parameters?.docs,source:{originalSource:`{
  args: {
    estudiantesDisponibles: mockEstudiantes,
    initialData: MOCK_APODERADOS[0],
    onSubmit: data => console.log("Actualizar apoderado", data),
    onCancel: () => console.log("Cancelar")
  }
}`,...c.parameters?.docs?.source}}},l=[`Default`,`Edit`]}))();export{s as Default,c as Edit,l as __namedExportsOrder,a as default};
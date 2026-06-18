import{i as e}from"./preload-helper-xPQekRTU.js";import{i as t,n,r,t as i}from"./ReporteTable-CetA0jAW.js";var a,o,s,c;e((()=>{t(),n(),a={title:`Requisitos/Gestión de Reportes/IGU-9 (Listar Reportes)/ReporteTable`,component:i,parameters:{layout:`padded`}},o={args:{reportes:r,onVerDetalle:e=>console.log(`Ver detalle reporte`,e),onDescargar:e=>console.log(`Descargar reporte`,e),onEliminar:e=>console.log(`Eliminar reporte`,e)}},s={args:{reportes:[]}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
  args: {
    reportes: MOCK_REPORTES,
    onVerDetalle: id => console.log("Ver detalle reporte", id),
    onDescargar: url => console.log("Descargar reporte", url),
    onEliminar: id => console.log("Eliminar reporte", id)
  }
}`,...o.parameters?.docs?.source}}},s.parameters={...s.parameters,docs:{...s.parameters?.docs,source:{originalSource:`{
  args: {
    reportes: []
  }
}`,...s.parameters?.docs?.source}}},c=[`Default`,`Empty`]}))();export{o as Default,s as Empty,c as __namedExportsOrder,a as default};
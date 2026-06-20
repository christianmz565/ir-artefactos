import{i as e}from"./preload-helper-xPQekRTU.js";import{n as t,r as n}from"./reportes-BEGz9PJA.js";import{n as r,t as i}from"./ReporteTable-DUXEUfmq.js";var a,o,s,c;e((()=>{n(),r(),a={title:`Requisitos/Gestión de Reportes/IGU-9 (Listar Reportes)/ReporteTable`,component:i,parameters:{layout:`padded`}},o={args:{reportes:t,onVerDetalle:e=>console.log(`Ver detalle reporte`,e),onDescargar:e=>console.log(`Descargar reporte`,e),onEliminar:e=>console.log(`Eliminar reporte`,e)}},s={args:{reportes:[]}},o.parameters={...o.parameters,docs:{...o.parameters?.docs,source:{originalSource:`{
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
import{openBlock as t,createElementBlock as e}from"vue";var r={name:"V3Scroll",props:{scrollbarWidth:{default:"8px",type:String},trackColor:{default:"#f1f1f1",type:String},thumbColor:{default:"#666",type:String},thumbHoverColor:{default:"#999",type:String}},created(){this.setCssVariables()},methods:{setCssVariables(){document.documentElement.style.setProperty("--scrollbar-width",this.scrollbarWidth),document.documentElement.style.setProperty("--track-color",this.trackColor),document.documentElement.style.setProperty("--thumb-color",this.thumbColor),document.documentElement.style.setProperty("--thumb-hover-color",this.thumbHoverColor)}}};r.render=function(r,o,l,s,n,c){return t(),e("div")},r.__file="src/V3Scroll.vue";var o={V3Scroll:r};const l={install(t){for(const e in o)if(o.hasOwnProperty(e)){const r=o[e];t.component(r.name,r)}}};export{l as default};
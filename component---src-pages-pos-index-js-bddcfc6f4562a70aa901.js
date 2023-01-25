/*! For license information please see component---src-pages-pos-index-js-bddcfc6f4562a70aa901.js.LICENSE.txt */
(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[588],{4184:function(e,t){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var s=typeof r;if("string"===s||"number"===s)e.push(r);else if(Array.isArray(r)){if(r.length){var o=a.apply(null,r);o&&e.push(o)}}else if("object"===s){if(r.toString!==Object.prototype.toString&&!r.toString.toString().includes("[native code]")){e.push(r.toString());continue}for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},7693:function(e,t,r){"use strict";r.r(t),r.d(t,{default:function(){return N}});var n=r(5785),a=r(7294),s=r(682),o=r(4184),i=r.n(o),l=r(6792),c=r(5893);const u=a.forwardRef((({bsPrefix:e,size:t,vertical:r,className:n,as:a="div",...s},o)=>{const u=(0,l.vE)(e,"btn-group");let f=u;return r&&(f=`${u}-vertical`),(0,c.jsx)(a,{...s,ref:o,className:i()(n,f,t&&`${u}-${t}`)})}));u.displayName="ButtonGroup",u.defaultProps={vertical:!1,role:"group"};var f=u,d=r(1945),m=r(4051),p=r(1555),v=r(3228);var y=function(e){const{winery:t,image:r,wine:n,price:s,handleClick:o}=e;return a.createElement(v.Z,{style:{width:"18rem",margin:"1rem"}},a.createElement(v.Z.Img,{variant:"top",src:r}),a.createElement(v.Z.Body,null,a.createElement(v.Z.Title,null,t," - ",s," Baht"),a.createElement(d.Z,{variant:"primary",onClick:o},"Add to Cart")))},b=function(){};var g="undefined"!=typeof window,h=function(e,t,r){if(!g)return[t,b,b];if(!e)throw new Error("useLocalStorage key may not be falsy");var n=r?r.raw?function(e){return e}:r.deserializer:JSON.parse,s=(0,a.useRef)((function(e){try{var a=r?r.raw?String:r.serializer:JSON.stringify,s=localStorage.getItem(e);return null!==s?n(s):(t&&localStorage.setItem(e,a(t)),t)}catch(o){return t}})),o=(0,a.useState)((function(){return s.current(e)})),i=o[0],l=o[1];(0,a.useLayoutEffect)((function(){return l(s.current(e))}),[e]);var c=(0,a.useCallback)((function(t){try{var a="function"==typeof t?t(i):t;if(void 0===a)return;var s=void 0;s=r?r.raw?"string"==typeof a?a:JSON.stringify(a):r.serializer?r.serializer(a):JSON.stringify(a):JSON.stringify(a),localStorage.setItem(e,s),l(n(s))}catch(o){}}),[e,l]),u=(0,a.useCallback)((function(){try{localStorage.removeItem(e),l(void 0)}catch(o){}}),[e,l]);return[i,c,u]};const x=1e4;var N=function(){const[e,t]=h("wine","");let[r,o]=a.useState([]),[i,l]=a.useState("reds"),[c,u]=h("cart",[]);function v(e){c.push(e),console.table(c),u((0,n.Z)(c))}return a.useEffect((()=>{let e=[];fetch("https://api.sampleapis.com/wines/"+i).then((e=>e.json())).then((t=>{for(let r=0;r<t.length;r++)e.push(a.createElement(y,{key:r,image:t[r].image,winery:t[r].winery,wine:t[r].wine,price:x,handleClick:()=>{v(t[r])}}));o(e)}))}),[i]),a.createElement(s.Z,null,a.createElement("h1",null,"Wines"),a.createElement(f,{"aria-label":"Basic example"},a.createElement(d.Z,{variant:"secondary",onClick:()=>{l("reds")}},"Reds"),a.createElement(d.Z,{variant:"secondary",onClick:()=>{l("whites")}},"Whites"),a.createElement(d.Z,{variant:"secondary",onClick:()=>{l("sparkling")}},"Sparkling"),a.createElement(d.Z,{variant:"secondary",onClick:()=>{l("rose")}},"Rose"),a.createElement(d.Z,{variant:"secondary",onClick:()=>{l("dessert")}},"Dessert"),a.createElement(d.Z,{variant:"secondary",onClick:()=>{l("port")}},"Port")),a.createElement(m.Z,null,a.createElement(p.Z,null,a.createElement(m.Z,null,r)),a.createElement(p.Z,{sm:3},a.createElement("h2",null,"Cart ",e),c.map(((e,t)=>a.createElement(m.Z,{key:t},a.createElement(p.Z,null,e.winery),a.createElement(p.Z,null,x)))),a.createElement(m.Z,null,"Total: ",c.length*x," Baht"))))}},1945:function(e,t,r){"use strict";r.d(t,{Z:function(){return d}});var n=r(4184),a=r.n(n),s=r(7294),o=r(5893);const i=["as","disabled"];function l({tagName:e,disabled:t,href:r,target:n,rel:a,role:s,onClick:o,tabIndex:i=0,type:l}){e||(e=null!=r||null!=n||null!=a?"a":"button");const c={tagName:e};if("button"===e)return[{type:l||"button",disabled:t},c];const u=n=>{(t||"a"===e&&function(e){return!e||"#"===e.trim()}(r))&&n.preventDefault(),t?n.stopPropagation():null==o||o(n)};return"a"===e&&(r||(r="#"),t&&(r=void 0)),[{role:null!=s?s:"button",disabled:void 0,tabIndex:t?void 0:i,href:r,target:"a"===e?n:void 0,"aria-disabled":t||void 0,rel:"a"===e?a:void 0,onClick:u,onKeyDown:e=>{" "===e.key&&(e.preventDefault(),u(e))}},c]}const c=s.forwardRef(((e,t)=>{let{as:r,disabled:n}=e,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,i);const[s,{tagName:c}]=l(Object.assign({tagName:r,disabled:n},a));return(0,o.jsx)(c,Object.assign({},a,s,{ref:t}))}));c.displayName="Button";var u=r(6792);const f=s.forwardRef((({as:e,bsPrefix:t,variant:r,size:n,active:s,className:i,...c},f)=>{const d=(0,u.vE)(t,"btn"),[m,{tagName:p}]=l({tagName:e,...c}),v=p;return(0,o.jsx)(v,{...m,...c,ref:f,className:a()(i,d,s&&"active",r&&`${d}-${r}`,n&&`${d}-${n}`,c.href&&c.disabled&&"disabled")})}));f.displayName="Button",f.defaultProps={variant:"primary",active:!1,disabled:!1};var d=f},3228:function(e,t,r){"use strict";r.d(t,{Z:function(){return k}});var n=r(4184),a=r.n(n),s=r(7294),o=r(6792),i=r(4680),l=r(5893),c=e=>s.forwardRef(((t,r)=>(0,l.jsx)("div",{...t,ref:r,className:a()(t.className,e)})));const u=s.forwardRef((({bsPrefix:e,className:t,variant:r,as:n="img",...s},i)=>{const c=(0,o.vE)(e,"card-img");return(0,l.jsx)(n,{ref:i,className:a()(r?`${c}-${r}`:c,t),...s})}));u.displayName="CardImg";var f=u;const d=s.createContext(null);d.displayName="CardHeaderContext";var m=d;const p=s.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},i)=>{const c=(0,o.vE)(e,"card-header"),u=(0,s.useMemo)((()=>({cardHeaderBsPrefix:c})),[c]);return(0,l.jsx)(m.Provider,{value:u,children:(0,l.jsx)(r,{ref:i,...n,className:a()(t,c)})})}));p.displayName="CardHeader";var v=p;const y=c("h5"),b=c("h6"),g=(0,i.Z)("card-body"),h=(0,i.Z)("card-title",{Component:y}),x=(0,i.Z)("card-subtitle",{Component:b}),N=(0,i.Z)("card-link",{Component:"a"}),E=(0,i.Z)("card-text",{Component:"p"}),C=(0,i.Z)("card-footer"),w=(0,i.Z)("card-img-overlay"),Z=s.forwardRef((({bsPrefix:e,className:t,bg:r,text:n,border:s,body:i,children:c,as:u="div",...f},d)=>{const m=(0,o.vE)(e,"card");return(0,l.jsx)(u,{ref:d,...f,className:a()(t,m,r&&`bg-${r}`,n&&`text-${n}`,s&&`border-${s}`),children:i?(0,l.jsx)(g,{children:c}):c})}));Z.displayName="Card",Z.defaultProps={body:!1};var k=Object.assign(Z,{Img:f,Title:h,Subtitle:x,Body:g,Link:N,Text:E,Header:v,Footer:C,ImgOverlay:w})},1555:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),s=r(7294),o=r(6792),i=r(5893);const l=s.forwardRef(((e,t)=>{const[{className:r,...n},{as:s="div",bsPrefix:l,spans:c}]=function({as:e,bsPrefix:t,className:r,...n}){t=(0,o.vE)(t,"col");const s=(0,o.pi)(),i=(0,o.zG)(),l=[],c=[];return s.forEach((e=>{const r=n[e];let a,s,o;delete n[e],"object"==typeof r&&null!=r?({span:a,offset:s,order:o}=r):a=r;const u=e!==i?`-${e}`:"";a&&l.push(!0===a?`${t}${u}`:`${t}${u}-${a}`),null!=o&&c.push(`order${u}-${o}`),null!=s&&c.push(`offset${u}-${s}`)})),[{...n,className:a()(r,...l,...c)},{as:e,bsPrefix:t,spans:l}]}(e);return(0,i.jsx)(s,{...n,ref:t,className:a()(r,!c.length&&l)})}));l.displayName="Col",t.Z=l},682:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),s=r(7294),o=r(6792),i=r(5893);const l=s.forwardRef((({bsPrefix:e,fluid:t,as:r="div",className:n,...s},l)=>{const c=(0,o.vE)(e,"container"),u="string"==typeof t?`-${t}`:"-fluid";return(0,i.jsx)(r,{ref:l,...s,className:a()(n,t?`${c}${u}`:c)})}));l.displayName="Container",l.defaultProps={fluid:!1},t.Z=l},4051:function(e,t,r){"use strict";var n=r(4184),a=r.n(n),s=r(7294),o=r(6792),i=r(5893);const l=s.forwardRef((({bsPrefix:e,className:t,as:r="div",...n},s)=>{const l=(0,o.vE)(e,"row"),c=(0,o.pi)(),u=(0,o.zG)(),f=`${l}-cols`,d=[];return c.forEach((e=>{const t=n[e];let r;delete n[e],null!=t&&"object"==typeof t?({cols:r}=t):r=t;const a=e!==u?`-${e}`:"";null!=r&&d.push(`${f}${a}-${r}`)})),(0,i.jsx)(r,{ref:s,...n,className:a()(t,l,...d)})}));l.displayName="Row",t.Z=l},6792:function(e,t,r){"use strict";r.d(t,{pi:function(){return c},vE:function(){return l},zG:function(){return u}});var n=r(7294);r(5893);const a=["xxl","xl","lg","md","sm","xs"],s=n.createContext({prefixes:{},breakpoints:a,minBreakpoint:"xs"}),{Consumer:o,Provider:i}=s;function l(e,t){const{prefixes:r}=(0,n.useContext)(s);return e||r[t]||t}function c(){const{breakpoints:e}=(0,n.useContext)(s);return e}function u(){const{minBreakpoint:e}=(0,n.useContext)(s);return e}},4680:function(e,t,r){"use strict";r.d(t,{Z:function(){return u}});var n=r(4184),a=r.n(n),s=/-(.)/g;var o=r(7294),i=r(6792),l=r(5893);const c=e=>{return e[0].toUpperCase()+(t=e,t.replace(s,(function(e,t){return t.toUpperCase()}))).slice(1);var t};function u(e,{displayName:t=c(e),Component:r,defaultProps:n}={}){const s=o.forwardRef((({className:t,bsPrefix:n,as:s=r||"div",...o},c)=>{const u=(0,i.vE)(n,e);return(0,l.jsx)(s,{ref:c,className:a()(t,u),...o})}));return s.defaultProps=n,s.displayName=t,s}}}]);
//# sourceMappingURL=component---src-pages-pos-index-js-bddcfc6f4562a70aa901.js.map
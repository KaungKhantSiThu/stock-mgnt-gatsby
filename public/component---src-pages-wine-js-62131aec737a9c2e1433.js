"use strict";(self.webpackChunkgatsby_starter_default=self.webpackChunkgatsby_starter_default||[]).push([[435],{6173:function(e,t,l){l.r(t),l.d(t,{default:function(){return i}});var n=l(7294);const a={borderRadius:"5px 5px 0 0"},r={boxShadow:"0 4px 8px 0 rgba(0,0,0,0.2)",transition:"0.3s",width:"40%",borderRadius:"5px"},s={padding:"2px 16px"};function i(){let e=[],[t,l]=n.useState([]);return n.useEffect((async()=>{let t=await fetch("https://api.sampleapis.com/wines/reds"),i=await t.json();for(let l=0;l<i.length;l++)console.log(i[l].wine),e.push(n.createElement("li",null,n.createElement("div",{style:r},n.createElement("img",{src:i[l].image,alt:i[l].wine,style:a}),n.createElement("div",{style:s},n.createElement("h4",null,n.createElement("b",null,i[l].wine)),n.createElement("p",null,i[l].winery)))));l(e)}),[]),n.createElement(n.Fragment,null,n.createElement("h1",null,"Wine"),n.createElement("ul",null,t))}}}]);
//# sourceMappingURL=component---src-pages-wine-js-62131aec737a9c2e1433.js.map
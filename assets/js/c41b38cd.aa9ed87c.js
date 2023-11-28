"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[62842],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=s(n),f=a,d=c["".concat(p,".").concat(f)]||c[f]||m[f]||o;return n?r.createElement(d,l(l({ref:t},u),{},{components:n})):r.createElement(d,l({ref:t},u))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},14975:function(e,t,n){n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return d},metadata:function(){return v},toc:function(){return y}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))s.call(t,n)&&u(e,n,t[n]);return e},m=(e,t)=>o(e,l(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const d={title:"Server-Sent Events"},b="Server-Sent Events",v={unversionedId:"web/sse",id:"web/sse",title:"Server-Sent Events",description:"- https://developer.mozilla.org/en-US/docs/Web/API/EventSource",source:"@site/../notes/web/sse.md",sourceDirName:"web",slug:"/web/sse",permalink:"/notes/web/sse",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/sse.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1684216634,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{title:"Server-Sent Events"},sidebar:"docs",previous:{title:"webmanifest",permalink:"/notes/web/spec/webmanifest"},next:{title:"Style",permalink:"/notes/web/style/"}},k={},y=[],w={toc:y},O="wrapper";function g(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(O,m(c(c({},w),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"server-sent-events"}),"Server-Sent Events"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/EventSource"}),"https://developer.mozilla.org/en-US/docs/Web/API/EventSource"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u975e HTTP/2 \u65f6\uff0c\u4e00\u4e2a domain \u6700\u591a\u5f00 ",(0,r.kt)("strong",{parentName:"li"},"6")," \u4e2a SSE \u94fe\u63a5\uff08\u540c\u65f6\u5f71\u54cd\u6b63\u5e38\u8bf7\u6c42\uff09\uff0cHTTP/2 \u65f6\u9ed8\u8ba4 100"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://web.dev/eventsource-basics/"}),"https://web.dev/eventsource-basics/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://news.ycombinator.com/item?id=35953171"}),"https://news.ycombinator.com/item?id=35953171"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5305\u542b\u4e86\u4e00\u4e9b\u573a\u666f\u548c\u95ee\u9898")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\\n\\n \u5206\u9694 ")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"data: message\\n\\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u53ef\u4ee5\u591a\u884c")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"data: first line\\n\ndata: second line\\n\\n\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u652f\u6301\u989d\u5916\u5b57\u6bb5")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{}),"id: 12345\\n\ndata: GOOG\\n\ndata: 556\\n\\n\n")),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"id",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Last-Event-ID"),(0,r.kt)("li",{parentName:"ul"},"e.lastEventId"))),(0,r.kt)("li",{parentName:"ul"},"data"),(0,r.kt)("li",{parentName:"ul"},"retry: 3000",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"3s"))),(0,r.kt)("li",{parentName:"ul"},"event",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u540d\u5b57")))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-js"}),"var source = new EventSource('/events');\nsource.onmessage = function (e) {\n  console.log(e.data);\n};\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/rexxars/eventsource-parser"}),"https://github.com/rexxars/eventsource-parser"))))}g.isMDXComponent=!0}}]);
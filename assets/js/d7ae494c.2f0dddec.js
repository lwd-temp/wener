"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[66498],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),f=a,b=p["".concat(u,".").concat(f)]||p[f]||m[f]||o;return r?n.createElement(b,i(i({ref:t},s),{},{components:r})):n.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},24555:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return v},default:function(){return h},frontMatter:function(){return b},metadata:function(){return d},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),f=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const b={tags:["FAQ"]},v="IM FAQ",d={unversionedId:"service/im/im-faq",id:"service/im/im-faq",title:"IM FAQ",description:"- https://docs.nats.io/nats-concepts/overview/compare-nats",source:"@site/../notes/service/im/im-faq.md",sourceDirName:"service/im",slug:"/service/im/faq",permalink:"/notes/service/im/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/im/im-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1678453938,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"IM Awesome",permalink:"/notes/service/im/awesome"},next:{title:"IRC",permalink:"/notes/service/im/irc/"}},k={},y=[{value:"fan-in vs fan-out",id:"fan-in-vs-fan-out",level:2}],O={toc:y},w="wrapper";function h(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(w,m(p(p({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"im-faq"}),"IM FAQ"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://docs.nats.io/nats-concepts/overview/compare-nats"}),"https://docs.nats.io/nats-concepts/overview/compare-nats"))),(0,n.kt)("h2",p({},{id:"fan-in-vs-fan-out"}),"fan-in vs fan-out"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fan in",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"N Producer -> 1 Broker"))),(0,n.kt)("li",{parentName:"ul"},"fan out",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"one-to-many"),(0,n.kt)("li",{parentName:"ul"},"PubSub"),(0,n.kt)("li",{parentName:"ul"},"PushPull"),(0,n.kt)("li",{parentName:"ul"},"1 Broker -> N Consumer"))),(0,n.kt)("li",{parentName:"ul"},"fan out write",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1 Broker -> N Consumer"))),(0,n.kt)("li",{parentName:"ul"},"fan out read",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1 Consumer -> N Broker")))),(0,n.kt)("mermaid",p({},{value:"flowchart LR\n    PA & PB & PC --\x3e Subject\n    Subject --\x3e SA & SB & SC\n    PA[Publisher]\n    PB[Publisher]\n    PC[Publisher]\n    SA[Subscriber]\n    SB[Subscriber]\n    SC[Subscriber]"})),(0,n.kt)("mermaid",p({},{value:"flowchart LR\n    GA & CA & GB --\x3e UA\n    GA & CA & CB --\x3e UB\n    GA[Group]\n    GB[Group]\n    CA[Chat]\n    CB[Chat]\n    UA[User]\n    UB[User]"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u4f1a\u8bdd\u4e00\u4e2a\u961f\u5217 - \u72ec\u7acb\u5355\u4e00"),(0,n.kt)("li",{parentName:"ul"},"\u591a\u6d88\u8d39"),(0,n.kt)("li",{parentName:"ul"},"\u8ba2\u9605\u65f6\u5408\u5e76 - \u903b\u8f91\u590d\u6742"),(0,n.kt)("li",{parentName:"ul"},"\u76f8\u5bf9\u53ef\u63a7\u6027\u9ad8")),(0,n.kt)("mermaid",p({},{value:"flowchart LR\n    GA & CA & GB --\x3e QA[Queue] --\x3e UA\n    GA & CA & CB --\x3e QB[Queue] --\x3e UB\n    GA[Group]\n    GB[Group]\n    CA[Chat]\n    CB[Chat]\n    UA[User]\n    UB[User]"})),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5668\u591a\u5b58\u3001\u591a\u5904\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u5355\u4e00\u6d88\u8d39"),(0,n.kt)("li",{parentName:"ul"},"\u6743\u9650\u597d\u63a7\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u53d8\u52a8\u5c0f - \u53ef\u63a7\u6027\u4f4e")))}h.isMDXComponent=!0}}]);
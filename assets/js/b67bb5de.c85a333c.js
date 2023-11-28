"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[23268],{49613:function(e,t,r){r.d(t,{Zo:function(){return l},kt:function(){return h}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},l=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=p(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,h=u["".concat(s,".").concat(m)]||u[m]||f[m]||a;return r?n.createElement(h,i(i({ref:t},l),{},{components:r})):n.createElement(h,i({ref:t},l))}));function h(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=m;var p={};for(var s in t)hasOwnProperty.call(t,s)&&(p[s]=t[s]);p.originalType=e,p[u]="string"==typeof e?e:o,i[1]=p;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},45064:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return O},frontMatter:function(){return h},metadata:function(){return b},toc:function(){return k}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,l=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&l(e,r,t[r]);if(p)for(var r of p(t))c.call(t,r)&&l(e,r,t[r]);return e},f=(e,t)=>a(e,i(t)),m=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const h={title:"HTTP 3"},d="HTTP3",b={unversionedId:"service/network/spec/http/http3",id:"service/network/spec/http/http3",title:"HTTP 3",description:"- https://http3-explained.haxx.se/",source:"@site/../notes/service/network/spec/http/http3.md",sourceDirName:"service/network/spec/http",slug:"/service/network/spec/http/http3",permalink:"/notes/service/network/spec/http/http3",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/spec/http/http3.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686920980,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{title:"HTTP 3"},sidebar:"docs",previous:{title:"HTTP 2",permalink:"/notes/service/network/spec/http/http2"},next:{title:"URL",permalink:"/notes/service/network/spec/http/url"}},y={},k=[],v={toc:k},w="wrapper";function O(e){var t=e,{components:r}=t,o=m(t,["components"]);return(0,n.kt)(w,f(u(u({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"http3"}),"HTTP3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://http3-explained.haxx.se/"}),"https://http3-explained.haxx.se/")),(0,n.kt)("li",{parentName:"ul"},'Alt-Svc: h3=":50781"'),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://daniel.haxx.se/blog/2021/05/27/quic-is-rfc-9000/"}),"QUIC IS RFC 9000")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://w3techs.com/technologies/details/ce-http3"}),"Usage statistics of HTTP/3 for websites")),(0,n.kt)("li",{parentName:"ul"},"Kubernetes 1.24 2022-05",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5f00\u542f MixedProtocolLBService"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/services-networking/service/#load-balancers-with-mixed-protocol-types"}),"https://kubernetes.io/docs/concepts/services-networking/service/#load-balancers-with-mixed-protocol-types")),(0,n.kt)("li",{parentName:"ul"},"Support of mixed protocols in Services with type=LoadBalancer ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/kubernetes/enhancements/issues/1435"}),"KEP 1435"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"1.26 Stable"))),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u914d\u7f6e\u76f8\u540c\u7aef\u53e3\u4e0d\u540c\u534f\u8bae")))),(0,n.kt)("admonition",u({},{type:"info"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/haproxy/haproxy/issues/680"}),"haproxy/haproxy#680")," HAProxy Support HTTP3",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HAProxy 2.5, QUIC+HTTP/3"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/haproxytech/kubernetes-ingress/issues/546"}),"https://github.com/haproxytech/kubernetes-ingress/issues/546")))))}O.isMDXComponent=!0}}]);
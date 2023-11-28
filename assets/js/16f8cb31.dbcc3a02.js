"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[71258],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),l=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=l(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},b=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,c=s(e,["components","mdxType","originalType","parentName"]),p=l(r),b=o,d=p["".concat(u,".").concat(b)]||p[b]||f[b]||a;return r?n.createElement(d,i(i({ref:t},c),{},{components:r})):n.createElement(d,i({ref:t},c))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=b;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[p]="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}b.displayName="MDXCreateElement"},93945:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return y},default:function(){return h},frontMatter:function(){return d},metadata:function(){return m},toc:function(){return v}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&c(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>a(e,i(t)),b=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const d={title:"Kubernates \u63a5\u53e3",tags:["API"]},y="Kubernates \u63a5\u53e3",m={unversionedId:"devops/kubernetes/internal/k8s-api",id:"devops/kubernetes/internal/k8s-api",title:"Kubernates \u63a5\u53e3",description:"- \u5b9a\u4e49\u6587\u6863",source:"@site/../notes/devops/kubernetes/internal/k8s-api.md",sourceDirName:"devops/kubernetes/internal",slug:"/devops/kubernetes/internal/k8s-api",permalink:"/notes/devops/kubernetes/internal/k8s-api",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/internal/k8s-api.md",tags:[{label:"API",permalink:"/notes/tags/api"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1685087225,formattedLastUpdatedAt:"May 26, 2023",frontMatter:{title:"Kubernates \u63a5\u53e3",tags:["API"]},sidebar:"docs",previous:{title:"Kubernetes Internal",permalink:"/notes/devops/kubernetes/internal/"},next:{title:"Kubernetes DNS",permalink:"/notes/devops/kubernetes/internal/k8s-dns"}},k={},v=[],O={toc:v},g="wrapper";function h(e){var t=e,{components:r}=t,o=b(t,["components"]);return(0,n.kt)(g,f(p(p({},O),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"kubernates-\u63a5\u53e3"}),"Kubernates \u63a5\u53e3"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://kubernetes.io/docs/reference/generated/kubernetes-api/v1.27/"}),"\u5b9a\u4e49\u6587\u6863"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5305\u542b\u4e86\u6240\u6709\u5bf9\u8c61\u7684\u5b57\u6bb5\u8bf4\u660e\u548c\u5b9a\u4e49"))),(0,n.kt)("li",{parentName:"ul"},"\u5206\u7c7b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Workloads are objects you use to manage and run your containers on the cluster."),(0,n.kt)("li",{parentName:"ul"},'Discovery & LB resources are objects you use to "stitch" your workloads together into an externally accessible, load-balanced Service.'),(0,n.kt)("li",{parentName:"ul"},"Config & Storage resources are objects you use to inject initialization data into your applications, and to persist data that is external to your container."),(0,n.kt)("li",{parentName:"ul"},"Cluster resources objects define how the cluster itself is configured; these are typically used only by cluster operators."),(0,n.kt)("li",{parentName:"ul"},"Metadata resources are objects you use to configure the behavior of other resources within the cluster, such as HorizontalPodAutoscaler for scaling workloads.")))))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[17813],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return g}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,g=s["".concat(p,".").concat(f)]||s[f]||m[f]||i;return r?n.createElement(g,o(o({ref:t},u),{},{components:r})):n.createElement(g,o({ref:t},u))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=f;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},40008:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e},m=(e,t)=>i(e,o(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const g={tags:["FAQ"]},d="Gitea FAQ",k={unversionedId:"service/forge/gitea/gitea-faq",id:"service/forge/gitea/gitea-faq",title:"Gitea FAQ",description:"OIDC Mapping",source:"@site/../notes/service/forge/gitea/gitea-faq.md",sourceDirName:"service/forge/gitea",slug:"/service/forge/gitea/faq",permalink:"/notes/service/forge/gitea/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/gitea/gitea-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1689578517,formattedLastUpdatedAt:"Jul 17, 2023",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"\u914d\u7f6e",permalink:"/notes/service/forge/gitea/conf"},next:{title:"Package",permalink:"/notes/service/forge/gitea/package"}},y={},v=[{value:"OIDC Mapping",id:"oidc-mapping",level:2},{value:"Trigger Mirror Sync / WebHook",id:"trigger-mirror-sync--webhook",level:2}],O={toc:v},b="wrapper";function N(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(b,m(s(s({},O),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"gitea-faq"}),"Gitea FAQ"),(0,n.kt)("h2",s({},{id:"oidc-mapping"}),"OIDC Mapping"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-env"}),"GITEA__service__DISABLE_REGISTRATION=true\nGITEA__service__ALLOW_ONLY_EXTERNAL_REGISTRATION=true\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Keycloak",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65b0\u5efa ",(0,n.kt)("inlineCode",{parentName:"li"},"gitea")," Client Mapper",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6620\u5c04 claims ",(0,n.kt)("inlineCode",{parentName:"li"},"gitea_groups")," -> \u7528\u6237\u5c5e\u6027 ",(0,n.kt)("inlineCode",{parentName:"li"},"GITEA_GROUPS"),", \u503c\u4e3a JSON"))),(0,n.kt)("li",{parentName:"ul"},"User",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'GITEA_GROUPS=["admin","wener"]')))))),(0,n.kt)("li",{parentName:"ul"},"Gitea",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u53d1\u73b0 ",(0,n.kt)("inlineCode",{parentName:"li"},"https://wener.me/realms/wener/.well-known/openid-configuration")),(0,n.kt)("li",{parentName:"ul"},"\u9644\u52a0\u6388\u6743\u8303\u56f4\uff08Scopes\uff09",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"openid email profile gitea")))),(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u63d0\u4f9b\u7528\u6237\u7ec4\u540d\u79f0\u7684 Claim \u58f0\u660e\u540d\u79f0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"gitea_groups")))),(0,n.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u5458\u7528\u6237\u7ec4\u7684 Claim \u58f0\u660e\u503c",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"admin")))),(0,n.kt)("li",{parentName:"ul"},"\u6620\u5c04\u58f0\u660e\u7684\u7ec4\u5230\u7ec4\u7ec7\u56e2\u961f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'{"wener":{"wener":["owners"]}}'),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6620\u5c04 wener \u7ec4\u4e3a wener \u7ec4\u7ec7\u7684 owners \u56e2\u961f")))))))),(0,n.kt)("h2",s({},{id:"trigger-mirror-sync--webhook"}),"Trigger Mirror Sync / WebHook"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"curl -X POST https://gitea.com/api/v1/repos/{owner}/{repo}/mirror-sync?token={pta}\n")))}N.isMDXComponent=!0}}]);
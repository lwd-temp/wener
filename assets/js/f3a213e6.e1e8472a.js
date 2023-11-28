"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[48649],{49613:function(e,n,t){t.d(n,{Zo:function(){return u},kt:function(){return d}});var r=t(59496);function i(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){i(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,i=function(e,n){if(null==e)return{};var t,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(i[t]=e[t]);return i}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var l=r.createContext({}),s=function(e){var n=r.useContext(l),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(l.Provider,{value:n},e.children)},f="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},m=r.forwardRef((function(e,n){var t=e.components,i=e.mdxType,a=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(t),m=i,d=f["".concat(l,".").concat(m)]||f[m]||p[m]||a;return t?r.createElement(d,o(o({ref:n},u),{},{components:t})):r.createElement(d,o({ref:n},u))}));function d(e,n){var t=arguments,i=n&&n.mdxType;if("string"==typeof e||i){var a=t.length,o=new Array(a);o[0]=m;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c[f]="string"==typeof e?e:i,o[1]=c;for(var s=2;s<a;s++)o[s]=t[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,t)}m.displayName="MDXCreateElement"},34412:function(e,n,t){t.r(n),t.d(n,{assets:function(){return v},contentTitle:function(){return y},default:function(){return E},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return O}});var r=t(49613),i=Object.defineProperty,a=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,n,t)=>n in e?i(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,f=(e,n)=>{for(var t in n||(n={}))l.call(n,t)&&u(e,t,n[t]);if(c)for(var t of c(n))s.call(n,t)&&u(e,t,n[t]);return e},p=(e,n)=>a(e,o(n)),m=(e,n)=>{var t={};for(var r in e)l.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&c)for(var r of c(e))n.indexOf(r)<0&&s.call(e,r)&&(t[r]=e[r]);return t};const d={title:"infisical"},y="infisical",b={unversionedId:"service/security/infisical",id:"service/security/infisical",title:"infisical",description:"- infisical",source:"@site/../notes/service/security/infisical.md",sourceDirName:"service/security",slug:"/service/security/infisical",permalink:"/notes/service/security/infisical",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/security/infisical.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"infisical"},sidebar:"docs",previous:{title:"RealTime Awesome",permalink:"/notes/service/realtime/awesome"},next:{title:"Vault",permalink:"/notes/service/security/vault/"}},v={},O=[],g={toc:O},w="wrapper";function E(e){var n=e,{components:t}=n,i=m(n,["components"]);return(0,r.kt)(w,p(f(f({},g),i),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",f({},{id:"infisical"}),"infisical"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",f({parentName:"li"},{href:"https://github.com/Infisical/infisical"}),"infisical"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, NextJS, ",(0,r.kt)("strong",{parentName:"li"},"MongoDB"))))),(0,r.kt)("admonition",f({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u5b58\u50a8\u53ea\u80fd MongoDB"))),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-bash"}),"export TELEMETRY_ENABLED=false\n\n# SelfHost\nwget -O .env https://raw.githubusercontent.com/Infisical/infisical/main/.env.example\nwget -O docker-compose.yml https://raw.githubusercontent.com/Infisical/infisical/main/docker-compose.yml\nmkdir nginx && cd nginx && wget -O default.conf https://raw.githubusercontent.com/Infisical/infisical/main/nginx/default.dev.conf\ncd ..\n\nnano .env\n\ndocker-compose -f docker-compose.yml up -d\n\n# \u547d\u4ee4\u884c\nbrew install infisical/get-cli/infisical\n\n# \u5728\u4e0d login \u7684\u65b9\u5f0f\u4e0b\u4f7f\u7528\nexport INFISICAL_TOKEN\n\ninfisical export > .env\n\ndocker run -p 80:80 \\\n  -e ENCRYPTION_KEY= \\\n  -e JWT_SIGNUP_SECRET= \\\n  -e JWT_REFRESH_SECRET= \\\n  -e JWT_AUTH_SECRET= \\\n  -e JWT_SERVICE_SECRET= \\\n  -e MONGO_URL= \\\n  -e REDIS_URL= \\\n  infisical/infisical:latest\n")))}E.isMDXComponent=!0}}]);
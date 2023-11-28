"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64078],{49613:function(e,n,t){t.d(n,{Zo:function(){return s},kt:function(){return m}});var r=t(59496);function o(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function c(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function a(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?c(Object(t),!0).forEach((function(n){o(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,r,o=function(e,n){if(null==e)return{};var t,r,o={},c=Object.keys(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)t=c[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var p=r.createContext({}),l=function(e){var n=r.useContext(p),t=n;return e&&(t="function"==typeof e?e(n):a(a({},n),e)),t},s=function(e){var n=l(e.components);return r.createElement(p.Provider,{value:n},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,o=e.mdxType,c=e.originalType,p=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),u=l(t),d=o,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||c;return t?r.createElement(m,a(a({ref:n},s),{},{components:t})):r.createElement(m,a({ref:n},s))}));function m(e,n){var t=arguments,o=n&&n.mdxType;if("string"==typeof e||o){var c=t.length,a=new Array(c);a[0]=d;var i={};for(var p in n)hasOwnProperty.call(n,p)&&(i[p]=n[p]);i.originalType=e,i[u]="string"==typeof e?e:o,a[1]=i;for(var l=2;l<c;l++)a[l]=t[l];return r.createElement.apply(null,a)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},11590:function(e,n,t){t.r(n),t.d(n,{assets:function(){return h},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return b}});var r=t(49613),o=Object.defineProperty,c=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,n,t)=>n in e?o(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))p.call(n,t)&&s(e,t,n[t]);if(i)for(var t of i(n))l.call(n,t)&&s(e,t,n[t]);return e},f=(e,n)=>c(e,a(n)),d=(e,n)=>{var t={};for(var r in e)p.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&i)for(var r of i(e))n.indexOf(r)<0&&l.call(e,r)&&(t[r]=e[r]);return t};const m={title:"NGINX Cache"},g="NGINX Cache",y={unversionedId:"devops/web/nginx/nginx-cache",id:"devops/web/nginx/nginx-cache",title:"NGINX Cache",description:"- proxycache",source:"@site/../notes/devops/web/nginx/nginx-cache.md",sourceDirName:"devops/web/nginx",slug:"/devops/web/nginx/cache",permalink:"/notes/devops/web/nginx/cache",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/nginx/nginx-cache.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1677583228,formattedLastUpdatedAt:"Feb 28, 2023",frontMatter:{title:"NGINX Cache"},sidebar:"docs",previous:{title:"Nginx Awesome",permalink:"/notes/devops/web/nginx/awesome"},next:{title:"Nginx",permalink:"/notes/devops/web/nginx/conf"}},h={},b=[],x={toc:b},v="wrapper";function w(e){var n=e,{components:t}=n,o=d(n,["components"]);return(0,r.kt)(v,f(u(u({},x),o),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"nginx-cache"}),"NGINX Cache"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-nginx"}),"http {\n    proxy_cache_path /data/nginx/cache keys_zone=mycache:10m;\n    server {\n        proxy_cache mycache;\n        location / {\n            proxy_pass http://localhost:8000;\n        }\n    }\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://nginx.org/en/docs/http/ngx_http_proxy_module.html#proxy_cache"}),"proxy_cache")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://docs.nginx.com/nginx/admin-guide/content-cache/content-caching/"}),"https://docs.nginx.com/nginx/admin-guide/content-cache/content-caching/"))))}w.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[84540],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return d}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var p=r.createContext({}),c=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},g=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(n),g=o,d=s["".concat(p,".").concat(g)]||s[g]||m[g]||i;return n?r.createElement(d,a(a({ref:t},u),{},{components:n})):r.createElement(d,a({ref:t},u))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:o,a[1]=l;for(var c=2;c<i;c++)a[c]=n[c];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}g.displayName="MDXCreateElement"},546:function(e,t,n){n.r(t),n.d(t,{assets:function(){return x},contentTitle:function(){return f},default:function(){return y},frontMatter:function(){return d},metadata:function(){return h},toc:function(){return _}});var r=n(49613),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))c.call(t,n)&&u(e,n,t[n]);return e},m=(e,t)=>i(e,a(t)),g=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const d={tags:["Configuration"]},f="Nginx",h={unversionedId:"devops/web/nginx/nginx-conf",id:"devops/web/nginx/nginx-conf",title:"Nginx",description:"- https://www.digitalocean.com/community/tools/nginx",source:"@site/../notes/devops/web/nginx/nginx-conf.md",sourceDirName:"devops/web/nginx",slug:"/devops/web/nginx/conf",permalink:"/notes/devops/web/nginx/conf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/web/nginx/nginx-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1692169664,formattedLastUpdatedAt:"Aug 16, 2023",frontMatter:{tags:["Configuration"]},sidebar:"docs",previous:{title:"NGINX Cache",permalink:"/notes/devops/web/nginx/cache"},next:{title:"Nginx \u5e38\u7528\u914d\u7f6e",permalink:"/notes/devops/web/nginx/cookbook"}},x={},_=[{value:"ngx_http_core_module",id:"ngx_http_core_module",level:2},{value:"ngx_http_rewrite_module",id:"ngx_http_rewrite_module",level:2},{value:"ngx_http_proxy_module",id:"ngx_http_proxy_module",level:2},{value:"ngx_http_log_module",id:"ngx_http_log_module",level:2}],w={toc:_},k="wrapper";function y(e){var t=e,{components:n}=t,o=g(t,["components"]);return(0,r.kt)(k,m(s(s({},w),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"nginx"}),"Nginx"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u68c0\u67e5\u914d\u7f6e\nnginx -c nginx.conf\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-nginx"}),"rewrite ^(.*)/$ $1/index.html permanent;\n\nrewrite ^(.*)/index.html$ $1 permanent;\n\nlocation = /index.html {\n  rewrite  ^ / permanent;\n  try_files /index.html =404;\n}\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.digitalocean.com/community/tools/nginx"}),"https://www.digitalocean.com/community/tools/nginx")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/digitalocean/nginxconfig.io"}),"digitalocean/nginxconfig.io")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/"}),"https://www.nginx.com/resources/wiki/start/topics/tutorials/config_pitfalls/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://stackoverflow.com/questions/44639182/nginx-proxy-amazon-s3-resources"}),"https://stackoverflow.com/questions/44639182/nginx-proxy-amazon-s3-resources"))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-nginx"}),"# root \u652f\u6301\u4f7f\u7528 http_host \u5b9e\u73b0\u52a8\u6001\u7ad9\u70b9\u76ee\u5f55\nroot /data/sites/$http_host;\n\n# alias \u53ef\u4ee5\u4fee\u6539\u76ee\u5f55 - \u76f8\u5f53\u4e8e\u4fee\u6539 root\nlocation /i/ {\n    alias /data/w3/images/;\n}\n\nerror_page 404 /dist/$http_host/404.html;\nlocation = /404.html {\n    internal;\n}\n")),(0,r.kt)("h2",s({},{id:"ngx_http_core_module"}),"ngx_http_core_module"),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"http://nginx.org/en/docs/http/ngx_http_core_module.html"}),"http://nginx.org/en/docs/http/ngx_http_core_module.html")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"location [ = | ~ | ~* | ^~ ] uri"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u524d\u7f00\u5339\u914d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"=")," \u5b8c\u5168\u5339\u914d"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~")," \u5927\u5c0f\u5199\u654f\u611f\u6b63\u5219"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"~*")," \u5927\u5c0f\u5199\u4e0d\u654f\u611f\u6b63\u5219"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"^~")," \u4e0d\u5339\u914d"),(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u9009\u62e9\u6700\u957f\u5339\u914d\u89c4\u5219"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"resolver address ... [valid=time] [ipv6=on|off] [status_zone=zone];"))),(0,r.kt)("h2",s({},{id:"ngx_http_rewrite_module"}),"ngx_http_rewrite_module"),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"http://nginx.org/en/docs/http/ngx_http_rewrite_module.html"}),"http://nginx.org/en/docs/http/ngx_http_rewrite_module.html")),(0,r.kt)("h2",s({},{id:"ngx_http_proxy_module"}),"ngx_http_proxy_module"),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"http://nginx.org/en/docs/http/ngx_http_proxy_module.html"}),"http://nginx.org/en/docs/http/ngx_http_proxy_module.html")),(0,r.kt)("h2",s({},{id:"ngx_http_log_module"}),"ngx_http_log_module"),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"http://nginx.org/en/docs/http/ngx_http_log_module.html"}),"http://nginx.org/en/docs/http/ngx_http_log_module.html")))}y.isMDXComponent=!0}}]);
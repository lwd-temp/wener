"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38723],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),p=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(i.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),m=a,h=u["".concat(i,".").concat(m)]||u[m]||f[m]||l;return r?n.createElement(h,o(o({ref:t},s),{},{components:r})):n.createElement(h,o({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,o=new Array(l);o[0]=m;var c={};for(var i in t)hasOwnProperty.call(t,i)&&(c[i]=t[i]);c.originalType=e,c[u]="string"==typeof e?e:a,o[1]=c;for(var p=2;p<l;p++)o[p]=r[p];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},64754:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return h},metadata:function(){return y},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&s(e,r,t[r]);return e},f=(e,t)=>l(e,o(t)),m=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const h={title:"ECH"},d="ECH",y={unversionedId:"security/tls/ech",id:"security/tls/ech",title:"ECH",description:"- \u52a0\u5bc6 SNI - ESNI -> ECH - Encrypted Client Hello",source:"@site/../notes/security/tls/ech.md",sourceDirName:"security/tls",slug:"/security/tls/ech",permalink:"/notes/security/tls/ech",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/tls/ech.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1695042174,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{title:"ECH"},sidebar:"docs",previous:{title:"ssh-audit",permalink:"/notes/security/ssh-audit"},next:{title:"virustotal",permalink:"/notes/security/virustotal"}},k={},b=[],w={toc:b},g="wrapper";function N(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(g,f(u(u({},w),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"ech"}),"ECH"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u52a0\u5bc6 SNI - ESNI -> ECH - Encrypted Client Hello"),(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 HTTPS DNS \u8bb0\u5f55"),(0,n.kt)("li",{parentName:"ul"},"HAProxy - ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/haproxy/haproxy/issues/1924"}),"#1924")),(0,n.kt)("li",{parentName:"ul"},"OpenSSL ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/openssl/openssl/issues/7482"}),"#7482")),(0,n.kt)("li",{parentName:"ul"},"WolfSSL v5.6.0 --enable-hpke",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://www.wolfssl.com/encrypted-client-hello-ech-now-supported-wolfssl/"}),"https://www.wolfssl.com/encrypted-client-hello-ech-now-supported-wolfssl/")))),(0,n.kt)("li",{parentName:"ul"},"Nginx ",(0,n.kt)("a",u({parentName:"li"},{href:"https://trac.nginx.org/nginx/ticket/2275"}),"#2275")),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://blog.cloudflare.com/encrypted-client-hello/"}),"https://blog.cloudflare.com/encrypted-client-hello/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://www.cloudflare.com/zh-cn/ssl/encrypted-sni/"}),"https://www.cloudflare.com/zh-cn/ssl/encrypted-sni/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/draft-ietf-tls-esni"}),"https://datatracker.ietf.org/doc/html/draft-ietf-tls-esni")),(0,n.kt)("li",{parentName:"ul"},"Chrome 117 - ",(0,n.kt)("a",u({parentName:"li"},{href:"https://chromestatus.com/feature/6196703843581952"}),"https://chromestatus.com/feature/6196703843581952"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chrome://flags/#encrypted-client-hello"),(0,n.kt)("li",{parentName:"ul"},"2023-09"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://tls-ech.dev"}),"https://tls-ech.dev")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://defo.ie/ech-check.php"}),"https://defo.ie/ech-check.php"))))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u56fd\u5185\u88ab\u62e6\u622a\ndig tls-ech.dev HTTPS +short\n# \u9700\u8981\u4ee3\u7406\ncurl -s -H 'accept: application/dns+json' 'https://dns.google.com/resolve?name=tls-ech.dev&type=HTTPS' | jq '.Answer[].data' -r\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"1 . ech=AEn+DQBFKwAgACABWIHUGj4u+PIggYXcR5JF0gYk3dCRioBW8uJq9H4mKAAIAAEAAQABAANAEnB1YmxpYy50bHMtZWNoLmRldgAA\n")))}N.isMDXComponent=!0}}]);
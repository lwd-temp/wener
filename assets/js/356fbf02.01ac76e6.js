"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[7225],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),i=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=i(e.components);return n.createElement(s.Provider,{value:t},e.children)},l="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},y=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),l=i(r),y=o,m=l["".concat(s,".").concat(y)]||l[y]||f[y]||a;return r?n.createElement(m,p(p({ref:t},u),{},{components:r})):n.createElement(m,p({ref:t},u))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,p=new Array(a);p[0]=y;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c[l]="string"==typeof e?e:o,p[1]=c;for(var i=2;i<a;i++)p[i]=r[i];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}y.displayName="MDXCreateElement"},27003:function(e,t,r){r.r(t),r.d(t,{assets:function(){return O},contentTitle:function(){return d},default:function(){return w},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return k}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,p=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,l=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&u(e,r,t[r]);if(c)for(var r of c(t))i.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>a(e,p(t)),y=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&i.call(e,n)&&(r[n]=e[n]);return r};const m={title:"rsa"},d="RSA",b={unversionedId:"security/crypto/rsa",id:"security/crypto/rsa",title:"rsa",description:"\u5e26\u5bc6\u7801\u7684 PEM",source:"@site/../notes/security/crypto/rsa.md",sourceDirName:"security/crypto",slug:"/security/crypto/rsa",permalink:"/notes/security/crypto/rsa",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/crypto/rsa.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"rsa"},sidebar:"docs",previous:{title:"PGP",permalink:"/notes/security/crypto/pgp"},next:{title:"SOPS",permalink:"/notes/security/crypto/sops"}},O={},k=[],g={toc:k},v="wrapper";function w(e){var t=e,{components:r}=t,o=y(t,["components"]);return(0,n.kt)(v,f(l(l({},g),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",l({},{id:"rsa"}),"RSA"),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"openssl genrsa -out pk.pem 2048\nopenssl rsa -in pk.pem -pubout -out pub.pem\n\n# self-signed certificate\nopenssl req -new -x509 -key pk.pem -out cert.pem -days 360\n# pem to pfx\nopenssl pkcs12 -export -inkey pk.pem -in cert.pem -out cert.pfx\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5e26\u5bc6\u7801\u7684 PEM")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-pem"}),"-----BEGIN RSA PRIVATE KEY-----\nProc-Type: 4,ENCRYPTED\nDEK-Info: AES-128-CBC,0F5C7993DCFA4C0962CE249CFD854B91\n")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),'# \u6d4b\u8bd5\u5bc6\u7801\nopenssl rsa -noout -in file.pem -passin "pass:PASSWORD"\nopenssl rsa -noout -in file.pem -passin "file:password.txt"\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"DES-EDE3-CBC")),(0,n.kt)("pre",null,(0,n.kt)("code",l({parentName:"pre"},{className:"language-bash"}),"# pkcs1 -> pkcs8\nopenssl pkcs8 -topk8 -inform PEM -outform PEM -nocrypt -in pkcs1.key -out pkcs8.key\n")))}w.isMDXComponent=!0}}]);
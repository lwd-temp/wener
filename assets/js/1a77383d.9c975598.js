"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[21771],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),u=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),c=u(n),k=a,f=c["".concat(o,".").concat(k)]||c[k]||s[k]||l;return n?r.createElement(f,i(i({ref:t},m),{},{components:n})):r.createElement(f,i({ref:t},m))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[c]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<l;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},94536:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return O},frontMatter:function(){return f},metadata:function(){return N},toc:function(){return y}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))o.call(t,n)&&m(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&m(e,n,t[n]);return e},s=(e,t)=>l(e,i(t)),k=(e,t)=>{var n={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const f={title:"SNMP"},d="SNMP",N={unversionedId:"network/application/snmp",id:"network/application/snmp",title:"SNMP",description:"Tips",source:"@site/../notes/network/application/snmp.md",sourceDirName:"network/application",slug:"/network/application/snmp",permalink:"/notes/network/application/snmp",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/network/application/snmp.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645033829,formattedLastUpdatedAt:"Feb 16, 2022",frontMatter:{title:"SNMP"},sidebar:"docs",previous:{title:"DNS",permalink:"/notes/network/application/dns"},next:{title:"SSL",permalink:"/notes/network/application/ssl"}},b={},y=[{value:"Tips",id:"tips",level:2},{value:"printer",id:"printer",level:2}],g={toc:y},w="wrapper";function O(e){var t=e,{components:n}=t,a=k(t,["components"]);return(0,r.kt)(w,s(c(c({},g),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"snmp"}),"SNMP"),(0,r.kt)("h2",c({},{id:"tips"}),"Tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol"}),"Simple Network Management Protocol"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7b80\u5355\u7f51\u7edc\u7ba1\u7406\u534f\u8bae"))),(0,r.kt)("li",{parentName:"ul"},"\u901a\u5e38\u7528\u4e8e\u7ba1\u7406\u548c\u76d1\u63a7\u7f51\u7edc\u8bbe\u5907"),(0,r.kt)("li",{parentName:"ul"},"UDP 161")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u626b\u63cf\u6709 SNMP \u7684\u8bbe\u5907\nsudo apk add nmap nmap-scripts\nsudo nmap -sU -p 161 --script default,snmp-sysdescr 192.169.1.0/24\n")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"abbr"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"full"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"chinese"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"desc"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"OID"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Object Identifiers"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u5bf9\u8c61\u6807\u8bc6\u7b26"),(0,r.kt)("td",c({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"MIB"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Management Infomation Base"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u7ba1\u7406\u4fe1\u606f\u57fa\u7840"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"OID \u6620\u5c04\u63cf\u8ff0\u6027\u6587\u5b57")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"NMS"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Network Management System"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"\u7f51\u7edc\u7ba1\u7406\u7cfb\u7edf"),(0,r.kt)("td",c({parentName:"tr"},{align:null}))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"SNMPv1 - rfc1155, rfc1157, rfc1212",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"community based management"))),(0,r.kt)("li",{parentName:"ul"},"SNMPv2 - \u884d\u751f\u81ea v1\uff0c\u6ca1\u6709\u6d88\u606f\u5b9a\u4e49",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u6570\u636e\u7c7b\u578b - Counter32, Counter64, Gauge32, UInteger32, NsapAdress, BIT STRING"),(0,r.kt)("li",{parentName:"ul"},"\u589e\u5f3a OID \u8868 \u548c \u503c"))),(0,r.kt)("li",{parentName:"ul"},"SNMPv2c - rfc1901-rfc1908"),(0,r.kt)("li",{parentName:"ul"},"SNMPv3 - rfc3411-rfc3418",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u65b0\u7684\u6d88\u606f\u683c\u5f0f"),(0,r.kt)("li",{parentName:"ul"},"\u589e\u52a0 ACL \u548c\u4e00\u4e9b\u5b89\u5168\u76f8\u5173\u80fd\u529b"),(0,r.kt)("li",{parentName:"ul"},"\u589e\u52a0\u8fdc\u7a0b\u53c2\u6570\u914d\u7f6e"))),(0,r.kt)("li",{parentName:"ul"},"rfc3584 - \u591a\u7248\u672c\u5171\u5b58")),(0,r.kt)("h2",c({},{id:"printer"}),"printer"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"prtMarkerSuppliesType",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://oidref.com/1.3.6.1.2.1.43.11.1.1.5"}),"https://oidref.com/1.3.6.1.2.1.43.11.1.1.5")),(0,r.kt)("li",{parentName:"ul"},"other(1),"),(0,r.kt)("li",{parentName:"ul"},"unknown(2),"),(0,r.kt)("li",{parentName:"ul"},"toner(3),"),(0,r.kt)("li",{parentName:"ul"},"wasteToner(4),"),(0,r.kt)("li",{parentName:"ul"},"ink(5),"),(0,r.kt)("li",{parentName:"ul"},"inkCartridge(6),"),(0,r.kt)("li",{parentName:"ul"},"inkRibbon(7),"),(0,r.kt)("li",{parentName:"ul"},"wasteInk(8),"),(0,r.kt)("li",{parentName:"ul"},"opc(9),"),(0,r.kt)("li",{parentName:"ul"},"developer(10),"),(0,r.kt)("li",{parentName:"ul"},"fuserOil(11),"),(0,r.kt)("li",{parentName:"ul"},"solidWax(12),"),(0,r.kt)("li",{parentName:"ul"},"ribbonWax(13),"),(0,r.kt)("li",{parentName:"ul"},"wasteWax(14)")))))}O.isMDXComponent=!0}}]);
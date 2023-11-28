"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[27986],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return k}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=u(r),f=a,k=s["".concat(p,".").concat(f)]||s[f]||m[f]||o;return r?n.createElement(k,l(l({ref:t},c),{},{components:r})):n.createElement(k,l({ref:t},c))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=f;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[s]="string"==typeof e?e:a,l[1]=i;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},46569:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return d},default:function(){return O},frontMatter:function(){return k},metadata:function(){return y},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))u.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,l(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const k={id:"tinc-transparency-proxy",title:"\u5982\u4f55\u57fa\u4e8e TINC \u5b9e\u73b0\u900f\u660e\u4ee3\u7406",date:new Date("2019-12-13T00:00:00.000Z")},d=void 0,y={unversionedId:"howto/network/tinc-transparency-proxy",id:"howto/network/tinc-transparency-proxy",title:"\u5982\u4f55\u57fa\u4e8e TINC \u5b9e\u73b0\u900f\u660e\u4ee3\u7406",description:"\u573a\u666f",source:"@site/../notes/howto/network/tinc-transparency-proxy.md",sourceDirName:"howto/network",slug:"/howto/network/tinc-transparency-proxy",permalink:"/notes/howto/network/tinc-transparency-proxy",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/howto/network/tinc-transparency-proxy.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1639029574,formattedLastUpdatedAt:"Dec 9, 2021",frontMatter:{id:"tinc-transparency-proxy",title:"\u5982\u4f55\u57fa\u4e8e TINC \u5b9e\u73b0\u900f\u660e\u4ee3\u7406",date:"2019-12-13T00:00:00.000Z"},sidebar:"docs",previous:{title:"\u5982\u4f55\u914d\u7f6e TINC \u5b9e\u73b0\u591a\u8def\u5bb9\u707e\uff1f",permalink:"/notes/howto/network/tinc-multi-path-failover"},next:{title:"\u5982\u4f55\u901a\u8fc7 Ansible \u6765\u7ba1\u7406 AlpineLinux \uff1f",permalink:"/notes/howto/ops/alpine-admin-ansible"}},w={},v=[{value:"\u573a\u666f",id:"\u573a\u666f",level:2},{value:"\u539f\u7406",id:"\u539f\u7406",level:2}],b={toc:v},N="wrapper";function O(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(N,m(s(s({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h2",s({},{id:"\u573a\u666f"}),"\u573a\u666f"),(0,n.kt)("p",null,(0,n.kt)("img",s({parentName:"p"},{src:"https://www.plantuml.com/plantuml/svg/SoWkIImgISaluKh9J2zABCXGS5UevihBJqcDBiv8B4YrJSglq2akgSn9jKtBpCb9JT59pi_9Bx8jAKhCAov8B4hDAz41IK14bPITd5nStPoKOhaWXaM3J2fEBR0rZENYIaykKD2rKoXApKciZCv9J4hDiRLvsjFwOk-Qf_qJxO0ACeiX2l9BIrABO2fUxfxnOjsI5zlNFv-o4QW8h1jJbOKU21he6vc0r82bG8eAai7MmcrRCktvtealkfgUD-sqIIhIjpCqq3C4GGEWBg3jC7MUmG7wB_PFU35XwTEfRM25pwTiVR9_uUE6nXUDKrusp08odY_V_RHh1Sn5C9rFTgnzldivn0Rz44y_PqpBZ24SIoCzGpCBiELWPwC4exE5gvcpfHBCAp3J8Q6W3_J3qzRD-k6PRfdePc6OvERcxE9Y13I9go0PPioppkvdStRf0_tqecKYkd8tIsSJeF9QBeVKl1HWmW00",alt:null}))),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u900f\u660e\u4ee3\u7406")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5728\u8def\u7531\u4e0a\u914d\u7f6e IP \u6bb5\u7684\u4e0b\u4e00\u8df3\u4e3a\u4e2d\u7ee7\u8282\u70b9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e2d\u7ee7\u8282\u70b9\u901a\u8fc7 TINC \u8fdb\u884c IP \u6bb5\u8f6c\u53d1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5c06\u8bf7\u6c42\u8f6c\u53d1\u5230\u4f4d\u4e8e\u5916\u90e8 TINC \u8282\u70b9"),(0,n.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u5c40\u57df\u7f51\u5185\u900f\u660e\u4ee3\u7406"))))),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u4e0a\u56fe\u4e2d\uff0c\u5f53 \u624b\u673a/\u7535\u8111 \u8bbf\u95ee 8.8.8.0/24 \u7f51\u6bb5\u65f6\uff0c\u7f51\u7edc\u51fa\u53e3\u4e3a\u5916\u7f51\u8282\u70b9\u51fa\u53e3")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4f7f\u7528\u573a\u666f")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"TINC \u4e2d\u7ee7\u8282\u70b9\u4f5c\u4e3a\u6865\u63a5\uff0c\u6253\u901a\u4e0d\u540c\u7f51\u7edc",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 Kubernates \u96c6\u7fa4\u4e2d\u4f7f\u7528 TINC \u8fdb\u884c\u6865\u63a5\u4e91\u4e0a\u4e91\u4e0b\u7f51\u7edc"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 Docker \u4f7f\u7528 TINC \u4f5c\u4e3a\u57fa\u7840\u7f51\u7edc\uff0c\u901a\u8fc7\u4e2d\u7ee7\u5b9e\u73b0\u6240\u6709\u7684\u5bb9\u5668\u5185\u90e8\u670d\u52a1\u8bbf\u95ee"))),(0,n.kt)("li",{parentName:"ul"},"\u5916\u90e8 IP \u4e3a VIP \u5b9e\u73b0\u9ad8\u53ef\u7528\u7684\u4ee3\u7406\u8bbf\u95ee"),(0,n.kt)("li",{parentName:"ul"},"\u4e3a\u66f4\u667a\u80fd\u7684\u52a8\u6001\u8def\u7531\u505a\u94fa\u57ab")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u4f18\u52bf")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b89\u5168 - \u4e0d\u9700\u8981\u66b4\u9732\u4efb\u4f55\u989d\u5916\u7684\u5916\u90e8\u7aef\u53e3\uff0c\u4e00\u5207\u90fd\u4f7f\u7528 TINC \u5185\u90e8\u7f51\u7edc"),(0,n.kt)("li",{parentName:"ul"},"\u7ec4\u7f51\u7075\u6d3b - \u4efb\u610f\u80fd\u52a0\u5165 TINC \u7684\u8282\u70b9\u3001\u4efb\u610f\u6709\u8f6c\u53d1\u80fd\u529b\u7684\u7cfb\u7edf"),(0,n.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u4fbf\u643a - \u4e2d\u7ee7\u8282\u70b9\u53ef\u80fd\u5c31\u662f\u4e00\u4e2a\u6811\u8393\u6d3e")),(0,n.kt)("h2",s({},{id:"\u539f\u7406"}),"\u539f\u7406"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e2d\u7ee7\u8282\u70b9\u662f\u4e00\u4e2a TINC \u7f51\u7edc\u4e2d\u7684\u8282\u70b9\uff0c\u4e0e\u5176\u5b83\u8282\u70b9\u76f8\u5f53\u4e8e\u662f\u6709\u4e00\u6761\u76f4\u8fde\u7684\u7f51\u7ebf\uff0c\u901a\u8fc7\u8fd9\u6761\u7f51\u7ebf\u8fdb\u884c\u5185\u90e8\u7684\u5305\u8f6c\u53d1"),(0,n.kt)("li",{parentName:"ul"},"IP \u8def\u7531\u5c31\u662f\u9010\u4e2a\u627e\u4e0b\u4e00\u8df3\u7684\u5730\u5740\uff0c\u8fd9\u91cc\u505a\u7684\u4e8b\u60c5\u5c31\u662f\u5c06\u90e8\u5206\u7f51\u6bb5\u7684\u4e0b\u4e00\u8df3\u5730\u5740\u505a\u4e86\u4fee\u6539",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"macOS ",(0,n.kt)("inlineCode",{parentName:"li"},"route add -host 8.8.8.8 -interface tun0")),(0,n.kt)("li",{parentName:"ul"},"Linux ",(0,n.kt)("inlineCode",{parentName:"li"},"ip ro add 8.8.8.8 via 10.1.1.10")))),(0,n.kt)("li",{parentName:"ul"},"\u8def\u7531\u5668\u90fd\u652f\u6301\u9759\u6001\u8def\u7531\u8868\uff0c\u914d\u5408\u8def\u7531\u9759\u6001\u8def\u7531\u8868\u5c31\u80fd\u5b9e\u73b0\u65e0\u4fb5\u5165\u7684\u900f\u660e\u4ee3\u7406")))}O.isMDXComponent=!0}}]);
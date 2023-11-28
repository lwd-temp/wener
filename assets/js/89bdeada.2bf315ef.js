"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68422],{49613:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return m}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function l(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function a(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?l(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function i(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)t=l[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var c=n.createContext({}),u=function(e){var r=n.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):a(a({},r),e)),t},p=function(e){var r=u(e.components);return n.createElement(c.Provider,{value:r},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},d=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,l=e.originalType,c=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),f=u(t),d=o,m=f["".concat(c,".").concat(d)]||f[d]||s[d]||l;return t?n.createElement(m,a(a({ref:r},p),{},{components:t})):n.createElement(m,a({ref:r},p))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var l=t.length,a=new Array(l);a[0]=d;var i={};for(var c in r)hasOwnProperty.call(r,c)&&(i[c]=r[c]);i.originalType=e,i[f]="string"==typeof e?e:o,a[1]=i;for(var u=2;u<l;u++)a[u]=t[u];return n.createElement.apply(null,a)}return n.createElement.apply(null,t)}d.displayName="MDXCreateElement"},55537:function(e,r,t){t.r(r),t.d(r,{assets:function(){return b},contentTitle:function(){return w},default:function(){return k},frontMatter:function(){return m},metadata:function(){return y},toc:function(){return O}});var n=t(49613),o=Object.defineProperty,l=Object.defineProperties,a=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,f=(e,r)=>{for(var t in r||(r={}))c.call(r,t)&&p(e,t,r[t]);if(i)for(var t of i(r))u.call(r,t)&&p(e,t,r[t]);return e},s=(e,r)=>l(e,a(r)),d=(e,r)=>{var t={};for(var n in e)c.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&i)for(var n of i(e))r.indexOf(n)<0&&u.call(e,n)&&(t[n]=e[n]);return t};const m={title:"firewalld"},w="firewalld",y={unversionedId:"os/linux/network/firewalld",id:"os/linux/network/firewalld",title:"firewalld",description:"",source:"@site/../notes/os/linux/network/firewalld.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/firewalld",permalink:"/notes/os/linux/network/firewalld",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/network/firewalld.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1677222278,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"firewalld"},sidebar:"docs",previous:{title:"\u6865\u63a5\u7f51\u7edc",permalink:"/notes/os/linux/network/bridge"},next:{title:"ifupdown-ng",permalink:"/notes/os/linux/network/ifupdown-ng"}},b={},O=[],v={toc:O},g="wrapper";function k(e){var r=e,{components:t}=r,o=d(r,["components"]);return(0,n.kt)(g,s(f(f({},v),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"firewalld"}),"firewalld"),(0,n.kt)("pre",null,(0,n.kt)("code",f({parentName:"pre"},{className:"language-bash"}),"systemctl status firewalld\n\n# 'tcp'|'udp'|'sctp'|'dccp'\nfirewall-cmd --permanent --add-port=22/tcp\n\nfirewall-cmd --permanent --add-source=192.168.1.0/24\n\nfirewall-cmd --permanent --add-rich-rule='rule family=\"ipv4\" source address=\"192.168.1.100\" port protocol=\"tcp\" port=\"3306\" accept'\n\n# \u4fdd\u5b58 \u751f\u6548\nfirewall-cmd --reload\nfirewall-cmd --list-all\n")))}k.isMDXComponent=!0}}]);
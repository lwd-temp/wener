"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[16556],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),f=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},s=function(e){var t=f(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),p=f(n),m=a,d=p["".concat(u,".").concat(m)]||p[m]||c[m]||o;return n?r.createElement(d,l(l({ref:t},s),{},{components:n})):r.createElement(d,l({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=m;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[p]="string"==typeof e?e:a,l[1]=i;for(var f=2;f<o;f++)l[f]=n[f];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},53965:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return x},default:function(){return g},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return k}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,f=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))f.call(t,n)&&s(e,n,t[n]);return e},c=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&f.call(e,r)&&(n[r]=e[r]);return n};const d={title:"exFAT"},x="exFAT",y={unversionedId:"os/linux/fs/exfat",id:"os/linux/fs/exfat",title:"exFAT",description:"- Linux exFAT",source:"@site/../notes/os/linux/fs/exfat.md",sourceDirName:"os/linux/fs",slug:"/os/linux/fs/exfat",permalink:"/notes/os/linux/fs/exfat",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/fs/exfat.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1637157808,formattedLastUpdatedAt:"Nov 17, 2021",frontMatter:{title:"exFAT"},sidebar:"docs",previous:{title:"Btrfs",permalink:"/notes/os/linux/fs/btrfs"},next:{title:"ext4",permalink:"/notes/os/linux/fs/ext4"}},b={},k=[],v={toc:k},O="wrapper";function g(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(O,c(p(p({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"exfat"}),"exFAT"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Linux exFAT",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c vfat"),(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709\u6743\u9650\u6982\u5ff5\uff0c\u53ef\u4ee5 mount \u8bbe\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"defaults,noatime,nofail,uid=1000,fmask=0133,dmask=0022")),(0,r.kt)("li",{parentName:"ul"},"Linux 5.4+ in kernel module",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e4b\u524d\u4f7f\u7528 fuse"))))),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u7a7a\u95f4\u5de5\u5177",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"fuse-exfat-utils - \u57fa\u4e8e fuse"),(0,r.kt)("li",{parentName:"ul"},"exfatprogs - \u57fa\u4e8e kernel module",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"{dump,fsck,mkfs,tune}.exfat"),(0,r.kt)("li",{parentName:"ul"},"exfatlabel"))))),(0,r.kt)("li",{parentName:"ul"},"Kernel fs ",(0,r.kt)("a",p({parentName:"li"},{href:"https://www.kernel.org/doc/html/latest/filesystems/vfat.html"}),"vfat"))),(0,r.kt)("admonition",p({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"exFAT \u6700\u9002\u5408 \u95ea\u5b58\u76d8/U \u76d8/TF \u5361"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"apk del fuse-exfat fuse-exfat-utils\napk add exfatprogs\n\nmodprobe exfat\ncat /proc/filesystems | grep exfat\n\nmkfs.exfat /dev/sdc1\ntune.exfat -vi /dev/sdc1\nmount /dev/sdc1 /mnt\n")))}g.isMDXComponent=!0}}]);
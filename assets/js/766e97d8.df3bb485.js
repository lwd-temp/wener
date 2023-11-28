"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[32190],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,o=e.originalType,u=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=s(n),m=i,b=c["".concat(u,".").concat(m)]||c[m]||f[m]||o;return n?r.createElement(b,l(l({ref:t},p),{},{components:n})):r.createElement(b,l({ref:t},p))}));function b(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=n.length,l=new Array(o);l[0]=m;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a[c]="string"==typeof e?e:i,l[1]=a;for(var s=2;s<o;s++)l[s]=n[s];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},67845:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return x},default:function(){return h},frontMatter:function(){return b},metadata:function(){return d},toc:function(){return k}});var r=n(49613),i=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(a)for(var n of a(t))s.call(t,n)&&p(e,n,t[n]);return e},f=(e,t)=>o(e,l(t)),m=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&a)for(var r of a(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const b={title:"Syslinux"},x="Syslinux",d={unversionedId:"os/linux/boot/syslinux",id:"os/linux/boot/syslinux",title:"Syslinux",description:"- \u53ea\u652f\u6301 X86",source:"@site/../notes/os/linux/boot/syslinux.md",sourceDirName:"os/linux/boot",slug:"/os/linux/boot/syslinux",permalink:"/notes/os/linux/boot/syslinux",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/boot/syslinux.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1626706991,formattedLastUpdatedAt:"Jul 19, 2021",frontMatter:{title:"Syslinux"},sidebar:"docs",previous:{title:"Netboot",permalink:"/notes/os/linux/boot/netboot"},next:{title:"U-Boot",permalink:"/notes/os/linux/boot/uboot"}},y={},k=[{value:"config",id:"config",level:2},{value:"extlinux",id:"extlinux",level:2},{value:"MBR",id:"mbr",level:2},{value:"extlinux: no previous syslinux boot sector found",id:"extlinux-no-previous-syslinux-boot-sector-found",level:2}],v={toc:k},O="wrapper";function h(e){var t=e,{components:n}=t,i=m(t,["components"]);return(0,r.kt)(O,f(c(c({},v),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"syslinux"}),"Syslinux"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301 X86"),(0,r.kt)("li",{parentName:"ul"},"\u5206\u4e3a extlinux\u3001isolinux"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 mbr"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://shallowsky.com/linux/extlinux.html"}),"How to install extlinux (syslinux) as a bootloader")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://wiki.syslinux.org/wiki/index.php?title=Filesystem"}),"\u6587\u4ef6\u7cfb\u7edf\u652f\u6301\u60c5\u51b5"))))),(0,r.kt)("admonition",c({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"UEFI \u652f\u6301\u4e0d\u597d - \u4e0d\u5efa\u8bae\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 exFAT"),(0,r.kt)("li",{parentName:"ul"},"6.04+ \u652f\u6301 ext4 64bit"))),(0,r.kt)("h2",c({},{id:"config"}),"config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://wiki.syslinux.org/wiki/index.php?title=Config"}),"Config"))),(0,r.kt)("h2",c({},{id:"extlinux"}),"extlinux"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://wiki.syslinux.org/wiki/index.php?title=EXTLINUX"}),"EXTLINUX"))),(0,r.kt)("h2",c({},{id:"mbr"}),"MBR"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://wiki.syslinux.org/wiki/index.php?title=Mbr"}),"MBR")),(0,r.kt)("li",{parentName:"ul"},"mbr - dos \u5206\u533a"),(0,r.kt)("li",{parentName:"ul"},"altmbr.bin - \u6307\u5b9a\u5206\u533a\uff0c\u5ffd\u7565 boot"),(0,r.kt)("li",{parentName:"ul"},"gptmbr.bin - gtp \u5206\u533a"),(0,r.kt)("li",{parentName:"ul"},"isohdppx.bin - ISO HDD PPX"),(0,r.kt)("li",{parentName:"ul"},"isohdpfx.bin - ISO HDD PFX"),(0,r.kt)("li",{parentName:"ul"},"isolinux.bin - ISO Linux"),(0,r.kt)("li",{parentName:"ul"},"\u98ce\u683c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_c")," - \u542f\u52a8\u6309\u4f4f Ctrl\uff0ccode boots from BIOS drive 0x80"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"_f")," - \u603b\u662f boots from BIOS drive 0x80.")))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u4fee\u590d mbr \u5206\u533a\ndd bs=440 conv=notrunc count=1 if=/usr/share/syslinux/mbr.bin of=$dev\n")),(0,r.kt)("h1",c({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",c({},{id:"extlinux-no-previous-syslinux-boot-sector-found"}),"extlinux: no previous syslinux boot sector found"))}h.isMDXComponent=!0}}]);
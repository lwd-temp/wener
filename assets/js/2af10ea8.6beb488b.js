"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38278],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return d}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},i=Object.keys(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)r=i[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),u=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},s=function(e){var t=u(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},v=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(r),v=n,d=m["".concat(p,".").concat(v)]||m[v]||c[v]||i;return r?a.createElement(d,l(l({ref:t},s),{},{components:r})):a.createElement(d,l({ref:t},s))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var i=r.length,l=new Array(i);l[0]=v;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var u=2;u<i;u++)l[u]=r[u];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},53338:function(e,t,r){r.r(t),r.d(t,{assets:function(){return N},contentTitle:function(){return k},default:function(){return h},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return b}});var a=r(49613),n=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&s(e,r,t[r]);return e},c=(e,t)=>i(e,l(t)),v=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&u.call(e,a)&&(r[a]=e[a]);return r};const d={id:"virt",title:"\u865a\u62df\u5316"},k="\u865a\u62df\u5316",f={unversionedId:"os/virt/virt",id:"os/virt/virt",title:"\u865a\u62df\u5316",description:"- Comparison of platform virtualization software",source:"@site/../notes/os/virt/README.md",sourceDirName:"os/virt",slug:"/os/virt/",permalink:"/notes/os/virt/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1621756378,formattedLastUpdatedAt:"May 23, 2021",frontMatter:{id:"virt",title:"\u865a\u62df\u5316"},sidebar:"docs",previous:{title:"Ubuntu Version",permalink:"/notes/os/ubuntu/version"},next:{title:"ESXi",permalink:"/notes/os/virt/esxi"}},N={},b=[{value:"/dev/sda vs /dev/vda",id:"devsda-vs-devvda",level:2},{value:"OpenVZ vs KVM vs Xen",id:"openvz-vs-kvm-vs-xen",level:2}],y={toc:b},w="wrapper";function h(e){var t=e,{components:r}=t,n=v(t,["components"]);return(0,a.kt)(w,c(m(m({},y),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"\u865a\u62df\u5316"}),"\u865a\u62df\u5316"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Comparison_of_platform_virtualization_software"}),"Comparison of platform virtualization software")),(0,a.kt)("li",{parentName:"ul"},"Virt Tools ",(0,a.kt)("a",m({parentName:"li"},{href:"https://planet.virt-tools.org/"}),"Planet"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Blogging about open source virtualization"),(0,a.kt)("li",{parentName:"ul"},"News from QEMU, KVM, libvirt, libguestfs, virt-manager and related tools"))),(0,a.kt)("li",{parentName:"ul"},"SMP?"),(0,a.kt)("li",{parentName:"ul"},"HVM",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Hardware-assisted_virtualization"}),"Hardware-assisted virtualization")),(0,a.kt)("li",{parentName:"ul"},"Intel VT-x"),(0,a.kt)("li",{parentName:"ul"},"AMD-V"))),(0,a.kt)("li",{parentName:"ul"},"Full virtualization"),(0,a.kt)("li",{parentName:"ul"},"paravirtualization"),(0,a.kt)("li",{parentName:"ul"},"RHEL ",(0,a.kt)("a",m({parentName:"li"},{href:"https://access.redhat.com/documentation/en-us/red_hat_enterprise_linux/8/html/configuring_and_managing_virtualization/index"}),"CONFIGURING AND MANAGING VIRTUALIZATION"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5f88\u597d\u5f88\u957f\u7684\u6587\u6863")))),(0,a.kt)("h1",m({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",m({},{id:"devsda-vs-devvda"}),"/dev/sda vs /dev/vda"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sda",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"IDE/SATA/SCSI \u7c7b\u578b\u8bbe\u5907"),(0,a.kt)("li",{parentName:"ul"},"\u5b8c\u5168\u865a\u62df\u5316"))),(0,a.kt)("li",{parentName:"ul"},"vda",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u534a\u865a\u62df\u5316 - virtio"),(0,a.kt)("li",{parentName:"ul"},"\u6bd4 sda \u5feb"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://serverfault.com/a/803391/190601"}),"what is the difference between /dev/vda and /dev/sda"))))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# sda\nqemu-system-x86_64 -hda alpine.qcow2\n# vda\nqemu-system-x86_64 -drive file=alpine.qcow2,if=virtio\n")),(0,a.kt)("h2",m({},{id:"openvz-vs-kvm-vs-xen"}),"OpenVZ vs KVM vs Xen"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"KVM - Kernel-based",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Linux \u5185\u6838\u6a21\u5757 - \u4e3a\u7b2c\u4e09\u65b9\u5de5\u5177\uff08QEMU\uff09\u63d0\u4f9b\u865a\u62df\u5316\u652f\u6301"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 virtio \u63d0\u4f9b IO \u8bbe\u5907\u865a\u62df\u5316"))),(0,a.kt)("li",{parentName:"ul"},"Xen",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Type 1 \u5168\u865a\u62df\u5316"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u865a\u62df\u5316\u573a\u666f\u53ef\u4ee5\u4f7f\u7528 Xen-PV - Paravirtualization"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u573a\u666f\u4f1a\u4f7f\u7528 Xen-HVM - Hardware Virtual Machine - \u4f7f\u7528 QEMU \u865a\u62df\u786c\u4ef6"),(0,a.kt)("li",{parentName:"ul"},"dom0 \u4e0a\u8fd0\u884c domU"),(0,a.kt)("li",{parentName:"ul"},"\u6709\u7ba1\u7406\u80fd\u529b - \u7c7b\u4f3c\u4e8e KVM+Libvirt \u6216 KVM+\u5176\u4ed6\u7ba1\u7406\u8f6f\u4ef6"))),(0,a.kt)("li",{parentName:"ul"},"OpenVZ",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u5bb9\u5668 - \u5171\u4eab\u5185\u6838"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u822c\u65e0\u6cd5\u4f7f\u7528 docker\u3001nftables\u3001wg \u7b49 - \u9700\u8981 host \u989d\u5916\u652f\u6301 - OpenVZ 7")))),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Red Hat \u6536\u8d2d\u4e86 Qumranet, KVM \u521b\u59cb\u516c\u53f8")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Xen \u540e\u7684\u5546\u4e1a\u516c\u53f8"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Citrix"),(0,a.kt)("li",{parentName:"ul"},"Oracle"),(0,a.kt)("li",{parentName:"ul"},"AWS \u662f XEN \u4f46\u5728\u5411 KVM \u8fc1\u79fb"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"KVM \u540e\u7684\u5546\u4e1a\u516c\u53f8"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"IBM"),(0,a.kt)("li",{parentName:"ul"},"Red Hat"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"\u53c2\u8003"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://www.reddit.com/r/sysadmin/comments/7cjpe8"}),"Why is the market moving away from xen to kvm?")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://www.booleanworld.com/openvz-vs-kvm-vs-xen-virtualization-technologies-explained/"}),"OpenVZ vs KVM vs Xen"))))))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68511],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return _}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),l=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},s=function(e){var t=l(e.components);return r.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),u=l(n),m=a,_=u["".concat(p,".").concat(m)]||u[m]||f[m]||i;return n?r.createElement(_,c(c({ref:t},s),{},{components:n})):r.createElement(_,c({ref:t},s))}));function _(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,c=new Array(i);c[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[u]="string"==typeof e?e:a,c[1]=o;for(var l=2;l<i;l++)c[l]=n[l];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},31197:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return y},default:function(){return w},frontMatter:function(){return _},metadata:function(){return d},toc:function(){return O}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,c=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))l.call(t,n)&&s(e,n,t[n]);return e},f=(e,t)=>i(e,c(t)),m=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&l.call(e,r)&&(n[r]=e[r]);return n};const _={title:"\u80fd\u529b\u7ba1\u7406"},y="Capabilities",d={unversionedId:"os/linux/sys/capabilities",id:"os/linux/sys/capabilities",title:"\u80fd\u529b\u7ba1\u7406",description:"- capabilities.7",source:"@site/../notes/os/linux/sys/capabilities.md",sourceDirName:"os/linux/sys",slug:"/os/linux/sys/capabilities",permalink:"/notes/os/linux/sys/capabilities",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/sys/capabilities.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1642517272,formattedLastUpdatedAt:"Jan 18, 2022",frontMatter:{title:"\u80fd\u529b\u7ba1\u7406"},sidebar:"docs",previous:{title:"audit",permalink:"/notes/os/linux/sys/audit"},next:{title:"cgroup",permalink:"/notes/os/linux/sys/cgroup"}},b={},O=[],v={toc:O},k="wrapper";function w(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(k,f(u(u({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"capabilities"}),"Capabilities"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://man7.org/linux/man-pages/man7/capabilities.7.html"}),"capabilities.7"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u81ea 2.2 \u5c06 root \u6743\u9650\u62c6\u5206\u4e3a\u591a\u4e2a\u80fd\u529b"),(0,r.kt)("li",{parentName:"ul"},"\u80fd\u529b\u662f\u7ebf\u7a0b\u7ea7\u522b\u7684\u5c5e\u6027"))),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u80fd\u529b",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CAP_NET_ADMIN",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7f51\u5361\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"IP \u7ba1\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u8def\u7531\u8868"),(0,r.kt)("li",{parentName:"ul"},"\u5efa\u7acb\u5e7f\u64ad"))),(0,r.kt)("li",{parentName:"ul"},"CAP_SYS_ADMIN",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6302\u8f7d\u3001\u8d54\u989d"),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u673a\u540d")))))),(0,r.kt)("p",null,'"cap_chown",\n"cap_dac_override",\n"cap_dac_read_search",\n"cap_fowner",\n"cap_fsetid",\n"cap_kill",\n"cap_setgid",\n"cap_setuid",\n"cap_setpcap",\n"cap_linux_immutable",\n"cap_net_bind_service",\n"cap_net_broadcast",\n"cap_net_admin",\n"cap_net_raw",\n"cap_ipc_lock",\n"cap_ipc_owner",\n"cap_sys_module",\n"cap_sys_rawio",\n"cap_sys_chroot",\n"cap_sys_ptrace",\n"cap_sys_pacct",\n"cap_sys_admin",\n"cap_sys_boot",\n"cap_sys_nice",\n"cap_sys_resource",\n"cap_sys_time",\n"cap_sys_tty_config",\n"cap_mknod",\n"cap_lease",\n"cap_audit_write",\n"cap_audit_control",\n"cap_setfcap",\n"cap_mac_override",\n"cap_mac_admin",\n"cap_syslog",\n"35",\n"36+ep"'))}w.isMDXComponent=!0}}]);
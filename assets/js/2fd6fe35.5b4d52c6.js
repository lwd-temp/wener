"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[8755],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(59496);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var i=r.createContext({}),u=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(i.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,c=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),s=u(n),d=c,m=s["".concat(i,".").concat(d)]||s[d]||f[d]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,c=t&&t.mdxType;if("string"==typeof e||c){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[s]="string"==typeof e?e:c,l[1]=o;for(var u=2;u<a;u++)l[u]=n[u];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41980:function(e,t,n){n.r(t),n.d(t,{assets:function(){return v},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return m},metadata:function(){return h},toc:function(){return y}});var r=n(49613),c=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?c(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e},f=(e,t)=>a(e,l(t)),d=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const m={title:"ccache"},b="ccache",h={unversionedId:"dev/build/ccache",id:"dev/build/ccache",title:"ccache",description:"- \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/dev/build/ccache.md",sourceDirName:"dev/build",slug:"/dev/build/ccache",permalink:"/notes/dev/build/ccache",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/build/ccache.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1627915171,formattedLastUpdatedAt:"Aug 2, 2021",frontMatter:{title:"ccache"},sidebar:"docs",previous:{title:"Build FAQ",permalink:"/notes/dev/build/faq"},next:{title:"distcc",permalink:"/notes/dev/build/distcc"}},v={},y=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2}],O={toc:y},g="wrapper";function k(e){var t=e,{components:n}=t,c=d(t,["components"]);return(0,r.kt)(g,f(s(s({},O),c),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"ccache"}),"ccache"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u662f\u4ec0\u4e48\uff1f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u7f16\u8bd1\u5355\u4e2a\u6587\u4ef6 C/C++/Objective-C/Objective-C++",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u5904\u7406\u591a\u6587\u4ef6\u7f16\u8bd1\u548c\u94fe\u63a5"))),(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u8fdb\u884c\u5c0f\u4fee\u6539\u7136\u540e\u91cd\u590d\u7f16\u8bd1\u7684\u573a\u666f\u975e\u5e38\u6709\u7528"))),(0,r.kt)("li",{parentName:"ul"},"man ",(0,r.kt)("a",s({parentName:"li"},{href:"https://ccache.dev/manual/latest.html"}),"ccache"))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5\u4f7f\u7528 - \u901a\u8fc7\u5305\u5b89\u88c5\u7684\u4e00\u822c\u4f1a\u81ea\u5df1\u505a\u8fd9\u4e00\u6b65\ncp ccache /usr/local/bin/\nln -s ccache /usr/local/bin/gcc\nln -s ccache /usr/local/bin/g++\nln -s ccache /usr/local/bin/cc\nln -s ccache /usr/local/bin/c++\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u7edf\u8ba1\n# \u9ed8\u8ba4\u914d\u7f6e ~/.ccache/ccache.conf\nccache -s\n")),(0,r.kt)("h2",s({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\uff5e/.ccache/ccache.conf"),(0,r.kt)("li",{parentName:"ul"},"/etc/ccache.conf")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-ini"}),"# \u7f13\u5b58\u5927\u5c0f\nmax_size = 10.0G\n")))}k.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[59606],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return h}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(r),m=a,h=u["".concat(p,".").concat(m)]||u[m]||d[m]||o;return r?n.createElement(h,i(i({ref:t},s),{},{components:r})):n.createElement(h,i({ref:t},s))}));function h(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=m;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},86866:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return f},default:function(){return k},frontMatter:function(){return h},metadata:function(){return O},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e},d=(e,t)=>o(e,i(t)),m=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const h={title:"iLO"},f="iLO",O={unversionedId:"hardware/server/hpe/ilo",id:"hardware/server/hpe/ilo",title:"iLO",description:"- \u56fa\u4ef6\u5347\u7ea7\u4e0b\u8f7d",source:"@site/../notes/hardware/server/hpe/ilo.md",sourceDirName:"hardware/server/hpe",slug:"/hardware/server/hpe/ilo",permalink:"/notes/hardware/server/hpe/ilo",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/hardware/server/hpe/ilo.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"iLO"},sidebar:"docs",previous:{title:"HPE",permalink:"/notes/hardware/server/hpe/"},next:{title:"SDR",permalink:"/notes/hardware/server/hpe/sdr"}},w={},v=[{value:"iLO2",id:"ilo2",level:2},{value:"iLO2 \u8bbf\u95ee\u51fa\u73b0 SSL \u9519\u8bef",id:"ilo2-\u8bbf\u95ee\u51fa\u73b0-ssl-\u9519\u8bef",level:2},{value:"SSH \u65e0\u6cd5\u767b\u9646 iLO2",id:"ssh-\u65e0\u6cd5\u767b\u9646-ilo2",level:2}],y={toc:v},b="wrapper";function k(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(b,d(u(u({},y),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"ilo"}),"iLO"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u56fa\u4ef6\u5347\u7ea7\u4e0b\u8f7d",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"http://h20564.www2.hpe.com/hpsc/swd/public/readIndex?sp4ts.oid=1135772"}),"iLO2")),(0,n.kt)("li",{parentName:"ul"},"iLO3"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"http://h20565.www2.hpe.com/hpsc/swd/public/readIndex?sp4ts.oid=5228286"}),"iLO4")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"http://h20565.www2.hpe.com/hpsc/doc/public/display?docId=emr_na-c03351064"}),"HP iLO 2 \u811a\u672c\u548c\u547d\u4ee4\u884c\u6307\u5357")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"http://h20565.www2.hpe.com/hpsc/doc/public/display?docId=emr_na-c02774508"}),"HP iLO 3 \u811a\u672c\u548c\u547d\u4ee4\u884c\u6307\u5357")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"http://h20566.www2.hpe.com/hpsc/doc/public/display?docId=c03334060"}),"HPE iLO 4 \u811a\u672c\u548c\u547d\u4ee4\u884c\u6307\u5357")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"http://h20565.www2.hpe.com/hpsc/doc/public/display?docId=c03334058"}),"HPE iLO 4 Scripting and Command Line Guide"))),(0,n.kt)("h2",u({},{id:"ilo2"}),"iLO2"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8fdc\u7a0b\u63a7\u5236\u56de\u9000\u5220\u9664\u53ef\u80fd\u6620\u5c04\u4e3a ",(0,n.kt)("key",null,"Ctrl-H"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"################\n# \u6302\u8f7d\u8fdc\u7a0b ISO\n################\n# \u7531\u4e8e iLO2 \u865a\u62df\u5a92\u4ecb\u53ea\u80fd\u901a\u8fc7 Java Applet \u9009\u62e9,\u5e76\u4e14\u5f88\u96be\u7528,\u4e0d\u80fd\u76f4\u63a5\u6307\u5b9a URL,\u6240\u4ee5\u6709\u4e86\u4ee5\u4e0b\u65b9\u6cd5\n# \u8fdb\u5165 iLO2 \u547d\u4ee4\u884c\nssh admin@ilo2 -vvv -o HostKeyAlgorithms=ssh-rsa\n# \u8fdb\u5165\u5230\u865a\u62df\u8bbe\u5907\ncd /map1/oemhp_vm1/cddr1\n# \u8bbe\u7f6e\u6302\u8f7d\u5730\u5740, URL \u6700\u957f 80 \u4e2a\u5b57\u7b26\nset oemhp_image=http://192.168.11.240:2015/spp-2016.10.0.iso\n# \u4ece\u8be5\u8bbe\u5907\u542f\u52a8\u4e00\u6b21\nset oemhp_boot=connect\nset oemhp_boot=once\n# \u67e5\u770b\u5f53\u524d\u72b6\u6001\nshow\n# \u91cd\u542f\nreset\n# \u5f39\u51fa\nset /map1/oemhp_vm1/cddr1 oemhp_boot=disconnect\n")),(0,n.kt)("h1",u({},{id:"faq"}),"FAQ"),(0,n.kt)("h2",u({},{id:"ilo2-\u8bbf\u95ee\u51fa\u73b0-ssl-\u9519\u8bef"}),"iLO2 \u8bbf\u95ee\u51fa\u73b0 SSL \u9519\u8bef"),(0,n.kt)("p",null,"\u5c1d\u8bd5\u4f7f\u7528 Safari \u6216\u8005 IE \u8bbf\u95ee, Chrome \u51fa\u73b0\u8be5\u9519\u8bef"),(0,n.kt)("h2",u({},{id:"ssh-\u65e0\u6cd5\u767b\u9646-ilo2"}),"SSH \u65e0\u6cd5\u767b\u9646 iLO2"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u6dfb\u52a0 HostKeyAlgorithms \u9009\u9879\nssh yky@ilo2 -vvv -o HostKeyAlgorithms=ssh-rsa\n")))}k.isMDXComponent=!0}}]);
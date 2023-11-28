"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55858],{49613:function(e,t,a){a.d(t,{Zo:function(){return c},kt:function(){return f}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function m(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),o=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},c=function(e){var t=o(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,c=m(e,["components","mdxType","originalType","parentName"]),u=o(a),g=r,f=u["".concat(p,".").concat(g)]||u[g]||s[g]||l;return a?n.createElement(f,i(i({ref:t},c),{},{components:a})):n.createElement(f,i({ref:t},c))}));function f(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=g;var m={};for(var p in t)hasOwnProperty.call(t,p)&&(m[p]=t[p]);m.originalType=e,m[u]="string"==typeof e?e:r,i[1]=m;for(var o=2;o<l;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},91233:function(e,t,a){a.r(t),a.d(t,{assets:function(){return k},contentTitle:function(){return b},default:function(){return O},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return h}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,m=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,c=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,u=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&c(e,a,t[a]);if(m)for(var a of m(t))o.call(t,a)&&c(e,a,t[a]);return e},s=(e,t)=>l(e,i(t)),g=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&m)for(var n of m(e))t.indexOf(n)<0&&o.call(e,n)&&(a[n]=e[n]);return a};const f={title:"libmagic"},b="libmagic",d={unversionedId:"languages/c/lib/libmagic",id:"languages/c/lib/libmagic",title:"libmagic",description:"- file/file",source:"@site/../notes/languages/c/lib/libmagic.md",sourceDirName:"languages/c/lib",slug:"/languages/c/lib/libmagic",permalink:"/notes/languages/c/lib/libmagic",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/c/lib/libmagic.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1664804552,formattedLastUpdatedAt:"Oct 3, 2022",frontMatter:{title:"libmagic"},sidebar:"docs",previous:{title:"libdl",permalink:"/notes/languages/c/lib/dl"},next:{title:"SDL2",permalink:"/notes/languages/c/lib/sdl2"}},k={},h=[{value:"magic",id:"magic",level:2}],N={toc:h},y="wrapper";function O(e){var t=e,{components:a}=t,r=g(t,["components"]);return(0,n.kt)(y,s(u(u({},N),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"libmagic"}),"libmagic"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/file/file"}),"file/file")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/file/file/blob/master/src/magic.h.in"}),"src/magic.h.in")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://man7.org/linux/man-pages/man3/magic_open.3.html"}),"libmagic")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://man7.org/linux/man-pages/man1/file.1.html"}),"file.1")),(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u9879\u76ee",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"go ",(0,n.kt)("a",u({parentName:"li"},{href:"https://pkg.go.dev/net/http#DetectContentType"}),"net/http#DetectContentType"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"whatwg ",(0,n.kt)("a",u({parentName:"li"},{href:"https://mimesniff.spec.whatwg.org/"}),"mimesniff")))),(0,n.kt)("li",{parentName:"ul"},"pure go ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/h2non/filetype"}),"h2non/filetype")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/adrian-thurston/ragel"}),"adrian-thurston/ragel")),(0,n.kt)("li",{parentName:"ul"},"WASM ",(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/npcz/magic"}),"npcz/magic"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ea\u80fd detect \u6587\u4ef6 - \u4f20\u9012 path")))))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"file -b --mime-type README.md # text/plain\nfile -bsi /dev/nul            # application/x-empty; charset=binary\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",u({parentName:"tr"},{align:null}),"flag"),(0,n.kt)("th",u({parentName:"tr"},{align:null}),"demo"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"-i,--mime"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"text/plain; charset=utf-8"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"--mime-type"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"text/plain"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"--mime-encoding"),(0,n.kt)("td",u({parentName:"tr"},{align:null}),"utf-8")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"-z,--uncompress"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",u({parentName:"tr"},{align:null}),"-Z,--uncompress-noreport"),(0,n.kt)("td",u({parentName:"tr"},{align:null}))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"-P, --parameter",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"bytes=1048576 - \u6700\u591a\u8bfb\u53d6 1MB"),(0,n.kt)("li",{parentName:"ul"},"encoding=65536 - \u626b\u63cf\u591a\u5c11 bytes"),(0,n.kt)("li",{parentName:"ul"},"elf_notes=256"),(0,n.kt)("li",{parentName:"ul"},"elf_phnum=2048"),(0,n.kt)("li",{parentName:"ul"},"elf_shnum=32768"),(0,n.kt)("li",{parentName:"ul"},"indir=50 - indirect"),(0,n.kt)("li",{parentName:"ul"},"name=50"),(0,n.kt)("li",{parentName:"ul"},"regex=8192")))),(0,n.kt)("h2",u({},{id:"magic"}),"magic"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://man7.org/linux/man-pages/man4/magic.4.html"}),"magic.4")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/file/file/tree/master/magic/Magdir"}),"magic/Magdir"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"file \u73b0\u6709\u7684 magic \u5b9a\u4e49"))),(0,n.kt)("li",{parentName:"ul"},"/usr/local/share/misc/magic - \u672a\u7f16\u8bd1"),(0,n.kt)("li",{parentName:"ul"},"/usr/local/share/misc/magic.mgc - \u7f16\u8bd1\u540e")))}O.isMDXComponent=!0}}]);
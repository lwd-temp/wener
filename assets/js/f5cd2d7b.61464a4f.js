"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38722],{49613:function(t,e,r){r.d(e,{Zo:function(){return s},kt:function(){return d}});var n=r(59496);function a(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,n)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(Object(r),!0).forEach((function(e){a(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function l(t,e){if(null==t)return{};var r,n,a=function(t,e){if(null==t)return{};var r,n,a={},o=Object.keys(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||(a[r]=t[r]);return a}(t,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(t);for(n=0;n<o.length;n++)r=o[n],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(a[r]=t[r])}return a}var u=n.createContext({}),m=function(t){var e=n.useContext(u),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},s=function(t){var e=m(t.components);return n.createElement(u.Provider,{value:e},t.children)},c="mdxType",p={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},f=n.forwardRef((function(t,e){var r=t.components,a=t.mdxType,o=t.originalType,u=t.parentName,s=l(t,["components","mdxType","originalType","parentName"]),c=m(r),f=a,d=c["".concat(u,".").concat(f)]||c[f]||p[f]||o;return r?n.createElement(d,i(i({ref:e},s),{},{components:r})):n.createElement(d,i({ref:e},s))}));function d(t,e){var r=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var o=r.length,i=new Array(o);i[0]=f;var l={};for(var u in e)hasOwnProperty.call(e,u)&&(l[u]=e[u]);l.originalType=t,l[c]="string"==typeof t?t:a,i[1]=l;for(var m=2;m<o;m++)i[m]=r[m];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},26671:function(t,e,r){r.r(e),r.d(e,{assets:function(){return g},contentTitle:function(){return h},default:function(){return O},frontMatter:function(){return d},metadata:function(){return b},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(t,e,r)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,c=(t,e)=>{for(var r in e||(e={}))u.call(e,r)&&s(t,r,e[r]);if(l)for(var r of l(e))m.call(e,r)&&s(t,r,e[r]);return t},p=(t,e)=>o(t,i(e)),f=(t,e)=>{var r={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(r[n]=t[n]);if(null!=t&&l)for(var n of l(t))e.indexOf(n)<0&&m.call(t,n)&&(r[n]=t[n]);return r};const d={title:"multiformats",tags:["Codec","Hash"]},h="multiformats",b={unversionedId:"algorithm/multiformats",id:"algorithm/multiformats",title:"multiformats",description:"- multiformats/unsigned-varint",source:"@site/../notes/algorithm/multiformats.md",sourceDirName:"algorithm",slug:"/algorithm/multiformats",permalink:"/notes/algorithm/multiformats",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/algorithm/multiformats.md",tags:[{label:"Codec",permalink:"/notes/tags/codec"},{label:"Hash",permalink:"/notes/tags/hash"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1695042174,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{title:"multiformats",tags:["Codec","Hash"]},sidebar:"docs",previous:{title:"Merkle tree",permalink:"/notes/algorithm/merkle-tree"},next:{title:"Hidden Markov Model",permalink:"/notes/algorithm/refs/hidden-markov-model"}},g={},y=[{value:"multihash",id:"multihash",level:2}],v={toc:y},k="wrapper";function O(t){var e=t,{components:r}=e,a=f(e,["components"]);return(0,n.kt)(k,p(c(c({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"multiformats"}),"multiformats"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/multiformats/unsigned-varint"}),"multiformats/unsigned-varint"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Go varint, \u57fa\u4e8e PB int"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/multiformats/multicodec/blob/master/table.csv"}),"table.csv"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7f16\u7801\u5217\u8868")))),(0,n.kt)("h2",c({},{id:"multihash"}),"multihash"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/multiformats/multihash"}),"multiformats/multihash"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"hash \u7ed3\u679c\u5305\u542b\u4f7f\u7528\u7684 hash \u7b97\u6cd5")))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"<hash-func-type><digest-length><digest-value>\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"hash-func-type - uvarint"),(0,n.kt)("li",{parentName:"ul"},"digest-length - uvarint")))}O.isMDXComponent=!0}}]);
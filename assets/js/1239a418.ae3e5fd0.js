"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[56536],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var i=n.createContext({}),u=function(e){var t=n.useContext(i),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(i.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,f=s["".concat(i,".").concat(d)]||s[d]||m[d]||o;return r?n.createElement(f,l(l({ref:t},c),{},{components:r})):n.createElement(f,l({ref:t},c))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,l=new Array(o);l[0]=d;var p={};for(var i in t)hasOwnProperty.call(t,i)&&(p[i]=t[i]);p.originalType=e,p[s]="string"==typeof e?e:a,l[1]=p;for(var u=2;u<o;u++)l[u]=r[u];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35453:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return k},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return O}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))i.call(t,r)&&c(e,r,t[r]);if(p)for(var r of p(t))u.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>o(e,l(t)),d=(e,t)=>{var r={};for(var n in e)i.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&p)for(var n of p(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const f={title:"Greenplum"},b="Greenplum",g={unversionedId:"db/olap/greenplum",id:"db/olap/greenplum",title:"Greenplum",description:"- GPDB",source:"@site/../notes/db/olap/greenplum.md",sourceDirName:"db/olap",slug:"/db/olap/greenplum",permalink:"/notes/db/olap/greenplum",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/olap/greenplum.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1664927783,formattedLastUpdatedAt:"Oct 4, 2022",frontMatter:{title:"Greenplum"},sidebar:"docs",previous:{title:"OLAP",permalink:"/notes/db/olap/"},next:{title:"\u5173\u7cfb\u578b\u6570\u636e\u5e93",permalink:"/notes/db/relational/"}},y={},O=[{value:"\u7248\u672c",id:"\u7248\u672c",level:2}],h={toc:O},v="wrapper";function k(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(v,m(s(s({},h),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"greenplum"}),"Greenplum"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"GPDB"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"http://hawq.incubator.apache.org/"}),"HAWQ")," \u662f Hadoop \u751f\u6001\u5708\u91cc\u7684 GP"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/greenplum-db/gpdb/wiki/Greenplum-Architecture"}),"\u67b6\u6784")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/greenplum-db/gpdb-postgres-merge"}),"https://github.com/greenplum-db/gpdb-postgres-merge")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://gpdb.docs.pivotal.io/6-6/admin_guide/ddl/ddl-storage.html"}),"Choosing the Table Storage Model"))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"apt update\napt install ca-certificates\n\ncp sources.list /etc/apt/sources.list\napt install $PWD/greenplum-db-6.0.0-beta.7-ubuntu18.04-amd64.deb -f -y\napt install python -y\n\nexport GPHOME=/usr/local/greenplum-db\nexport PATH=$GPHOME/bin/:$PATH\n\nsource $GPHOME/greenplum_path.sh\nMASTER_DATA_DIRECTORY=$PWD/data gpstart\n")),(0,n.kt)("h2",s({},{id:"\u7248\u672c"}),"\u7248\u672c"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"6.0",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"PostgreSQL 9.3"))),(0,n.kt)("li",{parentName:"ul"},"5.0 - 2017",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"PostgreSQL 8.2")))))}k.isMDXComponent=!0}}]);
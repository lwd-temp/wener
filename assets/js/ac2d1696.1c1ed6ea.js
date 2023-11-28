"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[8345],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var p=n.createContext({}),s=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,p=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=s(r),d=o,m=u["".concat(p,".").concat(d)]||u[d]||f[d]||a;return r?n.createElement(m,l(l({ref:t},c),{},{components:r})):n.createElement(m,l({ref:t},c))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=d;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i[u]="string"==typeof e?e:o,l[1]=i;for(var s=2;s<a;s++)l[s]=r[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},2562:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return b},default:function(){return N},frontMatter:function(){return m},metadata:function(){return O},toc:function(){return g}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(i)for(var r of i(t))s.call(t,r)&&c(e,r,t[r]);return e},f=(e,t)=>a(e,l(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&s.call(e,n)&&(r[n]=e[n]);return r};const m={title:"\u89c6\u56fe"},b="\u89c6\u56fe",O={unversionedId:"db/relational/postgresql/postgresql-view",id:"db/relational/postgresql/postgresql-view",title:"\u89c6\u56fe",description:"\u53ef\u66f4\u65b0\u89c6\u56fe",source:"@site/../notes/db/relational/postgresql/postgresql-view.md",sourceDirName:"db/relational/postgresql",slug:"/db/relational/postgresql/view",permalink:"/notes/db/relational/postgresql/view",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/postgresql/postgresql-view.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1633617108,formattedLastUpdatedAt:"Oct 7, 2021",frontMatter:{title:"\u89c6\u56fe"},sidebar:"docs",previous:{title:"\u7248\u672c\u5386\u53f2",permalink:"/notes/db/relational/postgresql/version"},next:{title:"PostREST \u5165\u95e8\u90e8\u7f72",permalink:"/notes/db/relational/postgresql/postgrest-hello"}},y={},g=[{value:"\u53ef\u66f4\u65b0\u89c6\u56fe",id:"\u53ef\u66f4\u65b0\u89c6\u56fe",level:2}],v={toc:g},w="wrapper";function N(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(w,f(u(u({},v),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"\u89c6\u56fe"}),"\u89c6\u56fe"),(0,n.kt)("h2",u({},{id:"\u53ef\u66f4\u65b0\u89c6\u56fe"}),"\u53ef\u66f4\u65b0\u89c6\u56fe"),(0,n.kt)("admonition",u({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u5217\u6ca1\u6709\u9ed8\u8ba4\u503c"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"ON CONFLICT")," \u65e0\u6548"))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9650\u5236",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"FROM \u53ea\u80fd\u6709\u4e00\u4e2a\u8868\uff0c\u53ef\u4ee5\u662f\u53e6\u5916\u4e00\u4e2a\u53ef\u66f4\u65b0\u89c6\u56fe"),(0,n.kt)("li",{parentName:"ul"},"\u9876\u7ea7\u5b9a\u4e49\u4e0d\u5141\u8bb8\u5305\u542b WITH, DISTINCT, GROUP BY, HAVING, LIMIT, OFFSET"),(0,n.kt)("li",{parentName:"ul"},"\u9876\u7ea7\u5b9a\u4e49\u4e0d\u5141\u8bb8\u5305\u542b\u96c6\u5408\u64cd\u4f5c UNION, INTERSECT, EXCEPT"),(0,n.kt)("li",{parentName:"ul"},"\u89c6\u56fe\u5217\u4e0d\u5141\u8bb8\u5305\u542b\u805a\u5408\u3001\u7a97\u53e3\u51fd\u6570\u3001\u96c6\u5408\u8fd4\u56de\u51fd\u6570"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://hasura.io/blog/the-pros-and-cons-of-updatable-views/"}),"The pros and cons of updatable views in PostgreSQL"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-sql"}),"CREATE TABLE articles (\n  id integer NOT NULL PRIMARY KEY\n  , title text NOT NULL\n  , description text\n  , public bool NOT NULL DEFAULT 'false'\n);\n\nCREATE VIEW public_articles AS\n  SELECT * FROM articles\n  WHERE public;\n")))}N.isMDXComponent=!0}}]);
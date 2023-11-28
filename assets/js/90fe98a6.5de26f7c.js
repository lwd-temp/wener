"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68269],{49613:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return f}});var a=t(59496);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function p(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);r&&(a=a.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,a)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?p(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):p(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,a,n=function(e,r){if(null==e)return{};var t,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)t=p[a],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var o=a.createContext({}),c=function(e){var r=a.useContext(o),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},u=function(e){var r=c(e.components);return a.createElement(o.Provider,{value:r},e.children)},s="mdxType",h={inlineCode:"code",wrapper:function(e){var r=e.children;return a.createElement(a.Fragment,{},r)}},m=a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(t),m=n,f=s["".concat(o,".").concat(m)]||s[m]||h[m]||p;return t?a.createElement(f,i(i({ref:r},u),{},{components:t})):a.createElement(f,i({ref:r},u))}));function f(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var p=t.length,i=new Array(p);i[0]=m;var l={};for(var o in r)hasOwnProperty.call(r,o)&&(l[o]=r[o]);l.originalType=e,l[s]="string"==typeof e?e:n,i[1]=l;for(var c=2;c<p;c++)i[c]=t[c];return a.createElement.apply(null,i)}return a.createElement.apply(null,t)}m.displayName="MDXCreateElement"},35216:function(e,r,t){t.r(r),t.d(r,{assets:function(){return b},contentTitle:function(){return g},default:function(){return O},frontMatter:function(){return f},metadata:function(){return d},toc:function(){return y}});var a=t(49613),n=Object.defineProperty,p=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?n(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,s=(e,r)=>{for(var t in r||(r={}))o.call(r,t)&&u(e,t,r[t]);if(l)for(var t of l(r))c.call(r,t)&&u(e,t,r[t]);return e},h=(e,r)=>p(e,i(r)),m=(e,r)=>{var t={};for(var a in e)o.call(e,a)&&r.indexOf(a)<0&&(t[a]=e[a]);if(null!=e&&l)for(var a of l(e))r.indexOf(a)<0&&c.call(e,a)&&(t[a]=e[a]);return t};const f={title:"GraphiQL"},g="GraphiQL",d={unversionedId:"service/api/graphql/graphiql",id:"service/api/graphql/graphiql",title:"GraphiQL",description:"- graphql/graphiql",source:"@site/../notes/service/api/graphql/graphiql.md",sourceDirName:"service/api/graphql",slug:"/service/api/graphql/graphiql",permalink:"/notes/service/api/graphql/graphiql",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/graphql/graphiql.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1678453938,formattedLastUpdatedAt:"Mar 10, 2023",frontMatter:{title:"GraphiQL"},sidebar:"docs",previous:{title:"bramble",permalink:"/notes/service/api/graphql/bramble"},next:{title:"GraphQL Awesome",permalink:"/notes/service/api/graphql/awesome"}},b={},y=[],v={toc:y},q="wrapper";function O(e){var r=e,{components:t}=r,n=m(r,["components"]);return(0,a.kt)(q,h(s(s({},v),n),{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"graphiql"}),"GraphiQL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/graphql/graphiql"}),"graphql/graphiql"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Explorer"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://graphql.org/swapi-graphql"}),"Demo")),(0,a.kt)("li",{parentName:"ul"},"adopted by",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Hasura"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://gitlab.com/-/graphql-explorer"}),"Gitlab GraphQL Explorer")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://developer.github.com/v4/explorer"}),"GitHub GraphQL Explorer"))))))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-tsx"}),"import { createGraphiQLFetcher } from '@graphiql/toolkit';\nimport { GraphiQL } from 'graphiql';\nimport React from 'react';\nimport ReactDOM from 'react-dom';\n\nimport 'graphiql/graphiql.css';\n\nconst fetcher = createGraphiQLFetcher({\n  url: 'https://my.backend/graphql',\n});\n\nReactDOM.render(<GraphiQL fetcher={fetcher} />, document.body);\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/graphql/graphiql/blob/main/examples/graphiql-cdn/index.html"}),"https://github.com/graphql/graphiql/blob/main/examples/graphiql-cdn/index.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://graphiql-test.netlify.app/typedoc/modules/graphiql.html#graphiqlprops-1"}),"https://graphiql-test.netlify.app/typedoc/modules/graphiql.html#graphiqlprops-1"))))}O.isMDXComponent=!0}}]);
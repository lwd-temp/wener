"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[4569],{49613:function(e,r,t){t.d(r,{Zo:function(){return s},kt:function(){return y}});var n=t(59496);function a(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function o(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?o(Object(t),!0).forEach((function(r){a(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,a=function(e,r){if(null==e)return{};var t,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(a[t]=e[t]);return a}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var p=n.createContext({}),c=function(e){var r=n.useContext(p),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},s=function(e){var r=c(e.components);return n.createElement(p.Provider,{value:r},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},g=n.forwardRef((function(e,r){var t=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),u=c(t),g=a,y=u["".concat(p,".").concat(g)]||u[g]||f[g]||o;return t?n.createElement(y,i(i({ref:r},s),{},{components:t})):n.createElement(y,i({ref:r},s))}));function y(e,r){var t=arguments,a=r&&r.mdxType;if("string"==typeof e||a){var o=t.length,i=new Array(o);i[0]=g;var l={};for(var p in r)hasOwnProperty.call(r,p)&&(l[p]=r[p]);l.originalType=e,l[u]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=t[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}g.displayName="MDXCreateElement"},32901:function(e,r,t){t.r(r),t.d(r,{assets:function(){return d},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return y},metadata:function(){return h},toc:function(){return v}});var n=t(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,r,t)=>r in e?a(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))p.call(r,t)&&s(e,t,r[t]);if(l)for(var t of l(r))c.call(r,t)&&s(e,t,r[t]);return e},f=(e,r)=>o(e,i(r)),g=(e,r)=>{var t={};for(var n in e)p.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&l)for(var n of l(e))r.indexOf(n)<0&&c.call(e,n)&&(t[n]=e[n]);return t};const y={title:"graphql-yoga"},m="graphql-yoga",h={unversionedId:"service/api/graphql/graphql-yoga",id:"service/api/graphql/graphql-yoga",title:"graphql-yoga",description:"- dotansimha/graphql-yoga",source:"@site/../notes/service/api/graphql/graphql-yoga.md",sourceDirName:"service/api/graphql",slug:"/service/api/graphql/yoga",permalink:"/notes/service/api/graphql/yoga",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/graphql/graphql-yoga.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1678762178,formattedLastUpdatedAt:"Mar 14, 2023",frontMatter:{title:"graphql-yoga"},sidebar:"docs",previous:{title:"GraphQL Sofa",permalink:"/notes/service/api/graphql/sofa"},next:{title:"Mercurius",permalink:"/notes/service/api/graphql/mercurius"}},d={},v=[],b={toc:v},O="wrapper";function w(e){var r=e,{components:t}=r,a=g(r,["components"]);return(0,n.kt)(O,f(u(u({},b),a),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"graphql-yoga"}),"graphql-yoga"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/dotansimha/graphql-yoga"}),"dotansimha/graphql-yoga"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MIT, Typescript"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 NodeJS, Bun, Deno, Cloudflare Worker"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 Next.js, SvelteKit, uWebSockets, Fastify, NestJS"),(0,n.kt)("li",{parentName:"ul"},"GraphQL \u670d\u52a1\u7aef")))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ts"}),"import { createSchema, createYoga } from 'graphql-yoga';\nimport { createServer } from 'node:http';\n\nconst yoga = createYoga({\n  schema: createSchema({\n    typeDefs: /* GraphQL */ `\n      type Query {\n        hello: String\n      }\n    `,\n    resolvers: {\n      Query: {\n        hello: () => 'Hello from Yoga!',\n      },\n    },\n  }),\n});\n\nconst server = createServer(yoga);\n\nserver.listen(4000, () => {\n  console.info('Server is running on http://localhost:4000/graphql');\n});\n")))}w.isMDXComponent=!0}}]);
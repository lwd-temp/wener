"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[70928],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return f}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var c=a.createContext({}),p=function(e){var t=a.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},u=function(e){var t=p(e.components);return a.createElement(c.Provider,{value:t},e.children)},y="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,c=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),y=p(r),m=n,f=y["".concat(c,".").concat(m)]||y[m]||s[m]||l;return r?a.createElement(f,o(o({ref:t},u),{},{components:r})):a.createElement(f,o({ref:t},u))}));function f(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,o=new Array(l);o[0]=m;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i[y]="string"==typeof e?e:n,o[1]=i;for(var p=2;p<l;p++)o[p]=r[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},72824:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return w},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return b}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,y=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&u(e,r,t[r]);if(i)for(var r of i(t))p.call(t,r)&&u(e,r,t[r]);return e},s=(e,t)=>l(e,o(t)),m=(e,t)=>{var r={};for(var a in e)c.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const f={title:"Cayley"},d="Cayley",g={unversionedId:"db/graph/cayley",id:"db/graph/cayley",title:"Cayley",description:"- cayleygraph/cayley",source:"@site/../notes/db/graph/cayley.md",sourceDirName:"db/graph",slug:"/db/graph/cayley",permalink:"/notes/db/graph/cayley",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/graph/cayley.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1638548289,formattedLastUpdatedAt:"Dec 3, 2021",frontMatter:{title:"Cayley"},sidebar:"docs",previous:{title:"ArangoDB",permalink:"/notes/db/graph/arangodb"},next:{title:"dgraph",permalink:"/notes/db/graph/dgraph"}},h={},b=[{value:"gizmo",id:"gizmo",level:2}],k={toc:b},v="wrapper";function w(e){var t=e,{components:r}=t,n=m(t,["components"]);return(0,a.kt)(v,s(y(y({},k),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",y({},{id:"cayley"}),"Cayley"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",y({parentName:"li"},{href:"https://github.com/cayleygraph/cayley"}),"cayleygraph/cayley"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"quadstore"))),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u5b58\u50a8",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"KVs: Bolt, LevelDB"),(0,a.kt)("li",{parentName:"ul"},"NoSQL: MongoDB"),(0,a.kt)("li",{parentName:"ul"},"SQL: PostgreSQL, CockroachDB, MySQL"),(0,a.kt)("li",{parentName:"ul"},"In-memory, ephemeral"))),(0,a.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u6240\u6709\u5c5e\u6027 ",(0,a.kt)("a",y({parentName:"li"},{href:"https://discourse.cayley.io/t/get-vertex-with-all-predicates/1416/2"}),"https://discourse.cayley.io/t/get-vertex-with-all-predicates/1416/2")),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",y({parentName:"li"},{href:"https://cayley.io/"}),"https://cayley.io/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",y({parentName:"li"},{href:"https://cayley.gitbook.io/cayley/"}),"https://cayley.gitbook.io/cayley/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",y({parentName:"li"},{href:"https://www.cs.bham.ac.uk/~petitcz/files/Cayley.pdf"}),"https://www.cs.bham.ac.uk/~petitcz/files/Cayley.pdf"))))),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-bash"}),"brew add cayley\n\n# \u542f\u52a8\u670d\u52a1\n# http://127.0.0.1:64210\ncayley http\n\n# Docker \u542f\u52a8\ndocker run --rm -it -v $PWD:/data -p 64210:64210 cayleygraph/cayley\n\n# \u6837\u672c\u6570\u636e\ncurl -OL https://github.com/cayleygraph/cayley/raw/master/data/30kmoviedata.nq.gz\ncayley http --load 30kmoviedata.nq.gz\n\n\ncayley repl\n")),(0,a.kt)("h2",y({},{id:"gizmo"}),"gizmo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",y({parentName:"li"},{href:"https://cayley.gitbook.io/cayley/gizmoapi"}),"https://cayley.gitbook.io/cayley/gizmoapi"))),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-js"}),"// \u57fa\u672c\u67e5\u8be2\ng.V().getLimit(5);\n\n// \u5c5e\u6027\u67e5\u8be2\ng.V().has('<name>', 'Humphrey Bogart').all();\n\n// \u590d\u6742\u8def\u5f84 - \u53ef\u4ee5\u9884\u5b9a\u4e49\u8def\u5f84\nvar filmToActor = g.Morphism().out('</film/film/starring>').out('</film/performance/actor>');\n\ng.V().has('<name>', 'Casablanca').follow(filmToActor).out('<name>').all();\n")),(0,a.kt)("pre",null,(0,a.kt)("code",y({parentName:"pre"},{className:"language-js"}),"var result = {};\nvar person = g.V('wener');\nresult['id'] = 'wener';\nperson.outPredicates().forEach(function (d) {\n  result[d.id] = person.out(d.id).toValue();\n});\n\ng.emit(result);\n")))}w.isMDXComponent=!0}}]);
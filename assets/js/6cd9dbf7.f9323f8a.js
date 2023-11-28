"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6430],{49613:function(e,t,r){r.d(t,{Zo:function(){return m},kt:function(){return k}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},m=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=c(r),f=a,k=s["".concat(p,".").concat(f)]||s[f]||u[f]||i;return r?n.createElement(k,l(l({ref:t},m),{},{components:r})):n.createElement(k,l({ref:t},m))}));function k(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,l=new Array(i);l[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var c=2;c<i;c++)l[c]=r[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},32404:function(e,t,r){r.r(t),r.d(t,{assets:function(){return N},contentTitle:function(){return d},default:function(){return h},frontMatter:function(){return k},metadata:function(){return g},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,m=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&m(e,r,t[r]);if(o)for(var r of o(t))c.call(t,r)&&m(e,r,t[r]);return e},u=(e,t)=>i(e,l(t)),f=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const k={tags:["Guideline"]},d="Semantic Commit",g={unversionedId:"service/forge/git/git-semantic-commit",id:"service/forge/git/git-semantic-commit",title:"Semantic Commit",description:"- type",source:"@site/../notes/service/forge/git/git-semantic-commit.md",sourceDirName:"service/forge/git",slug:"/service/forge/git/semantic-commit",permalink:"/notes/service/forge/git/semantic-commit",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/git/git-semantic-commit.md",tags:[{label:"Guideline",permalink:"/notes/tags/guideline"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1678762178,formattedLastUpdatedAt:"Mar 14, 2023",frontMatter:{tags:["Guideline"]},sidebar:"docs",previous:{title:"git-secret",permalink:"/notes/service/forge/git/secret"},next:{title:"Git Submodule",permalink:"/notes/service/forge/git/submodule"}},N={},y=[{value:"Message",id:"message",level:2},{value:"\u7279\u6b8a",id:"\u7279\u6b8a",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2}],b={toc:y},v="wrapper";function h(e){var t=e,{components:r}=t,a=f(t,["components"]);return(0,n.kt)(v,u(s(s({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"semantic-commit"}),"Semantic Commit"),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{}),"<type>[optional scope]: <description>\n\n[optional body]\n\n[optional footer(s)]\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"type",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"fix:"),(0,n.kt)("li",{parentName:"ul"},"feat:"),(0,n.kt)("li",{parentName:"ul"},"chore: \u6784\u5efa\u8fc7\u7a0b\u3001\u8f85\u52a9\u5de5\u5177\u3001\u6587\u6863\u751f\u6210\u3001\u5347\u7ea7"),(0,n.kt)("li",{parentName:"ul"},"refactor:"),(0,n.kt)("li",{parentName:"ul"},"style: \u8c03\u6574\u4ee3\u7801\u683c\u5f0f"),(0,n.kt)("li",{parentName:"ul"},"docs:"),(0,n.kt)("li",{parentName:"ul"},"ci:"),(0,n.kt)("li",{parentName:"ul"},"perf:"),(0,n.kt)("li",{parentName:"ul"},"test:"),(0,n.kt)("li",{parentName:"ul"},"revert:"),(0,n.kt)("li",{parentName:"ul"},"localize:"),(0,n.kt)("li",{parentName:"ul"},"build:"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"feat(xyz)!"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"!")," for BREAKING CHANGE"))),(0,n.kt)("li",{parentName:"ul"},"footer",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BREAKING CHANGE:"),(0,n.kt)("li",{parentName:"ul"},"trailers - ",(0,n.kt)("a",s({parentName:"li"},{href:"https://git-scm.com/docs/git-interpret-trailers"}),"https://git-scm.com/docs/git-interpret-trailers"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Signed-off-by:"),(0,n.kt)("li",{parentName:"ul"},"Reviewed-by:"),(0,n.kt)("li",{parentName:"ul"},"Refs: #123"))),(0,n.kt)("li",{parentName:"ul"},"Created By:"),(0,n.kt)("li",{parentName:"ul"},"Approved By:"),(0,n.kt)("li",{parentName:"ul"},"Accepted By:"),(0,n.kt)("li",{parentName:"ul"},"URL:")))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-js"}),"const r = /^(feat|fix|docs|style|perf|merge|build|localize|revert|refactor|test|chore|ci)([(].+\uff1f[)])?!?: .{1,120}/;\n")),(0,n.kt)("h2",s({},{id:"message"}),"Message"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Angular \u793e\u533a\u63d0\u4ea4\u89c4\u8303",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"^(feat|fix|docs|style|refactor|test|chore|ci)((.+))?: .{1,100}")))),(0,n.kt)("li",{parentName:"ul"},"jQuery \u793e\u533a\u63d0\u4ea4\u89c4\u8303",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"^(Fixes|Closes|Ref)? .{1,100}")))),(0,n.kt)("li",{parentName:"ul"},"Atom \u793e\u533a\u63d0\u4ea4\u89c4\u8303",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"^(:.*:)? .{1,72}")))),(0,n.kt)("li",{parentName:"ul"},"JSHint \u793e\u533a\u63d0\u4ea4\u89c4\u8303",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"^([[(FIX|FEAT|DOCS|TEST|CHORE)]])? .{1,100}")))),(0,n.kt)("li",{parentName:"ul"},"ESLint \u793e\u533a\u63d0\u4ea4\u89c4\u8303",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"^(Fix|Update|New|Breaking|Docs|Build|Upgrade|Chore)?: .{1,72}"))))),(0,n.kt)("h2",s({},{id:"\u7279\u6b8a"}),"\u7279\u6b8a"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"Github")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{}),"[skip ci]\n[ci skip]\n[no ci]\n[skip actions]\n[actions skip]\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"footer")),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{}),"skip-checks:true\nskip-checks: true\n")),(0,n.kt)("h2",s({},{id:"\u53c2\u8003"}),"\u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/fteem/git-semantic-commits"}),"https://github.com/fteem/git-semantic-commits")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://sparkbox.com/foundry/semantic_commit_messages"}),"https://sparkbox.com/foundry/semantic_commit_messages")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://git-scm.com/docs/git-interpret-trailers"}),"https://git-scm.com/docs/git-interpret-trailers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://www.conventionalcommits.org/"}),"https://www.conventionalcommits.org/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://ec.europa.eu/component-library/v1.15.0/eu/docs/conventions/git/"}),"https://ec.europa.eu/component-library/v1.15.0/eu/docs/conventions/git/"))))}h.isMDXComponent=!0}}]);
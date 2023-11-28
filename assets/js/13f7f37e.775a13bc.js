"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[3231],{49613:function(t,e,r){r.d(e,{Zo:function(){return m},kt:function(){return g}});var a=r(59496);function n(t,e,r){return e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r,t}function l(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function i(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?l(Object(r),!0).forEach((function(e){n(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}function p(t,e){if(null==t)return{};var r,a,n=function(t,e){if(null==t)return{};var r,a,n={},l=Object.keys(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||(n[r]=t[r]);return n}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)r=l[a],e.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(t,r)&&(n[r]=t[r])}return n}var o=a.createContext({}),u=function(t){var e=a.useContext(o),r=e;return t&&(r="function"==typeof t?t(e):i(i({},e),t)),r},m=function(t){var e=u(t.components);return a.createElement(o.Provider,{value:e},t.children)},s="mdxType",d={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},k=a.forwardRef((function(t,e){var r=t.components,n=t.mdxType,l=t.originalType,o=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),s=u(r),k=n,g=s["".concat(o,".").concat(k)]||s[k]||d[k]||l;return r?a.createElement(g,i(i({ref:e},m),{},{components:r})):a.createElement(g,i({ref:e},m))}));function g(t,e){var r=arguments,n=e&&e.mdxType;if("string"==typeof t||n){var l=r.length,i=new Array(l);i[0]=k;var p={};for(var o in e)hasOwnProperty.call(e,o)&&(p[o]=e[o]);p.originalType=t,p[s]="string"==typeof t?t:n,i[1]=p;for(var u=2;u<l;u++)i[u]=r[u];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},10256:function(t,e,r){r.r(e),r.d(e,{assets:function(){return f},contentTitle:function(){return N},default:function(){return L},frontMatter:function(){return g},metadata:function(){return c},toc:function(){return y}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(t,e,r)=>e in t?n(t,e,{enumerable:!0,configurable:!0,writable:!0,value:r}):t[e]=r,s=(t,e)=>{for(var r in e||(e={}))o.call(e,r)&&m(t,r,e[r]);if(p)for(var r of p(e))u.call(e,r)&&m(t,r,e[r]);return t},d=(t,e)=>l(t,i(e)),k=(t,e)=>{var r={};for(var a in t)o.call(t,a)&&e.indexOf(a)<0&&(r[a]=t[a]);if(null!=t&&p)for(var a of p(t))e.indexOf(a)<0&&u.call(t,a)&&(r[a]=t[a]);return r};const g={title:"Parser Glossary",tags:["Glossary"]},N="Parser Glossary",c={unversionedId:"languages/parser/parser-glossary",id:"languages/parser/parser-glossary",title:"Parser Glossary",description:"| Abbr.           | Word                                           | Desc                           |",source:"@site/../notes/languages/parser/parser-glossary.md",sourceDirName:"languages/parser",slug:"/languages/parser/glossary",permalink:"/notes/languages/parser/glossary",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/parser/parser-glossary.md",tags:[{label:"Glossary",permalink:"/notes/tags/glossary"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1696577752,formattedLastUpdatedAt:"Oct 6, 2023",frontMatter:{title:"Parser Glossary",tags:["Glossary"]},sidebar:"docs",previous:{title:"Parser FAQ",permalink:"/notes/languages/parser/faq"},next:{title:"\u8bed\u6cd5\u89e3\u6790",permalink:"/notes/languages/parser/parsing"}},f={},y=[{value:"Left recursion",id:"left-recursion",level:2}],b={toc:y},h="wrapper";function L(t){var e=t,{components:r}=e,n=k(e,["components"]);return(0,a.kt)(h,d(s(s({},b),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"parser-glossary"}),"Parser Glossary"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Abbr."),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Word"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"Desc"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"BNF"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Backus\u2013Naur form"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u5df4\u79d1\u65af\u8303\u5f0f - 1959 John Backus")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"EBNF"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"extended BNF"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u6269\u5c55\u5df4\u79d1\u65af\u8303\u5f0f - ISO-14977")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"DFA"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Deterministic finite automaton"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u786e\u5b9a\u6709\u9650\u72b6\u6001\u81ea\u52a8\u673a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"NFA"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Nondeterministic finite automaton"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u975e\u786e\u5b9a\u6709\u9650\u72b6\u6001\u81ea\u52a8\u673a")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"CFG"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Context free grammar"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u4e0a\u4e0b\u6587\u65e0\u5173\u8bed\u6cd5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"TDPL"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Top-Down Parsing Language"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"https://en.wikipedia.org/wiki/LL_parser"}),"LL(k)")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Left-to-right, Leftmost derivation"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"top-down - 1970s")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"LLR"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"LL-regular"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"LR"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Left-to-right, Rightmost derivation in reverse"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"bottom-up - 1965 Donald Knuth")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"DCFG"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Deterministic Context Free Grammar"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("a",s({parentName:"td"},{href:"/notes/languages/parser/peg"}),"PEG")),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Parsing expression grammar"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u89e3\u6790\u8868\u8fbe\u6587\u6cd5 - 2004 Bryan Ford")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"ANTLR"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"ANother Tool for Language Recognition"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"LALR"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Look-Ahead LR parser"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u7b80\u5316\u7248\u7684 LR")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"SLR"),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Canonical LR(1)"),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Minimal LR(1)"),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"GLR"),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"RPN"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"Reverse Polish notation"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"en"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"cn"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"grammar"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u8bed\u6cd5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"syntax"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u8bed\u6cd5")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"semantics"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u8bed\u4e49")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"expression"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"\u8868\u8fbe\u5f0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"term"),(0,a.kt)("td",s({parentName:"tr"},{align:null}))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"LL \u533a\u5206 ",(0,a.kt)("inlineCode",{parentName:"li"},"LL(*)")," \u548c ",(0,a.kt)("inlineCode",{parentName:"li"},"LL(k)"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Lookahead \u662f\u5426\u6709\u9650"),(0,a.kt)("li",{parentName:"ul"},"JavaCC \u9ed8\u8ba4 ",(0,a.kt)("inlineCode",{parentName:"li"},"LL(1)")," - \u53ef\u8bbe\u7f6e lookahead \u53d8\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"LL(k)")))),(0,a.kt)("li",{parentName:"ul"},"PEG \u7c7b\u4f3c CFG \u4f46\u5e76\u4e0d\u662f\u5b50\u96c6"),(0,a.kt)("li",{parentName:"ul"},"DFA - flex, regex, jflex"),(0,a.kt)("li",{parentName:"ul"},"context-sensitive parsing",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Off-side_rule"}),"Off-side rule")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/harc/ohm/issues/158"}),"https://github.com/harc/ohm/issues/158"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://ohmlang.github.io/pubs/dls2016/modular-semantic-actions.pdf"}),"https://ohmlang.github.io/pubs/dls2016/modular-semantic-actions.pdf")))))),(0,a.kt)("li",{parentName:"ul"},"PEG \u624b\u5199 right recursion")),(0,a.kt)("mermaid",s({},{value:'graph TD;\n    CFG--\x3eDCFG\n    DCFG--\x3eLL --\x3e LL_k\n    LL --\x3e LL_inf\n    LL_k --\x3e JavaCC\n    LL_inf --\x3e Antlr4\n\n    LL_inf["LL(*)"]\n    LL_k["LL(k)"]'})),(0,a.kt)("h2",s({},{id:"left-recursion"}),"Left recursion"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Left_recursion"}),"Left recursion"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Direct left recursion"),(0,a.kt)("li",{parentName:"ul"},"Indirect left recursion")))),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"a and b and c")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-json"}),'{\n  "type": "and",\n  // left\n  "left": {"type": "and", "left": {"term": "a"}, "right": {"term": "b"}},\n  //\n  "right": {"term": "c"}\n}\n')))}L.isMDXComponent=!0}}]);
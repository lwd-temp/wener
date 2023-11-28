"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6730],{49613:function(e,t,n){n.d(t,{Zo:function(){return l},kt:function(){return y}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),u=p(n),m=a,y=u["".concat(c,".").concat(m)]||u[m]||f[m]||o;return n?r.createElement(y,i(i({ref:t},l),{},{components:n})):r.createElement(y,i({ref:t},l))}));function y(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=m;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:a,i[1]=s;for(var p=2;p<o;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},55182:function(e,t,n){n.r(t),n.d(t,{assets:function(){return O},contentTitle:function(){return b},default:function(){return g},frontMatter:function(){return y},metadata:function(){return d},toc:function(){return j}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,l=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&l(e,n,t[n]);if(s)for(var n of s(t))p.call(t,n)&&l(e,n,t[n]);return e},f=(e,t)=>o(e,i(t)),m=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const y={tags:["Pattern"]},b="Pattern",d={unversionedId:"web/script/js/js-pattern",id:"web/script/js/js-pattern",title:"Pattern",description:"Mixin",source:"@site/../notes/web/script/js/js-pattern.md",sourceDirName:"web/script/js",slug:"/web/script/js/pattern",permalink:"/notes/web/script/js/pattern",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/script/js/js-pattern.md",tags:[{label:"Pattern",permalink:"/notes/tags/pattern"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{tags:["Pattern"]},sidebar:"docs",previous:{title:"IO",permalink:"/notes/web/script/js/io"},next:{title:"JS References",permalink:"/notes/web/script/js/ref"}},O={},j=[{value:"Mixin",id:"mixin",level:2}],w={toc:j},v="wrapper";function g(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(v,f(u(u({},w),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"pattern"}),"Pattern"),(0,r.kt)("h2",u({},{id:"mixin"}),"Mixin"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-js"}),"class User {\n  constructor(name) {\n    this.name = name;\n  }\n}\n\nObject.assign(User.prototype, {\n  hi() {\n    console.log(`Hi, I am ${this.name}`);\n  },\n});\n\n// \u7ee7\u627f\nlet sayMixin = {\n  say(phrase) {\n    alert(phrase);\n  },\n};\n\nlet sayHiMixin = {\n  __proto__: sayMixin, // (or we could use Object.setPrototypeOf to set the prototype here)\n\n  sayHi() {\n    // call parent method\n    super.say(`Hello ${this.name}`); // (*)\n  },\n  sayBye() {\n    super.say(`Bye ${this.name}`); // (*)\n  },\n};\n\nclass User {\n  constructor(name) {\n    this.name = name;\n  }\n}\n")))}g.isMDXComponent=!0}}]);
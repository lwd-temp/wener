"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[13751],{57081:function(e,t,a){a.r(t),a.d(t,{default:function(){return m}});var n=a(59496),r=a(45924),l=a(7321),c=a(29515),s=a(70434),o=a(14161),u=a(37736),i=a(42797);function m({tags:e}){const t=(0,l.M)();return n.createElement(c.FG,{className:(0,r.Z)(s.k.wrapper.docsPages,s.k.page.docsTagsListPage)},n.createElement(c.d,{title:t}),n.createElement(i.Z,{tag:"doc_tags_list"}),n.createElement(o.Z,null,n.createElement("div",{className:"container margin-vert--lg"},n.createElement("div",{className:"row"},n.createElement("main",{className:"col col--8 col--offset-2"},n.createElement("h1",null,t),n.createElement(u.Z,{tags:e}))))))}},63461:function(e,t,a){a.d(t,{Z:function(){return s}});var n=a(59496),r=a(45924),l=a(68990),c={tag:"tag_af3L",tagRegular:"tagRegular__L_C",tagWithCount:"tagWithCount_Mg9O"};function s({permalink:e,label:t,count:a}){return n.createElement(l.Z,{href:e,className:(0,r.Z)(c.tag,a?c.tagWithCount:c.tagRegular)},t,a&&n.createElement("span",null,a))}},37736:function(e,t,a){a.d(t,{Z:function(){return p}});var n=a(59496),r=a(7321),l=a(63461),c={tag:"tag_Tvms"},s=Object.defineProperty,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,g=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&m(e,a,t[a]);if(o)for(var a of o(t))i.call(t,a)&&m(e,a,t[a]);return e};function f({letterEntry:e}){return n.createElement("article",null,n.createElement("h2",null,e.letter),n.createElement("ul",{className:"padding--none"},e.tags.map((e=>n.createElement("li",{key:e.permalink,className:c.tag},n.createElement(l.Z,g({},e)))))),n.createElement("hr",null))}function p({tags:e}){const t=(0,r.P)(e);return n.createElement("section",{className:"margin-vert--lg"},t.map((e=>n.createElement(f,{key:e.letter,letterEntry:e}))))}},7321:function(e,t,a){a.d(t,{M:function(){return r},P:function(){return l}});var n=a(93969);const r=()=>(0,n.I)({id:"theme.tags.tagsPageTitle",message:"Tags",description:"The title of the tag list page"});function l(e){const t={};return Object.values(e).forEach((e=>{const a=function(e){return e[0].toUpperCase()}(e.label);null!=t[a]||(t[a]=[]),t[a].push(e)})),Object.entries(t).sort((([e],[t])=>e.localeCompare(t))).map((([e,t])=>({letter:e,tags:t.sort(((e,t)=>e.label.localeCompare(t.label)))})))}}}]);
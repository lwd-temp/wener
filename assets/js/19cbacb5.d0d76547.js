"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[98574],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},m="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,u=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,d=m["".concat(u,".").concat(f)]||m[f]||s[f]||a;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},22560:function(e,t,r){r.r(t),r.d(t,{assets:function(){return w},contentTitle:function(){return b},default:function(){return v},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return k}});var n=r(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&p(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&p(e,r,t[r]);return e},s=(e,t)=>a(e,i(t)),f=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const d={title:"Remix"},b="Remix",y={unversionedId:"web/framework/remix",id:"web/framework/remix",title:"Remix",description:"- remix-run/remix",source:"@site/../notes/web/framework/remix.md",sourceDirName:"web/framework",slug:"/web/framework/remix",permalink:"/notes/web/framework/remix",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/remix.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1653188491,formattedLastUpdatedAt:"May 22, 2022",frontMatter:{title:"Remix"},sidebar:"docs",previous:{title:"remax",permalink:"/notes/web/framework/remax"},next:{title:"Riot",permalink:"/notes/web/framework/riot"}},w={},k=[],x={toc:k},g="wrapper";function v(e){var t=e,{components:r}=t,o=f(t,["components"]);return(0,n.kt)(g,s(m(m({},x),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"remix"}),"Remix"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/remix-run/remix"}),"remix-run/remix"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e React \u7684\u5f00\u53d1\u6846\u67b6"),(0,n.kt)("li",{parentName:"ul"},"\u5185\u7f6e form \u5904\u7406"),(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c NextJS"))),(0,n.kt)("li",{parentName:"ul"},"serverBuildTarget",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 node-cjs"),(0,n.kt)("li",{parentName:"ul"},"arc, cloudflare-pages, cloudflare-workers, deno, netlify, node-cjs, vercel,")))),(0,n.kt)("admonition",m({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Live Reload not working ",(0,n.kt)("a",m({parentName:"li"},{href:"https://github.com/remix-run/remix/issues/1601"}),"#1601")))),(0,n.kt)("admonition",m({},{type:"info"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u6846\u67b6\u8026\u5408\u7a0b\u5ea6: remix > nextjs > vite"))),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"npx create-remix@latest\n")),(0,n.kt)("pre",null,(0,n.kt)("code",m({parentName:"pre"},{className:"language-ts"}),'export async function loader({ request }) {\n  return getProjects();\n}\n\nexport async function action({ request }) {\n  const form = await request.formData();\n  return createProject({ title: form.get("title") });\n}\n\nexport default function Projects() {\n  const projects = useLoaderData();\n  const { state } = useTransition();\n  const busy = state === "submitting";\n\n  return (\n    <div>\n      {projects.map((project) => (\n        <Link to={project.slug}>{project.title}</Link>\n      ))}\n\n      <Form method="post">\n        <input name="title" />\n        <button type="submit" disabled={busy}>\n          {busy ? "Creating..." : "Create New Project"}\n        </button>\n      </Form>\n    </div>\n  );\n}\n')))}v.isMDXComponent=!0}}]);
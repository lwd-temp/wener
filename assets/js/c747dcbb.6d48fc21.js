"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[76209],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return c}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function i(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?i(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):i(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function u(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},i=Object.keys(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)a=i[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):l(l({},t),e)),a},m=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},o="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},k=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,i=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),o=s(a),k=r,c=o["".concat(p,".").concat(k)]||o[k]||d[k]||i;return a?n.createElement(c,l(l({ref:t},m),{},{components:a})):n.createElement(c,l({ref:t},m))}));function c(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=a.length,l=new Array(i);l[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[o]="string"==typeof e?e:r,l[1]=u;for(var s=2;s<i;s++)l[s]=a[s];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}k.displayName="MDXCreateElement"},54446:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return N},default:function(){return v},frontMatter:function(){return c},metadata:function(){return b},toc:function(){return h}});var n=a(49613),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,o=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&m(e,a,t[a]);if(u)for(var a of u(t))s.call(t,a)&&m(e,a,t[a]);return e},d=(e,t)=>i(e,l(t)),k=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&u)for(var n of u(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a};const c={title:"ESBuild"},N="ESBuild",b={unversionedId:"web/dev/bundle/esbuild",id:"web/dev/bundle/esbuild",title:"ESBuild",description:"- evanw/esbuild",source:"@site/../notes/web/dev/bundle/esbuild.md",sourceDirName:"web/dev/bundle",slug:"/web/dev/bundle/esbuild",permalink:"/notes/web/dev/bundle/esbuild",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/dev/bundle/esbuild.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1695042174,formattedLastUpdatedAt:"Sep 18, 2023",frontMatter:{title:"ESBuild"},sidebar:"docs",previous:{title:"Bundle FAQ",permalink:"/notes/web/dev/bundle/faq"},next:{title:"ncc",permalink:"/notes/web/dev/bundle/ncc"}},f={},h=[{value:"\u53ea bundle \u5185\u90e8\u6587\u4ef6",id:"\u53ea-bundle-\u5185\u90e8\u6587\u4ef6",level:2},{value:"Plugins",id:"plugins",level:2},{value:"Spliting",id:"spliting",level:2},{value:"Dynamic require of &quot;fs&quot; is not supported",id:"dynamic-require-of-fs-is-not-supported",level:2},{value:"<code>__dirname</code> and <code>__filename</code>",id:"__dirname-and-__filename",level:2},{value:"The presence of &quot;exports&quot; here makes importing a directory forbidden:",id:"the-presence-of-exports-here-makes-importing-a-directory-forbidden",level:2},{value:"transpiling external modules",id:"transpiling-external-modules",level:2},{value:"Transforming JavaScript decorators to the configured target environment (&quot;node18.16.0&quot;) is not supported yet",id:"transforming-javascript-decorators-to-the-configured-target-environment-node18160-is-not-supported-yet",level:2}],g={toc:h},y="wrapper";function v(e){var t=e,{components:a}=t,r=k(t,["components"]);return(0,n.kt)(y,d(o(o({},g),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",o({},{id:"esbuild"}),"ESBuild"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/evanw/esbuild"}),"evanw/esbuild"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MIT, Go"),(0,n.kt)("li",{parentName:"ul"},"bundler & minifier"))),(0,n.kt)("li",{parentName:"ul"},"used by Vite, Snowpack"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://esbuild.github.io/faq/#upcoming-roadmap"}),"roadmap")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://esbuild.github.io/api/"}),"https://esbuild.github.io/api/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://esbuild.github.io/"}),"https://esbuild.github.io/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5305\u542b\u6027\u80fd\u5bf9\u6bd4"),(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u6682\u65e0 swc",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/evanw/esbuild/issues/762"}),"https://github.com/evanw/esbuild/issues/762")),(0,n.kt)("li",{parentName:"ul"},"swc not ready"))))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://esbuild.egoist.dev/"}),"Playground"))),(0,n.kt)("admonition",o({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u7528\u6765 Bundle ESM"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u7528\u6765 Dev \u65f6\u672c\u5730\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u63a8\u8350\u751f\u4ea7 Rollup - Vite"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 iife, esm, cjs"))),(0,n.kt)("admonition",o({},{type:"info"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"ES5+"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 decorator",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/evanw/esbuild/issues/104"}),"https://github.com/evanw/esbuild/issues/104")))),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 emitDecoratorMetadata",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/evanw/esbuild/issues/257"}),"#257")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/thomaschaaf/esbuild-plugin-tsc"}),"thomaschaaf/esbuild-plugin-tsc"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u6162"))),(0,n.kt)("li",{parentName:"ul"},"reflect-metadata"))),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 \u4ee3\u7801\u5207\u5206"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 HTML, CSS"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 TLA - WIP, iife",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"--banner:js='(async () => {' --footer:js='})()'")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/evanw/esbuild/issues/253"}),"#253")))),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 systemjs, amd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/evanw/esbuild/issues/192"}),"#192")))),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 umd - ",(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/evanw/esbuild/issues/507"}),"#507")),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 Bundle CSS Module ",(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/evanw/esbuild/issues/20"}),"#20")),(0,n.kt)("li",{parentName:"ul"},"tsconfig.paths \u4e0d bundled \u65f6\u4e0d\u4f1a\u5904\u7406 ",(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/evanw/esbuild/issues/394"}),"#394"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5199\u5e93\u53ea\u80fd\u7528\u76f8\u5bf9\u8def\u5f84"))),(0,n.kt)("li",{parentName:"ul"},"Support dynamic imports ",(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/evanw/esbuild/issues/700"}),"#700"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"dynamic import ",(0,n.kt)("strong",{parentName:"li"},"\u4e0d\u4f1a")," \u88ab bundle"))),(0,n.kt)("li",{parentName:"ul"},"Support jsx automatic runtime ",(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/evanw/esbuild/issues/334"}),"#334"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u5fc5\u987b ",(0,n.kt)("inlineCode",{parentName:"li"},"import React"),", \u9700\u8981\u8c03\u6574 lint \u914d\u7f6e"),(0,n.kt)("li",{parentName:"ul"},"Bundle \u53ef\u8003\u8651\u4e00\u6b21 inject ",(0,n.kt)("a",o({parentName:"li"},{href:"https://esbuild.github.io/content-types/#jsx"}),"https://esbuild.github.io/content-types/#jsx")),(0,n.kt)("li",{parentName:"ul"},"eslint ",(0,n.kt)("inlineCode",{parentName:"li"},"'react/react-in-jsx-scope': 'error'")))))),(0,n.kt)("admonition",o({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"watch \u4f7f\u7528 polling \u5b9e\u73b0 - \u65e0\u4efb\u4f55\u64cd\u4f5c\u4e5f\u4f1a\u6d88\u8017\u4e00\u70b9 CPU"),(0,n.kt)("li",{parentName:"ul"},"watch \u65e0\u6cd5\u68c0\u6d4b\u5230\u65b0\u6587\u4ef6"))),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"esbuild example.js --outfile=out.js\nesbuild --bundle main.ts --outdir=dist --minify --sourcemap\n\nesbuild src/modules/*/{index.tsx,manifest.json} --serve=8000 --splitting --outdir=out --format=esm --bundle --charset=utf8 --target=chrome90 --sourcemap --minify\n\n# stdin -> stdout\necho 'export const OK = process.env.NODE_ENV === \"producation\"' | pnpm exec esbuild --format=esm\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",o({parentName:"tr"},{align:null}),"flag"),(0,n.kt)("th",o({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"--bundle"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u5305\u542b\u6240\u6709\u4f9d\u8d56")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"--loader:.js=jsx"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u5141\u8bb8 js \u5305\u542b jsx \u8bed\u6cd5")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"--define:DEBUG=true"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u66ff\u4ee3 DEBUG")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"--platform=browser,node,neutral"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u9ed8\u8ba4 browser")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"--external:@strapi"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u4f5c\u4e3a\u5916\u90e8\u4f9d\u8d56")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"--splitting"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u62c6\u5206 chunk - \u62bd\u53d6\u516c\u5171\u90e8\u5206")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"--charset=utf8"),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"\u907f\u514d\u7f16\u7801")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"--target"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),"--sourcemap=linked"),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--servedir <dir>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",o({parentName:"tr"},{align:null}),(0,n.kt)("inlineCode",{parentName:"td"},"--format <format>")),(0,n.kt)("td",o({parentName:"tr"},{align:null}),"iife, cjs, esm")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"--platform",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"browser",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},'\u9690\u542b: --format=iife --condition=browser --define:process.env.NODE_ENV="production" --main-fields=browser,module,main'),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 package.json \u4e2d\u7684 ",(0,n.kt)("a",o({parentName:"li"},{href:"https://gist.github.com/defunctzombie/4339901/49493836fb873ddaa4b8a7aa0ef2352119f69211"}),"browser"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982: path -> path-browserify"))),(0,n.kt)("li",{parentName:"ul"},"main - \u5982\u679c\u6ca1\u6709 browser \u6709 main \u548c module \u5219\u4f1a\u5148\u7528 main - cjs \u66f4\u517c\u5bb9"))),(0,n.kt)("li",{parentName:"ul"},"node",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9690\u542b: --format=cjs --condition=node --main-fields=module,main --external=fs,url,http"),(0,n.kt)("li",{parentName:"ul"},"\u81ea\u52a8 external node \u7684\u5185\u5efa api"))),(0,n.kt)("li",{parentName:"ul"},"neutral",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u9690\u542b: --format=esm"))))),(0,n.kt)("li",{parentName:"ul"},"--minify",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"--minify-whitespace"),(0,n.kt)("li",{parentName:"ul"},"--minify-identifiers"),(0,n.kt)("li",{parentName:"ul"},"--minify-syntax - \u79fb\u9664 if(false) \u4ee3\u7801"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://esbuild.github.io/api/#minify-considerations"}),"Considerations")))),(0,n.kt)("li",{parentName:"ul"},"--external:",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/assets/*.png")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"@foo/bar")," \u9690\u542b ",(0,n.kt)("inlineCode",{parentName:"li"},"@foo/bar/*")))),(0,n.kt)("li",{parentName:"ul"},"--target",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"chrome, edge, firefox, hermes, ie, ios, node, opera, rhino, safari"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u66f4\u8be6\u7ec6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"esnext, es2020, es5, es5, node12, node19"),(0,n.kt)("li",{parentName:"ul"},"chrome90"))),(0,n.kt)("li",{parentName:"ul"},"\u4e5f\u53ef\u4ee5\u4f7f\u7528 supported \u63a7\u5236\u7279\u6027"))),(0,n.kt)("li",{parentName:"ul"},"--supported - ",(0,n.kt)("a",o({parentName:"li"},{href:"https://esbuild.github.io/api/#supported"}),"https://esbuild.github.io/api/#supported")),(0,n.kt)("li",{parentName:"ul"},"--sourcemap",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"linked - ",(0,n.kt)("inlineCode",{parentName:"li"},"//# sourceMappingURL=")),(0,n.kt)("li",{parentName:"ul"},"external - \u65e0 sourceMappingURL"),(0,n.kt)("li",{parentName:"ul"},"inline"),(0,n.kt)("li",{parentName:"ul"},"both"))),(0,n.kt)("li",{parentName:"ul"},"--servedir",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u914d\u5408 script \u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'<script src="js/app.js"><\/script>')))),(0,n.kt)("li",{parentName:"ul"},"--loader",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"js - .js, .cjs, .mjs"),(0,n.kt)("li",{parentName:"ul"},"ts - .ts, .tsx, .mts, .cts"),(0,n.kt)("li",{parentName:"ul"},"jsx/tsx - .jsx"),(0,n.kt)("li",{parentName:"ul"},"json - .json"),(0,n.kt)("li",{parentName:"ul"},"css - .css"),(0,n.kt)("li",{parentName:"ul"},"text - .txt"),(0,n.kt)("li",{parentName:"ul"},"binary",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Uint8Array"),(0,n.kt)("li",{parentName:"ul"},"uint8array.buffer -> ArrayBuffer"))),(0,n.kt)("li",{parentName:"ul"},"base64"),(0,n.kt)("li",{parentName:"ul"},"dataurl"),(0,n.kt)("li",{parentName:"ul"},"file"),(0,n.kt)("li",{parentName:"ul"},"copy",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u590d\u5236\u6587\u4ef6\u5230 outdir - \u4fee\u6539 import \u8def\u5f84"))))),(0,n.kt)("li",{parentName:"ul"},"cdn url",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://unpkg.com"}),"https://unpkg.com")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/egoist/play-esbuild/blob/main/src/lib/esbuild.ts#L34"}),"https://github.com/egoist/play-esbuild/blob/main/src/lib/esbuild.ts#L34"))))),(0,n.kt)("admonition",o({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"chrome90 \u4f1a\u5904\u7406 ",(0,n.kt)("inlineCode",{parentName:"li"},"?.")),(0,n.kt)("li",{parentName:"ul"},"chrome70 \u4f1a\u5904\u7406 ",(0,n.kt)("inlineCode",{parentName:"li"},"??")))),(0,n.kt)("h2",o({},{id:"\u53ea-bundle-\u5185\u90e8\u6587\u4ef6"}),"\u53ea bundle \u5185\u90e8\u6587\u4ef6"),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-js",metastring:'title="build.cjs"',title:'"build.cjs"'}),"const path = require('path');\nconst pkg = require(path.resolve('./package.json'));\n\nconst external = [\n  ...Object.keys(pkg.dependencies || {}),\n  ...Object.keys(pkg.peerDependencies || {}),\n  'react-is',\n  'shallowequal',\n  'hoist-non-react-statics',\n].sort();\n\nconsole.log(`externals`, external);\n\nrequire('esbuild').buildSync({\n  entryPoints: ['admin/src/components/Wysiwyg/index.js'],\n  loader: { '.js': 'jsx' },\n  format: 'esm',\n  bundle: true,\n  minify: false,\n  sourcemap: false,\n  target: ['esnext'],\n  outfile: 'dist/Wysiwyg.esm.js',\n  external,\n  logLevel: 'info',\n});\n")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"grep '^// ' ./dist/Wysiwyg.esm.js                     # bundled\ngrep '^// ' ./dist/Wysiwyg.esm.js | grep node_modules # bundled externals\n")),(0,n.kt)("h2",o({},{id:"plugins"}),"Plugins"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/esbuild/community-plugins"}),"https://github.com/esbuild/community-plugins")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://esbuild.github.io/plugins"}),"https://esbuild.github.io/plugins")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://mdxjs.com/packages/esbuild/"}),"https://mdxjs.com/packages/esbuild/"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"@mdx-js/esbuild")))),(0,n.kt)("h2",o({},{id:"spliting"}),"Spliting"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8bd5\u9a8c\u9636\u6bb5"),(0,n.kt)("li",{parentName:"ul"},"\u63d0\u53d6\u591a\u4e2a entrypoint \u7684 common \u90e8\u5206"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://esbuild.github.io/api/#splitting"}),"https://esbuild.github.io/api/#splitting"))),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"esbuild home.ts about.ts --bundle --splitting --outdir=out --format=esm\n")),(0,n.kt)("h2",o({},{id:"dynamic-require-of-fs-is-not-supported"}),'Dynamic require of "fs" is not supported'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/evanw/esbuild/issues/1921"}),"https://github.com/evanw/esbuild/issues/1921"))),(0,n.kt)("h2",o({},{id:"__dirname-and-__filename"}),(0,n.kt)("inlineCode",{parentName:"h2"},"__dirname")," and ",(0,n.kt)("inlineCode",{parentName:"h2"},"__filename")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"format \u4e3a esm \u7684\u65f6\u5019\u53ef\u80fd\u51fa\u73b0"),(0,n.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 banner \u89e3\u51b3")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-bash"}),"# __dirname, __filename \u7528\u52a8\u6001 import \u6784\u5efa\uff0c\u907f\u514d\u51b2\u7a81\nnpx esbuild --banner:js=\"import { createRequire } from 'module';const require = createRequire(import.meta.url);var __filename;var __dirname;{const {fileURLToPath} = await import('url');const {dirname} = await import('path');var __filename = fileURLToPath(import.meta.url); __dirname = dirname(__filename)};\"\n")),(0,n.kt)("pre",null,(0,n.kt)("code",o({parentName:"pre"},{className:"language-ts"}),"import { createRequire } from 'module';\nconst require = createRequire(import.meta.url);\nimport path from 'path';\nimport { fileURLToPath } from 'url';\nconst __filename = fileURLToPath(import.meta.url);\nconst __dirname = path.dirname(__filename);\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/evanw/esbuild/issues/1921"}),"https://github.com/evanw/esbuild/issues/1921"))),(0,n.kt)("h2",o({},{id:"the-presence-of-exports-here-makes-importing-a-directory-forbidden"}),'The presence of "exports" here makes importing a directory forbidden:'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u6dfb\u52a0 index.js")),(0,n.kt)("h2",o({},{id:"transpiling-external-modules"}),"transpiling external modules"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/remix-run/remix/issues/1423"}),"https://github.com/remix-run/remix/issues/1423"))),(0,n.kt)("h2",o({},{id:"transforming-javascript-decorators-to-the-configured-target-environment-node18160-is-not-supported-yet"}),'Transforming JavaScript decorators to the configured target environment ("node18.16.0") is not supported yet'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",o({parentName:"li"},{href:"https://github.com/evanw/esbuild/issues/104"}),"https://github.com/evanw/esbuild/issues/104"))))}v.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[79145],{49613:function(e,r,t){t.d(r,{Zo:function(){return u},kt:function(){return m}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),i=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},u=function(e){var r=i(e.components);return n.createElement(l.Provider,{value:r},e.children)},p="mdxType",f={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},b=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=i(t),b=o,m=p["".concat(l,".").concat(b)]||p[b]||f[b]||a;return t?n.createElement(m,c(c({ref:r},u),{},{components:t})):n.createElement(m,c({ref:r},u))}));function m(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,c=new Array(a);c[0]=b;var s={};for(var l in r)hasOwnProperty.call(r,l)&&(s[l]=r[l]);s.originalType=e,s[p]="string"==typeof e?e:o,c[1]=s;for(var i=2;i<a;i++)c[i]=t[i];return n.createElement.apply(null,c)}return n.createElement.apply(null,t)}b.displayName="MDXCreateElement"},84257:function(e,r,t){t.r(r),t.d(r,{assets:function(){return y},contentTitle:function(){return w},default:function(){return h},frontMatter:function(){return m},metadata:function(){return d},toc:function(){return v}});var n=t(49613),o=Object.defineProperty,a=Object.defineProperties,c=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,u=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,p=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&u(e,t,r[t]);if(s)for(var t of s(r))i.call(r,t)&&u(e,t,r[t]);return e},f=(e,r)=>a(e,c(r)),b=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&s)for(var n of s(e))r.indexOf(n)<0&&i.call(e,n)&&(t[n]=e[n]);return t};const m={title:"Electron Browser"},w="Electron Browser",d={unversionedId:"web/framework/electron/electron-browser",id:"web/framework/electron/electron-browser",title:"Electron Browser",description:"BEAKER",source:"@site/../notes/web/framework/electron/electron-browser.md",sourceDirName:"web/framework/electron",slug:"/web/framework/electron/browser",permalink:"/notes/web/framework/electron/browser",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/web/framework/electron/electron-browser.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1669864776,formattedLastUpdatedAt:"Dec 1, 2022",frontMatter:{title:"Electron Browser"},sidebar:"docs",previous:{title:"Electron Awesome",permalink:"/notes/web/framework/electron/awesome"},next:{title:"electron-builder",permalink:"/notes/web/framework/electron/builder"}},y={},v=[{value:"BEAKER",id:"beaker",level:2}],O={toc:v},g="wrapper";function h(e){var r=e,{components:t}=r,o=b(r,["components"]);return(0,n.kt)(g,f(p(p({},O),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"electron-browser"}),"Electron Browser"),(0,n.kt)("h2",p({},{id:"beaker"}),"BEAKER"),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-js"}),"// \u81ea\u5b9a\u4e49 userData - \u6d4b\u8bd5\n// app.setPath('userData', getEnvVar('BEAKER_USER_DATA_PATH'))\n\nprocess.env['ELECTRON_DISABLE_SECURITY_WARNINGS'] = '1'; // we know, we know\n\n// enable the sandbox\napp.enableSandbox();\n\n// HACK fix for cors in custom protocols\n// see https://github.com/electron/electron/issues/20730\napp.commandLine.appendSwitch('disable-features', 'OutOfBlinkCors');\n\n// enable process reuse to speed up navigations\n// see https://github.com/electron/electron/issues/18397\napp.allowRendererProcessReuse = true;\n\n// configure the protocols\nprotocol.registerSchemesAsPrivileged([\n  {\n    scheme: 'dat',\n    privileges: { standard: true, secure: true, allowServiceWorkers: true, supportFetchAPI: true, corsEnabled: true },\n  },\n  {\n    scheme: 'hyper',\n    privileges: {\n      standard: true,\n      secure: true,\n      allowServiceWorkers: true,\n      supportFetchAPI: true,\n      corsEnabled: true,\n      stream: true,\n    },\n  },\n  {\n    scheme: 'beaker',\n    privileges: { standard: true, secure: true, allowServiceWorkers: true, supportFetchAPI: true, corsEnabled: true },\n  },\n]);\n")))}h.isMDXComponent=!0}}]);
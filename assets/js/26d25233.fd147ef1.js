"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[96057],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return d}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),u=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(l.Provider,{value:t},e.children)},f="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),f=u(r),h=a,d=f["".concat(l,".").concat(h)]||f[h]||s[h]||o;return r?n.createElement(d,i(i({ref:t},p),{},{components:r})):n.createElement(d,i({ref:t},p))}));function d(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=h;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:a,i[1]=c;for(var u=2;u<o;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}h.displayName="MDXCreateElement"},9318:function(e,t,r){r.r(t),r.d(t,{assets:function(){return y},contentTitle:function(){return m},default:function(){return g},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return v}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,f=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(c)for(var r of c(t))u.call(t,r)&&p(e,r,t[r]);return e},s=(e,t)=>o(e,i(t)),h=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const d={title:"PKCE"},m="PKCE",k={unversionedId:"service/auth/oauth/pkce",id:"service/auth/oauth/pkce",title:"PKCE",description:"- PKCE=Proof Key for Code Exchange",source:"@site/../notes/service/auth/oauth/pkce.md",sourceDirName:"service/auth/oauth",slug:"/service/auth/oauth/pkce",permalink:"/notes/service/auth/oauth/pkce",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/oauth/pkce.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1633860901,formattedLastUpdatedAt:"Oct 10, 2021",frontMatter:{title:"PKCE"},sidebar:"docs",previous:{title:"OpenID Connect",permalink:"/notes/service/auth/oauth/oidc"},next:{title:"oauth2-proxy",permalink:"/notes/service/auth/oauth2-proxy"}},y={},v=[],b={toc:v},O="wrapper";function g(e){var t=e,{components:r}=t,a=h(t,["components"]);return(0,n.kt)(O,s(f(f({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",f({},{id:"pkce"}),"PKCE"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"PKCE=Proof Key for Code Exchange"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://oauth.net/2/pkce/"}),"https://oauth.net/2/pkce/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc7636"}),"https://datatracker.ietf.org/doc/html/rfc7636")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://auth0.com/docs/authorization/flows/authorization-code-flow-with-proof-key-for-code-exchange-pkce"}),"Authorization Code Flow with Proof Key for Code Exchange")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",f({parentName:"li"},{href:"https://dropbox.tech/developers/pkce--what-and-why-"}),"PKCE: What and Why?")))),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e authorization code flow \u7528\u4e8e\u66ff\u4ee3 implicit flow - \u907f\u514d\u56de\u8df3\u65f6\u9644\u52a0 access_token",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u8bf7\u6c42\u6dfb\u52a0 code_challenge, code_challenge_method",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"code_challenge=base64(sha256(client_verifier))",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u53ef\u80fd S256 \u52a0\u5bc6"))),(0,n.kt)("li",{parentName:"ul"},"code_challenge_method=plain,S256"),(0,n.kt)("li",{parentName:"ul"},"\u6b64\u65f6\u6784\u5efa code_verifier \u4f46\u4e0d\u53d1\u9001"))),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u54cd\u5e94 authorization_code"),(0,n.kt)("li",{parentName:"ul"},"\u5ba2\u6237\u7aef\u8bf7\u6c42 token \u63a5\u53e3 - code={authorization_code},code_verifier,grant_type=authorization_code"),(0,n.kt)("li",{parentName:"ul"},"\u670d\u52a1\u7aef\u68c0\u67e5 \u57fa\u4e8e\u521d\u59cb\u8bf7\u6c42\u7684 code_challenge \u68c0\u67e5 code_verifier"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u68c0\u67e5\u54cd\u5e94 access_token")))))}g.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[64819],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return g}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),u=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},c=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),s=u(r),d=a,g=s["".concat(p,".").concat(d)]||s[d]||m[d]||l;return r?n.createElement(g,i(i({ref:t},c),{},{components:r})):n.createElement(g,i({ref:t},c))}));function g(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,i=new Array(l);i[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[s]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},42113:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return y},default:function(){return h},frontMatter:function(){return g},metadata:function(){return k},toc:function(){return b}});var n=r(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))u.call(t,r)&&c(e,r,t[r]);return e},m=(e,t)=>l(e,i(t)),d=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const g={title:"age"},y="age",k={unversionedId:"security/crypto/age",id:"security/crypto/age",title:"age",description:"- FiloSottile/age",source:"@site/../notes/security/crypto/age.md",sourceDirName:"security/crypto",slug:"/security/crypto/age",permalink:"/notes/security/crypto/age",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/security/crypto/age.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1700666411,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{title:"age"},sidebar:"docs",previous:{title:"Crypto",permalink:"/notes/security/crypto/"},next:{title:"Crypto Glossary",permalink:"/notes/security/crypto/glossary"}},f={},b=[],N={toc:b},O="wrapper";function h(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(O,m(s(s({},N),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"age"}),"age"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/FiloSottile/age"}),"FiloSottile/age"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BSD-3, Go"),(0,n.kt)("li",{parentName:"ul"},"\u7b80\u5355\u52a0\u5bc6\u5de5\u5177"),(0,n.kt)("li",{parentName:"ul"},"\u6587\u4ef6\u7ef4\u5ea6")))),(0,n.kt)("admonition",s({},{type:"caution"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"age \u4e0d\u652f\u6301 ssh agent - ",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/FiloSottile/age/discussions/244"}),"age#244")))),(0,n.kt)("pre",null,(0,n.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"apk add age      # AlpineLinux\nbrew install age # macOS\n\nage-keygen -o key.txt # \u521b\u5efa key\n\nage -e -p -o secret.txt.age secret.txt # \u4f7f\u7528\u5bc6\u7801\u52a0\u5bc6 - \u9ed8\u8ba4\u8f93\u51fa\u4e3a binary \u9664\u975e -a,--armor\nage -d secret.txt.age                  # \u89e3\u5bc6\nage -e -i passwd.txt secret.txt        # \u4f7f\u7528 passwd.txt \u505a\u5bf9\u79f0\u52a0\u5bc6\n\n# \u76ee\u5f55\u52a0\u5bc6\ntar cvz ~/data | age -r $RECIPIENT > data.tar.gz.age\nage --decrypt -i key.txt data.tar.gz.age > data.tar.gz\n\nage -R ~/.ssh/id_ed25519.pub example.jpg > example.jpg.age # \u4f7f\u7528 SSH pubkey \u52a0\u5bc6\nage -d -i ~/.ssh/id_ed25519 example.jpg.age > example.jpg  # \u4f7f\u7528 SSH private key \u89e3\u5bc6\n")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",s({parentName:"tr"},{align:null}),"flag"),(0,n.kt)("th",s({parentName:"tr"},{align:null}),"for"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"-e, --encrypt"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u52a0\u5bc6 - \u9ed8\u8ba4")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"-d, --decrypt"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u89e3\u5bc6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"-o, --output OUTPUT"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u8f93\u51fa\u6587\u4ef6")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"-a, --armor"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u8f93\u51fa PEM \u683c\u5f0f")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"-p, --passphrase"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u4f7f\u7528\u5bc6\u7801")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"-r, --recipient RECIPIENT"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u52a0\u5bc6\u7ed9\u63a5\u6536\u4eba")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"-R, --recipients-file PATH"),(0,n.kt)("td",s({parentName:"tr"},{align:null}),"\u63a5\u6536\u4eba\u5217\u8868\u76ee\u5f55")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",s({parentName:"tr"},{align:null}),"-i, --identity PATH"),(0,n.kt)("td",s({parentName:"tr"},{align:null}))))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"recipient \u4e3a pubkey",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u884c\u4e00\u4e2a"),(0,n.kt)("li",{parentName:"ul"},"age pubkey \u683c\u5f0f\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"ageXXXXX")," - X25519"),(0,n.kt)("li",{parentName:"ul"},"ssh pubkey \u683c\u5f0f\u4e3a ",(0,n.kt)("inlineCode",{parentName:"li"},"ssh-ed25519 AAAA"),", ",(0,n.kt)("inlineCode",{parentName:"li"},"ssh-rsa AAAA")))),(0,n.kt)("li",{parentName:"ul"},"identity \u4e3a key - ",(0,n.kt)("inlineCode",{parentName:"li"},"AGE-SECRET-KEY-1"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e00\u884c\u4e00\u4e2a")))))}h.isMDXComponent=!0}}]);
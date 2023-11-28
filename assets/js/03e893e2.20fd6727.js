"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[99481],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return b}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},l=Object.keys(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)r=l[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var u=a.createContext({}),p=function(e){var t=a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,l=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=p(r),k=n,b=m["".concat(u,".").concat(k)]||m[k]||c[k]||l;return r?a.createElement(b,i(i({ref:t},s),{},{components:r})):a.createElement(b,i({ref:t},s))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=r.length,i=new Array(l);i[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[m]="string"==typeof e?e:n,i[1]=o;for(var p=2;p<l;p++)i[p]=r[p];return a.createElement.apply(null,i)}return a.createElement.apply(null,r)}k.displayName="MDXCreateElement"},3690:function(e,t,r){r.r(t),r.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return v},frontMatter:function(){return b},metadata:function(){return h},toc:function(){return N}});var a=r(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(o)for(var r of o(t))p.call(t,r)&&s(e,r,t[r]);return e},c=(e,t)=>l(e,i(t)),k=(e,t)=>{var r={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&p.call(e,a)&&(r[a]=e[a]);return r};const b={title:"Harbor"},d="Habor",h={unversionedId:"devops/kubernetes/app/harbor",id:"devops/kubernetes/app/harbor",title:"Harbor",description:"- goharbor/harbor",source:"@site/../notes/devops/kubernetes/app/harbor.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/harbor",permalink:"/notes/devops/kubernetes/app/harbor",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/app/harbor.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1652772118,formattedLastUpdatedAt:"May 17, 2022",frontMatter:{title:"Harbor"},sidebar:"docs",previous:{title:"FluxCD",permalink:"/notes/devops/kubernetes/app/flux"},next:{title:"Kubernetest Application FAQ",permalink:"/notes/devops/kubernetes/app/k8s-app-faq"}},f={},N=[{value:"\u5b89\u88c5",id:"\u5b89\u88c5",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"\u7ec4\u4ef6",id:"\u7ec4\u4ef6",level:2},{value:"Helm",id:"helm",level:2},{value:"\u5b50\u57df\u540d",id:"\u5b50\u57df\u540d",level:2},{value:"flag provided but not defined: -format",id:"flag-provided-but-not-defined--format",level:2},{value:"Trust not fully operational",id:"trust-not-fully-operational",level:2}],g={toc:N},y="wrapper";function v(e){var t=e,{components:r}=t,n=k(t,["components"]);return(0,a.kt)(y,c(m(m({},g),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"habor"}),"Habor"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/goharbor/harbor"}),"goharbor/harbor"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Kubernetes \u4e0a\u7684\u5bb9\u5668\u955c\u50cf\u4ed3\u5e93"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/goharbor/harbor-helm"}),"goharbor/harbor-helm")," - trusted cloud native repository for Kubernetes"),(0,a.kt)("li",{parentName:"ul"},"\u5c5e\u4e8e CI \u548c CD \u4e4b\u95f4\uff0cNexus \u504f\u5411\u5f00\u53d1\uff0cHarbor \u504f\u5411\u751f\u4ea7\u90e8\u7f72\u4ea4\u4ed8"),(0,a.kt)("li",{parentName:"ul"},"\u7279\u6027",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"trivy \u5b89\u5168\u5206\u6790"),(0,a.kt)("li",{parentName:"ul"},"\u8d26\u53f7\u7ba1\u7406\u3001\u591a\u79df\u6237\u3001RBAC"),(0,a.kt)("li",{parentName:"ul"},"\u955c\u50cf\u526f\u672c\u3001Harbor \u4e4b\u95f4\u526f\u672c\u590d\u5236"),(0,a.kt)("li",{parentName:"ul"},"WebUI"))),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4f1a\u90e8\u7f72 ingress"),(0,a.kt)("li",{parentName:"ul"},"\u8981\u6307\u5b9a externalURL \u786e\u4fdd\u751f\u6210\u5730\u5740\u6b63\u786e"),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u5173\u95ed\u5185\u90e8 TLS - internalTLS"),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"registry - 5Gi"),(0,a.kt)("li",{parentName:"ul"},"chartmuseum - 5Gi"),(0,a.kt)("li",{parentName:"ul"},"jobservice - 1Gi"),(0,a.kt)("li",{parentName:"ul"},"database - 1Gi - \u53ef\u7528\u5916\u90e8",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5982\u679c\u4f7f\u7528\u5185\u90e8\u6570\u636e\u5e93\u8bb0\u5f97\u4fee\u6539\u8d26\u53f7\u5bc6\u7801"))),(0,a.kt)("li",{parentName:"ul"},"redis - 1Gi - \u53ef\u7528\u5916\u90e8"),(0,a.kt)("li",{parentName:"ul"},"trivy - 2Gi"),(0,a.kt)("li",{parentName:"ul"},"imageChartStorage",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 azure,gcs,s3,swift,oss"))))))),(0,a.kt)("li",{parentName:"ul"},"\u7aef\u53e3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"443"),(0,a.kt)("li",{parentName:"ul"},"80"),(0,a.kt)("li",{parentName:"ul"},"4443",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Notary - Docker Content Trust"))))),(0,a.kt)("li",{parentName:"ul"},"\u6587\u6863",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://goharbor.io/docs/2.2.0/install-config/harbor-compatibility-list/"}),"Harbor Compatibility List"))))),(0,a.kt)("admonition",m({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u57df\u540d\u6620\u5c04 Project ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/goharbor/harbor/issues/13579"}),"#13579")),(0,a.kt)("li",{parentName:"ul"},"\u955c\u50cf docker \u65e0\u6cd5\u81ea\u52a8\u6dfb\u52a0 library ",(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/goharbor/harbor/issues/12719"}),"#12719")))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Resource"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Minimum"),(0,a.kt)("th",m({parentName:"tr"},{align:null}),"Recommended"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"CPU"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"2 CPU"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"4 CPU")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Mem"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"4 GB"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"8 GB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",m({parentName:"tr"},{align:null}),"Disk"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"40 GB"),(0,a.kt)("td",m({parentName:"tr"},{align:null}),"160 GB")))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"helm repo add harbor https://helm.goharbor.io\n")),(0,a.kt)("h2",m({},{id:"\u5b89\u88c5"}),"\u5b89\u88c5"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"docker \u5b89\u88c5\u8fc7\u7a0b\u4f1a\u4f7f\u7528 ",(0,a.kt)("inlineCode",{parentName:"li"},"goharbor/prepare")," \u8fdb\u884c\u6784\u5efa\u9700\u8981\u7684 docker compose")),(0,a.kt)("h2",m({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://goharbor.io/docs/2.0.0/install-config/configure-yml-file/"}),"https://goharbor.io/docs/2.0.0/install-config/configure-yml-file/"))),(0,a.kt)("h2",m({},{id:"\u7ec4\u4ef6"}),"\u7ec4\u4ef6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"postgresql"),(0,a.kt)("li",{parentName:"ul"},"redis"),(0,a.kt)("li",{parentName:"ul"},"clari"),(0,a.kt)("li",{parentName:"ul"},"beego"),(0,a.kt)("li",{parentName:"ul"},"chartmuseum"),(0,a.kt)("li",{parentName:"ul"},"docker/distribution"),(0,a.kt)("li",{parentName:"ul"},"docker/notary"),(0,a.kt)("li",{parentName:"ul"},"helm"),(0,a.kt)("li",{parentName:"ul"},"swagger-ui")),(0,a.kt)("h2",m({},{id:"helm"}),"Helm"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"harborAdminPassword: 'Harbor12345'\n\n# \u90e8\u7f72\u7ec4\u4ef6\n# =========\n# \u4e0d\u4f7f\u7528 Ingress \u5219\u4f1a\u90e8\u7f72 nginx\nnginx:\nportal:\ncore:\njobservice:\nregistry:\nchartmuseum:\nclair:\ntrivy:\nnotary:\n\ndatabase:\n  # \u8bbe\u7f6e\u4e3a external \u4f7f\u7528\u5916\u90e8\u6570\u636e\u5e93\n  type: internal\n  # \u914d\u7f6e\u5916\u90e8\u6570\u636e\u5e93\n  external:\n    host: '192.168.0.1'\n    port: '5432'\n    username: 'user'\n    password: 'password'\n    # coreDatabase: \"registry\"\n    # clairDatabase: \"clair\"\n    # notaryServerDatabase: \"notary_server\"\n    # notarySignerDatabase: \"notary_signer\"\nredis:\n  type: internal\n")),(0,a.kt)("h1",m({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",m({},{id:"\u5b50\u57df\u540d"}),"\u5b50\u57df\u540d"),(0,a.kt)("h2",m({},{id:"flag-provided-but-not-defined--format"}),"flag provided but not defined: -format"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Trivy \u63a5\u53e3\u53d8\u5316\uff0charbor \u672a\u5339\u914d - v2.4.2/2.5.0"),(0,a.kt)("li",{parentName:"ul"},"\u53ef\u76f4\u63a5\u6307\u5b9a aquasec/harbor-scanner-trivy v0.25.0+"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/aquasecurity/trivy/issues/1656"}),"aquasecurity/trivy#1656")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/goharbor/harbor/issues/16554"}),"goharbor/harbor#16554"))),(0,a.kt)("h2",m({},{id:"trust-not-fully-operational"}),"Trust not fully operational"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/bitnami/charts/issues/3545"}),"https://github.com/bitnami/charts/issues/3545"))))}v.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[70778],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return f}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function i(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?i(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):i(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var u=n.createContext({}),c=function(e){var t=n.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},s=function(e){var t=c(e.components);return n.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=c(r),m=a,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||i;return r?n.createElement(f,o(o({ref:t},s),{},{components:r})):n.createElement(f,o({ref:t},s))}));function f(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=r.length,o=new Array(i);o[0]=m;var l={};for(var u in t)hasOwnProperty.call(t,u)&&(l[u]=t[u]);l.originalType=e,l[p]="string"==typeof e?e:a,o[1]=l;for(var c=2;c<i;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},27891:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return y}});var n=r(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,p=(e,t)=>{for(var r in t||(t={}))u.call(t,r)&&s(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&s(e,r,t[r]);return e},d=(e,t)=>i(e,o(t)),m=(e,t)=>{var r={};for(var n in e)u.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const f={title:"spicedb"},h="spicedb",b={unversionedId:"service/auth/authz/spicedb",id:"service/auth/authz/spicedb",title:"spicedb",description:"- authzed/spicedb",source:"@site/../notes/service/auth/authz/spicedb.md",sourceDirName:"service/auth/authz",slug:"/service/auth/authz/spicedb",permalink:"/notes/service/auth/authz/spicedb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/authz/spicedb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660268591,formattedLastUpdatedAt:"Aug 12, 2022",frontMatter:{title:"spicedb"},sidebar:"docs",previous:{title:"permify",permalink:"/notes/service/auth/authz/permify"},next:{title:"Dex",permalink:"/notes/service/auth/dex"}},k={},y=[],v={toc:y},_="wrapper";function g(e){var t=e,{components:r}=t,a=m(t,["components"]);return(0,n.kt)(_,d(p(p({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",p({},{id:"spicedb"}),"spicedb"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/authzed/spicedb"}),"authzed/spicedb"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u6570\u636e\u5e93: PostgreSQL, CockroachDB, Cloud Spanner, memdb"))),(0,n.kt)("li",{parentName:"ul"},"Authzed Cloud: < 1M \u5173\u7cfb\u8bb0\u5f55\u514d\u8d39"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Playground ",(0,n.kt)("a",p({parentName:"li"},{href:"https://play.authzed.com/"}),"https://play.authzed.com/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://github.com/authzed/connector-postgresql"}),"authzed/connector-postgresql"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Import PostgreSQL foreign key relationships into SpiceDB"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://authzed.com/blog/user-defined-roles"}),"User Defined Roles"))))),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),"document:specificdocument#reader@user:specificuser\n|_______________________| |____| |_______________|\n        resource         relation     subject\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"API - ",(0,n.kt)("a",p({parentName:"li"},{href:"https://buf.build/authzed/api/docs/main:authzed.api.v1"}),"authzed.api.v1")),(0,n.kt)("li",{parentName:"ul"},"PermissionsService",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CheckPermission",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"resource,permission,subject"),(0,n.kt)("li",{parentName:"ul"},"consistency"))),(0,n.kt)("li",{parentName:"ul"},"ExpandPermissionTree"),(0,n.kt)("li",{parentName:"ul"},"LookupResources"),(0,n.kt)("li",{parentName:"ul"},"{Read,Write,Delete}Relationships"))),(0,n.kt)("li",{parentName:"ul"},"SchemaService"),(0,n.kt)("li",{parentName:"ul"},"WatchService")),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{className:"language-bash"}),'# Docker\ndocker run --rm -it \\\n  -p 50051:50051 \\\n  --name spicedb authzed/spicedb serve \\\n  --grpc-preshared-key "PSK"\n\n# macOS Brew\nbrew install spicedb\n# --grpc-preshared-key "PSK"\nSPICEDB_GRPC_PRESHARED_KEY=PSK spicedb serve\n\n# zed \u4f5c\u4e3a spicedb \u5ba2\u6237\u7aef\nbrew install zed\n\nzed context set local localhost:50051 "PSK" --insecure\nzed schema read --insecure\n')),(0,n.kt)("pre",null,(0,n.kt)("code",p({parentName:"pre"},{}),"definition user {}\n\ndefinition organization {\n  relation administrator: user\n  permission view_all_documents = administrator\n}\n\ndefinition team {\n  relation member: user\n}\n\ndefinition document {\n  relation owner_org: organization\n\n  relation reader: user | team#member\n  relation writer: user\n\n  permission view = reader + owner_org->view_all_documents\n  permission edit = view + writer\n\n  relation peek: user | anonymoususer:*\n  relation retrive: service#token\n}\n\ndefinition anonymoususer {}\n\ndefinition token {}\ndefinition service {\n    token: token\n}\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9700\u8981\u5728\u67d0\u4e2a\u5730\u65b9\u7ef4\u62a4 \u533f\u540d \u7528\u6237 ID"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",p({parentName:"li"},{href:"https://play.authzed.com/s/qli9YpRRUg3x"}),"https://play.authzed.com/s/qli9YpRRUg3x"))))}g.isMDXComponent=!0}}]);
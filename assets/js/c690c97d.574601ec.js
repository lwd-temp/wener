"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[8737],{49613:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var p=n.createContext({}),c=function(e){var t=n.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(p.Provider,{value:t},e.children)},s="mdxType",f={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},g=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,p=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),s=c(r),g=a,m=s["".concat(p,".").concat(g)]||s[g]||f[g]||o;return r?n.createElement(m,i(i({ref:t},u),{},{components:r})):n.createElement(m,i({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=g;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[s]="string"==typeof e?e:a,i[1]=l;for(var c=2;c<o;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}g.displayName="MDXCreateElement"},54025:function(e,t,r){r.r(t),r.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return N},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,u=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,s=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&u(e,r,t[r]);if(l)for(var r of l(t))c.call(t,r)&&u(e,r,t[r]);return e},f=(e,t)=>o(e,i(t)),g=(e,t)=>{var r={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&l)for(var n of l(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={title:"gRPC FAQ",tags:["FAQ"]},d="gRPC FAQ",b={unversionedId:"service/api/grpc/grpc-faq",id:"service/api/grpc/grpc-faq",title:"gRPC FAQ",description:"- Support gRPC over HTTP/3 grpc#19126",source:"@site/../notes/service/api/grpc/grpc-faq.md",sourceDirName:"service/api/grpc",slug:"/service/api/grpc/faq",permalink:"/notes/service/api/grpc/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/grpc/grpc-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1677222278,formattedLastUpdatedAt:"Feb 24, 2023",frontMatter:{title:"gRPC FAQ",tags:["FAQ"]},sidebar:"docs",previous:{title:"channelz",permalink:"/notes/service/api/grpc/channelz"},next:{title:"grpc-gateway",permalink:"/notes/service/api/grpc/gateway"}},h={},k=[{value:"proto3 optional",id:"proto3-optional",level:2},{value:"Trailer",id:"trailer",level:2},{value:"transport: Error while dialing reading server HTTP response: unexpected EOF",id:"transport-error-while-dialing-reading-server-http-response-unexpected-eof",level:2}],v={toc:k},y="wrapper";function N(e){var t=e,{components:r}=t,a=g(t,["components"]);return(0,n.kt)(y,f(s(s({},v),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",s({},{id:"grpc-faq"}),"gRPC FAQ"),(0,n.kt)("admonition",s({},{type:"note"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"Support gRPC over HTTP/3 ",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/grpc/grpc/issues/19126"}),"grpc#19126")),(0,n.kt)("li",{parentName:"ul"},"gRPC tunneling ",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/grpc/grpc/issues/14101"}),"grpc#14101")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/grpc/proposal"}),"grpc/proposal"))),(0,n.kt)("h2",s({},{id:"proto3-optional"}),"proto3 optional"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"optional \u4f1a\u8fd4\u56de zero value",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u533a\u5206\u7a7a\u503c \u548c optional"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528\u989d\u5916\u7684 has \u65b9\u6cd5\u6765\u5224\u65ad\u662f\u5426\u5b58\u5728"))),(0,n.kt)("li",{parentName:"ul"},"proto v3.15 - 2020-04-23 \u589e\u52a0 optional",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"v3.12-v3.14 \u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"--experimental_allow_proto3_optional")),(0,n.kt)("li",{parentName:"ul"},"\u5e95\u5c42\u4f7f\u7528 oneof \u5b9e\u73b0"))),(0,n.kt)("li",{parentName:"ul"},"\u6298\u4e2d\u65b9\u6848",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 oneof"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 google.protobuf.FieldMask"),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Message \u7c7b\u578b - \u8fd8\u662f\u4f1a\u4f7f\u7528 pointer - \u4f8b\u5982 ",(0,n.kt)("inlineCode",{parentName:"li"},"google.protobuf.StringValue")," \u66ff\u4ee3 string"))),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Missing value/null support for scalar value types in proto 3 ",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/protocolbuffers/protobuf/issues/1606"}),"protocolbuffers/protobuf#1606")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/golang/protobuf/issues/15"}),"golang/protobuf#15")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/protocolbuffers/protobuf/blob/main/docs/field_presence.md"}),"protobuf/docs/field_presence.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/edgedb/edgedb-go/issues/150"}),"edgedb-go#150"))))),(0,n.kt)("h2",s({},{id:"trailer"}),"Trailer"),(0,n.kt)("p",null,"gRPC \u5b9e\u73b0\u4f9d\u8d56 HTTP Trailer \u80fd\u529b\uff0c\u7c7b\u4f3c longpulling\u3002"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://carlmastrangelo.com/blog/why-does-grpc-insist-on-trailers"}),"Why Does gRPC Insist on Trailers?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",s({parentName:"li"},{href:"https://developer.mozilla.org/en-US/docs/Web/HTTP/Headers/Trailer"}),"Headers/Trailer")),(0,n.kt)("li",{parentName:"ul"},"fetch \u4e0d\u652f\u6301 trailer ",(0,n.kt)("a",s({parentName:"li"},{href:"https://github.com/whatwg/fetch/issues/981"}),"fetch#981"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u56e0\u6b64 web \u4e0d\u652f\u6301\u76f4\u63a5\u4f7f\u7528 grpc"),(0,n.kt)("li",{parentName:"ul"},"deno \u4e0d\u652f\u6301 grpc - \u5b9e\u73b0\u4e86 fetch")))),(0,n.kt)("h2",s({},{id:"transport-error-while-dialing-reading-server-http-response-unexpected-eof"}),"transport: Error while dialing reading server HTTP response: unexpected EOF"),(0,n.kt)("p",null,"plaintext"))}N.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[26873],{49613:function(t,e,a){a.d(e,{Zo:function(){return u},kt:function(){return c}});var l=a(59496);function r(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function n(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);e&&(l=l.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,l)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?n(Object(a),!0).forEach((function(e){r(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,l,r=function(t,e){if(null==t)return{};var a,l,r={},n=Object.keys(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||(r[a]=t[a]);return r}(t,e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);for(l=0;l<n.length;l++)a=n[l],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(r[a]=t[a])}return r}var m=l.createContext({}),o=function(t){var e=l.useContext(m),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},u=function(t){var e=o(t.components);return l.createElement(m.Provider,{value:e},t.children)},k="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return l.createElement(l.Fragment,{},e)}},s=l.forwardRef((function(t,e){var a=t.components,r=t.mdxType,n=t.originalType,m=t.parentName,u=p(t,["components","mdxType","originalType","parentName"]),k=o(a),s=r,c=k["".concat(m,".").concat(s)]||k[s]||N[s]||n;return a?l.createElement(c,i(i({ref:e},u),{},{components:a})):l.createElement(c,i({ref:e},u))}));function c(t,e){var a=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var n=a.length,i=new Array(n);i[0]=s;var p={};for(var m in e)hasOwnProperty.call(e,m)&&(p[m]=e[m]);p.originalType=t,p[k]="string"==typeof t?t:r,i[1]=p;for(var o=2;o<n;o++)i[o]=a[o];return l.createElement.apply(null,i)}return l.createElement.apply(null,a)}s.displayName="MDXCreateElement"},92049:function(t,e,a){a.r(e),a.d(e,{assets:function(){return d},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return c},metadata:function(){return g},toc:function(){return f}});var l=a(49613),r=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(t,e,a)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))m.call(e,a)&&u(t,a,e[a]);if(p)for(var a of p(e))o.call(e,a)&&u(t,a,e[a]);return t},N=(t,e)=>n(t,i(e)),s=(t,e)=>{var a={};for(var l in t)m.call(t,l)&&e.indexOf(l)<0&&(a[l]=t[l]);if(null!=t&&p)for(var l of p(t))e.indexOf(l)<0&&o.call(t,l)&&(a[l]=t[l]);return a};const c={title:"API Awesome",tags:["Awesome"]},h="API Awesome",g={unversionedId:"service/api/api-awesome",id:"service/api/api-awesome",title:"API Awesome",description:"API/RPC \u8003\u8651\u56e0\u7d20",source:"@site/../notes/service/api/api-awesome.md",sourceDirName:"service/api",slug:"/service/api/awesome",permalink:"/notes/service/api/awesome",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/api/api-awesome.md",tags:[{label:"Awesome",permalink:"/notes/tags/awesome"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1701146597,formattedLastUpdatedAt:"Nov 28, 2023",frontMatter:{title:"API Awesome",tags:["Awesome"]},sidebar:"docs",previous:{title:"Matomo",permalink:"/notes/service/analytics/matomo"},next:{title:"API Design",permalink:"/notes/service/api/design"}},d={},f=[{value:"API/RPC \u8003\u8651\u56e0\u7d20",id:"apirpc-\u8003\u8651\u56e0\u7d20",level:2},{value:"API Gateway \u8003\u8651\u56e0\u7d20",id:"api-gateway-\u8003\u8651\u56e0\u7d20",level:2},{value:"Design",id:"design",level:2},{value:"\u89c4\u8303",id:"\u89c4\u8303",level:2},{value:"RPC",id:"rpc",level:2},{value:"Serialization",id:"serialization",level:2},{value:"Data Gateway",id:"data-gateway",level:2},{value:"OpenAPI",id:"openapi",level:2},{value:"API Gateway",id:"api-gateway",level:2},{value:"\u7ba1\u7406",id:"management",level:2},{value:"Doc",id:"doc",level:2},{value:"Tool",id:"tool",level:2},{value:"Codegen",id:"codegen",level:2},{value:"Produce OpenAPI",id:"produce-openapi",level:2},{value:"\u53c2\u8003",id:"\u53c2\u8003",level:2},{value:"Service Discovery",id:"service-discovery",level:2}],b={toc:f},v="wrapper";function y(t){var e=t,{components:a}=e,r=s(e,["components"]);return(0,l.kt)(v,N(k(k({},b),r),{components:a,mdxType:"MDXLayout"}),(0,l.kt)("h1",k({},{id:"api-awesome"}),"API Awesome"),(0,l.kt)("h2",k({},{id:"apirpc-\u8003\u8651\u56e0\u7d20"}),"API/RPC \u8003\u8651\u56e0\u7d20"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7075\u6d3b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9759\u6001\u7ed3\u6784"),(0,l.kt)("li",{parentName:"ul"},"\u52a8\u6001\u7ed3\u6784"),(0,l.kt)("li",{parentName:"ul"},"\u517c\u5bb9\u6027"))),(0,l.kt)("li",{parentName:"ul"},"\u6027\u80fd",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5ef6\u65f6\u8981\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5bf9\u670d\u52a1"),(0,l.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5bf9\u5ba2\u6237\u7aef"))),(0,l.kt)("li",{parentName:"ul"},"\u5e8f\u5217\u5316",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e8c\u8fdb\u5236"),(0,l.kt)("li",{parentName:"ul"},"\u6587\u672c - JSON"))),(0,l.kt)("li",{parentName:"ul"},"\u8bed\u8a00\u517c\u5bb9",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u652f\u6301\u4ec0\u4e48\u8bed\u8a00"),(0,l.kt)("li",{parentName:"ul"},"\u81ea\u7528\u53ea\u9700\u8003\u8651\u4e2a\u522b\u8bed\u8a00"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u5916\u5219\u9700\u8981\u8003\u8651\u901a\u7528"))),(0,l.kt)("li",{parentName:"ul"},"\u63a5\u53e3\u6a21\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8bf7\u6c42\u54cd\u5e94"),(0,l.kt)("li",{parentName:"ul"},"\u6d41\u5f0f\u8bf7\u6c42"),(0,l.kt)("li",{parentName:"ul"},"\u6d41\u5f0f\u54cd\u5e94"))),(0,l.kt)("li",{parentName:"ul"},"\u89c4\u8303",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u751f\u6210\u53cb\u597d"),(0,l.kt)("li",{parentName:"ul"},"\u5143\u6570\u636e\u4fe1\u606f\u5b8c\u6574"))),(0,l.kt)("li",{parentName:"ul"},"\u573a\u666f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u81ea\u7528 - \u6ee1\u8db3\u5185\u90e8\u4f7f\u7528\u5373\u53ef"),(0,l.kt)("li",{parentName:"ul"},"\u5bf9\u5916 - \u91c7\u7528\u73b0\u6709\u6807\u51c6\u89c4\u8303"))),(0,l.kt)("li",{parentName:"ul"},"\u751f\u6001",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u89c2\u5bdf\u6027",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Metric"),(0,l.kt)("li",{parentName:"ul"},"Trace"))),(0,l.kt)("li",{parentName:"ul"},"\u7f51\u5173"),(0,l.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u4ef6\u611f\u77e5")))),(0,l.kt)("h2",k({},{id:"api-gateway-\u8003\u8651\u56e0\u7d20"}),"API Gateway \u8003\u8651\u56e0\u7d20"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u80fd\u529b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u8d1f\u8d23 \u589e\u5220\u6539 Endpoint - vendor lockin"),(0,l.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u73b0\u6709\u914d\u7f6e - \u63a7\u5236\u80fd\u529b\u5f31"))),(0,l.kt)("li",{parentName:"ul"},"\u53ef\u89c2\u5bdf\u6027\u80fd\u529b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Metric \u96c6\u6210"),(0,l.kt)("li",{parentName:"ul"},"Trace \u96c6\u6210"),(0,l.kt)("li",{parentName:"ul"},"\u5185\u7f6e - \u7f51\u5173\u91c7\u96c6\u3001\u5185\u7f6e\u663e\u793a"),(0,l.kt)("li",{parentName:"ul"},"\u5916\u90e8 - grafana\u3001jeager\u3001prometheus"))),(0,l.kt)("li",{parentName:"ul"},"\u63a7\u5236\u80fd\u529b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Auth"),(0,l.kt)("li",{parentName:"ul"},"Threshold"),(0,l.kt)("li",{parentName:"ul"},"\u6ce8\u5165\u81ea\u5b9a\u4e49\u903b\u8f91 - Hook"))),(0,l.kt)("li",{parentName:"ul"},"\u534f\u8bae\u611f\u77e5\u80fd\u529b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"gRPC"),(0,l.kt)("li",{parentName:"ul"},"HTTP"),(0,l.kt)("li",{parentName:"ul"},"GraphQL"),(0,l.kt)("li",{parentName:"ul"},"TCP\u3001UDP"))),(0,l.kt)("li",{parentName:"ul"},"\u5e73\u53f0\u96c6\u6210\u80fd\u529b",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Kubernetes Service\u3001Annotatation"),(0,l.kt)("li",{parentName:"ul"},"Consul Service"),(0,l.kt)("li",{parentName:"ul"},"ETCD\u3001ZK"))),(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u6a21\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u65e0\u4fb5\u5165 - \u76f4\u63a5\u7f51\u7edc\u62e6\u622a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u7f51\u7edc\u5c42\u5904\u7406 - Cilium"))),(0,l.kt)("li",{parentName:"ul"},"\u4fb5\u5165 - \u4fee\u6539\u4ee3\u7801\u903b\u8f91",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e2d\u95f4\u4ef6 - \u96c6\u6210 metric\u3001trace \u7b49\u80fd\u529b"),(0,l.kt)("li",{parentName:"ul"},"SQL Trace"))),(0,l.kt)("li",{parentName:"ul"},"Sidecar - \u6309\u5e94\u7528\u7f51\u7edc\u62e6\u622a",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u57fa\u7840 metric \u4fe1\u606f\u3001\u53ef\u80fd\u80fd\u5b9e\u73b0 trace \u80fd\u529b"),(0,l.kt)("li",{parentName:"ul"},"Agent \u80fd\u4ee3\u8868\u5e94\u7528\u8eab\u4efd"),(0,l.kt)("li",{parentName:"ul"},"\u901a\u5e38\u8fd8\u80fd\u5b9e\u73b0 E2E \u52a0\u5bc6\u8ba4\u8bc1"))))),(0,l.kt)("li",{parentName:"ul"},"\u5143\u6570\u636e\u5b58\u50a8\u65b9\u5f0f",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"CRD"),(0,l.kt)("li",{parentName:"ul"},"DB - PostgreSQL\u3001MySQL - \u9700\u8981\u989d\u5916\u7ef4\u62a4\u3001\u4f46\u65b9\u4fbf\u6392\u67e5\u4f7f\u7528"),(0,l.kt)("li",{parentName:"ul"},"KV - ETCD\u3001ZK")))),(0,l.kt)("h2",k({},{id:"design"}),"Design"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Google ",(0,l.kt)("a",k({parentName:"li"},{href:"https://google.aip.dev/general"}),"AIP")," - API Improvement Proposals",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://cloud.google.com/apis/design"}),"cloud.google.com/apis")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://opensource.zalando.com/restful-api-guidelines/"}),"Zalando RESTful API and Event Guidelines")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://r.bluethl.net/how-to-design-better-apis"}),"How to design better REST APIs"),(0,l.kt)("ol",{parentName:"li"},(0,l.kt)("li",{parentName:"ol"},"\u4e00\u81f4 - \u5b57\u6bb5\u540d\u3001\u63a5\u53e3\u540d\u3001\u6388\u6743\u3001\u5934\u5904\u7406\u3001\u72b6\u6001\u7801\u3001HTTP \u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ol"},"ISO 8601 Date"),(0,l.kt)("li",{parentName:"ol"},"\u533a\u5206\u4e0d\u9700\u8981\u6388\u6743\u7684\u63a5\u53e3"),(0,l.kt)("li",{parentName:"ol"},"\u63d0\u4f9b GET /health"),(0,l.kt)("li",{parentName:"ol"},"API \u6dfb\u52a0\u7248\u672c - \u4f8b\u5982 /v1/health"),(0,l.kt)("li",{parentName:"ol"},"Accept API key authentication - \u670d\u52a1\u7aef\u5bf9\u670d\u52a1\u7aef"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6b63\u786e\u7684 HTTP \u72b6\u6001\u7801"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6b63\u786e\u7684 HTTP \u65b9\u6cd5"),(0,l.kt)("li",{parentName:"ol"},"Use self-explanatory, simple names"),(0,l.kt)("li",{parentName:"ol"},"\u4f7f\u7528\u6807\u51c6\u7684\u9519\u8bef\u54cd\u5e94 - HTTP \u72b6\u6001\u7801+\u5bf9\u5e94\u6d88\u606f\u4f53"),(0,l.kt)("li",{parentName:"ol"},"\u521b\u5efa\u6210\u529f\u8fd4\u56de\u521b\u5efa\u5185\u5bb9"),(0,l.kt)("li",{parentName:"ol"},"PUT -> PATCH"),(0,l.kt)("li",{parentName:"ol"},"Be as specific as possible"),(0,l.kt)("li",{parentName:"ol"},"Use pagination"),(0,l.kt)("li",{parentName:"ol"},"Allow expanding resources"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://stripe.com/blog/idempotency"}),"https://stripe.com/blog/idempotency")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/microsoft/api-guidelines"}),"microsoft/api-guidelines"))),(0,l.kt)("h2",k({},{id:"\u89c4\u8303"}),"\u89c4\u8303"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://datatracker.ietf.org/doc/html/rfc9110"}),"RFC9110")," HTTP Semantics"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://fapi.openid.net"}),"Financial-grade API")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://docs.microsoft.com/zh-cn/graph/overview"}),"Microsoft Graph"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"github ",(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/microsoftgraph"}),"microsoftgraph")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://developer.microsoft.com/zh-cn/graph/graph-explorer"}),"graph-explorer")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/WangNingkai/OLAINDEX"}),"WangNingkai/OLAINDEX")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://www.asyncapi.com/docs/specifications/v2.3.0"}),"https://www.asyncapi.com/docs/specifications/v2.3.0"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/swaggest/go-asyncapi"}),"swaggest/go-asyncapi")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://medium.com/event-driven-utopia/understanding-asyncapis-with-a-practical-example-ee2b4be221d8"}),"https://medium.com/event-driven-utopia/understanding-asyncapis-with-a-practical-example-ee2b4be221d8")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://swagger.io/specification/"}),"https://swagger.io/specification/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://jsonapi.org/format/"}),"https://jsonapi.org/format/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/webrpc/webrpc"}),"webrpc/webrpc"))),(0,l.kt)("h2",k({},{id:"rpc"}),"RPC"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},(0,l.kt)("strong",{parentName:"p"},"Note")),(0,l.kt)("ul",{parentName:"blockquote"},(0,l.kt)("li",{parentName:"ul"},"rpc \u548c serialization \u4e3b\u8981\u7684\u533a\u522b\u5728\u4e8e ",(0,l.kt)("strong",{parentName:"li"},"\u670d\u52a1")," \u662f\u5426\u4e3a\u7b2c\u4e00\u516c\u6c11"),(0,l.kt)("li",{parentName:"ul"},"\u9664\u4e86 gRPC, jsonrpc \u5176\u4ed6 rpc \u5b9e\u73b0\u57fa\u672c\u90fd\u662f\u8bed\u8a00\u76f8\u5173\u7684",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u610f\u5473\u7740 \u975e\u7b2c\u4e00\u65b9\u8bed\u8a00\u7684\u652f\u6301\u76f8\u5bf9\u8f83\u5f31"))),(0,l.kt)("li",{parentName:"ul"},"gRPC \u662f\u652f\u6301\u6700\u591a\u8bed\u8a00\u7684 RPC \u534f\u8bae"))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",k({parentName:"tr"},{align:null}),"RPC"),(0,l.kt)("th",k({parentName:"tr"},{align:null}),"by"),(0,l.kt)("th",k({parentName:"tr"},{align:null}),"Languages"),(0,l.kt)("th",k({parentName:"tr"},{align:null}),"Notes"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"./grpc.md"}),"gRPC")),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Google"),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Thrift"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Facebook"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Java"),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"/notes/service/api/twirp"}),"twirp")),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"TwitchTV"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Go - PHP,Ruby"),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"https://github.com/twitter/finagle"}),"finagle")),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Twitter"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Scala"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Apache-2.0")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"https://github.com/google/tarpc"}),"tarpc")),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Google"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Rust"),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"https://github.com/zeroc-ice/ice"}),"ice")),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"\u56fd\u4ea7")),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),"HSF"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Alibaba"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Java"),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"/notes/service/api/dubbo"}),"Dubbo")),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Alibaba"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Java"),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"/notes/languages/go/lib/go-zero"}),"go-zero")),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"\u597d\u672a\u6765\u6280\u672f"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Go"),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"https://github.com/cloudwego/kitex"}),"kitex")),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"\u5b57\u8282\u8df3\u52a8"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Go"),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"https://github.com/sofastack/sofa-rpc"}),"sofa-rpc")),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"\u8682\u8681\u91d1\u670d"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Java"),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"https://github.com/tarsCloud/tars"}),"tars")),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"\u817e\u8baf"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"C++,Java,NodeJS,PHP,Web"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"BSD-3")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"https://github.com/apache/incubator-brpc"}),"brpc")),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"\u767e\u5ea6"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"C++,Java"),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"https://github.com/weibocom/motan"}),"motan")),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"\u5fae\u535a"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Java"),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"https://github.com/dianping/cat"}),"cat")),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"\u5927\u4f17\u70b9\u8bc4"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Java"),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"/notes/languages/go/lib/rpcx"}),"rpcx")),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Go"),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"https://github.com/andeya/erpc"}),"erpc")),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Go"),(0,l.kt)("td",k({parentName:"tr"},{align:null}))))),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",k({parentName:"tr"},{align:null}),"Microservice"),(0,l.kt)("th",k({parentName:"tr"},{align:null}),"by"),(0,l.kt)("th",k({parentName:"tr"},{align:null}),"Tech"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"https://github.com/line/armeria"}),"armeria")),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Line"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Java")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("strong",{parentName:"td"},"\u56fd\u4ea7")),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"/notes/languages/go/lib/kratos"}),"kratos")),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"\u54d4\u54e9\u54d4\u54e9"),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Go,gRPC")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"https://github.com/go-chassis/go-chassis"}),"go-chassis")),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Go")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",k({parentName:"tr"},{align:null}),(0,l.kt)("a",k({parentName:"td"},{href:"https://github.com/unionj-cloud/go-doudou"}),"go-doudou")),(0,l.kt)("td",k({parentName:"tr"},{align:null})),(0,l.kt)("td",k({parentName:"tr"},{align:null}),"Go")))),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JSON RPC"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"./grpc.md"}),"gRPC"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"by Google"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"./connect.md"}),"connect")," - \u652f\u6301 HTTP POST \uff0c\u517c\u5bb9 gRPC"))),(0,l.kt)("li",{parentName:"ul"},"Avro"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/json-api/json-api"}),"json-api/json-api"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"application/vnd.api+json"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/only-cliches/NoProto"}),"only-cliches/NoProto"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Rust"),(0,l.kt)("li",{parentName:"ul"},"Flexible, Fast & Compact Serialization with RPC"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"/notes/service/api/twirp"}),"twitchtv/twirp"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"by Twitch"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/twitter/finagle"}),"finagle"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, Scala"),(0,l.kt)("li",{parentName:"ul"},"by Twitter"))),(0,l.kt)("li",{parentName:"ul"},"tRPC")),(0,l.kt)("h2",k({},{id:"serialization"}),"Serialization"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"protobuf"),(0,l.kt)("li",{parentName:"ul"},"flatbuffer"),(0,l.kt)("li",{parentName:"ul"},"json"),(0,l.kt)("li",{parentName:"ul"},"xml"),(0,l.kt)("li",{parentName:"ul"},"yaml"),(0,l.kt)("li",{parentName:"ul"},"msgpack"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/inkeliz/karmem"}),"inkeliz/karmem"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"BSD-3"),(0,l.kt)("li",{parentName:"ul"},"faster than Google Flatbuffers and optimized for TinyGo and WASM"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/betwixt-labs/bebop"}),"betwixt-labs/bebop"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Typescript, C#, Rust, C++"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/betwixt-labs/tempo"}),"betwixt-labs/tempo"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"RPC")))))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ASN.1 PER"),(0,l.kt)("li",{parentName:"ul"},"Avro, CapnProto, Protobufs, Flatbuffers"),(0,l.kt)("li",{parentName:"ul"},"Schema-ful, copying: Protobuf, Thrift, plenty more"),(0,l.kt)("li",{parentName:"ul"},"Schema-ful, zero-copy: Cap'n'proto, Flatbuffers"),(0,l.kt)("li",{parentName:"ul"},"Schema-less, copying: Json (binary and other variants included), XML"),(0,l.kt)("li",{parentName:"ul"},"Schema-less, zero-copy: Flexbuffers"),(0,l.kt)("li",{parentName:"ul"},"Avro is also another data serialization format. Schema-Ful,"),(0,l.kt)("li",{parentName:"ul"},"Arrow would be schema-ful, zero-copy"),(0,l.kt)("li",{parentName:"ul"},"CBOR - Concise Binary Object Representation",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u4e0e JSON \u6df7\u7528")))),(0,l.kt)("hr",null),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/djkoloski/rust_serialization_benchmark"}),"https://github.com/djkoloski/rust_serialization_benchmark")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/alecthomas/go_serialization_benchmarks"}),"https://github.com/alecthomas/go_serialization_benchmarks"))),(0,l.kt)("h2",k({},{id:"data-gateway"}),"Data Gateway"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Hasura"),(0,l.kt)("li",{parentName:"ul"},"graphile"),(0,l.kt)("li",{parentName:"ul"},"PostREST"),(0,l.kt)("li",{parentName:"ul"},"Prisma2"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/stargate/stargate"}),"stargate/stargate"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Java, Apache-2.0"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/urigo/graphql-mesh"}),"urigo/graphql-mesh"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"GraphQL Adapter"),(0,l.kt)("li",{parentName:"ul"},"\u540e\u7aef\u652f\u6301 GraphQL, JSON Schema, gRPC, Swagger, OpenAPI, SOAP, Postgres, Mongo, OData, Thrift, SQLite, MySQL, Neo4j")))),(0,l.kt)("h2",k({},{id:"openapi"}),"OpenAPI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"JavaScript/Typescript/NodeJS",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/metadevpro/openapi3-ts"}),"metadevpro/openapi3-ts"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"TS Model"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/APIDevTools/swagger-parser"}),"APIDevTools/swagger-parser"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, JS"),(0,l.kt)("li",{parentName:"ul"},"OpenAPI 2.0, 3.0 parser/validator"),(0,l.kt)("li",{parentName:"ul"},"Resolves all $ref"))))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/getkin/kin-openapi"}),"getkin/kin-openapi"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Golang"),(0,l.kt)("li",{parentName:"ul"},"OpenAPIv3 for Go"))),(0,l.kt)("li",{parentName:"ul"},"Diff",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/OpenAPITools/openapi-diff"}),"OpenAPITools/openapi-diff"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, Java"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/tufin/oasdiff"}),"tufin/oasdiff"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Apache-2.0, Golang"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://www.oasdiff.com/"}),"https://www.oasdiff.com/")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/Azure/openapi-diff"}),"Azure/openapi-diff")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://api-diff.io/"}),"https://api-diff.io/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://bitbucket.org/atlassian/openapi-diff"}),"https://bitbucket.org/atlassian/openapi-diff"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://www.npmjs.com/package/openapi-diff"}),"https://www.npmjs.com/package/openapi-diff"))))))),(0,l.kt)("h2",k({},{id:"api-gateway"}),"API Gateway"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"API \u751f\u547d\u5468\u671f\u7ba1\u7406")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/apache/apisix"}),"apache/apisix")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/apache/incubator-shenyu"}),"apache/incubator-shenyu"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ef\u6269\u5c55\u3001\u9ad8\u6027\u80fd\u3001\u54cd\u5e94\u5f0f\u7684 ",(0,l.kt)("strong",{parentName:"li"},"Java")," API \u7f51\u5173"))),(0,l.kt)("li",{parentName:"ul"},"Kong"),(0,l.kt)("li",{parentName:"ul"},"Tyk"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/luraproject/lura"}),"luraproject/lura")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://www.moesif.com/blog/technical/api-gateways/How-to-Choose-The-Right-API-Gateway-For-Your-Platform-Comparison-Of-Kong-Tyk-Apigee-And-Alternatives/"}),"How to choose the right API Gateway for your platform")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/api-platform/api-platform"}),"api-platform/api-platform"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Create REST and GraphQL APIs, scaffold Jamstack webapps, stream changes in real-time.")))),(0,l.kt)("h2",k({},{id:"management"}),"\u7ba1\u7406"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/YMFE/yapi"}),"YMFE/yapi"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"YMFE \u53bb\u54ea\u513f\u7f51"),(0,l.kt)("li",{parentName:"ul"},"\u5546\u4e1a\u4ea7\u54c1 apifox"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/thx/rap2-delos"}),"thx/rap2-delos"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"http://rap2.taobao.org/"}),"http://rap2.taobao.org/")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/thx/RAP"}),"thx/RAP")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/sx1989827/DOClever"}),"sx1989827/DOClever")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://www.eolinker.com/"}),"https://www.eolinker.com/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://www.getpostman.com/"}),"https://www.getpostman.com/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://paw.cloud/"}),"https://paw.cloud/")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/RecipeUI/RecipeUI"}),"RecipeUI/RecipeUI"))),(0,l.kt)("h2",k({},{id:"doc"}),"Doc"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"/notes/service/api/slate"}),"slatedocs/slate")),(0,l.kt)("li",{parentName:"ul"},"widdershins",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"OpenAPI -> slate markdown"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/Redocly/redoc"}),"Redocly/redoc")),(0,l.kt)("li",{parentName:"ul"},"swagger"),(0,l.kt)("li",{parentName:"ul"},"graphql"),(0,l.kt)("li",{parentName:"ul"},"OpenAPI"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/syroegkin/swagger-markdown"}),"syroegkin/swagger-markdown"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u53ea\u652f\u6301 v2")))),(0,l.kt)("h2",k({},{id:"tool"}),"Tool"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"/notes/service/api/hoppscotch"}),"Hoppscotch"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, Vue+Typescript"),(0,l.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u6301\u4e45\u5316"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/Kong/insomnia"}),"Kong/insomnia"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"MIT, JS+TS"),(0,l.kt)("li",{parentName:"ul"},"GraphQL, REST, WebSockets, gRPC"),(0,l.kt)("li",{parentName:"ul"},"\u9700\u8981\u4e0a\u4f20\u624d\u80fd\u540c\u6b65"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/google/gnostic"}),"google/gnostic")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/EsperoTech/yaade"}),"EsperoTech/yaade"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"self-hosted, collaborative API development environment"))),(0,l.kt)("li",{parentName:"ul"},"SoapUI"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/kubeshop/tracetest"}),"kubeshop/tracetest")),(0,l.kt)("li",{parentName:"ul"},"Postman"),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/mquan/api2ai"}),"mquan/api2ai"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Create API agents from OpenAPI Specs"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/ShishirPatil/gorilla"}),"ShishirPatil/gorilla"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"API store for LLMs")))),(0,l.kt)("h2",k({},{id:"codegen"}),"Codegen"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/OpenAPITools/openapi-generator"}),"OpenAPITools/openapi-generator"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"OpenAPI -> Client & Server"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/drwpow/openapi-typescript"}),"drwpow/openapi-typescript"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"OpenAPI -> Typescript"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/curlconverter/curlconverter"}),"curlconverter/curlconverter"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"cURL -> Code"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/glideapps/quicktype"}),"glideapps/quicktype"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"JSON, Schema, GraphQL -> type & converter")))),(0,l.kt)("pre",null,(0,l.kt)("code",k({parentName:"pre"},{className:"language-bash"}),"npx -y openapi-typescript https://github.com/openai/openai-openapi/raw/master/openapi.yaml --output apis.d.ts\n")),(0,l.kt)("h2",k({},{id:"produce-openapi"}),"Produce OpenAPI"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/AndrewWalsh/openapi-devtools"}),"AndrewWalsh/openapi-devtools"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Chrome \u63d2\u4ef6"),(0,l.kt)("li",{parentName:"ul"},"\u5728\u6d4f\u89c8\u65f6\u751f\u6210\u63a5\u53e3"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/alufers/mitmproxy2swagger"}),"alufers/mitmproxy2swagger"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Automagically reverse-engineer REST APIs via capturing traffic"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/jonluca/har-to-openapi"}),"jonluca/har-to-openapi"))),(0,l.kt)("h2",k({},{id:"\u53c2\u8003"}),"\u53c2\u8003"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/public-apis/public-apis"}),"public-apis/public-apis")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://eng.uber.com/trip-data-squeeze-json-encoding-compression/"}),"How Uber Engineering Evaluated JSON Encoding and Compression Algorithms to Put the Squeeze on Trip Data"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"2016-02")))),(0,l.kt)("h2",k({},{id:"service-discovery"}),"Service Discovery"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"Redis",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"https://github.com/pyloque/captain#service-discovery-api"}),"https://github.com/pyloque/captain#service-discovery-api")))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",k({parentName:"li"},{href:"/notes/service/api/nacos"}),"Nacos"))))}y.isMDXComponent=!0}}]);
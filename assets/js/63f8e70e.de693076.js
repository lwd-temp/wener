"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[30534],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return b}});var n=r(59496);function i(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):a(a({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,i=e.mdxType,o=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),f=i,b=u["".concat(c,".").concat(f)]||u[f]||y[f]||o;return r?n.createElement(b,a(a({ref:t},p),{},{components:r})):n.createElement(b,a({ref:t},p))}));function b(e,t){var r=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var o=r.length,a=new Array(o);a[0]=f;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[u]="string"==typeof e?e:i,a[1]=s;for(var l=2;l<o;l++)a[l]=r[l];return n.createElement.apply(null,a)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},79054:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return m},default:function(){return w},frontMatter:function(){return b},metadata:function(){return d},toc:function(){return g}});var n=r(49613),i=Object.defineProperty,o=Object.defineProperties,a=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,l=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))c.call(t,r)&&p(e,r,t[r]);if(s)for(var r of s(t))l.call(t,r)&&p(e,r,t[r]);return e},y=(e,t)=>o(e,a(t)),f=(e,t)=>{var r={};for(var n in e)c.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&s)for(var n of s(e))t.indexOf(n)<0&&l.call(e,n)&&(r[n]=e[n]);return r};const b={title:"Sentry"},m="Sentry",d={unversionedId:"service/observability/tracing/sentry",id:"service/observability/tracing/sentry",title:"Sentry",description:"- getsentry/sentry",source:"@site/../notes/service/observability/tracing/sentry.md",sourceDirName:"service/observability/tracing",slug:"/service/observability/tracing/sentry",permalink:"/notes/service/observability/tracing/sentry",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/observability/tracing/sentry.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1664871591,formattedLastUpdatedAt:"Oct 4, 2022",frontMatter:{title:"Sentry"},sidebar:"docs",previous:{title:"OpenTelemetry",permalink:"/notes/service/observability/tracing/opentelemetry/"},next:{title:"Signoz",permalink:"/notes/service/observability/tracing/signoz"}},v={},g=[{value:"Go",id:"go",level:2}],O={toc:g},h="wrapper";function w(e){var t=e,{components:r}=t,i=f(t,["components"]);return(0,n.kt)(h,y(u(u({},O),i),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"sentry"}),"Sentry"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/getsentry/sentry"}),"getsentry/sentry"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BSL, Python"),(0,n.kt)("li",{parentName:"ul"},"error tracking and performance monitoring platform")))),(0,n.kt)("h2",u({},{id:"go"}),"Go"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-go"}),'func TestSentry(t *testing.T) {\n    err := sentry.Init(sentry.ClientOptions{\n        Dsn:   "",\n        Debug: true,\n    })\n    if err != nil {\n        log.Fatalf("sentry.Init: %s", err)\n    }\n    defer sentry.Flush(5 * time.Second)\n\n    sentry.CaptureMessage("sentry init")\n    sentry.CaptureException(errors.New("test error"))\n\n  // HTTP \u62e6\u622a\n    sh := sentryhttp.New(sentryhttp.Options{})\n    http.HandleFunc("/err", sh.HandleFunc(func(writer http.ResponseWriter, request *http.Request) {\n        panic("error")\n    }))\n}\n')))}w.isMDXComponent=!0}}]);
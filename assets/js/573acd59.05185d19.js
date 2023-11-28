"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[50638],{49613:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),u=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=u(e.components);return n.createElement(p.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},v=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),m=u(a),v=r,d=m["".concat(p,".").concat(v)]||m[v]||c[v]||l;return a?n.createElement(d,i(i({ref:t},s),{},{components:a})):n.createElement(d,i({ref:t},s))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=v;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:r,i[1]=o;for(var u=2;u<l;u++)i[u]=a[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}v.displayName="MDXCreateElement"},48898:function(e,t,a){a.r(t),a.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return j},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return N}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,m=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))u.call(t,a)&&s(e,a,t[a]);return e},c=(e,t)=>l(e,i(t)),v=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&u.call(e,n)&&(a[n]=e[n]);return a};const d={title:"Java 8"},f="Java 8",k={unversionedId:"java/version/java-8",id:"java/version/java-8",title:"Java 8",description:"\u65b0\u7279\u6027",source:"@site/../notes/java/version/java-8.md",sourceDirName:"java/version",slug:"/java/version/java-8",permalink:"/notes/java/version/java-8",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/version/java-8.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1686920980,formattedLastUpdatedAt:"Jun 16, 2023",frontMatter:{title:"Java 8"},sidebar:"docs",previous:{title:"Java 7",permalink:"/notes/java/version/java-7"},next:{title:"Java 9",permalink:"/notes/java/version/java-9"}},b={},N=[{value:"\u65b0\u7279\u6027",id:"feature",level:2},{value:"Contents",id:"contents",level:2},{value:"Java EE 8",id:"java-ee-8",level:2},{value:"CompletableFuture",id:"completablefuture",level:2},{value:"vJUG24 Session on Optional",id:"vjug24-session-on-optional",level:2},{value:"BUGS",id:"bugs",level:2},{value:"JDK-8064803",id:"jdk-8064803",level:3}],O={toc:N},y="wrapper";function j(e){var t=e,{components:a}=t,r=v(t,["components"]);return(0,n.kt)(y,c(m(m({},O),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",m({},{id:"java-8"}),"Java 8"),(0,n.kt)("h2",m({},{id:"feature"}),"\u65b0\u7279\u6027"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8bed\u6cd5",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Lambda"),(0,n.kt)("li",{parentName:"ul"},"interface default method"))),(0,n.kt)("li",{parentName:"ul"},"API",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"CompletableFuture"),(0,n.kt)("li",{parentName:"ul"},"Optional")))),(0,n.kt)("h2",m({},{id:"contents"}),"Contents"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://jcp.org/aboutJava/communityprocess/mrel/jsr337/index.html"}),"JSR-000337 JavaTM SE 8 Release Contents"))),(0,n.kt)("h2",m({},{id:"java-ee-8"}),"Java EE 8"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://jcp.org/aboutJava/communityprocess/edr/jsr366/index.html"}),"JSR-000366 JavaTM Platform, Enterprise Edition 8"))),(0,n.kt)("h2",m({},{id:"completablefuture"}),"CompletableFuture"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e JS \u4e2d\u7684 Promise"),(0,n.kt)("li",{parentName:"ul"},"\u76f8\u5f53\u4e8e Guava \u4e2d\u7684 SettableFuture, ListenableFuture"),(0,n.kt)("li",{parentName:"ul"},"\u548c ExecutorCompletionService \u4e5f\u6709\u4e9b\u7c7b\u4f3c"),(0,n.kt)("li",{parentName:"ul"},"\u5f88\u597d\u7684\u652f\u6301 Lambda"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://dzone.com/articles/java-8-completablefuture"}),"Java 8: CompletableFuture in action")),(0,n.kt)("li",{parentName:"ul"},"\u7f3a\u70b9",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"CompletableFuture.allOf()")," \u8fd4\u56de ",(0,n.kt)("inlineCode",{parentName:"li"},"CompletableFuture<Void>")),(0,n.kt)("li",{parentName:"ul"},"\u5c06 Guava \u4e2d ",(0,n.kt)("inlineCode",{parentName:"li"},"settable")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"listenable")," future \u7684\u529f\u80fd\u6df7\u5408\u5728\u4e86\u4e00\u8d77. ",(0,n.kt)("inlineCode",{parentName:"li"},"complete()")," \u65b9\u6cd5\u53ef\u80fd\u9519\u8bef\u7684\u88ab\u7528\u6237\u7aef\u7a0b\u5e8f\u8c03\u7528,\u5bfc\u81f4\u7a0b\u5e8f\u5f02\u5e38."),(0,n.kt)("li",{parentName:"ul"},"API \u6570\u91cf\u8fc7\u591a.",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u5206\u79bb ",(0,n.kt)("inlineCode",{parentName:"li"},"settable")," \u548c ",(0,n.kt)("inlineCode",{parentName:"li"},"listenable")," \u7684\u529f\u80fd\u4f1a\u89e3\u51b3\u5f88\u591a\u95ee\u9898.")))))),(0,n.kt)("h2",m({},{id:"vjug24-session-on-optional"}),"vJUG24 Session on Optional"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://stuartmarks.wordpress.com/2016/09/27/vjug24-session-on-optional/"}),"vJUG24 Session on Optional"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://stuartmarks.files.wordpress.com/2016/09/optionalmotherofallbikesheds3.pdf"}),"PDF")))),(0,n.kt)("li",{parentName:"ul"},"Optional is intended to provide a limited mechanism for library method return types where there is a clear need to represent \u201cno result,\u201d and where using null for that is overwhelmingly likely to cause errors."),(0,n.kt)("li",{parentName:"ul"},"\u57fa\u672c\u89c4\u5219",(0,n.kt)("ol",{parentName:"li"},(0,n.kt)("li",{parentName:"ol"},"\u4e0d\u8981\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"null")," \u4f5c\u4e3a Optional \u53d8\u91cf\u6216\u8fd4\u56de\u503c"),(0,n.kt)("li",{parentName:"ol"},"\u9664\u975e\u4f60\u80fd\u4fdd\u8bc1 Optional \u503c\u5b58\u5728\u5426\u5219\u4e0d\u8981\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"Optional.get()")),(0,n.kt)("li",{parentName:"ol"},"\u5c3d\u91cf\u9009\u62e9\u6216\u5b9e\u73b0\u5176\u4ed6\u7684\u63a5\u53e3\u6765\u907f\u514d\u8fdb\u884c ",(0,n.kt)("inlineCode",{parentName:"li"},"Optional.isPresent()")," \u6216 ",(0,n.kt)("inlineCode",{parentName:"li"},"Optional.get()")," \u64cd\u4f5c"),(0,n.kt)("li",{parentName:"ol"},"\u907f\u514d\u901a\u8fc7\u4f7f\u7528 Optional \u6765\u83b7\u53d6\u4e00\u4e2a\u503c. ",(0,n.kt)("inlineCode",{parentName:"li"},"Optional.ofNullable(x).orElse(y)")," -> ",(0,n.kt)("inlineCode",{parentName:"li"},"x == null? y: x")),(0,n.kt)("li",{parentName:"ol"},"\u5982\u679c Optional \u7684\u5185\u5bb9\u8fd8\u662f\u4e00\u4e2a Optional, \u90a3\u8fd9\u5c31\u592a\u8fc7\u4e8e\u590d\u6742\u4e86"))),(0,n.kt)("li",{parentName:"ul"},"\u907f\u514d\u4e8b\u9879",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u7528\u5728\u5b57\u6bb5"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u7528\u5728\u65b9\u6cd5\u53c2\u6570"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u7528\u5728\u96c6\u5408"))),(0,n.kt)("li",{parentName:"ul"},"\u8bb0\u4f4f Optional \u662f\u4e00\u4e2a\u5c01\u88c5, \u6bcf\u4e2a Optional \u662f\u4e2a\u989d\u5916\u7684\u5bf9\u8c61\u4f1a\u5360\u7528 16 \u5b57\u8282\u7684\u8d44\u6e90, \u4f1a\u521b\u5efa\u66f4\u591a\u7684\u5f85\u88ab gc \u7684\u5bf9\u8c61")),(0,n.kt)("h2",m({},{id:"bugs"}),"BUGS"),(0,n.kt)("h3",m({},{id:"jdk-8064803"}),"JDK-8064803"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",m({parentName:"li"},{href:"https://blog.dogan.io/2015/03/02/java-8-compiler-bug/"}),"Story of a Java 8 Compiler Bug (JDK-8064803)"))))}j.isMDXComponent=!0}}]);
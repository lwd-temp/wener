"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[612],{49613:function(e,r,t){t.d(r,{Zo:function(){return p},kt:function(){return f}});var n=t(59496);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function i(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function c(e,r){if(null==e)return{};var t,n,o=function(e,r){if(null==e)return{};var t,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||(o[t]=e[t]);return o}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)t=a[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var l=n.createContext({}),s=function(e){var r=n.useContext(l),t=r;return e&&(t="function"==typeof e?e(r):i(i({},r),e)),t},p=function(e){var r=s(e.components);return n.createElement(l.Provider,{value:r},e.children)},u="mdxType",d={inlineCode:"code",wrapper:function(e){var r=e.children;return n.createElement(n.Fragment,{},r)}},m=n.forwardRef((function(e,r){var t=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,p=c(e,["components","mdxType","originalType","parentName"]),u=s(t),m=o,f=u["".concat(l,".").concat(m)]||u[m]||d[m]||a;return t?n.createElement(f,i(i({ref:r},p),{},{components:t})):n.createElement(f,i({ref:r},p))}));function f(e,r){var t=arguments,o=r&&r.mdxType;if("string"==typeof e||o){var a=t.length,i=new Array(a);i[0]=m;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c[u]="string"==typeof e?e:o,i[1]=c;for(var s=2;s<a;s++)i[s]=t[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,t)}m.displayName="MDXCreateElement"},73841:function(e,r,t){t.r(r),t.d(r,{assets:function(){return y},contentTitle:function(){return g},default:function(){return k},frontMatter:function(){return f},metadata:function(){return v},toc:function(){return b}});var n=t(49613),o=Object.defineProperty,a=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,r,t)=>r in e?o(e,r,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[r]=t,u=(e,r)=>{for(var t in r||(r={}))l.call(r,t)&&p(e,t,r[t]);if(c)for(var t of c(r))s.call(r,t)&&p(e,t,r[t]);return e},d=(e,r)=>a(e,i(r)),m=(e,r)=>{var t={};for(var n in e)l.call(e,n)&&r.indexOf(n)<0&&(t[n]=e[n]);if(null!=e&&c)for(var n of c(e))r.indexOf(n)<0&&s.call(e,n)&&(t[n]=e[n]);return t};const f={tags:["FAQ"]},g="Spring FAQ",v={unversionedId:"java/spring/spring-faq",id:"java/spring/spring-faq",title:"Spring FAQ",description:"Thread Pool",source:"@site/../notes/java/spring/spring-faq.md",sourceDirName:"java/spring",slug:"/java/spring/faq",permalink:"/notes/java/spring/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/spring/spring-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1691332314,formattedLastUpdatedAt:"Aug 6, 2023",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"Spring Data",permalink:"/notes/java/spring/data"},next:{title:"Spring Security OAuth2",permalink:"/notes/java/spring/security-oauth2"}},y={},b=[{value:"Thread Pool",id:"thread-pool",level:2},{value:"Override Config",id:"override-config",level:2},{value:"Tomcat \u4e0a\u4f20\u8d85\u65f6",id:"tomcat-\u4e0a\u4f20\u8d85\u65f6",level:2}],h={toc:b},w="wrapper";function k(e){var r=e,{components:t}=r,o=m(r,["components"]);return(0,n.kt)(w,d(u(u({},h),o),{components:t,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"spring-faq"}),"Spring FAQ"),(0,n.kt)("h2",u({},{id:"thread-pool"}),"Thread Pool"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"server.jetty.threads.acceptors: -1.0\nserver.jetty.threads.idle-timeout: 60000ms\nserver.jetty.threads.max: 200.0\nserver.jetty.threads.min: 8.0\nserver.jetty.threads.selectors: -1.0\n\nserver.tomcat.threads.max: 200.0\nserver.tomcat.threads.min-spare: 10.0\nserver.tomcat.accept-count: 100.0\n\n# https://github.com/undertow-io/undertow/blob/7d87eef9534807d00c974f92dc46be3d09b703a0/core/src/main/java/io/undertow/Undertow.java#L438-L439\nserver.undertow.threads.io: # Math.max(Runtime.getRuntime().availableProcessors(), 2)\nserver.undertow.threads.worker: # 8*io threads\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.spring.io/spring-boot/docs/2.4.0/reference/htmlsingle"}),"https://docs.spring.io/spring-boot/docs/2.4.0/reference/htmlsingle")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://docs.spring.io/spring-boot/docs/2.7.x-SNAPSHOT/reference/htmlsingle/"}),"https://docs.spring.io/spring-boot/docs/2.7.x-SNAPSHOT/reference/htmlsingle/"))),(0,n.kt)("h2",u({},{id:"override-config"}),"Override Config"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"spring.cloud.config.allowOverride=true\nspring.cloud.config.overrideNone=true\nspring.cloud.config.override-system-properties=false\n")),(0,n.kt)("h2",u({},{id:"tomcat-\u4e0a\u4f20\u8d85\u65f6"}),"Tomcat \u4e0a\u4f20\u8d85\u65f6"),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u5f02\u5e38\u4fe1\u606f")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{}),"org.springframework.web.util.NestedServletException: Request processing failed; nested exception is org.springframework.web.multipart.MultipartException: Could not parse multipart servlet request; nested exception is org.apache.commons.fileupload.FileUploadBase$IOFileUploadException: Processing of multipart/form-data request failed. Read timed out\n        org.springframework.web.servlet.FrameworkServlet.processRequest(FrameworkServlet.java:894)\n        org.springframework.web.servlet.FrameworkServlet.doPost(FrameworkServlet.java:789)\n        javax.servlet.http.HttpServlet.service(HttpServlet.java:641)\n        javax.servlet.http.HttpServlet.service(HttpServlet.java:722)\n        org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:312)\n        org.springframework.security.web.access.intercept.FilterSecurityInterceptor.invoke(FilterSecurityInterceptor.java:116)\n        org.springframework.security.web.access.intercept.FilterSecurityInterceptor.doFilter(FilterSecurityInterceptor.java:83)\n        org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:324)\n        org.springframework.security.web.access.ExceptionTranslationFilter.doFilter(ExceptionTranslationFilter.java:113)\n        org.springframework.security.web.FilterChainProxy$VirtualFilterChain.doFilter(FilterChainProxy.java:324)\n")),(0,n.kt)("p",null,"\u89e3\u51b3\u8be5\u95ee\u9898\u53ef\u5728 Tomcat \u7684 ",(0,n.kt)("inlineCode",{parentName:"p"},"server.xml")," \u4e2d\u6dfb\u52a0\u5982\u4e0b\u914d\u7f6e\u89e3\u51b3"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-xml"}),'<Connector port="8080" protocol="HTTP/1.1" URIEncoding="UTF-8"\n           connectionUploadTimeout="36000000" disableUploadTimeout="false"\n           connectionTimeout="60000" redirectPort="8443" />\n')),(0,n.kt)("p",null,"\u5728 Spring Boot \u4e2d\u5219\u53ef\u4ee5\u901a\u8fc7\u8be5\u65b9\u6cd5\u6765\u4fee\u6539\u914d\u7f6e"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-java"}),'@Bean\npublic EmbeddedServletContainerCustomizer containerCustomizer() throws FileNotFoundException {\n    return factory -> {\n        if (factory instanceof TomcatEmbeddedServletContainerFactory) {\n            TomcatEmbeddedServletContainerFactory containerFactory = (TomcatEmbeddedServletContainerFactory) factory;\n            containerFactory.addConnectorCustomizers(c -> {\n                // http://tomcat.apache.org/tomcat-8.0-doc/config/http.html#Standard_Implementation\n                log.info("Customize tomcat connector");\n                c.setAttribute("connectionUploadTimeout", 36000000);// milliseconds\n                c.setAttribute("disableUploadTimeout", false);\n            });\n        }\n    };\n}\n')))}k.isMDXComponent=!0}}]);
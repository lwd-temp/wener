"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[62275],{49613:function(e,t,n){n.d(t,{Zo:function(){return g},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),s=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},g=function(e){var t=s(e.components);return r.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},c=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,g=l(e,["components","mdxType","originalType","parentName"]),m=s(n),c=a,d=m["".concat(p,".").concat(c)]||m[c]||u[c]||i;return n?r.createElement(d,o(o({ref:t},g),{},{components:n})):r.createElement(d,o({ref:t},g))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,o=new Array(i);o[0]=c;var l={};for(var p in t)hasOwnProperty.call(t,p)&&(l[p]=t[p]);l.originalType=e,l[m]="string"==typeof e?e:a,o[1]=l;for(var s=2;s<i;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}c.displayName="MDXCreateElement"},91491:function(e,t,n){n.r(t),n.d(t,{assets:function(){return N},contentTitle:function(){return f},default:function(){return h},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return b}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,o=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,g=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&g(e,n,t[n]);if(l)for(var n of l(t))s.call(t,n)&&g(e,n,t[n]);return e},u=(e,t)=>i(e,o(t)),c=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&l)for(var r of l(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const d={tags:["Configuration"]},f="Spring Boot Properties",k={unversionedId:"java/spring/boot/spring-boot-conf",id:"java/spring/boot/spring-boot-conf",title:"Spring Boot Properties",description:"- https://cloud.spring.io/spring-cloud-gateway/reference/html/appendix.html",source:"@site/../notes/java/spring/boot/spring-boot-conf.md",sourceDirName:"java/spring/boot",slug:"/java/spring/boot/conf",permalink:"/notes/java/spring/boot/conf",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/spring/boot/spring-boot-conf.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1691332314,formattedLastUpdatedAt:"Aug 6, 2023",frontMatter:{tags:["Configuration"]},sidebar:"docs",previous:{title:"Spring Boot",permalink:"/notes/java/spring/boot/"},next:{title:"Spring Cloud",permalink:"/notes/java/spring/cloud/"}},N={},b=[{value:"\u4e3b\u8981\u914d\u7f6e\u5bf9\u8c61",id:"\u4e3b\u8981\u914d\u7f6e\u5bf9\u8c61",level:2},{value:"\u914d\u7f6e\u5c5e\u6027\u52a0\u8f7d\u987a\u5e8f",id:"\u914d\u7f6e\u5c5e\u6027\u52a0\u8f7d\u987a\u5e8f",level:2},{value:"\u67e5\u627e\u5c5e\u6027\u6587\u4ef6\u7684\u987a\u5e8f",id:"\u67e5\u627e\u5c5e\u6027\u6587\u4ef6\u7684\u987a\u5e8f",level:2},{value:"\u7279\u6b8a\u914d\u7f6e\u8bf4\u660e",id:"\u7279\u6b8a\u914d\u7f6e\u8bf4\u660e",level:2},{value:"\u5c5e\u6027\u6587\u4ef6\u53ef\u4f7f\u7528\u5360\u4f4d\u7b26",id:"\u5c5e\u6027\u6587\u4ef6\u53ef\u4f7f\u7528\u5360\u4f4d\u7b26",level:2},{value:"\u5355\u4e2a YAML \u53ef\u6307\u5b9a\u591a\u4e2a profile",id:"\u5355\u4e2a-yaml-\u53ef\u6307\u5b9a\u591a\u4e2a-profile",level:2},{value:"\u914d\u7f6e\u6ce8\u89e3",id:"\u914d\u7f6e\u6ce8\u89e3",level:2},{value:"\u7ed1\u5b9a\u5c5e\u6027\u540d",id:"\u7ed1\u5b9a\u5c5e\u6027\u540d",level:2},{value:"\u65e5\u5fd7\u914d\u7f6e",id:"\u65e5\u5fd7\u914d\u7f6e",level:2},{value:"\u5e38\u7528\u914d\u7f6e",id:"\u5e38\u7528\u914d\u7f6e",level:2}],v={toc:b},y="wrapper";function h(e){var t=e,{components:n}=t,a=c(t,["components"]);return(0,r.kt)(y,u(m(m({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"spring-boot-properties"}),"Spring Boot Properties"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://cloud.spring.io/spring-cloud-gateway/reference/html/appendix.html"}),"https://cloud.spring.io/spring-cloud-gateway/reference/html/appendix.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html"}),"https://docs.spring.io/spring-boot/docs/current/reference/html/application-properties.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://docs.spring.io/spring-boot/docs/2.7.x-SNAPSHOT/reference/htmlsingle/#features.external-config"}),"https://docs.spring.io/spring-boot/docs/2.7.x-SNAPSHOT/reference/htmlsingle/#features.external-config"))),(0,r.kt)("h2",m({},{id:"\u4e3b\u8981\u914d\u7f6e\u5bf9\u8c61"}),"\u4e3b\u8981\u914d\u7f6e\u5bf9\u8c61"),(0,r.kt)("p",null,"\u914d\u7f6e\u5bf9\u8c61\u90fd\u901a\u8fc7 Adapter/Configurer \u7684\u7c7b\u8fdb\u884c\u914d\u7f6e, \u53ea\u662f\u5bf9\u5185\u90e8\u914d\u7f6e\u8fdb\u884c\u4fee\u6539\u800c\u4e0d\u662f\u76f4\u63a5\u66ff\u6362."),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter"),(0,r.kt)("li",{parentName:"ul"},"org.springframework.security.config.annotation.authentication.configurers.GlobalAuthenticationConfigurerAdapter"),(0,r.kt)("li",{parentName:"ul"},"org.springframework.data.rest.webmvc.config.RepositoryRestConfigurerAdapter"),(0,r.kt)("li",{parentName:"ul"},"org.springframework.security.config.annotation.SecurityConfigurerAdapter"),(0,r.kt)("li",{parentName:"ul"},"org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter"),(0,r.kt)("li",{parentName:"ul"},"org.springframework.scheduling.annotation.AsyncConfigurer"),(0,r.kt)("li",{parentName:"ul"},"org.springframework.cache.annotation.CachingConfigurer"),(0,r.kt)("li",{parentName:"ul"},"org.springframework.web.servlet.config.annotation.ContentNegotiationConfigurer"),(0,r.kt)("li",{parentName:"ul"},"org.springframework.security.config.annotation.web.configurers.HeadersConfigurer"),(0,r.kt)("li",{parentName:"ul"},"org.springframework.boot.autoconfigure.security.oauth2.resource.JwtAccessTokenConverterConfigurer"),(0,r.kt)("li",{parentName:"ul"},"org.springframework.web.servlet.config.annotation.PathMatchConfigurer"),(0,r.kt)("li",{parentName:"ul"},"org.springframework.security.config.annotation.web.configurers.RequestCacheConfigurer"),(0,r.kt)("li",{parentName:"ul"},"org.springframework.transaction.annotation.TransactionManagementConfigurer")),(0,r.kt)("h2",m({},{id:"\u914d\u7f6e\u5c5e\u6027\u52a0\u8f7d\u987a\u5e8f"}),"\u914d\u7f6e\u5c5e\u6027\u52a0\u8f7d\u987a\u5e8f"),(0,r.kt)("ol",m({},{start:0}),(0,r.kt)("li",{parentName:"ol"},"\u547d\u4ee4\u884c\u53c2\u6570"),(0,r.kt)("li",{parentName:"ol"},"\u73af\u5883\u53d8\u91cf ",(0,r.kt)("inlineCode",{parentName:"li"},"SPRING_APPLICATION_JSON")," \u6307\u5b9a\u7684 JSON \u914d\u7f6e\u6216\u7cfb\u7edf\u5c5e\u6027"),(0,r.kt)("li",{parentName:"ol"},"JNDI \u5c5e\u6027 ",(0,r.kt)("inlineCode",{parentName:"li"},"java:comp/env")),(0,r.kt)("li",{parentName:"ol"},"Java \u7cfb\u7edf\u5c5e\u6027 (System.getProperties())"),(0,r.kt)("li",{parentName:"ol"},"\u64cd\u4f5c\u7cfb\u7edf\u73af\u5883\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"RandomValuePropertySource")," \u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"random.*")," \u8bbe\u7f6e\u968f\u673a\u5c5e\u6027\u503c"),(0,r.kt)("li",{parentName:"ol"},"Jar \u5305\u5916\u57fa\u4e8e profile \u7684\u5e94\u7528\u5c5e\u6027 (application-{profile}.properties \u6216 YAML)"),(0,r.kt)("li",{parentName:"ol"},"Jar \u5305\u5185\u57fa\u4e8e profile \u7684\u5e94\u7528\u5c5e\u6027 (application-{profile}.properties \u6216 YAML)"),(0,r.kt)("li",{parentName:"ol"},"Jar \u5305\u5916\u7684\u5e94\u7528\u5c5e\u6027\u914d\u7f6e (application.properties \u6216 YAML)"),(0,r.kt)("li",{parentName:"ol"},"Jar \u5305\u5185\u7684\u5e94\u7528\u5c5e\u6027\u914d\u7f6e (application.properties \u6216 YAML)"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"@Configuration")," \u7c7b\u4e0a\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"@PropertySource")),(0,r.kt)("li",{parentName:"ol"},"\u9ed8\u8ba4\u5c5e\u6027 (\u901a\u8fc7 SpringApplication.setDefaultProperties \u6307\u5b9a)")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u793a\u4f8b")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'SPRING_APPLICATION_JSON=\'{"foo":{"bar":"spam"}}\' java -jar myapp.jar\njava -Dspring.application.json=\'{"foo":"bar"}\' -jar myapp.jar\njava -jar myapp.jar --spring.application.json=\'{"foo":"bar"}\'\n')),(0,r.kt)("h2",m({},{id:"\u67e5\u627e\u5c5e\u6027\u6587\u4ef6\u7684\u987a\u5e8f"}),"\u67e5\u627e\u5c5e\u6027\u6587\u4ef6\u7684\u987a\u5e8f"),(0,r.kt)("ol",m({},{start:0}),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u524d\u76ee\u5f55\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"/config")," \u5b50\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u524d\u76ee\u5f55"),(0,r.kt)("li",{parentName:"ol"},"\u7c7b\u8def\u5f84\u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"/config")," \u5305"),(0,r.kt)("li",{parentName:"ol"},"\u7c7b\u8def\u5f84\u6839")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4fee\u6539")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),'# \u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u540d\njava -jar myproject.jar --spring.config.name=myproject\n# \u4fee\u6539\u914d\u7f6e\u6587\u4ef6\u76ee\u5f55\njava -jar myproject.jar --spring.config.location=classpath:/default.properties,classpath:/override.properties\n# \u901a\u8fc7\u73af\u5883\u53d8\u91cf\u4fee\u6539\u6587\u4ef6\u540d\nSPRING_CONFIG_NAME=myproject java -jar myproject.jar\n# \u53ef\u540c\u65f6\u52a0\u8f7d\u591a\u4e2a\u914d\u7f6e\u540d\n# --spring.config.name=server-app,env\n# \u53ef\u5728\u542f\u52a8\u65f6\u6fc0\u6d3b\u76f8\u5e94\u914d\u7f6e\n# --spring.profiles.active=local\n# \u53ef\u4fee\u6539\u914d\u7f6e\u7684\u641c\u7d22\u8def\u5f84\n# --spring.profiles.location=file:./conf\n# \u4fee\u6539\u9ed8\u8ba4 Profile\n# --spring.profiles.default=test\n# \u53ef\u76f4\u63a5\u4f20\u9012 JSON \u53c2\u6570\n# --spring.application.json={"redis.port":6379}\n')),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),":"),(0,r.kt)("ul",{parentName:"blockquote"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Profile \u65f6, include \u7684\u4f18\u5148\u7ea7\u4f1a\u6bd4\u5f53\u524d\u914d\u7f6e\u7684\u4f18\u5148\u7ea7\u9ad8,\u56e0\u6b64\u5728\u4f7f\u7528\u65f6\u5efa\u8bae\u907f\u514d\u4f7f\u7528 include \u6765\u5305\u542b\u9ed8\u8ba4\u914d\u7f6e."),(0,r.kt)("li",{parentName:"ul"},"\u6307\u5b9a\u591a\u4e2a profile \u65f6\u540e\u9762\u7684\u4f1a\u8986\u76d6\u524d\u9762\u7684"))),(0,r.kt)("h2",m({},{id:"\u7279\u6b8a\u914d\u7f6e\u8bf4\u660e"}),"\u7279\u6b8a\u914d\u7f6e\u8bf4\u660e"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"DevTool \u4f1a\u5c1d\u8bd5\u67e5\u627e HOME \u4e0b\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},".spring-boot-devtools.properties")," \u914d\u7f6e\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"spring.main")," \u4e0b\u7684\u53c2\u6570\u4f1a\u5e94\u7528\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"SpringApplication")," \u4e0a,\u56e0\u6b64\u53ef\u4ee5\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"spring.main.web_environment: false")," \u8fd9\u6837\u7684\u53c2\u6570"),(0,r.kt)("li",{parentName:"ul"},"Spring \u542f\u52a8\u65f6\u7684\u5904\u7406\u7c7b\u4e3a ",(0,r.kt)("inlineCode",{parentName:"li"},"org.springframework.boot.context.config.ConfigFileApplicationListener"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8d1f\u8d23\u52a0\u8f7d\u7ed9\u5b9a\u7684\u914d\u7f6e ",(0,r.kt)("inlineCode",{parentName:"li"},"spring.config.name"),",",(0,r.kt)("inlineCode",{parentName:"li"},"spring.profiles.active"),",",(0,r.kt)("inlineCode",{parentName:"li"},"spring.profiles.location")),(0,r.kt)("li",{parentName:"ul"},"\u8d1f\u8d23\u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"spring.main")," \u4e0a\u7684\u5c5e\u6027\u7ed1\u5b9a\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"SpringApplication")," \u4e0a"))),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u542f\u7528\u65e5\u5fd7,\u8bb0\u5f55\u6240\u6709\u5c1d\u8bd5\u52a0\u8f7d\u7684\u914d\u7f6e\u6587\u4ef6\u540d")),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),'<logger name="org.springframework.boot.context.config.ConfigFileApplicationListener"\n        level="TRACE"\n        additivity="false">\n    <appender-ref ref="CONSOLE"/>\n    <appender-ref ref="FILE"/>\n</logger>\n')),(0,r.kt)("h2",m({},{id:"\u5c5e\u6027\u6587\u4ef6\u53ef\u4f7f\u7528\u5360\u4f4d\u7b26"}),"\u5c5e\u6027\u6587\u4ef6\u53ef\u4f7f\u7528\u5360\u4f4d\u7b26"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"app.name=MyApp\napp.description=${app.name:Default Name} is a Spring Boot application\n")),(0,r.kt)("h2",m({},{id:"\u5355\u4e2a-yaml-\u53ef\u6307\u5b9a\u591a\u4e2a-profile"}),"\u5355\u4e2a YAML \u53ef\u6307\u5b9a\u591a\u4e2a profile"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"server:\n  address: 192.168.1.100\n---\nspring:\n  profiles: development\nserver:\n  address: 127.0.0.1\n---\nspring:\n  profiles: production\nserver:\n  address: 192.168.1.120\n")),(0,r.kt)("h2",m({},{id:"\u914d\u7f6e\u6ce8\u89e3"}),"\u914d\u7f6e\u6ce8\u89e3"),(0,r.kt)("p",null,"\u9ed8\u8ba4\u4f1a\u5f00\u542f ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableConfigurationProperties")," \u6ce8\u89e3\u914d\u7f6e, \u6709 ",(0,r.kt)("inlineCode",{parentName:"p"},"@ConfigurationProperties")," \u6ce8\u89e3\u4f1a\u81ea\u52a8\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"Environment")," \u8fdb\u884c\u521d\u59cb\u5316.\u4e5f\u53ef\u4ee5\u76f4\u63a5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"@EnableConfigurationProperties")," \u6765\u6ce8\u518c\u914d\u7f6e\u5bf9\u8c61"),(0,r.kt)("h2",m({},{id:"\u7ed1\u5b9a\u5c5e\u6027\u540d"}),"\u7ed1\u5b9a\u5c5e\u6027\u540d"),(0,r.kt)("p",null,"\u8fdb\u884c\u7ed1\u5b9a\u7684\u5c5e\u6027\u540d\u76f8\u5bf9\u5bbd\u5bb9"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u5c5e\u6027\u540d\u683c\u5f0f"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"\u8bf4\u660e"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"person.firstName"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u6807\u51c6\u9a7c\u5cf0\u8bed\u6cd5")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"person.first-name"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u6a2a\u7ebf\u5206\u9694, \u63a8\u8350\u5728 .properties \u548c .yml \u4e2d\u4f7f\u7528")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"PERSON_FIRST_NAME"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u5927\u5199\u683c\u5f0f, \u63a8\u8350\u5728\u7cfb\u7edf\u53d8\u91cf\u4f7f\u7528")))),(0,r.kt)("h2",m({},{id:"\u65e5\u5fd7\u914d\u7f6e"}),"\u65e5\u5fd7\u914d\u7f6e"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Spring Environment"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"System Property"),(0,r.kt)("th",m({parentName:"tr"},{align:null}),"Comments"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"logging.exception-conversion-word"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LOG_EXCEPTION_CONVERSION_WORD"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"The conversion word that\u2019s used when logging exceptions.")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"logging.file"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LOG_FILE"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u5982\u679c\u5b9a\u4e49\u4e86\u4f1a\u4f5c\u4e3a\u9ed8\u8ba4\u65e5\u5fd7\u914d\u7f6e")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"logging.path"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LOG_PATH"),(0,r.kt)("td",m({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"logging.pattern.console"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"CONSOLE_LOG_PATTERN"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u63a7\u5236\u53f0(stdout)\u8f93\u51fa\u7684\u65e5\u5fd7\u683c\u5f0f(\u4e0d\u652f\u6301 JDK logger)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"logging.pattern.file"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"FILE_LOG_PATTERN"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u8f93\u51fa\u5230\u6587\u4ef6\u7684\u65e5\u5fd7\u683c\u5f0f")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"logging.pattern.level"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"LOG_LEVEL_PATTERN"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"\u8f93\u51fa\u65e5\u5fd7\u7b49\u7ea7\u7684\u683c\u5f0f(\u9ed8\u8ba4 %5p)(logging.pattern.level \u652f\u6301\u76f4 Logback)")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",m({parentName:"tr"},{align:null}),"PID"),(0,r.kt)("td",m({parentName:"tr"},{align:null}),"PID"),(0,r.kt)("td",m({parentName:"tr"},{align:null}))))),(0,r.kt)("h2",m({},{id:"\u5e38\u7528\u914d\u7f6e"}),"\u5e38\u7528\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"# \u65e5\u5fd7\u914d\u7f6e\nlogging.level.root: INFO\nlogging.level.org.springframework.web: DEBUG\nlogging.level.org.hibernate: ERROR\n\n# \u542f\u7528 h2 \u63a7\u5236\u53f0\nspring.h2.console.enabled: true\n# \u4fee\u6539\u63a7\u5236\u53f0\u8def\u5f84,\u9ed8\u8ba4 /h2-console\nspring.h2.console.path: /h2-console\n\n# \u4fee\u6539 Jackson \u65f6\u95f4\u683c\u5f0f,\u8bbe\u7f6e\u6b63\u786e\u7684\u65f6\u533a\u975e\u5e38\u91cd\u8981,\u5426\u5219\u4f1a\u5bfc\u81f4\u5e8f\u5217\u5316\u7684\u65f6\u95f4\u6709\u65f6\u5dee\nspring:\n  jackson:\n    date-format: yyyy-MM-dd HH:mm:ss\n    locale: zh_CN\n    time-zone: GMT+8\n")))}h.isMDXComponent=!0}}]);
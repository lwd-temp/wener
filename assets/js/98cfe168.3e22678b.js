"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[16025],{49613:function(e,t,a){a.d(t,{Zo:function(){return k},kt:function(){return d}});var n=a(59496);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},l=Object.keys(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)a=l[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var p=n.createContext({}),s=function(e){var t=n.useContext(p),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},k=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var a=e.components,r=e.mdxType,l=e.originalType,p=e.parentName,k=o(e,["components","mdxType","originalType","parentName"]),c=s(a),u=r,d=c["".concat(p,".").concat(u)]||c[u]||m[u]||l;return a?n.createElement(d,i(i({ref:t},k),{},{components:a})):n.createElement(d,i({ref:t},k))}));function d(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=a.length,i=new Array(l);i[0]=u;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:r,i[1]=o;for(var s=2;s<l;s++)i[s]=a[s];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}u.displayName="MDXCreateElement"},28107:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return y},default:function(){return b},frontMatter:function(){return d},metadata:function(){return N},toc:function(){return v}});var n=a(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,k=(e,t,a)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))p.call(t,a)&&k(e,a,t[a]);if(o)for(var a of o(t))s.call(t,a)&&k(e,a,t[a]);return e},m=(e,t)=>l(e,i(t)),u=(e,t)=>{var a={};for(var n in e)p.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&o)for(var n of o(e))t.indexOf(n)<0&&s.call(e,n)&&(a[n]=e[n]);return a};const d={title:"Keycloak \u5f00\u53d1",tags:["Devlopment"]},y="Keycloak \u5f00\u53d1",N={unversionedId:"service/auth/keycloak/keycloak-dev",id:"service/auth/keycloak/keycloak-dev",title:"Keycloak \u5f00\u53d1",description:"- \u53c2\u8003",source:"@site/../notes/service/auth/keycloak/keycloak-dev.md",sourceDirName:"service/auth/keycloak",slug:"/service/auth/keycloak/dev",permalink:"/notes/service/auth/keycloak/dev",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/keycloak/keycloak-dev.md",tags:[{label:"Devlopment",permalink:"/notes/tags/devlopment"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690946986,formattedLastUpdatedAt:"Aug 2, 2023",frontMatter:{title:"Keycloak \u5f00\u53d1",tags:["Devlopment"]},sidebar:"docs",previous:{title:"keycloak-config-cli",permalink:"/notes/service/auth/keycloak/config-cli"},next:{title:"Keycloak \u5e38\u89c1\u95ee\u9898",permalink:"/notes/service/auth/keycloak/faq"}},h={},v=[{value:"token",id:"token",level:2},{value:"keycloak-services-social-wechatwork",id:"keycloak-services-social-wechatwork",level:2},{value:"\u670d\u52a1\u7aef\u5f00\u53d1",id:"\u670d\u52a1\u7aef\u5f00\u53d1",level:2},{value:"\u5ba2\u6237\u7aef",id:"\u5ba2\u6237\u7aef",level:2},{value:"\u4e3b\u9898",id:"\u4e3b\u9898",level:2},{value:"SPI",id:"spi",level:2},{value:"JavaScript Providers",id:"javascript-providers",level:3},{value:"Authentication SPI",id:"authentication-spi",level:2},{value:"Event Listener SPI",id:"event-listener-spi",level:2},{value:"User Storage SPI",id:"user-storage-spi",level:2},{value:"Vault SPI",id:"vault-spi",level:2},{value:"Provider",id:"provider",level:2}],f={toc:v},g="wrapper";function b(e){var t=e,{components:a}=t,r=u(t,["components"]);return(0,n.kt)(g,m(c(c({},f),r),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"keycloak-\u5f00\u53d1"}),"Keycloak \u5f00\u53d1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u77ed\u4fe1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/gwallet/keycloak-sms-authenticator"}),"gwallet/keycloak-sms-authenticator")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/search?q=keycloak+sms"}),"https://github.com/search?q=keycloak+sms")))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/keycloak/keycloak/blob/master/services/src/main/java/org/keycloak/authentication/authenticators/resetcred/ResetCredentialChooseUser.java"}),"https://github.com/keycloak/keycloak/blob/master/services/src/main/java/org/keycloak/authentication/authenticators/resetcred/ResetCredentialChooseUser.java"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5fae\u4fe1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/jyqq163/keycloak-services-social-weixin"}),"jyqq163/keycloak-services-social-weixin"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6700\u65b0 fork ",(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/zmlgit/keycloak-services-social-weixin"}),"zmlgit/keycloak-services-social-weixin")))))),(0,n.kt)("li",{parentName:"ul"},"\u4f01\u4e1a\u5fae\u4fe1",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/kkzxak47/keycloak-services-social-wechatwork"}),"kkzxak47/keycloak-services-social-wechatwork"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.kkzxak47.com/2019/07/30/%E4%BD%BF%E7%94%A8%E4%BC%81%E4%B8%9A%E5%BE%AE%E4%BF%A1%E7%99%BB%E5%BD%95keycloak"}),"\u4f7f\u7528\u4f01\u4e1a\u5fae\u4fe1\u767b\u5f55 keycloak")))))),(0,n.kt)("li",{parentName:"ul"},"\u9489\u9489"))),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5230\u7684 attributes \u662f ",(0,n.kt)("inlineCode",{parentName:"li"},"Map<String, List<String>> attributes;"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"user \u4f1a\u5904\u7406\u5bf9\u8c61\u8f6c\u6570\u7ec4"),(0,n.kt)("li",{parentName:"ul"},"group \u4e0d\u4f1a\u5904\u7406\uff0c\u9700\u8981\u63d0\u524d\u5904\u7406\u597d"))))),(0,n.kt)("li",{parentName:"ul"},"realm endpoints",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"/protocol/openid-connect/auth"),(0,n.kt)("li",{parentName:"ul"},"/protocol/openid-connect/token"),(0,n.kt)("li",{parentName:"ul"},"/protocol/openid-connect/logout"),(0,n.kt)("li",{parentName:"ul"},"/protocol/openid-connect/login-status-iframe.html"),(0,n.kt)("li",{parentName:"ul"},"/protocol/openid-connect/3p-cookies/step1.html"),(0,n.kt)("li",{parentName:"ul"},"/protocol/openid-connect/registrations"),(0,n.kt)("li",{parentName:"ul"},"/protocol/openid-connect/userinfo"),(0,n.kt)("li",{parentName:"ul"},"/protocol/openid-connect/certs - JWK"))),(0,n.kt)("li",{parentName:"ul"},"kc_idp_hint - \u63d0\u793a\u4f7f\u7528\u7684 provider, \u76f4\u63a5\u8df3\u8f6c")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'# \u542f\u52a8\u5f00\u53d1\u5b9e\u4f8b\n# =========\n# \u7531\u4e8e\u542f\u52a8\u811a\u672c\u7684 --debug \u4e0d\u652f\u6301 java 11 \u6240\u4ee5 debug \u53c2\u6570\u81ea\u884c\u6dfb\u52a0\ndocker run --rm -it \\\n  -p 8080:8080 -p 8097:8097 \\\n  -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin \\\n  -e JAVA_OPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=0.0.0.0:8097 -Xms64m -Xmx512m -XX:MetaspaceSize=96M -XX:MaxMetaspaceSize=256m -Djava.net.preferIPv4Stack=true -Djboss.modules.system.pkgs=org.jboss.byteman -Djava.awt.headless=true" \\\n  -v $PWD/deployments:/opt/jboss/keycloak/standalone/deployments \\\n  -v $PWD/themes/dev:/opt/jboss/keycloak/standalone/themes/dev \\\n  --name keycloak jboss/keycloak\n\n# \u81ea\u5b9a\u4e49 identity \u65f6\u6dfb\u52a0\u81ea\u5b9a\u4e49\u8d44\u6e90\ndocker cp templates/realm-identity-provider-wechat.html keycloak:/opt/jboss/keycloak/themes/base/admin/resources/partials\ndocker cp templates/realm-identity-provider-wechat-ext.html keycloak:/opt/jboss/keycloak/themes/base/admin/resources/partials\n\n# \u542f\u52a8\u5f00\u53d1\u5b9e\u4f8b - \u4e3b\u9898\u5f00\u53d1\n# =========\n# \u4e3a\u4e86\u65b9\u4fbf\u5f00\u53d1 - \u53ef\u4ee5\u6620\u5c04\u6574\u4e2a themes \u76ee\u5f55\n# \u9ed8\u8ba4\u4e0d\u80fd\u6574\u4e2a\u6620\u5c04 themes \u76ee\u5f55 - \u56e0\u4e3a\u76ee\u5f55\u4e0b\u662f\u6709\u5185\u5bb9\u7684 - \u9664\u975e\u5148\u62f7\u8d1d\u51fa\u6765\n\ndocker run --rm -it --name temp jboss/keycloak\ndocker cp temp:/opt/jboss/keycloak/themes .\ndocker rm -f temp\n\ndocker run --rm -it \\\n  -p 8080:8080 -p 8097:8097 \\\n  -e KEYCLOAK_USER=admin -e KEYCLOAK_PASSWORD=admin \\\n  -e JAVA_OPTS="-agentlib:jdwp=transport=dt_socket,server=y,suspend=n,address=0.0.0.0:8097 -Xms64m -Xmx512m -XX:MetaspaceSize=96M -XX:MaxMetaspaceSize=256m -Djava.net.preferIPv4Stack=true -Djboss.modules.system.pkgs=org.jboss.byteman -Djava.awt.headless=true" \\\n  -v $PWD/deployments:/opt/jboss/keycloak/standalone/deployments \\\n  -v $PWD/themes:/opt/jboss/keycloak/themes \\\n  --name keycloak jboss/keycloak\n')),(0,n.kt)("h2",c({},{id:"token"}),"token"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"id_token",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"openid scope"),(0,n.kt)("li",{parentName:"ul"},"identity information about the user is encoded right into the token and"),(0,n.kt)("li",{parentName:"ul"},"the token can be definitively verified to prove that it hasn\u2019t been tampered with."),(0,n.kt)("li",{parentName:"ul"},"auth_time - \u5b9e\u9645\u6388\u6743\u65f6\u95f4"),(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u83b7\u53d6\u7528\u6237 profile"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u4f1a\u7528\u4e8e API \u8bf7\u6c42"))),(0,n.kt)("li",{parentName:"ul"},"access_token",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"bearer token")))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "access_token": "",\n  "expires_in": 300,\n  "refresh_expires_in": 1800,\n  "refresh_token": "",\n  "token_type": "Bearer",\n  "id_token": "",\n  "not-before-policy": 1623227705,\n  "session_state": "UUID",\n  "scope": "openid email profile"\n}\n')),(0,n.kt)("h2",c({},{id:"keycloak-services-social-wechatwork"}),"keycloak-services-social-wechatwork"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/kkzxak47/keycloak-services-social-wechatwork"}),"kkzxak47/keycloak-services-social-wechatwork")),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 qr \u626b\u7801\u767b\u9646"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 \u4f01\u4e1a\u5fae\u4fe1\u73af\u5883 \u76f4\u63a5\u8df3\u8f6c - ua \u5305\u542b wxwork"),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6dfb\u52a0 attributes",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"gender,mobile,status,enable,userid"))),(0,n.kt)("li",{parentName:"ul"},"firstName \u4e3a\u90ae\u7bb1\u524d\u9762\u90e8\u5206"),(0,n.kt)("li",{parentName:"ul"},"lastName \u4e3a name"),(0,n.kt)("li",{parentName:"ul"},"username \u548c brokerUserId \u5747\u4e3a userid")),(0,n.kt)("h2",c({},{id:"\u670d\u52a1\u7aef\u5f00\u53d1"}),"\u670d\u52a1\u7aef\u5f00\u53d1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.keycloak.org/docs/latest/server_development/"}),"\u5f00\u53d1\u6587\u6863"))),(0,n.kt)("h2",c({},{id:"\u5ba2\u6237\u7aef"}),"\u5ba2\u6237\u7aef"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Java keycloak-admin-client")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-java"}),'Keycloak keycloak = Keycloak.getInstance(\n    "http://localhost:8080/auth",\n    "master",\n    "admin",\n    "password",\n    "admin-cli");\nRealmRepresentation realm = keycloak.realm("master").toRepresentation();\n')),(0,n.kt)("h2",c({},{id:"\u4e3b\u9898"}),"\u4e3b\u9898"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.keycloak.org/docs/latest/server_development/#_themes"}),"\u4e3b\u9898\u5f00\u53d1")),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u7c7b\u578b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Account - \u8d26\u53f7\u7ba1\u7406"),(0,n.kt)("li",{parentName:"ul"},"Admin - \u7ba1\u7406\u63a7\u5236\u53f0"),(0,n.kt)("li",{parentName:"ul"},"Email"),(0,n.kt)("li",{parentName:"ul"},"Login - \u767b\u9646\u8868\u5355"),(0,n.kt)("li",{parentName:"ul"},"Welcome - \u6b22\u8fce\u9875"))),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u5305\u542b",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"HTML \u6a21\u677f - Freemaker"),(0,n.kt)("li",{parentName:"ul"},"\u56fe\u7247"),(0,n.kt)("li",{parentName:"ul"},"Message bundles - \u7ffb\u8bd1/I18N"),(0,n.kt)("li",{parentName:"ul"},"CSS"),(0,n.kt)("li",{parentName:"ul"},"\u811a\u672c"),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u5c5e\u6027"))),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u90e8\u7f72\u65b9\u5f0f",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u590d\u5236\u5230 themes \u76ee\u5f55"),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u6253\u5305\u4e3a jar \u8fdb\u884c\u90e8\u7f72 - \u63a8\u8350"))),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u9898\u5305",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"META-INF/keycloak-themes.json")," - \u5305\u6362\u4e3b\u9898\u5217\u8868\u548c\u7c7b\u578b"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u4e3b\u9898"),(0,n.kt)("li",{parentName:"ul"},"\u5c06\u4e3b\u9898\u5305\u653e\u5230 ",(0,n.kt)("inlineCode",{parentName:"li"},"standalone/deployments/")," \u76ee\u5f55\u4f1a\u81ea\u52a8\u52a0\u8f7d")))),(0,n.kt)("p",null,"\u4f8b\u5982\u5305\u5185\u5bb9"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"META-INF/keycloak-themes.json\ntheme/mytheme/login/theme.properties\ntheme/mytheme/login/login.ftl\ntheme/mytheme/login/resources/css/styles.css\ntheme/mytheme/login/resources/img/image.png\ntheme/mytheme/login/messages/messages_en.properties\ntheme/mytheme/email/messages/messages_en.properties\n")),(0,n.kt)("p",null,"\u5219\u5c5e\u6027\u4e3a"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "themes": [\n    {\n      "name": "mytheme",\n      "types": ["login", "email"]\n    }\n  ]\n}\n')),(0,n.kt)("h2",c({},{id:"spi"}),"SPI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5c06 jar \u653e\u5230 ",(0,n.kt)("inlineCode",{parentName:"li"},"standalone/deployments/")," \u8fdb\u884c\u70ed\u90e8\u7f72")),(0,n.kt)("h3",c({},{id:"javascript-providers"}),"JavaScript Providers"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u7ba1\u7406\u5458\u81ea\u5b9a\u4e49\u7279\u6b8a\u529f\u80fd"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u529f\u80fd",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"OpenID Connect Script Protocol Mapper"),(0,n.kt)("li",{parentName:"ul"},"OpenID Connect Script Authenticator"),(0,n.kt)("li",{parentName:"ul"},"JavaScript Policy"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-Dkeycloak.profile.feature.upload_scripts=enable")," \u5f00\u542f\u63a7\u5236\u53f0\u811a\u672c\u4e0a\u4f20")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u6587\u4ef6\u7ed3\u6784")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"META-INF/keycloak-scripts.json\n\nmy-script-authenticator.js\nmy-script-policy.js\nmy-script-mapper.js\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"\u914d\u7f6e\u5185\u5bb9")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "authenticators": [\n    {\n      "name": "My Authenticator",\n      "fileName": "my-authenticator.js",\n      "description": "My Authenticator from a JS file"\n    }\n  ],\n  "policies": [\n    {\n      "name": "My Policy",\n      "fileName": "my-policy.js",\n      "description": "My Policy from a JS file"\n    }\n  ],\n  "mappers": [\n    {\n      "name": "My Mapper",\n      "fileName": "my-mapper.js",\n      "description": "My Mapper from a JS file"\n    }\n  ]\n}\n')),(0,n.kt)("h2",c({},{id:"authentication-spi"}),"Authentication SPI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u9274\u6743")),(0,n.kt)("h2",c({},{id:"event-listener-spi"}),"Event Listener SPI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u76d1\u542c"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"org.keycloak.events.EventListenerProvider"))),(0,n.kt)("h2",c({},{id:"user-storage-spi"}),"User Storage SPI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7528\u6237\u6570\u636e\u5e93\u548c\u6388\u6743\u4fe1\u606f"),(0,n.kt)("li",{parentName:"ul"},"\u5185\u5efa LDAP \u548c AD")),(0,n.kt)("h2",c({},{id:"vault-spi"}),"Vault SPI"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/keycloak/keycloak-community/blob/master/design/secure-credentials-store.md"}),"Secure Credentials Store - Vault SPI"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5173\u4e8e\u96c6\u6210\u5916\u90e8 Vault \u7684\u8ba8\u8bba"))),(0,n.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u5b9e\u73b0 ",(0,n.kt)("inlineCode",{parentName:"li"},"org.keycloak.vault.VaultProvider")," SPI \u53ef\u4ee5\u505a\u5230\u548c\u5916\u90e8\u7cfb\u7edf\u96c6\u6210"),(0,n.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u9694\u79bb\u4e00\u4e9b\u654f\u611f\u4fe1\u606f")),(0,n.kt)("h2",c({},{id:"provider"}),"Provider"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"SPI",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"org.keycloak.broker.provider.IdentityProviderMapper - Provider \u7528\u6237\u5c5e\u6027\u6620\u5c04",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"preprocessFederatedIdentity"),(0,n.kt)("li",{parentName:"ul"},"importNewUser - \u5bfc\u5165\u7528\u6237\u56de\u8c03"),(0,n.kt)("li",{parentName:"ul"},"updateBrokeredUser - \u66f4\u65b0\u7528\u6237\u56de\u8c03"))),(0,n.kt)("li",{parentName:"ul"},"org.keycloak.broker.social.SocialIdentityProviderFactory"))),(0,n.kt)("li",{parentName:"ul"},"AbstractOAuth2IdentityProvider",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"performLogin",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"createAuthorizationUrl - \u521b\u5efa\u6388\u6743\u8df3\u8f6c URL"))),(0,n.kt)("li",{parentName:"ul"},"callback - \u8fd4\u56de\u56de\u8c03 Endpoint \u5904\u7406 - \u5904\u7406 GET \u8bf7\u6c42",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5904\u7406\u56de\u8c03\u56de\u6765\u7684 code, error, state \u7b49"),(0,n.kt)("li",{parentName:"ul"},"\u8fd4\u56de error, cancelled, authenticated"))),(0,n.kt)("li",{parentName:"ul"},"generateTokenRequest - \u901a\u8fc7 code \u751f\u6210\u7b2c\u4e09\u65b9 token \u7684\u8bf7\u6c42"),(0,n.kt)("li",{parentName:"ul"},"getFederatedIdentity - \u7b2c\u4e09\u65b9\u6362\u53d6 token \u751f\u6210 context",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"BrokeredIdentityContext - \u5305\u542b\u6cdb\u5316\u540e\u7684\u8eab\u4efd\u4fe1\u606f"))),(0,n.kt)("li",{parentName:"ul"},"supportsExternalExchange - \u9ed8\u8ba4 false\uff0c\u901a\u8fc7\u5bf9\u5916\u6388\u6743\u7684\u8bbe\u7f6e\u4e3a true"),(0,n.kt)("li",{parentName:"ul"},"exchangeExternal",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"extractIdentityFromProfile",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u53d6\u7b2c\u4e09\u65b9\u8fd4\u56de\u7684\u7ed3\u679c\uff0c\u751f\u6210 context")))))))))}b.isMDXComponent=!0}}]);
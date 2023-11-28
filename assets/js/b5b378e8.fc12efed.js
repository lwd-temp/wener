"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[3270],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return N}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),p=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},m=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,m=o(e,["components","mdxType","originalType","parentName"]),s=p(n),k=a,N=s["".concat(u,".").concat(k)]||s[k]||c[k]||i;return n?r.createElement(N,l(l({ref:t},m),{},{components:n})):r.createElement(N,l({ref:t},m))}));function N(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=k;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[s]="string"==typeof e?e:a,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},94833:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return v},frontMatter:function(){return N},metadata:function(){return d},toc:function(){return g}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&m(e,n,t[n]);if(o)for(var n of o(t))p.call(t,n)&&m(e,n,t[n]);return e},c=(e,t)=>i(e,l(t)),k=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(n[r]=e[r]);return n};const N={id:"security-oauth2",title:"Spring Security OAuth2"},h="Spring Security OAuth2",d={unversionedId:"java/spring/security-oauth2",id:"java/spring/security-oauth2",title:"Spring Security OAuth2",description:"Tips",source:"@site/../notes/java/spring/spring-security-oauth2.md",sourceDirName:"java/spring",slug:"/java/spring/security-oauth2",permalink:"/notes/java/spring/security-oauth2",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/java/spring/spring-security-oauth2.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1602516815,formattedLastUpdatedAt:"Oct 12, 2020",frontMatter:{id:"security-oauth2",title:"Spring Security OAuth2"},sidebar:"docs",previous:{title:"Spring FAQ",permalink:"/notes/java/spring/faq"},next:{title:"Spring Security",permalink:"/notes/java/spring/security"}},f={},g=[{value:"Tips",id:"tips",level:2},{value:"Notes",id:"notes",level:2}],y={toc:g},C="wrapper";function v(e){var t=e,{components:n}=t,a=k(t,["components"]);return(0,r.kt)(C,c(s(s({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"spring-security-oauth2"}),"Spring Security OAuth2"),(0,r.kt)("h2",s({},{id:"tips"}),"Tips"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OAuth2 ",(0,r.kt)("a",s({parentName:"li"},{href:"https://tools.ietf.org/html/rfc6749"}),"rfc6749")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://jmnarloch.wordpress.com/2015/10/07/spring-cloud-feign-spdyhttp2/"}),"Spring Cloud: Feign SPDY/HTTP2")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://jmnarloch.wordpress.com/2015/10/14/spring-cloud-feign-oauth2-authentication/"}),"Spring Cloud: Feign OAuth2 authentication")),(0,r.kt)("li",{parentName:"ul"},"Spring ",(0,r.kt)("a",s({parentName:"li"},{href:"http://projects.spring.io/spring-security-oauth/docs/oauth2.html"}),"OAuth 2 Developers Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://www.baeldung.com/spring-security-oauth-jwt"}),"spring-security-oauth-jwt")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/spring-projects/spring-security-oauth"}),"spring-projects/spring-security-oauth")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://www.baeldung.com/spring-security-oauth-jwt"}),"Using JWT with Spring Security OAuth"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"AS \u9881\u53d1 JWT"),(0,r.kt)("li",{parentName:"ul"},"RS \u63a5\u6536 JWT"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.oauth.com/oauth2-servers/authorization/requiring-user-login"}),"Requiring User Login")),(0,r.kt)("li",{parentName:"ul"},"Access Token \u9ed8\u8ba4\u5931\u6548\u65f6\u95f4\u4e3a 12h"),(0,r.kt)("li",{parentName:"ul"},"Refresh Token \u9ed8\u8ba4\u5931\u6548\u65f6\u95f4\u4e3a 30d")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"curl acme:acmesecret@localhost:8080/oauth/token -d grant_type=client_credentials\ncurl acme:acmesecret@localhost:8080/oauth/token -d grant_type=password -d username=user -d password=...\n\nhttp://localhost:8080/oauth/authorize?response_type=code&client_id=cli&scope=read&state=yes&redirect_uri=http://localhost:8080/cb\nhttp://localhost:8080/oauth/authorize?response_type=token&client_id=cli&scope=read&state=yes&redirect_uri=http://localhost:8080/cb\n")),(0,r.kt)("h2",s({},{id:"notes"}),"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OAuth2",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@EnableAuthorizationServer")," / AS / \u6388\u6743\u670d\u52a1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AuthorizationServerEndpointsConfiguration")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AuthorizationServerSecurityConfiguration"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ClientDetailsServiceConfiguration"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ClientDetailsServiceConfigurer")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AuthorizationServerConfigurer")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AuthorizationServerSecurityConfigurer")))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@EnableOAuth2Client")," / Client / \u5ba2\u6237\u7aef",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u7b80\u5316\u53d1\u8d77 OAuth2 \u7684\u8bf7\u6c42"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"@EnableResourceServer")," / RS / \u8d44\u6e90\u670d\u52a1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ResourceServerConfiguration"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ResourceServerConfigurer")))))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"DefaultTokenServices"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0\u4e86\u6838\u5fc3\u7684\u51e0\u4e2a\u63a5\u53e3 ",(0,r.kt)("inlineCode",{parentName:"li"},"AuthorizationServerTokenServices"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ResourceServerTokenServices"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"ConsumerTokenServices")),(0,r.kt)("li",{parentName:"ul"},"Token \u5b58\u50a8\u4ea4\u7531 ",(0,r.kt)("inlineCode",{parentName:"li"},"TokenStore")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AuthorizationServerEndpointsConfigurer"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u914d\u7f6e\u5bf9\u8c61, \u6240\u6709\u7684\u76f8\u5173\u63a5\u53e3\u548c\u914d\u7f6e"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AuthorizationServerConfigurer"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OAUth2 Authorization Server \u914d\u7f6e\u63a5\u53e3"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ApprovalStore"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u7528\u6237\u6279\u51c6\u7684\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},"\u6bcf\u4e2a\u7528\u6237,\u6bcf\u4e2a\u5ba2\u6237\u7aef"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OAuth2RequestFactory"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7ba1\u7406 OAuth2 \u8bf7\u6c42"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ClientDetails"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OAuth2 \u7684\u5ba2\u6237\u7aef\u4fe1\u606f"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ClientDetailsService"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5ba2\u6237\u7aef\u4fe1\u606f"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ClientRegistrationService"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6dfb\u52a0\u4fee\u6539\u548c\u5220\u9664\u5ba2\u6237\u7aef\u4fe1\u606f"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OAuth2SecurityExpressionMethods"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8868\u8fbe\u5f0f\u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"oauth2")," \u65b9\u6cd5"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"OAuth2AccessToken"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TokenEnhancer"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9 Token \u5bf9\u8c61\u8fdb\u884c\u589e\u5f3a"),(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u5b9e\u73b0 JWT \u6dfb\u52a0\u81ea\u5b9a\u4e49 Claims"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TokenEnhancerChain")," \u5b9e\u73b0\u4e00\u7ec4\u589e\u5f3a"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TokenStore"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8 OAuth2 Token"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ConsumerTokenServices"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u56de\u6536 Token"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TokenGranter"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u5e94 OAuth2 \u4e2d\u7684\u4e0d\u540c\u6388\u6743\u7c7b\u578b"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AuthorizationCodeServices"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u548c\u5b58\u50a8 authorization_code"))),(0,r.kt)("li",{parentName:"ul"},"\u8d26\u53f7\u5bc6\u7801\u7684\u6388\u6743\u4f1a\u4f7f\u7528 Spring Security \u4e2d\u7684 ",(0,r.kt)("inlineCode",{parentName:"li"},"AuthenticationManager")," \u6765\u5224\u65ad\u662f\u5426\u6388\u6743\u6210\u529f")))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"TokenGranter"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u751f\u6210\u4e0d\u540c\u7c7b\u578b\u7684 Token"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ImplicitTokenGranter"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"implicit"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"RefreshTokenGranter"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"refresh_token"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"AuthorizationCodeTokenGranter"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"authorization_code"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ResourceOwnerPasswordTokenGranter"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"password"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"ClientCredentialsTokenGranter"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"client_credentials")))))),(0,r.kt)("p",null,"AuthorizationEndpoint\n/oauth2/authorize"),(0,r.kt)("p",null,"AuthorizationEndpoint\n/oauth2/token"),(0,r.kt)("p",null,"/oauth/confirm_access\n/oauth/error"))}v.isMDXComponent=!0}}]);
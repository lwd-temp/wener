"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[97728],{49613:function(e,t,a){a.d(t,{Zo:function(){return m},kt:function(){return d}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function p(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var o=r.createContext({}),u=function(e){var t=r.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},m=function(e){var t=u(e.components);return r.createElement(o.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,o=e.parentName,m=p(e,["components","mdxType","originalType","parentName"]),s=u(a),k=n,d=s["".concat(o,".").concat(k)]||s[k]||c[k]||l;return a?r.createElement(d,i(i({ref:t},m),{},{components:a})):r.createElement(d,i({ref:t},m))}));function d(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,i=new Array(l);i[0]=k;var p={};for(var o in t)hasOwnProperty.call(t,o)&&(p[o]=t[o]);p.originalType=e,p[s]="string"==typeof e?e:n,i[1]=p;for(var u=2;u<l;u++)i[u]=a[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}k.displayName="MDXCreateElement"},94739:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return h},default:function(){return y},frontMatter:function(){return d},metadata:function(){return N},toc:function(){return b}});var r=a(49613),n=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,m=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,s=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&m(e,a,t[a]);if(p)for(var a of p(t))u.call(t,a)&&m(e,a,t[a]);return e},c=(e,t)=>l(e,i(t)),k=(e,t)=>{var a={};for(var r in e)o.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&u.call(e,r)&&(a[r]=e[r]);return a};const d={title:"LADP",tags:["LDAP"]},h="LADP",N={unversionedId:"service/auth/ldap/README",id:"service/auth/ldap/README",title:"LADP",description:"| LDAP         | DB          |",source:"@site/../notes/service/auth/ldap/README.md",sourceDirName:"service/auth/ldap",slug:"/service/auth/ldap/",permalink:"/notes/service/auth/ldap/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/auth/ldap/README.md",tags:[{label:"LDAP",permalink:"/notes/tags/ldap"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1672043702,formattedLastUpdatedAt:"Dec 26, 2022",frontMatter:{title:"LADP",tags:["LDAP"]},sidebar:"docs",previous:{title:"Kratos",permalink:"/notes/service/auth/kratos"},next:{title:"ApacheDS Kerberos",permalink:"/notes/service/auth/ldap/apacheds-kerberos"}},f={},b=[{value:"fortress",id:"fortress",level:3},{value:"Usecase",id:"usecase",level:2},{value:"\u5e38\u89c1\u7ed3\u6784",id:"\u5e38\u89c1\u7ed3\u6784",level:2}],g={toc:b},w="wrapper";function y(e){var t=e,{components:a}=t,n=k(t,["components"]);return(0,r.kt)(w,c(s(s({},g),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"ladp"}),"LADP"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",s({parentName:"tr"},{align:null}),"LDAP"),(0,r.kt)("th",s({parentName:"tr"},{align:null}),"DB"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"dn"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"primary key")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"object class"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"table")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"entry"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"row")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",s({parentName:"tr"},{align:null}),"schema"),(0,r.kt)("td",s({parentName:"tr"},{align:null}),"constraint")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u7aef\u53e3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"389 ldap"),(0,r.kt)("li",{parentName:"ul"},"636,3269 ldaps - LDAP over SSL"),(0,r.kt)("li",{parentName:"ul"},"389 - starttls - LDAP over TLS - ",(0,r.kt)("a",s({parentName:"li"},{href:"https://www.rfc-editor.org/rfc/rfc2830"}),"rfc2830")))),(0,r.kt)("li",{parentName:"ul"},"LDAP vs Kerberos",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"LDAP",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e\u96c6\u4e2d\u8d26\u6237\u7ba1\u7406"))),(0,r.kt)("li",{parentName:"ul"},"Kerberos",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u7528\u4e8e SSO"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 LDAP \u4f5c\u4e3a\u8ba4\u8bc1\u6765\u6e90"))))),(0,r.kt)("li",{parentName:"ul"},"\u64cd\u4f5c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Add"),(0,r.kt)("li",{parentName:"ul"},"Bind - \u8ba4\u8bc1"),(0,r.kt)("li",{parentName:"ul"},"Delete"),(0,r.kt)("li",{parentName:"ul"},"Modify"),(0,r.kt)("li",{parentName:"ul"},"Unbind - \u65ad\u5f00\u8ba4\u8bc1\u8fde\u63a5"))),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Anonymous"),(0,r.kt)("li",{parentName:"ul"},"Simple"),(0,r.kt)("li",{parentName:"ul"},"SASL (Simple Authentication and Security Layer)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"TLS, Kerberos"))))),(0,r.kt)("li",{parentName:"ul"},"LDAPv3 Password Modify Extended Operation"),(0,r.kt)("li",{parentName:"ul"},"DSA - Directory System Agent"),(0,r.kt)("li",{parentName:"ul"},"PAM - Privileged Access Management"),(0,r.kt)("li",{parentName:"ul"},"Reference",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://www.zytrax.com/books/ldap/"}),"LDAP for Rocket Scientists")))),(0,r.kt)("li",{parentName:"ul"},"LDAP \u4f7f\u7528",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/List_of_LDAP_software"}),"List of LDAP software")),(0,r.kt)("li",{parentName:"ul"},"iOS/macOS \u652f\u6301\u6dfb\u52a0 LDAP \u5bfc\u5165\u8054\u7cfb\u4eba"),(0,r.kt)("li",{parentName:"ul"},"\u5b58\u50a8",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"PowerDNS ",(0,r.kt)("a",s({parentName:"li"},{href:"https://doc.powerdns.com/md/authoritative/backend-ldap/"}),"backend-ldap")))),(0,r.kt)("li",{parentName:"ul"},"\u8ba4\u8bc1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Gitlab ",(0,r.kt)("a",s({parentName:"li"},{href:"https://docs.gitlab.com/ce/administration/auth/ldap.html"}),"LDAP")),(0,r.kt)("li",{parentName:"ul"},"Gogs/Gitea ",(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/go-gitea/gitea/tree/master/modules/auth/ldap"}),"LDAP Authentication Module")),(0,r.kt)("li",{parentName:"ul"},"Nexus ",(0,r.kt)("a",s({parentName:"li"},{href:"https://books.sonatype.com/nexus-book/reference/ldap.html"}),"LDAP Integration")),(0,r.kt)("li",{parentName:"ul"},"Nginx ",(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/kvspb/nginx-auth-ldap"}),"nginx-auth-ldap")),(0,r.kt)("li",{parentName:"ul"},"Linux",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.ibm.com/developerworks/cn/linux/1406_liulz_pamopenldap/"}),"\u4f7f\u7528 PAM \u96c6\u6210 OpenLDAP \u5b9e\u73b0 Linux \u7edf\u4e00\u7ba1\u7406\u7cfb\u7edf\u7528\u6237")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.s3it.uzh.ch/use/2014-11-04.linux-ldap-auth/slides.pdf"}),"Linux LDAP authentication")))),(0,r.kt)("li",{parentName:"ul"},"SSH",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://serverfault.com/questions/653792"}),"SSH key authentication using LDAP")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/jirutka/ssh-ldap-pubkey"}),"ssh-ldap-pubkey")))),(0,r.kt)("li",{parentName:"ul"},"Odoo ",(0,r.kt)("a",s({parentName:"li"},{href:"https://www.odoo.com/apps/modules/online/auth_ldap/"}),"auth_ldap")),(0,r.kt)("li",{parentName:"ul"},"Piwik ",(0,r.kt)("a",s({parentName:"li"},{href:"https://plugins.piwik.org/LoginLdap"}),"LoginLdap")),(0,r.kt)("li",{parentName:"ul"},"Rundeck ",(0,r.kt)("a",s({parentName:"li"},{href:"http://rundeck.org/2.5.1/administration/authenticating-users.html#ldap"}),"ldap")),(0,r.kt)("li",{parentName:"ul"},"Windows",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://pgina.org/"}),"pgina")," \u4e0d\u6d3b\u8dc3"),(0,r.kt)("li",{parentName:"ul"},"Samba \u63d0\u4f9b AD \u670d\u52a1, \u540e\u7aef\u5bf9\u63a5 LDAP"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://serverfault.com/q/2769/190601"}),"Can Windows integrate with LDAP?")))),(0,r.kt)("li",{parentName:"ul"},"Samba",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.ibm.com/developerworks/cn/education/linux/smb-ldap/smb-ldap.html"}),"\u5c06 LDAP \u76ee\u5f55\u7528\u4e8e Samba \u8ba4\u8bc1")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://wiki.samba.org/index.php/Samba_&_LDAP"}),"Samba & LDAP")),(0,r.kt)("li",{parentName:"ul"},"Ubuntu ",(0,r.kt)("a",s({parentName:"li"},{href:"https://help.ubuntu.com/lts/serverguide/samba-ldap.html"}),"Samba and Ldap")))),(0,r.kt)("li",{parentName:"ul"},"MySQL ",(0,r.kt)("a",s({parentName:"li"},{href:"https://dev.mysql.com/doc/mysql-security-excerpt/5.6/en/pam-authentication-ldap-without-proxy.html"}),"LDAP Authentication without Proxy Users")),(0,r.kt)("li",{parentName:"ul"},"MongoDB",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://docs.mongodb.com/manual/core/security-ldap-external/"}),"LDAP Authorization")))))),(0,r.kt)("li",{parentName:"ul"},"\u5e93",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/pac4j/pac4j"}),"pac4j")," \u652f\u6301 LDAP"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://projects.spring.io/spring-ldap/"}),"spring-ldap")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Java_Naming_and_Directory_Interface"}),"JNDI")))))),(0,r.kt)("li",{parentName:"ul"},"Kerberos \u4f7f\u7528",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8ba4\u8bc1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SSH",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://www.ibm.com/support/knowledgecenter/en/ssw_aix_61/com.ibm.aix.security/using_openssh_with_kerberosv5.htm"}),"Using OpenSSH with Kerberos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://serverfault.com/q/329901/190601"}),"How does Kerberos work with SSH?")),(0,r.kt)("li",{parentName:"ul"},"sshd_config ",(0,r.kt)("a",s({parentName:"li"},{href:"http://man.openbsd.org/sshd_config#GSSAPIAuthentication"}),"GSSAPIAuthentication")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://dovetail.com/docs/ssh/kerberos_sso.pdf"}),"Using OpenSSH in a Single Sign-On Corporate Environment with z/OS,Windows and Linux")))),(0,r.kt)("li",{parentName:"ul"},"MongoDB ",(0,r.kt)("a",s({parentName:"li"},{href:"https://docs.mongodb.com/manual/core/kerberos/"}),"Kerberos Authentication")),(0,r.kt)("li",{parentName:"ul"},"Keycloak ",(0,r.kt)("a",s({parentName:"li"},{href:"https://keycloak.gitbooks.io/server-adminstration-guide/content/topics/authentication/kerberos.html"}),"Kerberos")))),(0,r.kt)("li",{parentName:"ul"},"\u5e93",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://projects.spring.io/spring-security-kerberos/"}),"spring-security-kerberos")))))),(0,r.kt)("li",{parentName:"ul"},"Reference",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"LDAP",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://quark.humbug.org.au/publications/ldap/ldap_tut_v2.pdf"}),"LDAP tut v2"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6f14\u793a\u6587\u7a3f"),(0,r.kt)("li",{parentName:"ul"},"\u975e\u5e38\u597d\u7684\u8bb2\u89e3"),(0,r.kt)("li",{parentName:"ul"},"\u903b\u8f91\u68b3\u7406\u7684\u975e\u5e38\u6e05\u6670"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://blog.clanzx.net/2013/09/27/ldap-kerberos.html"}),"\u4f7f\u7528 LDAP + Kerberos \u5b9e\u73b0\u96c6\u4e2d\u7528\u6237\u8ba4\u8bc1\u53ca\u6388\u6743\u7cfb\u7edf")),(0,r.kt)("li",{parentName:"ul"},"MSDN ",(0,r.kt)("a",s({parentName:"li"},{href:"https://msdn.microsoft.com/en-us/library/aa367008(v=vs.85).aspx"}),"Lightweight Directory Access Protocol")))),(0,r.kt)("li",{parentName:"ul"},"Kerberos",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://www.kerberos.org/software/adminkerberos.pdf"}),"The MIT Kerberos Administrator\u2019s How-to Guide")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://www.kerberos.org/software/whykerberos.pdf"}),"whykerberos")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://doc.lagout.org/network/Kerberos%20The%20Definitive%20Guide%202003.pdf"}),"Kerberos: The Definitive Guide")))))),(0,r.kt)("li",{parentName:"ul"},"\u63a8\u8350\u901a\u8fc7 \u5b89\u5168\u534f\u8bae \u4f7f\u7528 - LDAPS, StartTLS")),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"https://github.com/github/github-ldap"}),"https://github.com/github/github-ldap")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://www.zytrax.com/books/ldap/ape/"}),"LDAP - Object Classes and Attributes"))),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"https://www.manageengine.com/products/ad-manager/help/csv-import-management/active-directory-ldap-attributes.html"}),"https://www.manageengine.com/products/ad-manager/help/csv-import-management/active-directory-ldap-attributes.html")),(0,r.kt)("p",null,"Kerberos 5\n",(0,r.kt)("a",s({parentName:"p"},{href:"http://searchsecurity.techtarget.com/definition/Kerberos"}),"http://searchsecurity.techtarget.com/definition/Kerberos"),"\n",(0,r.kt)("a",s({parentName:"p"},{href:"https://en.wikipedia.org/wiki/Authentication_server"}),"https://en.wikipedia.org/wiki/Authentication_server"),"\nChange Password Protocol\n",(0,r.kt)("a",s({parentName:"p"},{href:"http://directory.apache.org/"}),"http://directory.apache.org/")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"tools",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://linux.die.net/man/1/ldapsearch"}),"ldapsearch.1")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://ldapwiki.com/wiki/GroupOfUniqueNames%20vs%20groupOfNames"}),"GroupOfUniqueNames vs groupOfNames")),(0,r.kt)("li",{parentName:"ul"},"acl",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://directory.apache.org/apacheds/advanced-ug/4.2.7.1-enable-authenticated-users-to-browse-and-read-entries.html"}),"Enable Authenticated Users to Browse and Read Entries")))),(0,r.kt)("li",{parentName:"ul"},"NOTE",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"LDAPS \u5df2\u7ecf\u5e9f\u5f03, \u5efa\u8bae\u4f7f\u7528 StartTLS"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://forum.forgerock.com/2015/04/ldaps-or-starttls-that-is-the-question/"}),"https://forum.forgerock.com/2015/04/ldaps-or-starttls-that-is-the-question/")),(0,r.kt)("li",{parentName:"ul"},"ldif",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://en.wikipedia.org/wiki/LDAP_Data_Interchange_Format"}),"https://en.wikipedia.org/wiki/LDAP_Data_Interchange_Format"))))),(0,r.kt)("p",null,(0,r.kt)("a",s({parentName:"p"},{href:"https://github.com/Pryz/terraform-provider-ldap"}),"https://github.com/Pryz/terraform-provider-ldap")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u4ee5\u7b80\u5316\u64cd\u4f5c\nalias ldapsearch=\"ldapsearch -H ldap://127.0.0.1:10389 -D 'uid=admin,ou=system' -w secret\"\n# \u68c0\u6d4b\u7528\u6237\u662f\u5426\u5728\u7ec4\u4e2d\nldapsearch -b 'cn=developer,ou=groups,dc=example,dc=com' '(&(member=uid=wener,ou=users,dc=example,dc=com))'\n")),(0,r.kt)("p",null,"cn=developer,ou=groups,dc=wener,dc=me"),(0,r.kt)("h3",s({},{id:"fortress"}),"fortress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/apache/directory-fortress-core/blob/master/README-QUICKSTART-DOCKER-APACHEDS.md"}),"https://github.com/apache/directory-fortress-core/blob/master/README-QUICKSTART-DOCKER-APACHEDS.md")),(0,r.kt)("li",{parentName:"ul"},"\u7528\u5230\u7684 schema",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://github.com/apache/directory-fortress-core/tree/master/ldap/schema"}),"https://github.com/apache/directory-fortress-core/tree/master/ldap/schema"))))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u4e0b\u8f7d\u5e76\u52a0\u8f7d schema\nwget https://raw.githubusercontent.com/apache/directory-fortress-core/master/ldap/schema/apacheds-fortress.ldif\nldapmodify -h localhost -p 10389 -D uid=admin,ou=system -w secret -a -f apacheds-fortress.ldif\n\n# \u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 jetty-runner \u6765\u6267\u884c war\nwget http://maven.aliyun.com/nexus/content/groups/public/org/eclipse/jetty/jetty-runner/9.4.6.v20170531/jetty-runner-9.4.6.v20170531.jar -O jetty-runner.jar\n\njava -jar jetty-runner.jar --port 8081 fortress-rest.war\n")),(0,r.kt)("h2",s({},{id:"usecase"}),"Usecase"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"OpenVPN"),(0,r.kt)("li",{parentName:"ul"},"Jenkins"),(0,r.kt)("li",{parentName:"ul"},"Kubernetes"),(0,r.kt)("li",{parentName:"ul"},"Docker"),(0,r.kt)("li",{parentName:"ul"},"Atlassian Jira & Confluence"),(0,r.kt)("li",{parentName:"ul"},"Linux Samba")),(0,r.kt)("h2",s({},{id:"\u5e38\u89c1\u7ed3\u6784"}),"\u5e38\u89c1\u7ed3\u6784"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"dc=wener,dc=me",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ou=users",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"cn=USERNAME - \u7528\u6237 - inetOrgPerson,organizationalPerson,person",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MUST cn, sn"),(0,r.kt)("li",{parentName:"ul"},"uid \u552f\u4e00\u6807\u8bc6\u7b26"),(0,r.kt)("li",{parentName:"ul"},"cn \u540d\u79f0"),(0,r.kt)("li",{parentName:"ul"},"sn \u59d3"),(0,r.kt)("li",{parentName:"ul"},"givenName"),(0,r.kt)("li",{parentName:"ul"},"mail"))),(0,r.kt)("li",{parentName:"ul"},"cn= - Linux \u7528\u6237 - posixAccount",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MUST uidNumber, gidNumber"))))),(0,r.kt)("li",{parentName:"ul"},"ou=groups",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"cn=GROUPNAME - \u5206\u7ec4 - groupOfNames",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"member - \u6210\u5458"),(0,r.kt)("li",{parentName:"ul"},"entryDN - \u7ec4\u6210\u5458\u5c5e\u6027\u3001\u7ec4 DN \u5c5e\u6027"),(0,r.kt)("li",{parentName:"ul"},"displayName - \u5982\u679c\u4e0d\u60f3\u663e\u793a cn \u53ef\u4ee5\u8003\u8651\u4f7f\u7528\u8be5\u5c5e\u6027"))),(0,r.kt)("li",{parentName:"ul"},"cn=admin - Linux \u5206\u7ec4 posixGroup",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MUST gidNumber"))))),(0,r.kt)("li",{parentName:"ul"},"ou=rules",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"cn=NAME - groupOfNames"))),(0,r.kt)("li",{parentName:"ul"},"ou=service - Service Account",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"uid=keycloak - simpleSecurityObject,account",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MUST uid, userPassword"))))),(0,r.kt)("li",{parentName:"ul"},"ou=policies - \u7b56\u7565",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"cn=default - pwdPolicy,namedPolicy,top"))))),(0,r.kt)("li",{parentName:"ul"},"c=\u56fd\u5bb6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"o=\u7ec4\u7ec7")))),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# \u4ee5\u7b80\u5316\u64cd\u4f5c\nalias ldapsearch=\"ldapsearch -H ldap://127.0.0.1:10389 -D 'uid=admin,ou=system' -w admin\"\n# \u68c0\u6d4b\u7528\u6237\u662f\u5426\u5728\u7ec4\u4e2d\nldapsearch -b 'cn=developer,ou=groups,dc=example,dc=com' '(&(member=uid=wener,ou=users,dc=example,dc=com))'\n\nldapsearch -b 'ou=users,dc=wener,dc=me' '(uid=wener.cyw)'\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://www.zytrax.com/books/ldap/ch3/"}),"LDAP Schemas, objectClasses and Attributes")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://www.ldapexplorer.com/en/manual/107060000-ldap-object-classes.htm"}),"Ldap Object Class")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://ldapwiki.com/wiki/ObjectClass"}),"ObjectClass")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://directory.apache.org/apacheds/basic-ug/3.2-basic-authorization.html"}),"basic auth acl"))))}y.isMDXComponent=!0}}]);
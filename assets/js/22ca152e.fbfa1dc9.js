"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68330],{49613:function(t,e,n){n.d(e,{Zo:function(){return k},kt:function(){return g}});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function p(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var o=r.createContext({}),m=function(t){var e=r.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):p(p({},e),t)),n},k=function(t){var e=m(t.components);return r.createElement(o.Provider,{value:e},t.children)},d="mdxType",u={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},N=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,o=t.parentName,k=i(t,["components","mdxType","originalType","parentName"]),d=m(n),N=a,g=d["".concat(o,".").concat(N)]||d[N]||u[N]||l;return n?r.createElement(g,p(p({ref:e},k),{},{components:n})):r.createElement(g,p({ref:e},k))}));function g(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,p=new Array(l);p[0]=N;var i={};for(var o in e)hasOwnProperty.call(e,o)&&(i[o]=e[o]);i.originalType=t,i[d]="string"==typeof t?t:a,p[1]=i;for(var m=2;m<l;m++)p[m]=n[m];return r.createElement.apply(null,p)}return r.createElement.apply(null,n)}N.displayName="MDXCreateElement"},77217:function(t,e,n){n.r(e),n.d(e,{assets:function(){return c},contentTitle:function(){return b},default:function(){return v},frontMatter:function(){return g},metadata:function(){return s},toc:function(){return y}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,k=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))o.call(e,n)&&k(t,n,e[n]);if(i)for(var n of i(e))m.call(e,n)&&k(t,n,e[n]);return t},u=(t,e)=>l(t,p(e)),N=(t,e)=>{var n={};for(var r in t)o.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&i)for(var r of i(t))e.indexOf(r)<0&&m.call(t,r)&&(n[r]=t[r]);return n};const g={title:"\u5e38\u89c1\u7aef\u53e3\u53f7"},b="Port",s={unversionedId:"network/internet/ports",id:"network/internet/ports",title:"\u5e38\u89c1\u7aef\u53e3\u53f7",description:"| plain | secure | protocol               |",source:"@site/../notes/network/internet/ports.md",sourceDirName:"network/internet",slug:"/network/internet/ports",permalink:"/notes/network/internet/ports",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/network/internet/ports.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1694402622,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{title:"\u5e38\u89c1\u7aef\u53e3\u53f7"},sidebar:"docs",previous:{title:"Mac Address",permalink:"/notes/network/internet/mac-address"},next:{title:"InfiniBand",permalink:"/notes/network/link/infiniband"}},c={},y=[{value:"Well-known ports",id:"well-known-ports",level:2},{value:"Registered ports",id:"registered-ports",level:2},{value:"Application ports",id:"application-ports",level:2}],f={toc:y},P="wrapper";function v(t){var e=t,{components:n}=e,a=N(e,["components"]);return(0,r.kt)(P,u(d(d({},f),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",d({},{id:"port"}),"Port"),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"plain"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"secure"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"protocol"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"25"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"465"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"SMTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"53"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"853"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"DNS over QUIC/TLS/DTLS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"80"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"443"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"HTTP,HTTPS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"110"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"995"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"POP3S,POP3S")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"220"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"993"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"IMAP,IMAPS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"389"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"636"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LDAP,LDAPS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"3478"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"5349"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"TURN/STURN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"3306"),(0,r.kt)("td",d({parentName:"tr"},{align:null})),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"MySQL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"5432"),(0,r.kt)("td",d({parentName:"tr"},{align:null})),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"PostgreSQL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"6379"),(0,r.kt)("td",d({parentName:"tr"},{align:null})),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Redis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"8080"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"8443"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"HTTP Alt")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"27017"),(0,r.kt)("td",d({parentName:"tr"},{align:null})),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Mongo")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"over TLS/SSL/DTLS/QUIC")),(0,r.kt)("h2",d({},{id:"well-known-ports"}),"Well-known ports"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Well-known \u7aef\u53e3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7aef\u53e3\u53f7 < 1024")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Port"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"9"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Discard Protocol",(0,r.kt)("br",null)," Wake on LAN")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"22"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"SSH")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"23"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Telnet")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"25"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"SMTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"43"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"WHOIS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"53"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"DNS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"67/UDP"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"BOOTP Server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"68/UDP"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"BOOTP Client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"69/UDP"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"TFTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"70"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Gopher")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"80"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"HTTP, QUIC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"88"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Kerberos")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"123"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"NTP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"137"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"NetBIOS Name Service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"138"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"NetBIOS Datagram Service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"139"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"NetBIOS Session Service")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"179"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"BGP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"194"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"IRC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"220"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"IMAPv3")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"264"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"BGMP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"389"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"LDAP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"443"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"HTTPS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"514"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"syslog")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"546"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"DHCPv6 Client")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"547"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"DHCPv6 Server")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"548"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"AFP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"554"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"RTSP")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"873"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"rsync")))),(0,r.kt)("h2",d({},{id:"registered-ports"}),"Registered ports"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u5b98\u65b9\u6ce8\u518c\u7aef\u53e3\uff0c\u65e2\u5b9a\u4e8b\u5b9e\u7aef\u53e3\u3002")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Port"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"1080"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"SOCKS/HTTP Proxy")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"3306"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"MySQL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"5432"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"PostgreSQL")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"6379"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"Redis")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"32274"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"FabricRPC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"5900"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"RFB",(0,r.kt)("br",null),"VNC")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"3478"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"STUN",(0,r.kt)("br",null),"TURN",(0,r.kt)("br",null),"STUN Behavior Discovery")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"5349"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"STUN over TLS/DTLS",(0,r.kt)("br",null)," TURN over TLS/DTLS",(0,r.kt)("br",null)," STUN Behavior Discovery over TLS")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"6000-6063"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"X11 Client/Server")))),(0,r.kt)("h2",d({},{id:"application-ports"}),"Application ports"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u975e\u5b98\u65b9\uff0c\u4f46\u5b9e\u9645\u4f7f\u7528\u5e38\u89c1\u7684\u7aef\u53e3")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",d({parentName:"tr"},{align:null}),"Port"),(0,r.kt)("th",d({parentName:"tr"},{align:null}),"for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"6443"),(0,r.kt)("td",d({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"8080"),(0,r.kt)("td",d({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"3000"),(0,r.kt)("td",d({parentName:"tr"},{align:null}))),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",d({parentName:"tr"},{align:null}),"2197"),(0,r.kt)("td",d({parentName:"tr"},{align:null}),"APNS HTTP/2 JSON API")))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"IANA ",(0,r.kt)("a",d({parentName:"li"},{href:"https://www.iana.org/assignments/service-names-port-numbers/service-names-port-numbers.xhtml"}),"Service Name and Transport Protocol Port Number Registry")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",d({parentName:"li"},{href:"https://en.wikipedia.org/wiki/List_of_TCP_and_UDP_port_numbers"}),"List of TCP and UDP port numbers"))))}v.isMDXComponent=!0}}]);
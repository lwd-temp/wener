"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[55678],{49613:function(t,e,a){a.d(e,{Zo:function(){return m},kt:function(){return c}});var n=a(59496);function l(t,e,a){return e in t?Object.defineProperty(t,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):t[e]=a,t}function r(t,e){var a=Object.keys(t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(t);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),a.push.apply(a,n)}return a}function i(t){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?r(Object(a),!0).forEach((function(e){l(t,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(a,e))}))}return t}function p(t,e){if(null==t)return{};var a,n,l=function(t,e){if(null==t)return{};var a,n,l={},r=Object.keys(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||(l[a]=t[a]);return l}(t,e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);for(n=0;n<r.length;n++)a=r[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(t,a)&&(l[a]=t[a])}return l}var u=n.createContext({}),o=function(t){var e=n.useContext(u),a=e;return t&&(a="function"==typeof t?t(e):i(i({},e),t)),a},m=function(t){var e=o(t.components);return n.createElement(u.Provider,{value:e},t.children)},k="mdxType",N={inlineCode:"code",wrapper:function(t){var e=t.children;return n.createElement(n.Fragment,{},e)}},s=n.forwardRef((function(t,e){var a=t.components,l=t.mdxType,r=t.originalType,u=t.parentName,m=p(t,["components","mdxType","originalType","parentName"]),k=o(a),s=l,c=k["".concat(u,".").concat(s)]||k[s]||N[s]||r;return a?n.createElement(c,i(i({ref:e},m),{},{components:a})):n.createElement(c,i({ref:e},m))}));function c(t,e){var a=arguments,l=e&&e.mdxType;if("string"==typeof t||l){var r=a.length,i=new Array(r);i[0]=s;var p={};for(var u in e)hasOwnProperty.call(e,u)&&(p[u]=e[u]);p.originalType=t,p[k]="string"==typeof t?t:l,i[1]=p;for(var o=2;o<r;o++)i[o]=a[o];return n.createElement.apply(null,i)}return n.createElement.apply(null,a)}s.displayName="MDXCreateElement"},20565:function(t,e,a){a.r(e),a.d(e,{assets:function(){return g},contentTitle:function(){return d},default:function(){return T},frontMatter:function(){return c},metadata:function(){return f},toc:function(){return b}});var n=a(49613),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,m=(t,e,a)=>e in t?l(t,e,{enumerable:!0,configurable:!0,writable:!0,value:a}):t[e]=a,k=(t,e)=>{for(var a in e||(e={}))u.call(e,a)&&m(t,a,e[a]);if(p)for(var a of p(e))o.call(e,a)&&m(t,a,e[a]);return t},N=(t,e)=>r(t,i(e)),s=(t,e)=>{var a={};for(var n in t)u.call(t,n)&&e.indexOf(n)<0&&(a[n]=t[n]);if(null!=t&&p)for(var n of p(t))e.indexOf(n)<0&&o.call(t,n)&&(a[n]=t[n]);return a};const c={id:"iptables-ref",title:"iptables \u53c2\u8003"},d="iptables \u53c2\u8003",f={unversionedId:"os/linux/network/iptables-ref",id:"os/linux/network/iptables-ref",title:"iptables \u53c2\u8003",description:"- How To Choose an Effective Firewall Policy to Secure your Servers",source:"@site/../notes/os/linux/network/iptables-ref.md",sourceDirName:"os/linux/network",slug:"/os/linux/network/iptables-ref",permalink:"/notes/os/linux/network/iptables-ref",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/network/iptables-ref.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1615297598,formattedLastUpdatedAt:"Mar 9, 2021",frontMatter:{id:"iptables-ref",title:"iptables \u53c2\u8003"},sidebar:"docs",previous:{title:"IPTables Cookbook",permalink:"/notes/os/linux/network/iptables-cookbook"},next:{title:"iptables \u89c4\u5219",permalink:"/notes/os/linux/network/iptables-rule"}},g={},b=[{value:"Hook",id:"hook",level:2},{value:"\u5167\u5efa\u76ee\u6807",id:"\u5167\u5efa\u76ee\u6807",level:2},{value:"\u8fde\u63a5\u72b6\u6001",id:"\u8fde\u63a5\u72b6\u6001",level:2},{value:"\u5e38\u7528\u5339\u914d\u6a21\u5757",id:"\u5e38\u7528\u5339\u914d\u6a21\u5757",level:2},{value:"A Deep Dive into Iptables and Netfilter Architecture",id:"a-deep-dive-into-iptables-and-netfilter-architecture",level:2}],h={toc:b},O="wrapper";function T(t){var e=t,{components:a}=e,l=s(e,["components"]);return(0,n.kt)(O,N(k(k({},h),l),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",k({},{id:"iptables-\u53c2\u8003"}),"iptables \u53c2\u8003"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/how-to-choose-an-effective-firewall-policy-to-secure-your-servers"}),"How To Choose an Effective Firewall Policy to Secure your Servers")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"http://www.chiark.greenend.org.uk/~peterb/network/drop-vs-reject"}),"Drop versus Reject")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://gist.github.com/mcastelino/c38e71eb0809d1427a6650d843c42ac2"}),"iptables-cheatsheet.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"http://ipset.netfilter.org/ipset.man.html"}),"http://ipset.netfilter.org/ipset.man.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://github.com/coreos/go-iptables"}),"https://github.com/coreos/go-iptables")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://linux.die.net/man/8/iptables"}),"https://linux.die.net/man/8/iptables")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"http://www.netfilter.org/"}),"http://www.netfilter.org/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/Iptables_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)"}),"https://wiki.archlinux.org/index.php/Iptables_(\u7b80\u4f53\u4e2d\u6587)")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"http://ipset.netfilter.org/iptables-extensions.man.html"}),"http://ipset.netfilter.org/iptables-extensions.man.html")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"http://www.zsythink.net/archives/1199"}),"\u8be6\u89e3 iptables \u6982\u5ff5")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"http://www.adminsehow.com/2011/09/iptables-packet-traverse-map/"}),"IPTables packet traverse map")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"http://cn.linux.vbird.org/linux_server/0250simple_firewall.php"}),"\u7b2c\u4e5d\u7ae0\u3001\u9632\u706b\u5899\u4e0e NAT \u670d\u52a1\u5668")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://serverfault.com/questions/140622"}),"How can I port forward with iptables?")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://netfilter.org/documentation/HOWTO/NAT-HOWTO-6.html"}),"How To Mangle The Packets"))),(0,n.kt)("h2",k({},{id:"hook"}),"Hook"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u6d41\u5165 PREROUTING -> INPUT"),(0,n.kt)("li",{parentName:"ul"},"\u5916\u90e8\u6d41\u91cf PREROUTING -> FORWARD -> POSTROUTING"),(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u53d1\u51fa OUTPUT -> POSTROUTING")),(0,n.kt)("h2",k({},{id:"\u5167\u5efa\u76ee\u6807"}),"\u5167\u5efa\u76ee\u6807"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"RETURN - \u4ece chain \u8fd4\u56de"),(0,n.kt)("li",{parentName:"ul"},"ACCEPT - \u9000\u51fa chain\uff0c\u9000\u51fa\u5f53\u524d table"),(0,n.kt)("li",{parentName:"ul"},"DROP - \u7acb\u5373\u4e22\u5f03\u5305"),(0,n.kt)("li",{parentName:"ul"},"QUEUE"),(0,n.kt)("li",{parentName:"ul"},"REJECT - \u8fd4\u56de\u62d2\u7edd\u5305 - \u5b58\u5728\u4e8e INPUT, FORWARD, OUTPUT"),(0,n.kt)("li",{parentName:"ul"},"DANT - nat \u8868\u7684 PREROUTING, OUTPUT"),(0,n.kt)("li",{parentName:"ul"},"SNAT - nat \u8868\u7684 POSTROUTING"),(0,n.kt)("li",{parentName:"ul"},"LOG",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},'iptables -A INPUT -p tcp -j LOG --log-prefix "INPUT packets"')))),(0,n.kt)("li",{parentName:"ul"},"ULOG - \u591a\u64ad\u5230 netlink socket\uff0c\u5e94\u7528\u53ef\u4ee5\u8ba2\u9605\u8fdb\u884c\u5904\u7406"),(0,n.kt)("li",{parentName:"ul"},"MARK - mangle \u8868"),(0,n.kt)("li",{parentName:"ul"},"MASQUERADE - \u7c7b\u4f3c\u4e8e SNAT\uff0c\u4f46\u7528\u4e8e outbound \u63a5\u53e3\uff0cIP \u53ef\u80fd\u4f1a\u53d8"),(0,n.kt)("li",{parentName:"ul"},"REDIRECT - nat \u8868\u7684 PREROUTING, OUTPUT - \u91cd\u5b9a\u5411\u5305\u3001\u6d41\u5230\u673a\u5668"),(0,n.kt)("li",{parentName:"ul"},"NOTRACK - raw \u8868 - \u7528\u4e8e\u5173\u95ed\u8fde\u63a5\u8ddf\u8e2a - \u4e0d\u88ab iptables/netfilter \u5904\u7406")),(0,n.kt)("h2",k({},{id:"\u8fde\u63a5\u72b6\u6001"}),"\u8fde\u63a5\u72b6\u6001"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"NEW",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5305\u672a\u5173\u8054\u8fde\u63a5 - \u7b2c\u4e00\u4e2a\u672a\u5173\u8054\u5305\u4e0d\u4f1a\u8ba4\u4e3a\u662f INVALID"),(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u521b\u5efa\u65b0\u7684\u8fde\u63a5"))),(0,n.kt)("li",{parentName:"ul"},"ESTABLISHED",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5305\u5df2\u5173\u8054\u8fde\u63a5 - \u4ece NEW \u5173\u8054\u8fde\u63a5"),(0,n.kt)("li",{parentName:"ul"},"TCP \u5f53\u8fd4\u56de SYN/ACK \u65f6"),(0,n.kt)("li",{parentName:"ul"},"UDP/ICMP \u5f53 src \u548c dst \u4ea4\u6362\u65f6"))),(0,n.kt)("li",{parentName:"ul"},"RELATED",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5305\u672a\u5173\u8054\u5df2\u6709\u8fde\u63a5\u4f46\u5173\u8054\u4e86\u7cfb\u7edf\u4e2d\u88ab\u6807\u8bb0\u4e3a RELATED \u7684\u8fde\u63a5"),(0,n.kt)("li",{parentName:"ul"},"\u4f1a\u521b\u5efa\u65b0\u7684\u8fde\u63a5\u6216 ICMP \u9519\u8bef"),(0,n.kt)("li",{parentName:"ul"},"\u4f8b\u5982 FTP \u53cc\u7aef\u53e3"))),(0,n.kt)("li",{parentName:"ul"},"INVALID - \u65e0\u6cd5\u8bc6\u522b\u3001\u5185\u5b58\u6ea2\u51fa\u3001ICMP \u9519\u8bef\u3001\u65e0\u6cd5\u8def\u7531"),(0,n.kt)("li",{parentName:"ul"},"UNTRACKED - \u5728 raw \u4e2d\u4f7f\u7528 NOTRACK"),(0,n.kt)("li",{parentName:"ul"},"SNAT - \u865a\u62df\u72b6\u6001\uff0c\u786e\u4fdd\u540e\u7eed \u6062\u590d \u54cd\u5e94\u5305 \u6e90\u5730\u5740"),(0,n.kt)("li",{parentName:"ul"},"DNAT - \u865a\u62df\u72b6\u6001\uff0c\u786e\u4fdd\u540e\u7eed \u6062\u590d \u54cd\u5e94\u5305 \u76ee\u6807\u5730\u5740")),(0,n.kt)("h2",k({},{id:"\u5e38\u7528\u5339\u914d\u6a21\u5757"}),"\u5e38\u7528\u5339\u914d\u6a21\u5757"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"-m"),"/",(0,n.kt)("inlineCode",{parentName:"li"},"--match")," \u6307\u5b9a\u6a21\u5757"),(0,n.kt)("li",{parentName:"ul"},"connmark"),(0,n.kt)("li",{parentName:"ul"},"conntrack"),(0,n.kt)("li",{parentName:"ul"},"ipvs"),(0,n.kt)("li",{parentName:"ul"},"mark"),(0,n.kt)("li",{parentName:"ul"},"redirect")),(0,n.kt)("h2",k({},{id:"a-deep-dive-into-iptables-and-netfilter-architecture"}),"A Deep Dive into Iptables and Netfilter Architecture"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",k({parentName:"li"},{href:"https://www.digitalocean.com/community/tutorials/a-deep-dive-into-iptables-and-netfilter-architecture"}),"A Deep Dive into Iptables and Netfilter Architecture")),(0,n.kt)("li",{parentName:"ul"},"5 \u4e2a Hook",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"NF_IP_PRE_ROUTING - PREROUTING",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8fdb\u5165\u7f51\u7edc\u6808"),(0,n.kt)("li",{parentName:"ul"},"\u5148\u4e8e\u8def\u7531\u51b3\u7b56"))),(0,n.kt)("li",{parentName:"ul"},"NF_IP_LOCAL_IN - INPUT",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u5305\u88ab\u8def\u7531\u5230\u672c\u5730"))),(0,n.kt)("li",{parentName:"ul"},"NF_IP_FORWARD - FORWARD",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u5305\u88ab\u8def\u7531\u5230\u5176\u4ed6\u4e3b\u673a"))),(0,n.kt)("li",{parentName:"ul"},"NF_IP_LOCAL_OUT - OUTPUT",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u53d1\u8d77\u6d41\u91cf"))),(0,n.kt)("li",{parentName:"ul"},"NF_IP_POST_ROUTING - POSTROUTING",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u53d1\u8d77\u6d41\u91cf\u6216\u8f6c\u53d1\u6d41\u91cf"),(0,n.kt)("li",{parentName:"ul"},"\u5728\u88ab\u53d1\u9001\u4e4b\u524d"))))),(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u8868\u6765\u7ec4\u7ec7\u89c4\u5219 - \u901a\u8fc7\u89c4\u5219\u8fd4\u56de\u7684\u51b3\u7b56\u7c7b\u578b\u8fdb\u884c\u8868\u5212\u5206",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"filter - \u8fc7\u6ee4\u5305"),(0,n.kt)("li",{parentName:"ul"},"nat - \u5730\u5740\u8f6c\u6362"),(0,n.kt)("li",{parentName:"ul"},"mangle - \u4fee\u6539\u5305"),(0,n.kt)("li",{parentName:"ul"},"raw - \u7528\u4e8e opt-out \u5305\u8ddf\u8e2a"),(0,n.kt)("li",{parentName:"ul"},"security - \u7528\u4e8e\u8bbe\u7f6e SELinux \u4e0a\u4e0b\u6587 mark"))),(0,n.kt)("li",{parentName:"ul"},"chain - \u89c4\u5219\u94fe - \u63a7\u5236\u5305\u89c4\u5219\u6c42\u503c\u7684\u8def\u5f84")),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",k({parentName:"tr"},{align:null}),"Tables\u2193/Chains\u2192"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"PREROUTING"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"INPUT"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"FORWARD"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"OUTPUT"),(0,n.kt)("th",k({parentName:"tr"},{align:null}),"POSTROUTING"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"(routing decision)"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"raw"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"(connection tracking enabled)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"mangle"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"nat (DNAT)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"(routing decision)"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"filter"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"security"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null}))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",k({parentName:"tr"},{align:null}),"nat (SNAT)"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713"),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null})),(0,n.kt)("td",k({parentName:"tr"},{align:null}),"\u2713")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5230\u672c\u5730\u7684\u5305 PREROUTING -> INPUT"),(0,n.kt)("li",{parentName:"ul"},"\u5230\u5176\u4ed6\u4e3b\u673a PREROUTING -> FORWARD -> POSTROUTING"),(0,n.kt)("li",{parentName:"ul"},"\u672c\u5730\u53d1\u51fa\u5305 OUTPUT -> POSTROUTING")))}T.isMDXComponent=!0}}]);
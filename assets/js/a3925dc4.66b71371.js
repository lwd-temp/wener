"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[84397],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return k}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var c=r.createContext({}),o=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=o(e.components);return r.createElement(c.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,c=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=o(n),d=a,k=p["".concat(c,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(k,l(l({ref:t},u),{},{components:n})):r.createElement(k,l({ref:t},u))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=d;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},41688:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return v},frontMatter:function(){return k},metadata:function(){return h},toc:function(){return N}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&u(e,n,t[n]);if(s)for(var n of s(t))o.call(t,n)&&u(e,n,t[n]);return e},m=(e,t)=>i(e,l(t)),d=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&o.call(e,r)&&(n[r]=e[r]);return n};const k={title:"Squid"},f="Squid",h={unversionedId:"service/network/squid",id:"service/network/squid",title:"Squid",description:"- squid-cache/squid",source:"@site/../notes/service/network/squid.md",sourceDirName:"service/network",slug:"/service/network/squid",permalink:"/notes/service/network/squid",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/squid.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1629320323,formattedLastUpdatedAt:"Aug 18, 2021",frontMatter:{title:"Squid"},sidebar:"docs",previous:{title:"Squid Conf",permalink:"/notes/service/network/squid-conf"},next:{title:"stun",permalink:"/notes/service/network/stun"}},g={},N=[{value:"HTTPS",id:"https",level:2},{value:"\u5176\u4ed6\u914d\u7f6e",id:"\u5176\u4ed6\u914d\u7f6e",level:3},{value:"CacheManager",id:"cachemanager",level:2},{value:"SNMP",id:"snmp",level:3},{value:"\u955c\u50cf\u7ad9\u70b9",id:"\u955c\u50cf\u7ad9\u70b9",level:3},{value:"FAQ",id:"faq",level:2},{value:"Your cache is running out of filedescriptors",id:"your-cache-is-running-out-of-filedescriptors",level:3},{value:"SSL_CTX_use_certificate:passed a null parameter",id:"ssl_ctx_use_certificatepassed-a-null-parameter",level:3},{value:"\u9ed8\u8ba4\u4e0d\u652f\u6301 socks",id:"\u9ed8\u8ba4\u4e0d\u652f\u6301-socks",level:3}],_={toc:N},b="wrapper";function v(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(b,m(p(p({},_),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",p({},{id:"squid"}),"Squid"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://github.com/squid-cache/squid"}),"squid-cache/squid"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Web \u7f13\u5b58\u670d\u52a1\u5668 - \u7528\u4e8e\u7f13\u5b58\u7f51\u9875\u5185\u5bb9\u4ee5\u4fbf\u4e8e\u5feb\u901f\u8fd4\u56de"),(0,r.kt)("li",{parentName:"ul"},"\u5bf9\u4e8e\u52a8\u6001\u5185\u5bb9\u4f1a\u76f8\u5bf9\u8f83\u6162"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u53cd\u5411\u4ee3\u7406 - \u51fa\u7f51\u7f13\u5b58 - \u670d\u52a1\u7aef",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u7f13\u5b58\u9759\u6001\u7ad9\u70b9\uff0c\u7c7b\u4f3c\u4e8e Vanish \u89d2\u8272"))),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u8f6c\u53d1\u4ee3\u7406 - \u5165\u7f51\u7f13\u5b58 - \u5ba2\u6237\u7aef",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f8b\u5982\u7f13\u5b58 Windows \u66f4\u65b0"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u7ec8\u7aef\u591a\u65f6\u53ef\u52a0\u901f\u9759\u6001\u5185\u5bb9\u8bbf\u95ee"))))),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 3128"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://www.monitis.com/blog/how-to-monitor-squid-proxy-server/"}),"How to monitor Squid proxy server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://wiki.alpinelinux.org/wiki/Setting_up_Explicit_Squid_Proxy"}),"Setting up Explicit Squid Proxy"))))),(0,r.kt)("admonition",p({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u914d\u7f6e HTTPS CA \u8bc1\u4e66"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u7528\u4e8e\u722c\u866b\u524d\u7f6e\u8bf7\u6c42\u4ee3\u7406/\u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u914d\u7f6e privoxy \u4f5c\u4e3a\u552f\u4e00 cache_peer",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 https \u57fa\u4e8e\u57df\u540d\u8f6c\u53d1"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 socks"))))),(0,r.kt)("admonition",p({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0d\u652f\u6301 HTTPS \u7684\u7f13\u5b58 ",(0,r.kt)("a",p({parentName:"li"},{href:"https://wiki.squid-cache.org/Features/HTTPS"}),"Features/HTTPS"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"HTTPS \u4f1a\u4f7f\u7528 CONNECT \u7684\u65b9\u5f0f\u8fdb\u884c TUNNEL \u4ee3\u7406"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 HTTPS \u9700\u8981\u5ba2\u6237\u7aef\u5b89\u88c5 CA \u8bc1\u4e66"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u5b89\u88c5\u4e86 CA \u8bc1\u4e66\u4e5f\u80fd\u5b9e\u73b0\u900f\u660e\u4ee3\u7406"))),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u4e0d\u652f\u6301 SOCKS"),(0,r.kt)("li",{parentName:"ul"},"SSL Bump \u65f6\u65e0\u6cd5\u6839\u636e\u57df\u540d\u9009\u62e9 cache_peer"),(0,r.kt)("li",{parentName:"ul"},"\u6ca1\u6709 Web \u7ba1\u7406\u7aef"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"cat <<CONF > squid.conf\nhttp_port 3128\nacl localnet src 127.0.0.0/24\n\nhttp_access allow localhost manager\nhttp_access deny manager\n\ncache_dir ufs .cache 500 16 256\nminimum_object_size 0 bytes\n\naccess_log      access.log\ncache_log       cache.log\ncache_store_log store.log\nCONF\n# \u6821\u9a8c\u914d\u7f6e\nsquid -k parse -f squid.conf\n# \u51c6\u5907\u7f13\u5b58\u76ee\u5f55\nsquid -z -f squid.conf\n# \u542f\u52a8\nsquid --foreground -f squid.conf\n\n# \u4ece\u65b0\u914d\u7f6e\nsquid -k reconfigure\n\nsquidclient -h 127.0.0.1 mgr:info\nsquidclient -h 127.0.0.1 mgr:utilization\n\n# \u6d4b\u8bd5\u7f13\u5b58\ncurl -x 127.0.0.1:3128 https://www.baidu.com/favicon.ico -v > /dev/null\n\n# \u4f7f\u7528\u60c5\u51b5\nsquidclient -h 127.0.0.1 -p 3128 cache_object://www.baidu.com/favicon.ico mgr:utilization \uff5c grep server.all\n# \u547d\u4e2d\u60c5\u51b5\nsquidclient -h 127.0.0.1 -p 3128 cache_object://www.baidu.com/favicon.ico mgr:info\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u547d\u4e2d\u7f13\u5b58\u4f1a\u6dfb\u52a0\u7684\u5934")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"X-Cache: HIT from localhost\nX-Cache-Lookup: HIT from localhost:3128\nVia: 1.1 localhost (squid)\nAge: 51\n")),(0,r.kt)("h2",p({},{id:"https"}),"HTTPS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8bc1\u4e66\u53ef\u5b58\u653e\u4e8e - /etc/squid/certs/"),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://elatov.github.io/2019/01/using-squid-to-proxy-ssl-sites/"}),"Using Squid to Proxy SSL Sites")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://wiki.squid-cache.org/ConfigExamples/Intercept/SslBumpExplicit"}),"Intercept HTTPS CONNECT messages with SSL-Bump")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://wiki.squid-cache.org/Features/SslPeekAndSplice"}),"SslBump Peek and Splice"))))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u521d\u59cb\u5316")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# macOS \u9700\u8981\u4f7f\u7528\u989d\u5916\u5b89\u88c5\u7684 openssl\nbrew --prefix openssl\n\n# \u751f\u6210\u8bc1\u4e66\nopenssl req -new -newkey rsa:2048 -sha256 -days 365 -nodes -x509 -extensions v3_ca -keyout squid-ca-key.pem -out squid-ca-cert.pem\n# \u5408\u5e76 chain\ncat squid-ca-cert.pem squid-ca-key.pem >> squid-ca-cert-key.pem\n\n# macOS \u6ce8\u610f\u5b89\u88c5\u8def\u5f84\n# /usr/local/opt/squid\nbrew --prefix squid\n\n# \u521d\u59cb\u5316 ssl_db\n/usr/local/opt/squid/libexec/security_file_certgen -c -s ssl_db -M 16 MB\n# AlpineLinux\n/usr/lib/squid/security_file_certgen -c -s ssl_db -M 16 MB\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u914d\u7f6e")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"# \u76d1\u542c\u914d\u7f6e\nhttp_port 3128 ssl-bump \\\n  cert=squid-ca-cert-key.pem \\\n  generate-host-certificates=on dynamic_cert_mem_cache_size=16MB\nhttps_port 3129 intercept ssl-bump \\\n  cert=squid-ca-cert-key.pem \\\n  generate-host-certificates=on dynamic_cert_mem_cache_size=16MB\nsslcrtd_program /usr/local/opt/squid/libexec/security_file_certgen -s ssl_db -M 16MB\n\n# \u5168\u91cf - \u53ef\u914d\u7f6e\u4e3a\u90e8\u5206\nacl step1 at_step SslBump1\nssl_bump peek step1\nssl_bump bump all\nssl_bump splice all\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6821\u9a8c")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# \u5931\u8d25\ncurl -x 127.0.0.1:3128 https://mirrors.ustc.edu.cn\n# \u6210\u529f\ncurl --cacert squid-ca-cert.pem -x 127.0.0.1:3128 https://mirrors.ustc.edu.cn\n")),(0,r.kt)("h3",p({},{id:"\u5176\u4ed6\u914d\u7f6e"}),"\u5176\u4ed6\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"# \u6b63\u5219\u5339\u914d SNI\nacl api_google_ssl ssl::server_name_regex .*\\.googleapis\\.com\nacl api_google_ssl ssl::server_name_regex .*\\.google\\.com\nacl api_google_ssl ssl::server_name_regex .*\\.cloud\\.google\\.com\n")),(0,r.kt)("h2",p({},{id:"cachemanager"}),"CacheManager"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://wiki.squid-cache.org/Features/CacheManager"}),"Features/CacheManager")),(0,r.kt)("li",{parentName:"ul"},"\u7b80\u5355\u7684 Web \u754c\u9762 - \u7528\u4e8e\u67e5\u770b\u8fd0\u884c\u72b6\u6001"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://wiki.squid-cache.org/ManagerCgiTool"}),"https://wiki.squid-cache.org/ManagerCgiTool")),(0,r.kt)("li",{parentName:"ul"},"http://host/cgi-bin/cachemgr.cgi")),(0,r.kt)("h3",p({},{id:"snmp"}),"SNMP"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://wiki.squid-cache.org/Features/Snmp"}),"Features/Snmp"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"snmp_port 3401\nacl snmppublic snmp_community public\nsnmp_access allow snmppublic\nsnmp_access deny all\nsnmp_incoming_address 0.0.0.0\nsnmp_outgoing_address 255.255.255.255\n")),(0,r.kt)("h3",p({},{id:"\u955c\u50cf\u7ad9\u70b9"}),"\u955c\u50cf\u7ad9\u70b9"),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-ini"}),"# \u7f13\u5b58\u7b56\u7565\ncache_replacement_policy heap LFUDA\n\n# \u4f8b\u5982 http://mirrors.ustc.edu.cn/alpine/v3.10/main\nrefresh_pattern mirrors.ustc.edu.cn/.*\\.(apk|iso|deb|rpm) 4320 100% 43200 refresh-ims override-expire\n\n# \u6216\u8005\u5355\u72ec\u914d\u7f6e\nrefresh_pattern -i .rpm$ 129600 100% 129600 refresh-ims override-expire\nrefresh_pattern -i .iso$ 129600 100% 129600 refresh-ims override-expire\nrefresh_pattern -i .deb$ 129600 100% 129600 refresh-ims override-expire\n")),(0,r.kt)("h2",p({},{id:"faq"}),"FAQ"),(0,r.kt)("h3",p({},{id:"your-cache-is-running-out-of-filedescriptors"}),"Your cache is running out of filedescriptors"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"max_filedescriptors 65535")," \u53ef\u6307\u5b9a\u6700\u5927 fd")),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# \u73af\u5883\u4e0b\u7684\u9650\u5236\nulimit -n\n# \u4fee\u6539\u540e\u91cd\u542f\u670d\u52a1\u7aef - \u6216\u5728 linux \u4e0b\u5168\u5c40\u4fee\u6539(\u4e0d\u63a8\u8350)\nulimit -n 65535\n\n# macOS \u4e0b\u67e5\u770b\nlaunchctl limit maxfiles\n# \u4fee\u6539\u5f53\u524d\u4f1a\u8bdd\nsudo launchctl limit maxfiles 65536 200000\nulimit -n 65535\n\n# \u542f\u52a8\u4f1a\u8f93\u51fa fd \u6570\u91cf\ngrep 'file descriptors available' cache.log\n\n# \u670d\u52a1\u7aef\u5f53\u524d\u60c5\u51b5\nsquidclient mgr:info | grep 'File descriptor' -A 7\n")),(0,r.kt)("h3",p({},{id:"ssl_ctx_use_certificatepassed-a-null-parameter"}),"SSL_CTX_use_certificate:passed a null parameter"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://www.spinics.net/lists/squid/msg90936.html"}),"https://www.spinics.net/lists/squid/msg90936.html"))),(0,r.kt)("pre",null,(0,r.kt)("code",p({parentName:"pre"},{}),"2020/05/17 20:08:00 kid1| TLS error: failed to allocate handle: error:140AB043:SSL routines:SSL_CTX_use_certificate:passed a null parameter\n2020/05/17 20:08:00 kid1| ERROR: client https start failed to allocate handle: error:140AB043:SSL routines:SSL_CTX_use_certificate:passed a null parameter\n2020/05/17 20:08:00 kid1| ERROR: could not create TLS server context for local=127.0.0.1:3130 remote=127.0.0.1:55424 FD 16 flags=1\n")),(0,r.kt)("h3",p({},{id:"\u9ed8\u8ba4\u4e0d\u652f\u6301-socks"}),"\u9ed8\u8ba4\u4e0d\u652f\u6301 socks"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"alpine \u672a\u6784\u5efa socks \u652f\u6301"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",p({parentName:"li"},{href:"https://wiki.squid-cache.org/Features/Socks"}),"https://wiki.squid-cache.org/Features/Socks"))))}v.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[89166],{49613:function(t,e,n){n.d(e,{Zo:function(){return u},kt:function(){return d}});var r=n(59496);function a(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function o(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){a(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function i(t,e){if(null==t)return{};var n,r,a=function(t,e){if(null==t)return{};var n,r,a={},l=Object.keys(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||(a[n]=t[n]);return a}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(r=0;r<l.length;r++)n=l[r],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(a[n]=t[n])}return a}var p=r.createContext({}),s=function(t){var e=r.useContext(p),n=e;return t&&(n="function"==typeof t?t(e):o(o({},e),t)),n},u=function(t){var e=s(t.components);return r.createElement(p.Provider,{value:e},t.children)},c="mdxType",m={inlineCode:"code",wrapper:function(t){var e=t.children;return r.createElement(r.Fragment,{},e)}},k=r.forwardRef((function(t,e){var n=t.components,a=t.mdxType,l=t.originalType,p=t.parentName,u=i(t,["components","mdxType","originalType","parentName"]),c=s(n),k=a,d=c["".concat(p,".").concat(k)]||c[k]||m[k]||l;return n?r.createElement(d,o(o({ref:e},u),{},{components:n})):r.createElement(d,o({ref:e},u))}));function d(t,e){var n=arguments,a=e&&e.mdxType;if("string"==typeof t||a){var l=n.length,o=new Array(l);o[0]=k;var i={};for(var p in e)hasOwnProperty.call(e,p)&&(i[p]=e[p]);i.originalType=t,i[c]="string"==typeof t?t:a,o[1]=i;for(var s=2;s<l;s++)o[s]=n[s];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},25777:function(t,e,n){n.r(e),n.d(e,{assets:function(){return h},contentTitle:function(){return g},default:function(){return b},frontMatter:function(){return d},metadata:function(){return N},toc:function(){return f}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(t,e,n)=>e in t?a(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,c=(t,e)=>{for(var n in e||(e={}))p.call(e,n)&&u(t,n,e[n]);if(i)for(var n of i(e))s.call(e,n)&&u(t,n,e[n]);return t},m=(t,e)=>l(t,o(e)),k=(t,e)=>{var n={};for(var r in t)p.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&i)for(var r of i(t))e.indexOf(r)<0&&s.call(t,r)&&(n[r]=t[r]);return n};const d={title:"gost"},g="gost",N={unversionedId:"service/network/proxy/gost",id:"service/network/proxy/gost",title:"gost",description:"- go-gost/gost",source:"@site/../notes/service/network/proxy/gost.md",sourceDirName:"service/network/proxy",slug:"/service/network/proxy/gost",permalink:"/notes/service/network/proxy/gost",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/proxy/gost.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1700666411,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{title:"gost"},sidebar:"docs",previous:{title:"glider",permalink:"/notes/service/network/proxy/glider"},next:{title:"HTTP Proxy",permalink:"/notes/service/network/proxy/http"}},h={},f=[{value:"Notes",id:"notes",level:2},{value:"Config",id:"config",level:2},{value:"Auth",id:"auth",level:2},{value:"WebAPI",id:"webapi",level:2}],v={toc:f},y="wrapper";function b(t){var e=t,{components:n}=e,a=k(e,["components"]);return(0,r.kt)(y,m(c(c({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"gost"}),"gost"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/go-gost/gost"}),"go-gost/gost"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Go"),(0,r.kt)("li",{parentName:"ul"},"v3 \u8fd8\u6ca1\u6b63\u5f0f\u53d1\u5e03"),(0,r.kt)("li",{parentName:"ul"},"GO Simple Tunnel"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://gost.run/"}),"https://gost.run/")),(0,r.kt)("li",{parentName:"ul"},"\u4e0a\u6e38/\u8fde\u63a5\u5668 \u534f\u8bae\u652f\u6301: http, http2, socks4, socks5, ss, ssu, sni, sshd"),(0,r.kt)("li",{parentName:"ul"},"\u76d1\u542c \u534f\u8bae\u652f\u6301: tcp, udp, tls, mtls, ws, mws. mwss, http2, h2c, grpc, quic, pht, http3, kcp, ssh, sshd, red, redu, rtcp, rudp, dns, tun, tap, icmp, ohttp, otls, ftcp"),(0,r.kt)("li",{parentName:"ul"},"mws -> \u591a\u8def\u590d\u7528 websocket - \u57fa\u4e8e Path \u5206\u6d41"),(0,r.kt)("li",{parentName:"ul"},"ssu -> Shadowsocks UDP"),(0,r.kt)("li",{parentName:"ul"},"red -> REDIRECT+tproxy"),(0,r.kt)("li",{parentName:"ul"},"redu -> UDP iptables+tproxy"),(0,r.kt)("li",{parentName:"ul"},"rtcp, rudp - \u8fdc\u7a0b\u7aef\u53e3\u8f6c\u53d1"),(0,r.kt)("li",{parentName:"ul"},"ohttp, otls - HTTP \u4f2a\u88c5\u63e1\u624b"),(0,r.kt)("li",{parentName:"ul"},"ftpc - ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/xtaci/tcpraw"}),"tcpraw")," \u6a21\u62df tcp"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"HTTP - Connect/Plain HTTP Tunnel/Websocket/HTTP2 CONNECT/gRPC/HTTP3 CONNECT/WebTransport"),(0,r.kt)("li",{parentName:"ul"},"SOCKSv4/v5"),(0,r.kt)("li",{parentName:"ul"},"Shadowsocks"),(0,r.kt)("li",{parentName:"ul"},"KCP"),(0,r.kt)("li",{parentName:"ul"},"SSH"),(0,r.kt)("li",{parentName:"ul"},"SNI Proxy"),(0,r.kt)("li",{parentName:"ul"},"PROXY \u534f\u8bae"),(0,r.kt)("li",{parentName:"ul"},"TPROXY/REDIRECT"),(0,r.kt)("li",{parentName:"ul"},"TUN/TAP"),(0,r.kt)("li",{parentName:"ul"},"ICMP Tunnel"),(0,r.kt)("li",{parentName:"ul"},"DNS \u4ee3\u7406"),(0,r.kt)("li",{parentName:"ul"},"WebAPI"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/ginuerzh/gost"}),"ginuerzh/gost"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT, Go"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://v2.gost.run/"}),"https://v2.gost.run/"))))),(0,r.kt)("admonition",c({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u65b0\u534f\u8bae\u652f\u6301\u7684\u5c11",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"tuic"),(0,r.kt)("li",{parentName:"ul"},"hysteria"),(0,r.kt)("li",{parentName:"ul"},"trojan"))))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# macOS\ncurl -LO https://github.com/go-gost/gost/releases/download/v3.0.0-rc8/gost_3.0.0-rc8_darwin_amd64.tar.gz\ntar zxvf gost*.tar.gz\n\n# Linux\ncurl -LO https://github.com/go-gost/gost/releases/download/v3.0.0-rc8/gost_3.0.0-rc8_linux_amd64.tar.gz\ntar zxvf gost*.tar.gz\n\n# v3\n# -L \u76d1\u542c\n# -F \u8f6c\u53d1\uff0c\u652f\u6301\u914d\u7f6e\u591a\u4e2a\uff0c\u4f5c\u4e3a\u8f6c\u53d1\u94fe\ngost -L http://:8080 -L socks5://:1080 -F http://192.168.1.1:8080\n\ngost -L sni://:80 -L sni://:443 -F socks5://192.168.1.1:1080\n\ndocker run --rm -it \\\n  gogost/gost\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-L tcp://:8080/192.168.1.1:80"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7aef\u53e3\u6620\u5c04"))),(0,r.kt)("li",{parentName:"ul"},"rudp -> remote udp - \u8fdc\u7a0b\u6620\u5c04\u5230\u672c\u5730")),(0,r.kt)("h2",c({},{id:"notes"}),"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u56db\u5927\u6a21\u5757",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u670d\u52a1(Service)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Listener+Handler"))),(0,r.kt)("li",{parentName:"ul"},"\u8282\u70b9(Node)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Dialer+Connector"))),(0,r.kt)("li",{parentName:"ul"},"\u8df3\u8dc3\u70b9(Hop)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"N","*","Node"))),(0,r.kt)("li",{parentName:"ul"},"\u8f6c\u53d1\u94fe(Chain)",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"N","*","Hop -> Selector+Bypass -> Route"))))),(0,r.kt)("li",{parentName:"ul"},"\u4e94\u4e2a\u5b50\u6a21\u5757\uff1a\u76d1\u542c\u5668(Listener)\uff0c\u5904\u7406\u5668(Handler)\uff0c\u8f6c\u53d1\u5668(Forwarder)\uff0c\u62e8\u53f7\u5668(Dialer),\u8fde\u63a5\u5668(Connector)"),(0,r.kt)("li",{parentName:"ul"},"\u8f85\u52a9\u6a21\u5757\uff1a\u8282\u70b9\u9009\u62e9\u5668(Selector)\uff0c\u51c6\u5165\u63a7\u5236\u5668(Admission)\uff0c\u5206\u6d41\u5668(Bypass)\uff0c\u57df\u540d\u89e3\u6790\u5668(Resolver)\uff0c\u4e3b\u673a\u6620\u5c04\u5668(Hosts)\uff0c\u9650\u901f\u5668(Limiter)\u7b49\u7ec4\u6210\u3002")),(0,r.kt)("h2",c({},{id:"config"}),"Config"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-C")),(0,r.kt)("li",{parentName:"ul"},"gost.yml, gost.json",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"$PWD"),(0,r.kt)("li",{parentName:"ul"},"/etc/gost"),(0,r.kt)("li",{parentName:"ul"},"$HOME/.gost")))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"# -L\nservices:\n  - name: service-0\n    # -L \u7684 hostname\n    addr: 'localhost:8080'\n    handler:\n      # -L \u7684 schema\n      type: http\n      chain: chain-0\n      # -L \u7684 auth \u4fe1\u606f\n      auth:\n        username: gost\n        password: gost\n      metadata:\n        foo: bar\n    listener:\n      # -L \u7684 schema\n      type: tcp\n      metadata:\n        foo: bar\n    metadata:\n      preUp:\n        - echo pre-up\n      postUp:\n        - echo post-up\n      preDown:\n        - echo pre-down\n      postDown:\n        - echo post-down\n# -F\n# schema -> connector, dialer\nchains:\n  - name: chain-0\n    hops:\n      - name: hop-0\n        nodes:\n          - name: node-0\n            addr: 192.168.1.1:8080\n            connector:\n              type: socks5\n              auth:\n                username: gost\n                password: gost\n              metadata:\n                bar: baz\n            dialer:\n              type: tls\n              metadata:\n                bar: baz\n")),(0,r.kt)("h2",c({},{id:"auth"}),"Auth"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"HTTP -> Redis -> \u6587\u4ef6 -> \u5185\u8054"),(0,r.kt)("li",{parentName:"ul"},"Redis",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"hash"))),(0,r.kt)("li",{parentName:"ul"},"HTTP",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8fd4\u56de\u548c\u6587\u4ef6\u4e00\u6837\u7684\u5185\u5bb9"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://gost.run/concepts/auth"}),"https://gost.run/concepts/auth"))),(0,r.kt)("h2",c({},{id:"webapi"}),"WebAPI"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://gost.run/tutorials/api/overview/"}),"https://gost.run/tutorials/api/overview/")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://gost.run/swagger-ui/"}),"https://gost.run/swagger-ui/"))))}b.isMDXComponent=!0}}]);
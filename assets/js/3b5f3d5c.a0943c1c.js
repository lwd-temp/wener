"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[63499],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),c=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):o(o({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",y={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,s=e.originalType,l=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=c(r),d=a,m=u["".concat(l,".").concat(d)]||u[d]||y[d]||s;return r?n.createElement(m,o(o({ref:t},p),{},{components:r})):n.createElement(m,o({ref:t},p))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=r.length,o=new Array(s);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i[u]="string"==typeof e?e:a,o[1]=i;for(var c=2;c<s;c++)o[c]=r[c];return n.createElement.apply(null,o)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},71901:function(e,t,r){r.r(t),r.d(t,{assets:function(){return v},contentTitle:function(){return h},default:function(){return g},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return k}});var n=r(49613),a=Object.defineProperty,s=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&p(e,r,t[r]);if(i)for(var r of i(t))c.call(t,r)&&p(e,r,t[r]);return e},y=(e,t)=>s(e,o(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&c.call(e,n)&&(r[n]=e[n]);return r};const m={title:"hysteria"},h="hysteria",f={unversionedId:"service/network/proxy/hysteria",id:"service/network/proxy/hysteria",title:"hysteria",description:"- apernet/hysteria",source:"@site/../notes/service/network/proxy/hysteria.md",sourceDirName:"service/network/proxy",slug:"/service/network/proxy/hysteria",permalink:"/notes/service/network/proxy/hysteria",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/network/proxy/hysteria.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1699003495,formattedLastUpdatedAt:"Nov 3, 2023",frontMatter:{title:"hysteria"},sidebar:"docs",previous:{title:"HTTP Proxy",permalink:"/notes/service/network/proxy/http"},next:{title:"PAC",permalink:"/notes/service/network/proxy/pac"}},v={},k=[{value:"config",id:"config",level:2},{value:"openrc",id:"openrc",level:2},{value:"v1",id:"v1",level:2}],b={toc:k},O="wrapper";function g(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(O,y(u(u({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"hysteria"}),"hysteria"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/apernet/hysteria"}),"apernet/hysteria")),(0,n.kt)("li",{parentName:"ul"},"Protocol",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"QUIC"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://v2.hysteria.network/docs/developers/Protocol/"}),"https://v2.hysteria.network/docs/developers/Protocol/")))),(0,n.kt)("li",{parentName:"ul"},"Server - Client -> SOCKS5, HTTP")),(0,n.kt)("admonition",u({},{type:"tip"}),(0,n.kt)("ul",{parentName:"admonition"},(0,n.kt)("li",{parentName:"ul"},"\u4f7f\u7528 ACME - \u9700\u8981 tls\u3001acme \u914d\u7f6e"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'docker run --rm -it \\\n  -v $PWD/hysteria.yaml:/etc/hysteria.yaml \\\n  -p 8080:8080 \\\n  --name hysteria tobyxdd/hysteria \\\n  server -c /etc/hysteria.yaml\n\ncurl -LO https://github.com/apernet/hysteria/releases/download/app%2Fv2.2.0/hysteria-linux-amd64\nchmod +x hysteria-linux-amd64\n# sudo cp hysteria-linux-amd64 /usr/bin/hysteria\n./hysteria-linux-amd64 --help\n\nPASSWORD=$(openssl rand -base64 12 | tr -- \'-_\' \'+/\' | tee /dev/tty)\n\nopenssl genrsa -out ca.key 2048\nopenssl req -new -x509 -days 3650 -key ca.key -subj "/O=Example, Inc./CN=Example Root CA" -out ca.crt\n# CN \u53ef\u4ee5\u4e3a IP \u5730\u5740\nopenssl req -newkey rsa:2048 -nodes -keyout tls.key -subj "/O=Server A, Inc./CN=example.com" -out server.csr\n# -extfile <(printf "subjectAltName=IP:${ipaddress}")\nopenssl x509 -extfile <(printf "subjectAltName=IP:`curl 4.icanhazip.com -sf`") -req -days 3650 -in server.csr -CA ca.crt -CAkey ca.key -CAcreateserial -out tls.crt\n\ncat <<YAML > hysteria.yaml\nlisten: :8443\n\ntls:\n  cert: tls.crt\n  key: tls.key\n\nauth:\n  type: password\n  password: $PASSWORD\nYAML\n\n./hysteria-linux-amd64 server -c hysteria.yaml\n\n# \u5982\u679c\u76f4\u63a5\u76d1\u542c 443\nsudo setcap cap_net_bind_service=+ep ./hysteria-linux-amd64\n\n# Client\n# ==========\nbrew install hysteria\n\ncat <<YAML > hysteria.client.yaml\nserver: 127.0.0.1:8443\nalpn: h3\nauth_str: ${PASSWORD}\nsocks5:\n  listen: 127.0.0.1:1080\nhttp:\n  listen: 127.0.0.1:8080\nca: ca.crt\nYAML\n\nhysteria client -c hysteria.client.yaml\n')),(0,n.kt)("h2",u({},{id:"config"}),"config"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://v2.hysteria.network/zh/docs/advanced/Full-Server-Config/"}),"https://v2.hysteria.network/zh/docs/advanced/Full-Server-Config/"))),(0,n.kt)("h2",u({},{id:"openrc"}),"openrc"),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"sudo nano /etc/init.d/hysteria-server\nsudo chmod +x /etc/init.d/hysteria-server\nsudo service hysteria-server start\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-sh"}),'#!/sbin/openrc-run\nsupervisor=supervise-daemon\n\nname="Hysteria"\n\ncommand=/usr/bin/hysteria\ncommand_args="server -c /etc/hysteria/server.yaml"\n\nHYSTERIA_LOGFILE="${HYSTERIA_LOGFILE:-/var/log/${RC_SVCNAME}.log}"\nHYSTERIA_ERRFILE="${HYSTERIA_ERRFILE:-${HYSTERIA_LOGFILE}}"\nHYSTERIA_OUTFILE="${HYSTERIA_OUTFILE:-${HYSTERIA_LOGFILE}}"\nsupervise_daemon_args="--stderr \\"${HYSTERIA_ERRFILE}\\" --stdout \\"${HYSTERIA_OUTFILE}\\""\n\nretry="${HYSTERIA_RETRY:-TERM/60/KILL/10}"\n\ndepend() {\n  use logger dns\n  need net\n}\n\ncheckconfig() {\n  # warn this if not found\n  if [ ! -f "/etc/hysteria/server.yaml" ]; then\n    eerror "No config"\n    return 1\n  fi\n  return 0\n}\n')),(0,n.kt)("h2",u({},{id:"v1"}),"v1"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://v1.hysteria.network/"}),"https://v1.hysteria.network/"))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),'curl -LO https://github.com/apernet/hysteria/releases/download/v1.3.5/hysteria-linux-amd64\nchmod +x hysteria-linux-amd64\n\nPASSWORD=$(openssl rand -base64 12 | tr -- \'-_\' \'+/\' | tee /dev/tty)\n\ncat <<JSON > config.json\n{\n  "listen": ":36712",\n  "cert": "tls.crt",\n  "key": "tls.key",\n  "obfs": "$PASSWORD"\n}\nJSON\n')))}g.isMDXComponent=!0}}]);
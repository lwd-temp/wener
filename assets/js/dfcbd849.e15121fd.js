"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[81125],{49613:function(t,e,n){n.d(e,{Zo:function(){return s},kt:function(){return k}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function i(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function l(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?i(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},i=Object.keys(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);for(a=0;a<i.length;a++)n=i[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var m=a.createContext({}),p=function(t){var e=a.useContext(m),n=e;return t&&(n="function"==typeof t?t(e):l(l({},e),t)),n},s=function(t){var e=p(t.components);return a.createElement(m.Provider,{value:e},t.children)},d="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},u=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,i=t.originalType,m=t.parentName,s=o(t,["components","mdxType","originalType","parentName"]),d=p(n),u=r,k=d["".concat(m,".").concat(u)]||d[u]||c[u]||i;return n?a.createElement(k,l(l({ref:e},s),{},{components:n})):a.createElement(k,l({ref:e},s))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var i=n.length,l=new Array(i);l[0]=u;var o={};for(var m in e)hasOwnProperty.call(e,m)&&(o[m]=e[m]);o.originalType=t,o[d]="string"==typeof t?t:r,l[1]=o;for(var p=2;p<i;p++)l[p]=n[p];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},84935:function(t,e,n){n.r(e),n.d(e,{assets:function(){return b},contentTitle:function(){return N},default:function(){return h},frontMatter:function(){return k},metadata:function(){return g},toc:function(){return f}});var a=n(49613),r=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,m=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,d=(t,e)=>{for(var n in e||(e={}))m.call(e,n)&&s(t,n,e[n]);if(o)for(var n of o(e))p.call(e,n)&&s(t,n,e[n]);return t},c=(t,e)=>i(t,l(e)),u=(t,e)=>{var n={};for(var a in t)m.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&o)for(var a of o(t))e.indexOf(a)<0&&p.call(t,a)&&(n[a]=t[a]);return n};const k={title:"MinIO"},N="MinIO",g={unversionedId:"service/storage/minio/README",id:"service/storage/minio/README",title:"MinIO",description:"- \u6700\u540e\u7684 Apache-2.0 \u534f\u8bae\u7248\u672c\u4e3a MinIO 6.7.4",source:"@site/../notes/service/storage/minio/README.md",sourceDirName:"service/storage/minio",slug:"/service/storage/minio/",permalink:"/notes/service/storage/minio/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/storage/minio/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1675652392,formattedLastUpdatedAt:"Feb 6, 2023",frontMatter:{title:"MinIO"},sidebar:"docs",previous:{title:"juicefs",permalink:"/notes/service/storage/juicefs"},next:{title:"Minio ACL",permalink:"/notes/service/storage/minio/acl"}},b={},f=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"Docker",id:"docker",level:2},{value:"Server",id:"server",level:2},{value:"KMS",id:"kms",level:2},{value:"ACL",id:"acl",level:2},{value:"console",id:"console",level:2},{value:"\u96c6\u7fa4",id:"\u96c6\u7fa4",level:2},{value:"\u8054\u90a6",id:"\u8054\u90a6",level:2},{value:"Unsupported backend format",id:"unsupported-backend-format",level:2},{value:"Let&#39;s Encrypt Certbot",id:"lets-encrypt-certbot",level:2},{value:"Unable to initialize config system: Invalid credentials",id:"unable-to-initialize-config-system-invalid-credentials",level:2},{value:"This &#39;admin&#39; API is not supported by server in &#39;mode-server-fs&#39;.",id:"this-admin-api-is-not-supported-by-server-in-mode-server-fs",level:2},{value:"found backend type fs, expected xl or xl-single: Invalid arguments specified",id:"found-backend-type-fs-expected-xl-or-xl-single-invalid-arguments-specified",level:2}],E={toc:f},O="wrapper";function h(t){var e=t,{components:n}=e,r=u(e,["components"]);return(0,a.kt)(O,c(d(d({},E),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",d({},{id:"minio"}),"MinIO"),(0,a.kt)("admonition",d({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u6700\u540e\u7684 Apache-2.0 \u534f\u8bae\u7248\u672c\u4e3a MinIO 6.7.4"))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/minio/minio"}),"minio")," \u662f\u4ec0\u4e48\uff1f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MinIO \u5168\u7ebf\u4ea7\u54c1 AGPL \u534f\u8bae"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b S3 \u5bf9\u8c61\u5b58\u50a8\u534f\u8bae\u7684\u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u5206\u5e03\u5f0f\u9ad8\u53ef\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u7528\u6237\u3001\u5206\u7ec4\u3001\u7b56\u7565\u3001KMS"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 OpenID \u548c LDAP"),(0,a.kt)("li",{parentName:"ul"},"Audit Webhook\u3001Logger Webhook"),(0,a.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u538b\u7f29\u80fd\u529b"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/minio/console"}),"console")," \u63d0\u4f9b\u7ba1\u7406\u754c\u9762"))),(0,a.kt)("li",{parentName:"ul"},"Reed-Solomon code"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/minio/awesome-minio"}),"minio/awesome-minio")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://play.minio.io:9000"}),"https://play.minio.io:9000"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Q3AM3UQ867SPQQA43P2F"),(0,a.kt)("li",{parentName:"ul"},"zuf+tfteSlswRu7BJ86wekitnifILbZam1KYY3TG"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.minio.io/docs/minio-server-configuration-guide"}),"config.json"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u914d\u7f6e\u76ee\u5f55\u4e3a ",(0,a.kt)("inlineCode",{parentName:"li"},"${HOME}/.minio")),(0,a.kt)("li",{parentName:"ul"},"\u542f\u52a8\u65f6\u53ef\u901a\u8fc7 ",(0,a.kt)("inlineCode",{parentName:"li"},"--config-dir")," \u6307\u5b9a"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.minio.io/docs/minio-bucket-notification-guide"}),"Minio Bucket Notification Guide")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.minio.io/docs/minio-server-limits-per-tenant"}),"Minio Server Limits Per Tenant"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u7684 S3 \u63a5\u53e3",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"BucketACL (Use bucket policies instead)"),(0,a.kt)("li",{parentName:"ul"},"BucketCORS (CORS enabled by default on all buckets for all HTTP verbs)"),(0,a.kt)("li",{parentName:"ul"},"BucketLifecycle (Not required for Minio erasure coded backend)"),(0,a.kt)("li",{parentName:"ul"},"BucketReplication (Use mc mirror instead)"),(0,a.kt)("li",{parentName:"ul"},"BucketVersions, BucketVersioning (Use s3git)"),(0,a.kt)("li",{parentName:"ul"},"BucketWebsite (Use caddy or nginx)"),(0,a.kt)("li",{parentName:"ul"},"BucketAnalytics, BucketMetrics, BucketLogging (Use bucket notification APIs)"),(0,a.kt)("li",{parentName:"ul"},"BucketRequestPayment"),(0,a.kt)("li",{parentName:"ul"},"BucketTagging"),(0,a.kt)("li",{parentName:"ul"},"ObjectACL (Use bucket policies instead)"),(0,a.kt)("li",{parentName:"ul"},"ObjectTorrent"))))),(0,a.kt)("li",{parentName:"ul"},"Cyberduck s3 http ",(0,a.kt)("a",d({parentName:"li"},{href:"https://svn.cyberduck.io/trunk/profiles/S3%20(HTTP).cyberduckprofile"}),"https://svn.cyberduck.io/trunk/profiles/S3%20(HTTP).cyberduckprofile")),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.minio.io/docs/setup-nginx-proxy-with-minio"}),"Set up Nginx proxy with MinIO Server"))))),(0,a.kt)("admonition",d({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"access key \u81f3\u5c11 3 \u5b57\u7b26"),(0,a.kt)("li",{parentName:"ul"},"secret key \u81f3\u5c11 8 \u5b57\u7b26"),(0,a.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u6a21\u5f0f\u4e0d\u652f\u6301\u589e\u52a0\u8282\u70b9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u8054\u90a6\u8fdb\u884c bucket \u5206\u6d41"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u51cf\u5c11"))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u9650\u5236"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"\u503c"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u6700\u591a\u78c1\u76d8\u6570"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"16")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u6700\u5c0f\u78c1\u76d8\u6570"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"4")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Read quorum"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"N/2")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"Write quorum"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"N/2+1")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u6d4f\u89c8\u5668\u4e0a\u4f20\u9650\u5236"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"5GiB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u6700\u5927\u5bf9\u8c61"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"5TiB")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"\u5757\u5927\u5c0f"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"5 MiB - 5 GiB")))),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"# macOS\n# ==========\n# minio \u4ed3\u5e93 - \u53ef\u80fd\u66f4\u65b0\n# brew install minio/stable/minio\n# brew install minio/stable/mc\nbrew install minio-mc minio\n\n# Docker\n# ==========\ndocker pull minio/minio\n# \u5355\u8282\u70b9\u542f\u52a8\ndocker run -p 9000:9000 --name minio -v /mnt/data:/data -v /mnt/config:/root/.minio minio/minio server /data\n\n# \u96c6\u7fa4\u542f\u52a8\u9700\u8981\u6307\u5b9a MINIO_ACCESS_KEY \u548c MINIO_SECRET_KEY\nMINIO_ACCESS_KEY=$(cat /dev/urandom | env LC_CTYPE=C tr -dc 'a-zA-Z0-9' | head -c 32)\nMINIO_SECRET_KEY=$(cat /dev/urandom | env LC_CTYPE=C tr -dc 'a-zA-Z0-9' | head -c 32)\n\ndocker network create minio-net\nfor i in {1..4}; do\n  docker run -d -p 900$i:9000 --network minio-net --name m$i \\\n    -e \"MINIO_ACCESS_KEY=${MINIO_ACCESS_KEY}\" \\\n    -e \"MINIO_SECRET_KEY=${MINIO_SECRET_KEY}\" \\\n    -v $PWD/m$i/data:/data \\\n    -v $PWD/m$i/config:/root/.minio \\\n    minio/minio server http://m1:9000/data http://m2:9000/data http://m3:9000/data http://m4:9000/data\ndone\n\n# \u53ef\u4ee5\u4f7f\u7528 docker \u4f5c\u4e3a\u5ba2\u6237\u7aef\ndocker pull minio/mc\nalias mc='docker run -v ~/.mc:/root/.mc -v $PWD:/pwd --workdir /pwd --rm -it minio/mc'\n# \u914d\u7f6e\u6587\u4ef6\u4f4d\u4e8e ~/.mc/\nmc config host add m1 http://$(docker-machine ip):9001 $MINIO_ACCESS_KEY $MINIO_SECRET_KEY S3v4\n\n# \u7b80\u5316\u4f7f\u7528\n# alias ls='mc ls'\n# alias cp='mc cp'\n# alias cat='mc cat'\n# alias mkdir='mc mb'\n# alias pipe='mc pipe'\n\nmc mb m1/test\necho Hello Minio ! | mc pipe m1/test/test.txt\nmc cat m1/test/test.txt\n\nmc cp m1/test/test.txt m1/test/bk.txt\nmc cat m1/test/bk.txt\nmc rm m1/test/bk.txt\n\n# download/upload/list\nmc share download m1/test/test.txt\n\n# \u7c7b\u4f3c\u4e8e rsync\n# --force \u5f3a\u5236\u8986\u5199 --watch, -w \u76d1\u63a7\u53d8\u66f4 --remove \u5220\u9664\u76ee\u7684\u7684\u5176\u4f59\u5185\u5bb9 --fake\nmc mb m1/test-m\nmc mirror m1/test m1/test-m -w --remove --force\necho One more | mc pipe m1/test/more.txt\nmc rm m1/test/more.txt\n# \u53ea\u6709\u4e4b\u524d\u7684 test.txt\nmc ls m1/test-m\n\ndocker stop m4\n# \u4f9d\u7136\u80fd\u521b\u5efa\u6587\u4ef6\necho Touch | mc pipe m1/test/$(date +\"%Y-%m-%d.%H-%M-%S\").txt\ndocker stop m3\n# \u80fd\u8bfb\nmc cat m1/test/test.txt\n# \u4e0d\u80fd\u5199\u5165, \u4f1a\u4e00\u76f4\u7b49\u5f85\necho Touch | mc pipe m1/test/$(date +\"%Y-%m-%d.%H-%M-%S\").txt\n# \u6b64\u65f6\u65e0\u6cd5\u542f\u52a8 m3, \u56e0\u4e3a m4 \u672a\u542f\u52a8\ndocker start m3\n# \u4e24\u4e2a\u8282\u70b9\u90fd\u542f\u52a8\u6210\u529f, \u4e4b\u524d\u7684\u64cd\u4f5c\u7ee7\u7eed\u8fdb\u884c\ndocker start m4\n\n# Stop all\ndocker rm -f m{1,2,3,4}\n\n# https://github.com/minio/minfs\n\n# rclone\necho \"\n[oss]\ntype=s3\nenv_auth=false\naccess_key_id=${MINIO_ACCESS_KEY}\nsecret_access_key=${MINIO_SECRET_KEY}\nregion=us-east-1\nendpoint=http://127.0.0.1:9000\nlocation_constraint=\nserver_side_encryption=\n\" >> ~/.rclone.conf\nrclone lsd oss:\n")),(0,a.kt)("h2",d({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.min.io/docs/minio-server-configuration-guide.html"}),"https://docs.min.io/docs/minio-server-configuration-guide.html")),(0,a.kt)("li",{parentName:"ul"},"\u73b0\u5728\u914d\u7f6e\u4f1a\u5b58\u50a8\u5230\u540e\u7aef\u5b58\u50a8\u76ee\u5f55\u4e0b\uff0c ",(0,a.kt)("inlineCode",{parentName:"li"},".minio.sys")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/minio/minio/tree/master/docs/config"}),"https://github.com/minio/minio/tree/master/docs/config"))),(0,a.kt)("h2",d({},{id:"docker"}),"Docker"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'docker run -p 9000:9000 --name minio1 \\\n  -e "MINIO_ACCESS_KEY=changeme" \\\n  -e "MINIO_SECRET_KEY=changeme" \\\n  -v /mnt/data:/data \\\n  minio/minio server /data\n')),(0,a.kt)("h2",d({},{id:"server"}),"Server"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"env"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_ROOT_USER"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_ROOT_PASSWORD"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("del",{parentName:"td"},"MINIO_ACCESS_KEY")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_ROOT_USER")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("del",{parentName:"td"},"MINIO_SECRET_KEY")),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_ROOT_PASSWORD")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_VOLUMES"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_CONFIG_ENV_FILE"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"Console")),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_PROMETHEUS_URL"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"CONSOLE_PROMETHEUS_URL")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_PROMETHEUS_JOB_ID"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"minio-job")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_LOG_QUERY_URL"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_BROWSER"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),"off \u7981\u7528 console")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_SERVER_URL"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_BROWSER_REDIRECT_URL"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"KMS")),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_KMS_KES_ENDPOINT"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_KMS_KES_KEY_FILE"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_KMS_KES_CERT_FILE"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_KMS_KES_KEY_NAME"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"LDAP")),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_IDENTITY_LDAP_SERVER_ADDR"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("strong",{parentName:"td"},"OpenID")),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_IDENTITY_OPENID_CONFIG_URL"),(0,a.kt)("td",d({parentName:"tr"},{align:null}),(0,a.kt)("a",d({parentName:"td"},{href:"https://id.example.net/.well-known/openid-configuration"}),"https://id.example.net/.well-known/openid-configuration"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_IDENTITY_OPENID_CLIENT_ID"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_IDENTITY_OPENID_CLIENT_SECRET"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_IDENTITY_OPENID_CLAIM_NAME"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_IDENTITY_OPENID_CLAIM_PREFIX"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_IDENTITY_OPENID_SCOPES"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_IDENTITY_OPENID_REDIRECT_URI"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"MINIO_IDENTITY_OPENID_COMMENT"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))))),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",d({parentName:"tr"},{align:null}),"flag"),(0,a.kt)("th",d({parentName:"tr"},{align:null}),"for"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",d({parentName:"tr"},{align:null}),"--certs-dir,-S"),(0,a.kt)("td",d({parentName:"tr"},{align:null}))))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"certs-dir",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"${HOME}/.minio/certs")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"%%USERPROFILE%%\\.minio\\certs")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://min.io/docs/minio/linux/reference/minio-mc-admin/mc-admin-config.html"}),"https://min.io/docs/minio/linux/reference/minio-mc-admin/mc-admin-config.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://min.io/docs/minio/linux/reference/minio-server/minio-server.html"}),"https://min.io/docs/minio/linux/reference/minio-server/minio-server.html"))),(0,a.kt)("h2",d({},{id:"kms"}),"KMS"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.min.io/docs/minio-kms-quickstart-guide.html"}),"https://docs.min.io/docs/minio-kms-quickstart-guide.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/files/gitlab-config-template/gitlab.rb.template#L355"}),"https://gitlab.com/gitlab-org/omnibus-gitlab/blob/master/files/gitlab-config-template/gitlab.rb.template#L355"))),(0,a.kt)("h2",d({},{id:"acl"}),"ACL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.min.io/docs/minio-admin-complete-guide.html"}),"https://docs.min.io/docs/minio-admin-complete-guide.html"))),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'# \u521b\u5efa\u4e00\u4e2a sites \u7684 bucket\nmc mb myminio/sites\n# \u521b\u5efa\u4e00\u4e2a sites \u6765\u7ba1\u7406\nmc admin user add myminio/ sites $(uuidgen | tee)\n# \u6dfb\u52a0\u7b56\u7565\necho \'{"Version":"2012-10-17","Statement":[{"Action":["s3:*"],"Effect":"Allow","Resource":["arn:aws:s3:::crm/*"],"Sid":""}]}\' > minio-sites-admin-policy.json\nmc admin policy add myminio/ sites-admin minio-sites-admin-policy.json\n# \u7ed9\u7528\u6237\u8d4b\u6743\nmc admin policy set myminio sites-admin user=sites\n')),(0,a.kt)("h2",d({},{id:"console"}),"console"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/minio/console"}),"minio/console"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 operator - ",(0,a.kt)("inlineCode",{parentName:"li"},"CONSOLE_OPERATOR_MODE=on"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9700\u8981\u751f\u6210 JWT \u767b\u9646 - operator \u7684 ServiceAccount")))))),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),'mc config host add test http://minio.cluster.internal/ YOURACCESSKEY YOURSECRETKEY\nmc ls test\n\nmc admin user add test console YOURCONSOLESECRET\n\ncat > consoleAdmin.json << EOF\n{\n  "Version": "2012-10-17",\n  "Statement": [\n    {\n      "Action": ["admin:*"],\n      "Effect": "Allow",\n      "Sid": ""\n    },\n    {\n      "Action": ["s3:*"],\n      "Effect": "Allow",\n      "Resource": ["arn:aws:s3:::*"],\n      "Sid": ""\n    }\n  ]\n}\nEOF\nmc admin policy add test ConsoleAdmin consoleAdmin.json\nmc admin policy set test ConsoleAdmin user=console\n\n# export CONSOLE_HMAC_JWT_SECRET=YOURJWTSIGNINGSECRET\n#required to encrypt jwet payload\n# export CONSOLE_PBKDF_PASSPHRASE=SECRET\n#required to encrypt jwet payload\n# export CONSOLE_PBKDF_SALT=SECRET\n\ndocker run --rm -it \\\n  -e CONSOLE_MINIO_SERVER=http://minio.cluster.internal \\\n  -e CONSOLE_ACCESS_KEY=console \\\n  -e CONSOLE_SECRET_KEY=YOURCONSOLESECRET \\\n  -p 9090:9090 \\\n  --name console minio/console server\n')),(0,a.kt)("h2",d({},{id:"\u96c6\u7fa4"}),"\u96c6\u7fa4"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.minio.io/docs/distributed-minio-quickstart-guide.html"}),"Distributed MinIO Quickstart Guide")),(0,a.kt)("li",{parentName:"ul"},"\u96c6\u7fa4",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u81f3\u5c11\u9700\u8981 4 \u4e2a\u8282\u70b9\uff0c\u6700\u591a 32 \u4e2a\u8282\u70b9\uff0c\u6700\u591a"),(0,a.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u542f\u52a8\u540e ",(0,a.kt)("strong",{parentName:"li"},"\u8282\u70b9\u4e0d\u53ef\u589e\u52a0")),(0,a.kt)("li",{parentName:"ul"},"\u542f\u52a8\u9700\u8981\u53cc\u6570\u78c1\u76d8"),(0,a.kt)("li",{parentName:"ul"},"\u6700\u591a 16 \u4e2a\u78c1\u76d8, erasure code"),(0,a.kt)("li",{parentName:"ul"},"\u5728 (n/2 + 1) \u78c1\u76d8\u6709\u6548\u65f6, \u96c6\u7fa4\u6709\u6548, \u53ef\u5199\uff0c\u53ef\u521b\u5efa Bucket"),(0,a.kt)("li",{parentName:"ul"},"\u53ea\u6709 n/2 \u78c1\u76d8\u6709\u6548\u65f6, \u53ea\u8bfb"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u4e2a\u8282\u70b9\u53ef\u4ee5\u5305\u542b\u591a\u4e2a\u78c1\u76d8")))),(0,a.kt)("h2",d({},{id:"\u8054\u90a6"}),"\u8054\u90a6"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://docs.minio.io/docs/minio-federation-quickstart-guide.html"}),"Federation Quickstart Guide")),(0,a.kt)("li",{parentName:"ul"},"\u591a\u4e2a\u96c6\u7fa4 Bucket \u5206\u6d41"),(0,a.kt)("li",{parentName:"ul"},"\u4f9d\u8d56",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"etcd"),(0,a.kt)("li",{parentName:"ul"},"CoreDNS - \u53ef\u9009")))),(0,a.kt)("h1",d({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",d({},{id:"unsupported-backend-format"}),"Unsupported backend format"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",d({parentName:"li"},{href:"https://github.com/minio/minio/issues/4104"}),"#4104")),(0,a.kt)("li",{parentName:"ul"},"\u5220\u9664\u65e7\u7684\u542f\u52a8\u6587\u4ef6")),(0,a.kt)("h2",d({},{id:"lets-encrypt-certbot"}),"Let's Encrypt Certbot"),(0,a.kt)("pre",null,(0,a.kt)("code",d({parentName:"pre"},{className:"language-bash"}),"brew install certbot\n")),(0,a.kt)("h2",d({},{id:"unable-to-initialize-config-system-invalid-credentials"}),"Unable to initialize config system: Invalid credentials"),(0,a.kt)("p",null,"key/secret \u9519\u8bef"),(0,a.kt)("h2",d({},{id:"this-admin-api-is-not-supported-by-server-in-mode-server-fs"}),"This 'admin' API is not supported by server in 'mode-server-fs'."),(0,a.kt)("h2",d({},{id:"found-backend-type-fs-expected-xl-or-xl-single-invalid-arguments-specified"}),"found backend type fs, expected xl or xl-single: Invalid arguments specified"),(0,a.kt)("p",null,"\u65b0\u65e7 minio \u6570\u636e\u76ee\u5f55\u5207\u6362\u56de\u51fa\u73b0"))}h.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[62092],{49613:function(e,t,r){r.d(t,{Zo:function(){return s},kt:function(){return v}});var n=r(59496);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function o(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?o(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):o(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var l=n.createContext({}),p=function(e){var t=n.useContext(l),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},s=function(e){var t=p(e.components);return n.createElement(l.Provider,{value:t},e.children)},u="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,s=c(e,["components","mdxType","originalType","parentName"]),u=p(r),d=a,v=u["".concat(l,".").concat(d)]||u[d]||m[d]||o;return r?n.createElement(v,i(i({ref:t},s),{},{components:r})):n.createElement(v,i({ref:t},s))}));function v(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=r.length,i=new Array(o);i[0]=d;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[u]="string"==typeof e?e:a,i[1]=c;for(var p=2;p<o;p++)i[p]=r[p];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},45728:function(e,t,r){r.r(t),r.d(t,{assets:function(){return g},contentTitle:function(){return k},default:function(){return y},frontMatter:function(){return v},metadata:function(){return f},toc:function(){return h}});var n=r(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,r)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,u=(e,t)=>{for(var r in t||(t={}))l.call(t,r)&&s(e,r,t[r]);if(c)for(var r of c(t))p.call(t,r)&&s(e,r,t[r]);return e},m=(e,t)=>o(e,i(t)),d=(e,t)=>{var r={};for(var n in e)l.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&c)for(var n of c(e))t.indexOf(n)<0&&p.call(e,n)&&(r[n]=e[n]);return r};const v={title:"Verdaccio"},k="verdaccio",f={unversionedId:"service/forge/verdaccio",id:"service/forge/verdaccio",title:"Verdaccio",description:"- verdaccio/verdaccio",source:"@site/../notes/service/forge/verdaccio.md",sourceDirName:"service/forge",slug:"/service/forge/verdaccio",permalink:"/notes/service/forge/verdaccio",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/verdaccio.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1694402622,formattedLastUpdatedAt:"Sep 11, 2023",frontMatter:{title:"Verdaccio"},sidebar:"docs",previous:{title:"Rundeck",permalink:"/notes/service/forge/rundeck"},next:{title:"woodpecker",permalink:"/notes/service/forge/woodpecker/"}},g={},h=[{value:"config.yaml",id:"configyaml",level:2},{value:"docker",id:"docker",level:2},{value:"minio",id:"minio",level:2},{value:"ERR_SOCKET_TIMEOUT",id:"err_socket_timeout",level:2},{value:"Cannot publish over existing version",id:"cannot-publish-over-existing-version",level:2}],b={toc:h},N="wrapper";function y(e){var t=e,{components:r}=t,a=d(t,["components"]);return(0,n.kt)(N,m(u(u({},b),a),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",u({},{id:"verdaccio"}),"verdaccio"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/verdaccio/verdaccio"}),"verdaccio/verdaccio"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"MIT, TS, JS"),(0,n.kt)("li",{parentName:"ul"},"NPM \u79c1\u6709\u4ed3\u5e93"))),(0,n.kt)("li",{parentName:"ul"},"\u63d2\u4ef6",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/verdaccio/monorepo/tree/9.x/plugins"}),"https://github.com/verdaccio/monorepo/tree/9.x/plugins")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/Alexandre-io/verdaccio-ldap"}),"Alexandre-io/verdaccio-ldap")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://www.npmjs.com/package/verdaccio-aws-s3-storage"}),"verdaccio-aws-s3-storage"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 minio"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/verdaccio/verdaccio/blob/master/docker-examples/v4/amazon-s3-docker-example/s3Plugin/Dockerfile"}),"https://github.com/verdaccio/verdaccio/blob/master/docker-examples/v4/amazon-s3-docker-example/s3Plugin/Dockerfile")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://www.npmjs.com/package/verdaccio-minio"}),"verdaccio-minio"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Minio SDK"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/barolab/verdaccio-minio/blob/master/Dockerfile"}),"https://github.com/barolab/verdaccio-minio/blob/master/Dockerfile")))))),(0,n.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u7aef\u53e3 4873"),(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://juejin.cn/post/6844904193501691917"}),"Verdaccio \u79c1\u4ed3\u642d\u5efa")))),(0,n.kt)("li",{parentName:"ul"},"Endpoint",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Tarball ",(0,n.kt)("inlineCode",{parentName:"li"},":pkg/-/:name-:ver.tgz")),(0,n.kt)("li",{parentName:"ul"},"Web",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/-/web/detail/:pkg")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"/-/web/detail/:pkg/v/:version"))))))),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# VERDACCIO_PUBLIC_URL=https://npm.wener.me\ndocker run --rm -it \\\n  -e VERDACCIO_PORT=8080 \\\n  -v $PWD/storage:/verdaccio/storage \\\n  -v $PWD/conf:/verdaccio/conf \\\n  -v $PWD/plugins:/verdaccio/plugins \\\n  --name verdaccio verdaccio/verdaccio\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://verdaccio.org/docs/env#docker"}),"https://verdaccio.org/docs/env#docker"))),(0,n.kt)("h2",u({},{id:"configyaml"}),"config.yaml"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5185\u7f6e\u5206\u7ec4 $all, $anonymous"),(0,n.kt)("li",{parentName:"ul"},"$authenticated")),(0,n.kt)("h2",u({},{id:"docker"}),"docker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"/verdaccio/storage/htpasswd"),(0,n.kt)("li",{parentName:"ul"},"/verdaccio/conf/config.yaml"),(0,n.kt)("li",{parentName:"ul"},"\u5982\u679c\u51fa\u73b0\u5730\u5740\u5f02\u5e38\uff0c\u53ef\u5c1d\u8bd5\u8bbe\u7f6e env VERDACCIO_PORT")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"htpasswd -bc htpasswd admin admin\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"auth:\n  htpasswd:\n    file: ./htpasswd\n\nuplinks:\n  npmjs:\n    url: https://registry.npmjs.org/\n")),(0,n.kt)("h2",u({},{id:"minio"}),"minio"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"barolab/verdaccio")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-Dockerfile"}),"FROM verdaccio/verdaccio:5\nUSER root\nENV NODE_ENV=production\nRUN yarn global add verdaccio-minio && \\\n  ln -s /usr/local/share/.config/yarn/global/node_modules/verdaccio-minio /verdaccio/plugins/verdaccio-minio  && \\\n  chown -R 10001 /usr/local/share/.config/yarn/global/node_modules/verdaccio-minio && \\\n  chown -R 10001 /verdaccio/plugins\n\nUSER verdaccio\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"/verdaccio/conf/config.yaml")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"# This points to the plugin folder above\nplugins: /verdaccio/plugins\n# This is mandatory, otherwise verdaccio won't boot\nstorage: /verdaccio/storage/data\n\nstore:\n  minio:\n    port: 9000\n    endPoint: minio.minio.svc.cluster.local\n    accessKey: this-is-not-so-secret\n    secretKey: this-is-not-so-secret\n    useSSL: false\n    region: eu-west-1\n    bucket: 'npm'\n    retries: 3\n    delay: 50\n")),(0,n.kt)("h2",u({},{id:"err_socket_timeout"}),"ERR_SOCKET_TIMEOUT"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u8d70\u4ee3\u7406\u62c9\u53d6\uff0c\u53ef\u80fd\u6162")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u4fee\u6539 timeout\necho timeout=60000 >> .npmrc\n\nnpm config ls -l | grep fetch\n")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-ini"}),"fetch-retries = 2\nfetch-retry-factor = 10\nfetch-retry-maxtimeout = 60000\nfetch-retry-mintimeout = 10000\nfetch-timeout = 300000\n")),(0,n.kt)("h2",u({},{id:"cannot-publish-over-existing-version"}),"Cannot publish over existing version"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",u({parentName:"li"},{href:"https://github.com/verdaccio/verdaccio/issues/1402"}),"https://github.com/verdaccio/verdaccio/issues/1402")),(0,n.kt)("li",{parentName:"ul"},"\u76ee\u524d\u53ea\u80fd unpublish")),(0,n.kt)("pre",null,(0,n.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"npm publish --force --access restricted\n")))}y.isMDXComponent=!0}}]);
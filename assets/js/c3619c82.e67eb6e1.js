"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[24735],{49613:function(e,t,a){a.d(t,{Zo:function(){return p},kt:function(){return k}});var r=a(59496);function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function l(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function u(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?l(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function s(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},l=Object.keys(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)a=l[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var i=r.createContext({}),o=function(e){var t=r.useContext(i),a=t;return e&&(a="function"==typeof e?e(t):u(u({},t),e)),a},p=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},b=r.forwardRef((function(e,t){var a=e.components,n=e.mdxType,l=e.originalType,i=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=o(a),b=n,k=c["".concat(i,".").concat(b)]||c[b]||m[b]||l;return a?r.createElement(k,u(u({ref:t},p),{},{components:a})):r.createElement(k,u({ref:t},p))}));function k(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var l=a.length,u=new Array(l);u[0]=b;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[c]="string"==typeof e?e:n,u[1]=s;for(var o=2;o<l;o++)u[o]=a[o];return r.createElement.apply(null,u)}return r.createElement.apply(null,a)}b.displayName="MDXCreateElement"},49455:function(e,t,a){a.r(t),a.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return k},metadata:function(){return N},toc:function(){return g}});var r=a(49613),n=Object.defineProperty,l=Object.defineProperties,u=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,p=(e,t,a)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))i.call(t,a)&&p(e,a,t[a]);if(s)for(var a of s(t))o.call(t,a)&&p(e,a,t[a]);return e},m=(e,t)=>l(e,u(t)),b=(e,t)=>{var a={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&o.call(e,r)&&(a[r]=e[r]);return a};const k={title:"CubeJS"},d="CubeJS",N={unversionedId:"service/bi/cubejs",id:"service/bi/cubejs",title:"CubeJS",description:"- cube-js/cube.js",source:"@site/../notes/service/bi/cubejs.md",sourceDirName:"service/bi",slug:"/service/bi/cubejs",permalink:"/notes/service/bi/cubejs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/bi/cubejs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645693721,formattedLastUpdatedAt:"Feb 24, 2022",frontMatter:{title:"CubeJS"},sidebar:"docs",previous:{title:"cubestore",permalink:"/notes/service/bi/cubejs-store"},next:{title:"veta lite",permalink:"/notes/service/bi/vega-lite"}},h={},g=[{value:"API",id:"api",level:2},{value:"Notes",id:"notes",level:2},{value:"cubestore",id:"cubestore",level:2},{value:"Helm",id:"helm",level:2},{value:"container",id:"container",level:2},{value:"\u8f6c\u8bd1\u903b\u8f91",id:"\u8f6c\u8bd1\u903b\u8f91",level:2},{value:"To join across data sources use rollupJoin with Cube Store",id:"to-join-across-data-sources-use-rollupjoin-with-cube-store",level:2}],f={toc:g},v="wrapper";function y(e){var t=e,{components:a}=t,n=b(t,["components"]);return(0,r.kt)(v,m(c(c({},f),n),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"cubejs"}),"CubeJS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/cube-js/cube.js"}),"cube-js/cube.js"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"MIT+Apache-2.0,"),(0,r.kt)("li",{parentName:"ul"},"Analytics API for Building Data Apps"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u72ec\u7acb\u8fd0\u884c\uff0c\u4e5f\u53ef\u4ee5 Node \u96c6\u6210"),(0,r.kt)("li",{parentName:"ul"},"\u6570\u636e\u5e93\u652f\u6301: Postgres,MySQL,ClickHouse,PrestoDB,Druid,Elasticsearch,SQLite"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u79df\u6237"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u751f\u6210\u524d\u7aef\u7ec4\u4ef6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"React UI \u57fa\u4e8e AntD"))),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 JWT Auth"),(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301 Redis \u7f13\u5b58"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b REST API"),(0,r.kt)("li",{parentName:"ul"},"\u63d0\u4f9b SQL API",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u5bf9\u63a5\u5916\u90e8\u7cfb\u7edf - \u4f8b\u5982 exporter \u76f4\u63a5\u6293\u53d6\u4f5c\u4e3a metrics"))),(0,r.kt)("li",{parentName:"ul"},"Request JSON Object + Schema => SQL")))),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"port"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"for"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"4000/http"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"frontend")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"3031/http"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"Serving status probes")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"13306/mysql"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"cubestore")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"3030/http"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),"cubestore")))),(0,r.kt)("admonition",c({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u5efa\u8bae\u5185\u5d4c Cube.js \u5230\u73b0\u6709 Express \u5e94\u7528\uff0c\u5efa\u8bae\u901a\u8fc7 \u5305 \u6269\u5c55"),(0,r.kt)("li",{parentName:"ul"},"web \u4e0d\u652f\u6301\u914d\u7f6e postgresql ssl"))),(0,r.kt)("admonition",c({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Postgres can not work with table names that longer than 64 symbols",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 sqlAlias \u89e3\u51b3 schema+table \u540d\u5b57\u8fc7\u957f\u7684\u95ee\u9898"))))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# http://localhost:4000\ndocker run -p 4000:4000 \\\n  -v ${PWD}:/cube/conf \\\n  -e CUBEJS_DEV_MODE=true \\\n  cubejs/cube:alpine\n")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-ini",metastring:'title=".env"',title:'".env"'}),"CUBEJS_DB_TYPE=postgres\nCUBEJS_DB_HOST=192.168.1.2\nCUBEJS_DB_PORT=5432\nCUBEJS_DB_NAME=demo\nCUBEJS_DB_USER=demo\nCUBEJS_DB_PASS=\nCUBEJS_DB_SSL=false\n")),(0,r.kt)("h2",c({},{id:"api"}),"API"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Query \u652f\u6301 JSON \u4e5f\u652f\u6301 SQL \u67e5\u8be2 - MySQL \u517c\u5bb9\u534f\u8bae"),(0,r.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u63a5\u53e3 - baseUrl http://localhost:4000/cubejs-api/",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/graphql",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u76f4\u63a5\u67e5\u8be2\u6240\u6709 Cube - ",(0,r.kt)("a",c({parentName:"li"},{href:"https://cube.dev/docs/backend/graphql"}),"https://cube.dev/docs/backend/graphql")),(0,r.kt)("li",{parentName:"ul"},"dev \u4f1a\u5f00\u542f graphiql"))),(0,r.kt)("li",{parentName:"ul"},"/v1/load"),(0,r.kt)("li",{parentName:"ul"},"/v1/subscribe"),(0,r.kt)("li",{parentName:"ul"},"/v1/sql"),(0,r.kt)("li",{parentName:"ul"},"/v1/meta"),(0,r.kt)("li",{parentName:"ul"},"/v1/run-scheduled-refresh"),(0,r.kt)("li",{parentName:"ul"},"/v1/run-scheduled-refresh"),(0,r.kt)("li",{parentName:"ul"},"/v1/dry-run"),(0,r.kt)("li",{parentName:"ul"},"/v1/pre-aggregations/can-use"))),(0,r.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u63a5\u53e3 - \u8bbe\u7f6e playgroundAuthSecret \u540e\u5f00\u542f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/cubejs-system/v1/context"),(0,r.kt)("li",{parentName:"ul"},"/cubejs-system/v1/pre-aggregations"),(0,r.kt)("li",{parentName:"ul"},"/cubejs-system/v1/pre-aggregations/security-contexts"),(0,r.kt)("li",{parentName:"ul"},"/cubejs-system/v1/pre-aggregations/timezones"),(0,r.kt)("li",{parentName:"ul"},"/cubejs-system/v1/pre-aggregations/partitions"),(0,r.kt)("li",{parentName:"ul"},"/cubejs-system/v1/pre-aggregations/preview"),(0,r.kt)("li",{parentName:"ul"},"/cubejs-system/v1/pre-aggregations/build"),(0,r.kt)("li",{parentName:"ul"},"/cubejs-system/v1/pre-aggregations/queue"),(0,r.kt)("li",{parentName:"ul"},"/cubejs-system/v1/pre-aggregations/cancel"))),(0,r.kt)("li",{parentName:"ul"},"\u5176\u4ed6",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/readyz"),(0,r.kt)("li",{parentName:"ul"},"/livez")))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-http"}),'### Load data\nPOST http://localhost:4000/cubejs-api/v1/load\nContent-Type: application/json\n\n{"query": {"measures":["Users.count"]}}\n\n### SQL\nGET http://localhost:4000/cubejs-api/v1/sql?query={"measures":["Users.count"]}\n\n### Meta\nGET http://localhost:4000/cubejs-api/v1/meta\n\n### Trigger refresh\nGET http://localhost:4000/cubejs-api/v1/run-scheduled-refresh?queryingOptions={"timezone":"UTC"}\n\n### ready\nGET http://localhost:4000/readyz\n\n### live\nGET http://localhost:4000/livez\n')),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-json",metastring:'title="query"',title:'"query"'}),'{\n  "measures": ["Stories.count"],\n  "dimensions": ["Stories.category"],\n  "filters": [\n    {\n      // dimension or measure\n      "member": "Stories.isDraft",\n      // \u652f\u6301\u7684\u64cd\u4f5c - \u7c7b\u578b\u4e5f\u4f1a\u5f71\u54cd\n      // equals, notEquals, contains, notContains\n      // gt, gte, lt, lte\n      // set, notSet\n      // inDateRange, notInDateRange, beforeDate, afterDate\n      "operator": "equals",\n      // date YYYY-MM-DD\n      "values": ["No"]\n    },\n    // \u903b\u8f91\n    {\n      "or": [{ "and": [] }]\n    }\n  ],\n  "timeDimensions": [\n    {\n      "dimension": "Stories.time",\n      // \u652f\u6301\u76f8\u5bf9\u503c\n      // today, yesterday, tomorrow, last year, next month, last 6 months, last week\n      // \u652f\u6301\u7279\u6b8a\u8303\u56f4\n      // from N days ago to now or from now to N days from now\n      "dateRange": ["2015-01-01", "2015-12-31"],\n      "granularity": "month",\n      // \u6bd4\u8f83\n      "compareDateRange": ["this week", ["2020-05-21", "2020-05-28"]]\n    }\n  ],\n  "limit": 100,\n  "offset": 50,\n  // order: {"Stories.time": "asc"}\n  "order": [\n    ["Stories.time", "asc"],\n    ["Stories.count", "asc"]\n  ],\n  "timezone": "Asia/Shanghai"\n}\n')),(0,r.kt)("h2",c({},{id:"notes"}),"Notes"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"@cubejs-backend/server",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u72ec\u7acb\u670d\u52a1\uff0c\u5305\u542b\u6240\u6709 driver"))),(0,r.kt)("li",{parentName:"ul"},"@cubejs-backend/server-core",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u5305\uff0c\u7528\u4e8e\u81ea\u5b9a\u4e49\u6269\u5c55"))),(0,r.kt)("li",{parentName:"ul"},"@cubejs-client/{core,react,ngx,vue,ws-transport}",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"react",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"dashboard \u57fa\u4e8e antd"))))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/cube-js/cube.js/tree/master/examples/real-time-dashboard"}),"real-time-dashboard")),(0,r.kt)("li",{parentName:"ul"},"\u7f13\u5b58 redis, memory"),(0,r.kt)("li",{parentName:"ul"},"\u6269\u5c55\u65b9\u5f0f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u914d\u7f6e\uff0c\u52a8\u6001 fetch schema"),(0,r.kt)("li",{parentName:"ul"},"\u57fa\u4e8e @cubejs-backend"))),(0,r.kt)("li",{parentName:"ul"},"\u5904\u7406\u903b\u8f91",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"repository \u5305\u542b schema"),(0,r.kt)("li",{parentName:"ul"},"compiler \u7f16\u8bd1 schema - eval",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9644\u5e26 COMPILE_CONTEXT",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5185\u90e8\u5305\u542b securityContext"))),(0,r.kt)("li",{parentName:"ul"},"cube \u5173\u8054 dataSource"),(0,r.kt)("li",{parentName:"ul"},"dataSource \u5173\u8054 driver"))),(0,r.kt)("li",{parentName:"ul"},"\u8bf7\u6c42 \u5173\u8054 appId")))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'# -d postgres, mysql, athena, mongobi, bigquery, redshift, mssql, clickhouse, snowflake, presto, druid\n# -t docker, express, serverless, serverless-aws\nnpx -y cubejs-cli create demo-cube -d postgres\ncd demo-cube\nnpx cubejs-cli server --debug\n\ncubejs generate -t users,user_profiles\n# Geneate JWT\n# -e 1 day, 30 days\n# -s CUBEJS_API_SECRET\n# -u USER_CONTEXT\n# CUBEJS_DEV_MODE\n# token -e "30 days" -p appId=1 -p userId=2 -u tenantId=12\n')),(0,r.kt)("h2",c({},{id:"cubestore"}),"cubestore"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Apache 2.0, Rust"),(0,r.kt)("li",{parentName:"ul"},"\u9884\u805a\u5408"),(0,r.kt)("li",{parentName:"ul"},"distributed"),(0,r.kt)("li",{parentName:"ul"},"WIP: \u5916\u90e8\u5b58\u50a8 MySQL & Postgres"),(0,r.kt)("li",{parentName:"ul"},"RocksDB, Apache Parquet, Apache Arrow, datafusion"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/apache/arrow-datafusion"}),"https://github.com/apache/arrow-datafusion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/cube-js/cube.js/tree/master/rust"}),"https://github.com/cube-js/cube.js/tree/master/rust")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://cube.dev/blog/introducing-cubestore/"}),"https://cube.dev/blog/introducing-cubestore/"))),(0,r.kt)("h2",c({},{id:"helm"}),"Helm"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u793e\u533a\u7ef4\u62a4\uff0c\u8d28\u91cf\u4e00\u822c"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/cube-js/cube.js/tree/master/examples/helm-charts"}),"https://github.com/cube-js/cube.js/tree/master/examples/helm-charts"))),(0,r.kt)("h2",c({},{id:"container"}),"container"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/cube-js/cube.js/tree/master/packages/cubejs-docker"}),"packages/cubejs-docker")),(0,r.kt)("li",{parentName:"ul"},"cubejs/cube:v0.28.59-alpine",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76ee\u524d\u6ca1\u6709\u5220\u9664 yarn cache \u6bd4\u8f83\u5927"))),(0,r.kt)("li",{parentName:"ul"},"workdir /cube/conf"),(0,r.kt)("li",{parentName:"ul"},"\u5305\u542b\u6240\u6709\u9a71\u52a8+@cubejs-backend/server+typescript"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u6267\u884c cubejs server")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"docker run --rm -it \\\n  -p 4000:4000 \\\n  -v $PWD:/cube/conf \\\n  cubejs/cube:v0.28.59-alpine\n")),(0,r.kt)("h1",c({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",c({},{id:"\u8f6c\u8bd1\u903b\u8f91"}),"\u8f6c\u8bd1\u903b\u8f91"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-js"}),"cube(`Users`, {\n  measures: {\n    count: {\n      type: `count`,\n    },\n    // before\n    ratio: {\n      sql: `sum(${CUBE}.amount) / ${count}`,\n      type: `number`,\n    },\n    // after\n    // \u56e0\u6b64\u4e5f\u53ef\u4ee5\u76f4\u63a5\u5199\u51fd\u6570\n    ratio: {\n      sql: (CUBE, count) => `sum(${CUBE}.amount) / ${count}`,\n      type: `number`,\n    },\n  },\n});\n")),(0,r.kt)("h2",c({},{id:"to-join-across-data-sources-use-rollupjoin-with-cube-store"}),"To join across data sources use rollupJoin with Cube Store"))}y.isMDXComponent=!0}}]);
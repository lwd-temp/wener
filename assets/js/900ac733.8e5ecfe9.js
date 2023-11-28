"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[36354],{49613:function(t,e,n){n.d(e,{Zo:function(){return d},kt:function(){return k}});var a=n(59496);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,a)}return n}function i(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function u(t,e){if(null==t)return{};var n,a,r=function(t,e){if(null==t)return{};var n,a,r={},l=Object.keys(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(t);for(a=0;a<l.length;a++)n=l[a],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var o=a.createContext({}),s=function(t){var e=a.useContext(o),n=e;return t&&(n="function"==typeof t?t(e):i(i({},e),t)),n},d=function(t){var e=s(t.components);return a.createElement(o.Provider,{value:e},t.children)},p="mdxType",c={inlineCode:"code",wrapper:function(t){var e=t.children;return a.createElement(a.Fragment,{},e)}},m=a.forwardRef((function(t,e){var n=t.components,r=t.mdxType,l=t.originalType,o=t.parentName,d=u(t,["components","mdxType","originalType","parentName"]),p=s(n),m=r,k=p["".concat(o,".").concat(m)]||p[m]||c[m]||l;return n?a.createElement(k,i(i({ref:e},d),{},{components:n})):a.createElement(k,i({ref:e},d))}));function k(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var l=n.length,i=new Array(l);i[0]=m;var u={};for(var o in e)hasOwnProperty.call(e,o)&&(u[o]=e[o]);u.originalType=t,u[p]="string"==typeof t?t:r,i[1]=u;for(var s=2;s<l;s++)i[s]=n[s];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},56138:function(t,e,n){n.r(e),n.d(e,{assets:function(){return E},contentTitle:function(){return b},default:function(){return _},frontMatter:function(){return k},metadata:function(){return N},toc:function(){return f}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,d=(t,e,n)=>e in t?r(t,e,{enumerable:!0,configurable:!0,writable:!0,value:n}):t[e]=n,p=(t,e)=>{for(var n in e||(e={}))o.call(e,n)&&d(t,n,e[n]);if(u)for(var n of u(e))s.call(e,n)&&d(t,n,e[n]);return t},c=(t,e)=>l(t,i(e)),m=(t,e)=>{var n={};for(var a in t)o.call(t,a)&&e.indexOf(a)<0&&(n[a]=t[a]);if(null!=t&&u)for(var a of u(t))e.indexOf(a)<0&&s.call(t,a)&&(n[a]=t[a]);return n};const k={title:"DuckDB"},b="DuckDB",N={unversionedId:"db/column/duckdb",id:"db/column/duckdb",title:"DuckDB",description:"- duckdb/duckdb",source:"@site/../notes/db/column/duckdb.md",sourceDirName:"db/column",slug:"/db/column/duckdb",permalink:"/notes/db/column/duckdb",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/column/duckdb.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1700666411,formattedLastUpdatedAt:"Nov 22, 2023",frontMatter:{title:"DuckDB"},sidebar:"docs",previous:{title:"CQL",permalink:"/notes/db/column/cql"},next:{title:"ScyllaDB",permalink:"/notes/db/column/scylladb/"}},E={},f=[{value:"Inspect",id:"inspect",level:2},{value:"extension",id:"extension",level:2},{value:"duckdb vs SQLite3",id:"duckdb-vs-sqlite3",level:2}],g={toc:f},h="wrapper";function _(t){var e=t,{components:n}=e,r=m(e,["components"]);return(0,a.kt)(h,c(p(p({},g),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",p({},{id:"duckdb"}),"DuckDB"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/duckdb/duckdb"}),"duckdb/duckdb"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"MIT, C++"),(0,a.kt)("li",{parentName:"ul"},"\u5d4c\u5165\u5f0f OLAP \u6570\u636e\u5e93"),(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c SQLite - \u4f46\u5217\u5b58\u50a8\uff0c\u9762\u5411\u5206\u6790"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u67e5\u8be2 Parquet, CSV"),(0,a.kt)("li",{parentName:"ul"},"\u5411\u91cf\u5f15\u64ce\uff0c\u5e76\u884c\u67e5\u8be2"),(0,a.kt)("li",{parentName:"ul"},"\u5b98\u65b9\u652f\u6301 SDK: Python, Java, C++, NodeJS, R"),(0,a.kt)("li",{parentName:"ul"},"\u8bed\u6cd5\u7c7b\u4f3c pg - \u4f7f\u7528 libpg_query"))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/duckdb/duckdb-wasm"}),"duckdb/duckdb-wasm"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5728 Web \u5185\u6267\u884c\uff0c\u57fa\u4e8e FS API \u8fdb\u884c IO \u4ea4\u4e92"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://news.ycombinator.com/item?id=32684424"}),"https://news.ycombinator.com/item?id=32684424")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://h2oai.github.io/db-benchmark/"}),"https://h2oai.github.io/db-benchmark/")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/duckdblabs/arrow"}),"duckdblabs/arrow"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Arrow - Python Binding"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/evanwashere/duckdb"}),"evanwashere/duckdb"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"bun binding")))))),(0,a.kt)("admonition",p({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 vacuum ",(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/duckdb/duckdb/issues/109"}),"duckdb#109"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ea\u80fd export \u7136\u540e import \u6765\u51cf\u5c0f\u6587\u4ef6\u4f53\u79ef"))),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u80fd\u66f4\u65b0 unique \u5217 ",(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/duckdb/duckdb/issues/5771"}),"#5771")),(0,a.kt)("li",{parentName:"ul"},"DataGrip Driver ",(0,a.kt)("a",p({parentName:"li"},{href:"https://youtrack.jetbrains.com/issue/DBE-15099/Driver-for-DuckDB"}),"DBE-15099/")))),(0,a.kt)("admonition",p({},{type:"note"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"upsert 0.6.2",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 insert or replace/ignore"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 on conflict"))))),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"# by Homebre\nbrew install duckdb\n# by Download\ncurl -LO https://ghproxy.com/github.com/duckdb/duckdb/releases/download/v0.8.0/duckdb_cli-osx-universal.zip\nunzip duckdb_cli-osx-universal.zip\n./duckdb\n")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-sql"}),"SELECT * FROM 'myfile.csv';\nSELECT * FROM 'myfile.parquet';\n\n-- csv, parquet\nSELECT * FROM 'https://domain.tld/file.extension';\n\n-- S3\nSET s3_region='us-east-1';\nSET s3_endpoint='<domain>.<tld>:<port>';\nSET s3_url_style='path';\nSET s3_access_key_id='<AWS access key id>';\nSET s3_secret_access_key='<AWS secret access key>';\nSET s3_session_token='<AWS session token>';\nSELECT * FROM 's3://bucket/file.extension';\n\nSELECT * FROM parquet_scan('s3://bucket/*.parquet');\nSELECT COUNT(*) FROM parquet_scan('s3://bucket/folder*/100?/t[0-9].parquet');\nSELECT * FROM parquet_scan('s3://bucket/*.parquet', FILENAME = 1);\nSELECT * FROM parquet_scan('s3://bucket/*/file.parquet', HIVE_PARTITIONING = 1);\n\n-- s3_uploader_max_parts_per_file, s3_uploader_max_filesize, s3_uploader_thread_limit\nCOPY table_name TO 's3://bucket/file.extension';\n\n-- SQLite\nCALL sqlite_attach('data.db');\nPRAGMA show_tables;\n\n-- PostgreSQL\n-- connect string\nCALL POSTGRES_ATTACH('');\nSELECT * FROM POSTGRES_SCAN('', 'public', 'mytable');\n\n-- CSV\nSELECT * FROM read_csv_auto('test.csv');\n-- HEADER=TRUE\n-- read_csv_auto -> read_csv(AUTO_DETECT=TRUE)\nSELECT * FROM read_csv_auto('test.csv', SAMPLE_SIZE=20000);\n-- \u5bfc\u5165\nCREATE TABLE ontime AS SELECT * FROM read_csv_auto('test.csv');\n-- \u4e5f\u53ef\u4ee5\u5148\u521b\u5efa\u8868\u518d\u901a\u8fc7 COPY \u5bfc\u5165\nCOPY ontime FROM 'test.csv' ( DELIMITER '|', HEADER, AUTO_DETECT TRUE );\n\n-- PARQUET\nSELECT * FROM parquet_scan('test.parquet');\nSELECT * FROM 'test.parquet';\n-- \u591a\u6587\u4ef6\nSELECT * FROM parquet_scan('test/*.parquet');\n-- \u4e0d\u5bfc\u5165\u4f46\u4e5f\u63d0\u4f9b\u67e5\u8be2\nCREATE VIEW people AS SELECT * FROM parquet_scan('test.parquet');\n-- \u5bfc\u5165\u5e26\u538b\u7f29\nCOPY tbl TO 'result-zstd.parquet' (FORMAT 'PARQUET', CODEC 'ZSTD')\n\n-- \u5bfc\u51fa\u8868 - \u53ef\u4ee5 FORMAT PARQUET\nCOPY lineitem TO 'lineitem.tbl' ( DELIMITER '|', HEADER );\nCOPY lineitem(l_orderkey) TO 'orderkey.tbl' ( DELIMITER '|' );\nCOPY (SELECT 42 AS a, 'hello' AS b) TO 'query.csv' WITH (HEADER 1, DELIMITER ',');\n\n-- \u5bfc\u51fa\u6570\u636e\u5e93\n-- \u5bfc\u51fa\u5230\u76ee\u5f55\nEXPORT DATABASE 'target_directory';\n-- \u5bfc\u51fa CSV\nEXPORT DATABASE 'target_directory' (FORMAT CSV, DELIMITER '|');\n-- \u5bfc\u51fa parquet \u683c\u5f0f\nEXPORT DATABASE 'target_directory' (FORMAT PARQUET);\n-- \u5bfc\u5165\nIMPORT DATABASE 'target_directory'\n")),(0,a.kt)("h2",p({},{id:"inspect"}),"Inspect"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-sql"}),"PRAGMA storage_info('table_name');\n\nSELECT * EXCLUDE (column_path, segment_id, start, stats, persistent, block_id, block_offset, has_updates)\nFROM pragma_storage_info('names') USING SAMPLE 10 ROWS\nORDER BY row_group_id;\n")),(0,a.kt)("h2",p({},{id:"extension"}),"extension"),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-sql"}),"select * from duckdb_extensions();\n\ninstall 'fts';\nload 'fts';\n\n-- \u4e0b\u8f7d http://extensions.duckdb.org/v0.6.1/osx_amd64/httpfs.duckdb_extension.gz\n-- \u672c\u5730 ~/.duckdb/extensions/v0.6.1/osx_amd64/httpfs.duckdb_extension\ninstall 'httpfs';\nload 'httpfs';\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u4ee3\u7406 ",(0,a.kt)("a",p({parentName:"li"},{href:"https://github.com/duckdb/duckdb/issues/3836"}),"https://github.com/duckdb/duckdb/issues/3836"))),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"ver=$(duckdb -version | cut -d ' ' -f 1)\nmkdir -p ~/.duckdb/extensions/$ver/osx_amd64\ncd ~/.duckdb/extensions/$ver/osx_amd64\n\n# https://duckdb.org/docs/extensions/overview\nfor name in httpfs excel fts sqlite_scanner postgres_scanner json parquet jemalloc; do\n  [ -e $name.duckdb_extension ] && continue\n  echo Installing $name\n  curl -LO http://extensions.duckdb.org/$ver/osx_amd64/$name.duckdb_extension.gz\n  gzip -d $name.duckdb_extension.gz\ndone\n")),(0,a.kt)("pre",null,(0,a.kt)("code",p({parentName:"pre"},{className:"language-sql"}),"load 'jemalloc';\nload 'json';\nload 'postgres_scanner';\nload 'sqlite_scanner';\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"sqlite_scanner",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"sqlite_attach('data.sqlite')")," - \u521b\u5efa view - \u53ea\u80fd\u67e5 ",(0,a.kt)("strong",{parentName:"li"},"\u4e0d\u80fd\u5199")),(0,a.kt)("li",{parentName:"ul"},"sqlite_scan - ",(0,a.kt)("inlineCode",{parentName:"li"},"SELECT * FROM sqlite_scan('data.sqlite', 'tab');")," - \u76f4\u63a5\u67e5\u8be2\u5355\u4e2a\u8868"))),(0,a.kt)("li",{parentName:"ul"},"wasm"),(0,a.kt)("li",{parentName:"ul"},"visualizer",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6d4b\u8bd5\u7ed3\u679c -> HTML"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"pragma visualize_last_profiling_output('__TEST_DIR__/test.html')")))),(0,a.kt)("li",{parentName:"ul"},"sqlsmith",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"SQL \u751f\u6210\u5668\uff0c\u7528\u4e8e\u6d4b\u8bd5"))),(0,a.kt)("li",{parentName:"ul"},"tpch"),(0,a.kt)("li",{parentName:"ul"},"tpcds")),(0,a.kt)("h1",p({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",p({},{id:"duckdb-vs-sqlite3"}),"duckdb vs SQLite3"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",p({parentName:"tr"},{align:null}),"-"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"duckdb"),(0,a.kt)("th",p({parentName:"tr"},{align:null}),"SQLite"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Since"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"2018"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"2000-08-17")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u67b6\u6784"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5217\u5b58"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u884c\u5b58")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u573a\u666f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"OLAP"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"OLTP")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u8bed\u8a00"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"C++"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"C")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u591a\u7ebf\u7a0b\u8bbf\u95ee"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u274c"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2705")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u751f\u6001"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2b50\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u6210\u719f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2b50\ufe0f"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2b50\ufe0f\u2b50\ufe0f\u2b50\ufe0f")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u5e76\u53d1"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"MVCC"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"fs lock")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",p({parentName:"tr"},{align:null}),"Native JSON"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u2705"),(0,a.kt)("td",p({parentName:"tr"},{align:null}),"\u274c")))),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",p({parentName:"li"},{href:"https://duckdb.org/why_duckdb.html"}),"https://duckdb.org/why_duckdb.html"))))}_.isMDXComponent=!0}}]);
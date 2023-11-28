"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[41131],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return c}});var l=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);t&&(l=l.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,l)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,l,a=function(e,t){if(null==e)return{};var n,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)n=r[l],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=l.createContext({}),m=function(e){var t=l.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},u=function(e){var t=m(e.components);return l.createElement(s.Provider,{value:t},e.children)},p="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return l.createElement(l.Fragment,{},t)}},d=l.forwardRef((function(e,t){var n=e.components,a=e.mdxType,r=e.originalType,s=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),p=m(n),d=a,c=p["".concat(s,".").concat(d)]||p[d]||g[d]||r;return n?l.createElement(c,o(o({ref:t},u),{},{components:n})):l.createElement(c,o({ref:t},u))}));function c(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var r=n.length,o=new Array(r);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[p]="string"==typeof e?e:a,o[1]=i;for(var m=2;m<r;m++)o[m]=n[m];return l.createElement.apply(null,o)}return l.createElement.apply(null,n)}d.displayName="MDXCreateElement"},82494:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return k},default:function(){return w},frontMatter:function(){return c},metadata:function(){return N},toc:function(){return _}});var l=n(49613),a=Object.defineProperty,r=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,p=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&u(e,n,t[n]);if(i)for(var n of i(t))m.call(t,n)&&u(e,n,t[n]);return e},g=(e,t)=>r(e,o(t)),d=(e,t)=>{var n={};for(var l in e)s.call(e,l)&&t.indexOf(l)<0&&(n[l]=e[l]);if(null!=e&&i)for(var l of i(e))t.indexOf(l)<0&&m.call(e,l)&&(n[l]=e[l]);return n};const c={title:"MySQL \u65e5\u5fd7",tags:["Debug"]},k="MySQL Log",N={unversionedId:"db/relational/mysql/mysql-log",id:"db/relational/mysql/mysql-log",title:"MySQL \u65e5\u5fd7",description:"| conf                          | default               | for                                               |",source:"@site/../notes/db/relational/mysql/mysql-log.md",sourceDirName:"db/relational/mysql",slug:"/db/relational/mysql/log",permalink:"/notes/db/relational/mysql/log",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/relational/mysql/mysql-log.md",tags:[{label:"Debug",permalink:"/notes/tags/debug"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1690351481,formattedLastUpdatedAt:"Jul 26, 2023",frontMatter:{title:"MySQL \u65e5\u5fd7",tags:["Debug"]},sidebar:"docs",previous:{title:"InnoDB",permalink:"/notes/db/relational/mysql/innodb"},next:{title:"MySQL Version",permalink:"/notes/db/relational/mysql/version"}},y={},_=[{value:"general log",id:"general-log",level:2},{value:"slow log",id:"slow-log",level:2},{value:"maintain",id:"maintain",level:2}],b={toc:_},f="wrapper";function w(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,l.kt)(f,g(p(p({},b),a),{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h1",p({},{id:"mysql-log"}),"MySQL Log"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",p({parentName:"tr"},{align:null}),"conf"),(0,l.kt)("th",p({parentName:"tr"},{align:null}),"default"),(0,l.kt)("th",p({parentName:"tr"},{align:null}),"for"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"log_output"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"FILE"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"TABLE,FILE,NONE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"slow_query_log"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"OFF"),(0,l.kt)("td",p({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"slow_query_log_file"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"<HOSTNAME>-slow.log")),(0,l.kt)("td",p({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"general_log"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"OFF"),(0,l.kt)("td",p({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"general_log_file"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),(0,l.kt)("inlineCode",{parentName:"td"},"<HOSTNAME>.log")),(0,l.kt)("td",p({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"sql_log_off"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"OFF"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"\u63a7\u5236\u5f53\u524d\u4f1a\u8bdd\u7684 general log")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"long_query_time"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"10"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"\u6162\u67e5\u8be2 \u9600\u503c")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"log_slow_admin_statements"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"OFF"),(0,l.kt)("td",p({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"log_queries_not_using_indexes"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"OFF"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"e.g ",(0,l.kt)("inlineCode",{parentName:"td"},"[ALTER,ANALYZE,CHECK,OPTIMIZE,REPAIR] TABLE"))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"log_slow_extra"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"OFF"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"\u5728 FILE \u8f93\u51fa\u4e2d\u5305\u542b\u989d\u5916\u4fe1\u606f")))),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-sql"}),"select *\nfrom performance_schema.global_variables\nwhere VARIABLE_NAME in (\n                        'log_output', 'slow_query_log', 'long_query_time', 'slow_query_log_file',\n                        'log_queries_not_using_indexes', 'log_throttle_queries_not_using_indexes',\n                        'general_log', 'general_log_file'\n    )\norder by VARIABLE_NAME;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"mysql.slow_log")," \u8868",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"\u5b9e\u9645\u5bf9\u5e94 csv - \u67e5\u8be2\u5f88\u6162 - CSV storage engine"))),(0,l.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",p({parentName:"li"},{href:"https://dev.mysql.com/doc/refman/8.0/en/log-destinations.html"}),"https://dev.mysql.com/doc/refman/8.0/en/log-destinations.html"))))),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-sql"}),"show variables like 'log_queries_not_using_indexes';\n\n\nset global log_queries_not_using_indexes = 'ON'\n\n--\nset global general_log = 'ON';\nselect * from mysql.general_log\norder by event_time desc;\n")),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"head /var/lib/mysql/mysql/slow_log.CSV\nwc -l /var/lib/mysql/mysql/slow_log.CSV\n\napk add mariadb-client\nmysqldumpslow -t 10 slow.log\n\n# percona-toolkit\ncurl -LO http://www.percona.com/get/pt-query-digest\nchmod +x pt-query-digest\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",p({parentName:"li"},{href:"https://docs.percona.com/percona-toolkit/pt-query-digest.html"}),"https://docs.percona.com/percona-toolkit/pt-query-digest.html"),(0,l.kt)("ul",{parentName:"li"},(0,l.kt)("li",{parentName:"ul"},"Analyze MySQL queries from logs, processlist, and tcpdump")))),(0,l.kt)("h2",p({},{id:"general-log"}),"general log"),(0,l.kt)("h2",p({},{id:"slow-log"}),"slow log"),(0,l.kt)("table",null,(0,l.kt)("thead",{parentName:"table"},(0,l.kt)("tr",{parentName:"thead"},(0,l.kt)("th",p({parentName:"tr"},{align:null}),"var"),(0,l.kt)("th",p({parentName:"tr"},{align:null}),"for"))),(0,l.kt)("tbody",{parentName:"table"},(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"log_slow_admin_statements"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"OFF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"log_slow_extra"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"OFF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"log_slow_replica_statements"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"OFF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"log_slow_slave_statements"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"OFF")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"slow_launch_time"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"2")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"slow_query_log"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"ON")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"slow_query_log_file"),(0,l.kt)("td",p({parentName:"tr"},{align:null}))),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"long_query_time"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"10")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"log_output"),(0,l.kt)("td",p({parentName:"tr"},{align:null}),"FILE")),(0,l.kt)("tr",{parentName:"tbody"},(0,l.kt)("td",p({parentName:"tr"},{align:null}),"log_queries_not_using_indexes"),(0,l.kt)("td",p({parentName:"tr"},{align:null}))))),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-sql"}),"show variables like '%slow%';\nshow variables like 'long_query_time';-- \u9ed8\u8ba4 10s\nshow variables like 'log_output';-- \u9ed8\u8ba4 FILE\nshow variables like 'log_queries_not_using_indexes';\nshow variables like 'slow_query_log_file';\n\n-- slow_query_log_file \u63a7\u5236\u6587\u4ef6\u8def\u5f84\nset global log_output = 'FILE,TABLE';\nset global slow_query_log='ON';\nset global log_queries_not_using_indexes = 'ON';\n\nset global long_query_time=3;\nset session long_query_time=3;\n\n-- \u6d4b\u8bd5\nselect sleep(5);\nselect * from mysql.slow_log limit 2;\n\n\n-- \u6392\u67e5\u5176\u4ed6\nshow processlist;\nshow engine innodb status;\n\nflush logs;\nflush slow logs;\ntruncate mysql.slow_log;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",p({parentName:"li"},{href:"https://mariadb.com/kb/en/mariadb/writing-logs-into-tables/"}),"Write logs into tables")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",p({parentName:"li"},{href:"https://mariadb.com/kb/en/mariadb/mysqlslow_log-table/"}),"TABLE mysql.slow_log")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",p({parentName:"li"},{href:"https://mariadb.com/kb/en/mariadb/slow-query-log-overview/"}),"Slow Query Log Overview")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",p({parentName:"li"},{href:"http://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_slow_query_log_file"}),"http://dev.mysql.com/doc/refman/5.7/en/server-system-variables.html#sysvar_slow_query_log_file")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("a",p({parentName:"li"},{href:"http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html"}),"http://dev.mysql.com/doc/refman/5.7/en/slow-query-log.html"))),(0,l.kt)("h2",p({},{id:"maintain"}),"maintain"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"binlog_expire_logs_seconds \u9ed8\u8ba4 30 \u5929"),(0,l.kt)("li",{parentName:"ul"},"binlog_expire_logs_auto_purge=ON")),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-txt"}),"PURGE { BINARY | MASTER } LOGS {\n    TO 'log_name'\n  | BEFORE datetime_expr\n}\n")),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-sql"}),"FLUSH LOGS ;\nFLUSH BINARY LOGS;\n\nSHOW BINARY LOGS;\nSHOW MASTER LOGS;\nPURGE BINARY LOGS BEFORE now();\n")),(0,l.kt)("pre",null,(0,l.kt)("code",p({parentName:"pre"},{className:"language-bash"}),"mysqladmin flush-logs\n")))}w.isMDXComponent=!0}}]);
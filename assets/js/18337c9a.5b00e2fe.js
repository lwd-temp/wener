"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54102],{49613:function(e,t,r){r.d(t,{Zo:function(){return c},kt:function(){return b}});var a=r(59496);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function s(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?s(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function o(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},s=Object.keys(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)r=s[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var p=a.createContext({}),i=function(e){var t=a.useContext(p),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},c=function(e){var t=i(e.components);return a.createElement(p.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,s=e.originalType,p=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),m=i(r),d=n,b=m["".concat(p,".").concat(d)]||m[d]||u[d]||s;return r?a.createElement(b,l(l({ref:t},c),{},{components:r})):a.createElement(b,l({ref:t},c))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var s=r.length,l=new Array(s);l[0]=d;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[m]="string"==typeof e?e:n,l[1]=o;for(var i=2;i<s;i++)l[i]=r[i];return a.createElement.apply(null,l)}return a.createElement.apply(null,r)}d.displayName="MDXCreateElement"},18682:function(e,t,r){r.r(t),r.d(t,{assets:function(){return k},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return b},metadata:function(){return h},toc:function(){return g}});var a=r(49613),n=Object.defineProperty,s=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,i=Object.prototype.propertyIsEnumerable,c=(e,t,r)=>t in e?n(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,m=(e,t)=>{for(var r in t||(t={}))p.call(t,r)&&c(e,r,t[r]);if(o)for(var r of o(t))i.call(t,r)&&c(e,r,t[r]);return e},u=(e,t)=>s(e,l(t)),d=(e,t)=>{var r={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(r[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&i.call(e,a)&&(r[a]=e[a]);return r};const b={title:"DSN"},f="Connect String / DSN",h={unversionedId:"db/db-dsn",id:"db/db-dsn",title:"DSN",description:"PostgreSQL",source:"@site/../notes/db/db-dsn.md",sourceDirName:"db",slug:"/db/dsn",permalink:"/notes/db/dsn",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/db/db-dsn.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1684216634,formattedLastUpdatedAt:"May 16, 2023",frontMatter:{title:"DSN"},sidebar:"docs",previous:{title:"Database Awesome",permalink:"/notes/db/awesome"},next:{title:"Database FAQ",permalink:"/notes/db/faq"}},k={},g=[{value:"PostgreSQL",id:"postgresql",level:2},{value:"SQLite",id:"sqlite",level:2},{value:"JDBC",id:"jdbc",level:2}],w={toc:g},y="wrapper";function N(e){var t=e,{components:r}=t,n=d(t,["components"]);return(0,a.kt)(y,u(m(m({},w),n),{components:r,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"connect-string--dsn"}),"Connect String / DSN"),(0,a.kt)("h2",m({},{id:"postgresql"}),"PostgreSQL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://www.postgresql.org/docs/current/libpq-connect.html#LIBPQ-CONNSTRING"}),"libpq connect")),(0,a.kt)("li",{parentName:"ul"},"host, hostaddr, port, dbname, user, password, passfile"),(0,a.kt)("li",{parentName:"ul"},"channel_binding, connect_timeout, client_encoding"),(0,a.kt)("li",{parentName:"ul"},"options"),(0,a.kt)("li",{parentName:"ul"},"application_name, fallback_application_name"),(0,a.kt)("li",{parentName:"ul"},"keepalives, keepalives_idle, keepalives_interval, keepalives_count"),(0,a.kt)("li",{parentName:"ul"},"tcp_user_timeout, tty"),(0,a.kt)("li",{parentName:"ul"},"replication"),(0,a.kt)("li",{parentName:"ul"},"gssencmode, krbsrvname, gsslib"),(0,a.kt)("li",{parentName:"ul"},"sslmode - prefer,disable,allow,require,verify-ca,verify-full"),(0,a.kt)("li",{parentName:"ul"},"requiressl, sslcompression, sslcert, sslkey, sslpassword, sslrootcert, sslcrl"),(0,a.kt)("li",{parentName:"ul"},"ssl_min_protocol_version, ssl_max_protocol_version"),(0,a.kt)("li",{parentName:"ul"},"requirepeer"),(0,a.kt)("li",{parentName:"ul"},"service"),(0,a.kt)("li",{parentName:"ul"},"target_session_attrs")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-ini"}),"# postgres\nhost=localhost port=5432 dbname=mydb connect_timeout=10\n# postgresql://[user[:password]@][host][:port][,...][/dbname][?param1=value1&...]\npostgresql://\npostgres://\n\npostgresql://other@localhost/otherdb?connect_timeout=10&application_name=myapp\npostgresql://host1:123,host2:456/somedb?target_session_attrs=any&application_name=myapp\n\npostgresql:///dbname?host=/var/lib/postgresql\n\n# golang \u652f\u6301 search path\n# https://github.com/jackc/pgx\npostgresql://example.com/mydatabase?search_path=myschema\nhost=192.168.1.1 database=apps user=apps password=apps search_path=apps,public\n")),(0,a.kt)("p",null,"\u4e0d\u652f\u6301\u8bbe\u7f6e schema\uff0c\u53ef\u670d\u52a1\u7aef\u63a7\u5236"),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-sql"}),"-- \u9488\u5bf9\u7528\u6237\u4fee\u6539\nALTER ROLE username SET search_path TO a,b,c;\n-- \u9488\u5bf9 db \u4fee\u6539\nALTER DATABASE database_name SET search_path TO schema1,schema2;\n-- \u5168\u90e8\u53ea\u5141\u8bb8\u8bbf\u95ee\u81ea\u5df1 schema\nALTER ROLE ALL SET search_path = \"$user\";\n\nSELECT pg_catalog.set_config('search_path', '', false);\n")),(0,a.kt)("h2",m({},{id:"sqlite"}),"SQLite"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"cache",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"shared"),(0,a.kt)("li",{parentName:"ul"},"private"))),(0,a.kt)("li",{parentName:"ul"},"mode=ro|rw|rwc|memory"),(0,a.kt)("li",{parentName:"ul"},"immutable=1"),(0,a.kt)("li",{parentName:"ul"},"modeof=",(0,a.kt)("em",{parentName:"li"},"filename")," - \u751f\u6210\u7684 db \u5339\u914d\u6307\u5b9a\u6587\u4ef6\u7684 mode"),(0,a.kt)("li",{parentName:"ul"},"DSN",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},":memory:")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"file::memory:")))),(0,a.kt)("li",{parentName:"ul"},"PHP PDO",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://www.php.net/manual/en/ref.pdo-sqlite.connection.php"}),"https://www.php.net/manual/en/ref.pdo-sqlite.connection.php"))))),(0,a.kt)("hr",null),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://www.sqlite.org/uri.html"}),"https://www.sqlite.org/uri.html")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://www.sqlite.org/c3ref/open.html"}),"https://www.sqlite.org/c3ref/open.html"))),(0,a.kt)("h2",m({},{id:"jdbc"}),"JDBC"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"org.postgresql.Driver"),(0,a.kt)("li",{parentName:"ul"},"org.sqlite.JDBC"),(0,a.kt)("li",{parentName:"ul"},"org.mariadb.jdbc.JDBC"),(0,a.kt)("li",{parentName:"ul"},"com.mysql.jdbc.Driver - MySQL 5.1"),(0,a.kt)("li",{parentName:"ul"},"com.mysql.cj.jdbc.Driver"),(0,a.kt)("li",{parentName:"ul"},"org.h2.Driver")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-pre",metastring:'title="DataGrid URL Template"',title:'"DataGrid',URL:!0,'Template"':!0}),"jdbc:postgresql://[{host::localhost}[:{port::5432}]][/{database:database/[^?]+:postgres}?][\\?<&,user={user:param},password={password:param},{:identifier}={:param}>]\njdbc:postgresql://\\[{host:ipv6:\\:\\:1}\\][:{port::5432}][/{database:database/[^?]+:postgres}?][\\?<&,user={user:param},password={password:param},{:identifier}={:param}>]\njdbc:postgresql:{database:database/(?!//)[^?]+:postgres}[\\?<&,user={user:param},password={password:param},{:identifier}={:param}>]\n\njdbc:sqlite:!(:memory:){file::identifier.sqlite}?\njdbc:sqlite::memory:\n\njdbc:mysql://{host::localhost}?[:{port::3306}][/{database}?][\\?<&,user={user},password={password},{:identifier}={:param}>]\njdbc:mysql://address=\\(protocol=tcp\\)\\(<\\)\\(,host={host:host_ipv6:localhost},port={port::3306},user={user},password={password},{:identifier}={:param}>\\)[/{database}][\\?<&,{:identifier}={:param}>]\njdbc:mysql:///{database}?[\\?<&,user={user},password={password},junixsocket.file={mysql.socket::/tmp/mysqld.sock},socketFactory={socketFactory:#param:org.newsclub.net.mysql.AFUNIXDatabaseSocketFactoryCJ},{:identifier}={:param}>]\n\njdbc:h2:tcp://{host::localhost}[:{port::9092}]/{database::default}[;<;,user={user:param},password={password:param},{:identifier}={:param}>]\njdbc:h2:mem:{database::default}?[;<;,{:identifier}={:param}>]\njdbc:h2:!(mem:)!(tcp://)[file:]{path:h2_db_file}[;<;,user={user:param},password={password:param},MV_STORE={MV_STORE:#param},{:identifier}={:param}>]\n")))}N.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[6955],{49613:function(e,t,n){n.d(t,{Zo:function(){return m},kt:function(){return N}});var a=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var p=a.createContext({}),o=function(e){var t=a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},m=function(e){var t=o(e.components);return a.createElement(p.Provider,{value:t},e.children)},s="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,p=e.parentName,m=u(e,["components","mdxType","originalType","parentName"]),s=o(n),k=l,N=s["".concat(p,".").concat(k)]||s[k]||c[k]||r;return n?a.createElement(N,i(i({ref:t},m),{},{components:n})):a.createElement(N,i({ref:t},m))}));function N(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,i=new Array(r);i[0]=k;var u={};for(var p in t)hasOwnProperty.call(t,p)&&(u[p]=t[p]);u.originalType=e,u[s]="string"==typeof e?e:l,i[1]=u;for(var o=2;o<r;o++)i[o]=n[o];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},86311:function(e,t,n){n.r(t),n.d(t,{assets:function(){return f},contentTitle:function(){return g},default:function(){return v},frontMatter:function(){return N},metadata:function(){return d},toc:function(){return h}});var a=n(49613),l=Object.defineProperty,r=Object.defineProperties,i=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,m=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&m(e,n,t[n]);if(u)for(var n of u(t))o.call(t,n)&&m(e,n,t[n]);return e},c=(e,t)=>r(e,i(t)),k=(e,t)=>{var n={};for(var a in e)p.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&u)for(var a of u(e))t.indexOf(a)<0&&o.call(e,a)&&(n[a]=e[a]);return n};const N={title:"entgo"},g="entgo",d={unversionedId:"languages/go/lib/ent",id:"languages/go/lib/ent",title:"entgo",description:"- ent/ent \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/languages/go/lib/ent.md",sourceDirName:"languages/go/lib",slug:"/languages/go/lib/ent",permalink:"/notes/languages/go/lib/ent",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/go/lib/ent.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1656388638,formattedLastUpdatedAt:"Jun 28, 2022",frontMatter:{title:"entgo"},sidebar:"docs",previous:{title:"colly",permalink:"/notes/languages/go/lib/colly"},next:{title:"fx",permalink:"/notes/languages/go/lib/fx"}},f={},h=[{value:"Note",id:"note",level:2},{value:"entql",id:"entql",level:3},{value:"\u6267\u884c\u4efb\u610f SQL",id:"\u6267\u884c\u4efb\u610f-sql",level:2},{value:"ent v0.10",id:"ent-v010",level:2},{value:"ent v0.9",id:"ent-v09",level:2},{value:"ent v0.8",id:"ent-v08",level:2}],b={toc:h},y="wrapper";function v(e){var t=e,{components:n}=t,l=k(t,["components"]);return(0,a.kt)(y,c(s(s({},b),l),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",s({},{id:"entgo"}),"entgo"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/ent/ent"}),"ent/ent")," \u662f\u4ec0\u4e48\uff1f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u9879\u76ee\u6e90\u81ea facebook, \u52a0\u5165 LF"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 RESTful \u63a5\u53e3"),(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e\u4ee3\u7801\u751f\u6210\u7684 ORM",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 MySQL, MariaDB, PostgreSQL, SQLite, Gremlin"))),(0,a.kt)("li",{parentName:"ul"},"\u521b\u5efa\u548c\u66f4\u65b0\u4f7f\u7528 setter/getter"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u751f\u6210 gqlgen \u96c6\u6210\u4ee3\u7801"),(0,a.kt)("li",{parentName:"ul"},"\u7279\u70b9",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u57fa\u4e8e struct \u5b9a\u4e49\u6a21\u578b\uff0c\u76f4\u63a5\u5b9a\u4e49 Fields, Indexes, Edges"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u5b9a\u4e49\u6821\u9a8c"),(0,a.kt)("li",{parentName:"ul"},"\u80fd mixin \u516c\u5171\u6a21\u578b"),(0,a.kt)("li",{parentName:"ul"},"\u6dfb\u52a0 annotation \u81ea\u5b9a\u4e49\u4fe1\u606f"))))),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u7684\u7c7b\u578b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6240\u6709 golang \u6570\u5b57\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"bool"),(0,a.kt)("li",{parentName:"ul"},"string"),(0,a.kt)("li",{parentName:"ul"},"time.Time"),(0,a.kt)("li",{parentName:"ul"},"[]byte"),(0,a.kt)("li",{parentName:"ul"},"JSON"),(0,a.kt)("li",{parentName:"ul"},"Enum"),(0,a.kt)("li",{parentName:"ul"},"UUID"),(0,a.kt)("li",{parentName:"ul"},"Other - \u81ea\u5b9a\u4e49 DB \u7c7b\u578b\u548c Go \u7c7b\u578b"))),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u5168\u5c40\u552f\u4e00 ID - int \u7c7b\u578b",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"migrate.WithGlobalUniqueID"),(0,a.kt)("li",{parentName:"ul"},"ID \u524d\u9762\u90e8\u5206\u4e3a Table \u7d22\u5f15"),(0,a.kt)("li",{parentName:"ul"},"ent_types \u8868\u7ef4\u62a4 \u8868\u540d->\u7d22\u5f15 \u5173\u7cfb"),(0,a.kt)("li",{parentName:"ul"},"\u56e0\u6b64\u4e00\u4e2a ID \u80fd\u83b7\u53d6\u5230\u7c7b\u578b\u4fe1\u606f"),(0,a.kt)("li",{parentName:"ul"},"graphql Node ID \u9700\u8981\u8be5\u80fd\u529b"),(0,a.kt)("li",{parentName:"ul"},"github gql \u4f7f\u7528 String ID - \u683c\u5f0f\u4e3a base64 ",(0,a.kt)("inlineCode",{parentName:"li"},"04:User583231")))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/ent/contrib"}),"ent/contribs"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"entoas,entgql,entgrpc"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/ogen-go/ogen"}),"ogen-go/ogen"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u751f\u6210 OpenAPIv3"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/ent/ent/issues/452#issuecomment-619430120"}),"Neptune / Gremlin - experience compared to SQL backends"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ent \u65e9\u671f\u540e\u7aef\u4e3a Gremlin"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/ariga/atlas"}),"ariga/atlas"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"DSL schema \u7ba1\u7406"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/ariga/entcache"}),"ariga/entcache"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"ent \u7f13\u5b58\u5c42"))),(0,a.kt)("li",{parentName:"ul"},"\u6838\u5fc3\u6210\u5458\u6210\u7acb\u7684\u516c\u53f8 ",(0,a.kt)("a",s({parentName:"li"},{href:"https://ariga.io/"}),"https://ariga.io/")," operational data graph")))),(0,a.kt)("admonition",s({},{type:"tip"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u5185\u5efa id \u5b57\u6bb5 - \u53ef\u8986\u76d6"),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 \u67e5\u8be2 Hook - ",(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/ent/ent/issues/833"}),"ent/ent#833"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 ",(0,a.kt)("a",s({parentName:"li"},{href:"https://entgo.io/docs/privacy/#multi-tenancy"}),"privacy")," \u5b9e\u73b0\u7c7b\u578b\u529f\u80fd"))),(0,a.kt)("li",{parentName:"ul"},"gRPC \u6269\u5c55\u652f\u6301\u60c5\u51b5 ",(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/ent/ent/issues/2446"}),"#2446")))),(0,a.kt)("admonition",s({},{type:"caution"}),(0,a.kt)("ul",{parentName:"admonition"},(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301 \u8f6f\u5220\u9664 - ",(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/ent/ent/issues/252"}),"ent/ent#252")),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u7ea7\u8054\u5220\u9664 - ",(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/ent/ent/issues/407"}),"ent/ent#407")),(0,a.kt)("li",{parentName:"ul"},"\u4e0d\u652f\u6301\u591a\u6001 - ",(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/ent/ent/issues/1048"}),"#1048")),(0,a.kt)("li",{parentName:"ul"},"entql \u5d4c\u5957\u5206\u9875 N+1 \u95ee\u9898 - ",(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/ent/ent/issues/1180"}),"#1180")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},"\u76ee\u524d GoType \u8981\u6c42\u4e3a struct \u6216\u53ef\u6620\u5c04\u7c7b\u578b")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},"\u5173\u8054\u5173\u7cfb\u4e0d\u652f\u6301\u81ea\u5b9a\u4e49\u5c5e\u6027")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("del",{parentName:"li"},"\u4e0d\u652f\u6301 upsert - ",(0,a.kt)("a",s({parentName:"del"},{href:"https://github.com/ent/ent/issues/139"}),"ent/ent#139"))))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"go get entgo.io/ent/cmd/ent\n\ngo mod init <project>\nent init User\ngo generate ./ent\n\n# edge\ngo run entgo.io/ent/cmd/ent init Car Group\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"feature",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"privacy"),(0,a.kt)("li",{parentName:"ul"},"entql - EntQL DSL \u62bd\u8c61\u652f\u6301\u5e95\u5c42\u591a\u79cd\u65b9\u8a00"),(0,a.kt)("li",{parentName:"ul"},"schema/snapshot",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u7f13\u5b58\u4e4b\u524d schema \u89e3\u51b3\u5408\u5e76\u51b2\u7a81 ",(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/ent/ent/issues/852"}),"#852")))),(0,a.kt)("li",{parentName:"ul"},"sql/schemaconfig - \u9488\u5bf9 table \u6307\u5b9a schema"),(0,a.kt)("li",{parentName:"ul"},"sql/lock - \u751f\u6210 ForUpdate/ForShare"),(0,a.kt)("li",{parentName:"ul"},"sql/modifier - \u751f\u6210 Modify \u8c03\u6574\u8bed\u53e5"),(0,a.kt)("li",{parentName:"ul"},"sql/versioned-migration",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Schema \u589e\u52a0 Diff \u548c NamedDiff"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},'client.Schema.NamedDiff(ctx, "migration_name", schema.WithDir(dir))'),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u751f\u6210\u8fc1\u79fb\u5230\u6587\u4ef6"))),(0,a.kt)("li",{parentName:"ul"},"\u4e0e\u73b0\u6709 schema \u8fdb\u884c diff"))),(0,a.kt)("li",{parentName:"ul"},"sql/execquery",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u751f\u6210 ExecContext, QueryContext"))),(0,a.kt)("li",{parentName:"ul"},"sql/upsert - \u751f\u6210 OnConflict")))),(0,a.kt)("h2",s({},{id:"note"}),"Note"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Validator \u4e0d\u80fd\u83b7\u53d6\u5230\u4e0a\u4e0b\u6587\uff0c\u4f1a cast \u6210\u5b9e\u9645\u7c7b\u578b"),(0,a.kt)("li",{parentName:"ul"},"Save \u987a\u5e8f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u8bbe\u7f6e\u9ed8\u8ba4\u503c"),(0,a.kt)("li",{parentName:"ul"},"\u6ca1\u6709 hooks",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u6821\u9a8c\u5b57\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"\u4fdd\u5b58"))),(0,a.kt)("li",{parentName:"ul"},"\u6709 hooks",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u751f\u6210 Mutator - \u6821\u9a8c\u3001\u4fdd\u5b58"),(0,a.kt)("li",{parentName:"ul"},"\u6267\u884c hook"))))),(0,a.kt)("li",{parentName:"ul"},"ent.Policy - \u8bbf\u95ee\u7b56\u7565\u63a7\u5236",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7\u62e6\u622a\u63a7\u5236\u67e5\u8be2\u548c\u4fee\u6539 - \u6ca1\u6709 Action \u6982\u5ff5\uff0c\u53ea\u6709 Query \u548c Mutation"),(0,a.kt)("li",{parentName:"ul"},"\u4e09\u79cd\u51b3\u7b56\u7ed3\u679c",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"privacy.Allow"),(0,a.kt)("li",{parentName:"ul"},"privacy.Deny"),(0,a.kt)("li",{parentName:"ul"},"privacy.Skip")))))),(0,a.kt)("h3",s({},{id:"entql"}),"entql"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u52a8\u6001 sql \u751f\u6210"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u51fd\u6570")),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",s({parentName:"tr"},{align:null}),"func"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"how"),(0,a.kt)("th",s({parentName:"tr"},{align:null}),"note"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"equal_fold"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},"LOWER(col) = ${strings.ToLower(sub)}")),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"contains"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'col like ${"%"+sub+"%"}')),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"contains_fold"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'col ilike ${"%"+sub+"%"}')),(0,a.kt)("td",s({parentName:"tr"},{align:null}),"pg ilike, mysql ",(0,a.kt)("inlineCode",{parentName:"td"},"COLLATE utf8mb4_general_ci LIKE"))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"has_prefix"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'col like ${prefix+"%"}')),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"has_suffix"),(0,a.kt)("td",s({parentName:"tr"},{align:null}),(0,a.kt)("inlineCode",{parentName:"td"},'col like ${"%"+suffix}')),(0,a.kt)("td",s({parentName:"tr"},{align:null}))),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",s({parentName:"tr"},{align:null}),"has_edge(edge,expr...)"),(0,a.kt)("td",s({parentName:"tr"},{align:null})),(0,a.kt)("td",s({parentName:"tr"},{align:null}))))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-sql"}),'select * from account where has_edge(owningUser)\n--\nselect * from account where owning_user_id IS NOT NULL\n\nselect * from account where has_edge(owningUser,username = "wener")\n-- args [wener]\nSELECT * FROM "accounts" WHERE "accounts"."owning_user_id" IS NOT NULL AND "accounts"."owning_user_id" IN (SELECT "users"."id" FROM "users" WHERE "username" = $1)\n\nselect * from account where has_edge(owningUser,has_edge(department,name = "Test"))\n-- args [Test]\nSELECT * FROM "accounts" WHERE "accounts"."owning_user_id" IN (SELECT "users"."id" FROM "users" WHERE "users"."department_id" IN (SELECT "departments"."id" FROM "departments" WHERE "name" = $1))\n')),(0,a.kt)("h1",s({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",s({},{id:"\u6267\u884c\u4efb\u610f-sql"}),"\u6267\u884c\u4efb\u610f SQL"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u751f\u6210\u65f6\u6dfb\u52a0 sql/execquery \u7279\u6027")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-go"}),"// \u66b4\u9732\u5e95\u5c42 DB\nfunc (c *Client) DB() *sql.DB {\n    if c.debug {\n            return c.driver.(*dialect.DebugDriver).Driver.(*entsql.Driver).DB()\n    }\n    return c.driver.(*entsql.Driver).DB()\n}\n")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/ent/ent/issues/85#issuecomment-542194059"}),"https://github.com/ent/ent/issues/85#issuecomment-542194059"))),(0,a.kt)("h1",s({},{id:"version"}),"Version"),(0,a.kt)("h2",s({},{id:"ent-v010"}),"ent v0.10"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/ariga/atlas"}),"ariga/atlas")," \u7ee7\u627f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e HCL \u7684 DDL Schema \u5b9a\u4e49/\u8fc1\u79fb")))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-go"}),'package main\nimport (\n    "context"\n    "log"\n    "<project>/ent"\n    "<project>/ent/migrate"\n    "entgo.io/ent/dialect/sql/schema"\n)\nfunc main() {\n    client, err := ent.Open("mysql", "root:pass@tcp(localhost:3306)/test")\n    if err != nil {\n        log.Fatalf("failed connecting to mysql: %v", err)\n    }\n    defer client.Close()\n    ctx := context.Background()\n    // \u4f7f\u7528 Atlas \u6267\u884c\u8fc1\u79fb\n    err = client.Schema.Create(ctx, schema.WithAtlas(true))\n    if err != nil {\n        log.Fatalf("failed creating schema resources: %v", err)\n    }\n}\n')),(0,a.kt)("h2",s({},{id:"ent-v09"}),"ent v0.9"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Upsert/UpsertBulk"),(0,a.kt)("li",{parentName:"ul"},"Row-level locking"),(0,a.kt)("li",{parentName:"ul"},"\u65b0\u7684 entc.Extension API"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301 SQL Query \u4fee\u9970\u7b26")),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-go"}),'id, err := client.User.\n    Create().\n    SetAge(30).\n    SetName("Ariel").\n    // upsert\n    OnConflict().\n    SetName("Mashraki").\n    ID(ctx)\n\n// UpsertBulk\nerr := client.User.\n    CreateBulk(builders...).\n    OnConflict().\n    UpdateNewValues().\n    Exec(ctx)\n\ntx.User.Query().\n    Where(user.Name(name)).\n    // RLL\n    ForUpdate().\n    Only(ctx)\n\nclient.Pet.\n    Query().\n    //  SQL Modifier\n    Modify(func(s *sql.Selector) {\n        s.Select("SUM(LENGTH(name))")\n    }).\n    IntX(ctx)\n')),(0,a.kt)("h2",s({},{id:"ent-v08"}),"ent v0.8"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"entc/gen",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://entgo.io/docs/templates/#global-annotations"}),"\u5168\u5c40 Annotation"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f1a\u6dfb\u52a0\u5230 gen.Config"),(0,a.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u914d\u7f6e entc"))))),(0,a.kt)("li",{parentName:"ul"},"entc/schema",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u751f\u6210\u4ee3\u7801\u4f7f\u7528\u5b9e\u9645 GoType - ",(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/ent/ent/pull/1428"}),"#1428"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4e4b\u524d\u4f8b\u5982 ID \u7c7b\u578b\uff0c\u4f1a\u751f\u6210\u5bf9\u5e94\u7684 SQL \u7c7b\u578b - \u4f8b\u5982 ",(0,a.kt)("inlineCode",{parentName:"li"},"sql.NullString")))),(0,a.kt)("li",{parentName:"ul"},"UpdateOne \u652f\u6301 Select \u5b57\u6bb5"),(0,a.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u67e5\u8be2\u5173\u95ed DISTINCT - \u9ed8\u8ba4\u5f00\u542f"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",s({parentName:"li"},{href:"https://github.com/ent/ent/releases/tag/v0.8.0"}),"v0.8.0"))),(0,a.kt)("pre",null,(0,a.kt)("code",s({parentName:"pre"},{className:"language-go"}),'type Annotation struct {\n    Config *config.Config\n}\n\nfunc (Annotation) Name() string {\n    return "GQL"\n}\n\n// \u5168\u5c40\nvar _ schema.Annotation = (*Annotation)(nil)\n')))}v.isMDXComponent=!0}}]);
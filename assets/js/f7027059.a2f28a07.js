"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[38545],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var a=n(59496);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function u(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var i=a.createContext({}),s=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):u(u({},t),e)),n},p=function(e){var t=s(e.components);return a.createElement(i.Provider,{value:t},e.children)},c="mdxType",v={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,r=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=s(n),d=l,m=c["".concat(i,".").concat(d)]||c[d]||v[d]||r;return n?a.createElement(m,u(u({ref:t},p),{},{components:n})):a.createElement(m,u({ref:t},p))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=n.length,u=new Array(r);u[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[c]="string"==typeof e?e:l,u[1]=o;for(var s=2;s<r;s++)u[s]=n[s];return a.createElement.apply(null,u)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},27025:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return k},default:function(){return O},frontMatter:function(){return m},metadata:function(){return f},toc:function(){return N}});var a=n(49613),l=Object.defineProperty,r=Object.defineProperties,u=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))s.call(t,n)&&p(e,n,t[n]);return e},v=(e,t)=>r(e,u(t)),d=(e,t)=>{var n={};for(var a in e)i.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&o)for(var a of o(e))t.indexOf(a)<0&&s.call(e,a)&&(n[a]=e[a]);return n};const m={title:"Vault"},k="Hashicorp Vault",f={unversionedId:"service/security/vault/README",id:"service/security/vault/README",title:"Vault",description:"- hashicorp/vault \u662f\u4ec0\u4e48\uff1f",source:"@site/../notes/service/security/vault/README.md",sourceDirName:"service/security/vault",slug:"/service/security/vault/",permalink:"/notes/service/security/vault/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/security/vault/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1693463269,formattedLastUpdatedAt:"Aug 31, 2023",frontMatter:{title:"Vault"},sidebar:"docs",previous:{title:"infisical",permalink:"/notes/service/security/infisical"},next:{title:"Vault on Kubernetes",permalink:"/notes/service/security/vault/k8s"}},g={},N=[{value:"\u57fa\u7840\u64cd\u4f5c",id:"\u57fa\u7840\u64cd\u4f5c",level:2},{value:"approle",id:"approle",level:2},{value:"vault agent",id:"vault-agent",level:2},{value:"Consul Secret",id:"consul-secret",level:2},{value:"PostgreSQL \u5b58\u50a8",id:"postgresql-\u5b58\u50a8",level:2},{value:"\u5bc6\u7801\u751f\u6210",id:"\u5bc6\u7801\u751f\u6210",level:2},{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"Consul vs Vault",id:"consul-vs-vault",level:2}],h={toc:N},_="wrapper";function O(e){var t=e,{components:n}=t,l=d(t,["components"]);return(0,a.kt)(_,v(c(c({},h),l),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",c({},{id:"hashicorp-vault"}),"Hashicorp Vault"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://github.com/hashicorp/vault"}),"hashicorp/vault")," \u662f\u4ec0\u4e48\uff1f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"BSLv1.1, Golang"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u5bc6\u94a5\u7ba1\u7406\u3001\u8bc1\u4e66\u7ba1\u7406\u3001\u5916\u90e8\u6388\u6743\u96c6\u6210"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u89d2\u8272\u8bbf\u95ee\u5bc6\u94a5\u6743\u9650\u63a7\u5236"),(0,a.kt)("li",{parentName:"ul"},"\u5b9e\u73b0 CA \u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},"Secret as a Service - \u5bc6\u94a5\u5373\u670d\u52a1",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u963f\u91cc\u4e91 KMS\u3001AWS KMS"))))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://www.vaultproject.io/"}),"Vault project")),(0,a.kt)("li",{parentName:"ul"},"\u4e3a\u4ec0\u4e48\u4f7f\u7528 Vault",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u907f\u514d\u5bc6\u94a5\u5230\u5904\u653e"),(0,a.kt)("li",{parentName:"ul"},"\u63d0\u4f9b\u52a8\u6001\u5bc6\u94a5"),(0,a.kt)("li",{parentName:"ul"},"\u52a0\u5bc6\u670d\u52a1"),(0,a.kt)("li",{parentName:"ul"},"\u5ba1\u8ba1\u65e5\u5fd7"),(0,a.kt)("li",{parentName:"ul"},"\u4fbf\u4e8e\u64a4\u9500\u8bbf\u95ee"),(0,a.kt)("li",{parentName:"ul"},"\u670d\u52a1\u5e94\u7528\u96c6\u6210",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u4f8b\u5982 \u81ea\u52a8\u521b\u5efa db \u8d26\u53f7\u5bc6\u7801\u3001SSH \u5bc6\u94a5\u7ba1\u7406"))),(0,a.kt)("li",{parentName:"ul"},"\u914d\u7f6e\u4e2d\u5fc3"))),(0,a.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4\u670d\u52a1\u7aef\u53e3 8200"),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u79cd\u6388\u6743\u65b9\u5f0f",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"AppRole"),(0,a.kt)("li",{parentName:"ul"},"alicloud"),(0,a.kt)("li",{parentName:"ul"},"LDAP"),(0,a.kt)("li",{parentName:"ul"},"GitHub"),(0,a.kt)("li",{parentName:"ul"},"JWT/OIDC"),(0,a.kt)("li",{parentName:"ul"},"RADIUS"),(0,a.kt)("li",{parentName:"ul"},"Username/Password"),(0,a.kt)("li",{parentName:"ul"},"Tokens"),(0,a.kt)("li",{parentName:"ul"},"Kubernetes"),(0,a.kt)("li",{parentName:"ul"},"Kerberos"))),(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u591a\u79cd\u540e\u7aef\u5b58\u50a8 - consul,etcd,file,inmem,mysql,postgresql,raft,s3,zppkeeper"),(0,a.kt)("li",{parentName:"ul"},"\u6982\u5ff5",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u540e\u7aef\u5b58\u50a8",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u7684\u662f Vault \u7684\u4fe1\u606f"))),(0,a.kt)("li",{parentName:"ul"},"\u5bc6\u94a5\u5f15\u64ce",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8\u3001\u751f\u6210\u3001\u52a0\u5bc6\u6570\u636e"),(0,a.kt)("li",{parentName:"ul"},"\u88ab\u6302\u8f7d\u5230\u4e00\u4e2a\u76ee\u5f55"),(0,a.kt)("li",{parentName:"ul"},"\u90e8\u5206\u76f4\u63a5\u5b58\u50a8\u6570\u636e\uff0c\u90e8\u5206\u4e0e\u5916\u90e8\u7cfb\u7edf\u4ea4\u4e92"),(0,a.kt)("li",{parentName:"ul"},"\u751f\u547d\u5468\u671f\uff1a Enable\u3001Disable\u3001Move\u3001Tune",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Tune \u7c7b\u4f3c\u4e8e\u914d\u7f6e"))),(0,a.kt)("li",{parentName:"ul"},"\u5f15\u64ce\u53ea\u80fd\u770b\u5230\u6302\u8f7d\u76ee\u5f55\u4e0b\u5185\u5bb9 - \u7c7b\u4f3c\u4e8e chroot"))))),(0,a.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"VAULT_ADDR \u670d\u52a1\u7aef\u5730\u5740"),(0,a.kt)("li",{parentName:"ul"},"VAULT_TOKEN \u8bf7\u6c42\u7684 Token")))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'# macOS\nbrew instal vault\n\n# \u542f\u52a8\u5f00\u53d1\u6a21\u5f0f\u7684\u670d\u52a1 - \u7528\u4e8e\u672c\u5730\u5b9e\u9a8c\n# \u4f1a\u8f93\u51fa root token - \u7528\u4e8e\u767b\u9646\u6388\u6743\n# unseal key\n# \u56fa\u5b9a root token \u65b9\u4fbf\u8c03\u8bd5\nvault server -dev -dev-root-token-id="root"\nexport VAULT_ADDR=\'http://127.0.0.1:8200\'\nvault plugin list\n\n# docker \u542f\u52a8 - \u5f00\u53d1\u6a21\u5f0f\n# VAULT_LOCAL_CONFIG \u53ef\u4ee5\u7528 JSON \u8fdb\u884c\u914d\u7f6e\n# VAULT_DEV_ROOT_TOKEN_ID - \u81ea\u5b9a\u4e49 Token\ndocker run --rm -it \\\n  -p 8200:8200 \\\n  -v $PWD/vault/log:/vault/logs \\\n  -v $PWD/vault/data:/vault/file \\\n  -v $PWD/vault/config:/vault/config \\\n  --cap-add=IPC_LOCK \\\n  --name vault vault\n\n# \u751f\u4ea7\u8fd0\u884c\n# \u5982\u679c\u6570\u636e\u76ee\u5f55\u6ca1\u6709\u6570\u636e - \u90a3\u4e48\u8fdb\u5165 UI \u4f1a\u8fdb\u884c\u521d\u59cb\u5316\ndocker run --rm -it \\\n  -p 8200:8200 \\\n  -v $PWD/vault/log:/vault/logs \\\n  -v $PWD/vault/data:/vault/file \\\n  -v $PWD/vault/config:/vault/config \\\n  -e \'VAULT_LOCAL_CONFIG={"ui":true,"listener":{"tcp":{"address":"0.0.0.0:8200","tls_disable":true}},"backend": {"file": {"path": "/vault/file"}}, "default_lease_ttl": "168h", "max_lease_ttl": "720h"}\' \\\n  --cap-add=IPC_LOCK \\\n  --name vault vault server\n\n# \u5ba2\u6237\u7aef\u7684\u94fe\u63a5\u5730\u5740\nexport VAULT_ADDR=\'http://127.0.0.1:8200\'\n')),(0,a.kt)("h2",c({},{id:"\u57fa\u7840\u64cd\u4f5c"}),"\u57fa\u7840\u64cd\u4f5c"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'echo \'{"ui":true,"listener":{"tcp":{"address":"0.0.0.0:8200","tls_disable":true}},"backend": {"file": {"path": "vault-file"}}, "default_lease_ttl": "168h", "max_lease_ttl": "720h"}\' > config.json\n# \u542f\u52a8\u670d\u52a1\u7aef\nvault server -config=config.json > vault.log &\nexport VAULT_ADDR=\'http://127.0.0.1:8200\'\nvault init -key-shares=2 -key-threshold=1\nvault unseal\nvault login\n# KV \u5199\u5165\nvault write secret/hello value=world\necho -n \'{"value":"itsasecret"}\' | vault write secret/password -\necho -n "itsasecret" | vault write secret/password value=-\n# { "value": "itsasecret" }\ncat data.json\nvault write secret/password @data.json\n# itsasecret\ncat data.txt\nvault write secret/password value=@data.txt\nvault read secret/hello\nvault read -format=json secret/hello | jq ".data.value" -r\nvault read -field=value secret/password\n')),(0,a.kt)("h2",c({},{id:"approle"}),"approle"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'# \u5148\u4f7f\u7528 ROOT \u767b\u9646\nvault login\n\n# \u53ea\u8bfb\ncat <<EOF | vault policy write secret-read -\npath "secret/*" {\n  capabilities = [ "read" ]\n}\nEOF\n\ncat <<EOF | vault policy write secret-management -\npath "secret/*" {\n  capabilities = [ "create", "read", "update", "delete", "list" ]\n}\nEOF\n\n# \u542f\u7528 approle\nvault auth enable approle\n\n# macOS \u4e0b\u662f\u5927\u5199\n# \u4e5f\u53ef\u4ee5\u4e0d\u9884\u5b9a\u4e49 ROLE_ID\nROLE_ID=$(uuidgen|tr \'[:upper:]\' \'[:lower:]\')\nvault write auth/approle/role/secret-reader role_id=$ROLE_ID\n# \u8d4b\u4e88\u7b56\u7565\nvault write auth/approle/role/secret-reader policies="secret-read"\n# \u521a\u624d\u521b\u5efa\u7684\u89d2\u8272 ID\nvault read auth/approle/role/secret-reader/role-id\n# secret \u4e0d\u80fd\u67e5\u770b - \u53ef\u4ee5\u4fee\u6539\nvault read auth/approle/role/secret-reader/secret-id\n# \u4ece\u65b0\u751f\u6210 SECRET_ID\n# \u5c06\u7ed3\u679c\u66f4\u65b0\u5230\u53d8\u91cf\nSECRET_ID=$(vault write -f auth/approle/role/secret-reader/secret-id -format=json | jq -r \'.data.secret_id\')\n# \u6dfb\u52a0\u5230\u767b\u9646\n# \u4f1a\u751f\u6210 TOKEN - \u91cd\u590d\u64cd\u4f5c\u4f1a\u751f\u6210\u65b0\u7684 Token \u4f46\u4e4b\u524d\u7684\u4e5f\u4f1a\u6709\u6548\nTOKEN=$(vault write --format=json auth/approle/login role_id=$ROLE_ID secret_id=$SECRET_ID | jq -r \'.auth.client_token\')\n\n# \u9a8c\u8bc1 Token \u6709\u6548\nVAULT_TOKEN=$TOKEN vault read auth/token/lookup-self\n\n# \u5199\u5165\u6d4b\u8bd5\u6570\u636e\nvault secrets enable -path=secret kv\nvault kv put secret/test test_password=$ROLE_ID\n\n# \u4f7f\u7528\u8be5 TOKEN \u67e5\u8be2\nVAULT_TOKEN=$TOKEN vault kv get -field=test_password secret/test\n\n# \u53ef\u4ee5\u5c1d\u8bd5\u5728\u53e6\u5916\u4e00\u4e2a\u4f1a\u8bdd\u4f7f\u7528 TOKEN \u767b\u9646\nvault login $TOKEN\n')),(0,a.kt)("h2",c({},{id:"vault-agent"}),"vault agent"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u81ea\u52a8\u6388\u6743"),(0,a.kt)("li",{parentName:"ul"},"\u7f13\u5b58"),(0,a.kt)("li",{parentName:"ul"},"\u6a21\u677f"),(0,a.kt)("li",{parentName:"ul"},"Agent \u914d\u7f6e\u5bf9\u8c61\u5b9a\u4e49 ",(0,a.kt)("a",c({parentName:"li"},{href:"https://gopkgs.io/src/github.com/hashicorp/vault/command/agent/config/config.go"}),"config.go"))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'# APP ROLE \u62ff\u5230\u7684\u89d2\u8272\u4fe1\u606f\necho $ROLE_ID > role_id.vault.txt\necho $SECRET_ID > secret_id.vault.txt\n\n# remove_secret_id_file_after_reading - \u9ed8\u8ba4\u4e3a true - secret_id \u8bfb\u53d6\u540e\u4f1a\u88ab\u5220\u9664\ncat <<EOF > agent.json\n{\n  "pid_file": "./vault.pid",\n  "vault": {\n    "address": "$VAULT_ADDR"\n  },\n  "listener": {\n    "tcp": {\n      "address": "0.0.0.0:8200",\n      "tls_disable": true\n    }\n  },\n  "auto_auth": {\n    "method": {\n      "type": "approle",\n      "config": {\n        "role_id_file_path": "role_id.vault.txt",\n        "secret_id_file_path": "secret_id.vault.txt"\n      }\n    },\n    "sink": [\n      {\n        "type": "file",\n        "config": {\n          "path": "./agent-token.file"\n        }\n      }\n    ]\n  },\n  "cache": {\n    "use_auto_auth_token": true\n  }\n}\nEOF\n\nvault agent -config agent.json\n\n# \u4f7f\u7528\u672c\u5730\u548c\u83b7\u53d6\u5230\u7684 Token\nexport VAULT_ADDR=http://127.0.0.1:8200\nVAULT_TOKEN=$(cat agent-token.file) vault read auth/token/lookup-self\n\n# \u767b\u9646\u540e\u5219\u53ef\u4ee5\u4e00\u76f4\u8bbf\u95ee\nvault login $(cat agent-token.file)\nvault read auth/token/lookup-self\n')),(0,a.kt)("h2",c({},{id:"consul-secret"}),"Consul Secret"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u57fa\u4e8e Consul \u7684 ACL \u7b56\u7565\u52a8\u6001\u751f\u6210 Consul API \u7684 Token"),(0,a.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 global-management \u7684 token")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'# \u5982\u679c\u6ca1\u6709\u914d\u7f6e\u8fc7 token\nconsul acl bootstrap\n\n# \u542f\u7528 consul secret\nvault secrets enable consul\n# \u521b\u5efa token\nCONSUL_HTTP_TOKEN=d54fe46a-1f57-a589-3583-6b78e334b03b consul acl token create -policy-name=global-management\n# \u4f7f\u7528\u65b0\u521b\u5efa\u7684 token\nvault write consul/config/access \\\n    address=127.0.0.1:8500 \\\n    token=7652ba4c-0f6e-8e75-5724-5e083d72cfe4\n\n# \u65b0\u589e\u89d2\u8272 - \u5173\u8054\u7b56\u7565\nvault write consul/roles/my-role policy=$(base64 <<< \'key "" { policy = "read" }\')\n# \u89d2\u8272\u5173\u8054\u73b0\u6709\u7b56\u7565\nvault write consul/roles/my-role policies=readonly\n# \u83b7\u53d6\u6388\u6743\u4fe1\u606f\nvault read consul/creds/my-role\n')),(0,a.kt)("h2",c({},{id:"postgresql-\u5b58\u50a8"}),"PostgreSQL \u5b58\u50a8"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-sql"}),'CREATE TABLE vault_kv_store (\n  parent_path TEXT COLLATE "C" NOT NULL,\n  path        TEXT COLLATE "C",\n  key         TEXT COLLATE "C",\n  value       BYTEA,\n  CONSTRAINT pkey PRIMARY KEY (path, key)\n);\n\nCREATE INDEX parent_path_idx ON vault_kv_store (parent_path);\n')),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-hcl"}),'storage "postgresql" {\n  connection_url = "postgres://user123:secret123!@localhost:5432/vault?sslmode=disable"\n}\n')),(0,a.kt)("h2",c({},{id:"\u5bc6\u7801\u751f\u6210"}),"\u5bc6\u7801\u751f\u6210"),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'vault write sys/plugins/catalog/secrets-gen \\\n  sha_256=$(docker run --rm wener/vault sha256sum /etc/vault/plugins/vault-secrets-gen|cut -d \' \' -f 1) \\\n  command=vault-secrets-gen\n\nvault secrets enable -path=gen -plugin-name=secrets-gen plugin\n\nvault write gen/password length=36 symbols=0\n\nvault write sys/plugins/catalog/secrets-gen \\\n    sha_256="${SHA256}" \\\n    command="vault-secrets-gen"\n')),(0,a.kt)("h2",c({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",c({parentName:"li"},{href:"https://www.vaultproject.io/docs/configuration/"}),"https://www.vaultproject.io/docs/configuration/"))),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-hcl"}),'# \u5b58\u50a8\nstorage "consul" {\n  address = "127.0.0.1:8500"\n  path    = "vault"\n  # token   = "abcd1234"\n}\n\nlistener "tcp" {\n  address     = "127.0.0.1:8200"\n  tls_disable = 1\n}\n\nui = true\n\n#telemetry {\n#  statsite_address = "127.0.0.1:8125"\n#  disable_hostname = true\n#}\n')),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"vault server -config=vault.hcl\nexport VAULT_ADDR='http://127.0.0.1:8200'\nvault operator init\n# \u8f93\u5165\u6307\u5b9a\u6b21\u6570 unseal token\nvault operator unseal\n# \u4f7f\u7528 root token \u767b\u9646\nvault login\n")),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"consul.acl.json")),(0,a.kt)("pre",null,(0,a.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "key_prefix": {\n    "vault/": {\n      "policy": "write"\n    }\n  },\n  "node_prefix": {\n    "": {\n      "policy": "write"\n    }\n  },\n  "service": {\n    "vault": {\n      "policy": "write"\n    }\n  },\n  "agent_prefix": {\n    "": {\n      "policy": "write"\n    }\n  },\n  "session_prefix": {\n    "": {\n      "policy": "write"\n    }\n  }\n}\n')),(0,a.kt)("h1",c({},{id:"faq"}),"FAQ"),(0,a.kt)("h2",c({},{id:"consul-vs-vault"}),"Consul vs Vault"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u6700\u5927\u7684\u533a\u522b\u662f\u4e00\u4e2a\u5f3a\u8c03\u52a0\u5bc6\u4e00\u4e2a\u5f3a\u8c03\u670d\u52a1\u53d1\u73b0"),(0,a.kt)("li",{parentName:"ul"},"Consul \u7684\u914d\u7f6e\u662f KV"),(0,a.kt)("li",{parentName:"ul"},"Vault \u7684\u662f\u76ee\u5f55\u683c\u5f0f - \u4e24\u4e2a\u5f62\u5f0f\u4e0a\u6709\u4e9b\u7c7b\u4f3c")))}O.isMDXComponent=!0}}]);
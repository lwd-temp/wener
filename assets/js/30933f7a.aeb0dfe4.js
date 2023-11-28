"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[19665],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var p=r.createContext({}),m=function(e){var t=r.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},s=function(e){var t=m(e.components);return r.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,p=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=m(n),f=a,d=c["".concat(p,".").concat(f)]||c[f]||u[f]||l;return n?r.createElement(d,i(i({ref:t},s),{},{components:n})):r.createElement(d,i({ref:t},s))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,i=new Array(l);i[0]=f;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var m=2;m<l;m++)i[m]=n[m];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},24735:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return k},default:function(){return _},frontMatter:function(){return d},metadata:function(){return N},toc:function(){return b}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,p=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))p.call(t,n)&&s(e,n,t[n]);if(o)for(var n of o(t))m.call(t,n)&&s(e,n,t[n]);return e},u=(e,t)=>l(e,i(t)),f=(e,t)=>{var n={};for(var r in e)p.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n};const d={title:"Terraform"},k="Terraform",N={unversionedId:"devops/infra/terraform/README",id:"devops/infra/terraform/README",title:"Terraform",description:"- opentofu/opentofu",source:"@site/../notes/devops/infra/terraform/README.md",sourceDirName:"devops/infra/terraform",slug:"/devops/infra/terraform/",permalink:"/notes/devops/infra/terraform/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/infra/terraform/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1696577752,formattedLastUpdatedAt:"Oct 6, 2023",frontMatter:{title:"Terraform"},sidebar:"docs",previous:{title:"Pulumi",permalink:"/notes/devops/infra/pulumi"},next:{title:"Terraform Awesome",permalink:"/notes/devops/infra/terraform/awesome"}},g={},b=[{value:"\u914d\u7f6e",id:"\u914d\u7f6e",level:2},{value:"terraformrc",id:"terraformrc",level:2},{value:"\u53d8\u91cf",id:"\u53d8\u91cf",level:2},{value:"\u540e\u7aef",id:"\u540e\u7aef",level:2},{value:"GitLab Terraform State Backend",id:"gitlab-terraform-state-backend",level:2}],v={toc:b},h="wrapper";function _(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(h,u(c(c({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"terraform"}),"Terraform"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/opentofu/opentofu"}),"opentofu/opentofu"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"OpenTofu"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://www.terraform.io/docs/configuration/functions.html"}),"functions")),(0,r.kt)("li",{parentName:"ul"},"\u6a21\u677f\u8bed\u6cd5 ",(0,r.kt)("a",c({parentName:"li"},{href:"https://www.terraform.io/docs/configuration/expressions.html#string-templates"}),"string-templates")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://www.terraform.io/docs/provisioners/index.html"}),"Provisioners"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730\u6216\u8fdc\u7a0b\u670d\u52a1\u5668\u6267\u884c\u7279\u5b9a\u52a8\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e\u51c6\u5907\u670d\u52a1\u6216\u5176\u4ed6\u57fa\u7840\u8bbe\u65bd\u5bf9\u8c61"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u5efa\u8bae\u4f7f\u7528\uff0c\u4f5c\u4e3a\u6700\u540e\u7684\u65b9\u5f0f"))),(0,r.kt)("li",{parentName:"ul"},"\u6ce8\u610f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Provider configurations can be defined only in a root Terraform module."),(0,r.kt)("li",{parentName:"ul"},"\u88ab\u8c03\u7528\u6a21\u5757\u4e0d\u80fd\u5b9a\u4e49 ",(0,r.kt)("inlineCode",{parentName:"li"},"provider")),(0,r.kt)("li",{parentName:"ul"},"0.10 \u65e7\u7684\u6a21\u5757\u4e0d\u652f\u6301 ",(0,r.kt)("inlineCode",{parentName:"li"},"for_each"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"count"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"depends_on")),(0,r.kt)("li",{parentName:"ul"},"\u79fb\u9664 ",(0,r.kt)("inlineCode",{parentName:"li"},"provider")," \u4e4b\u524d\u786e\u4fdd\u6240\u6709\u8d44\u6e90\u5220\u9664"),(0,r.kt)("li",{parentName:"ul"},"\u6a21\u5757\u4f1a\u96c6\u6210\u9ed8\u8ba4 provider - \u6ca1\u6709\u522b\u540d\u7684 provider"),(0,r.kt)("li",{parentName:"ul"},"\u5982\u679c\u53d1\u73b0\u7f51\u7edc\u4e0d\u901a\uff0c\u786e\u4fdd\u672c\u5730\u53ef\u4ee5\u6253\u5f00 ",(0,r.kt)("a",c({parentName:"li"},{href:"https://registry.terraform.io/.well-known/terraform.json"}),"https://registry.terraform.io/.well-known/terraform.json")))),(0,r.kt)("li",{parentName:"ul"},"\u8f6c\u6362\u51fd\u6570",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"yamldecode"))),(0,r.kt)("li",{parentName:"ul"},"\u540e\u7aef",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"local - \u672c\u5730\u5b58\u50a8 terraform.tfstate"),(0,r.kt)("li",{parentName:"ul"},"remote - Terraform Enterprise"),(0,r.kt)("li",{parentName:"ul"},"artifactory - \u65e0\u9501"),(0,r.kt)("li",{parentName:"ul"},"consul"),(0,r.kt)("li",{parentName:"ul"},"etcdv3"),(0,r.kt)("li",{parentName:"ul"},"http - \u53ef\u9009\u9501 - REST \u63a5\u53e3"),(0,r.kt)("li",{parentName:"ul"},"kubernetes - secret \u9650\u5236\u4e86\u6700\u5927 1MB - \u4e0d\u5efa\u8bae\u4f7f\u7528"),(0,r.kt)("li",{parentName:"ul"},"\u963f\u91cc\u4e91 oss\u3001\u817e\u8baf\u4e91 cos"),(0,r.kt)("li",{parentName:"ul"},"pg"),(0,r.kt)("li",{parentName:"ul"},"s3 - DynamoDB \u652f\u6301\u9501")))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u65e5\u5fd7\nTF_LOG=1 terraform apply\n")),(0,r.kt)("h2",c({},{id:"\u914d\u7f6e"}),"\u914d\u7f6e"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-hcl"}),'terraform {\n  backend "local" {}\n\n  # experiments = [example]\n\n  required_providers {\n    # aws = ">= 2.7.0"\n\n    aws = {\n      version = ">= 2.7.0"\n    }\n  }\n}\n')),(0,r.kt)("h2",c({},{id:"terraformrc"}),"terraformrc"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://www.terraform.io/docs/commands/cli-config.html"}),"https://www.terraform.io/docs/commands/cli-config.html"))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'cat <<HCL > ~/.terraformrc\nplugin_cache_dir   = "$HOME/.terraform.d/plugin-cache"\ndisable_checkpoint = true\n\nprovider_installation {\n  filesystem_mirror {\n    path    = "$HOME/.terraform.d/plugins"\n    include = ["terraform.wener.me/*/*","registry.terraform.io/*/*"]\n  }\n}\nHCL\n\nmkdir -p $HOME/.terraform.d/plugin-cache $HOME/.terraform.d/plugins\n\n# \u5728 tf \u9879\u76ee\u4e0b\u8fd0\u884c\nterraform providers mirror ~/.terraform.d/plugins\n')),(0,r.kt)("h2",c({},{id:"\u53d8\u91cf"}),"\u53d8\u91cf"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u8f93\u5165\u53d8\u91cf",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("strong",{parentName:"li"},"\u4f7f\u7528\u53d8\u91cf\u5fc5\u987b\u5148\u5b9a\u4e49\u53d8\u91cf")),(0,r.kt)("li",{parentName:"ul"},"\u8bfb\u53d6\u987a\u5e8f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u73af\u5883\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"li"},"terraform.tfvars")," ",(0,r.kt)("inlineCode",{parentName:"li"},"terraform.tfvars.json"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"HCL \u6216 JSON"))),(0,r.kt)("li",{parentName:"ul"},"\u53d8\u91cf\u6587\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"li"},"*.auto.tfvars")," ",(0,r.kt)("inlineCode",{parentName:"li"},"*.auto.tfvars.json")),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"li"},"-var"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"-var-file")))),(0,r.kt)("li",{parentName:"ul"},"\u4f1a\u68c0\u6d4b\u73af\u5883\u53d8\u91cf\uff0c\u4f8b\u5982 ",(0,r.kt)("inlineCode",{parentName:"li"},"name")," \u5219\u4f1a\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"li"},"TF_VAR_name")))),(0,r.kt)("li",{parentName:"ul"},"\u672c\u5730\u53d8\u91cf",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u5199\u5728\u6587\u4ef6\u91cc\u7684\u53d8\u91cf"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u91cd\u590d\u4f7f\u7528"))),(0,r.kt)("li",{parentName:"ul"},"\u8f93\u51fa\u53d8\u91cf",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7c7b\u4f3c\u4e8e\u4e00\u4e2a\u6a21\u5757\u7684\u8fd4\u56de\u503c"),(0,r.kt)("li",{parentName:"ul"},"\u5b50\u6a21\u5757\u53ef\u901a\u8fc7\u8f93\u51fa\u53d8\u91cf\u66b4\u9732\u4fe1\u606f\u7ed9\u4e0a\u7ea7"),(0,r.kt)("li",{parentName:"ul"},"root \u6a21\u5757\u53ef\u8f93\u51fa\u5230\u547d\u4ee4\u884c"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u4f7f\u7528\u8fdc\u7a0b\u72b6\u6001\u65f6\uff0croot \u6a21\u5757\u8f93\u51fa\u53d8\u91cf\u80fd\u591f\u88ab\u5176\u4ed6\u914d\u7f6e\u8bbf\u95ee\u5230\uff0c ",(0,r.kt)("inlineCode",{parentName:"li"},"terraform_remote_state"))))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-hcl"}),'terraform {\n  # \u5f00\u542f\u53d8\u91cf\u6821\u9a8c\n  experiments = [variable_validation]\n}\n\nvariable "gitlab_token" {\n  # \u7b80\u5355\u7c7b\u578b\n  # string number bool\n  # \u590d\u6742\u7c7b\u578b\n  # list(<TYPE>) set(<TYPE>) map(<TYPE>) object({<ATTR NAME> = <TYPE>, ... }) tuple([<TYPE>, ...])\n  type = string\n  # default = \'\'\n  description = "token for gitlab access"\n\n  validation {\n    condition     = length(var.gitlab_token) > 0 && substr(var.gitlab_token, 0, 4) == "ami-"\n    # condition     = can(regex("^ami-", var.image_id))\n    error_message = "Invalid token"\n  }\n}\nprovider "gitlab" {\n  token = var.gitlab_token\n}\n\n# \u672c\u5730\u53d8\u91cf\nlocals {\n  service_name = "forum"\n  owner        = "Community Team"\n\n  instance_ids = concat(aws_instance.blue.*.id, aws_instance.green.*.id)\n\n  # \u901a\u8fc7 local.common_tags \u65b9\u5f0f\u5f15\u7528\n  common_tags = {\n    Service = local.service_name\n    Owner   = local.owner\n  }\n}\n\n# \u8f93\u51fa\u53d8\u91cf\noutput "instance_ip_addr" {\n  value = aws_instance.server.private_ip\n}\n\noutput "db_password" {\n  value       = aws_db_instance.db.password\n  description = "The password for logging in to the database."\n  sensitive   = true\n}\n\noutput "instance_ip_addr" {\n  value       = aws_instance.server.private_ip\n  description = "The private IP address of the main server instance."\n\n  depends_on = [\n    # Security group rule must be created before this IP address could\n    # actually be used, otherwise the services will be unreachable.\n    aws_security_group_rule.local_access,\n  ]\n}\n')),(0,r.kt)("h2",c({},{id:"\u540e\u7aef"}),"\u540e\u7aef"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Enhanced - \u53ef\u5b58\u50a8\u72b6\u6001\u548c\u6267\u884c\u64cd\u4f5c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"local, remote"))),(0,r.kt)("li",{parentName:"ul"},"Standard - \u8fdc\u7a0b\u5b58\u50a8\uff0c\u4f9d\u8d56 local \u6267\u884c",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"consul, etcd, etcdv3"),(0,r.kt)("li",{parentName:"ul"},"artifactory, pg, swift, http"),(0,r.kt)("li",{parentName:"ul"},"azurerm, gcs, cos, oss, manta"),(0,r.kt)("li",{parentName:"ul"},"s3",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 Dynamo DB \u53ef\u652f\u6301 locking \u548c \u4e00\u81f4\u6027\u68c0\u67e5"),(0,r.kt)("li",{parentName:"ul"},"\u5efa\u8bae\u5f00\u542f\u7248\u672c"))),(0,r.kt)("li",{parentName:"ul"},"kubernetes - \u5b58\u50a8\u4e3a secret, \u6700\u591a 1MB \u9650\u5236",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"tfstate-{workspace}-{secret_suffix}")))))),(0,r.kt)("li",{parentName:"ul"},"\u7279\u6027\u652f\u6301",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://www.terraform.io/docs/language/state/locking.html"}),"State Locking"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u907f\u514d\u5e76\u53d1\u64cd\u4f5c"),(0,r.kt)("li",{parentName:"ul"},"remote, sql, s3+dynamo, kubernetes")))))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-hcl"}),'terraform {\n  backend "kubernetes" {\n    # tfstate-{workspace}-state\n    secret_suffix = "state"\n    # ~/.kube/config\n    load_config_file = true\n    config_context = "demo"\n    # \u9ed8\u8ba4\u4f7f\u7528 context \u5173\u8054 ns\n    namespace = "demo"\n  }\n\n  # remote\n  backend "http" {\n  }\n}\n')),(0,r.kt)("h2",c({},{id:"gitlab-terraform-state-backend"}),"GitLab Terraform State Backend"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'STATE_NAME=staging\nPROJECT_ID=\nUSERNAME=\nPTA=\nterraform init \\\n    -backend-config="address=https://gitlab.com/api/v4/projects/$PROJECT_ID/terraform/state/$STATE_NAME" \\\n    -backend-config="lock_address=https://gitlab.com/api/v4/projects/$PROJECT_ID/terraform/state/$STATE_NAME/lock" \\\n    -backend-config="unlock_address=https://gitlab.com/api/v4/projects/$PROJECT_ID/terraform/state/$STATE_NAME/lock" \\\n    -backend-config="username=$USERNAME" \\\n    -backend-config="password=$PTA" \\\n    -backend-config="lock_method=POST" \\\n    -backend-config="unlock_method=DELETE" \\\n    -backend-config="retry_wait_min=5"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"image: registry.gitlab.com/gitlab-org/terraform-images/stable:latest\n\nvariables:\n  TF_ROOT: ${CI_PROJECT_DIR}/environments/example/production\n  TF_ADDRESS: ${CI_API_V4_URL}/projects/${CI_PROJECT_ID}/terraform/state/example-production\n\ncache:\n  key: example-production\n  paths:\n    - ${TF_ROOT}/.terraform\n\nbefore_script:\n  - cd ${TF_ROOT}\n\nstages:\n  - prepare\n  - validate\n  - build\n  - deploy\n\ninit:\n  stage: prepare\n  script:\n    - gitlab-terraform init\n\nvalidate:\n  stage: validate\n  script:\n    - gitlab-terraform validate\n\nplan:\n  stage: build\n  script:\n    - gitlab-terraform plan\n    - gitlab-terraform plan-json\n  artifacts:\n    name: plan\n    paths:\n      - ${TF_ROOT}/plan.cache\n    reports:\n      terraform: ${TF_ROOT}/plan.json\n\napply:\n  stage: deploy\n  environment:\n    name: production\n  script:\n    - gitlab-terraform apply\n  dependencies:\n    - plan\n  when: manual\n  only:\n    - master\n")))}_.isMDXComponent=!0}}]);
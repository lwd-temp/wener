"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[46853],{49613:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return b}});var r=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function o(e,t){if(null==e)return{};var a,r,l=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var u=r.createContext({}),p=function(e){var t=r.useContext(u),a=t;return e&&(a="function"==typeof e?e(t):i(i({},t),e)),a},s=function(e){var t=p(e.components);return r.createElement(u.Provider,{value:t},e.children)},c="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var a=e.components,l=e.mdxType,n=e.originalType,u=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),c=p(a),m=l,b=c["".concat(u,".").concat(m)]||c[m]||g[m]||n;return a?r.createElement(b,i(i({ref:t},s),{},{components:a})):r.createElement(b,i({ref:t},s))}));function b(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var n=a.length,i=new Array(n);i[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[c]="string"==typeof e?e:l,i[1]=o;for(var p=2;p<n;p++)i[p]=a[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,a)}m.displayName="MDXCreateElement"},46898:function(e,t,a){a.r(t),a.d(t,{assets:function(){return f},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return b},metadata:function(){return k},toc:function(){return h}});var r=a(49613),l=Object.defineProperty,n=Object.defineProperties,i=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))u.call(t,a)&&s(e,a,t[a]);if(o)for(var a of o(t))p.call(t,a)&&s(e,a,t[a]);return e},g=(e,t)=>n(e,i(t)),m=(e,t)=>{var a={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(a[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&p.call(e,r)&&(a[r]=e[r]);return a};const b={title:"Gitlab FAQ"},d="Gitlab FAQ",k={unversionedId:"service/forge/gitlab/gitlab-faq",id:"service/forge/gitlab/gitlab-faq",title:"Gitlab FAQ",description:"go get \u4e0d\u652f\u6301\u5b50\u7fa4\u7ec4",source:"@site/../notes/service/forge/gitlab/gitlab-faq.md",sourceDirName:"service/forge/gitlab",slug:"/service/forge/gitlab/faq",permalink:"/notes/service/forge/gitlab/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/gitlab/gitlab-faq.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1668846252,formattedLastUpdatedAt:"Nov 19, 2022",frontMatter:{title:"Gitlab FAQ"},sidebar:"docs",previous:{title:"GitLab\u914d\u7f6e",permalink:"/notes/service/forge/gitlab/config"},next:{title:"Gitlab Get Started",permalink:"/notes/service/forge/gitlab/get-started"}},f={},h=[{value:"go get \u4e0d\u652f\u6301\u5b50\u7fa4\u7ec4",id:"go-get-\u4e0d\u652f\u6301\u5b50\u7fa4\u7ec4",level:2},{value:"badage",id:"badage",level:2},{value:"\u8986\u76d6\u5ea6",id:"\u8986\u76d6\u5ea6",level:2},{value:"\u8986\u76d6\u53ef\u89c6\u5316",id:"\u8986\u76d6\u53ef\u89c6\u5316",level:2},{value:"\u624b\u52a8\u89e6\u53d1\u90e8\u7f72",id:"\u624b\u52a8\u89e6\u53d1\u90e8\u7f72",level:2},{value:"2FA SSH \u751f\u6210\u6062\u590d\u7801",id:"2fa-ssh-\u751f\u6210\u6062\u590d\u7801",level:2},{value:"gitlab runner \u7f13\u5b58\u8017\u65f6\u957f",id:"gitlab-runner-\u7f13\u5b58\u8017\u65f6\u957f",level:2},{value:"Docker build cache",id:"docker-build-cache",level:2},{value:"RBAC",id:"rbac",level:2},{value:"pipeline failed due to the user not being verified",id:"pipeline-failed-due-to-the-user-not-being-verified",level:2}],N={toc:h},v="wrapper";function y(e){var t=e,{components:a}=t,l=m(t,["components"]);return(0,r.kt)(v,g(c(c({},N),l),{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"gitlab-faq"}),"Gitlab FAQ"),(0,r.kt)("h2",c({},{id:"go-get-\u4e0d\u652f\u6301\u5b50\u7fa4\u7ec4"}),"go get \u4e0d\u652f\u6301\u5b50\u7fa4\u7ec4"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'# \u4f1a\u6307\u5411 gitlab.com/random/xyz \u800c\u4e0d\u662f gitlab.com/random/xyz/something\ncurl "https://gitlab.com/random/xyz/something?go-get=1"\n')),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"go get \u80fd\u8bc6\u522b gitlab.com/random/xyz/something.git",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f46\u8981\u6c42 module \u540d\u5b57\u4e5f\u5f97\u5339\u914d"))),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u4f7f\u7528 deploy token + .netrc \u6dfb\u52a0 auth",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f46\u65e0\u6cd5\u7ed5\u5f00 ssh \u7684\u95ee\u9898"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlab/-/issues/196007"}),"https://gitlab.com/gitlab-org/gitlab/-/issues/196007")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlab-foss/-/issues/30785"}),"https://gitlab.com/gitlab-org/gitlab-foss/-/issues/30785")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/golang/go/issues/34094"}),"https://github.com/golang/go/issues/34094"))))),(0,r.kt)("h2",c({},{id:"badage"}),"badage"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"https://gitlab.com/%{project_path}/badges/%{default_branch}/pipeline.svg"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"/pipeline.svg"),(0,r.kt)("li",{parentName:"ul"},"/coverage.svg"),(0,r.kt)("li",{parentName:"ul"},"style=flat-square,flat"),(0,r.kt)("li",{parentName:"ul"},"job=karma&key_text=Frontend+Coverage&key_width=130"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u72b6\u6001 pending, running, passed, failed, skipped, canceled, unknown"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.gitlab.com/ee/ci/pipelines/settings.html#pipeline-status-badge"}),"Pipeline status badge"))),(0,r.kt)("h2",c({},{id:"\u8986\u76d6\u5ea6"}),"\u8986\u76d6\u5ea6"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"CI/CD \u901a\u7528\u8bbe\u7f6e - \u914d\u7f6e\u68c0\u6d4b log \u7684\u89c4\u5219")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",c({parentName:"tr"},{align:null}),"tool"),(0,r.kt)("th",c({parentName:"tr"},{align:null}),"conf"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",c({parentName:"tr"},{align:null}),"go test -cover"),(0,r.kt)("td",c({parentName:"tr"},{align:null}),(0,r.kt)("inlineCode",{parentName:"td"},"coverage: \\d+.\\d+% of statements"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.gitlab.com/ee/ci/pipelines/settings.html#test-coverage-examples"}),"https://docs.gitlab.com/ee/ci/pipelines/settings.html#test-coverage-examples"))),(0,r.kt)("h2",c({},{id:"\u8986\u76d6\u53ef\u89c6\u5316"}),"\u8986\u76d6\u53ef\u89c6\u5316"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u53ea\u6709\u5728 MR \u53ef\u89c1",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u7b49\u5168\u90e8 pipeline \u8dd1\u5b8c\u624d\u53ef\u89c1 ",(0,r.kt)("a",c({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlab/-/issues/236248"}),"https://gitlab.com/gitlab-org/gitlab/-/issues/236248")))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.gitlab.com/ee/user/project/merge_requests/test_coverage_visualization.html"}),"https://docs.gitlab.com/ee/user/project/merge_requests/test_coverage_visualization.html")),(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u8f93\u51fa\u4e3a ",(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/cobertura/cobertura"}),"cobertura/cobertura"))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"go install github.com/boumenot/gocover-cobertura@latest\ngocover-cobertura < coverage.txt > coverage.xml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"test:\n  script:\n    - npm install\n    - npx nyc --reporter cobertura mocha\n  artifacts:\n    reports:\n      cobertura: coverage/cobertura-coverage.xml\n")),(0,r.kt)("h2",c({},{id:"\u624b\u52a8\u89e6\u53d1\u90e8\u7f72"}),"\u624b\u52a8\u89e6\u53d1\u90e8\u7f72"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"deploy:prod:manually:\n  extends:\n    - .deploy\n  when: manual\n")),(0,r.kt)("h2",c({},{id:"2fa-ssh-\u751f\u6210\u6062\u590d\u7801"}),"2FA SSH \u751f\u6210\u6062\u590d\u7801"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"ssh git@gitlab.com 2fa_recovery_codes\n")),(0,r.kt)("h2",c({},{id:"gitlab-runner-\u7f13\u5b58\u8017\u65f6\u957f"}),"gitlab runner \u7f13\u5b58\u8017\u65f6\u957f"),(0,r.kt)("p",null,"\u4e0d\u7f13\u5b58\uff0c\u4e0d\u505a ",(0,r.kt)("inlineCode",{parentName:"p"},"git clean -ffdx"),"\u3002\u975e\u5e38\u9002\u7528\u4e8e\u5927\u4ed3\u5e93\u6216\u751f\u6210\u975e\u5e38\u591a\u6587\u4ef6\u7684\u65f6\u5019\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"variables:\n  GIT_STRATEGY: fetch\n  GIT_CLEAN_FLAGS: none\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"GIT_CLEAN_FLAGS - GitLab Runner 11.10",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.gitlab.com/ee/ci/yaml/#git-clean-flags"}),"https://docs.gitlab.com/ee/ci/yaml/#git-clean-flags")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.gitlab.com/ee/ci/large_repositories/#git-clean-flags"}),"https://docs.gitlab.com/ee/ci/large_repositories/#git-clean-flags")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlab-runner/-/merge_requests/1281"}),"https://gitlab.com/gitlab-org/gitlab-runner/-/merge_requests/1281")))),(0,r.kt)("li",{parentName:"ul"},"\u95ee\u9898",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://gitlab.com/gitlab-org/gitlab-runner/-/issues/280#note_39937930"}),"https://gitlab.com/gitlab-org/gitlab-runner/-/issues/280#note_39937930"))))),(0,r.kt)("h2",c({},{id:"docker-build-cache"}),"Docker build cache"),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"Build:\n  extends: .docker\n  stage: build\n  script:\n    - docker pull $CI_REGISTRY_IMAGE:build || true\n    - >\n      docker build\n      --pull\n      --cache-from $CI_REGISTRY_IMAGE:build\n      --tag build-env\n      -f Dockerfile.build\n      .\n    - docker tag build-env $CI_REGISTRY_IMAGE:build\n    - docker push $CI_REGISTRY_IMAGE:build\n")),(0,r.kt)("h2",c({},{id:"rbac"}),"RBAC"),(0,r.kt)("admonition",c({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"Developer \u9ed8\u8ba4\u4e0d\u53ef\u4ee5\u64cd\u4f5c\u4fdd\u62a4\u5206\u652f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u914d\u7f6e\u5141\u8bb8\u64cd\u4f5c"))))),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Guest"),(0,r.kt)("li",{parentName:"ul"},"Reporter"),(0,r.kt)("li",{parentName:"ul"},"Developer"),(0,r.kt)("li",{parentName:"ul"},"Maintainer"),(0,r.kt)("li",{parentName:"ul"},"Owner"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.gitlab.com/ee/user/permissions.html"}),"https://docs.gitlab.com/ee/user/permissions.html"))),(0,r.kt)("h2",c({},{id:"pipeline-failed-due-to-the-user-not-being-verified"}),"pipeline failed due to the user not being verified"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u5171\u4eab Runner",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u9700\u8981\u7528\u6237\u9a8c\u8bc1 - \u8bbe\u7f6e\u4fe1\u7528\u5361\u3001\u4e0d\u4f1a\u6536\u8d39"))),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u81ea\u5df1\u7684 Runner\uff0c\u53ef\u4ee5\u5173\u95ed\u5171\u4eab",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Setting -> CICD -> Runner (Expand) -> disable Shared runner.")))))}y.isMDXComponent=!0}}]);
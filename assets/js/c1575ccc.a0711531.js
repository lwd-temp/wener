"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[18144],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return d}});var r=n(59496);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var c=r.createContext({}),m=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(c.Provider,{value:t},e.children)},u="mdxType",s={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,a=e.originalType,c=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=m(n),f=i,d=u["".concat(c,".").concat(f)]||u[f]||s[f]||a;return n?r.createElement(d,l(l({ref:t},p),{},{components:n})):r.createElement(d,l({ref:t},p))}));function d(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var a=n.length,l=new Array(a);l[0]=f;var o={};for(var c in t)hasOwnProperty.call(t,c)&&(o[c]=t[c]);o.originalType=e,o[u]="string"==typeof e?e:i,l[1]=o;for(var m=2;m<a;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},18716:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return g},default:function(){return w},frontMatter:function(){return d},metadata:function(){return k},toc:function(){return v}});var r=n(49613),i=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,c=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?i(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))c.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))m.call(t,n)&&p(e,n,t[n]);return e},s=(e,t)=>a(e,l(t)),f=(e,t)=>{var n={};for(var r in e)c.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n};const d={title:"gitflow"},g="gitflow",k={unversionedId:"service/forge/git/gitflow",id:"service/forge/git/gitflow",title:"gitflow",description:"- petervanderdoes/gitflow-avh",source:"@site/../notes/service/forge/git/gitflow.md",sourceDirName:"service/forge/git",slug:"/service/forge/git/gitflow",permalink:"/notes/service/forge/git/gitflow",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/git/gitflow.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1682315301,formattedLastUpdatedAt:"Apr 24, 2023",frontMatter:{title:"gitflow"},sidebar:"docs",previous:{title:"gitconfig",permalink:"/notes/service/forge/git/gitconfig"},next:{title:".gitignore",permalink:"/notes/service/forge/git/gitignore"}},h={},v=[{value:"standard",id:"standard",level:2}],b={toc:v},N="wrapper";function w(e){var t=e,{components:n}=t,i=f(t,["components"]);return(0,r.kt)(N,s(u(u({},b),i),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"gitflow"}),"gitflow"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/petervanderdoes/gitflow-avh"}),"petervanderdoes/gitflow-avh"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"2019 \u505c\u6b62\u7ef4\u62a4"),(0,r.kt)("li",{parentName:"ul"},"a collection of Git extensions to provide high-level repository operations for Vincent Driessen's branching model."),(0,r.kt)("li",{parentName:"ul"},"adds more functionality to the existing git-flow and several of the internal commands have been rewritten to speed up the software."))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/nvie/gitflow"}),"nvie/gitflow"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"2012 \u505c\u6b62\u7ef4\u62a4"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"http://nvie.com/posts/a-successful-git-branching-model"}),"A successful Git branching model")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.git-tower.com/learn/git/ebook/cn/command-line/advanced-topics/git-flow"}),"git-flow \u5de5\u4f5c\u6d41\u7a0b")),(0,r.kt)("li",{parentName:"ul"},"branches",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"bugfix hotfix release feature support"))),(0,r.kt)("li",{parentName:"ul"},"actions",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"delete finish list publish rename start track"),(0,r.kt)("li",{parentName:"ul"},"rebase")))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"brew install git-flow-avh\n\ngit flow init -d\ngit push --set-upstream origin develop\n\ngit checkout develop\ngit flow release start v2021.1.1\ngit flow release finish v2021.1.1\ngit push --tags\n")),(0,r.kt)("h2",u({},{id:"standard"}),"standard"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5355\u5206\u652f - GitHub flow",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"master"))),(0,r.kt)("li",{parentName:"ul"},"\u529f\u80fd\u5206\u652f",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"master, ",(0,r.kt)("inlineCode",{parentName:"li"},"feature/*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"feature/*")," -> master"))),(0,r.kt)("li",{parentName:"ul"},"gitflow",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"master, develop, ",(0,r.kt)("inlineCode",{parentName:"li"},"feature/*"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"release/*"),",",(0,r.kt)("inlineCode",{parentName:"li"},"hotfix/*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"release/*"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"hotfix/*")," -> master"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"feature/*"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"release/*"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"hotfix/*")," -> develop"))),(0,r.kt)("li",{parentName:"ul"},"GitLab",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"master, ",(0,r.kt)("inlineCode",{parentName:"li"},"feature/*"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"*-stable"),", ",(0,r.kt)("inlineCode",{parentName:"li"},"env/*")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"feature/*")," -> master")))),(0,r.kt)("mermaid",u({},{value:'---\ntitle: GitFlow\n---\ngitGraph\n   commit id: "\u521d\u59cb\u5316"\n   commit id: "\u57fa\u7840\u4e3b\u7ebf"\n   branch develop\n   commit id: "\u57fa\u7840\u529f\u80fd"\n   branch feature/a\n\n   checkout feature/a\n   commit id: "\u529f\u80fd A"\n   checkout develop\n   merge feature/a\n   commit id: "Merge A"\n\n   branch release/v1\n   checkout release/v1\n   commit id: "V1"\n   checkout develop\n   merge release/v1\n   checkout main\n   merge release/v1\n   commit id: "v1"\n\n   checkout main\n   branch hotfix/x\n   commit id: "fix x"\n   checkout main\n   merge hotfix/x\n   checkout develop\n   merge hotfix/x'})),(0,r.kt)("mermaid",u({},{value:'---\ntitle: GitLab\n---\ngitGraph\n   commit id: "\u521d\u59cb\u5316"\n   commit id: "\u57fa\u7840\u4e3b\u7ebf"\n   branch develop\n   commit id: "\u57fa\u7840\u529f\u80fd"\n   branch feature/a\n\n   checkout feature/a\n   commit id: "\u529f\u80fd A"\n   checkout develop\n   merge feature/a\n   commit id: "Merge A"\n\n   branch env/staging\n   commit\n   commit id: "fixing A"\n   branch env/pre-prod\n   commit id: "v1"\n   branch env/production\n   commit'})),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://docs.github.com/en/get-started/quickstart/github-flow"}),"https://docs.github.com/en/get-started/quickstart/github-flow"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"frequently deploying"),(0,r.kt)("li",{parentName:"ul"},"minimize the amount of unreleased code"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://docs.gitlab.com/ee/topics/gitlab_flow.html"}),"https://docs.gitlab.com/ee/topics/gitlab_flow.html")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://en.wikipedia.org/wiki/Feature-driven_development"}),"https://en.wikipedia.org/wiki/Feature-driven_development")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://martinfowler.com/bliki/FeatureBranch.html"}),"https://martinfowler.com/bliki/FeatureBranch.html")),(0,r.kt)("li",{parentName:"ul"},"\u64cd\u4f5c\u89c4\u8303",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"rebase"),(0,r.kt)("li",{parentName:"ul"},"squash")))))}w.isMDXComponent=!0}}]);
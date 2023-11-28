"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[94878],{49613:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var r=n(59496);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},f="mdxType",g={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),f=s(n),p=o,m=f["".concat(l,".").concat(p)]||f[p]||g[p]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=p;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[f]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},92104:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return d},default:function(){return w},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return v}});var r=n(49613),o=Object.defineProperty,i=Object.defineProperties,a=Object.getOwnPropertyDescriptors,c=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable,u=(e,t,n)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,f=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&u(e,n,t[n]);if(c)for(var n of c(t))s.call(t,n)&&u(e,n,t[n]);return e},g=(e,t)=>i(e,a(t)),p=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&c)for(var r of c(e))t.indexOf(r)<0&&s.call(e,r)&&(n[r]=e[r]);return n};const m={tags:["Configuration"]},d="gitconfig",b={unversionedId:"service/forge/git/gitconfig",id:"service/forge/git/gitconfig",title:"gitconfig",description:"crlf",source:"@site/../notes/service/forge/git/gitconfig.md",sourceDirName:"service/forge/git",slug:"/service/forge/git/gitconfig",permalink:"/notes/service/forge/git/gitconfig",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/service/forge/git/gitconfig.md",tags:[{label:"Configuration",permalink:"/notes/tags/configuration"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1677768806,formattedLastUpdatedAt:"Mar 2, 2023",frontMatter:{tags:["Configuration"]},sidebar:"docs",previous:{title:"Git Submodule",permalink:"/notes/service/forge/git/submodule"},next:{title:"gitflow",permalink:"/notes/service/forge/git/gitflow"}},y={},v=[{value:"crlf",id:"crlf",level:2}],h={toc:v},O="wrapper";function w(e){var t=e,{components:n}=t,o=p(t,["components"]);return(0,r.kt)(O,g(f(f({},h),o),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",f({},{id:"gitconfig"}),"gitconfig"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-bash"}),'git config --global user.email "you@example.com"\ngit config --global user.name "Your Name"\n\ngit config --global credential.helper "cache --timeout=36000"\n')),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-ini"}),"[push]\n  default = simple\n[user]\n    editor = nano\n    quotepath = false\n    # name = wener\n    # email =\n    # signingkey = ssh-ed25519 AAAA wener\n[alias]\n    master = checkout master\n    ci = commit\n    co = checkout\n    wt = worktree\n    loggo = log --graph --oneline\n    l = log --graph --oneline --decorate\n    logg = log --graph\n    sti = status --ignored\n    st = status\n    sts = status -s\n  stsb = status -sb\n  latest = clone --depth 1 -v --progress\n    # svn push\n    svnc = !git stash && git svn dcommit && git stash pop\n    svnr = !git stash && git svn rebase  && git stash pop\n[color]\n  diff = auto\n  status = auto\n  branch = auto\n    ui = true\n[core]\n    autocrlf = input\n    safecrlf = false\n    quotepath = false\n    ignorecase = false\n[credential]\n    helper = cache --timeout=36000\n[pull]\n    ff = only\n# git init\n[init]\n  # \u4f7f\u7528 main \u4f5c\u4e3a\u9ed8\u8ba4\u5206\u652f\n    defaultBranch = main\n[gpg]\n    format = ssh\n# git commit\n[commit]\n  # \u63d0\u4ea4\u65f6\u81ea\u52a8 sign, -S\n    gpgsign = true\n")),(0,r.kt)("h2",f({},{id:"crlf"}),"crlf"),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-bash"}),"git config --global core.eol lf\ngit config --global core.autocrlf input\ngit add -u --renormalize .\n")),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{className:"language-gitattributes",metastring:'title=".gitattributes"',title:'".gitattributes"'}),"* text=auto eol=lf\n\n*.sln text eol=crlf\n*.png binary\n*.jpg binary\n")),(0,r.kt)("pre",null,(0,r.kt)("code",f({parentName:"pre"},{}),"core.autocrlf=true:      core.autocrlf=input:     core.autocrlf=false:\n\n     repository               repository               repository\n      ^      V                 ^      V                 ^      V\n     /        \\               /        \\               /        \\\ncrlf->lf    lf->crlf     crlf->lf       \\             /          \\\n   /            \\           /            \\           /            \\\n")))}w.isMDXComponent=!0}}]);
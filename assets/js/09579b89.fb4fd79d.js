"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[10867],{49613:function(e,t,n){n.d(t,{Zo:function(){return c},kt:function(){return d}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function p(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},c=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},s="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},h=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,c=p(e,["components","mdxType","originalType","parentName"]),s=u(n),h=a,d=s["".concat(l,".").concat(h)]||s[h]||m[h]||o;return n?r.createElement(d,i(i({ref:t},c),{},{components:n})):r.createElement(d,i({ref:t},c))}));function d(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=h;var p={};for(var l in t)hasOwnProperty.call(t,l)&&(p[l]=t[l]);p.originalType=e,p[s]="string"==typeof e?e:a,i[1]=p;for(var u=2;u<o;u++)i[u]=n[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}h.displayName="MDXCreateElement"},8611:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return d},metadata:function(){return y},toc:function(){return b}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,i=Object.getOwnPropertyDescriptors,p=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,c=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,s=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&c(e,n,t[n]);if(p)for(var n of p(t))u.call(t,n)&&c(e,n,t[n]);return e},m=(e,t)=>o(e,i(t)),h=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&p)for(var r of p(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const d={title:"pip"},f="pip",y={unversionedId:"languages/python/pip",id:"languages/python/pip",title:"pip",description:"Torch",source:"@site/../notes/languages/python/pip.md",sourceDirName:"languages/python",slug:"/languages/python/pip",permalink:"/notes/languages/python/pip",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/python/pip.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1681042995,formattedLastUpdatedAt:"Apr 9, 2023",frontMatter:{title:"pip"},sidebar:"docs",previous:{title:"Python",permalink:"/notes/languages/python/"},next:{title:"pyenv",permalink:"/notes/languages/python/pyenv"}},g={},b=[{value:"Torch",id:"torch",level:2},{value:"Mirror",id:"mirror",level:2},{value:"Running pip as the &#39;root&#39; user can result in broken permissions",id:"running-pip-as-the-root-user-can-result-in-broken-permissions",level:2}],k={toc:b},v="wrapper";function O(e){var t=e,{components:n}=t,a=h(t,["components"]);return(0,r.kt)(v,m(s(s({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",s({},{id:"pip"}),"pip"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# pip install | download | uninstall | freeze | inspect | list | show | check | config | search | cache | index | wheel | hash | debug\n")),(0,r.kt)("h2",s({},{id:"torch"}),"Torch"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-bash"}),"# Torch\n# ======\npip install torch torchvision torchaudio --index-url https://download.pytorch.org/whl/cpu\n\n# libgomp-a34b3233.so.1: pthread_attr_setaffinity_np: symbol not found\n# \u53ef\u66ff\u6362\napk add libgomp\ncp /usr/lib/python3.10/site-packages/torch/lib/libgomp-a34b3233.so.1 backup/\ncp /usr/lib/libgomp.so.1 /usr/lib/python3.10/site-packages/torch/lib/libgomp-a34b3233.so.1\n\n# libtorch_python.so: __register_atfork\n# \u65e0\u6cd5\u66ff\u6362\u53ea\u80fd\u91cd\u65b0\u7f16\u8bd1\n")),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-py"}),"import torch\nprint(torch.__version__)\n\nprint(torch.version.cuda)\nprint(torch.backends.cudnn.version())\n\ntorch.cuda.is_available() # CUDA \u662f\u5426\u53ef\u7528\ntorch.cuda.device_count() # GPU \u6570\u91cf\ntorch.cuda.get_device_name(0) # \u8fd4\u56de GPU \u540d\u79f0\ntorch.cuda.current_device() # \u8fd4\u56de\u5f53\u524d GPU \u7d22\u5f15\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"cudnn \u4e0d\u4f1a\u652f\u6301 musl")),(0,r.kt)("h2",s({},{id:"mirror"}),"Mirror"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{className:"language-ini",metastring:'title="~/.pip/pip.conf"',title:'"~/.pip/pip.conf"'}),"[global]\nindex-url = https://pypi.tuna.tsinghua.edu.cn/simple\n[install]\ntrusted-host = https://pypi.tuna.tsinghua.edu.cn\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://pypi.tuna.tsinghua.edu.cn/simple"}),"https://pypi.tuna.tsinghua.edu.cn/simple")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://pypi.mirrors.ustc.edu.cn/simple"}),"https://pypi.mirrors.ustc.edu.cn/simple")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://pypi.douban.com/simple"}),"http://pypi.douban.com/simple")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"http://mirrors.aliyun.com/pypi/simple"}),"http://mirrors.aliyun.com/pypi/simple"))),(0,r.kt)("hr",null),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",s({parentName:"li"},{href:"https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/"}),"https://mirrors.tuna.tsinghua.edu.cn/anaconda/cloud/pytorch/"))),(0,r.kt)("h1",s({},{id:"faq"}),"FAQ"),(0,r.kt)("h2",s({},{id:"running-pip-as-the-root-user-can-result-in-broken-permissions"}),"Running pip as the 'root' user can result in broken permissions"),(0,r.kt)("pre",null,(0,r.kt)("code",s({parentName:"pre"},{}),"--root-user-action=ignore\n")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"PIP_ROOT_USER_ACTION=ignore")))}O.isMDXComponent=!0}}]);
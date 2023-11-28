"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[2003],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return m}});var r=n(59496);function s(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){s(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,s=function(e,t){if(null==e)return{};var n,r,s={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(s[n]=e[n]);return s}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(s[n]=e[n])}return s}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,s=e.mdxType,a=e.originalType,i=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),u=c(n),d=s,m=u["".concat(i,".").concat(d)]||u[d]||k[d]||a;return n?r.createElement(m,l(l({ref:t},p),{},{components:n})):r.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,s=t&&t.mdxType;if("string"==typeof e||s){var a=n.length,l=new Array(a);l[0]=d;var o={};for(var i in t)hasOwnProperty.call(t,i)&&(o[i]=t[i]);o.originalType=e,o[u]="string"==typeof e?e:s,l[1]=o;for(var c=2;c<a;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},79664:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return f},default:function(){return O},frontMatter:function(){return m},metadata:function(){return b},toc:function(){return y}});var r=n(49613),s=Object.defineProperty,a=Object.defineProperties,l=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))c.call(t,n)&&p(e,n,t[n]);return e},k=(e,t)=>a(e,l(t)),d=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&c.call(e,r)&&(n[r]=e[r]);return n};const m={title:"k0sctl"},f="k0sctl",b={unversionedId:"devops/kubernetes/distro/k0s/k0sctl",id:"devops/kubernetes/distro/k0s/k0sctl",title:"k0sctl",description:"- [k0sctl]",source:"@site/../notes/devops/kubernetes/distro/k0s/k0sctl.md",sourceDirName:"devops/kubernetes/distro/k0s",slug:"/devops/kubernetes/distro/k0s/k0sctl",permalink:"/notes/devops/kubernetes/distro/k0s/k0sctl",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/distro/k0s/k0sctl.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1675953425,formattedLastUpdatedAt:"Feb 9, 2023",frontMatter:{title:"k0sctl"},sidebar:"docs",previous:{title:"K0S FAQ",permalink:"/notes/devops/kubernetes/distro/k0s/faq"},next:{title:"K3S",permalink:"/notes/devops/kubernetes/distro/k3s/"}},g={},y=[{value:"k0sctl.yaml",id:"k0sctlyaml",level:2}],v={toc:y},h="wrapper";function O(e){var t=e,{components:n}=t,s=d(t,["components"]);return(0,r.kt)(h,k(u(u({},v),s),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"k0sctl"}),"k0sctl"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/k0sproject/k0sctl"}),"k0sctl"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8f85\u52a9\u63a7\u5236\u7ba1\u7406\u5de5\u5177"),(0,r.kt)("li",{parentName:"ul"},"\u6279\u91cf\u5b89\u88c5\u90e8\u7f72\u96c6\u7fa4 - ssh"),(0,r.kt)("li",{parentName:"ul"},"\u5907\u4efd\u3001\u6062\u590d\u3001\u5b89\u88c5\u3001\u5378\u8f7d\u3001\u5347\u7ea7"))),(0,r.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://github.com/k0sproject/rig"}),"k0sproject/rig"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"SSH+WinRM \u8fdc\u7a0b\u5e93"))))),(0,r.kt)("li",{parentName:"ul"},"alpine \u9ed8\u8ba4\u4f1a\u5b89\u88c5 findutils \u548c coreutils \u6765\u6ee1\u8db3 k0sctl \u7684\u529f\u80fd")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"export DISABLE_TELEMETRY=true\nexport DISABLE_UPGRADE_CHECK=true\n\n# --k0s \u5305\u542b\u5b8c\u6574 k0s \u914d\u7f6e\nk0sctl init --k0s > k0sctl.yaml\n# \u4fee\u6539 k0sctl.yaml\n# -d \u8f93\u51fa debug \u4fe1\u606f - \u5305\u542b\u6267\u884c\u7684\u547d\u4ee4\nk0sctl apply --config k0sctl.yaml\n\nk0sctl kubeconfig > kubeconfig\nkubectl get pods --kubeconfig kubeconfig -A\n")),(0,r.kt)("h2",u({},{id:"k0sctlyaml"}),"k0sctl.yaml"),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# k0s k0s-v1.23.3+k0s.1-amd64\ncurl -LOC- 'https://ghproxy.com/https://github.com/k0sproject/k0s/releases/download/v1.23.3%2Bk0s.1/k0s-v1.23.3+k0s.1-amd64'\n# airgap k0s-airgap-bundle-v1.23.3+k0s.1-amd64\ncurl -LOC- 'https://ghproxy.com/https://github.com/k0sproject/k0s/releases/download/v1.23.3%2Bk0s.1/k0s-airgap-bundle-v1.23.3+k0s.1-amd64'\n\n# \u4e5f\u53ef\u4ee5\u81ea\u5df1\u5236\u4f5c airgap \u5305\nk0s airgap list-images | xargs -I{} docker pull {}\ndocker image save $(k0s airgap list-images | xargs) -o bundle_file\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml",metastring:'title="k0sctl.yaml"',title:'"k0sctl.yaml"'}),"apiVersion: k0sctl.k0sproject.io/v1beta1\nkind: Cluster\nmetadata:\n  name: my-cluster\nspec:\n  hosts:\n    - ssh:\n        address: 10.0.0.1\n        user: admin\n        port: 22\n        keyPath: ~/.ssh/id_rsa\n      role: controller+worker\n  k0s:\n    version: 1.23.3+k0s.1\n    config: # k0s.yaml\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml",metastring:'title="spec.hosts"',title:'"spec.hosts"'}),'# \u89d2\u8272 - \u4e0d\u63a8\u8350\u4f7f\u7528 single\n# controller, controller+worker, single, worker\nrole:\n# \u5148\u4e0b\u8f7d\u5230\u672c\u5730\uff0c\u518d\u4ece\u672c\u5730\u4e0a\u4f20 - \u63a8\u8350\u5f00\u542f\nuploadBinary: true\nk0sBinaryPath:\n\nhostname:\ninstallFlags: []\nenvironment:\n# \u5b9a\u4e49\u4e0a\u4f20\u7684\u6587\u4ef6\nfiles:\n  - name: image-bundle\n    src: k0s-airgap-bundle-v1.23.3+k0s.1-amd64\n    dstDir: /var/lib/k0s/images/\n    dst:\n    dirPerm:\n    user:\n    group:\n    perm: 0700\n\nhooks:\n  apply:\n    before:\n      - date > k0sctl-apply.log\n    after:\n      - echo "apply success" > k0sctl-apply.log\n    reset:\nos:\n# \u9009\u62e9\u4f7f\u7528\u7684\u79c1\u6709\u7f51\u5361\nprivateInterface:\nprivateAddress:\nssh:\n  address: 10.0.0.2\n  user: ubuntu\n  keyPath: ~/.ssh/id_rsa\n  bastion:\n    address: 10.0.0.1\n    user: root\n    keyPath: ~/.ssh/id_rsa2\nlocalhost:\n  enabled: false\n')))}O.isMDXComponent=!0}}]);
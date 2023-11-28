"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[3687],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),u=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(s.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),c=u(n),d=a,f=c["".concat(s,".").concat(d)]||c[d]||m[d]||l;return n?r.createElement(f,o(o({ref:t},p),{},{components:n})):r.createElement(f,o({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,o=new Array(l);o[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[c]="string"==typeof e?e:a,o[1]=i;for(var u=2;u<l;u++)o[u]=n[u];return r.createElement.apply(null,o)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},9916:function(e,t,n){n.r(t),n.d(t,{assets:function(){return y},contentTitle:function(){return k},default:function(){return g},frontMatter:function(){return f},metadata:function(){return b},toc:function(){return N}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))u.call(t,n)&&p(e,n,t[n]);return e},m=(e,t)=>l(e,o(t)),d=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const f={title:"Kubernetes DNS"},k="Kubernetes DNS",b={unversionedId:"devops/kubernetes/internal/k8s-dns",id:"devops/kubernetes/internal/k8s-dns",title:"Kubernetes DNS",description:"- DNS for Services and Pods",source:"@site/../notes/devops/kubernetes/internal/k8s-dns.md",sourceDirName:"devops/kubernetes/internal",slug:"/devops/kubernetes/internal/k8s-dns",permalink:"/notes/devops/kubernetes/internal/k8s-dns",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/internal/k8s-dns.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1645693721,formattedLastUpdatedAt:"Feb 24, 2022",frontMatter:{title:"Kubernetes DNS"},sidebar:"docs",previous:{title:"Kubernates \u63a5\u53e3",permalink:"/notes/devops/kubernetes/internal/k8s-api"},next:{title:"Kubernetes \u6807\u7b7e",permalink:"/notes/devops/kubernetes/internal/k8s-labels"}},y={},N=[],v={toc:N},O="wrapper";function g(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(O,m(c(c({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"kubernetes-dns"}),"Kubernetes DNS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://kubernetes.io/docs/concepts/services-networking/dns-pod-service/"}),"DNS for Services and Pods")),(0,r.kt)("li",{parentName:"ul"},"Service",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A/AAAA - ",(0,r.kt)("inlineCode",{parentName:"li"},"my-svc.my-namespace.svc.cluster-domain.example")),(0,r.kt)("li",{parentName:"ul"},"SRV - ",(0,r.kt)("inlineCode",{parentName:"li"},"_my-port-name._my-port-protocol.my-svc.my-namespace.svc.cluster-domain.example")))),(0,r.kt)("li",{parentName:"ul"},"Pod",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"A/AAAA",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<pod-ip-address>.my-namespace.pod.cluster-domain.example")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"172-17-0-3.default.pod.cluster.local")))),(0,r.kt)("li",{parentName:"ul"},"hostname, subdomain",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"<hostname>.<subdomain>.my-namespace.svc.cluster-domain.example")))),(0,r.kt)("li",{parentName:"ul"},"setHostnameAsFQDN - 1.19 Alpha"))),(0,r.kt)("li",{parentName:"ul"},"pod.spec.dnsPolicy",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Default",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4ece\u8fd0\u884c\u8282\u70b9\u96c6\u6210"))),(0,r.kt)("li",{parentName:"ul"},"ClusterFirst",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u96c6\u7fa4\u57df\u540d\u76f4\u63a5\u89e3\u6790"),(0,r.kt)("li",{parentName:"ul"},"\u975e\u96c6\u7fa4\u57df\u540d\u8f6c\u53d1\u5230 node \u6307\u5b9a\u7684 dns \u4e0a\u6e38"))),(0,r.kt)("li",{parentName:"ul"},"ClusterFirstWithHostNet",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7528\u4e8e hostNetwork"))),(0,r.kt)("li",{parentName:"ul"},"None",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5ffd\u7565 K8S \u73af\u5883\u4e0b\u7684 DNS \u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u901a\u8fc7 dnsConfig \u914d\u7f6e")))))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"apiVersion: v1\nkind: Pod\nmetadata:\n  name: busybox\n  namespace: default\nspec:\n  containers:\n    - image: busybox:1.28\n      command:\n        - sleep\n        - '3600'\n      imagePullPolicy: IfNotPresent\n      name: busybox\n  restartPolicy: Always\n  hostNetwork: true\n  # DNS \u7b56\u7565\n  dnsPolicy: ClusterFirstWithHostNet\n  # \u81ea\u5b9a\u4e49 DNS \u914d\u7f6e - \u751f\u6210 /etc/resolv.conf\n  # dnsPolicy: None\n  dnsConfig:\n    nameservers:\n      - 1.2.3.4\n    searches:\n      - ns1.svc.cluster-domain.example\n      - my.dns.search.suffix\n    options:\n      - name: ndots\n        value: '2'\n      - name: edns0\n")))}g.isMDXComponent=!0}}]);
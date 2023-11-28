"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[16891],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return b}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),o=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(i.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},k=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,l=e.originalType,i=e.parentName,p=u(e,["components","mdxType","originalType","parentName"]),m=o(n),k=a,b=m["".concat(i,".").concat(k)]||m[k]||c[k]||l;return n?r.createElement(b,s(s({ref:t},p),{},{components:n})):r.createElement(b,s({ref:t},p))}));function b(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=n.length,s=new Array(l);s[0]=k;var u={};for(var i in t)hasOwnProperty.call(t,i)&&(u[i]=t[i]);u.originalType=e,u[m]="string"==typeof e?e:a,s[1]=u;for(var o=2;o<l;o++)s[o]=n[o];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}k.displayName="MDXCreateElement"},13372:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return g},frontMatter:function(){return b},metadata:function(){return f},toc:function(){return N}});var r=n(49613),a=Object.defineProperty,l=Object.defineProperties,s=Object.getOwnPropertyDescriptors,u=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))i.call(t,n)&&p(e,n,t[n]);if(u)for(var n of u(t))o.call(t,n)&&p(e,n,t[n]);return e},c=(e,t)=>l(e,s(t)),k=(e,t)=>{var n={};for(var r in e)i.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&u)for(var r of u(e))t.indexOf(r)<0&&o.call(e,r)&&(n[r]=e[r]);return n};const b={title:"Lens"},d="Lens",f={unversionedId:"devops/kubernetes/app/lens",id:"devops/kubernetes/app/lens",title:"Lens",description:"- MuhammedKalkan/OpenLens",source:"@site/../notes/devops/kubernetes/app/lens.md",sourceDirName:"devops/kubernetes/app",slug:"/devops/kubernetes/app/lens",permalink:"/notes/devops/kubernetes/app/lens",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/app/lens.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1669789233,formattedLastUpdatedAt:"Nov 30, 2022",frontMatter:{title:"Lens"},sidebar:"docs",previous:{title:"KubeVirt",permalink:"/notes/devops/kubernetes/app/kubevirt"},next:{title:"MinIO Kubernetes Operator",permalink:"/notes/devops/kubernetes/app/minio-operator"}},h={},N=[{value:"extensions/metrics-cluster-feature",id:"extensionsmetrics-cluster-feature",level:2},{value:"kube-prometheus",id:"kube-prometheus",level:3},{value:"features/user-mode",id:"featuresuser-mode",level:2}],y={toc:N},v="wrapper";function g(e){var t=e,{components:n}=t,a=k(t,["components"]);return(0,r.kt)(v,c(m(m({},y),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"lens"}),"Lens"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/MuhammedKalkan/OpenLens"}),"MuhammedKalkan/OpenLens"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u8981\u6c42\u767b\u9646"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/lensapp/lens"}),"lensapp/lens")," - Lens - The Kubernetes IDE"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/lensapp/lens/tree/master/extensions/metrics-cluster-feature"}),"extensions/metrics-cluster-feature")),(0,r.kt)("li",{parentName:"ul"},"src/features/user-mode",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ClusterRole lens-user",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"LIST namespace"),(0,r.kt)("li",{parentName:"ul"},"system:authenticated"))),(0,r.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u975e\u7ba1\u7406\u5458\u80fd\u8bbf\u95ee\u6709\u6743\u9650\u8bbf\u95ee\u7684\u7a7a\u95f4")))),(0,r.kt)("admonition",m({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"\u65e0\u6cd5\u4f7f\u7528\u5916\u90e8 prometheus - ",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/lensapp/lens/issues/909"}),"#909"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4ee5\u7528 promxy \u4ee3\u7406\u73b0\u6709\u7684\u5916\u90e8 prometheus - \u5728\u5185\u90e8\u4f7f\u7528"))))),(0,r.kt)("h2",m({},{id:"extensionsmetrics-cluster-feature"}),"extensions/metrics-cluster-feature"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"Namespace lens-metrics",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"StatefulSet prometheus",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"prometheus",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--storage.tsdb.retention.time=2d")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--storage.tsdb.retention.size=5GB")))),(0,r.kt)("li",{parentName:"ul"},"ServiceAccount prometheus"),(0,r.kt)("li",{parentName:"ul"},"Service prometheus",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"80 -> 9090"),(0,r.kt)("li",{parentName:"ul"},"prometheus.io/scrape: 'true'"))),(0,r.kt)("li",{parentName:"ul"},"ConfigMap prometheus-config",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"prometheus.yaml"))),(0,r.kt)("li",{parentName:"ul"},"ConfigMap prometheus-rules",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"alertmanager.rules.yaml"),(0,r.kt)("li",{parentName:"ul"},"etcd3.rules.yaml"),(0,r.kt)("li",{parentName:"ul"},"general.rules.yaml"),(0,r.kt)("li",{parentName:"ul"},"kube-state-metrics.rules.yaml"),(0,r.kt)("li",{parentName:"ul"},"kubelet.rules.yaml"),(0,r.kt)("li",{parentName:"ul"},"kubernetes.rules.yaml"),(0,r.kt)("li",{parentName:"ul"},"node.rules.yaml"),(0,r.kt)("li",{parentName:"ul"},"prometheus.rules.yaml"))))),(0,r.kt)("li",{parentName:"ul"},"ClusterRole - lens-prometheus",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"ServiceAccount prometheus"))),(0,r.kt)("li",{parentName:"ul"},"DaemonSet - node-exporter",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Service 80 -> 9100"))),(0,r.kt)("li",{parentName:"ul"},"Deployment - kube-state-metrics"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/lensapp/lens/blob/master/troubleshooting/custom-prometheus.md"}),"Using Custom Prometheus"))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u53ef\u4ee5\u4f7f\u7528 HELM \u5b89\u88c5\u7684 - \u9700\u8981\u6293\u53d6\u65f6\u95f4\u5c0f\u4e8e 1 \u5206\u949f\nhelm upgrade --set server.global.scrape_interval=30s prometheus stable/prometheus\n")),(0,r.kt)("h3",m({},{id:"kube-prometheus"}),"kube-prometheus"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u652f\u6301\u9700\u8981 ",(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/lensapp/lens/blob/master/troubleshooting/custom-prometheus.md#kube-prometheus"}),"relabel"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u8be5\u8bf4\u660e\u6709\u95ee\u9898"))),(0,r.kt)("li",{parentName:"ul"},"\u9009\u62e9 helm \u5b89\u88c5\uff0c\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"li"},"monitoring/kube-prometheus-prometheus:9090"))),(0,r.kt)("admonition",m({},{type:"tip"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/lensapp/lens/issues/180"}),"#180")," - Documentation is incorrect for Prometheus troubleshooting"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/lensapp/lens/issues/656"}),"#656")," - What are the requirements to make my prometheus deployment compatible with Lens?"))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-yaml",metastring:'title="bitnam/kube-prometheus/values.yaml"',title:'"bitnam/kube-prometheus/values.yaml"'}),"# Lens\n# ====\nnode-exporter:\n  serviceMonitor:\n    # interval: 10s\n    relabelings:\n      - action: replace\n        regex: (.*)\n        replacement: $1\n        sourceLabels:\n          - __meta_kubernetes_pod_node_name\n        targetLabel: kubernetes_node\n\nkubelet:\n  serviceMonitor:\n    # interval: 15s\n    metricRelabelings:\n      - action: replace\n        sourceLabels:\n          - node\n        targetLabel: instance\n\n# limit & request works\nkube-state-metrics:\n  serviceMonitor:\n    honorLabels: true\n")),(0,r.kt)("h2",m({},{id:"featuresuser-mode"}),"features/user-mode"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-yaml"}),"apiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRole\nmetadata:\n  name: lens-user\nrules:\n  - verbs:\n      - list\n    apiGroups:\n      - ''\n    resources:\n      - namespaces\n---\napiVersion: rbac.authorization.k8s.io/v1\nkind: ClusterRoleBinding\nmetadata:\n  name: lens-user\nsubjects:\n  - kind: Group\n    apiGroup: rbac.authorization.k8s.io\n    name: 'system:authenticated'\nroleRef:\n  apiGroup: rbac.authorization.k8s.io\n  kind: ClusterRole\n  name: lens-user\n")))}g.isMDXComponent=!0}}]);
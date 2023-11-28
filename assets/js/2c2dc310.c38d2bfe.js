"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45169],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),u=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},p=function(e){var t=u(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,l=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(n),m=a,f=c["".concat(l,".").concat(m)]||c[m]||k[m]||i;return n?r.createElement(f,s(s({ref:t},p),{},{components:n})):r.createElement(f,s({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,s=new Array(i);s[0]=m;var o={};for(var l in t)hasOwnProperty.call(t,l)&&(o[l]=t[l]);o.originalType=e,o[c]="string"==typeof e?e:a,s[1]=o;for(var u=2;u<i;u++)s[u]=n[u];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},17772:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return d},default:function(){return y},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return h}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,s=Object.getOwnPropertyDescriptors,o=Object.getOwnPropertySymbols,l=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,c=(e,t)=>{for(var n in t||(t={}))l.call(t,n)&&p(e,n,t[n]);if(o)for(var n of o(t))u.call(t,n)&&p(e,n,t[n]);return e},k=(e,t)=>i(e,s(t)),m=(e,t)=>{var n={};for(var r in e)l.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&o)for(var r of o(e))t.indexOf(r)<0&&u.call(e,r)&&(n[r]=e[r]);return n};const f={title:"Traefik Ingress"},d="Traefik Ingress",g={unversionedId:"devops/kubernetes/network/traefik-ingress",id:"devops/kubernetes/network/traefik-ingress",title:"Traefik Ingress",description:"- Traefik Ingress",source:"@site/../notes/devops/kubernetes/network/traefik-ingress.md",sourceDirName:"devops/kubernetes/network",slug:"/devops/kubernetes/network/traefik-ingress",permalink:"/notes/devops/kubernetes/network/traefik-ingress",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/network/traefik-ingress.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1629019137,formattedLastUpdatedAt:"Aug 15, 2021",frontMatter:{title:"Traefik Ingress"},sidebar:"docs",previous:{title:"Nginx Ingress",permalink:"/notes/devops/kubernetes/network/nginx-ingress"},next:{title:"HELM \u5305\u7ba1\u7406\u5668",permalink:"/notes/devops/kubernetes/ops/helm"}},b={},h=[{value:"CRD",id:"crd",level:2},{value:"Ingress",id:"ingress",level:2},{value:"Cert Manager",id:"cert-manager",level:2},{value:"FAQ",id:"faq",level:2},{value:"Cannot create service: subset not found",id:"cannot-create-service-subset-not-found",level:3},{value:"TBD",id:"tbd",level:2}],v={toc:h},N="wrapper";function y(e){var t=e,{components:n}=t,a=m(t,["components"]);return(0,r.kt)(N,k(c(c({},v),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",c({},{id:"traefik-ingress"}),"Traefik Ingress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://doc.traefik.io/traefik/providers/kubernetes-ingress/"}),"Traefik Ingress")),(0,r.kt)("li",{parentName:"ul"},"Traefik \u7684 K8S \u5206\u4e3a CRD \u65b9\u5f0f\u548c\u6807\u51c6\u7684 IngressController",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"CRD \u652f\u6301\u66f4\u591a\u529f\u80fd - Helm \u5b89\u88c5"))),(0,r.kt)("li",{parentName:"ul"},"Traefik \u652f\u6301\u975e\u5e38\u591a\u7684\u529f\u80fd - ACME, SNI, Dashboard, Tracing, Metrics")),(0,r.kt)("admonition",c({},{type:"caution"}),(0,r.kt)("ul",{parentName:"admonition"},(0,r.kt)("li",{parentName:"ul"},"traefik \u5185\u7f6e acme, \u4f46\u6709\u4e0d\u5c11\u95ee\u9898 - \u5b98\u65b9\u63a8\u8350\u4f7f\u7528 cert-manager",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5b98\u65b9 issues \u6392\u524d\u9762\u6709\u597d\u51e0\u4e2a\u5173\u4e8e\u8bc1\u4e66\u7684\u95ee\u9898"))),(0,r.kt)("li",{parentName:"ul"},"\u53ea\u6709 repilca \u4e3a 1 \u624d\u652f\u6301 acme - \u5f00\u6e90\u7248\u4e0d\u652f\u6301\u96c6\u7fa4",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/traefik/traefik/issues/5426#issuecomment-533598163"}),"#5426"),"\n\u5b98\u65b9\u8868\u660e \u793e\u533a\u7248 \u4e0d\u8003\u8651\u96c6\u7fa4"))),(0,r.kt)("li",{parentName:"ul"},"Middleware \u901a\u8fc7 CRD \u5f15\u7528 - \u4f7f\u7528\u76f8\u5bf9\u9ebb\u70e6"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Ingress \u65b9\u5f0f\u5f88\u591a\u529f\u80fd\u5f97\u4f7f\u7528 annotation \u975e\u5e38\u4e0d\u65b9\u4fbf",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4f46\u76f4\u63a5\u4f7f\u7528 IngressRoute \u4f1a\u5bfc\u81f4 Vendor Lockin"))))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'# \u8f6c\u53d1 9000\nkubectl port-forward $(kubectl get pods --selector "app.kubernetes.io/name=traefik" -n traefik --output=name) 9000:9000 -n traefik\n')),(0,r.kt)("h2",c({},{id:"crd"}),"CRD"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/containous/traefik/tree/v2.2/pkg/provider/kubernetes/crd/fixtures"}),"\u793a\u4f8b\u8d44\u6e90\u914d\u7f6e"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},"\u542f\u52a8\u53c2\u6570"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--global.checknewversion")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--global.sendanonymoususage")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--entryPoints.traefik.address=:9000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--entryPoints.web.address=:8000")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--entryPoints.websecure.address=:8443")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--api.dashboard=true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--ping=true")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--providers.kubernetescrd")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"--providers.kubernetesingress"))))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'helm repo add traefik https://containous.github.io/traefik-helm-chart\nhelm repo update\nhelm install traefik traefik/traefik\n\n# \u53ef\u5b89\u88c5\u5728\u72ec\u7acb\u547d\u540d\u7a7a\u95f4\nkubectl create ns traefik\nhelm install --namespace=traefik \\\n    traefik traefik/traefik\n\n# \u8f6c\u53d1 dashboard \u5230\u672c\u5730 9000\n# \u7136\u540e\u8bbf\u95ee http://localhost:9000/dashboard/\nkubectl port-forward -n traefik $(kubectl get pods -n traefik --selector "app.kubernetes.io/name=traefik" --output=name) 9000:9000\n\n# \u53ef\u4ee5\u914d\u7f6e\u4e00\u4e2a Ingress \u7136\u540e\u5373\u53ef\u901a\u8fc7\u57df\u540d\u8bbf\u95ee\ncat <<YAML\napiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: traefik-dashboard\n  namespace: traefik\nspec:\n  entryPoints:\n    - web\n    - traefik\n  routes:\n    - match: Host(`traefik.localhost`) && (PathPrefix(`/dashboard`) || PathPrefix(`/api`))\n      kind: Rule\n      services:\n        - name: api@internal\n          kind: TraefikService\nYAML\n')),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"apiVersion: traefik.containo.us/v1alpha1\nkind: IngressRoute\nmetadata:\n  name: foo\n  namespace: bar\nspec:\n  # \u5165\u53e3\n  entryPoints:\n    - foo\n  # \u8def\u7531\u914d\u7f6e\n  routes:\n    - kind: Rule\n      # \u8def\u7531\u5339\u914d\u89c4\u5219\n      match: Host(`test.example.com`)\n      # \u5339\u914d\u4f18\u5148\u7ea7\n      priority: 10\n      # \u5f15\u7528\u4e2d\u95f4\u4ef6\n      middlewares:\n        - name: middleware1\n          namespace: default\n      # \u540e\u7aef\u670d\u52a1\n      services:\n        - kind: Service\n          name: foo\n          namespace: default\n          # \u900f\u4f20\u5934\u4fe1\u606f\n          passHostHeader: true\n          port: 80\n          responseForwarding:\n            flushInterval: 1ms\n          scheme: https\n          # \u7c98\u6027\u914d\u7f6e\n          sticky:\n            cookie:\n              httpOnly: true\n              name: cookie\n              secure: true\n              sameSite: none\n          # \u8d1f\u8f7d\u7b56\u7565\n          strategy: RoundRobin\n          weight: 10\n  # TLS\n  tls:\n    # \u5bc6\u94a5\u4fe1\u606f\n    secretName: supersecret\n    # TLSOption\n    options:\n      name: opt\n      namespace: default\n    certResolver: foo # CertResolver\n    domains: # TLS \u57df\u540d\n      - main: example.net\n        sans:\n          - a.example.net\n          - b.example.net\n")),(0,r.kt)("h2",c({},{id:"ingress"}),"Ingress"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/containous/traefik/tree/v2.2/pkg/provider/kubernetes/ingress/fixtures"}),"\u793a\u4f8b\u8d44\u6e90\u914d\u7f6e")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://docs.traefik.io/routing/providers/kubernetes-ingress/"}),"Kubernetes Ingress Controller"))),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-yaml"}),"# \u5168\u5c40\u9ed8\u8ba4\napiVersion: networking.k8s.io/v1beta1\nkind: Ingress\nmetadata:\n  name: cheese\nspec:\n  backend:\n    serviceName: stilton\n    servicePort: 80\n\n---\napiVersion: v1\nkind: Service\nmetadata:\n  name: whoami\n  annotations:\n    # \u4fee\u6539 schema\uff1a http h2c https\n    traefik.ingress.kubernetes.io/service.serversscheme: https\n    # \u900f\u4f20 \u5934\n    traefik.ingress.kubernetes.io/service.passhostheader: 'true'\n    # \u7c98\u6027\u914d\u7f6e\n    traefik.ingress.kubernetes.io/service.sticky: 'true'\n    traefik.ingress.kubernetes.io/service.sticky.cookie.name: foobar\n    traefik.ingress.kubernetes.io/service.sticky.cookie.secure: 'true'\n    traefik.ingress.kubernetes.io/service.sticky.cookie.samesite: 'none'\n    traefik.ingress.kubernetes.io/service.sticky.cookie.httponly: 'true'\nspec:\n  type: LoadBalancer\n  selector:\n    app: whoami\n  ports:\n    - protocol: TCP\n      port: 80\n      name: web\n      targetPort: 80\n\n---\nkind: Ingress\napiVersion: networking.k8s.io/v1beta1\nmetadata:\n  name: myingress\n  annotations:\n    # \u7ec8\u7aef\n    traefik.ingress.kubernetes.io/router.entrypoints: web,websecure\n    # \u4e2d\u95f4\u4ef6\n    traefik.ingress.kubernetes.io/router.middlewares: <namespace>-<name>@kubernetescrd,cb@file\n    # \u4f18\u5148\u7ea7\n    traefik.ingress.kubernetes.io/router.priority: '42'\n    # \u8def\u5f84\u5339\u914d\u65b9\u5f0f Path, PathPrefix\n    traefik.ingress.kubernetes.io/router.pathmatcher: PathPrefix\n\n    # \u662f\u5426 TLS\n    traefik.ingress.kubernetes.io/router.tls: 'true'\n    # \u89e3\u6790 TLS \u65b9\u5f0f\n    traefik.ingress.kubernetes.io/router.tls.certresolver: myresolver\n    # TLS \u7684 SNI \u57df\u540d\n    traefik.ingress.kubernetes.io/router.tls.domains.0.main: example.org\n    traefik.ingress.kubernetes.io/router.tls.domains.0.sans: test.example.org,dev.example.org\n    traefik.ingress.kubernetes.io/router.tls.options: foobar\n\nspec:\n  # \u8bc1\u4e66\n  tls:\n    - secretName: supersecret\n  rules:\n    - host: example.com\n      http:\n        paths:\n          - path: /bar\n            backend:\n              serviceName: whoami\n              servicePort: 80\n")),(0,r.kt)("h2",c({},{id:"cert-manager"}),"Cert Manager"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",c({parentName:"li"},{href:"https://github.com/mmatur/traefik-cert-manager"}),"https://github.com/mmatur/traefik-cert-manager"))),(0,r.kt)("h2",c({},{id:"faq"}),"FAQ"),(0,r.kt)("h3",c({},{id:"cannot-create-service-subset-not-found"}),"Cannot create service: subset not found"),(0,r.kt)("h2",c({},{id:"tbd"}),"TBD"),(0,r.kt)("p",null,(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.traefik.io/routing/providers/kubernetes-ingress/"}),"https://docs.traefik.io/routing/providers/kubernetes-ingress/"),"\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/rancher/k3s/issues/1141"}),"https://github.com/rancher/k3s/issues/1141"),"\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://github.com/containous/traefik-helm-chart"}),"https://github.com/containous/traefik-helm-chart"),"\n",(0,r.kt)("a",c({parentName:"p"},{href:"https://docs.traefik.io/getting-started/install-traefik/#use-the-helm-chart"}),"https://docs.traefik.io/getting-started/install-traefik/#use-the-helm-chart")),(0,r.kt)("pre",null,(0,r.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'kubectl port-forward $(kubectl get pods --selector "app.kubernetes.io/name=traefik" --output=name) 9000:9000\n')),(0,r.kt)("p",null,"ClusterRoleBinding"),(0,r.kt)("p",null,"error syncing 'traefik/traefik'\nhandler svccontroller: Operation cannot be fulfilled on \"svccontroller\": delaying object set, requeuing"),(0,r.kt)("p",null,"INOTIFY_USR"))}y.isMDXComponent=!0}}]);
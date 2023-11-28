"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[81439],{49613:function(e,n,t){t.d(n,{Zo:function(){return f},kt:function(){return m}});var r=t(59496);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function s(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)t=o[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var i=r.createContext({}),c=function(e){var n=r.useContext(i),t=n;return e&&(t="function"==typeof e?e(n):s(s({},n),e)),t},f=function(e){var n=c(e.components);return r.createElement(i.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},d=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,f=l(e,["components","mdxType","originalType","parentName"]),u=c(t),d=a,m=u["".concat(i,".").concat(d)]||u[d]||p[d]||o;return t?r.createElement(m,s(s({ref:n},f),{},{components:t})):r.createElement(m,s({ref:n},f))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var o=t.length,s=new Array(o);s[0]=d;var l={};for(var i in n)hasOwnProperty.call(n,i)&&(l[i]=n[i]);l.originalType=e,l[u]="string"==typeof e?e:a,s[1]=l;for(var c=2;c<o;c++)s[c]=t[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,t)}d.displayName="MDXCreateElement"},33259:function(e,n,t){t.r(n),t.d(n,{assets:function(){return b},contentTitle:function(){return k},default:function(){return h},frontMatter:function(){return m},metadata:function(){return g},toc:function(){return y}});var r=t(49613),a=Object.defineProperty,o=Object.defineProperties,s=Object.getOwnPropertyDescriptors,l=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,c=Object.prototype.propertyIsEnumerable,f=(e,n,t)=>n in e?a(e,n,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[n]=t,u=(e,n)=>{for(var t in n||(n={}))i.call(n,t)&&f(e,t,n[t]);if(l)for(var t of l(n))c.call(n,t)&&f(e,t,n[t]);return e},p=(e,n)=>o(e,s(n)),d=(e,n)=>{var t={};for(var r in e)i.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&l)for(var r of l(e))n.indexOf(r)<0&&c.call(e,r)&&(t[r]=e[r]);return t};const m={title:"skaffold"},k="skaffold",g={unversionedId:"devops/kubernetes/dev/skaffold",id:"devops/kubernetes/dev/skaffold",title:"skaffold",description:"- skaffold",source:"@site/../notes/devops/kubernetes/dev/skaffold.md",sourceDirName:"devops/kubernetes/dev",slug:"/devops/kubernetes/dev/skaffold",permalink:"/notes/devops/kubernetes/dev/skaffold",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/dev/skaffold.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1634309581,formattedLastUpdatedAt:"Oct 15, 2021",frontMatter:{title:"skaffold"},sidebar:"docs",previous:{title:"DevSpace",permalink:"/notes/devops/kubernetes/dev/devspace"},next:{title:"telepresence",permalink:"/notes/devops/kubernetes/dev/telepresence"}},b={},y=[],O={toc:y},v="wrapper";function h(e){var n=e,{components:t}=n,a=d(n,["components"]);return(0,r.kt)(v,p(u(u({},O),a),{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"skaffold"}),"skaffold"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"skaffold",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"source to kubernetes \u5de5\u5177"),(0,r.kt)("li",{parentName:"ul"},"building, pushing, deploying"))),(0,r.kt)("li",{parentName:"ul"},"SKAFFOLD_INSECURE_REGISTRY"),(0,r.kt)("li",{parentName:"ul"},"SKAFFOLD_DEFAULT_REPO")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# macOS\nbrew install skaffold\n# \u624b\u52a8\u5b89\u88c5\ncurl -Lo skaffold https://storage.googleapis.com/skaffold/releases/latest/skaffold-darwin-amd64 && \\\nsudo install skaffold /usr/local/bin/\n\nskaffold config set --global collect-metrics false\n\n# \u9879\u76ee\u521d\u59cb\u5316 - \u751f\u6210 skaffold.yaml\n# \u81ea\u52a8\u68c0\u6d4b Dockerfile\u3001K8S \u548c\u8bed\u8a00\u73af\u5883\nskaffold init\n\n# \u7aef\u5230\u7aef\u64cd\u4f5c\nskaffold dev\nskaffold run\nskaffold debug\n\n# CI/CD \u64cd\u4f5c\nskaffold build\nskaffold test\nskaffold deploy\nskaffold render\nskaffold apply\nskaffold delete\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),'apiVersion: skaffold/v2beta19\nkind: Config\nmetadata:\n  name: skaffold\n# \u6784\u5efa\nbuild:\n  artifacts:\n    - image: skaffold-example\n      # \u53ef\u4ee5\u5305\u542b\u4ed3\u5e93\u540d\u5b57\n      # image: gcr.io/k8s-skaffold/example\n      docker:\n        dockerfile: Dockerfile\n      # \u4f9d\u8d56\n      requires:\n        - image: image2\n          # build-arg\n          alias: IMAGE2\n      context:\n      # \u6587\u4ef6\u540c\u6b65\n      sync:\n        manual:\n          - src: \'content/en/**/*.md\'\n            dest: content\n            strip: \'content/en/\'\n        # \u4ece Dockerfile \u63a8\u5bfc\n        infer: []\n        auto: true # buildpacks & Jib\n        hooks: { before: {}, after: {} }\n      # \u751f\u547d\u5468\u671f Hook\n      hooks:\n        before:\n          - command: []\n            os: [ darwin, linux, windows ]\n        after:\n    - image: image2\n      # \u914d\u7f6e\u4e3a\u4f7f\u7528 kaniko\n      kaniko:\n        reproducible: true\n        dockerfile: Dockerfile\n        # \u9ed8\u8ba4\u955c\u50cf\u65e0\u6cd5\u8bbf\u95ee\n        # initImage: gcr.io/k8s-skaffold/skaffold-helpers/busybox\n        # image: gcr.io/kaniko-project/executor\n        # \u4f7f\u7528\u955c\u50cf\n        initImage: registry.cn-hongkong.aliyuncs.com/cmi/k8s-skaffold_skaffold-helpers_busybox\n        image: registry.cn-hongkong.aliyuncs.com/cmi/kaniko-project_executor\n        useNewRun: false # \u5b9e\u9a8c\u6027\u8d28 - \u53ef\u63d0\u901f 75%\n        cache:\n          repo: # \u9ed8\u8ba4\u4f1a\u81ea\u884c\u63a8\u6d4b\n          hostPath: # \u8981\u6c42\u9884\u5148\u5b58\u5728 - kaniko-warmer\n          ttl: # \u7f13\u5b58\u5931\u6548 - \u5355\u4f4d\u5c0f\u65f6\n    - image: image1\n      # \u81ea\u5b9a\u4e49\u6784\u5efa\n      # \u73af\u5883\u53d8\u91cf IMAGE PUSH_IMAGE BUILD_CONTEXT\n      # \u96c6\u7fa4\u53d8\u91cf KUBECONTEXT NAMESPACE PULL_SECRET_NAME DOCKER_CONFIG_SECRET_NAME TIMEOUT\n      custom:\n        buildCommand: docker build --build-arg IMG2 .\n        # \u6587\u4ef6\u4f9d\u8d56\n        dependencies:\n          dockerfile:\n            path:\n            buildArgs: {}\n          # \u8f93\u51fa\u4f9d\u8d56\u6587\u4ef6\u540d\u5b57\n          command:\n          paths: []\n          ignore: []\n  # \u672c\u5730 Docker \u914d\u7f6e\n  local:\n    # \u9ed8\u8ba4\u4f7f\u7528 engine api\n    useDockerCLI: false\n    useBuildkit: false\n    # 0 \u4e3a\u4e0d\u9650\u5236\n    concurrency: 1\n    # \u63a8\u9001\u5230\u4ed3\u5e93\n    push:\n    tryImportMissing: false\n\n  # Kaniko Cluster \u914d\u7f6e\n  cluster:\n    # \u62c9 Secret\n    pullSecretName: kaniko-secret\n    # OR\n    pullSecretPath: path-to-service-account-key-file\n    pullSecretMountPath:\n    namespace:\n    # \u63a8 Secret\n    dockerConfig:\n      path: ~/.docker/config.json # \u4f7f\u7528\u672c\u5730\n      # OR\n      # \u4e0d\u80fd\u662f kubernetes.io/dockerconfigjson\n      # \u7528 opaque \u4e14 key \u4e3a config.json\n      secretName: docker-config-secret-in-kubernetes\n    serviceAccount:\n    tolerations:\n    randomPullSecret:\n    randomDockerConfigSecret:\n\n  # Tag \u7b56\u7565\n  tagPolicy:\n    gitCommit: {}\n    inputDigest: {}\n    # latest\n    sha256: {}\n    envTemplate:\n      template: "{{.FOO}}"\n    dateTime:\n      format: "2006-01-02_15-04-05.999_MST"\n      timezone: "Local"\n    customTemplate:\n      template: "{{.FOO}}_{{.BAR}}"\n      components:\n      - name: FOO\n        dateTime:\n          format: "2006-01-02"\n          timezone: "UTC"\n      - name: BAR\n        gitCommit:\n          variant: AbbrevCommitSha\n\n# \u90e8\u7f72\ndeploy:\n  # Kubectl \u90e8\u7f72\n  kubectl:\n    # \u90e8\u7f72\u6e05\u5355 - \u652f\u6301\u901a\u914d\n    manifests:\n      - ["k8s/*.yaml"]\n    remoteManifests: []\n    # \u4e0d\u540c\u547d\u4ee4\u7684\u989d\u5916 flag\n    flags:\n      global: []\n      apply: []\n      delete: []\n      disableValidation: false\n    defaultNamespace:\n\n  # kustomize \u90e8\u7f72\n  kustomize:\n    paths: [\'.\']\n    flags: # \u548c kubectl flags \u76f8\u540c\n    buildArgs:\n    defaultNamespace:\n\n  # helm \u90e8\u7f72\n  helm:\n    releases:\n      - name: my-chart\n        chartPath: helm\n        remoteChat:\n        valuesFiles: []\n        artifactOverrides:\n          imageKey: gcr.io/my-project/my-image\n        namespace:\n        version:\n        setValues: {}\n        setValueTemplates: {}\n        setFiles: {}\n        createNamespace: false\n        wait: false\n        recreatePods: false\n        skipBuildDependencies: false\n        useHelmSecrets: false\n        # --repo\n        repo:\n        # chartPath \u9ed8\u8ba4 false  remoteChart \u9ed8\u8ba4 true\n        upgradeOnChange:\n        # --f\n        overrides:\n        # helm package \u53c2\u6570\n        packaged:\n        # ArtifactOverrides \u7b56\u7565\n        imageStrategy:\n          fqn: {} # \u9ed8\u8ba4 \u63d0\u4f9b\u5b8c\u6574\u7684 image\n          helm: {} # \u63d0\u4f9b\u989d\u5916\u7684 repo \u5b57\u6bb5 imageKey.repository:imageKey.tag\n          helm:\n            # {key}.registry, {key}.repository, {key}.tag\n            explicitRegistry: true\n\n# \u6d4b\u8bd5\ntest:\n  - image: gcr.io/k8s-skaffold/skaffold-example\n    # \u68c0\u6d4b\u6587\u4ef6\u662f\u5426\u5b58\u5728 \u7ed3\u6784\u662f\u5426\u6b63\u786e\n    structureTests:\n      - \'./structure-test/*\'\n    structureTestsArgs:\n  - image: custom-test-example\n    # \u81ea\u5b9a\u4e49\u6d4b\u8bd5\n    command: ./test.sh\n\n# \u591a\u73af\u5883\ndeploy:\n  # \u9ed8\u8ba4\u90e8\u7f72\u4e0a\u4e0b\u6587\n  kubeContext: minikube\n# skaffold run -p profile-1,profile-2\nprofiles:\n  - name: profile-1\n    deploy:\n      kubeContext: docker-for-desktop\n  - name: profile-2\n    activation:\n      - kubeContext: minikube\n')),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"structure-test/test.yaml")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-yaml"}),"schemaVersion: 2.0.0\n\nfileExistenceTests:\n  - name: 'no go binary'\n    path: '/usr/bin/go'\n    shouldExist: false\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-dockerfile",metastring:'title="Dockerfile"',title:'"Dockerfile"'}),'FROM golang:1.16 as builder\nCOPY main.go .\n# `skaffold debug` sets SKAFFOLD_GO_GCFLAGS to disable compiler optimizations\nARG SKAFFOLD_GO_GCFLAGS\nRUN go build -gcflags="${SKAFFOLD_GO_GCFLAGS}" -o /app main.go\n\nFROM alpine:3\n# Define GOTRACEBACK to mark this container as using the Go language runtime\n# for `skaffold debug` (https://skaffold.dev/docs/workflows/debug/).\nENV GOTRACEBACK=single\nCMD ["./app"]\nCOPY --from=builder /app .\n')))}h.isMDXComponent=!0}}]);
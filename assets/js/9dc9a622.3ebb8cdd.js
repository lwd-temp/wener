"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[1415],{49613:function(e,t,r){r.d(t,{Zo:function(){return p},kt:function(){return m}});var n=r(59496);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function a(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),u=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=u(e.components);return n.createElement(s.Provider,{value:t},e.children)},c="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,l=e.originalType,s=e.parentName,p=a(e,["components","mdxType","originalType","parentName"]),c=u(r),d=o,m=c["".concat(s,".").concat(d)]||c[d]||k[d]||l;return r?n.createElement(m,i(i({ref:t},p),{},{components:r})):n.createElement(m,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var l=r.length,i=new Array(l);i[0]=d;var a={};for(var s in t)hasOwnProperty.call(t,s)&&(a[s]=t[s]);a.originalType=e,a[c]="string"==typeof e?e:o,i[1]=a;for(var u=2;u<l;u++)i[u]=r[u];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"},35496:function(e,t,r){r.r(t),r.d(t,{assets:function(){return b},contentTitle:function(){return f},default:function(){return N},frontMatter:function(){return m},metadata:function(){return v},toc:function(){return g}});var n=r(49613),o=Object.defineProperty,l=Object.defineProperties,i=Object.getOwnPropertyDescriptors,a=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,u=Object.prototype.propertyIsEnumerable,p=(e,t,r)=>t in e?o(e,t,{enumerable:!0,configurable:!0,writable:!0,value:r}):e[t]=r,c=(e,t)=>{for(var r in t||(t={}))s.call(t,r)&&p(e,r,t[r]);if(a)for(var r of a(t))u.call(t,r)&&p(e,r,t[r]);return e},k=(e,t)=>l(e,i(t)),d=(e,t)=>{var r={};for(var n in e)s.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&a)for(var n of a(e))t.indexOf(n)<0&&u.call(e,n)&&(r[n]=e[n]);return r};const m={tags:["FAQ"]},f="K0S FAQ",v={unversionedId:"devops/kubernetes/distro/k0s/k0s-faq",id:"devops/kubernetes/distro/k0s/k0s-faq",title:"K0S FAQ",description:"kubeconfig",source:"@site/../notes/devops/kubernetes/distro/k0s/k0s-faq.md",sourceDirName:"devops/kubernetes/distro/k0s",slug:"/devops/kubernetes/distro/k0s/faq",permalink:"/notes/devops/kubernetes/distro/k0s/faq",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/devops/kubernetes/distro/k0s/k0s-faq.md",tags:[{label:"FAQ",permalink:"/notes/tags/faq"}],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1688543048,formattedLastUpdatedAt:"Jul 5, 2023",frontMatter:{tags:["FAQ"]},sidebar:"docs",previous:{title:"k0s",permalink:"/notes/devops/kubernetes/distro/k0s/"},next:{title:"k0sctl",permalink:"/notes/devops/kubernetes/distro/k0s/k0sctl"}},b={},g=[{value:"kubeconfig",id:"kubeconfig",level:2},{value:"\u624b\u52a8\u4e0b\u8f7d\u5b89\u88c5",id:"\u624b\u52a8\u4e0b\u8f7d\u5b89\u88c5",level:2},{value:"Control plane vs. Worker",id:"control-plane-vs-worker",level:2},{value:"konnectivity-server.sock: socket: too many open files",id:"konnectivity-serversock-socket-too-many-open-files",level:2},{value:"cgroups: cgroup deleted: unknown",id:"cgroups-cgroup-deleted-unknown",level:2},{value:"Failed to run kubelet failed to run Kubelet: mountpoint for cpu not found",id:"failed-to-run-kubelet-failed-to-run-kubelet-mountpoint-for-cpu-not-found",level:2},{value:"cni plugin not initialized",id:"cni-plugin-not-initialized",level:2},{value:"no IP ranges specified",id:"no-ip-ranges-specified",level:2},{value:"kube-router Failed to watch i/o timeout",id:"kube-router-failed-to-watch-io-timeout",level:2},{value:"k0s controller --single vs --enable-worker",id:"k0s-controller---single-vs---enable-worker",level:2},{value:"konnectivity-server.sock: bind: address already in use",id:"konnectivity-serversock-bind-address-already-in-use",level:2},{value:"failed to get initial kubelet config with join token: failed to get kubelet config from API: Unauthorized&quot;",id:"failed-to-get-initial-kubelet-config-with-join-token-failed-to-get-kubelet-config-from-api-unauthorized",level:2},{value:"coredns fatal plugin/loop: Loop detected for zone",id:"coredns-fatal-pluginloop-loop-detected-for-zone",level:2},{value:"kill all",id:"kill-all",level:2},{value:"\u7f51\u7edc\u914d\u7f6e\u95ee\u9898",id:"\u7f51\u7edc\u914d\u7f6e\u95ee\u9898",level:2},{value:"Error while reading from Writer: bufio.Scanner: token too long  component=kubelet",id:"error-while-reading-from-writer-bufioscanner-token-too-long--componentkubelet",level:2},{value:"\u624b\u52a8\u542f\u52a8",id:"\u624b\u52a8\u542f\u52a8",level:2},{value:"failed to run kube-router: Failed to create network routing controller: failed to determine if ipset set kube-router-pod-subnets exists: ipset v7.15: Kernel error received: Invalid argument",id:"failed-to-run-kube-router-failed-to-create-network-routing-controller-failed-to-determine-if-ipset-set-kube-router-pod-subnets-exists-ipset-v715-kernel-error-received-invalid-argument",level:2},{value:"failed to reserve container name  is reserved for",id:"failed-to-reserve-container-name--is-reserved-for",level:2}],h={toc:g},y="wrapper";function N(e){var t=e,{components:r}=t,o=d(t,["components"]);return(0,n.kt)(y,k(c(c({},h),o),{components:r,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"k0s-faq"}),"K0S FAQ"),(0,n.kt)("h2",c({},{id:"kubeconfig"}),"kubeconfig"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"cat /var/lib/k0s/pki/admin.conf\n")),(0,n.kt)("h2",c({},{id:"\u624b\u52a8\u4e0b\u8f7d\u5b89\u88c5"}),"\u624b\u52a8\u4e0b\u8f7d\u5b89\u88c5"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'ver=$(curl https://docs.k0sproject.io/stable.txt)\ncurl -LO "https://ghproxy.com/https://github.com/k0sproject/k0s/releases/download/${ver}/k0s-${ver}-amd64"\nchmod 755 k0s-${ver}-amd64\ncp $(which k0s) k0s.last\nsudo mkdir -p /usr/local/bin/\nsudo cp k0s-${ver}-amd64 /usr/local/bin/k0s\n\ncurl -LOC- "https://ghproxy.com/https://github.com/k0sproject/k0s/releases/download/${ver}/k0s-airgap-bundle-${ver}-amd64"\nmkdir -p /var/lib/k0s/images\nsudo cp k0s-airgap-bundle-${ver}-amd64 /var/lib/k0s/images/bundle_file\n\nsudo k0s sysinfo\n')),(0,n.kt)("h2",c({},{id:"control-plane-vs-worker"}),"Control plane vs. Worker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Control plane",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u4f5c\u4e3a\u5176\u4ed6\u7ec4\u5efa\u7684 \u5b88\u62a4\u8fdb\u7a0b/supervisor - \u4e0d\u8c03\u5ea6\u5de5\u4f5c\u8d1f\u8f7d"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u5bb9\u5668\u5f15\u64ce\u3001kubelet"),(0,n.kt)("li",{parentName:"ul"},"kubectl get node \u770b\u4e0d\u5230"),(0,n.kt)("li",{parentName:"ul"},"\u7ef4\u62a4 kine/etcd, api-server, scheduler, controller-manager, konnectivity-server, k0s-api"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://docs.k0sproject.io/main/high-availability/"}),"Control Plane High Availability")))),(0,n.kt)("li",{parentName:"ul"},"Worker",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8fd0\u884c kubelet"),(0,n.kt)("li",{parentName:"ul"},"\u4f9d\u8d56 cri - \u9ed8\u8ba4\u4f60 containerd+runc"),(0,n.kt)("li",{parentName:"ul"},"\u8c03\u5ea6\u5de5\u4f5c\u8d1f\u8f7d")))),(0,n.kt)("h2",c({},{id:"konnectivity-serversock-socket-too-many-open-files"}),"konnectivity-server.sock: socket: too many open files"),(0,n.kt)("p",null,"\u68c0\u67e5 ulimit"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"cat /proc/$(pidof konnectivity-server)/limits\n# \u5f53\u524d\u6253\u5f00\u6587\u4ef6\u6570\nls /proc/$(pidof konnectivity-server)/fd | wc -l\n")),(0,n.kt)("h2",c({},{id:"cgroups-cgroup-deleted-unknown"}),"cgroups: cgroup deleted: unknown"),(0,n.kt)("h2",c({},{id:"failed-to-run-kubelet-failed-to-run-kubelet-mountpoint-for-cpu-not-found"}),"Failed to run kubelet failed to run Kubelet: mountpoint for cpu not found"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"ls /sys/fs/cgroup\nservice cgroups start\n")),(0,n.kt)("h2",c({},{id:"cni-plugin-not-initialized"}),"cni plugin not initialized"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"false reason:NetworkPluginNotReady message:Network plugin returns error: cni plugin not initialized\n")),(0,n.kt)("p",null,"\u68c0\u67e5 kube-proxy pod \u662f\u5426\u542f\u52a8"),(0,n.kt)("h2",c({},{id:"no-ip-ranges-specified"}),"no IP ranges specified"),(0,n.kt)("h2",c({},{id:"kube-router-failed-to-watch-io-timeout"}),"kube-router Failed to watch i/o timeout"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),'Failed to watch *v1.Node: failed to list *v1.Node: Get "https://10.96.0.1:443/api/v1/nodes?limit=500&resourceVersion=0": dial tcp 10.96.0.1:443: i/o timeout\n')),(0,n.kt)("h2",c({},{id:"k0s-controller---single-vs---enable-worker"}),"k0s controller --single vs --enable-worker"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"--single",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u51cf\u5c11\u90e8\u5206 leader \u9009\u53d6\u903b\u8f91"),(0,n.kt)("li",{parentName:"ul"},"\u4e0d\u53ef\u4ee5\u6dfb\u52a0 worker"),(0,n.kt)("li",{parentName:"ul"},"etcd \u9ed8\u8ba4\u4f7f\u7528 kine - \u53ef\u914d\u7f6e\u4f7f\u7528 etcd"))),(0,n.kt)("li",{parentName:"ul"},"--enable-worker",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6b63\u5e38\u8282\u70b9"),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u540e\u7eed\u6dfb\u52a0 worker")))),(0,n.kt)("h2",c({},{id:"konnectivity-serversock-bind-address-already-in-use"}),"konnectivity-server.sock: bind: address already in use"),(0,n.kt)("p",null,"\u5982\u679c\u6ca1\u6709\u88ab\u4f7f\u7528\uff0c\u5219\u53ef\u4ee5\u5b89\u5168\u5220\u9664"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"sudo lsof -f -- /run/k0s/konnectivity-server/konnectivity-server.sock\nunlink /run/k0s/konnectivity-server/konnectivity-server.sock\n")),(0,n.kt)("p",null,"\u5982\u679c\u88ab\u4f7f\u7528\u4e86\uff0c\u5219\u8003\u8651\u4e4b\u524d\u7684 process \u662f\u5426\u672a\u6b63\u5e38\u9000\u51fa\uff0ckill \u5373\u53ef\u3002"),(0,n.kt)("h2",c({},{id:"failed-to-get-initial-kubelet-config-with-join-token-failed-to-get-kubelet-config-from-api-unauthorized"}),'failed to get initial kubelet config with join token: failed to get kubelet config from API: Unauthorized"'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u542f\u52a8\u5931\u8d25\uff0c\u505c\u6b62\uff0c\u518d\u6b21\u542f\u52a8\u65f6\u53ef\u80fd\u53d1\u751f"),(0,n.kt)("li",{parentName:"ul"},"kubelet \u7684 token \u6709\u65f6\u6548\uff0c\u53ef\u80fd\u5df2\u7ecf\u8fc7\u671f\u4e86\uff0c\u53ef\u5220\u9664\u91cd\u542f\uff0c\u4f1a\u91cd\u65b0\u521b\u5efa")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"k0s stop\nrm /var/lib/k0s/kubelet-bootstrap.conf\nk0s start\n")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/k0sproject/k0s/issues/1524#issuecomment-1044287529"}),"https://github.com/k0sproject/k0s/issues/1524#issuecomment-1044287529"))),(0,n.kt)("h2",c({},{id:"coredns-fatal-pluginloop-loop-detected-for-zone"}),"coredns fatal plugin/loop: Loop detected for zone"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5faa\u73af resolve \u68c0\u6d4b - \u4e00\u822c\u662f /etc/resolv.conf \u914d\u7f6e\u4e86 127.0.0.1 \u5bfc\u81f4"),(0,n.kt)("li",{parentName:"ul"},"\u4fee\u6539 /etc/resolv.conf \u7136\u540e\u5220\u9664 pod \u5373\u53ef"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://coredns.io/plugins/loop/"}),"https://coredns.io/plugins/loop/"))),(0,n.kt)("h2",c({},{id:"kill-all"}),"kill all"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"k0s stop\n# \u5e94\u8be5 pkill \u6740\u6389\u8fdb\u7a0b\u6811\n# killall /var/lib/k0s/bin/containerd-shim-runc-v2\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"containerd-shim \u6b8b\u7559 ",(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/containerd/containerd/issues/768"}),"containerd#768")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/kubernetes-sigs/kubespray/blob/master/roles/container-engine/docker/files/cleanup-docker-orphans.sh"}),"kubespray/roles/container-engine/docker/files/cleanup-docker-orphans"))),(0,n.kt)("h2",c({},{id:"\u7f51\u7edc\u914d\u7f6e\u95ee\u9898"}),"\u7f51\u7edc\u914d\u7f6e\u95ee\u9898"),(0,n.kt)("p",null,"\u56e0\u4e3a\u670d\u52a1\u5668\u6709\u591a lan\uff0c\u914d\u7f6e\u4e86\u8def\u7531\u7b56\u7565\uff0c\u4ece 10gbe \u8fdb\u6765\u7684\u4ece 10gbe \u51fa\u53bb"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"auto eth4\niface eth4 inet static\n  address 192.168.1.10\n  netmask 255.255.252.0\n  gateway 192.168.1.1\n  mtu 9000\n  pre-up ip ro li tab tgbe &>/dev/null || echo '10 tgbe' >> /etc/iproute2/rt_tables\n  post-up ip ru add from 192.168.1.10 table tgbe\n  post-up ip ro add default via 192.168.76.1 dev eth4 table tgbe\n")),(0,n.kt)("p",null,"\u5bfc\u81f4 kube \u65e0\u6cd5\u81ea\u8eab\u8bbf\u95ee\u5230 api\uff0c\u56e0\u4e3a\u4e0d\u518d\u4e00\u4e2a\u8def\u7531\u8868\u91cc\uff0c\u65e0\u6cd5\u4ece 192.168.1.10 \u8bbf\u95ee\u5230 10.96.0.1\u3002"),(0,n.kt)("p",null,"\u79fb\u9664\u89c4\u5219\u540e\u5219\u4e00\u5207\u6062\u590d\u6b63\u5e38\u3002"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"ip ru del from 192.168.1.10\n")),(0,n.kt)("h2",c({},{id:"error-while-reading-from-writer-bufioscanner-token-too-long--componentkubelet"}),"Error while reading from Writer: bufio.Scanner: token too long  component=kubelet"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"ps aux | grep keubelt\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/k0sproject/k0s/issues/2669"}),"k0sproject/k0s#2669"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"fix v1.25.6+"))),(0,n.kt)("li",{parentName:"ul"},"\u6709\u53ef\u80fd configmap \u592a\u5927\u5bfc\u81f4"),(0,n.kt)("li",{parentName:"ul"},"k0s v1.23 - \u91cd\u542f\u540e\u65e0\u6cd5\u518d\u542f\u52a8"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("strong",{parentName:"li"},"\u7cfb\u7edf\u91cd\u542f\u540e\u89e3\u51b3"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u518d\u6b21\u91cd\u542f k0s \u51fa\u73b0\u76f8\u540c\u95ee\u9898")))),(0,n.kt)("h2",c({},{id:"\u624b\u52a8\u542f\u52a8"}),"\u624b\u52a8\u542f\u52a8"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"sudo k0s controller --config=/etc/k0s/k0s.yaml --enable-dynamic-config=true --enable-worker=true\n")),(0,n.kt)("h2",c({},{id:"failed-to-run-kube-router-failed-to-create-network-routing-controller-failed-to-determine-if-ipset-set-kube-router-pod-subnets-exists-ipset-v715-kernel-error-received-invalid-argument"}),"failed to run kube-router: Failed to create network routing controller: failed to determine if ipset set kube-router-pod-subnets exists: ipset v7.15: Kernel error received: Invalid argument"),(0,n.kt)("h2",c({},{id:"failed-to-reserve-container-name--is-reserved-for"}),"failed to reserve container name  is reserved for"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/containerd/containerd/issues/4604#issuecomment-1027293621"}),"https://github.com/containerd/containerd/issues/4604#issuecomment-1027293621"))))}N.isMDXComponent=!0}}]);
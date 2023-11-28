"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[87514],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return k}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var u=r.createContext({}),o=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return r.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,u=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),m=o(n),f=a,k=m["".concat(u,".").concat(f)]||m[f]||c[f]||i;return n?r.createElement(k,l(l({ref:t},p),{},{components:n})):r.createElement(k,l({ref:t},p))}));function k(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,l=new Array(i);l[0]=f;var s={};for(var u in t)hasOwnProperty.call(t,u)&&(s[u]=t[u]);s.originalType=e,s[m]="string"==typeof e?e:a,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},87582:function(e,t,n){n.r(t),n.d(t,{assets:function(){return h},contentTitle:function(){return d},default:function(){return x},frontMatter:function(){return k},metadata:function(){return N},toc:function(){return g}});var r=n(49613),a=Object.defineProperty,i=Object.defineProperties,l=Object.getOwnPropertyDescriptors,s=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,o=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&p(e,n,t[n]);if(s)for(var n of s(t))o.call(t,n)&&p(e,n,t[n]);return e},c=(e,t)=>i(e,l(t)),f=(e,t)=>{var n={};for(var r in e)u.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&s)for(var r of s(e))t.indexOf(r)<0&&o.call(e,r)&&(n[r]=e[r]);return n};const k={title:"NFS"},d="NFS",N={unversionedId:"os/linux/fs/nfs",id:"os/linux/fs/nfs",title:"NFS",description:"- \u5141\u8bb8\u672c\u5730\u8bbf\u95ee\u8fdc\u7a0b\u6587\u4ef6",source:"@site/../notes/os/linux/fs/nfs.md",sourceDirName:"os/linux/fs",slug:"/os/linux/fs/nfs",permalink:"/notes/os/linux/fs/nfs",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/linux/fs/nfs.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1660892989,formattedLastUpdatedAt:"Aug 19, 2022",frontMatter:{title:"NFS"},sidebar:"docs",previous:{title:"KSMBD",permalink:"/notes/os/linux/fs/ksmbd"},next:{title:"NTFS",permalink:"/notes/os/linux/fs/ntfs"}},h={},g=[{value:"nfs-utils",id:"nfs-utils",level:2},{value:"CacheFS",id:"cachefs",level:2},{value:"Ports",id:"ports",level:2},{value:"Awesome",id:"awesome",level:2}],b={toc:g},v="wrapper";function x(e){var t=e,{components:n}=t,a=f(t,["components"]);return(0,r.kt)(v,c(m(m({},b),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",m({},{id:"nfs"}),"NFS"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5141\u8bb8\u672c\u5730\u8bbf\u95ee\u8fdc\u7a0b\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 C/S \u7ed3\u6784\u5728 ",(0,r.kt)("inlineCode",{parentName:"li"},"*nix")," \u4e4b\u95f4\u5206\u4eab\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u4e24\u4e2a\u673a\u5668\u4e4b\u95f4\u4e0d\u9700\u8981\u5141\u8bb8\u76f8\u540c\u7684\u64cd\u4f5c\u7cfb\u7edf"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u4f7f\u7528 NSF \u6307\u5b9a\u4e2d\u5fc3\u5b58\u50a8\u89e3\u51b3\u65b9\u6848"),(0,r.kt)("li",{parentName:"ul"},"\u7528\u6237\u4e0d\u9700\u8981\u5173\u7cfb\u6587\u4ef6\u7684\u7269\u7406\u4f4d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},"\u4e0d\u9700\u8981\u624b\u52a8\u5237\u65b0\u6765\u663e\u793a\u6587\u4ef6"),(0,r.kt)("li",{parentName:"ul"},"\u65b0\u7248\u672c\u7684 NFS \u4e5f\u652f\u6301 ACL"),(0,r.kt)("li",{parentName:"ul"},"\u53ef\u7528\u8fc7\u9632\u706b\u5899\u548c Kerberos \u6765\u4fdd\u8bc1\u5b89\u5168"),(0,r.kt)("li",{parentName:"ul"},"\u9ed8\u8ba4 2049 \u7aef\u53e3"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528 Kerberos \u53ef\u4f7f\u7528\u5bc6\u7801\u8fdb\u884c\u9a8c\u8bc1"),(0,r.kt)("li",{parentName:"ul"},"showmount",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-e")," \u663e\u793a\u672c\u5730\u5171\u4eab"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-e <server-ip or hostname>")," \u663e\u793a\u8fdc\u7a0b\u5171\u4eab"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-d")," \u4f8b\u4e3e\u6240\u6709\u5b50\u76ee\u5f55"))),(0,r.kt)("li",{parentName:"ul"},"exportfs",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-v")," \u4f8b\u4e3e\u5171\u4eab\u7684\u6587\u4ef6\u548c\u9009\u9879"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-a")," \u5bfc\u51fa\u6240\u6709 ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/exports")," \u4e2d\u7684\u5171\u4eab\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-u")," \u53d6\u6d88\u5171\u4eab ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/exports")," \u4e2d\u7684\u914d\u7f6e"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-r")," \u5728\u4fee\u6539 ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/exports")," \u540e\u5237\u65b0\u670d\u52a1\u5171\u4eab\u5217\u8868"))),(0,r.kt)("li",{parentName:"ul"},"AlpineLinux ",(0,r.kt)("a",m({parentName:"li"},{href:"https://wiki.alpinelinux.org/wiki/Setting_up_a_nfs-server"}),"Setting up a nfs-server")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://access.redhat.com/documentation/en-US/Red_Hat_Enterprise_Linux/5/html/Deployment_Guide/s1-nfs-server-config-exports.html"}),"/etc/exports")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"http://kodi.wiki/view/NFS"}),"http://kodi.wiki/view/NFS")),(0,r.kt)("li",{parentName:"ul"},"ArchLinux ",(0,r.kt)("a",m({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/NFS"}),"NFS"),"/",(0,r.kt)("a",m({parentName:"li"},{href:"https://wiki.archlinux.org/index.php/NFS_(%E7%AE%80%E4%BD%93%E4%B8%AD%E6%96%87)"}),"\u7b80\u4f53\u4e2d\u6587")),(0,r.kt)("li",{parentName:"ul"},"NFS \u672c\u8eab\u6ca1\u6709\u6388\u6743\u8bbf\u95ee\u673a\u5236, \u57fa\u672c\u53ea\u80fd\u9650\u5236 IP, \u548c Kerberos \u914d\u5408\u662f\u53ef\u4ee5\u7684"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://help.ubuntu.com/community/NFSv4Howto"}),"https://help.ubuntu.com/community/NFSv4Howto")),(0,r.kt)("li",{parentName:"ul"},"cifs \u76f8\u6bd4 NFS \u6709\u6388\u6743"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://serverfault.com/q/597254/190601"}),"SMB vs NFS authentication")),(0,r.kt)("li",{parentName:"ul"},"NFS \u5982\u679c\u611f\u89c9\u6709\u95ee\u9898\uff0c\u53ef\u4ee5\u5c1d\u8bd5\u4f7f\u7528 v3 \u7248\u672c ",(0,r.kt)("inlineCode",{parentName:"li"},"-o v3"))),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u5b89\u88c5\napk add nfs-utils\n# \u5f00\u673a\u524d\u542f\u52a8\u670d\u52a1\nrc-update add nfs\nrc-update add nfsmount\n# \u7acb\u5373\u542f\u52a8\u670d\u52a1\nrc-service nfs start\nrc-service nfsmount start\n\n# \u5171\u4eab\u8be5\u76ee\u5f55\nsudo mkdir -p /share\n# \u8d4b\u4e88\u5f53\u524d\u7528\u6237\u5171\u4eab\u76ee\u5f55\u6743\u9650\nsudo chown $USER /share\n\n\n# Linux\n# ========\necho '/nfsshare 192.168.0.101(rw,sync,no_root_squash)' | sudo tee /etc/exports\n\n\n\n# \u5982\u679c\u60f3\u8ba9\u5ba2\u6237\u7aef\u975e root \u8bbf\u95ee\u670d\u52a1\u7aef root \u4fe1\u606f, \u5219\u53ef\u4ee5\n# all_squash,anonuid=0,anongid=0\n# \u4f7f\u6240\u6709\u7528\u6237\u90fd\u4f5c\u4e3a\u533f\u540d\u7528\u6237,\u800c\u533f\u540d\u7528\u6237\u5219\u9ed8\u8ba4\u4e3a root\n# \u4e5f\u53ef\u4ee5\u6307\u5b9a\u4e3a\u7279\u5b9a\u7684\u7528\u6237,\u4f8b\u5982 id asterisk\n\n# macOS\n# ==========\necho '/share -network 192.168.0.0 -mask 255.255.0.0' | sudo tee /etc/exports\nnfsd enable\nnfsd start\nnfsd status\nnfsd checkexport\n\n# \u5982\u679c\u4fee\u6539\u4e86 exports \u6587\u4ef6\nnfsd update\nshowmount -e\n# \u67e5\u770b\u5171\u4eab\u76ee\u5f55\nshowmount -e 192.168.34.120\n\nmount -t nfs 192.168.0.100:/share /mnt/nfsshare\numount 192.168.0.100:/share\n\n# \u5173\u95ed nfs\nnfsd stop\nnfsd disable\n\n# \u5982\u679c mac \u4e0b mount \u51fa\u73b0 Operation not permitted, \u5219\u6dfb\u52a0 -o resvport\nmount -t nfs -o resvport 192.168.1.1:/ ~/mnt/alpine/\n")),(0,r.kt)("p",null,"mount.nfs: access denied by server while mounting\n-o v3"),(0,r.kt)("p",null,"nfsstat -m"),(0,r.kt)("p",null,"nfs://vers=4,10.0.10.26/srv"),(0,r.kt)("h2",m({},{id:"nfs-utils"}),"nfs-utils"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"/proc/fs/nfsd"),(0,r.kt)("li",{parentName:"ul"},"/proc/fs/nfs"),(0,r.kt)("li",{parentName:"ul"},"/etc/exports",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u5171\u4eab\u76ee\u5f55\u5b9a\u4e49"))),(0,r.kt)("li",{parentName:"ul"},"/usr/sbin/exportfs",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u7ba1\u7406\u5171\u4eab\u7684\u76ee\u5f55 - ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/nfs/etab")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-a")," \u5bfc\u51fa\u6240\u6709 - \u5c06 ",(0,r.kt)("inlineCode",{parentName:"li"},"/etc/exports")," \u540c\u6b65\u5230 ",(0,r.kt)("inlineCode",{parentName:"li"},"/var/lib/nfs/etab")," - \u66f4\u65b0\u5185\u6838\u7684\u5bfc\u51fa\u8868"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-u")," \u79fb\u9664\u4e00\u4e2a\u5bfc\u51fa ",(0,r.kt)("inlineCode",{parentName:"li"},"-au")," \u79fb\u9664\u6240\u6709\u5bfc\u51fa"),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"-f")," \u79fb\u9664\u6240\u6709"))),(0,r.kt)("li",{parentName:"ul"},"/sbin/rpc.statd",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u4ece\u5176\u5b83\u4e3b\u673a\u76d1\u542c\u91cd\u542f\u901a\u77e5"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u672c\u5730\u7cfb\u7edf\u91cd\u542f\uff0c\u7ba1\u7406\u88ab\u901a\u77e5\u7684\u4e3b\u673a\u5217\u8868"))),(0,r.kt)("li",{parentName:"ul"},"/usr/sbin/sm-notify",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u53d1\u9001\u91cd\u542f\u901a\u77e5\u5230 NFS \u7aef"))),(0,r.kt)("li",{parentName:"ul"},"/sbin/mount.nfs"),(0,r.kt)("li",{parentName:"ul"},"/sbin/umount.nfs"),(0,r.kt)("li",{parentName:"ul"},"/sbin/umount.nfs4"),(0,r.kt)("li",{parentName:"ul"},"/sbin/mount.nfs4"),(0,r.kt)("li",{parentName:"ul"},"/usr/sbin/showmount",(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"\u67e5\u770b\u6302\u8f7d\u4fe1\u606f")))),(0,r.kt)("p",null,"/sbin/nfsdcld\n/sbin/nfsdcltrack nfs-utils edge main x86_64"),(0,r.kt)("p",null,"/usr/sbin/showmount nfs-utils edge main x86_64\n/usr/sbin/rpc.nfsd nfs-utils edge main x86_64\n/usr/sbin/nfsidmap nfs-utils edge main x86_64\n/usr/sbin/start-statd nfs-utils edge main x86_64\n/usr/sbin/mountstats nfs-utils edge main x86_64\n/usr/sbin/rpc.svcgssd nfs-utils edge main x86_64\n/usr/sbin/blkmapd nfs-utils edge main x86_64\n/usr/sbin/nfsiostat nfs-utils edge main x86_64\n/usr/sbin/rpc.idmapd nfs-utils edge main x86_64\n/usr/sbin/rpc.gssd nfs-utils edge main x86_64\n/usr/sbin/nfsstat nfs-utils edge main x86_64\n/usr/sbin/rpc.mountd nfs-utils edge main x86_64\nnfs-utils edge main x86_64\n/usr/sbin/rpcdebug nfs-utils edge main x86_64"),(0,r.kt)("p",null,"/usr/sbin/nfsconf nfs-utils edge main x86_64\n/var/lib/nfs/rmtab nfs-utils edge main x86_64\n/var/lib/nfs/etab nfs-utils edge main x86_64\n/var/lib/nfs/state"),(0,r.kt)("h2",m({},{id:"cachefs"}),"CacheFS"),(0,r.kt)("p",null,"How can I cache NFS shares on a local disk?\n",(0,r.kt)("a",m({parentName:"p"},{href:"https://askubuntu.com/a/4578/267103"}),"https://askubuntu.com/a/4578/267103")),(0,r.kt)("p",null,"FS-Cache & CacheFS: Caching for Network File Systems\n",(0,r.kt)("a",m({parentName:"p"},{href:"http://www.linux-mag.com/id/7378/"}),"http://www.linux-mag.com/id/7378/")),(0,r.kt)("p",null,(0,r.kt)("a",m({parentName:"p"},{href:"https://en.wikipedia.org/wiki/CacheFS"}),"https://en.wikipedia.org/wiki/CacheFS"),"\n",(0,r.kt)("a",m({parentName:"p"},{href:"https://pkgs.alpinelinux.org/package/v3.7/community/x86_64/cachefilesd"}),"https://pkgs.alpinelinux.org/package/v3.7/community/x86_64/cachefilesd")),(0,r.kt)("p",null,"CacheFiles /var/fscache\nCacheFS block \u7ea7\u522b"),(0,r.kt)("p",null,"FS-Cache \u63a5\u53e3"),(0,r.kt)("p",null,"netfs nfs,afs,isofs"),(0,r.kt)("p",null,"/proc/fs/fscache/stats"),(0,r.kt)("p",null,"/proc/fs/fscache/histogram"),(0,r.kt)("p",null,(0,r.kt)("a",m({parentName:"p"},{href:"https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/filesystems/caching/netfs-api.txt"}),"https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/filesystems/caching/netfs-api.txt")),(0,r.kt)("p",null,(0,r.kt)("a",m({parentName:"p"},{href:"https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/filesystems/caching/fscache.txt"}),"https://git.kernel.org/pub/scm/linux/kernel/git/torvalds/linux.git/tree/Documentation/filesystems/caching/fscache.txt")),(0,r.kt)("h2",m({},{id:"ports"}),"Ports"),(0,r.kt)("pre",null,(0,r.kt)("code",m({parentName:"pre"},{}),"program vers proto   port\n 100000    2   tcp    111  portmapper,rpcbind\n 100000    2   udp    111  portmapper\n 100005    1   udp    950  mountd\n 100005    3   udp    950  mountd\n 100005    1   tcp    884  mountd\n 100005    3   tcp    884  mountd\n 100003    2   udp   2049  nfs\n 100003    3   udp   2049  nfs\n 100003    2   tcp   2049  nfs\n 100003    3   tcp   2049  nfs\n 100024    1   udp    644  status\n 100024    1   tcp    918  status\n 100021    0   udp    630  nlockmgr\n 100021    1   udp    630  nlockmgr\n 100021    3   udp    630  nlockmgr\n 100021    4   udp    630  nlockmgr\n 100021    0   tcp    917  nlockmgr\n 100021    1   tcp    917  nlockmgr\n 100021    3   tcp    917  nlockmgr\n 100021    4   tcp    917  nlockmgr\n")),(0,r.kt)("h2",m({},{id:"awesome"}),"Awesome"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/nfs-ganesha/nfs-ganesha"}),"nfs-ganesha/nfs-ganesha"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"C"),(0,r.kt)("li",{parentName:"ul"},"NFSv3,v4,v4.1 fileserver"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",m({parentName:"li"},{href:"https://github.com/willscott/go-nfs"}),"willscott/go-nfs"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"golang NFSv3 server")))))}x.isMDXComponent=!0}}]);
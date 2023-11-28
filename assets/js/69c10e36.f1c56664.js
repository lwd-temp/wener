"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[68140],{49613:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return f}});var r=n(59496);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=r.createContext({}),m=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=m(e.components);return r.createElement(s.Provider,{value:t},e.children)},u="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,s=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),u=m(n),d=a,f=u["".concat(s,".").concat(d)]||u[d]||c[d]||o;return n?r.createElement(f,l(l({ref:t},p),{},{components:n})):r.createElement(f,l({ref:t},p))}));function f(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:a,l[1]=i;for(var m=2;m<o;m++)l[m]=n[m];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},56885:function(e,t,n){n.r(t),n.d(t,{assets:function(){return b},contentTitle:function(){return v},default:function(){return _},frontMatter:function(){return f},metadata:function(){return g},toc:function(){return y}});var r=n(49613),a=Object.defineProperty,o=Object.defineProperties,l=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,s=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,p=(e,t,n)=>t in e?a(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,u=(e,t)=>{for(var n in t||(t={}))s.call(t,n)&&p(e,n,t[n]);if(i)for(var n of i(t))m.call(t,n)&&p(e,n,t[n]);return e},c=(e,t)=>o(e,l(t)),d=(e,t)=>{var n={};for(var r in e)s.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&i)for(var r of i(e))t.indexOf(r)<0&&m.call(e,r)&&(n[r]=e[r]);return n};const f={title:"ESXi"},v="ESXi",g={unversionedId:"os/virt/esxi",id:"os/virt/esxi",title:"ESXi",description:"- wikipedia VMFS",source:"@site/../notes/os/virt/esxi.md",sourceDirName:"os/virt",slug:"/os/virt/esxi",permalink:"/notes/os/virt/esxi",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/os/virt/esxi.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1624798319,formattedLastUpdatedAt:"Jun 27, 2021",frontMatter:{title:"ESXi"},sidebar:"docs",previous:{title:"\u865a\u62df\u5316",permalink:"/notes/os/virt/"},next:{title:"Firecracker",permalink:"/notes/os/virt/firecracker"}},b={},y=[{value:"esxcli",id:"esxcli",level:2}],k={toc:y},w="wrapper";function _(e){var t=e,{components:n}=t,a=d(t,["components"]);return(0,r.kt)(w,c(u(u({},k),a),{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h1",u({},{id:"esxi"}),"ESXi"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"wikipedia ",(0,r.kt)("a",u({parentName:"li"},{href:"https://en.wikipedia.org/wiki/VMware_VMFS"}),"VMFS")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://en.wikipedia.org/wiki/VMware_ESXi"}),"VMware ESXi"),(0,r.kt)("ul",{parentName:"li"},(0,r.kt)("li",{parentName:"ul"},"Elastic Sky X integrated"))),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.vmware.com/content/dam/digitalmarketing/vmware/en/pdf/vsphere/vmw-feature-comparison.pdf"}),"VMware vSphere\xae Feature Comparison")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://www.vmware.com/reusable_content/vsphere_pricing.html"}),"Pricing")),(0,r.kt)("li",{parentName:"ul"},".vmx, .vmdk, .vmsd, .vmsn")),(0,r.kt)("table",null,(0,r.kt)("thead",{parentName:"table"},(0,r.kt)("tr",{parentName:"thead"},(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Item"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Free"),(0,r.kt)("th",u({parentName:"tr"},{align:null}),"Paid"))),(0,r.kt)("tbody",{parentName:"table"},(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"physical CPUs"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"2"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"768")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"physical memory"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"16TB"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"16TB")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"vCPUs per VM"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"8 vCPUs"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"256 vCPUs")),(0,r.kt)("tr",{parentName:"tbody"},(0,r.kt)("td",u({parentName:"tr"},{align:null}),"vRAM per VM"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"6TB"),(0,r.kt)("td",u({parentName:"tr"},{align:null}),"6TB")))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"qemu-img convert -f qcow2 -O vmdk -o adapter_type=lsilogic,subformat=streamOptimized,compat6 SC-1.qcow2 SC-1.vmdk\n\n# https://github.com/alpinelinux/alpine-make-vm-image#creating-image-for-vmware-esxi\nqemu-img convert -f qcow2 -O vmdk -o adapter_type=lsilogic,subformat=monolithicFlat alpine.qcow2 alpine.vmdk\n")),(0,r.kt)("h2",u({},{id:"esxcli"}),"esxcli"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("a",u({parentName:"li"},{href:"https://code.vmware.com/docs/11743/esxi-7-0-esxcli-command-reference"}),"ESXi 7.0 ESXCLI Command Reference"))),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u670d\u52a1\u5668\u4fe1\u606f\nesxcli --server myESXi --username user1 --password 'my_password' --thumbprint\n\n# \u8f93\u51fa\u683c\u5f0f\nesxcli --formatter=csv storage filesystem list\n\nesxcli --server MyVC --vihost MyESXi storage filesystem list\n\n# \u5347\u7ea7\nesxcli software vib\n")),(0,r.kt)("pre",null,(0,r.kt)("code",u({parentName:"pre"},{className:"language-bash"}),"# \u7cfb\u7edf\u7ba1\u7406\n# ==========\n# \u7ef4\u62a4\u6a21\u5f0f\nsystem maintenanceMode set --enable true\n\n# system module list --module=<module_name>\nsystem module list --enabled=true\nsystem module list --loaded=true\n# \u542f\u7528\nsystem module set --module=<module_name> --enabled=true\n# \u53c2\u6570\nsystem module parameters set --module=<module_name> --parameter-string=<parameter_string>\n# \u9a8c\u8bc1\nsystem module parameters list --module=<module_name>\n\n\n# \u7ec4\u4ef6\u7ba1\u7406\n# ==========\n# \u7cfb\u7edf\u7ec4\u4ef6\nsoftware component list\n# \u7ec4\u4ef6\u4fe1\u606f <component_name>:<version>\nsoftware component get -n <component_name>\nsoftware baseimage get\nsoftware addon get\n# \u4ed3\u5e93 - index.xml \u6216\u8005 zip\nsoftware sources component list -d <depot_url_or_offline_bundle_path>\n# \u8be6\u7ec6\u4fe1\u606f\nsoftware sources component get -n <component_name> -d <depot_url_or_offline_bundle_path>\n# \u5b89\u88c5\nsoftware component apply -n <component_name>:<version> -d <depot_url_or_offline_bundle_path>\n# \u79fb\u9664\nsoftware component remove -n <component_name>\n\n# \u7ba1\u7406 baseimage\nsoftware sources baseimage list -d <depot_url_or_offline_bundle_path>\nsoftware sources baseimage get -b <base_image_version> -d <depot_url_or_offline_bundle_path>\nsoftware sources addon list -d <depot_url_or_offline_bundle_path>\nsoftware sources addon get -a <add-on_name> -d <depot_url_or_offline_bundle_path>\n\n# \u901a\u8fc7 JSON \u914d\u7f6e\nsoftware apply -s <location_of_software_spec>.json -d <depot_url_or_offline_bundle_path>\n\n\n# \u5b58\u50a8\u7ba1\u7406\n# ==========\n# \u6302\u8f7d\u7684\u5377\nstorage filesystem list\n# \u5378\u8f7d\nstorage filesystem unmount\n# \u5feb\u7167\nstorage vmfs\n\n# \u6302\u8f7d\nstorage filesystem volume mount --volume-label=<label>|--volume-uuid=<VMFSUUID>\n# \u5378\u8f7d\nstorage filesystem volume unmount --volume-label=<label>|--volume-uuid=<VMFSUUID>\n\n# \u5feb\u7167\u5217\u8868\nstorage vmfs snapshot list\nstorage filesystem unmount\nstorage vmfs snapshot resignature --volume-label=<label>|--volume-uuid=<id>\n")))}_.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[54845],{49613:function(e,t,n){n.d(t,{Zo:function(){return s},kt:function(){return d}});var a=n(59496);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var u=a.createContext({}),p=function(e){var t=a.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},s=function(e){var t=p(e.components);return a.createElement(u.Provider,{value:t},e.children)},m="mdxType",c={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},b=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),m=p(n),b=r,d=m["".concat(u,".").concat(b)]||m[b]||c[b]||l;return n?a.createElement(d,o(o({ref:t},s),{},{components:n})):a.createElement(d,o({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=b;var i={};for(var u in t)hasOwnProperty.call(t,u)&&(i[u]=t[u]);i.originalType=e,i[m]="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}b.displayName="MDXCreateElement"},89561:function(e,t,n){n.r(t),n.d(t,{assets:function(){return g},contentTitle:function(){return v},default:function(){return j},frontMatter:function(){return d},metadata:function(){return f},toc:function(){return h}});var a=n(49613),r=Object.defineProperty,l=Object.defineProperties,o=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,u=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,s=(e,t,n)=>t in e?r(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,m=(e,t)=>{for(var n in t||(t={}))u.call(t,n)&&s(e,n,t[n]);if(i)for(var n of i(t))p.call(t,n)&&s(e,n,t[n]);return e},c=(e,t)=>l(e,o(t)),b=(e,t)=>{var n={};for(var a in e)u.call(e,a)&&t.indexOf(a)<0&&(n[a]=e[a]);if(null!=e&&i)for(var a of i(e))t.indexOf(a)<0&&p.call(e,a)&&(n[a]=e[a]);return n};const d={title:"Bazel Java"},v="Bazel Java",f={unversionedId:"dev/build/bazel/bazel-java",id:"dev/build/bazel/bazel-java",title:"Bazel Java",description:"- _deploy.jar",source:"@site/../notes/dev/build/bazel/bazel-java.md",sourceDirName:"dev/build/bazel",slug:"/dev/build/bazel/java",permalink:"/notes/dev/build/bazel/java",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/dev/build/bazel/bazel-java.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1642521786,formattedLastUpdatedAt:"Jan 18, 2022",frontMatter:{title:"Bazel Java"},sidebar:"docs",previous:{title:"Brazel Go",permalink:"/notes/dev/build/bazel/go"},next:{title:"Build Awesome",permalink:"/notes/dev/build/awesome"}},g={},h=[{value:"Maven",id:"maven",level:3}],_={toc:h},y="wrapper";function j(e){var t=e,{components:n}=t,r=b(t,["components"]);return(0,a.kt)(y,c(m(m({},_),r),{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",m({},{id:"bazel-java"}),"Bazel Java"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"_deploy.jar"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u5305\u542b\u6240\u6709\u4f9d\u8d56"))),(0,a.kt)("li",{parentName:"ul"},"\u5e94\u7528",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/google/dagger"}),"google/dagger")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/angular/angular/blob/master/BUILD.bazel"}),"angular/angular/BUILD.bazel")))),(0,a.kt)("li",{parentName:"ul"},"\u53c2\u8003",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://medium.com/wix-engineering/a58a8142c549"}),"How to choose the right build unit granularity")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://medium.com/wix-engineering/be561f455c37"}),"How to Decide on CI Server and remote execution / caching")))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/bazelbuild/rules_gwt"}),"bazelbuild/rules_gwt")),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/johnynek/bazel-deps"}),"johnynek/bazel-deps")," - Generate bazel dependencies for maven artifacts"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/wix/exodus"}),"wix/exodus")," - Easily migrate your JVM code from Maven to Bazel")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"bazel build //:java-maven\n# \u6784\u5efa\u5b8c\u6574\u7684\u5305\uff0c\u5305\u542b\u6240\u6709\u4f9d\u8d56\uff0c\u53ef\u90e8\u7f72\u6267\u884c\nbazel build //:java-maven_deploy.jar\n\n# Maven \u8fc1\u79fb\ngit clone https://github.com/bazelbuild/migration-tooling.git\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),'# \u5b9a\u4e49\u6267\u884c\u6587\u4ef6\njava_binary(\n    name = "ProjectRunner",\n    srcs = glob(["src/main/java/com/example/ProjectRunner.java"]),\n    # \u4f9d\u8d56\n    deps = [":greeter"],\n    main_class = "com.example.ProjectRunner",\n)\n\n# \u5b9a\u4e49\u5e93\njava_library(\n    name = "greeter",\n    srcs = ["src/main/java/com/example/Greeting.java"],\n    # \u9ed8\u8ba4\u5f53\u524d BUILD \u6587\u4ef6\u53ef\u89c1\n    visibility = ["//src/main/java/com/example/cmdline:__pkg__"],\n)\n')),(0,a.kt)("h3",m({},{id:"maven"}),"Maven"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/bazelbuild/rules_jvm_external"}),"rules_jvm_external")," - Java \u6784\u5efa\u5916\u90e8\u4f9d\u8d56",(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"Maven"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("a",m({parentName:"li"},{href:"https://github.com/google/bazel-common/tree/master/tools/maven"}),"google/bazel-common/maven"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},"\u652f\u6301\u751f\u6210 pom.xml")))),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-bash"}),"# \u67e5\u770b\u6240\u6709\u4f9d\u8d56\uff0c\u8f93\u51fa\u4e3a BUILD\nbazel query @maven//:all --output=build\n")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{}),'load("@rules_jvm_external//:defs.bzl", "maven_install", "artifact")\n\nload("@rules_jvm_external//:defs.bzl", "artifact")\n# \u53ef\u4ee5\u4f7f\u7528 artifact("junit:junit") \u800c\u4e0d\u662f @maven//:junit_junit\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"WORKSPACE")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),'load("@bazel_tools//tools/build_defs/repo:http.bzl", "http_archive")\n\nRULES_JVM_EXTERNAL_TAG = "2.6.1"\nRULES_JVM_EXTERNAL_SHA = "45203b89aaf8b266440c6b33f1678f516a85b3e22552364e7ce6f7c0d7bdc772"\n\n# \u4e0b\u8f7d\u89c4\u5219\u4f9d\u8d56\nhttp_archive(\n    name = "rules_jvm_external",\n    strip_prefix = "rules_jvm_external-%s" % RULES_JVM_EXTERNAL_TAG,\n    sha256 = RULES_JVM_EXTERNAL_SHA,\n    url = "https://github.com/bazelbuild/rules_jvm_external/archive/%s.zip" % RULES_JVM_EXTERNAL_TAG,\n)\n\n# \u5bfc\u5165\nload("@rules_jvm_external//:defs.bzl", "maven_install")\n\n# \u5b9a\u4e49 Maven \u4ed3\u5e93\u548c\u4f7f\u7528\u7684\u5305\nmaven_install(\n    artifacts = [\n        "junit:junit:4.12",\n        "androidx.test.espresso:espresso-core:3.1.1",\n        "org.hamcrest:hamcrest-library:1.3",\n    ],\n    repositories = [\n        # Private repositories are supported through HTTP Basic auth\n        "http://username:password@localhost:8081/artifactory/my-repository",\n        "https://jcenter.bintray.com/",\n        "https://maven.google.com",\n        "https://repo1.maven.org/maven2",\n    ],\n)\n')),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"BUILD")),(0,a.kt)("pre",null,(0,a.kt)("code",m({parentName:"pre"},{className:"language-py"}),'java_library(\n    name = "java_test_deps",\n    exports = [\n        "@maven//:junit_junit"\n        "@maven//:org_hamcrest_hamcrest_library",\n    ],\n)\n\nandroid_library(\n    name = "android_test_deps",\n    exports = [\n        "@maven//:junit_junit"\n        "@maven//:androidx_test_espresso_espresso_core",\n    ],\n)\n')))}j.isMDXComponent=!0}}]);
"use strict";(self.webpackChunkwener_website=self.webpackChunkwener_website||[]).push([[45336],{49613:function(e,t,a){a.d(t,{Zo:function(){return s},kt:function(){return d}});var n=a(59496);function l(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function p(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){l(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,l=function(e,t){if(null==e)return{};var a,n,l={},r=Object.keys(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(n=0;n<r.length;n++)a=r[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(l[a]=e[a])}return l}var o=n.createContext({}),m=function(e){var t=n.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):p(p({},t),e)),a},s=function(e){var t=m(e.components);return n.createElement(o.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},h=n.forwardRef((function(e,t){var a=e.components,l=e.mdxType,r=e.originalType,o=e.parentName,s=i(e,["components","mdxType","originalType","parentName"]),c=m(a),h=l,d=c["".concat(o,".").concat(h)]||c[h]||u[h]||r;return a?n.createElement(d,p(p({ref:t},s),{},{components:a})):n.createElement(d,p({ref:t},s))}));function d(e,t){var a=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var r=a.length,p=new Array(r);p[0]=h;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:l,p[1]=i;for(var m=2;m<r;m++)p[m]=a[m];return n.createElement.apply(null,p)}return n.createElement.apply(null,a)}h.displayName="MDXCreateElement"},21426:function(e,t,a){a.r(t),a.d(t,{assets:function(){return N},contentTitle:function(){return k},default:function(){return y},frontMatter:function(){return d},metadata:function(){return g},toc:function(){return f}});var n=a(49613),l=Object.defineProperty,r=Object.defineProperties,p=Object.getOwnPropertyDescriptors,i=Object.getOwnPropertySymbols,o=Object.prototype.hasOwnProperty,m=Object.prototype.propertyIsEnumerable,s=(e,t,a)=>t in e?l(e,t,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[t]=a,c=(e,t)=>{for(var a in t||(t={}))o.call(t,a)&&s(e,a,t[a]);if(i)for(var a of i(t))m.call(t,a)&&s(e,a,t[a]);return e},u=(e,t)=>r(e,p(t)),h=(e,t)=>{var a={};for(var n in e)o.call(e,n)&&t.indexOf(n)<0&&(a[n]=e[n]);if(null!=e&&i)for(var n of i(e))t.indexOf(n)<0&&m.call(e,n)&&(a[n]=e[n]);return a};const d={title:"PHP"},k="PHP",g={unversionedId:"languages/php/README",id:"languages/php/README",title:"PHP",description:"| spec   |",source:"@site/../notes/languages/php/README.md",sourceDirName:"languages/php",slug:"/languages/php/",permalink:"/notes/languages/php/",draft:!1,editUrl:"https://github.com/wenerme/wener/edit/master/notes/../notes/languages/php/README.md",tags:[],version:"current",lastUpdatedBy:"wener",lastUpdatedAt:1668326649,formattedLastUpdatedAt:"Nov 13, 2022",frontMatter:{title:"PHP"},sidebar:"docs",previous:{title:"PEG.js",permalink:"/notes/languages/parser/pegjs"},next:{title:"composer",permalink:"/notes/languages/php/composer"}},N={},f=[{value:"Docker",id:"docker",level:2},{value:"PHP 7",id:"php-7",level:2},{value:"laravel",id:"laravel",level:2},{value:"Lumen",id:"lumen",level:3},{value:"CentOS",id:"centos",level:2},{value:"Composer",id:"composer",level:2},{value:"satis",id:"satis",level:3},{value:"ThinkPHP5",id:"thinkphp5",level:2},{value:"\u76ee\u5f55\u7ed3\u6784",id:"\u76ee\u5f55\u7ed3\u6784",level:3},{value:"\u4ee3\u7801",id:"\u4ee3\u7801",level:3},{value:"PECL",id:"pecl",level:2},{value:"HHVM",id:"hhvm",level:2},{value:"Symfony",id:"symfony",level:2},{value:"Notes",id:"notes",level:2},{value:"FAQ",id:"faq",level:2},{value:"\u907f\u514d\u76f4\u63a5\u8bbf\u95ee PHP",id:"\u907f\u514d\u76f4\u63a5\u8bbf\u95ee-php",level:3},{value:"\u786e\u4fdd\u76f8\u5bf9\u5f15\u7528\u6b63\u786e",id:"\u786e\u4fdd\u76f8\u5bf9\u5f15\u7528\u6b63\u786e",level:3},{value:"\u67e5\u770b ca \u73af\u5883",id:"\u67e5\u770b-ca-\u73af\u5883",level:3},{value:"Connection to `ssl://pecl.php.net:443&#39; failed: Unable to find the socket transport &quot;ssl&quot; - did you forget to enable it when you configured PHP?",id:"connection-to-sslpeclphpnet443-failed-unable-to-find-the-socket-transport-ssl---did-you-forget-to-enable-it-when-you-configured-php",level:3}],b={toc:f},v="wrapper";function y(e){var t=e,{components:a}=t,l=h(t,["components"]);return(0,n.kt)(v,u(c(c({},b),l),{components:a,mdxType:"MDXLayout"}),(0,n.kt)("h1",c({},{id:"php"}),"PHP"),(0,n.kt)("table",null,(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"spec"),(0,n.kt)("th",c({parentName:"tr"},{align:null})))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"PSR-1"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Basic Coding Standard")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"PSR-2"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),(0,n.kt)("del",{parentName:"td"},"Coding Style Guide"))),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"PSR-3"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Logger Interface")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"PSR-4"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Autoloading Standard")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"PSR-6"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Caching Interface")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"PSR-7"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"HTTP Message Interface")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"PSR-11"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Container Interface")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"PSR-12"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Extended Coding Style Guide")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"PSR-13"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Hypermedia Links")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"PSR-14"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Event Dispatcher")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"PSR-15"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"HTTP Handlers")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"PSR-16"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"Simple Cache")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"PSR-17"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"HTTP Factories")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"PSR-18"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"HTTP Client")))),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.php-fig.org/psr/"}),"PHP Standards Recommendations")),(0,n.kt)("li",{parentName:"ul"},"ZTS - Zend Thread Safety")),(0,n.kt)("hr",null),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7f13\u5b58",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"APC",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301 opcode \u548c \u6570\u636e\u7f13\u5b58"),(0,n.kt)("li",{parentName:"ul"},"System Cache Entries"),(0,n.kt)("li",{parentName:"ul"},"Per-Directory Entries"),(0,n.kt)("li",{parentName:"ul"},"User Cache Entries"))),(0,n.kt)("li",{parentName:"ul"},"APCu",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u63d0\u4f9b APC \u4e2d\u7684\u6570\u636e\u7f13\u5b58\u529f\u80fd"))),(0,n.kt)("li",{parentName:"ul"},"XCache"),(0,n.kt)("li",{parentName:"ul"},"OPCache",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"5.5 \u96c6\u6210"),(0,n.kt)("li",{parentName:"ul"},"\u66ff\u4ee3 APC \u7684 opcode \u7f13\u5b58, XCache")))))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# CentOS\n# \u67e5\u770b\u5b89\u88c5\u6587\u4ef6\nrpm -ql php-fpm\nyum instal yum-utils\n# \u67e5\u770b\u5df2\u5b89\u88c5\u7684\u6587\u4ef6\nrepoquery -lq --installed time\n\n# \u5167\u5efa web \u670d\u52a1\n# http://php.net/manual/zh/features.commandline.webserver.php\nphp -S 0.0.0.0:8082 -c php.ini\n\n# \u5224\u65ad\u662f\u5426\u6709\u54cd\u5e94\u6a21\u5757\nphp -i \"(command-line 'phpinfo()')\" | grep -i grpc\n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-ini"}),"# PHP \u5e38\u7528\u914d\u7f6e\ndate.timezone=Asia/Shanghai\n")),(0,n.kt)("h2",c({},{id:"docker"}),"Docker"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# wener/php:app\n# php7 + nginx + mongo,redis,grpc extension + composer\ndocker run --rm -it --entrypoint bash wener/php:app\n")),(0,n.kt)("h2",c({},{id:"php-7"}),"PHP 7"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"opcache")),(0,n.kt)("h2",c({},{id:"laravel"}),"laravel"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://laravel.com/"}),"laravel")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"http://www.golaravel.com/"}),"http://www.golaravel.com/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/chiraggude/awesome-laravel"}),"awesome-laravel")),(0,n.kt)("li",{parentName:"ul"},"ORM ",(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/illuminate/database"}),"illuminate")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://laravel-china.org/"}),"laravel-china")," - \u4e2d\u6587\u793e\u533a")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'# \u53ef\u4f7f\u7528\u4ee3\u7406 https_proxy=http://127.0.0.1:7777 http_proxy=http://127.0.0.1:7777\ncomposer global require -vvv "laravel/lumen-installer"\ncomposer create-project --prefer-dist laravel/lumen -vvv blog\ncd blog\nphp -S localhost:8000 -t ./public\n\nphp artisan make:migration create_users_table\n# \u4fee\u6539 Mirage \u4e0b\u7684\u6570\u636e,\u6dfb\u52a0 User \u8868\u7684 migrate\n# \u6dfb\u52a0 UserTableSeeder \u5f80 User \u63d2\u5165\u6570\u636e\nphp artisan migrate\n# \u53ef\u4ee5\u56de\u6eda\nphp artisan migrate:rollback\n# \u8c03\u7528 seeder\nphp artisan db:seed\n')),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"fpm ",(0,n.kt)("a",c({parentName:"li"},{href:"http://php.net/manual/zh/install.fpm.configuration.php"}),"\u914d\u7f6e\u9879"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u8ba1\u7b97 pm.max_children ",(0,n.kt)("a",c({parentName:"li"},{href:"http://myshell.co.uk/blog/2012/07/adjusting-child-processes-for-php-fpm-nginx/"}),"\u53c2\u8003"))))),(0,n.kt)("h3",c({},{id:"lumen"}),"Lumen"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"Laravel ",(0,n.kt)("a",c({parentName:"li"},{href:"https://lumen.laravel.com/"}),"Lumen"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"The stunningly fast micro-framework by Laravel."))),(0,n.kt)("li",{parentName:"ul"},"\u4e3b\u8981\u505a REST \u670d\u52a1")),(0,n.kt)("h2",c({},{id:"centos"}),"CentOS"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53c2\u8003 ",(0,n.kt)("a",c({parentName:"li"},{href:"https://www.centos.org/forums/viewtopic.php?t=52586"}),"https://www.centos.org/forums/viewtopic.php?t=52586"))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# 7.x\nrpm -Uvh https://mirror.webtatic.com/yum/el7/epel-release.rpm\nrpm -Uvh https://mirror.webtatic.com/yum/el7/webtatic-release.rpm\n# \u8be5\u4ed3\u5e93\u4e2d\u7684\u5185\u5bb9\u53ef\u4ee5\u67e5\u770b https://uk.repo.webtatic.com/yum/el7/SRPMS/RPMS/\n# \u73b0\u5728\u53ef\u4ee5\u76f4\u63a5\u5b89\u88c5 56 \u7248\u672c\nyum install php56w php56w-opcache\n# \u4e5f\u53ef\u4ee5\u4f7f\u7528\u63d2\u4ef6\u6765\u66ff\u6362\u672c\u5730\u7684 php \u7248\u672c\nyum install yum-plugin-replace\nyum replace --enablerepo=webtatic-testing php-common --replace-with=php56w-common\n")),(0,n.kt)("h2",c({},{id:"composer"}),"Composer"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/paquettg/php-html-parser"}),"paquettg/php-html-parser")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://pkg.phpcomposer.com/"}),"\u56fd\u5185\u955c\u50cf")),(0,n.kt)("li",{parentName:"ul"},"\u79c1\u6709\u4ed3\u5e93",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://getcomposer.org/doc/articles/handling-private-packages-with-satis.md"}),"https://getcomposer.org/doc/articles/handling-private-packages-with-satis.md")))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://getcomposer.org/doc/04-schema.md"}),"https://getcomposer.org/doc/04-schema.md")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://getcomposer.org/doc/03-cli.md"}),"https://getcomposer.org/doc/03-cli.md"))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u4f7f\u7528\u4e2d\u56fd\u955c\u50cf\u5b89\u88c5\nphp -r \"copy('https://install.phpcomposer.com/installer', 'composer-setup.php');\" \\\n  && php composer-setup.php \\\n  && php -r \"unlink('composer-setup.php');\" \\\n  && mv composer.phar /usr/local/bin/composer\n\n# \u4f7f\u7528\u56fd\u5185\u955c\u50cf\n# \u4fee\u6539\u5168\u5c40\u914d\u7f6e\ncomposer config -g repo.packagist composer https://packagist.phpcomposer.com\n# \u4fee\u6539\u5f53\u524d\u9879\u76ee\ncomposer config repo.packagist composer https://packagist.phpcomposer.com\n\n# \u521d\u59cb\u5316\ncomposer init\n# \u6dfb\u52a0\u4f9d\u8d56\ncomposer require paquettg/php-html-parser\n# \u79fb\u9664\u4f9d\u8d56\ncomposer remove paquettg/php-html-parser\n# \u5b89\u88c5\u4f9d\u8d56\ncomposer install\n# \u66f4\u65b0\u4f9d\u8d56\ncomposer update\ncomposer update --lock\ncomposer dump-autoload --optimize\n\ncomposer about\ncomposer archive\ncomposer browse\ncomposer clear-cache\ncomposer config --list\ncomposer create-project symfony/standard-edition dir/\ncomposer depends vendor-name/package-name\ncomposer diagnose\ncomposer global\ncomposer help\ncomposer init\ncomposer licenses\ncomposer list\ncomposer remove\ncomposer run-script\ncomposer search my keywords\ncomposer self-update\ncomposer show\ncomposer suggest\ncomposer status\ncomposer validate\n")),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u5b89\u88c5\u597d\u540e\u53ea\u9700\u8981\u6dfb\u52a0\u4e00\u4e0b autoload \u5373\u53ef\u4f7f\u7528")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"<?php\nrequire __DIR__ . '/vendor/autoload.php';\n")),(0,n.kt)("h3",c({},{id:"satis"}),"satis"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u53ef\u4ee5\u6620\u5c04\u4e3b\u673a\u4e0a\u7684\u4e3b\u76ee\u5f55\u4ee5\u5229\u7528\u7f13\u5b58\n# -v $COMPOSER_HOME:/composer\ndocker run --rm -it -v $PWD/build:/build --entrypoint /bin/sh composer/satis\n\n# \u5f53\u6784\u5efa\u5b8c\u6210\u540e\u76f4\u63a5\u4e0a\u4f20\u4e3a\u9759\u6001\u7ad9\u70b9\u5373\u53ef\nrsync -avz build/ my-server:/var/www/html\n")),(0,n.kt)("p",null,(0,n.kt)("strong",{parentName:"p"},"satis.json")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-json"}),'{\n  "name": "MyRepo",\n  "homepage": "https://composer.example.org",\n  "repositories": [\n    {\n      "type": "vcs",\n      "url": "https://example.org/code/api-php.git"\n    },\n    {\n      "type": "vcs",\n      "url": "https://example.org/code/other-php.git"\n    }\n  ],\n  "require-all": true\n}\n')),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"cd /build\n# \u521b\u5efa satis.json\nphp /satis/bin/satis build satis.json .\n# \u6216\u8005 docker \u6784\u5efa\ndocker run --rm -it -v $PWD/build:/build composer/satis\nrsync -avz --delete ./build/ root@my-host:/mysite\n")),(0,n.kt)("h2",c({},{id:"thinkphp5"}),"ThinkPHP5"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.kancloud.cn/manual/thinkphp5"}),"ThinkPHP5.0 \u5b8c\u5168\u5f00\u53d1\u624b\u518c")),(0,n.kt)("li",{parentName:"ul"},"\u9700\u6c42",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"PHP >= 5.4.0"),(0,n.kt)("li",{parentName:"ul"},"PDO PHP Extension"),(0,n.kt)("li",{parentName:"ul"},"MBstring PHP Extension"),(0,n.kt)("li",{parentName:"ul"},"CURL PHP Extension")))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"composer create-project topthink/think tp5 --prefer-dist\ncd tp5\n\n# \u542f\u52a8\u81ea\u5e26 web \u670d\u52a1\u5668\nphp -S localhost:8888 application/route.php\n\n# \u4f7f\u5f97 think \u53ef\u6267\u884c\n# \u4e0d\u64cd\u4f5c\u8fd9\u4e00\u6b65\u4e5f\u53ef\u4ee5\u76f4\u63a5\u4f7f\u7528 php think \u6765\u6267\u884c\nchmod +x think\n# \u67e5\u770b\u6240\u6709\u547d\u4ee4\n./think list\n# Available commands:\n#   build              Build Application Dirs\n#   clear              Clear runtime file\n#   help               Displays help for a command\n#   list               Lists commands\n#  make\n#   make:controller    Create a new resource controller class\n#   make:model         Create a new model class\n#  optimize\n#   optimize:autoload  Optimizes PSR0 and PSR4 packages to be loaded with classmaps too, good for production.\n#   optimize:config    Build config and common file cache.\n#   optimize:route     Build route cache.\n#   optimize:schema    Build database schema cache.\n\n# \u751f\u6210\u5b9a\u4e49\u7684\u6587\u4ef6\n# \u9ed8\u8ba4\u4f1a\u4f7f\u7528 application/build.php\n./think build\n# \u4f7f\u7528\u6307\u5b9a\u7684\u914d\u7f6e\u6587\u4ef6\n./think build --config build.php\n")),(0,n.kt)("h3",c({},{id:"\u76ee\u5f55\u7ed3\u6784"}),"\u76ee\u5f55\u7ed3\u6784"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),"project  \u5e94\u7528\u90e8\u7f72\u76ee\u5f55\n\u251c\u2500application           \u5e94\u7528\u76ee\u5f55\uff08\u53ef\u8bbe\u7f6e\uff09\n\u2502  \u251c\u2500common             \u516c\u5171\u6a21\u5757\u76ee\u5f55\uff08\u53ef\u66f4\u6539\uff09\n\u2502  \u251c\u2500index              \u6a21\u5757\u76ee\u5f55(\u53ef\u66f4\u6539)\n\u2502  \u2502  \u251c\u2500config.php      \u6a21\u5757\u914d\u7f6e\u6587\u4ef6\n\u2502  \u2502  \u251c\u2500common.php      \u6a21\u5757\u51fd\u6570\u6587\u4ef6\n\u2502  \u2502  \u251c\u2500controller      \u63a7\u5236\u5668\u76ee\u5f55\n\u2502  \u2502  \u251c\u2500model           \u6a21\u578b\u76ee\u5f55\n\u2502  \u2502  \u251c\u2500view            \u89c6\u56fe\u76ee\u5f55\n\u2502  \u2502  \u2514\u2500 ...            \u66f4\u591a\u7c7b\u5e93\u76ee\u5f55\n\u2502  \u251c\u2500command.php        \u547d\u4ee4\u884c\u5de5\u5177\u914d\u7f6e\u6587\u4ef6\n\u2502  \u251c\u2500common.php         \u5e94\u7528\u516c\u5171\uff08\u51fd\u6570\uff09\u6587\u4ef6\n\u2502  \u251c\u2500config.php         \u5e94\u7528\uff08\u516c\u5171\uff09\u914d\u7f6e\u6587\u4ef6\n\u2502  \u251c\u2500database.php       \u6570\u636e\u5e93\u914d\u7f6e\u6587\u4ef6\n\u2502  \u251c\u2500tags.php           \u5e94\u7528\u884c\u4e3a\u6269\u5c55\u5b9a\u4e49\u6587\u4ef6\n|  \u251c\u2500build.php          \u81ea\u52a8\u751f\u6210\u5b9a\u4e49\u6587\u4ef6\n\u2502  \u2514\u2500route.php          \u8def\u7531\u914d\u7f6e\u6587\u4ef6\n\u251c\u2500extend                \u6269\u5c55\u7c7b\u5e93\u76ee\u5f55\uff08\u53ef\u5b9a\u4e49\uff09\n\u251c\u2500public                WEB \u90e8\u7f72\u76ee\u5f55\uff08\u5bf9\u5916\u8bbf\u95ee\u76ee\u5f55\uff09\n\u2502  \u251c\u2500static             \u9759\u6001\u8d44\u6e90\u5b58\u653e\u76ee\u5f55(css,js,image)\n\u2502  \u251c\u2500index.php          \u5e94\u7528\u5165\u53e3\u6587\u4ef6\n\u2502  \u251c\u2500router.php         \u5feb\u901f\u6d4b\u8bd5\u6587\u4ef6\n\u2502  \u2514\u2500.htaccess          \u7528\u4e8e apache \u7684\u91cd\u5199\n\u251c\u2500runtime               \u5e94\u7528\u7684\u8fd0\u884c\u65f6\u76ee\u5f55\uff08\u53ef\u5199\uff0c\u53ef\u8bbe\u7f6e\uff09\n\u251c\u2500vendor                \u7b2c\u4e09\u65b9\u7c7b\u5e93\u76ee\u5f55\uff08Composer\uff09\n\u251c\u2500thinkphp              \u6846\u67b6\u7cfb\u7edf\u76ee\u5f55\n\u2502  \u251c\u2500lang               \u8bed\u8a00\u5305\u76ee\u5f55\n\u2502  \u251c\u2500library            \u6846\u67b6\u6838\u5fc3\u7c7b\u5e93\u76ee\u5f55\n\u2502  \u2502  \u251c\u2500think           Think \u7c7b\u5e93\u5305\u76ee\u5f55\n\u2502  \u2502  \u2514\u2500traits          \u7cfb\u7edf Traits \u76ee\u5f55\n\u2502  \u251c\u2500tpl                \u7cfb\u7edf\u6a21\u677f\u76ee\u5f55\n\u2502  \u251c\u2500.htaccess          \u7528\u4e8e apache \u7684\u91cd\u5199\n\u2502  \u251c\u2500.travis.yml        CI \u5b9a\u4e49\u6587\u4ef6\n\u2502  \u251c\u2500base.php           \u57fa\u7840\u5b9a\u4e49\u6587\u4ef6\n\u2502  \u251c\u2500composer.json      composer \u5b9a\u4e49\u6587\u4ef6\n\u2502  \u251c\u2500console.php        \u63a7\u5236\u53f0\u5165\u53e3\u6587\u4ef6\n\u2502  \u251c\u2500convention.php     \u60ef\u4f8b\u914d\u7f6e\u6587\u4ef6\n\u2502  \u251c\u2500helper.php         \u52a9\u624b\u51fd\u6570\u6587\u4ef6\uff08\u53ef\u9009\uff09\n\u2502  \u251c\u2500LICENSE.txt        \u6388\u6743\u8bf4\u660e\u6587\u4ef6\n\u2502  \u251c\u2500phpunit.xml        \u5355\u5143\u6d4b\u8bd5\u914d\u7f6e\u6587\u4ef6\n\u2502  \u251c\u2500README.md          README \u6587\u4ef6\n\u2502  \u2514\u2500start.php          \u6846\u67b6\u5f15\u5bfc\u6587\u4ef6\n\u251c\u2500build.php             \u81ea\u52a8\u751f\u6210\u5b9a\u4e49\u6587\u4ef6\uff08\u53c2\u8003\uff09\n\u251c\u2500composer.json         composer \u5b9a\u4e49\u6587\u4ef6\n\u251c\u2500LICENSE.txt           \u6388\u6743\u8bf4\u660e\u6587\u4ef6\n\u251c\u2500README.md             README \u6587\u4ef6\n\u251c\u2500think                 \u547d\u4ee4\u884c\u5165\u53e3\u6587\u4ef6\n")),(0,n.kt)("h3",c({},{id:"\u4ee3\u7801"}),"\u4ee3\u7801"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},(0,n.kt)("inlineCode",{parentName:"p"},"thinkphp/start.php")),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u7cfb\u7edf\u9ed8\u8ba4\u7684\u4e00\u4e2a\u5f15\u5bfc\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u52a0\u8f7d\u7cfb\u7edf\u5e38\u91cf\u5b9a\u4e49"),(0,n.kt)("li",{parentName:"ul"},"\u52a0\u8f7d\u73af\u5883\u53d8\u91cf\u5b9a\u4e49\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u81ea\u52a8\u52a0\u8f7d\u673a\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u6ce8\u518c\u9519\u8bef\u548c\u5f02\u5e38\u5904\u7406\u673a\u5236"),(0,n.kt)("li",{parentName:"ul"},"\u52a0\u8f7d\u60ef\u4f8b\u914d\u7f6e\u6587\u4ef6"),(0,n.kt)("li",{parentName:"ul"},"\u6267\u884c\u5e94\u7528"),(0,n.kt)("li",{parentName:"ul"},"\u9996\u5148\u4f1a\u8c03\u7528 base.php \u57fa\u7840\u5f15\u5bfc\u6587\u4ef6\uff0c\u67d0\u4e9b\u7279\u6b8a\u9700\u6c42\u4e0b\u9762\u53ef\u80fd\u76f4\u63a5\u5728\u5165\u53e3\u6587\u4ef6\u4e2d\u5f15\u5165\u57fa\u7840\u5f15\u5bfc\u6587\u4ef6\u3002"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u8def\u7531"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"__miss__")," \u5b9a\u4e49\u672a\u627e\u5230\u65f6\u7684\u64cd\u4f5c"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("inlineCode",{parentName:"li"},"[blog]")," \u5206\u7ec4\u4f7f\u7528 ",(0,n.kt)("inlineCode",{parentName:"li"},"[]")," \u6807\u793a"))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u63a7\u5236\u5668"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u6807\u51c6\u63a7\u5236\u5668\u652f\u6301 \u8bf7\u6c42\u65b9\u6cd5+\u8def\u5f84 \u7684\u8f6c\u6362"),(0,n.kt)("li",{parentName:"ul"},"\u8d44\u6e90\u63a7\u5236\u652f\u6301\u4ee5\u4e0b\u65b9\u6cd5\u6620\u5c04")),(0,n.kt)("table",{parentName:"li"},(0,n.kt)("thead",{parentName:"table"},(0,n.kt)("tr",{parentName:"thead"},(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u6807\u8bc6"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u8bf7\u6c42\u7c7b\u578b"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u751f\u6210\u8def\u7531\u89c4\u5219"),(0,n.kt)("th",c({parentName:"tr"},{align:null}),"\u5bf9\u5e94\u64cd\u4f5c\u65b9\u6cd5\uff08\u9ed8\u8ba4\uff09"))),(0,n.kt)("tbody",{parentName:"table"},(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"index"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"GET"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"blog"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"index")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"create"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"GET"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"blog/create"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"create")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"save"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"POST"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"blog"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"save")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"read"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"GET"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"blog/:id"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"read")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"edit"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"GET"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"blog/:id/edit"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"edit")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"update"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"PUT"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"blog/:id"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"update")),(0,n.kt)("tr",{parentName:"tbody"},(0,n.kt)("td",c({parentName:"tr"},{align:null}),"delete"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"DELETE"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"blog/:id"),(0,n.kt)("td",c({parentName:"tr"},{align:null}),"delete"))))),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("p",{parentName:"li"},"\u6a21\u578b"),(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u6570\u636e\u5e93\u8868\u6620\u5c04"),(0,n.kt)("li",{parentName:"ul"},"\u652f\u6301\u57fa\u672c\u7684\u589e\u5220\u6539\u67e5\u64cd\u4f5c")))),(0,n.kt)("h2",c({},{id:"pecl"}),"PECL"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"http://pear.php.net/packages.php"}),"http://pear.php.net/packages.php")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://pecl.php.net/package-stats.php"}),"https://pecl.php.net/package-stats.php")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"http://php.net/manual/en/extensions.php"}),"http://php.net/manual/en/extensions.php")),(0,n.kt)("li",{parentName:"ul"},"\u5e38\u7528\u6269\u5c55",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"Redis"),(0,n.kt)("li",{parentName:"ul"},"Mongo"),(0,n.kt)("li",{parentName:"ul"},"gRPC"),(0,n.kt)("li",{parentName:"ul"},"Protobuf")))),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"pecl updahe-channels\n# yes \u542f\u7528 igbinary\n# https://github.com/igbinary/igbinary\npecl install -o -f redis <<< no\n")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{}),'build                  Build an Extension From C Source\nbundle                 Unpacks a Pecl Package\nchannel-add            Add a Channel\nchannel-alias          Specify an alias to a channel name\nchannel-delete         Remove a Channel From the List\nchannel-discover       Initialize a Channel from its server\nchannel-info           Retrieve Information on a Channel\nchannel-login          Connects and authenticates to remote channel server\nchannel-logout         Logs out from the remote channel server\nchannel-update         Update an Existing Channel\nclear-cache            Clear Web Services Cache\nconfig-create          Create a Default configuration file\nconfig-get             Show One Setting\nconfig-help            Show Information About Setting\nconfig-set             Change Setting\nconfig-show            Show All Settings\nconvert                Convert a package.xml 1.0 to package.xml 2.0 format\ncvsdiff                Run a "cvs diff" for all files in a package\ncvstag                 Set CVS Release Tag\ndownload               Download Package\ndownload-all           Downloads each available package from the default channel\ninfo                   Display information about a package\ninstall                Install Package\nlist                   List Installed Packages In The Default Channel\nlist-all               List All Packages\nlist-channels          List Available Channels\nlist-files             List Files In Installed Package\nlist-upgrades          List Available Upgrades\nlogin                  Connects and authenticates to remote server [Deprecated in favor of channel-login]\nlogout                 Logs out from the remote server [Deprecated in favor of channel-logout]\nmakerpm                Builds an RPM spec file from a PEAR package\npackage                Build Package\npackage-dependencies   Show package dependencies\npackage-validate       Validate Package Consistency\npickle                 Build PECL Package\nremote-info            Information About Remote Packages\nremote-list            List Remote Packages\nrun-scripts            Run Post-Install Scripts bundled with a package\nrun-tests              Run Regression Tests\nsearch                 Search remote package database\nshell-test             Shell Script Test\nsign                   Sign a package distribution file\nsvntag                 Set SVN Release Tag\nuninstall              Un-install Package\nupdate-channels        Update the Channel List\nupgrade                Upgrade Package\nupgrade-all            Upgrade All Packages [Deprecated in favor of calling upgrade with no parameters]\nUsage: pecl [options] command [command-options] <parameters>\nType "pecl help options" to list all options.\nType "pecl help shortcuts" to list all command shortcuts.\nType "pecl help version" or "pecl version" to list version information.\nType "pecl help <command>" to get the help for the specified command.\n')),(0,n.kt)("h2",c({},{id:"hhvm"}),"HHVM"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u7ed3\u8bba: \u4e0d\u5efa\u8bae\u4f7f\u7528"),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://hhvm.com/"}),"https://hhvm.com/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"http://hacklang.org/"}),"http://hacklang.org/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://en.wikipedia.org/wiki/HHVM"}),"https://en.wikipedia.org/wiki/HHVM")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"http://github.com/facebook/hhvm"}),"http://github.com/facebook/hhvm")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://3v4l.org/"}),"https://3v4l.org/")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://www.keycdn.com/blog/php-7-vs-hhvm/"}),"https://www.keycdn.com/blog/php-7-vs-hhvm/")),(0,n.kt)("li",{parentName:"ul"},"Hip Hop bytecode"),(0,n.kt)("li",{parentName:"ul"},"HHVM vs PHP7",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},"\u901f\u5ea6\u76f8\u5dee\u4e0d\u5927"),(0,n.kt)("li",{parentName:"ul"},"\u6269\u5c55 HHVM \u4f7f\u7528 C++ PHP7 \u4f7f\u7528 C"),(0,n.kt)("li",{parentName:"ul"},"HHVM \u652f\u6301\u7c7b\u578b\u6ce8\u89e3, \u7c7b\u4f3c\u4e8e Typescript \u4e0e JavaScript \u76f4\u63a5\u7684\u5173\u7cfb"),(0,n.kt)("li",{parentName:"ul"},"PHP7 \u66f4\u52a0\u7a33\u5b9a, \u517c\u5bb9\u6027\u66f4\u5f3a"),(0,n.kt)("li",{parentName:"ul"},"\u4ee3\u7801\u4fee\u6b63\u540e HHVM \u9700\u8981\u91cd\u542f"))),(0,n.kt)("li",{parentName:"ul"},"\u8d8a\u6765\u8d8a\u591a\u7684\u5e93\u9009\u62e9\u4e0d\u518d\u652f\u6301 HHVM",(0,n.kt)("ul",{parentName:"li"},(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"http://symfony.com/blog/symfony-4-end-of-hhvm-support"}),"Symfony 4: End of HHVM support")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/doctrine/doctrine2/issues/6424"}),"doctrine#6424")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://derickrethans.nl/mongodb-hhvm.html"}),"HHVM and MongoDB")),(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/cakephp/cakephp/issues/10674"}),"cakephp#10674"),": Drop support for HHVM officially")))),(0,n.kt)("h2",c({},{id:"symfony"}),"Symfony"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},(0,n.kt)("a",c({parentName:"li"},{href:"https://github.com/symfony/symfony"}),"https://github.com/symfony/symfony"))),(0,n.kt)("h2",c({},{id:"notes"}),"Notes"),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"require,require_once,include_once,include \u662f\u8bed\u53e5\u800c\u4e0d\u662f\u51fd\u6570, \u6240\u4ee5\u4e0d\u9700\u8981\u62ec\u53f7 ",(0,n.kt)("inlineCode",{parentName:"li"},"()"))),(0,n.kt)("h2",c({},{id:"faq"}),"FAQ"),(0,n.kt)("h3",c({},{id:"\u907f\u514d\u76f4\u63a5\u8bbf\u95ee-php"}),"\u907f\u514d\u76f4\u63a5\u8bbf\u95ee PHP"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),'<?php\n// \u907f\u514d\u4e0d\u88ab include\nif(count(get_included_files()) ==1) exit("Direct access not permitted.");\n\n// \u907f\u514d\u88ab include\nfunction blockit()\n{\n  $buf = get_included_files();\n  return $buf[0] != __FILE__;\n}\nblockit() and exit("You can not include a MAIN file as a part of your script.");\n')),(0,n.kt)("h3",c({},{id:"\u786e\u4fdd\u76f8\u5bf9\u5f15\u7528\u6b63\u786e"}),"\u786e\u4fdd\u76f8\u5bf9\u5f15\u7528\u6b63\u786e"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-php"}),"<?php\n// \u5b9a\u4e49\u76f8\u5bf9\u8def\u5f84\ndefine('__ROOT__', dirname(dirname(__FILE__)));\nrequire_once(__ROOT__.'/config.php');\n\n// \u800c\u4e0d\u662f\u4f7f\u7528\u7edd\u5bf9\u8def\u5f84\nrequire_once('/var/www/public_html/config.php'); ?>\n")),(0,n.kt)("h3",c({},{id:"\u67e5\u770b-ca-\u73af\u5883"}),"\u67e5\u770b ca \u73af\u5883"),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),'php -r "print_r(openssl_get_cert_locations());"\n')),(0,n.kt)("h3",c({},{id:"connection-to-sslpeclphpnet443-failed-unable-to-find-the-socket-transport-ssl---did-you-forget-to-enable-it-when-you-configured-php"}),'Connection to `ssl://pecl.php.net:443\' failed: Unable to find the socket transport "ssl" - did you forget to enable it when you configured PHP?'),(0,n.kt)("ul",null,(0,n.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u662f\u7531\u4e8e\u672a\u542f\u7528 openssl ",(0,n.kt)("inlineCode",{parentName:"li"},"php -m | grep ssl")),(0,n.kt)("li",{parentName:"ul"},"\u53ef\u80fd\u662f\u7531\u4e8e pecl \u672a\u52a0\u8f7d php.ini")),(0,n.kt)("pre",null,(0,n.kt)("code",c({parentName:"pre"},{className:"language-bash"}),"# \u8bbe\u7f6e php.ini\npear config-set php_ini /etc/php7/php.ini\n")))}y.isMDXComponent=!0}}]);
(this["webpackJsonpmy-scan"]=this["webpackJsonpmy-scan"]||[]).push([[0],{24:function(e,t,a){e.exports=a(35)},29:function(e,t,a){},32:function(e,t,a){},33:function(e,t,a){},34:function(e,t,a){},35:function(e,t,a){"use strict";a.r(t);var n=a(0),s=a.n(n),r=a(9),i=a.n(r),l=(a(29),a(10)),o=a(11),c=a(20),m=a(13),u=a(21),d=a(7),p=a(36),h=function(e){var t=e.userName,a=e.userEmail;return s.a.createElement(p.a,{className:"justify-content-end",activeKey:"/home"},s.a.createElement(p.a.Item,null,s.a.createElement(p.a.Link,{eventKey:"disabled",disabled:!0},"Hello, ".concat(t," - (").concat(a,")"))),s.a.createElement(p.a.Item,null,s.a.createElement(p.a.Link,{eventKey:"link-2"},"Logout")))},E=a(37),f=(a(32),function(e){return s.a.createElement("div",{className:"cards"},s.a.createElement("h4",null,"Monthly Vulnerability Scan"),s.a.createElement("h6",null,e.scan.datCompleted),s.a.createElement("div",{className:"row row-cards"},s.a.createElement("div",{className:"col-md-2 offset-md-1 text-center card-box"},s.a.createElement(E.a,{bg:"danger",text:"white"},s.a.createElement(E.a.Body,null,s.a.createElement(E.a.Title,{className:"title-card"},e.scan.severityCounts.critical),s.a.createElement(E.a.Text,null,"Critical")))),s.a.createElement("div",{className:"col-md-2 text-center card-box"},s.a.createElement(E.a,{bg:"warning",text:"white"},s.a.createElement(E.a.Body,null,s.a.createElement(E.a.Title,{className:"title-card"},e.scan.severityCounts.high),s.a.createElement(E.a.Text,null,"High")))),s.a.createElement("div",{className:"col-md-2 text-center card-box"},s.a.createElement(E.a,{bg:"secondary",text:"white"},s.a.createElement(E.a.Body,null,s.a.createElement(E.a.Title,{className:"title-card"},e.scan.severityCounts.medium),s.a.createElement(E.a.Text,null,"Medium")))),s.a.createElement("div",{className:"col-md-2 text-center card-box"},s.a.createElement(E.a,{bg:"success",text:"white"},s.a.createElement(E.a.Body,null,s.a.createElement(E.a.Title,{className:"title-card"},e.scan.severityCounts.low),s.a.createElement(E.a.Text,null,"Low")))),s.a.createElement("div",{className:"col-md-2 text-center card-box"},s.a.createElement(E.a,{bg:"info",text:"white"},s.a.createElement(E.a.Body,null,s.a.createElement(E.a.Title,{className:"title-card"},e.scan.severityCounts.information),s.a.createElement(E.a.Text,null,"Information"))))))}),S=(a(33),function(e){return s.a.createElement("div",null,console.log(e.high),s.a.createElement("div",{className:"divider-large"}),s.a.createElement("div",{className:"body-container"},s.a.createElement("h5",{className:"title-vulnera"},"Vulnerabilities Found"),e.high.map((function(e){return s.a.createElement("div",null,s.a.createElement("h6",null,e.name," ",s.a.createElement("span",{className:"badge badge-warning"},e.severity)),s.a.createElement("p",null,s.a.createElement("b",null,"Description:")," ",e.description),s.a.createElement("p",null,s.a.createElement("b",null,"Solution:")," ",e.solution),s.a.createElement("p",null,s.a.createElement("b",null,"Assets:")," ",e.affectedAssetsNames),s.a.createElement("div",{className:"divider-small"}))})),e.medium.map((function(e){return s.a.createElement("div",null,s.a.createElement("h6",null,e.name," ",s.a.createElement("span",{className:"badge badge-secondary"},e.severity)),s.a.createElement("p",null,s.a.createElement("b",null,"Description:")," ",e.description),s.a.createElement("p",null,s.a.createElement("b",null,"Solution:")," ",e.solution),s.a.createElement("p",null,"Assets: ",e.affectedAssetsNames),s.a.createElement("div",{className:"divider-small"}))})),e.low.map((function(e){return s.a.createElement("div",null,s.a.createElement("h6",null,e.name," ",s.a.createElement("span",{className:"badge badge-success"},e.severity)),s.a.createElement("p",null,s.a.createElement("b",null,"Description:")," ",e.description),s.a.createElement("p",null,s.a.createElement("b",null,"Solution:")," ",e.solution),s.a.createElement("p",null,"Assets: ",e.affectedAssetsNames),s.a.createElement("div",{className:"divider-small"}))})),e.info.map((function(e){return s.a.createElement("div",null,s.a.createElement("h6",null,e.name," ",s.a.createElement("span",{className:"badge badge-info"},e.severity)),s.a.createElement("p",null,s.a.createElement("b",null,"Description:")," ",e.description),s.a.createElement("p",null,s.a.createElement("b",null,"Solution:")," ",e.solution),s.a.createElement("p",null,"Assets: ",e.affectedAssetsNames),s.a.createElement("div",{className:"divider-small"}))}))))}),v=(a(34),function(e){function t(){return Object(l.a)(this,t),Object(c.a)(this,Object(m.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(o.a)(t,[{key:"render",value:function(){for(var e=d.user,t=d.scan,a=t.vulnerabilities,n=t.assets,r=0;r<a.length;r++){for(var i=a[r].affectedAssets,l="",o=0;o<i.length;o++)for(var c=0;c<t.assets.length;c++)i[o]===n[c].id&&(l.length>0&&(l+=", "),l+=n[c].description);a[r].affectedAssetsNames=l}var m=a.filter((function(e){return"high"===e.severity})),u=a.filter((function(e){return"medium"===e.severity})),p=a.filter((function(e){return"low"===e.severity})),E=a.filter((function(e){return"information"===e.severity}));return s.a.createElement("div",null,s.a.createElement(h,{userName:e.displayName,userEmail:e.email}),s.a.createElement("div",{className:"container"},s.a.createElement(f,{scan:t}),s.a.createElement(S,{high:m,medium:u,low:p,info:E,assets:t.assets})))}}]),t}(s.a.Component));i.a.render(s.a.createElement(v,null),document.getElementById("root"))},7:function(e){e.exports=JSON.parse('{"user":{"displayName":"Jane Doe","email":"jane.doe@nccgroup.com","notifications":[{"id":232,"message":"Scan Complete (Monthly Vulnerability Scan)","read":false,"date":"2020-01-01T00:24:29.000Z"},{"id":230,"message":"Scan Complete (Monthly Vulnerability Scan)","read":true,"date":"2019-12-01T00:22:16.000Z"}]},"scan":{"dateStarted":"2020-01-01T00:00:00.000Z","datCompleted":"2020-01-01T00:24:29.000Z","name":"Monthly Vulnerability Scan","status":"completed","scanners":["Nexpose","Openvas","Typhon"],"severityCounts":{"critical":0,"high":2,"medium":2,"low":1,"information":2},"assets":[{"id":9,"name":"T09277","description":"Email server","created":"2018-09-03T13:19:33.000Z","scanCount":20},{"id":33,"name":"T09320","description":"Main Database","created":"2018-01-27T13:24:24.000Z","scanCount":26},{"id":35,"name":"T09746","description":"Firewall","created":"2018-01-27T13:33:55.000Z","scanCount":73}],"vulnerabilities":[{"id":1717,"severity":"high","name":"PHP Vulnerability: CVE-2017-12932","description":"ext/standard/var_unserializer.re in PHP 7.0.x through 7.0.22 and 7.1.x through 7.1.8 is prone to a heap use after free while unserializing untrusted data, related to improper use of the hash API for key deletion in a situation with an invalid array size. Exploitation of this issue can have an unspecified impact on the integrity of PHP.","solution":"Download and apply the upgrade from: Download and apply the upgrade from:","references":"https://bugs.php.net/bug.php?id=74103 ","cvssBaseScore":"7.5","affectedAssets":[33]},{"id":8712,"severity":"high","name":"PHP Vulnerability: CVE-2018-7584","description":"In PHP through 5.6.33, 7.0.x before 7.0.28, 7.1.x through 7.1.14, and 7.2.x through 7.2.2, there is a stack-based buffer under-read while parsing an HTTP response in the php_stream_url_wrap_http_ex function in ext/standard/http_fopen_wrapper.c. This subsequently results in copying a large string.","solution":"Download and apply the upgrade from: Download and apply the upgrade from: Download and apply the upgrade from: Download and apply the upgrade from:","references":null,"cvssBaseScore":"7.5","affectedAssets":[9]},{"id":2910,"severity":"medium","name":"PHP expose_php Information Disclosure","description":"The PHP install on the remote server is configured in a way that allows disclosure of potentially sensitive information to an attacker through a special URL. Such a URL triggers an Easter egg built into PHP itself. Other such Easter eggs likely exist, but Nessus has not checked for them.","solution":"In the PHP configuration file, php.ini, set the value for \'expose_php\' to \'Off\' to disable this behavior. Restart the web server daemon to put this change into effect.","references":"http://www.0php.com/php_easter_egg.php http://seclists.org/webappsec/2004/q4/324","cvssBaseScore":"5.0","affectedAssets":[9,33]},{"id":392,"severity":"medium","name":"HTTP TRACE / TRACK Methods Allowed","description":"The remote web server supports the TRACE and/or TRACK methods. TRACE and TRACK are HTTP methods that are used to debug web server connections.","solution":"Disable these methods. Refer to the plugin output for more information.","references":"http://www.cgisecurity.com/whitehat-mirror/WH-WhitePaper_XST_ebook.pdf http://www.apacheweek.com/issues/03-01-24 http://download.oracle.com/sunalerts/1000718.1.html","cvssBaseScore":"5.0","affectedAssets":[9,33,35]},{"id":1590,"severity":"low","name":"TLS/SSL Server Supports The Use of Static Key Ciphers","description":"The server is configured to support ciphers known as static key ciphers. These ciphers don\'t support \'Forward Secrecy\'. In the new specification for HTTP/2, these ciphers have been blacklisted.","solution":"Configure the server to disable support for static key cipher suites. For Microsoft IIS web servers, see Microsoft Knowledgebase article http://support.microsoft.com/kb/245030/ (245030) for instructions on disabling static key cipher suites. The following recommended configuration provides a higher level of security. This configuration is compatible with Firefox 27, Chrome 22, IE 11, Opera 14 and Safari 7. SSLv2, SSLv3, and TLSv1 protocols are not recommended in this configuration. Instead, use TLSv1.1 and TLSv1.2 protocols. Refer to your server vendor documentation to apply the recommended cipher configuration: ECDHE-RSA-AES128-GCM-SHA256:ECDHE-ECDSA-AES128-GCM-SHA256:ECDHE-RSA-AES256-GCM-SHA384:ECDHE-ECDSA-AES256-GCM-SHA384:DHE-RSA-AES128-GCM-SHA256:DHE-DSS-AES128-GCM-SHA256:kEDH+AESGCM:ECDHE-RSA-AES128-SHA256:ECDHE-ECDSA-AES128-SHA256:ECDHE-RSA-AES128-SHA:ECDHE-ECDSA-AES128-SHA:ECDHE-RSA-AES256-SHA384:ECDHE-ECDSA-AES256-SHA384:ECDHE-RSA-AES256-SHA:ECDHE-ECDSA-AES256-SHA:DHE-RSA-AES128-SHA256:DHE-RSA-AES128-SHA:DHE-DSS-AES128-SHA256:DHE-RSA-AES256-SHA256:DHE-DSS-AES256-SHA:DHE-RSA-AES256-SHA:!aNULL:!eNULL:!EXPORT:!DES:!RC4:!3DES:!MD5:!PSK","references":"http://www.nist.gov/manuscript-publication-search.cfm?pub_id=915295 https://wiki.mozilla.org/Security/Server_Side_TLS https://www.owasp.org/index.php/Transport_Layer_Protection_Cheat_Sheet#Rule_-_Only_Support_Strong_Cryptographic_Ciphers http://support.microsoft.com/kb/245030/ https://tools.ietf.org/html/rfc7540/","cvssBaseScore":"2.6","affectedAssets":[9,33]},{"id":3452,"severity":"information","name":"HTTP Methods Allowed (per directory)","description":"By calling the OPTIONS method, it is possible to determine which HTTP methods are allowed on each directory. As this list may be incomplete, the plugin also tests - if \'Thorough tests\' are enabled or \'Enable web applications tests\' is set to \'yes\' in the scan policy - various known HTTP methods on each directory and considers them as unsupported if it receives a response code of 400, 403, 405, or 501. Note that the plugin output is only informational and does not necessarily indicate the presence of any security vulnerabilities.","solution":null,"references":null,"cvssBaseScore":"0.0","affectedAssets":[9,33,35]},{"id":3453,"severity":"information","name":"Nessus SYN scanner","description":"This plugin is a SYN \'half-open\' port scanner. It shall be reasonably quick even against a firewalled target. Note that SYN scans are less intrusive than TCP (full connect) scans against broken services, but they might cause problems for less robust firewalls and also leave unclosed connections on the remote target, if the network is loaded.","solution":"Protect your target with an IP filter.","references":null,"cvssBaseScore":"0.0","affectedAssets":[9,33,35]}]}}')}},[[24,1,2]]]);
//# sourceMappingURL=main.58a56973.chunk.js.map
import{m as x}from"./markdown-it-37da2622.js";import{H as b}from"./highlight.js-867ee1b1.js";import{_ as w,L as k,t as e,s as g,u as y}from"../js/index-3fe1e07a.js";import{r as n,o as v,q as E,k as i,l as c,t as _,v as l,x as h,y as B,F as A}from"./@vue-50cf967a.js";import"./clipboard-12221ac4.js";import"./entities-96bc23f9.js";import"./uc.micro-174787a3.js";import"./mdurl-4b1f5cdc.js";import"./linkify-it-59decb82.js";import"./punycode-f726180d.js";import"./vue-i18n-2d92e57f.js";import"./@intlify-f70c4c62.js";import"./vue-router-339d5de3.js";/* empty css                      */const G='## git \u4F7F\u7528\u6307\u4EE4\n<a id="user-content-top"></a>\n\n### \u76EE\u9304\n<details open>\n<summary style="cursor: pointer;">&nbsp;\u76EE\u9304\u6E05\u55AE </summary>\n\n- [\u5B89\u88DD\u8207\u4ECB\u7D39](#user-content-install-introduce)\n- [\u5E38\u7528\u5DE5\u4F5C\u6D41](#user-content-workflow)\n  - [Git flow](#user-content-workflow-git-flow)\n  - [Github flow](#user-content-workflow-github-flow)\n  - [Gitlab flow](#user-content-workflow-gitlab-flow)\n- [\u4F7F\u7528\u8005\u8A2D\u5B9A](#user-content-user-settings)\n- [\u958B\u59CB\u5C08\u6848](#user-content-start)\n- [\u4E0A\u50B3\u5E38\u7528\u6307\u4EE4](#user-content-update)\n- [\u5408\u4F75\u5206\u652F(\u542B\u9060\u7AEF)](#user-content-merge)\n- [gitignore](#user-content-gitignore)\n- [git branch \u5E38\u7528\u6307\u4EE4](#user-content-branch)\n- [git remote \u5E38\u7528\u6307\u4EE4](#user-content-remote)\n- [git tag (git \u6A19\u7C64)](#user-content-tag)\n- [git stash (git \u66AB\u5B58)](#user-content-stash)\n- [\u5176\u4ED6\u4F7F\u7528\u6307\u4EE4](#user-content-other)\n\n</details>\n\n<hr id="user-content-install-introduce" style="height: 2px;">\n\n#### <a href="#user-content-top" >\u5B89\u88DD\u8207\u4ECB\u7D39</a>\n- [\u5B89\u88DD git](https://git-scm.com/downloads)\n- \u4EC0\u9EBC\u662F ```git``` ?\n  ```txt\n  git \u70BA\u5206\u6563\u5F0F\u7248\u672C\u7BA1\u7406\u7CFB\u7D71\n  \u7576\u521D\u4F5C\u8005\u70BA\u4E86\u66F4\u597D\u7BA1\u7406 linux \u5167\u6838\u800C\u958B\u767C\u7684\n  git \u6703\u5C07\u6A94\u6848\u6B77\u53F2\u4FDD\u5B58\u4E0B\u4F86\uFF0C\u85C9\u6B64\u53EF\u9084\u539F\u6A94\u6848\u904E\u53BB\u7684\u72C0\u614B\uFF0C\u4E5F\u53EF\u986F\u793A\u5176\u7248\u672C\u5DEE\u7570\n\n  \u6CE8\uFF1A\u751A\u9EBC\u662F\u5206\u6563\u5F0F\u7248\u672C\u7BA1\u7406\u7CFB\u7D71?\n    \u53C8\u7A31\u53BB\u4E2D\u5FC3\u5316\u7248\u672C\u63A7\u5236\uFF0C\u662F\u4E00\u7A2E\u7248\u672C\u63A7\u5236\u7684\u65B9\u5F0F\uFF0C\n    \u5B83\u5141\u8A31\u8EDF\u9AD4\u958B\u767C\u8005\u53EF\u4EE5\u5171\u540C\u53C3\u8207\u4E00\u500B\u8EDF\u9AD4\u958B\u767C\u5C08\u6848\uFF0C\u4F46\u662F\u4E0D\u5FC5\u5728\u76F8\u540C\u7684\u7DB2\u8DEF\u7CFB\u7D71\u4E0B\u5DE5\u4F5C\u3002\n    \u5176\u4F5C\u6CD5\u662F\u5728\u6BCF\u500B\u958B\u767C\u8005\u96FB\u8166\u4E2D\u8907\u88FD\u4E00\u4EFD\u5B8C\u6574\u7684\u4EE3\u78BC\u5EAB\u4EE5\u53CA\u5B8C\u6574\u6B77\u53F2\u3002\n  ```\n\n<hr id="user-content-workflow" style="height: 2px;">\n\n#### <a href="#user-content-top" >\u5E38\u7528\u5DE5\u4F5C\u6D41</a>\n- \u5E38\u7528\u5DE5\u4F5C\u6D41\u6709\u4EE5\u4E0B\u4E09\u7A2E\uFF0C\u5F8C\u9762\u6703\u9010\u4E00\u4ECB\u7D39\n  - ```Git flow```\n  - ```Github flow```\n  - ```Gitlab flow```\n- \u95DC\u65BC ```git merge --no-ff``` \u53C3\u6578\u6307\u4EE4\n  ```txt\n  \u901A\u5E38 master \u8207 develop \u5206\u652F\u5728\u5408\u4F75\u6642\uFF0C\n  master \u7BC0\u9EDE\u6703\u76F4\u63A5\u6307\u5411 develop \u7BC0\u9EDE\n\n  \u82E5\u7528 --no-ff \u6B64\u53C3\u6578\u6307\u4EE4\n  \u4FBF\u6703\u5728 master \u4E0A\u5EFA\u7ACB\u65B0\u7BC0\u9EDE\n  \u4E26\u6703\u7531 develop \u7BC0\u9EDE\u6307\u5411 master \u65B0\u7BC0\u9EDE\n  \u4EE5\u6B64\u4F86\u4FDD\u8B49\u6B77\u53F2\u7248\u672C\u7684\u6E05\u6670\n  ```\n- \u53C3\u8003[\u9023\u7D50](https://medium.com/@lf2lf2111/%E4%B8%89%E7%A8%AE%E7%89%88%E6%8E%A7%E6%B5%81%E7%A8%8B-29c82f5d4469)\n\n<hr id="user-content-workflow-git-flow" style="height: 2px;">\n\n#### <a href="#user-content-top" >Git flow</a>\n- ```Git flow``` \u662F\u6700\u65E9\u8207\u6700\u5EE3\u6CDB\u4F7F\u7528\u7684\u5DE5\u4F5C\u6D41\uFF0C\u4F7F\u7528\u65B9\u5F0F\u5982\u4E0B\uFF1A\n- \u7279\u9EDE\u70BA\u6709\u5169\u500B\u9577\u671F\u5206\u652F\uFF1A\n  - \u4E3B\u5206\u652F ```master```\uFF1A\u5B58\u653E\u5C0D\u5916\u767C\u5E03\u7684\u7A69\u5B9A\u7248\u672C\n  - \u958B\u767C\u5206\u652F ```develop```\uFF1A\u5B58\u653E\u6700\u65B0\u958B\u767C\u7684\u7248\u672C\uFF0C\u9032\u5C55\u5230\u53EF\u767C\u5E03\u6642\u624D\u6703\u8207\u4E3B\u5206\u652F\u5408\u4F75\n- \u4E26\u6709\u4E09\u500B\u81E8\u6642\u5206\u652F\uFF0C\u901A\u5E38\u53EA\u8981\u88AB ```merge``` \u5230\u9577\u671F\u5206\u652F\u5C31\u6703\u88AB\u522A\u9664\uFF1A\n  - \u529F\u80FD\u5206\u652F ```feature branch```\uFF1A\n    ```txt\n    \u901A\u5E38\u4EE5 feature[-/][\u529F\u80FD\u540D] \u70BA\u547D\u540D\u65B9\u5F0F\uFF0C\u5982\uFF1Afeature/addItem\n    \u70BA\u4E86\u958B\u767C\u529F\u80FD\uFF0C\u901A\u5E38\u5F9E develop \u62C9\u51FA\u4F86\u7684\u5206\u652F\n    \u958B\u767C\u5B8C\u6210\u5F8C\u6703\u5408\u4F75\u5165 develop\uFF0C\u70BA\u958B\u767C\u8005\u76F4\u63A5\u4FEE\u6539\u4E26\u767C\u9001\u4EE3\u78BC\u7684\u5206\u652F\n    ```\n  - \u4FEE\u5FA9\u5206\u652F ```hotfix branch```\uFF1A\n    ```txt\n    \u901A\u5E38\u4EE5 fixbug[-/][bug\u529F\u80FD\u540D] \u70BA\u547D\u540D\u65B9\u5F0F\uFF0C\u5982\uFF1Afixbug/cartAddItem\n    \u7576 master \u767C\u751F bug \u6642\uFF0C\u6703\u5F9E master \u62C9\u51FA\u4F86\u7684\u5206\u652F\n    \u4FEE\u5FA9\u5B8C\u4EE5\u5F8C\u6703\u76F4\u63A5\u5408\u4F75\u5165 master \u8207 develop\uFF0C\u4E26\u522A\u9664\u8A72\u5206\u652F\n    ```\n  - \u9810\u767C\u5206\u652F ```release branch```\uFF1A\n    ```txt\n    \u901A\u5E38\u4EE5 release[-/][\u7248\u672C\u540D] \u70BA\u547D\u540D\u65B9\u5F0F\uFF0C\u5982\uFF1Arelease/websocket\n    \u7576\u8981\u4E0A\u7DDA\u5230 master \u4E4B\u524D\uFF0C\u5F9E develop \u62C9\u51FA\u4F86\u7684\u505A"\u7248\u672C\u6E2C\u8A66"\u7684\u5206\u652F\n    \u8A72\u5206\u652F\u53EA\u8655\u7406\u767C\u5E03\u524D\u7684\u63D0\u4EA4\uFF0C\u4E0D\u80FD\u5408\u4F75\u5176\u4ED6\u529F\u80FD\u8B8A\u66F4\n    \u7248\u672C\u6E2C\u8A66\u7D50\u675F\u5F8C\uFF0C\u9700\u5408\u4F75\u5165 master \u8207 develop\uFF0C\u4E26\u522A\u9664\u8A72\u5206\u652F\n    ```\n\n<hr id="user-content-workflow-github-flow" style="height: 2px;">\n\n#### <a href="#user-content-top" >Github flow</a>\n- ```Github flow``` \u901A\u5E38\u9069\u5408\u5341\u4EBA\u4EE5\u4E0A\u5718\u968A\uFF0C\u4E26\u4E00\u5929\u5167\u53EF\u80FD\u6709\u591A\u6B21\u90E8\u5C6C\u958B\u767C\n- ```Github``` \u6BD4 ```Git``` \u591A\u4E86 ```fork```\u3001```pull request\uFF08PR\uFF09```\u3001```issue tracking``` \u7528\u6CD5\n- \u4F7F\u7528 ```git tag``` \u53EF\u4EE5\u8A2D\u7248\u672C\u865F\uFF0C\u5982\uFF1A```v0.1.0```\n- \u4E3B\u8981\u5206\u6210\u4E09\u90E8\u5206\n  - \u5171\u7528\u9060\u7AEF\u5009\u5EAB\uFF1A```master```\n  - \u79C1\u4EBA\u9060\u7AEF\u5009\u5EAB\uFF1A\u5728\u5171\u7528\u9060\u7AEF\u5009\u5EAB ```fork``` \u5230\u81EA\u5DF1\u7684\u79C1\u4EBA\u5009\u5EAB\n  - \u79C1\u4EBA\u672C\u5730\u5009\u5EAB\uFF1A\u8207\u81EA\u5DF1\u7684\u9060\u7AEF\u79C1\u4EBA\u5009\u5EAB\u9032\u884C\u4EE3\u78BC\u63D0\u4EA4\n- \u6D41\u7A0B\u5982\u4E0B\uFF1A\n  ```txt\n                 fork                    clone\n     \u5171\u7528      ---------->     \u79C1\u4EBA     --------->   \u79C1\u4EBA\n   \u9060\u7AEF\u5009\u5EAB    <----------    \u9060\u7AEF\u5009\u5EAB  <---------  \u672C\u5730\u5009\u5EAB\n          merge <- check <- PR            push\n  ```\n- \u4E3B\u8981\u6982\u5FF5\uFF1A\n  - \u8B93 ```master``` \u4FDD\u6301\u53EF\u90E8\u7F72\u7684\u72C0\u614B\n  - \u82E5\u8981\u5275\u5EFA\u65B0\u5206\u652F\uFF0C\u5247\u547D\u540D\u9700\u542B\u6709\u529F\u80FD\u63CF\u8FF0\uFF0C\u5982\uFF1A```addVisaPay```\n    - \u6BCF\u6B21\u63D0\u4EA4\u6642\uFF0C\u5FC5\u9808\u5BEB ```commit message``` \u89E3\u91CB\u63D0\u4EA4\u5167\u5BB9\n  - \u82E5\u6E96\u5099\u5408\u4F75\uFF0C\u5247\u5275\u5EFA ```PR```\uFF0C\u4E26\u85C9\u7531 ```PR``` \u9032\u884C\u4EA4\u6D41\n    - \u82E5\u8981\u8ACB\u4EBA\u5E6B\u5FD9\u6AA2\u95B1\uFF0C\u53EF\u4EE5\u7528 ```@``` \u8ACB\u6C42\u5176\u4ED6\u4EBA\u53CD\u994B\n  - \u78BA\u8A8D\u5B8C\u6210\u5F8C\u8207 ```master``` \u5408\u4F75\u4E26\u4E14"\u4E00\u5B9A\u8981\u6E2C\u8A66"\uFF0C\u6700\u5F8C\u7ACB\u523B\u90E8\u7F72\n  - ```issue tracking```\uFF1A\n    - [\u8A73\u7D30\u53C3\u8003](https://github.com/g0v/dev/wiki/%E5%A6%82%E4%BD%95%E4%BD%BF%E7%94%A8-Issue-Tracker-%E5%9B%9E%E5%A0%B1%E5%95%8F%E9%A1%8C%E3%80%81%E6%8F%90%E4%BA%A4%E5%BB%BA%E8%AD%B0)\n    ```txt\n    \u958B\u767C\u6642\u53EF\u7D66\u5C08\u6848\u6A19\u8A18 issue \u6216\u5176\u4ED6\u6A19\u7C64\uFF0C\n    \u82E5\u63D0\u4EA4\u8A0A\u606F\u542B\u6709 fix #1(issue\u7DE8\u865F)\n    \u53EF\u76F4\u63A5\u5C0D\u61C9\u5230\u76F8\u95DC\u7DE8\u865F\u7684 issue\n    ```\n\n<hr id="user-content-workflow-gitlab-flow" style="height: 2px;">\n\n#### <a href="#user-content-top" >Gitlab flow</a>\n- ```Gitlab flow``` \u6700\u4E3B\u8981\u539F\u5247\u70BA ```Upstream First(\u4E0A\u6E38\u512A\u5148)```\uFF0C\u4E3B\u8981\u6982\u5FF5\u5982\u4E0B\uFF1A\n  - ```master``` \u70BA\u6240\u6709\u5206\u652F\u7684\u4E0A\u6E38\n  - \u9700\u4E00\u6B21\u5408\u4F75\u4E26\u4E14\u901A\u904E\u6E2C\u8A66\u624D\u53EF\u5F80\u4E0B\u5408\u4F75\n  - \u5408\u4F75\u9806\u5E8F\u5F88\u91CD\u8981\uFF0C\u53EA\u6709\u7DCA\u6025\u60C5\u6CC1\u624D\u53EF\u8DF3\u904E\u4E0A\u6E38\u8207\u4E0B\u6E38\u5408\u4F75\n- ```Gitlab flow``` \u5206\u5169\u7A2E\u60C5\u6CC1\u5C0D\u61C9\u4E0D\u540C\u7684\u958B\u767C\u6D41\u7A0B\n  - \u6301\u7E8C\u767C\u5E03(Environment Branches & Upstream First)\n    ```txt\n    \u5728\u6301\u7E8C\u767C\u5E03\u7684\u5C08\u6848\uFF0C\u5EFA\u8B70\u53EF\u591A\u51FA\u4E00\u500B\u9810\u767C\u5206\u652F pre-production\n    \u5982\u679C\u751F\u7522\u74B0\u5883(production)\u767C\u751F\u932F\u8AA4\uFF0C\n    \u5247\u5728 master \u5EFA\u4E00\u500B\u65B0\u5206\u652F\uFF0C\u4FEE\u6539\u5B8C\u5F8C\u5408\u4F75\u5230 master\uFF0C\n    \u4E26\u7D93\u904E\u6E2C\u8A66\uFF0C\u7E7C\u7E8C\u5F80\u9810\u767C\u5206\u652F(pre-production)\u5408\u4F75\uFF0C\u518D\u7D93\u904E\u6E2C\u8A66\u624D\u80FD\u5408\u4F75\u5230\u751F\u7522\u74B0\u5883\n    \n    \u6D41\u7A0B(\u82E5 production \u767C\u751F\u932F\u8AA4\u5247\u8DD1\u6B64\u6D41\u7A0B(\u5230\u6709\u932F\u8AA4\u7684\u4E0A\u6E38))\uFF1A\n    \u5EFA\u7ACB\u7684\u65B0\u5206\u652F -> master -> pre-production -> production\n    \n    \u500B\u4EBA\u7D50\u8AD6\uFF1A\u4EE5 production \u70BA\u6700\u7D42\u7522\u51FA\uFF0C\u4E00\u8DEF\u5408\u4F75\u5230 production \n    ```\n  - \u7248\u672C\u767C\u5E03(Release Branches & Upstream First)\n    ```txt\n    \u5728\u7248\u672C\u767C\u5E03\u7684\u9805\u76EE\n    \u5EFA\u8B70\u6BCF\u4E00\u500B\u7A69\u5B9A\u7248\u672C(release \u5206\u652F)\u90FD\u5F9E master \u5206\u652F\u62C9\u51FA\u4F86\u4E00\u500B\u65B0\u5206\u652F\uFF0C\u6BD4\u5982 1\u20131-stable\u30011\u20132-stable\n    \u82E5\u8981\u4FEE\u5FA9\u7A69\u5B9A\u7248\u672C\uFF0C\u5247\u5728 master \u5275\u5EFA\u4E00\u500B\u4FEE\u5FA9\u5206\u652F\n    \u4FEE\u88DC\u5B8C\u5F8C\uFF0C\u7167\u8457\u4E0A\u6E38\u512A\u5148\u898F\u5247\uFF0C\u5148\u5408\u4F75\u5230 master\u5206\u652F\uFF0C\n    \u78BA\u8A8D\u5B8C\u624D\u80FD\u5920\u5408\u4F75\u5230\u7A69\u5B9A\u7248\u672C\uFF0C\u4E26\u4E14\u66F4\u65B0\u7248\u672C\u865F\u3002\n    \n    \u6D41\u7A0B(\u82E5 1\u20132-stable \u767C\u751F\u932F\u8AA4\u5247\u9808\u8DD1\u6B64\u6D41\u7A0B)\uFF1A\n    \u5EFA\u7ACB\u7684\u65B0\u5206\u652F -> master -> 1\u20132-stable\n    \n    \u500B\u4EBA\u7D50\u8AD6\uFF1A\u4EE5 master \u70BA\u4E3B\uFF0C\u4F86\u7522\u751F\u65B0\u7A69\u5B9A\u7248\u672C\u7BC0\u9EDE\n    ```\n\n<hr id="user-content-user-settings" style="height: 2px;">\n\n#### <a href="#user-content-top" >\u4F7F\u7528\u8005\u8A2D\u5B9A</a>\n- \u8A2D\u5B9A\u4F7F\u7528\u8005\n  - \u8A2D\u5B9A\u540D\u5B57\uFF1A```git config --global user.name "[\u540D\u5B57]"```\n  - \u8A2D\u5B9A\u4FE1\u7BB1\uFF1A```git config --global user.email "[\u4FE1\u7BB1]"```\n- \u67E5\u770B\u4F7F\u7528\u8005\u8CC7\u8A0A\n  - ```git config --global user.name```\n  - ```git config --global user.email```\n\n<hr id="user-content-start" style="height: 2px;">\n\n#### <a href="#user-content-top" >\u958B\u59CB\u5C08\u6848</a>\n- \u7121\u539F\u59CB\u6A94\u6848\n  - \u521D\u59CB\u5316\uFF1A```git init```\n  - \u65B0\u589E\u9060\u7AEF\u4F4D\u7F6E\uFF1A```git remote add [\u540D\u7A31(origin)] [\u7DB2\u5740]```\n    - \u7DB2\u5740\u53EF\u900F\u904E\u958B\u65B0\u5C08\u6848\u5F8C\u53D6\u5F97\n  - \u5C07\u65B0\u589E\u5167\u5BB9\u5168\u90E8\u52A0\u5165\uFF1A```git add .```\n  - \u52A0\u5165\u521D\u59CB\u5316\u8A0A\u606F\uFF1A```git commit -m init```\n  - \u4E0A\u50B3\u9060\u7AEF\uFF1A```git push origin master```\n    - ```master```\uFF1A\u4EE3\u8868\u73FE\u5728\u5206\u652F\n    - ```origin```\uFF1A\u4EE3\u8868\u9060\u7AEF\u4F4D\u7F6E\n- \u82E5\u6709\u539F\u59CB\u5C08\u6848\n  - \u7B2C\u4E00\u7A2E\u65B9\u5F0F\uFF1A```git init``` -> ```git remote add [\u540D\u7A31(origin)] [\u7DB2\u5740]``` -> ```git pull [\u540D\u7A31(origin)] [\u5206\u652F]```\n  - \u7B2C\u4E8C\u7A2E\u65B9\u5F0F\uFF1A```git clone [\u7DB2\u5740]```(\u4F7F\u7528 ```git remote -v``` \u6703\u9644\u6709\u9060\u7AEF\u7DB2\u5740)\n    - \u8907\u88FD\u4ED6\u4EBA\u5C08\u6848\u5206\u652F\uFF1A```git clone [\u7DB2\u5740] [\u5206\u652F\u540D\u7A31]```\n    - \u82E5\u8981\u89C0\u770B\u9060\u7AEF\u5206\u652F\u8CC7\u6599\uFF1A```git checkout [\u9060\u7AEF\u5206\u652F\u540D\u7A31(\u53EF\u7531 git branch -r \u89C0\u770B)]```\n      - \u5982\uFF1A```git checkout origin/experimental```\n    - \u53D6\u5F97\u9060\u7AEF\u5206\u652F\u8CC7\u6599(\u672C\u5730\u6703\u591A\u4E00\u500B\u65B0\u5206\u652F)\uFF1A```git checkout [\u9060\u7AEF\u5206\u652F\u540D\u7A31]```\n      - \u5982\uFF1A```git checkout experimental```\n    - \u8907\u88FD\u55AE\u4E00\u5206\u652F\uFF1A```git clone --single-branch --branch [\u5206\u652F\u540D\u7A31] [\u9060\u7AEF\u4F4D\u7F6E]```\n      - ```git clone -b [\u5206\u652F\u540D\u7A31] [\u9060\u7AEF\u4F4D\u7F6E]```\n    - \u66F4\u65B0\u9060\u7AEF\u6240\u6709\u5206\u652F\uFF1A```git remote update origin --prune```\n    - \u53D6\u5F97\u9060\u7AEF\u8CC7\u8A0A(\u82E5\u53D6\u5F97\u4E0D\u5230)\uFF1A```git fetch origin```\n    \n<hr id="user-content-update" style="height: 2px;">\n\n#### <a href="#user-content-top" >\u4E0A\u50B3\u5E38\u7528\u6307\u4EE4</a>\n- 1.\u67E5\u770B\u76EE\u524D\u72C0\u614B\uFF1A```git status```\n  - \u82E5\u5C0D\u55AE\u4E00\u6A94\u6848\u60F3\u9084\u539F\u5230\u4E0A\u500B ```commit``` \u72C0\u614B\uFF1A```git checkout [\u6A94\u540D]```\n  - \u5168\u90E8\u9084\u539F\u5230\u4E0A\u4E00\u7248\u72C0\u614B\uFF1A```git reset --hard```\n- 2.\u52A0\u5165\u5168\u90E8\u5230\u7D22\u5F15\uFF1A```git add .```\n  - \u52A0\u5165\u55AE\u4E00\u6A94\u6848\u9032\u7D22\u5F15\uFF1A```git add [\u6A94\u540D]```\n  - \u82E5\u8981\u53D6\u6D88\u5168\u90E8\u7D22\u5F15\u72C0\u614B\uFF1A```git reset HEAD``` \u6216 ```git reset```\n  - \u53D6\u6D88\u55AE\u7B46\uFF1A```git reset HEAD [\u6A94\u540D]``` \u6216 ```git reset [\u6A94\u540D]```\n- 3.```git commit -m [\u7248\u672C\u8A0A\u606F]```\n  - \u82E5\u60F3\u4FEE\u6539\u525B\u525B"\u6700\u65B0"\u7684 ```commit``` \u8A0A\u606F\uFF1A```git commit --amend -m [\u4FEE\u6539\u7684\u8A0A\u606F]```\n- 4.```git push [\u9060\u7AEF\u4F4D\u7F6E\u6216\u540D\u7A31(origin)] [\u5206\u652F\u540D\u7A31]```\n  \n<hr id="user-content-merge" style="height: 2px;">\n\n#### <a href="#user-content-top" >\u5408\u4F75\u5206\u652F(\u542B\u9060\u7AEF)</a>\n- \u901A\u5E38\u8A72\u968E\u6BB5\u6703\u4EA4\u7531 ```leader``` \u64CD\u4F5C\uFF0C\u78BA\u4FDD\u5C08\u6848\u6B63\u5E38\u904B\u884C\n- 1.\u53D6\u5F97\u4E3B\u5206\u652F\u7684\u66F4\u65B0\uFF1A```git pull origin [\u4E3B\u5206\u652F]```\n- 2.\u82E5\u7121\u554F\u984C\uFF0C\u5247\u5207\u63DB\u5230\u4E3B\u5206\u652F\uFF1A```git checkout [\u4E3B\u5206\u652F]```\n- 3.\u5C07\u5206\u652F\u5408\u4F75\u9032\u4E3B\u5206\u652F\uFF1A```git merge [\u5206\u652F]```\n  - \u52A0\u5165\u5408\u4F75\u8A0A\u606F\uFF1A`git merge [\u5206\u652F] -m "merge message"`\n- 4.\u5C07\u4E3B\u5206\u652F\u8CC7\u8A0A\u4E0A\u50B3\u81F3\u9060\u7AEF\uFF1A```git push origin [\u4E3B\u5206\u652F]```\n- 5.\u522A\u9664\u9060\u7AEF\u5206\u652F\uFF1A\n  - \u5148\u522A\u9664\u672C\u5730\u5206\u652F\uFF1A```git branch -d [\u5206\u652F]```\n  - \u5C07\u522A\u9664\u5206\u652F\u8CC7\u8A0A\u4E0A\u50B3\u5230\u9060\u7AEF\uFF1A```git push origin :[\u5206\u652F]```\n- \u82E5\u5408\u4F75\u78B0\u5230\u932F\u8AA4\u60C5\u6CC1\n  - \u5230\u8A72\u6A94\u6848\u9032\u884C\u7DE8\u4FEE\n  - \u52A0\u5165\u4FEE\u6539\uFF1A```git add . ```\n  - \u78BA\u8A8D\u4FEE\u6539\uFF1A```git commit \'[merge\u54EA\u4E9B\u6771\u897F]\'```\n  - \u5408\u4F75\u5C08\u6848\uFF1A```git merge [\u5206\u652F] -m "merge message"```\n  - \u4E0A\u50B3\u66F4\u65B0\uFF1A```git push origin [\u4E3B\u5206\u652F]```\n    \n<hr id="user-content-gitignore" style="height: 2px;">\n\n#### <a href="#user-content-top" >gitignore</a>\n- \u76F4\u63A5\u4F7F\u7528\u8A18\u4E8B\u672C\u65B0\u589E\u5373\u53EF( ```utf-8``` \u7DE8\u78BC\u5B58\u53D6)\n  - \u6216\u4F7F\u7528\u7D42\u7AEF\u6A5F\u5275\u5EFA\uFF1A```touch .gitignore```\n- \u53EF\u4EE5\u89C0\u770B\u500B\u7A0B\u5F0F\u8A9E\u8A00\u9700\u8981\u5FFD\u7565\u7684\u6A94\u6848\uFF1A[gitignore](https://github.com/github/gitignore)\n- \u5FFD\u7565\u6574\u500B\u8CC7\u6599\u593E\uFF1A\u8CC7\u6599\u593E\u540D/\n- \u5FFD\u7565\u985E\u4F3C\u9644\u6A94\u540D\u6A94\u6848\uFF1A*.\u526F\u6A94\u540D\n- \u82E5\u5FFD\u7565\u767C\u751F\u932F\u8AA4\u4F7F\u7528\u6307\u4EE4\u77EF\u6B63:\n  ```txt\n  git rm -r --cached .\n  git add .\n  git commit -m "fixed untracked files"\n  ```\n\n<hr id="user-content-branch" style="height: 2px;">\n\n#### <a href="#user-content-top" >git branch \u5E38\u7528\u6307\u4EE4</a>\n- \u67E5\u770B\u6240\u6709\u9060\u7AEF\u5206\u652F\uFF1A```git branch -r```\n  - \u7D50\u675F\uFF1A```q```\n- \u67E5\u770B\u6240\u6709\u5206\u652F\uFF1A```git branch -a```\n  - \u7D50\u675F\uFF1A```q```\n- \u67E5\u770B\u672C\u5730\u6240\u6709\u5206\u652F\u8207\u6240\u5728\u5206\u652F\uFF1A```git branch```\n- \u522A\u9664\u5206\u652F\uFF1A```git branch -d [\u5206\u652F\u540D\u7A31]```\n- \u65B0\u589E [\u65B0\u5206\u652F] \u65BC [\u4E3B\u5206\u652F] \u5E95\u4E0B\uFF1A```git branch [\u65B0\u5206\u652F] [\u4E3B\u5206\u652F]```\n  - \u4E3B\u5206\u652F\u53EF\u52A0\u53EF\u4E0D\u52A0\uFF0C\u4F46\u9700\u5728\u4E3B\u5206\u652F\u5E95\u4E0B \n\n<hr id="user-content-remote" style="height: 2px;">\n\n#### <a href="#user-content-top" >git remote \u5E38\u7528\u6307\u4EE4</a>\n- \u91CD\u8A2D\u9060\u7AEF\u5206\u652F\u7DB2\u5740\uFF1A```git remote set-url [\u9060\u7AEF\u4F4D\u7F6E\u540D\u7A31] [url]```\n- \u6539\u8B8A\u9060\u7AEF\u4F4D\u7F6E\u540D\u7A31\uFF1A```git remote rename [\u539F\u540D\u7A31] [\u4FEE\u6539\u540D\u7A31]```\n- \u67E5\u770B\u6709\u54EA\u4E9B\u9060\u7AEF\u4F4D\u7F6E\uFF1A```git remote -v```\n- \u65B0\u589E\u9060\u7AEF\u4F4D\u7F6E\uFF1A```git remote add [\u540D\u7A31(origin)] [\u7DB2\u5740]```\n- \u672C\u5730\u66F4\u65B0\u9060\u7AEF\u6240\u6709\u8CC7\u8A0A\u8207\u5206\u652F\uFF1A```git remote update origin --prune```\n\n<hr id="user-content-tag" style="height: 2px;">\n\n#### <a href="#user-content-top" >git tag (git \u6A19\u7C64)</a>\n- \u5728\u6B64\u7248\u672C\u65B0\u589E\u6A19\u7C64\uFF1A```git tag [\u6A19\u7C64\u540D\u7A31]```\n  - \u5982\uFF1A```git tag v1```\n- \u65B0\u589E\u8A73\u7D30\u6A19\u7C64\uFF1A```git tag -am \'[\u6558\u8FF0]\' [\u6A19\u7C64\u540D\u7A31]```\n- \u5207\u63DB\u5230\u6B64\u6A19\u7C64\u7248\u672C\uFF1A```git checkout [\u6A19\u7C64\u540D\u7A31]```\n- \u67E5\u770B\u6240\u6709\u6A19\u7C64\uFF1A```git tag```\n- \u67E5\u770B\u6240\u6709\u8A73\u7D30\u6A19\u7C64\u5167\u5BB9\uFF1A```git tag -n```\n  - \u82E5\u6C92\u6709\u8A2D\u5B9A\u6A19\u7C64\u5167\u5BB9\u5247\u6703\u81EA\u5E36\u7576\u521D\u6B64\u7248\u672C ```commit``` \u6558\u8FF0\u5167\u5BB9\n- \u522A\u9664\u6A19\u7C64\uFF1A```git tag -d [\u6A19\u7C64\u540D\u7A31]```\n\n<hr id="user-content-stash" style="height: 2px;">\n\n#### <a href="#user-content-top" >git stash (git \u66AB\u5B58)</a>\n- \u66AB\u5B58\u7576\u524D\u7248\u672C\u9032\u5EA6\uFF1A```git stash```\n  - ```Untracked``` \u72C0\u614B\u7684\u6A94\u6848\u9810\u8A2D\u6C92\u8FA6\u6CD5\u4F7F\u7528\uFF0C\u9700\u984D\u5916\u4F7F\u7528 ```-u```)\n  - \u4F7F\u7528\u5B8C\u6703\u6062\u5FA9\u5230\u672A\u66F4\u6539\u7684\u7248\u672C\uFF0C\u9019\u6642\u4F7F\u7528 ```git status``` \u6703\u767C\u73FE ```nothing to commit```\n- \u9084\u539F\u6700\u65B0\u7684\u66AB\u5B58(\u6700\u65B0\u66AB\u5B58\u6703\u522A\u9664)\uFF1A```git stash pop```\n  - \u9084\u539F\u6307\u5B9A\u7248\u672C\u66AB\u5B58\uFF1A```git stash pop stash@{2}```\n- \u4E0D\u522A\u9664\u66AB\u5B58\u4E26\u5957\u7528\u5206\u652F\u4E0A\uFF1A```git stash apply stash@{2}``` \u6216 ```git stash apply```\n- \u6E05\u9664\u6700\u65B0\u7684\u66AB\u5B58\uFF1A```git stash drop```\n  - \u522A\u9664\u6307\u5B9A\u66AB\u5B58\uFF1A```git stash drop stash@{0}```\n- \u6E05\u9664\u5168\u90E8\u66AB\u5B58\uFF1A```git stash clear```\n- \u67E5\u770B\u76EE\u524D\u6240\u6709\u66AB\u5B58\uFF1A```git stash list```\n\n<hr id="user-content-other" style="height: 2px;">\n\n#### <a href="#user-content-top" >\u5176\u4ED6\u4F7F\u7528\u6307\u4EE4</a>\n- \u5207\u63DB\u81F3\u8A72\u7248\u672C\u7D00\u9304\n  - ```git checkout [commit \u524D4\u78BC\uFF0C\u53EF\u7531 git log \u89C0\u770B]```\n  - \u5FA9\u539F\u5247\u76F4\u63A5\u5207\u63DB\u5230\u539F\u672C\u5206\u652F\u5373\u53EF\n- \u6551\u56DE\u4E0D\u5C0F\u5FC3\u522A\u9664\u7684\u6A94\u6848\n  - \u5C07 ```xxx.txt``` \u7684\u6A94\u6848\u56DE\u5FA9\u5230\u4E0A\u4E00\u6B21\u7684 ```commit``` \u7684\u72C0\u614B\uFF1A```git checkout xxx.txt```\n  - \u5C07\u56DE\u5FA9\u5230\u5169\u500B\u7248\u672C\u4EE5\u524D\u7684 ```xxx.txt```\uFF1A```git checkout HEAD~2 xxx.txt```\n  - \u5C07\u6A94\u6848\u56DE\u5FA9\u5230\u4E0A\u4E00\u6B21 ```commit``` \u7684\u72C0\u614B\uFF1A```git checkout .```\n- \u67E5\u770B\u8A72\u6A94\u6848\u4FEE\u6539\u7684\u6240\u6709\u7D00\u9304\uFF1A```git blame [\u6A94\u540D]```\n- \u67E5\u770B\u79FB\u52D5 ```HEAD``` \u79FB\u52D5\u6B77\u7A0B(\u6BCF\u7576 ```HEAD``` \u6709\u79FB\u52D5\uFF0C\u5C31\u6703\u5728\u9019\u8A18\u4E0A\u4E00\u7B46)\uFF1A```git reflog```\n';let o=n(!0),u=n(!1),m=n(!0),d=n(!1);const p=n(""),C={name:"GitNote",components:{Loading:k},setup(){return v(async()=>{if(o.value){const r=x({html:!0,linkify:!0,typographer:!0,highlight(s,a){return b.highlight(s,{language:a}).value}});p.value=r.render(`${G}`),await e(()=>{o.value=!1},1e3).then(()=>e(()=>{m.value=!1,d.value=!0},500)).then(()=>e(()=>{u.value=!0,g()},100))}else g()}),y(),{showLoading:o,showContent:u,displayLoading:m,displayContent:d,htmlContent:p}}},L=["innerHTML"];function H(r,s,a,t,D,F){const f=E("Loading");return i(),c(A,null,[t.displayLoading?(i(),_(f,{key:0,class:l({"content--hide":!t.showLoading,"content--show":t.showLoading})},null,8,["class"])):h("",!0),t.displayContent?(i(),c("div",{key:1,class:l({"markdown-content":!0,"content--hide":!t.showContent,"content--show":t.showContent})},[B("div",{class:"markdown-body",innerHTML:t.htmlContent},null,8,L)],2)):h("",!0)],64)}const O=w(C,[["render",H]]);export{O as default};

import{m as f}from"./markdown-it-37da2622.js";import{H as w}from"./highlight.js-867ee1b1.js";import{_ as v,L as x,t,s as m,u as k}from"../js/index-3fe1e07a.js";import{r as e,o as _,q as C,k as o,l as p,t as L,v as d,x as l,y as z,F as V}from"./@vue-50cf967a.js";import"./clipboard-12221ac4.js";import"./entities-96bc23f9.js";import"./uc.micro-174787a3.js";import"./mdurl-4b1f5cdc.js";import"./linkify-it-59decb82.js";import"./punycode-f726180d.js";import"./vue-i18n-2d92e57f.js";import"./@intlify-f70c4c62.js";import"./vue-router-339d5de3.js";/* empty css                      */const S='## \u5E38\u7528\u6307\u4EE4 \u7B46\u8A18\n<a id="user-content-top"></a>\n\n### \u76EE\u9304\n<details open>\n<summary style="cursor: pointer;">&nbsp;\u6307\u4EE4\u7B46\u8A18 </summary>\n\n- [npm/pnpm/yarn \u5E38\u7528\u6307\u4EE4](#user-content-npm-pnpm)\n- [Linux \u5E38\u7528\u6307\u4EE4](#user-content-linux)\n- [tar \u5E38\u7528\u6307\u4EE4](#user-content-tar)\n- [VMware Workstation \u5E38\u7528\u6307\u4EE4](#user-content-vmware-workstation)\n- [VSCode \u7591\u96E3\u96DC\u75C7](#user-content-vscode)\n\n</details>\n\n<hr id="user-content-npm-pnpm" style="height: 4px;">\n\n#### <a href="#user-content-top">npm/pnpm \u5E38\u7528\u6307\u4EE4</a>\n- \u5DE6\u53F3\u908A\u6307\u4EE4\u7B49\u50F9\n  | `npm` | `pnpm` | `yarn` | \u89E3\u91CB |\n  | :-- | :-- | :-- | :-- |\n  | `npm [install or i]` | `pnpm [install or i]` | `yarn [install or i]` | \u5B89\u88DD\u5DE5\u4F5C\u76EE\u9304\u4E0B\u7684\u4F9D\u8CF4\u5305 |\n  | `npm i <pkg>` | `pnpm add <pkg>` | `yarn add <pkg>` | \u5B89\u88DD\u81F3 `dependencies` |\n  | `npm i <pkg> -D` | `pnpm add <pkg> -D` | `yarn add <pkg> -D` | \u5B89\u88DD\u81F3 `devDependencies` |\n  | `npm i <pkg> -O` | `pnpm add <pkg> -O` | `yarn add <pkg> -O` | \u5B89\u88DD\u81F3 `optionalDependencies` |\n  | `npm run <cmd>` | `pnpm <cmd>` | `yarn run <cmd>`| \u57F7\u884C\u547D\u4EE4 |\n  | `npm i <pkg>@next` | `pnpm add <pkg>@next` | `yarn add <pkg>@next` | \u5B89\u88DD `next tag` |\n  | `npm i <pkg>@<version>` | `pnpm add <pkg>@<version>` | `yarn add <pkg>@<version>` | \u5B89\u88DD `\u6307\u5B9A\u7248\u672C` |\n\n<hr id="user-content-linux" style="height: 2px;">\n\n#### <a href="#user-content-top">Linux \u5E38\u7528\u6307\u4EE4</a>\n- \u67E5\u8A62\u76EE\u524D\u7D55\u5C0D\u8DEF\u5F91\uFF1Apwd\n- \u67E5\u8A62\u76EE\u524D\u8CC7\u6599\u593E\u6240\u6709\u5B50\u6A94\u6848\u76EE\u9304\uFF1Als\n  - \u986F\u793A\u6240\u6709\u8CC7\u8A0A\uFF1Als -l \n- \u8CC7\u6599\u593E\u8207\u6A94\u6848\u6B0A\u9650\u89E3\u91CB\n  - \u82E5\u6709\u500B\u6A94\u6848\uFF0C\u540D\u7A31\u70BA doc\uFF0C\u5247\u67E5\u770B\u8A72\u6A94\u6848\u6B0A\u9650\u6307\u4EE4\uFF1All doc\n  - \u82E5\u8F38\u5165\u5F8C\u53D6\u5F97\u8CC7\u8A0A\u70BA\uFF1A```-rw-r--r-- 1 root root_group 898 \u4E8C 24 13:23 doc```\uFF0C\u5247\u8A73\u7D30\u89E3\u91CB\u5982\u4E0B\uFF1A\n    ```txt\n    \u628A\u53D6\u5F97\u7684\u8CC7\u8A0A\u5206\u70BA6\u500B\u90E8\u4EFD\uFF1A\n    -    rw-  r--  r--   1   root root_group 898  \u4E8C   24   13:23  doc\n    (1)  (2)  (3)  (4)  (5)  (6)     (7)     (8)  (9) (10)  (11)   (12)\n    \n    (1)~(12) \u8AAA\u660E\u5982\u4E0B\n    (1) \u4EE3\u8868\u662F\u6A94\u6848\u6216\u8CC7\u6599\u593E\uFF0C-\u4EE3\u8868\u662F\u6A94\u6848\uFF0Cd\u4EE3\u8868\u662F\u8CC7\u6599\u593E\n    (2) \u4EE3\u8868\u64C1\u6709\u8005\u7684\u6A94\u6848\u6B0A\u9650\uFF0C\u5B8C\u6574\u6B0A\u9650\u662Frwx\uFF0C\u4EE3\u8868\u53EF\u8B80\u3001\u53EF\u5BEB\u3001\u53EF\u57F7\u884C\u3002\u82E5\u7121\u8A72\u6B0A\u9650\u5247\u4EE5-\u4EE3\u66FF\uFF0C\u6240\u4EE5rw-\uFF0C\u4EE3\u8868\u53EF\u8B80\u3001\u53EF\u5BEB\uFF0C\u4F46\u4E0D\u53EF\u57F7\u884C\n    (3) \u4EE3\u8868\u6240\u5C6C\u7FA4\u7D44\u7684\u6A94\u6848\u6B0A\u9650\uFF0C\u5B8C\u6574\u6B0A\u9650\u662Frwx\uFF0C\u4EE3\u8868read, write, \u57F7\u884C\u3002\u82E5\u7121\u8A72\u6B0A\u9650\u5247\u4EE5-\u4EE3\u66FF\uFF0C\u6240\u4EE5r--\uFF0C\u4EE3\u8868\u53EA\u6709\u8B80\u53D6\u6B0A\u9650\uFF0C\u4E0D\u53EF\u5BEB\u4E5F\u4E0D\u53EF\u57F7\u884C\n    (4) \u4EE3\u8868\u975E\u64C1\u6709\u8005\u4E14\u5E33\u865F\u4E0D\u5728\u7FA4\u7D44\u5167\u7684\u4EBA\uFF0C\u7684\u6A94\u6848\u6B0A\u9650\n    (5) \u4EE3\u8868\u88E1\u9762\u5305\u542B\u5E7E\u500B\u6A94\u6848\n    (6) \u64C1\u6709\u8005\u5E33\u865F\n    (7) \u6240\u5C6C\u7FA4\u7D44\n    (8) \u4EE3\u8868\u8A72\u6A94\u6848\u6216\u8CC7\u6599\u593E\u5927\u5C0F(Bytes)\n    (9) \u6708\u4EFD\n    (10) \u65E5\u671F\n    (11) \u6642\u9593\n    (12) \u6A94\u6848\u6216\u8CC7\u6599\u593E\u540D\u7A31\n    ```\n- \u8A2D\u5B9A\u6B0A\u9650\u6307\u4EE4 ```chmod``` \u7684 ```rwx``` \u89E3\u91CB\uFF1A \n  - ```-R```\uFF1A\u4EE3\u8868\u905E\u8FF4\u5C07\u8CC7\u6599\u593E\u5E95\u4E0B\u7684\u5B50\u76EE\u9304\u6A94\u6848\u7686\u8A2D\u5B9A\u4E00\u6A23\u6B0A\u9650\n  - ```r```\uFF1A\u4EE3\u8868 ```read(\u8B80\u53D6)```\uFF0C\u5C0D\u61C9\u6578\u5B57 ```4```\n  - ```w```\uFF1A\u4EE3\u8868 ```write(\u5BEB\u5165)```\uFF0C\u5C0D\u61C9\u6578\u5B57 ```2```\n  - ```x```\uFF1A\u4EE3\u8868 ```execute(\u57F7\u884C)```\uFF0C\u5C0D\u61C9\u6578\u5B57 ```1```\n  - \u6307\u4EE4\u89E3\u91CB\u7BC4\u4F8B\n    ```txt\n    \u82E5\u6307\u4EE4\u70BA sudo chmod -R 777 /home/root/dir \u5247\u4EE3\u8868\uFF1A\n    \u5C07 /home/root/dir \u8CC7\u6599\u593E(-R:\u542B\u5E95\u4E0B\u6240\u6709\u5B50\u76EE\u9304\u6A94\u6848)\u8A2D\u5B9A\n    \u64C1\u6709\u8005\u3001\u6240\u5C6C\u7FA4\u7D44\u3001\u975E\u64C1\u6709\u8005\u4E14\u5E33\u865F\u4E0D\u5728\u7FA4\u7D44\u5167\u7684\u4EBA 4+2+1(7:\u53EF\u8B80\u53EF\u5BEB\u53EF\u57F7\u884C)\u6B0A\u9650\n    ```\n - \u8A2D\u5B9A\u6A94\u6848\u8CC7\u6599\u593E\u64C1\u6709\u8005 ```chown```\n   - \u6307\u4EE4\u89E3\u91CB\u7BC4\u4F8B\n     ```txt\n     * myfile \u4E5F\u53EF\u4EE5\u662F\u8CC7\u6599\u593E *\n     # \u5C07 myfile \u7684\u64C1\u6709\u8005\u6539\u70BA myuser\n     sudo chown myuser myfile\n     # \u5C07 myfile \u7684\u7FA4\u7D44\u6539\u70BA mygroup\n     sudo chown :mygroup myfile\n     # \u540C\u6642\u66F4\u6539\u64C1\u6709\u8005\u8207\u7FA4\u7D44\n     sudo chown myuser:mygroup myfile\n     # \u8F38\u51FA\u57F7\u884C\u7D50\u679C\n     sudo chown -v myuser:mygroup myfile\n     # \u4E0D\u8F38\u51FA\u4EFB\u4F55\u932F\u8AA4\u8A0A\u606F\n     sudo chown -f myuser:mygroup myfile\n     # \u905E\u8FF4\u66F4\u6539\u6574\u500B\u76EE\u9304\u4E0B\u7684\u6240\u6709\u6A94\u6848\n     sudo chown -R myuser:mygroup myfolder\n     # \u78BA\u8A8D\u820A\u7684\u64C1\u6709\u8005\u8207\u7FA4\u7D44\u70BA root:syslog\uFF0C\u6AA2\u67E5\u7121\u8AA4\u624D\u8B8A\u66F4\n     sudo chown --from=root:syslog myuser:mygroup myfile\n     # \u53EA\u78BA\u8A8D\u820A\u7684\u64C1\u6709\u8005\u70BA root\n     sudo chown --from=root myuser:mygroup myfile\n     # \u53EA\u78BA\u8A8D\u820A\u7684\u7FA4\u7D44\u70BA syslog\n     sudo chown --from=:syslog myuser:mygroup myfile\n     ```\n     \n<hr id="user-content-tar" style="height: 2px;">\n\n#### <a href="#user-content-top">tar \u5E38\u7528\u6307\u4EE4</a>\n- \u5E38\u7528\u53C3\u6578\n  - `-c`\uFF1A\u6253\u5305\u6A94\u6848\n  - `-x`\uFF1A\u89E3\u958B\u58D3\u7E2E\u6A94\n  - `-t`\uFF1A\u6AA2\u8996\u58D3\u7E2E\u6A94\u7684\u5167\u5BB9\n  - `-z`\uFF1A\u4F7F\u7528 gzip \u58D3\u7E2E\n  - `-v`\uFF1A\u986F\u793A\u57F7\u884C\u904E\u7A0B\n  - `-P`\uFF1A\u4F7F\u7528\u7D55\u5C0D\u8DEF\u5F91\n  - `-f`\uFF1A\u6307\u5B9A\u58D3\u7E2E\u6A94\u7684\u6A94\u6848\u540D\u7A31\u3002\u6B64\u53C3\u6578\u7684\u5F8C\u9762\u8981\u63A5\u6A94\u6848\u540D\u7A31\uFF0C\u56E0\u6B64\u8981\u6CE8\u610F\u53C3\u6578\u7684\u9806\u5E8F(\u901A\u5E38\u662F\u628A `f` \u53C3\u6578\u5BEB\u5728\u6700\u5F8C\u4E00\u500B\uFF0C\u6216\u662F\u8207\u5176\u5B83\u53C3\u6578\u5206\u958B\u4F7F\u7528)\n- \u5E38\u7528\u8A9E\u6CD5\n  - \u5EFA\u7ACB\u58D3\u7E2E\u6A94\uFF1A\n    - \u8A9E\u6CD5\uFF1A`tar -czvf \u58D3\u7E2E\u6A94\u540D\u7A31.tgz \u4F86\u6E90\u6A94\u6848`\n    - \u89E3\u91CB\uFF1A\u5C07\u4F86\u6E90\u6A94\u6848\u58D3\u7E2E\u5F8C\uFF0C\u6253\u5305\u6210\u4E00\u500B\u540D\u70BA\u58D3\u7E2E\u6A94\u540D\u7A31.tgz \u7684\u6A94\u6848\uFF0C\u4F86\u6E90\u6A94\u6848\u53EF\u4EE5\u662F\u591A\u500B\u6A94\u6848\u6216\u76EE\u9304\u3002\n  - \u5982\u679C\u6709\u591A\u500B\u4F86\u6E90\u6A94\u6848\u6642\uFF0C\u4EE5\u7A7A\u767D\u5B57\u5143\u5206\u9694\u4E0D\u540C\u6A94\u6848\u540D\u7A31\uFF1A\n    - \u8A9E\u6CD5\uFF1A`tar -czvf \u6A94\u6848\u540D\u7A31.tgz \u4F86\u6E90\u6A94\u68481 \u4F86\u6E90\u6A94\u68482 ... \u4F86\u6E90\u6A94\u6848n`\n  - \u6AA2\u8996\u58D3\u7E2E\u6A94\u7684\u5167\u5BB9\uFF1A\n    - \u8A9E\u6CD5\uFF1A`tar -tzvf \u58D3\u7E2E\u6A94\u540D\u7A31.tgz`\n  - \u89E3\u958B\u58D3\u7E2E\u6A94\u5230\u76EE\u524D\u7684\u76EE\u9304\uFF1A\n    - \u8A9E\u6CD5\uFF1A`tar -xzvf \u58D3\u7E2E\u6A94\u540D\u7A31.tgz`\n  - \u8907\u88FD\u76EE\u9304\uFF1A\n    - \u8A9E\u6CD5\uFF1A`tar -cvf - \u4F86\u6E90\u76EE\u9304 | tar -xvf -`\n  - \u5C07\u4F86\u6E90\u76EE\u9304\u4E0B\u7684\u6240\u6709\u6A94\u6848\u53CA\u5B50\u76EE\u9304\u8907\u88FD\u5230\u76EE\u524D\u7684\u76EE\u9304\uFF0C\u9019\u6A23\u7684\u597D\u8655\u662F\u53EF\u4FDD\u7559\u539F\u4F86\u7684\u6A94\u6848\u5C6C\u6027\u3002\n\n<hr id="user-content-vmware-workstation" style="height: 2px;">\n\n#### <a href="#user-content-top">VMware Workstation \u5E38\u7528\u6307\u4EE4</a>\n- \u81EA\u52D5\u958B\u555F\u865B\u64EC\u6A5F\uFF1A\n  ```txt\n  "C:\\Program Files (x86)\\VMware\\VMware Workstation\\vmware.exe" -x "\u4F60\u7684\u865B\u64EC\u6A5F\u4F4D\u7F6E\\\u865B\u64EC\u6A5F\u540D\u7A31.vmx"\n  ```\n\n<hr id="user-content-vscode" style="height: 2px;">\n\n#### <a href="#user-content-top">VSCode \u7591\u96E3\u96DC\u75C7</a>\n- \u82E5 `Live Server` \u8981\u57F7\u884C `SPA` \u5C08\u6848\uFF0C\u5247\u53EF\u5728 `VSCode` \u8A2D\u5B9A\u5167\u52A0\u5165\n  - [Live Server \u8A2D\u5B9A\u6A94](https://github.com/ritwickdey/vscode-live-server/blob/HEAD/docs/settings.md)\n  ```json\n  {\n    "liveServer.settings.file": "index.html"\n  }\n  ```\n';let r=e(!0),u=e(!1),c=e(!0),g=e(!1);const y=e(""),M={name:"Command",components:{Loading:x},setup(){return _(async()=>{if(r.value){const s=f({html:!0,linkify:!0,typographer:!0,highlight(a,i){return w.highlight(a,{language:i}).value}});y.value=s.render(`${S}`),await t(()=>{r.value=!1},1e3).then(()=>t(()=>{c.value=!1,g.value=!0},500)).then(()=>t(()=>{u.value=!0,m()},100))}else m()}),k(),{showLoading:r,showContent:u,displayLoading:c,displayContent:g,htmlContent:y}}},D=["innerHTML"];function H(s,a,i,n,b,B){const h=C("Loading");return o(),p(V,null,[n.displayLoading?(o(),L(h,{key:0,class:d({"content--hide":!n.showLoading,"content--show":n.showLoading})},null,8,["class"])):l("",!0),n.displayContent?(o(),p("div",{key:1,class:d({"markdown-content":!0,"content--hide":!n.showContent,"content--show":n.showContent})},[z("div",{class:"markdown-body",innerHTML:n.htmlContent},null,8,D)],2)):l("",!0)],64)}const K=v(M,[["render",H]]);export{K as default};

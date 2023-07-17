const n='<span style="font-size: 32px; font-weight: 600;">SVN \u7B46\u8A18</span>\n\n## \u5B89\u88DD\u8207\u4ECB\u7D39\n- \u5168\u7A31\u70BA `Subversion` \u985E\u4F3C\u65BC `Git` \u7684\u7248\u672C\u7BA1\u7406\u7CFB\u7D71\n- \u4E0B\u9762\u4F7F\u7528 `macos` \u4F5C\u696D\u7CFB\u7D71\u505A\u5B89\u88DD\n- 1.\u5B89\u88DD [Homebrew](https://brew.sh/index_zh-tw)\n  - \u5B89\u88DD\u5B8C\u5F8C\u6703\u63D0\u793A\u52A0\u5165 `path` \u74B0\u5883\uFF0C\u9700\u8907\u88FD\u63D0\u793A\u7684\u6307\u4EE4\u9032\u884C\u74B0\u5883\u914D\u7F6E\n  - \u67E5\u770B\u662F\u5426\u5B89\u88DD\u6210\u529F\uFF1A`brew -v`\n- \uFF12.\u5B89\u88DD svn\uFF1A`brew install subversion`\n  - \u67E5\u770B\u662F\u5426\u5B89\u88DD\u6210\u529F\uFF1A`svn --version`\n\n## \u5EFA\u7ACB\u672C\u5730\u5B58\u5132\u5EAB\n- \u6709\u6642\u5019\u60F3\u5BE6\u9A57\u6307\u4EE4\u537B\u7121\u5730\u65B9\u6642\uFF0C\u53EF\u5728\u672C\u5730\u5EFA\u7ACB\u74B0\u5883\n- 1.\u5EFA\u7ACB\u5B58\u5132\u5EAB\n  - `remote-svn` \u53EF\u66FF\u63DB\u6210\u5176\u4ED6\u540D\u7A31\uFF0C\u4EE5\u4E0B\u6307\u4EE4\u90FD\u7528\u8A72\u540D\u7A31\n  ```txt\n  svnadmin create remote-svn\n  ```\n- 2.\u5EFA\u7ACB `branch` \u5206\u652F\u3001`trunk` \u4E3B\u5206\u652F\n  - `branch`\u3001`trunk` \u53EF\u66FF\u63DB\u6210\u5176\u4ED6\u540D\u7A31\n  - `your-path` \u66FF\u63DB\u6210\u81EA\u5DF1\u8DEF\u5F91\n  - `myproject` \u53EF\u66FF\u63DB\u6210\u5176\u4ED6\u540D\u7A31\uFF0C\u4EE5\u4E0B\u6307\u4EE4\u90FD\u7528\u8A72\u540D\u7A31\n  ```txt\n  svn mkdir file:///your-path/remote-svn/myproject -m "Create myproject directory"\n  svn mkdir file:///your-path/remote-svn/myproject/trunk -m "Create trunk directory"\n  svn mkdir file:///your-path/remote-svn/myproject/branch -m "Create branch directory"\n  ```\n  \n## \u62C9\u53D6\u5B58\u5132\u5EAB\u5C08\u6848\n- \u4EE5\u4E0A\u9762\u672C\u5730\u5B58\u5132\u5EAB\u70BA\u4F8B\u5B50\n- \u62C9\u53D6 `trunk` \u4E3B\u5206\u652F\u5C08\u6848\u6700\u65B0\u7248\u672C\u81F3\u672C\u5730\n  - \u82E5\u4E0D\u52A0\u5F8C\u9762\u5730\u5740\uFF0C\u5247\u6703\u76F4\u63A5\u532F\u5165\u7D42\u7AEF\u6A5F\u7576\u4E0B\u5730\u5740\n  ```txt\n  svn checkout file:///your-path/remote-svn/myproject/trunk ./trunk\n  ```\n- \u82E5\u8981\u62C9\u53D6\u6307\u5B9A\u7248\u672C\u7684\u5C08\u6848\n  - `revision` \u70BA\u6307\u5B9A\u7684\u7248\u672C\n  - `repository-url` \u70BA\u9060\u7AEF\u5B58\u5132\u5EAB\n  - `destination-path` \u70BA\u672C\u5730\u4F4D\u7F6E(\u53EF\u7701\u7565\uFF0C\u5132\u5B58\u5230\u7D42\u7AEF\u6A5F\u7576\u4E0B\u5730\u5740)\n  ```txt\n  svn checkout -r <revision> <repository-url> <destination-path>\n  ```\n\n## \u958B\u7ACB\u5206\u652F\n- \u4EE5\u4E0A\u9762\u672C\u5730\u5C08\u6848\u70BA\u4F8B\n  - `./trunk` \u66FF\u63DB\u6210\u81EA\u5DF1\u7684\u672C\u5730\u5C08\u6848\uFF0C\u6216\u9060\u7AEF\u5C08\u6848\u5730\u5740\n  - `dev` \u53EF\u66FF\u63DB\u70BA\u5176\u4ED6\u540D\u7A31\n  ```txt\n  svn copy ./trunk file:///your-path/remote-svn/myproject/branch/dev -m "Create dev directory"\n  ```\n- \u82E5\u8981\u70BA\u6307\u5B9A\u7248\u672C\u7684\u5C08\u6848\u958B\u7ACB\u5206\u652F\n  - `revision` \u70BA\u8981\u958B\u7ACB\u7684\u7248\u672C\u865F\n  - `source-url` \u70BA\u539F\u59CB\u5C08\u6848\u7684 URL\n  - `destination-url` \u70BA\u65B0\u5206\u652F\u7684 URL\n  ```txt\n  svn copy -r {revision} <source-url> <destination-url>\n  ex\uFF1A\u8A72\u547D\u4EE4\u5C07\u6703\u5728 svn://example.com/myproject/branches \u5275\u5EFA\u4E00\u500B\u540D\u70BA mybranch \u7684\u65B0\u5206\u652F\uFF0C\u5176\u5167\u5BB9\u5C07\u8207\u7248\u672C 100 \u4E2D\u7684 trunk \u5206\u652F\u76F8\u540C\n  svn copy -r 100 svn://example.com/myproject/trunk svn://example.com/myproject/branches/mybranch\n  ```\n  \n## \u7248\u672C\u8A0A\u606F\u8207\u5408\u4F75\n- 1.\u67E5\u770B\u7248\u672C\u8A0A\u606F\uFF0C\u4EE5\u4E0A\u9762\u672C\u5730\u5C08\u6848\u70BA\u4F8B\n  - `-r` \u4EE3\u8868\u67E5\u770B\u7248\u672C\u5340\u9593\uFF0C\u5169\u500B\u6578\u5B57\u53EF\u76F8\u4E92\u4EA4\u63DB(\u986F\u793A\u9806\u5E8F\u76F8\u53CD)\uFF0C\u53EF\u4F7F\u7528 `HEAD` \u95DC\u9375\u5B57\u4EE3\u8868\u6700\u65B0\u7248\u672C\n  - \u5F8C\u9762\u5730\u5740\u70BA\u5B58\u5132\u5EAB\u5730\u5740\uFF0C\u53EF\u66FF\u63DB\u6210\u81EA\u5DF1\u7684\u5730\u5740\n  ```txt\n  \u67E5\u770B\u7248\u672C\u5340\u9593\u7684\u8A0A\u606F\n  svn log -r 29:20 file:///your-path/remote-svn/myproject/branch/dev\n  \u67E5\u770B\u5168\u90E8\u7248\u672C\u8A0A\u606F\n  svn log file:///your-path/remote-svn/myproject/branch/dev\n  ```\n- 2.\u66F4\u65B0\u672C\u5730\u5C08\u6848\n  - \u82E5\u6C92\u57F7\u884C\u66F4\u65B0\uFF0C`svn` \u6703\u63D0\u793A\u4F60\u8981\u66F4\u65B0\n  ```txt\n  \u66F4\u65B0\u5C08\u6848\u6574\u9AD4\n  svn update\n  \u66F4\u65B0\u5C08\u6848\u90E8\u5206\u6A94\u6848\n  svn update /path/file-or-directory\n  ```\n- 3.\u5408\u4F75\u5C08\u6848\n  - \u5F8C\u9762 `./` \u82E5\u4E0D\u52A0\u5247\u4EE3\u8868\u5408\u4F75\u81F3\u7576\u524D\u5730\u5740\u5C08\u6848\n  ```txt\n  \u5408\u4F75dev\u5206\u652F\u201C\u5168\u90E8\u201D\u7684\u66F4\u6539\u5167\u5BB9\u81F3\u6700\u65B0\u7248\u672C\n  svn merge file:///your-path/remote-svn/myproject/branch/dev ./\n  \u5408\u4F75dev\u5206\u652F\u6307\u5B9A\u201C\u7248\u672C\u201D\u7684\u66F4\u6539\u5167\u5BB9\n  svn merge -c 29 file:///your-path/remote-svn/myproject/branch/dev ./\n  \u5408\u4F75dev\u5206\u652F\u6307\u5B9A\u201D\u7248\u672C\u5340\u9593\u201C\u7684\u66F4\u6539\u5167\u5BB9\n  svn merge -r 20:29 file:///your-path/remote-svn/myproject/branch/dev ./\n  ```\n';export{n as default};
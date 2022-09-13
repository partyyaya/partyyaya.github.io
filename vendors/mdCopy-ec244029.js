import{_ as c}from"./lodash-acc62a92.js";import{C as d}from"./clipboard-12221ac4.js";new d(".markdown-it-code-copy");const a={iconStyle:`
    opacity: 0.5;color: black;
    font-size: 15pt;`,iconClass:"mdi mdi-content-copy",buttonStyle:`
    position: absolute;
    top: 7.5px; 
    right: 6px; 
    cursor: pointer;
    outline: none;
    border-radius: 20%;
    text-align: center;
    background-color: rgb(210, 210, 210, 0.5);`,buttonClass:"",copiedStyle:`
    position: absolute;
    top: 39px; 
    right: 6px;
    padding-left: 5px;
    padding-right: 5px;
    border-radius: 5px;
    color: white;
    background-color: rgb(0, 0, 0, 0.7);
    display: none;
  `};function l(t,e){return e=c.merge(a,e),(...o)=>{const[i,s]=o,r=i[s].content.replaceAll('"',"&quot;").replaceAll("'","&#39;"),n=t(...o);return r.length===0?n:`
      <div style="position: relative"
        onmouseover="this.getElementsByTagName('div')[0].style.opacity='0.8'"
        onmouseout="this.getElementsByTagName('div')[0].style.opacity='0.5';"
      >
        ${n}
        <button 
          class="markdown-it-code-copy ${e.buttonClass}" 
          data-clipboard-text="${r}" 
          style="${e.buttonStyle}"
          onmouseover="this.style.backgroundColor='rgb(210, 210, 210, 0.8)'"
          onmouseout="this.style.backgroundColor='rgb(210, 210, 210, 0.5)'" 
          onclick="this.nextElementSibling.style.display='block';setTimeout(() => {this.nextElementSibling.style.display='none';},1000)"
        >
          <div
            style="${e.iconStyle}" class="${e.iconClass}">\u2750</div>
        </button>
        <div id="div__copied" style="${e.copiedStyle}">Copied!</div>
      </div>
    `}}const y=(t,e)=>{t.renderer.rules.code_block=l(t.renderer.rules.code_block,e),t.renderer.rules.fence=l(t.renderer.rules.fence,e)};export{y as m};

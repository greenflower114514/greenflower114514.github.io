(() => {
  const storageKey = "money-plan-v1";
  const emptyWish = () => ({ text:"", reason:"", amount:"", image:"", selected:false, saved:"" });
  const freshState = () => ({
    wishes:Array.from({length:10}, emptyWish),
    goose:{target:"",saved:"",rule:""},
    journals:{},
    review:{date:"",text:""}
  });
  let state = freshState();
  const status = document.getElementById("save-status");
  const wishList = document.getElementById("wish-list");
  const dreambook = document.getElementById("dreambook");
  const journalList = document.getElementById("journal-list");
  const esc = (value) => String(value ?? "").replaceAll("&","&amp;").replaceAll("<","&lt;").replaceAll(">","&gt;").replaceAll('"',"&quot;").replaceAll("'","&#39;");
  const safeImageUrl = (value) => {
    const url = String(value || "").trim();
    return /^(https?:\/\/|\/assets\/)/i.test(url) ? url : "";
  };
  const today = () => {
    const d = new Date();
    return d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0");
  };
  function save() {
    try {
      localStorage.setItem(storageKey, JSON.stringify(state));
      status.textContent = "已保存在此浏览器 · "+new Date().toLocaleTimeString("zh-CN",{hour:"2-digit",minute:"2-digit"});
    } catch {
      status.textContent = "浏览器存储空间不足，请先导出备份。";
    }
  }
  function load() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey));
      if (saved && typeof saved === "object") {
        state = {...freshState(), ...saved};
        state.wishes = Array.from({length:10},(_,i)=>({...emptyWish(),...(saved.wishes?.[i]||{})}));
        state.goose = {...freshState().goose,...(saved.goose||{})};
        state.journals = saved.journals && typeof saved.journals==="object" ? saved.journals : {};
        state.review = {...freshState().review,...(saved.review||{})};
      }
    } catch {}
  }
  function renderWishes() {
    wishList.innerHTML = state.wishes.map((wish,index) => '<article class="wish-card"><span class="wish-number">'+String(index+1).padStart(2,"0")+'</span><div class="wish-fields"><label class="wish-select"><input type="checkbox" data-wish="'+index+'" data-field="selected" '+(wish.selected?"checked":"")+'> 选入我的三个重要梦想</label><input data-wish="'+index+'" data-field="text" maxlength="160" placeholder="愿望 '+(index+1)+'：我希望实现什么？" value="'+esc(wish.text)+'"><input data-wish="'+index+'" data-field="reason" maxlength="220" placeholder="为什么这个愿望对我重要？" value="'+esc(wish.reason)+'"></div></article>').join("");
    const filled = state.wishes.filter(w=>w.text.trim()).length;
    const selected = state.wishes.filter(w=>w.selected).length;
    document.getElementById("wish-count").textContent = "已填写 "+filled+" / 10";
    document.getElementById("dream-count").textContent = "已选 "+selected+" / 3 个梦想";
    renderDreambook();
  }
  function renderDreambook() {
    const chosen = state.wishes.map((wish,index)=>({wish,index})).filter(item=>item.wish.selected);
    if (!chosen.length) {
      dreambook.innerHTML = '<div class="empty-state">先在上方选出最多三个愿望，它们会出现在这里。</div>';
      return;
    }
    dreambook.innerHTML = chosen.map(({wish,index},position) => {
      const imageUrl = safeImageUrl(wish.image);
      const preview = imageUrl ? '<img src="'+esc(imageUrl)+'" alt="梦想手册图片预览">' : '梦想图片预览';
      return '<article class="dream-card"><div class="dream-fields"><h3>梦想 '+(position+1)+' · '+esc(wish.text||"尚未命名")+'</h3><label>我为什么想实现它？<textarea data-wish="'+index+'" data-field="reason" rows="2" placeholder="写下这个愿望对你的意义">'+esc(wish.reason)+'</textarea></label><label>梦想图片地址<input data-wish="'+index+'" data-field="image" type="url" placeholder="图片加入网站后可填写图片路径" value="'+esc(wish.image)+'"></label><div class="form-grid"><label>目标金额<input data-wish="'+index+'" data-field="amount" type="number" min="0" step="0.01" placeholder="可选" value="'+esc(wish.amount)+'"></label><label>当前储蓄<input data-wish="'+index+'" data-field="saved" type="number" min="0" step="0.01" placeholder="可选" value="'+esc(wish.saved)+'"></label></div></div><div class="dream-preview">'+preview+'</div></article>';
    }).join("");
  }
  function renderGoose() {
    document.querySelectorAll("[data-goose]").forEach(input=>{input.value=state.goose[input.dataset.goose]??"";});
    const target=Number(state.goose.target)||0;
    const dailySaved=Object.values(state.journals).reduce((sum,item)=>sum+(Number(item.goose)||0),0);
    const saved=(Number(state.goose.saved)||0)+dailySaved;
    const percent=target>0?Math.min(100,Math.max(0,saved/target*100)):0;
    document.getElementById("goose-progress").style.width=percent+"%";
    document.getElementById("goose-progress-label").textContent=target>0?"已积累 "+saved.toLocaleString("zh-CN")+" / "+target.toLocaleString("zh-CN")+"（"+Math.round(percent)+"%）":"填写目标和当前金额后查看进度。";
  }
  function renderReview() {
    document.getElementById("review-date").value=state.review.date||"";
    document.getElementById("weekly-review").value=state.review.text||"";
  }
  function renderJournals() {
    const entries=Object.entries(state.journals).sort((a,b)=>b[0].localeCompare(a[0]));
    journalList.innerHTML=entries.length?entries.map(([date,item])=>'<article class="journal-entry"><time>'+esc(date)+'</time>'+(item.action?'<p><strong>行动：</strong>'+esc(item.action)+'</p>':'')+(item.success?'<p><strong>成功日记：</strong>'+esc(item.success)+'</p>':'')+((item.goose||item.dream)?'<p><strong>存入：</strong>金鹅 '+esc(item.goose||"0")+' · 梦想罐 '+esc(item.dream||"0")+'</p>':'')+(item.note?'<p>'+esc(item.note)+'</p>':'')+'<button type="button" data-delete-day="'+esc(date)+'">删除这条记录</button></article>').join(""):'<p class="empty-state">还没有每日记录。</p>';
  }
  function fillDaily(date) {
    const item=state.journals[date]||{};
    document.getElementById("daily-date").value=date;
    document.getElementById("daily-action").value=item.action||"";
    document.getElementById("daily-success").value=item.success||"";
    document.getElementById("daily-goose").value=item.goose||"";
    document.getElementById("daily-dream").value=item.dream||"";
    document.getElementById("daily-note").value=item.note||"";
  }
  load();
  renderWishes();
  renderGoose();
  renderReview();
  renderJournals();
  fillDaily(today());
  wishList.addEventListener("change",event=>{
    const el=event.target;
    if(!el.matches("[data-wish]")) return;
    const index=Number(el.dataset.wish),field=el.dataset.field;
    if(field==="selected"&&el.checked&&state.wishes.filter(w=>w.selected).length>=3){el.checked=false;status.textContent="最多选择三个愿望。";return;}
    state.wishes[index][field]=field==="selected"?el.checked:el.value;
    save();
    if(field==="selected")renderWishes();
  });
  dreambook.addEventListener("input",event=>{
    const el=event.target;
    if(!el.matches("[data-wish]"))return;
    state.wishes[Number(el.dataset.wish)][el.dataset.field]=el.value;
    save();
    if(el.dataset.field==="image") {
      const preview=el.closest(".dream-card")?.querySelector(".dream-preview");
      const imageUrl=safeImageUrl(el.value);
      if(preview)preview.innerHTML=imageUrl?'<img src="'+esc(imageUrl)+'" alt="梦想手册图片预览">':"梦想图片预览";
    }
  });
  document.querySelectorAll("[data-goose]").forEach(input=>input.addEventListener("input",()=>{
    state.goose[input.dataset.goose]=input.value;save();renderGoose();
  }));
  document.getElementById("daily-date").addEventListener("change",event=>fillDaily(event.target.value||today()));
  document.getElementById("daily-form").addEventListener("input",()=>{
    const date=document.getElementById("daily-date").value||today();
    const item={
      action:document.getElementById("daily-action").value,
      success:document.getElementById("daily-success").value,
      goose:document.getElementById("daily-goose").value,
      dream:document.getElementById("daily-dream").value,
      note:document.getElementById("daily-note").value
    };
    if(Object.values(item).some(value=>value.trim()))state.journals[date]=item;
    else delete state.journals[date];
    save();renderJournals();renderGoose();
  });
  document.getElementById("daily-form").addEventListener("submit",event=>{
    event.preventDefault();
    document.getElementById("daily-hint").textContent="当天内容已保存。";
    fillDaily(document.getElementById("daily-date").value||today());
  });
  journalList.addEventListener("click",event=>{
    const button=event.target.closest("[data-delete-day]");
    if(!button)return;
    delete state.journals[button.dataset.deleteDay];save();renderJournals();
    if(button.dataset.deleteDay===document.getElementById("daily-date").value)fillDaily(today());
  });
  document.getElementById("weekly-review").addEventListener("input",event=>{state.review.text=event.target.value;save();});
  document.getElementById("review-date").addEventListener("change",event=>{state.review.date=event.target.value;save();});
  document.getElementById("export-plan").addEventListener("click",()=>{
    const blob=new Blob([JSON.stringify(state,null,2)],{type:"application/json"});
    const url=URL.createObjectURL(blob),anchor=document.createElement("a");
    anchor.href=url;anchor.download="money-plan-backup-"+today()+".json";anchor.click();URL.revokeObjectURL(url);
  });
  document.getElementById("import-plan").addEventListener("change",async event=>{
    const file=event.target.files?.[0];if(!file)return;
    try{
      const imported=JSON.parse(await file.text());
      if(!Array.isArray(imported.wishes)||imported.wishes.length!==10||(!imported.journals||typeof imported.journals!=="object"||Array.isArray(imported.journals)))throw new Error("格式不符");
      if(!window.confirm("导入会替换当前浏览器中的计划内容。确定继续吗？"))return;
      state={...freshState(),...imported,wishes:imported.wishes.map(w=>({...emptyWish(),...w})),goose:{...freshState().goose,...(imported.goose||{})}};
      renderWishes();renderGoose();renderReview();renderJournals();fillDaily(today());save();
    }catch{status.textContent="无法读取此备份文件，请选择本页面导出的 JSON。";}
    finally{event.target.value="";}
  });
  document.getElementById("reset-plan").addEventListener("click",()=>{
    if(!window.confirm("这会清空当前浏览器保存的愿望、计划和每日记录，且无法恢复。请先导出备份。确定清空吗？"))return;
    state=freshState();localStorage.removeItem(storageKey);renderWishes();renderGoose();renderReview();renderJournals();fillDaily(today());save();
  });
})();

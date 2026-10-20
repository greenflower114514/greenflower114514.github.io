(() => {
  "use strict";

  const PASSCODE_SALT = "25a32ced8eefdb76437b71935174e706";
  const PASSCODE_HASH = "82e6168f90881f0c76a66650801d6ca4eef16a178bb43049486c44622bd85712";
  const PASSCODE_ITERATIONS = 200000;
  const UNLOCK_KEY = "money-plan-unlocked";
  const gate = document.getElementById("access-gate");
  const content = document.getElementById("money-content");
  const form = document.getElementById("access-form");
  const passwordInput = document.getElementById("access-password");
  const message = document.getElementById("access-message");
  let planData = { wishes: [], dreams: [], goose: {}, entries: [] };
  let entriesByDate = new Map();
  let selectedDate = "";
  let shownYear;
  let shownMonth;

  const esc = value => String(value ?? "").replaceAll("&", "&amp;").replaceAll("<", "&lt;").replaceAll(">", "&gt;").replaceAll('"', "&quot;").replaceAll("'", "&#39;");
  const hexBytes = value => Uint8Array.from(value.match(/.{2}/g) || [], byte => parseInt(byte, 16));
  const bytesHex = bytes => Array.from(new Uint8Array(bytes), byte => byte.toString(16).padStart(2, "0")).join("");
  const today = () => {
    const date = new Date();
    return date.getFullYear() + "-" + String(date.getMonth() + 1).padStart(2, "0") + "-" + String(date.getDate()).padStart(2, "0");
  };
  const formatDate = date => {
    const parts = String(date || "").split("-").map(Number);
    return parts.length === 3 ? parts[0] + "年" + parts[1] + "月" + parts[2] + "日" : String(date || "");
  };
  const successesOf = entry => Array.isArray(entry?.successes) ? entry.successes.map(item => String(item || "").trim()).filter(Boolean) : [];
  const money = value => value === "" || value === null || value === undefined ? "" : "¥" + Number(value).toLocaleString("zh-CN", { maximumFractionDigits: 2 });

  async function checkPasscode(passcode) {
    if (!globalThis.crypto?.subtle) return false;
    const key = await crypto.subtle.importKey("raw", new TextEncoder().encode(passcode), "PBKDF2", false, ["deriveBits"]);
    const digest = await crypto.subtle.deriveBits({
      name: "PBKDF2",
      salt: hexBytes(PASSCODE_SALT),
      iterations: PASSCODE_ITERATIONS,
      hash: "SHA-256"
    }, key, 256);
    return bytesHex(digest) === PASSCODE_HASH;
  }

  function unlock() {
    gate.hidden = true;
    content.hidden = false;
    passwordInput.value = "";
    initialize().catch(error => {
      console.error("Unable to load money plan data", error);
      document.getElementById("wish-list").innerHTML = '<li class="empty-state">计划数据暂时无法读取，请刷新页面稍后再试。</li>';
    });
  }

  form.addEventListener("submit", async event => {
    event.preventDefault();
    message.textContent = "正在验证…";
    const submitButton = form.querySelector('button[type="submit"]');
    submitButton.disabled = true;
    try {
      if (await checkPasscode(passwordInput.value)) {
        sessionStorage.setItem(UNLOCK_KEY, "1");
        message.textContent = "";
        unlock();
      } else {
        message.textContent = "口令不正确，请再试一次。";
        passwordInput.select();
      }
    } catch {
      message.textContent = "当前浏览器无法验证口令，请使用最新版浏览器后重试。";
    } finally {
      submitButton.disabled = false;
    }
  });

  document.getElementById("lock-page").addEventListener("click", () => {
    sessionStorage.removeItem(UNLOCK_KEY);
    content.hidden = true;
    gate.hidden = false;
    message.textContent = "";
    passwordInput.focus();
  });

  function renderWishes() {
    const list = document.getElementById("wish-list");
    const wishes = Array.isArray(planData.wishes) ? planData.wishes : [];
    list.innerHTML = wishes.map(wish => {
      const selected = Boolean(wish.selected);
      return '<li class="wish-item' + (selected ? " is-priority" : "") + '"><strong>' + esc(wish.title) + '</strong>' + (selected ? '<span class="priority-tag">重要愿望</span>' : "") + "</li>";
    }).join("") || '<li class="empty-state">愿望清单暂时为空。</li>';
  }

  function renderDreambook() {
    const container = document.getElementById("dreambook");
    const dreams = Array.isArray(planData.dreams) ? planData.dreams : [];
    const emptyValue = value => value ? '<strong>' + esc(value) + '</strong>' : '<span class="empty-value">（留空）</span>';
    container.innerHTML = dreams.map(dream => {
      const image = /^(https?:\/\/|\/assets\/)/i.test(String(dream.image || "")) ? '<img src="' + esc(dream.image) + '" alt="' + esc(dream.title) + '的梦想图片">' : "";
      return '<article class="dream-card"><div><h3>' + esc(dream.title) + '</h3>' +
        (dream.reason ? '<p class="dream-reason">' + esc(dream.reason) + '</p>' : "") +
        '<div class="dream-facts"><span>目标金额：' + emptyValue(money(dream.targetAmount)) + '</span><span>已存金额：' + emptyValue(money(dream.savedAmount)) + '</span></div></div>' +
        '<div class="dream-preview">' + (image || "梦想图片") + '</div></article>';
    }).join("") || '<div class="empty-state">还没有梦想手册内容。</div>';
  }

  function renderGoose() {
    const goose = planData.goose || {};
    const fields = [
      ["本金目标", goose.targetAmount ? money(goose.targetAmount) : ""],
      ["已积累金额", goose.savedAmount ? money(goose.savedAmount) : ""],
      ["我的金鹅规则", goose.rule || ""]
    ];
    document.getElementById("goose-summary").innerHTML = '<div class="goose-card">' + fields.map(([label, value]) =>
      '<div class="goose-fact"><span>' + esc(label) + '</span><strong>' + (value ? esc(value) : '<span class="empty-value">（留空）</span>') + '</strong></div>'
    ).join("") + "</div>";
  }

  function renderCalendar() {
    const firstDay = new Date(shownYear, shownMonth, 1);
    const dayCount = new Date(shownYear, shownMonth + 1, 0).getDate();
    document.getElementById("calendar-month").textContent = shownYear + "年" + (shownMonth + 1) + "月";
    const cells = [];
    for (let blank = 0; blank < firstDay.getDay(); blank++) cells.push('<span class="calendar-blank" aria-hidden="true"></span>');
    for (let day = 1; day <= dayCount; day++) {
      const dateKey = shownYear + "-" + String(shownMonth + 1).padStart(2, "0") + "-" + String(day).padStart(2, "0");
      const entry = entriesByDate.get(dateKey);
      const wins = successesOf(entry);
      const classes = ["calendar-day"];
      if (entry) classes.push("has-entry");
      if (dateKey === selectedDate) classes.push("is-selected");
      if (dateKey === today()) classes.push("is-today");
      const snippet = wins[0] || entry?.action || "";
      const accessible = formatDate(dateKey) + (entry ? "，完成" + wins.length + "件事" + (snippet ? "，" + snippet : "") : "，无记录");
      cells.push('<button type="button" class="' + classes.join(" ") + '" data-date="' + dateKey + '" aria-label="' + esc(accessible) + '" aria-pressed="' + (dateKey === selectedDate) + '"><span class="day-number">' + day + '</span>' +
        (entry ? '<span class="day-count">' + wins.length + " 件</span>" + (snippet ? '<span class="day-snippet">' + esc(snippet) + "</span>" : "") : "") + "</button>");
    }
    document.getElementById("calendar-days").innerHTML = cells.join("");
    renderDayDetail();
  }

  function renderDayDetail() {
    const entry = entriesByDate.get(selectedDate);
    const detail = document.getElementById("day-detail");
    if (!entry) {
      detail.innerHTML = "<h3>" + esc(formatDate(selectedDate)) + '</h3><p class="empty-state">这一天还没有每日记录。</p>';
      return;
    }
    const wins = successesOf(entry);
    const parts = ['<h3>' + esc(formatDate(selectedDate)) + " · 做成了 " + wins.length + " 件事</h3>"];
    if (wins.length) parts.push('<ol class="successes-list">' + wins.map(item => "<li>" + esc(item) + "</li>").join("") + "</ol>");
    else parts.push('<p class="empty-value">这一天没有填写成功日记。</p>');
    if (entry.action) parts.push('<p><span class="detail-label">愿望行动：</span>' + esc(entry.action) + "</p>");
    if (entry.gooseSaved || entry.dreamSaved) parts.push('<p><span class="detail-label">储蓄记录：</span>' + (entry.gooseSaved ? "金鹅 " + esc(money(entry.gooseSaved)) : "") + (entry.gooseSaved && entry.dreamSaved ? " · " : "") + (entry.dreamSaved ? "梦想罐 " + esc(money(entry.dreamSaved)) : "") + "</p>");
    if (entry.note) parts.push('<p><span class="detail-label">备注：</span>' + esc(entry.note) + "</p>");
    detail.innerHTML = parts.join("");
  }

  function renderStats() {
    const entries = [...entriesByDate.entries()].sort((a, b) => b[0].localeCompare(a[0]));
    const totalSuccesses = entries.reduce((sum, [, entry]) => sum + successesOf(entry).length, 0);
    const totalDays = entries.length;
    const average = totalDays ? (totalSuccesses / totalDays).toFixed(1) : "0";
    document.getElementById("stats-summary").innerHTML =
      '<article class="stat-card"><span>有记录的天数</span><strong>' + totalDays + '</strong></article>' +
      '<article class="stat-card"><span>完成事项总数</span><strong>' + totalSuccesses + '</strong></article>' +
      '<article class="stat-card"><span>每日平均完成</span><strong>' + average + "</strong></article>";
    const list = document.getElementById("stats-list");
    if (!entries.length) {
      list.innerHTML = '<p class="empty-state">还没有每日记录。之后每次添加记录，这里会汇总完成的事项和总数。</p>';
      return;
    }
    list.innerHTML = entries.map(([date, entry]) => {
      const wins = successesOf(entry);
      return '<article class="stats-day"><h3>' + esc(formatDate(date)) + " · " + wins.length + " 件</h3>" +
        (wins.length ? '<ol>' + wins.map(item => "<li>" + esc(item) + "</li>").join("") + "</ol>" : '<p class="empty-value">没有填写成功日记。</p>') + "</article>";
    }).join("");
  }

  function selectDate(date) {
    selectedDate = date;
    const [year, month] = date.split("-").map(Number);
    shownYear = year;
    shownMonth = month - 1;
    renderCalendar();
  }

  function setupTabs() {
    const calendarTab = document.getElementById("calendar-tab");
    const statsTab = document.getElementById("stats-tab");
    const calendarView = document.getElementById("calendar-view");
    const statsView = document.getElementById("stats-view");
    const setView = showStats => {
      calendarTab.classList.toggle("is-active", !showStats);
      statsTab.classList.toggle("is-active", showStats);
      calendarTab.setAttribute("aria-selected", String(!showStats));
      statsTab.setAttribute("aria-selected", String(showStats));
      calendarView.hidden = showStats;
      statsView.hidden = !showStats;
    };
    calendarTab.addEventListener("click", () => setView(false));
    statsTab.addEventListener("click", () => setView(true));
  }

  async function initialize() {
    const response = await fetch("assets/money-plan-data.json", { cache: "no-store" });
    if (!response.ok) throw new Error("Data request failed: " + response.status);
    planData = await response.json();
    if (!Array.isArray(planData.entries)) planData.entries = [];
    entriesByDate = new Map(planData.entries.filter(entry => /^\d{4}-\d{2}-\d{2}$/.test(entry.date || "")).map(entry => [entry.date, entry]));
    const current = today();
    const latest = [...entriesByDate.keys()].sort().at(-1);
    selectedDate = entriesByDate.has(current) ? current : (latest || current);
    const [year, month] = selectedDate.split("-").map(Number);
    shownYear = year;
    shownMonth = month - 1;

    renderWishes();
    renderDreambook();
    renderGoose();
    renderCalendar();
    renderStats();
    setupTabs();
    document.getElementById("previous-month").addEventListener("click", () => {
      shownMonth--;
      if (shownMonth < 0) { shownMonth = 11; shownYear--; }
      renderCalendar();
    });
    document.getElementById("next-month").addEventListener("click", () => {
      shownMonth++;
      if (shownMonth > 11) { shownMonth = 0; shownYear++; }
      renderCalendar();
    });
    document.getElementById("calendar-days").addEventListener("click", event => {
      const button = event.target.closest("[data-date]");
      if (button) selectDate(button.dataset.date);
    });
  }

  if (sessionStorage.getItem(UNLOCK_KEY) === "1") unlock();
})();

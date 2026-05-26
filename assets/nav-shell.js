const visitCalendarKey = "greenflower-homepage-visits";
const dailyBoardPath = "assets/daily-board.json";

function escapeShellHtml(value) {
  return String(value ?? "")
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function formatVisitDate(date) {
  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}`;
}

function readVisitDates() {
  try {
    return JSON.parse(localStorage.getItem(visitCalendarKey)) || [];
  } catch {
    return [];
  }
}

function saveTodayVisit() {
  const today = formatVisitDate(new Date());
  const visits = new Set(readVisitDates());
  visits.add(today);
  localStorage.setItem(visitCalendarKey, JSON.stringify([...visits].sort()));
}

let calendarCursor = new Date();
calendarCursor.setDate(1);

function renderVisitCalendar() {
  const titleNode = document.getElementById("calendar-title");
  const daysNode = document.getElementById("calendar-days");
  if (!titleNode || !daysNode) return;

  const visits = new Set(readVisitDates());
  const year = calendarCursor.getFullYear();
  const month = calendarCursor.getMonth();
  const todayKey = formatVisitDate(new Date());
  const firstDay = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();
  const title = new Intl.DateTimeFormat("en-US", {
    month: "long",
    year: "numeric"
  }).format(calendarCursor);

  titleNode.textContent = title;
  daysNode.innerHTML = "";

  for (let i = 0; i < firstDay; i += 1) {
    const empty = document.createElement("span");
    empty.className = "calendar-day is-muted";
    daysNode.appendChild(empty);
  }

  for (let day = 1; day <= daysInMonth; day += 1) {
    const date = new Date(year, month, day);
    const key = formatVisitDate(date);
    const node = document.createElement("span");
    node.className = "calendar-day";
    node.textContent = day;
    if (visits.has(key)) node.classList.add("is-visited");
    if (key === todayKey) node.classList.add("is-today");
    daysNode.appendChild(node);
  }
}

const calendarPrev = document.querySelector(".calendar-prev");
const calendarNext = document.querySelector(".calendar-next");

if (calendarPrev) {
  calendarPrev.addEventListener("click", () => {
    calendarCursor.setMonth(calendarCursor.getMonth() - 1);
    renderVisitCalendar();
  });
}

if (calendarNext) {
  calendarNext.addEventListener("click", () => {
    calendarCursor.setMonth(calendarCursor.getMonth() + 1);
    renderVisitCalendar();
  });
}

function updateProfileTime() {
  const timeNode = document.getElementById("profile-time");
  if (!timeNode) return;

  const now = new Date();
  const formatted = new Intl.DateTimeFormat("zh-CN", {
    timeZone: "Asia/Shanghai",
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false
  }).format(now);

  timeNode.textContent = `北京时间 ${formatted}`;
  timeNode.setAttribute("datetime", now.toISOString());
}

function renderDailyBoard(boardData) {
  const boardNode = document.querySelector(".daily-board");
  if (!boardNode || !boardData || typeof boardData !== "object") return;

  const items = Array.isArray(boardData.items)
    ? boardData.items.map((item) => String(item ?? "").trim()).filter(Boolean)
    : [];

  const timeNode = boardNode.querySelector("time");
  const listNode = boardNode.querySelector("ul");

  if (timeNode && boardData.label) {
    timeNode.textContent = String(boardData.label);
  }

  if (listNode && items.length) {
    listNode.innerHTML = items.map((item) => `<li>${escapeShellHtml(item)}</li>`).join("");
  }
}

function loadDailyBoard() {
  fetch(dailyBoardPath)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to load daily board");
      return response.json();
    })
    .then((data) => {
      renderDailyBoard(data);
    })
    .catch(() => {
      // Keep inline markup as a fallback if the JSON cannot be loaded.
    });
}

saveTodayVisit();
renderVisitCalendar();
loadDailyBoard();
updateProfileTime();
setInterval(updateProfileTime, 1000);

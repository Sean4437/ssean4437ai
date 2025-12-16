const scaleOptions = [
  { value: -2, label: "完全不是我", emoji: "😶" },
  { value: -1, label: "有點不像", emoji: "🙂" },
  { value: 0, label: "介於中間", emoji: "😌" },
  { value: 1, label: "有點像", emoji: "😏" },
  { value: 2, label: "超級就是我", emoji: "🤩" },
];

const questions = [
  {
    id: "q1",
    axis: "EI",
    text: "派對剛開場，你",
    hint: "E：立刻加入舞池，I：先觀察氣氛。",
  },
  {
    id: "q2",
    axis: "EI",
    text: "群組訊息 99+，你會",
    hint: "E：邊滑邊回，I：先靜音再說。",
  },
  {
    id: "q3",
    axis: "EI",
    text: "電梯裡遇到鄰居",
    hint: "E：尬聊今日天氣，I：用點頭示意。",
  },
  {
    id: "q4",
    axis: "EI",
    text: "週末的你",
    hint: "E：揪團吃早午餐，I：獨處充電。",
  },
  {
    id: "q5",
    axis: "EI",
    text: "陌生人問路",
    hint: "E：順便聊聊附近美食，I：講完路就閃人。",
  },
  {
    id: "q6",
    axis: "EI",
    text: "被邀請上台分享",
    hint: "E：有點緊張但興奮，I：希望這輪不要叫到我。",
  },
  {
    id: "q7",
    axis: "SN",
    text: "做筆記時",
    hint: "S：畫表格寫重點，N：寫滿小劇場與比喻。",
  },
  {
    id: "q8",
    axis: "SN",
    text: "看到路邊雲彩",
    hint: "S：今天大概會下雨，N：那朵像極了飄走的甜甜圈。",
  },
  {
    id: "q9",
    axis: "SN",
    text: "新咖啡店開幕",
    hint: "S：研究價目與容量，N：想像店主的開店故事。",
  },
  {
    id: "q10",
    axis: "SN",
    text: "朋友提案新點子",
    hint: "S：先問資料怎麼收集，N：腦內已經看到未來盛況。",
  },
  {
    id: "q11",
    axis: "SN",
    text: "下載新 app",
    hint: "S：完整讀新手教學，N：直接亂點探索再說。",
  },
  {
    id: "q12",
    axis: "SN",
    text: "做菜時",
    hint: "S：嚴格秤重、計時，N：憑靈感加料，幻想料理魔法。",
  },
  {
    id: "q13",
    axis: "TF",
    text: "朋友遲到 20 分鐘",
    hint: "T：心裡排出效率分析，F：先確認朋友是不是遇到狀況。",
  },
  {
    id: "q14",
    axis: "TF",
    text: "選電影",
    hint: "T：看評分、導演與成本，F：看心情跟誰一起笑／哭。",
  },
  {
    id: "q15",
    axis: "TF",
    text: "同事抱怨工作",
    hint: "T：給出可執行的解法，F：先陪對方吐槽再想辦法。",
  },
  {
    id: "q16",
    axis: "TF",
    text: "收到批評留言",
    hint: "T：提煉可改進要點，F：先需要抱抱或喝杯奶茶。",
  },
  {
    id: "q17",
    axis: "TF",
    text: "決定今晚吃什麼",
    hint: "T：列出 CP 值清單，F：想吃讓心情好的食物。",
  },
  {
    id: "q18",
    axis: "TF",
    text: "看到路邊貓咪",
    hint: "T：觀察路線、避免打擾，F：立刻伸出手和牠聊天。",
  },
  {
    id: "q19",
    axis: "JP",
    text: "計畫旅行",
    hint: "J：行程表精準到 15 分鐘，P：只訂機票，其他隨緣。",
  },
  {
    id: "q20",
    axis: "JP",
    text: "衣櫃狀態",
    hint: "J：分類整齊，標籤清楚，P：創意堆疊但找到得靠第六感。",
  },
  {
    id: "q21",
    axis: "JP",
    text: "面對 Deadline",
    hint: "J：提前完成、反覆檢查，P：截止前一晚才進入超速模式。",
  },
  {
    id: "q22",
    axis: "JP",
    text: "好友臨時揪飯",
    hint: "J：先看行程表再決定，P：好啊先吃再說。",
  },
  {
    id: "q23",
    axis: "JP",
    text: "靈感突然來時",
    hint: "J：寫入規劃清單，排到下一回合，P：立刻開工直到熱度退散。",
  },
  {
    id: "q24",
    axis: "JP",
    text: "週日夜晚",
    hint: "J：收拾桌面、列週計畫，P：邊追劇邊想明天再整理。",
  },
];

const personalityDetails = {
  INTJ: {
    emoji: "🧠",
    tagline: "策略腦袋 + 貓系冷靜",
    description:
      "你用高維度的邏輯拆解世界，對未來有自己的暗中藍圖。表面安靜，內心其實在進行華麗的流程優化。",
  },
  INTP: {
    emoji: "🔍",
    tagline: "理論派發明家",
    description:
      "你喜歡拆解事物的底層邏輯，對冷門知識有異常熱情。靈光乍現時可以連續講一小時，平時則像在背景編譯。",
  },
  ENTJ: {
    emoji: "🚀",
    tagline: "燃燒 KPI 的指揮官",
    description:
      "你擅長把混亂變成路線圖，能量十足且行動派。團隊需要方向的時候，你就是那道帶著表格的光。",
  },
  ENTP: {
    emoji: "⚡️",
    tagline: "段子手創新者",
    description:
      "你腦袋是無限腦洞生成器，喜歡辯論、拆梗、發明新玩法。世界是你的實驗場，玩得開心也玩得很快。",
  },
  INFJ: {
    emoji: "🌙",
    tagline: "溫柔的洞察家",
    description:
      "你能感受人心又能洞悉全局，對重要的人特別投入。你像夜燈，安靜卻讓人安心，幫大家找回方向。",
  },
  INFP: {
    emoji: "🍰",
    tagline: "夢想系故事創作者",
    description:
      "你重視價值與真誠，喜歡用文字、音樂或小卡片傳遞心意。你是行走的療癒系表情包，柔軟又有韌性。",
  },
  ENFJ: {
    emoji: "🌟",
    tagline: "社交場的策展人",
    description:
      "你擅長讓每個人都被看見，像主持人又像教練。情感雷達敏銳，總能把聚會變成溫暖的實境秀。",
  },
  ENFP: {
    emoji: "🎈",
    tagline: "靈感派冒險家",
    description:
      "好奇、熱情、充滿梗，你總能把平凡變有趣。你是團隊的彩色泡泡機，帶來新點子也帶來笑聲。",
  },
  ISTJ: {
    emoji: "🗂️",
    tagline: "默默守護的紀律王",
    description:
      "你務實、可靠，對細節有著強迫級的堅持。當大家散漫時，你就是那個讓計畫回到正軌的安定力量。",
  },
  ISFJ: {
    emoji: "🫧",
    tagline: "暖心的後勤隊長",
    description:
      "你細膩又貼心，總記得大家的小偏好。你是社群裡的防護罩，默默做好準備，讓別人安心做自己。",
  },
  ESTJ: {
    emoji: "📣",
    tagline: "行動派執行長",
    description:
      "你討厭拖延，喜歡明確規則與高效率。事情交到你手上，Excel、流程、里程碑瞬間就定位。",
  },
  ESFJ: {
    emoji: "🧋",
    tagline: "氛圍營造家",
    description:
      "你熱愛照顧他人，是聚會與群組裡的溫暖主持人。你把細節做到位，讓大家都被禮貌與奶茶包圍。",
  },
  ISTP: {
    emoji: "🛠️",
    tagline: "冷靜的修理師",
    description:
      "你喜歡親手拆解與解決問題，專注、俐落又獨立。表面酷酷的，其實已經悄悄修好了螺絲與 Bug。",
  },
  ISFP: {
    emoji: "🌸",
    tagline: "感受派藝術魂",
    description:
      "你用感官體驗世界，熱愛美感與真實。你像春日微風，柔軟細膩，身上有故事也有溫度。",
  },
  ESTP: {
    emoji: "🏄‍♀️",
    tagline: "臨場發揮冠軍",
    description:
      "你反應快、敢冒險，最愛即興挑戰。當場景需要火力與幽默，你會直接把現場變成綜藝節目。",
  },
  ESFP: {
    emoji: "🎉",
    tagline: "社交場的亮片",
    description:
      "你是活體歡樂製造機，擅長把日常變秀場。你溫暖又外向，總能讓尷尬瞬間化成大笑。",
  },
};

const questionsContainer = document.getElementById("questionsContainer");
const progressCount = document.getElementById("progressCount");
const progressFill = document.getElementById("progressFill");
const submitBtn = document.getElementById("submitBtn");
const resetBtn = document.getElementById("resetBtn");
const startBtn = document.getElementById("startBtn");
const scrollBtn = document.getElementById("scrollBtn");
const quizSection = document.getElementById("quizSection");
const resultType = document.getElementById("resultType");
const resultTagline = document.getElementById("resultTagline");
const resultDescription = document.getElementById("resultDescription");
const resultEmoji = document.getElementById("resultEmoji");
const dimensionGrid = document.getElementById("dimensionGrid");

function renderQuestions() {
  const fragment = document.createDocumentFragment();

  questions.forEach((q, index) => {
    const card = document.createElement("article");
    card.className = "question";
    card.id = q.id;
    card.dataset.axis = q.axis;

    const title = document.createElement("div");
    title.className = "question__title";
    title.innerHTML = `<span>Q${index + 1}. ${q.text}</span><span class="scale-text">${q.axis[0]} ↔ ${q.axis[1]}</span>`;

    const hint = document.createElement("p");
    hint.className = "question__hint";
    hint.textContent = q.hint;

    const options = document.createElement("div");
    options.className = "options";

    scaleOptions.forEach((opt) => {
      const option = document.createElement("label");
      option.className = "option";

      option.innerHTML = `
        <input type="radio" id="${q.id}-${opt.value}" name="${q.id}" value="${opt.value}">
        <span class="option__text">${opt.emoji} ${opt.label}</span>
      `;

      const input = option.querySelector("input");
      input.addEventListener("change", updateProgress);
      options.appendChild(option);
    });

    card.appendChild(title);
    card.appendChild(hint);
    card.appendChild(options);
    fragment.appendChild(card);
  });

  questionsContainer.appendChild(fragment);
}

function updateProgress() {
  const answered = questions.filter((q) =>
    document.querySelector(`input[name="${q.id}"]:checked`)
  ).length;
  progressCount.textContent = `${answered} / ${questions.length}`;
  const percent = Math.round((answered / questions.length) * 100);
  progressFill.style.width = `${percent}%`;
}

function collectScores() {
  const scores = { E: 0, I: 0, S: 0, N: 0, T: 0, F: 0, J: 0, P: 0 };

  for (const q of questions) {
    const chosen = document.querySelector(`input[name="${q.id}"]:checked`);
    if (!chosen) continue;

    const value = Number(chosen.value);
    const [pos, neg] = q.axis.split("");
    if (value >= 0) {
      scores[pos] += value;
    } else {
      scores[neg] += Math.abs(value);
    }
  }

  return scores;
}

function pickType(scores) {
  const pairs = [
    ["E", "I"],
    ["S", "N"],
    ["T", "F"],
    ["J", "P"],
  ];

  return pairs
    .map(([a, b]) => (scores[a] >= scores[b] ? a : b))
    .join("");
}

function renderDimensions(scores) {
  dimensionGrid.innerHTML = "";
  const pairs = [
    ["E", "I", "外向", "內向"],
    ["S", "N", "感官", "直覺"],
    ["T", "F", "思考", "情感"],
    ["J", "P", "計畫", "彈性"],
  ];

  pairs.forEach(([a, b, labelA, labelB]) => {
    const total = Math.max(scores[a] + scores[b], 1);
    const percentA = Math.round((scores[a] / total) * 100);
    const percentB = 100 - percentA;

    const block = document.createElement("div");
    block.className = "dimension";
    block.innerHTML = `
      <p class="dimension__label">${a}/${b} · ${labelA} vs ${labelB}</p>
      <div class="dimension__bar">
        <div class="dimension__fill" style="width:${percentA}%"></div>
      </div>
      <p class="scale-text">${a}: ${percentA}% · ${b}: ${percentB}%</p>
    `;
    dimensionGrid.appendChild(block);
  });
}

function showResult() {
  const scores = collectScores();
  const type = pickType(scores);
  const detail = personalityDetails[type];

  resultType.textContent = type;
  if (detail) {
    resultTagline.textContent = detail.tagline;
    resultDescription.textContent = detail.description;
    resultEmoji.textContent = detail.emoji;
  } else {
    resultTagline.textContent = "你的組合很少見！";
    resultDescription.textContent =
      "你在四個維度的平衡度很接近，代表你能在不同場景之間自如切換。";
    resultEmoji.textContent = "🌈";
  }

  renderDimensions(scores);
  resultType.scrollIntoView({ behavior: "smooth", block: "center" });
}

function handleSubmit() {
  const unanswered = questions.filter(
    (q) => !document.querySelector(`input[name="${q.id}"]:checked`)
  );

  if (unanswered.length) {
    const first = unanswered[0];
    const card = document.querySelector(`#${first.id}`) || questionsContainer;
    card.scrollIntoView({ behavior: "smooth", block: "center" });
    alert("還有題目沒填喔！請完成所有題目再看結果。");
    return;
  }

  showResult();
}

function handleReset() {
  document.querySelectorAll('input[type="radio"]').forEach((el) => {
    el.checked = false;
  });
  updateProgress();
  resultType.textContent = "尚未計算";
  resultTagline.textContent = "填完題目就會揭曉！";
  resultDescription.textContent =
    "完成所有題目後，這裡會以暖心又犀利的口吻，告訴你是怎樣的星球旅人。";
  resultEmoji.textContent = "🌟";
  dimensionGrid.innerHTML = "";
}

function smoothScrollToQuiz() {
  quizSection.scrollIntoView({ behavior: "smooth", block: "start" });
}

function init() {
  renderQuestions();
  updateProgress();
  submitBtn.addEventListener("click", handleSubmit);
  resetBtn.addEventListener("click", handleReset);
  startBtn.addEventListener("click", smoothScrollToQuiz);
  scrollBtn.addEventListener("click", smoothScrollToQuiz);
}

document.addEventListener("DOMContentLoaded", init);

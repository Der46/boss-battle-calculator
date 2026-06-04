const HP_LEVELS_12 = [
    3000,
    9000,
    20000,
    45000,
    55000,
    75000,
    160000,
    200000,
    350000,
    750000,
    1150000,
    3000000
];

const HP_LEVELS_16 = [
    3000,
    9000,
    20000,
    45000,
    55000,
    75000,
    160000,
    200000,
    250000,
    650000,
    900000,
    1250000,
    2000000,
    2700000,
    4000000,
    7000000
];

const ATTACK_CYCLE_MINUTES = 15;
const WARNING_THRESHOLD_MINUTES = 10;
const MAX_SHIELDS = 3;
const DEFAULT_SHIELDS = 3;
const ALARM_INTERVAL_MS = 1400;
const TIMER_TICK_MS = 250;
const DAMAGE_PER_TOKEN = 60;

const i18n = {
    zh: {
        stageInfo: "關卡資訊",
        appTitle: "怪物攻擊提醒工具",
        language: "語言",
        version12: "12關版本",
        version16: "16關版本",
        customHp: "自訂怪物血量",
        customMonsterHp: "自訂怪物總血量",
        nextAttackWarning: "下次攻擊倒數",
        soundOn: "音效開",
        soundOff: "音效關",
        stopAlarm: "關閉警報",
        inputArea: "資料輸入區",
        battleSettings: "戰鬥狀態設定",
        reset: "重置",
        expectedKillTokens: "預計擊殺所需代幣",
        monsterCurrentHp: "怪物目前血量",
        nextAttackMinutes: "下次攻擊時間，分鐘",
        monsterMaxHp: "怪物總血量",
        monsterRemainingHp: "怪物剩餘血量",
        nextAttackCountdown: "下次攻擊剩餘時間",
        shieldCount: "盾牌數量",
        fullAttackCycle: "完整攻擊週期倒數",
        fullAttackCycleCountdown: "完整攻擊週期剩餘時間",
        ruleTitle: "攻擊規則",
        ruleText: "角色盾牌預設為 3。完整攻擊週期 = 下次攻擊時間 + 15 × 盾牌數量。輸入下次攻擊時間後才會開始倒數；下次攻擊倒數會先顯示輸入的時間，倒數完後每輪重新倒數 15 分鐘。當完整攻擊週期剩餘時間少於 10 分鐘時，警報會持續響起直到手動關閉。擊殺預估以 3 倍倍率計算：1 代幣約等於 60 怪物血量。",
        analysisIdle: "請輸入下次攻擊時間以啟動倒數與警報判斷。",
        analysisCounting: "倒數進行中。下次攻擊剩餘 {nextTime}，完整攻擊週期剩餘 {fullTime}。完整攻擊週期少於 10 分鐘時會啟動警報。",
        analysisAttackNow: "警報：完整攻擊週期剩餘時間少於 10 分鐘，警報將持續發出，直到你按下關閉警報！",
        analysisAlarmMuted: "警報已關閉，但目前完整攻擊週期仍少於 10 分鐘。",
        analysisFinished: "完整攻擊週期已結束，請重新輸入下次攻擊時間。",
        customStage: "自訂"
    },

    en: {
        stageInfo: "Stage Info",
        appTitle: "Monster Attack Reminder",
        language: "Language",
        version12: "12-Stage Version",
        version16: "16-Stage Version",
        customHp: "Custom Monster HP",
        customMonsterHp: "Custom Monster Max HP",
        nextAttackWarning: "Next Attack Countdown",
        soundOn: "Sound On",
        soundOff: "Sound Off",
        stopAlarm: "Stop Alarm",
        inputArea: "Input Area",
        battleSettings: "Battle Status Settings",
        reset: "Reset",
        expectedKillTokens: "Expected Tokens to Defeat Monster",
        monsterCurrentHp: "Monster Current HP",
        nextAttackMinutes: "Next Attack Time, minutes",
        monsterMaxHp: "Monster Max HP",
        monsterRemainingHp: "Monster Remaining HP",
        nextAttackCountdown: "Next Attack Remaining",
        shieldCount: "Shield Count",
        fullAttackCycle: "Full Attack Cycle Countdown",
        fullAttackCycleCountdown: "Full Attack Cycle Remaining",
        ruleTitle: "Attack Rules",
        ruleText: "The character starts with 3 shields. Full attack cycle = next attack time + 15 × shield count. The countdown starts only after entering the next attack time. The next attack countdown first shows the entered time, then restarts as a 15-minute countdown after it reaches zero. When the full attack cycle remaining time is less than 10 minutes, the alarm keeps sounding until manually stopped. Kill estimation uses a 3x multiplier: 1 token equals about 60 monster HP.",
        analysisIdle: "Enter the next attack time to start countdown and alarm checking.",
        analysisCounting: "Countdown running. Next attack remaining: {nextTime}. Full attack cycle remaining: {fullTime}. Alarm starts when the full cycle is under 10 minutes.",
        analysisAttackNow: "Alert: full attack cycle remaining time is under 10 minutes. The alarm will continue until you press Stop Alarm!",
        analysisAlarmMuted: "Alarm stopped, but the full attack cycle is still under 10 minutes.",
        analysisFinished: "Full attack cycle has ended. Enter the next attack time again.",
        customStage: "Custom"
    },

    vi: {
        stageInfo: "Thông tin ải",
        appTitle: "Công cụ nhắc tấn công của quái",
        language: "Ngôn ngữ",
        version12: "Phiên bản 12 ải",
        version16: "Phiên bản 16 ải",
        customHp: "Máu quái tùy chỉnh",
        customMonsterHp: "Máu tối đa tùy chỉnh của quái",
        nextAttackWarning: "Đếm ngược lần tấn công tiếp theo",
        soundOn: "Bật âm thanh",
        soundOff: "Tắt âm thanh",
        stopAlarm: "Tắt cảnh báo",
        inputArea: "Khu vực nhập dữ liệu",
        battleSettings: "Thiết lập trạng thái chiến đấu",
        reset: "Đặt lại",
        expectedKillTokens: "Token dự kiến cần để hạ quái",
        monsterCurrentHp: "Máu hiện tại của quái",
        nextAttackMinutes: "Thời gian tấn công tiếp theo, phút",
        monsterMaxHp: "Máu tối đa của quái",
        monsterRemainingHp: "Máu còn lại của quái",
        nextAttackCountdown: "Thời gian còn lại đến lần tấn công",
        shieldCount: "Số khiên",
        fullAttackCycle: "Đếm ngược chu kỳ tấn công đầy đủ",
        fullAttackCycleCountdown: "Thời gian còn lại của chu kỳ đầy đủ",
        ruleTitle: "Quy tắc tấn công",
        ruleText: "Nhân vật mặc định có 3 khiên. Chu kỳ tấn công đầy đủ = thời gian tấn công tiếp theo + 15 × số khiên. Bộ đếm chỉ bắt đầu sau khi nhập thời gian tấn công tiếp theo. Đếm ngược lần tấn công tiếp theo trước tiên hiển thị thời gian đã nhập, sau đó khởi động lại thành bộ đếm 15 phút sau khi về 0. Khi thời gian còn lại của chu kỳ tấn công đầy đủ dưới 10 phút, cảnh báo sẽ tiếp tục cho đến khi tắt thủ công. Ước tính tiêu diệt dùng hệ số 3x: 1 token tương đương khoảng 60 máu quái.",
        analysisIdle: "Nhập thời gian tấn công tiếp theo để bắt đầu đếm ngược và kiểm tra cảnh báo.",
        analysisCounting: "Đang đếm ngược. Lần tấn công tiếp theo còn {nextTime}. Chu kỳ đầy đủ còn {fullTime}. Cảnh báo sẽ bắt đầu khi chu kỳ đầy đủ dưới 10 phút.",
        analysisAttackNow: "Cảnh báo: chu kỳ tấn công đầy đủ còn dưới 10 phút. Cảnh báo sẽ tiếp tục cho đến khi bạn nhấn Tắt cảnh báo!",
        analysisAlarmMuted: "Đã tắt cảnh báo, nhưng chu kỳ tấn công đầy đủ vẫn dưới 10 phút.",
        analysisFinished: "Chu kỳ tấn công đầy đủ đã kết thúc. Hãy nhập lại thời gian tấn công tiếp theo.",
        customStage: "Tùy chỉnh"
    }
};

let state = {
    language: localStorage.getItem("monsterWarningLang") || "zh",
    version: 12,
    stageIndex: 0,
    customMode: false,

    monsterMaxHp: HP_LEVELS_12[0],
    monsterCurrentHp: HP_LEVELS_12[0],

    shields: DEFAULT_SHIELDS,

    /**
     * 使用者輸入的下次攻擊時間，單位：分鐘。
     * null 代表尚未輸入，因此不開始倒數。
     */
    nextAttackMinutes: null,

    /**
     * 是否已經因為「下次攻擊時間變更」啟動倒數。
     */
    hasStartedCountdown: false,

    nextAttackEndTimestamp: null,
    fullAttackCycleEndTimestamp: null,

    nextAttackRemainingSeconds: 0,
    fullAttackCycleRemainingSeconds: 0,

    soundEnabled: true,
    alarmMutedByUser: false
};

let audioContext = null;
let alarmInterval = null;
let timerInterval = null;

const dom = {
    languageSelect: document.getElementById("languageSelect"),

    version12Btn: document.getElementById("version12Btn"),
    version16Btn: document.getElementById("version16Btn"),
    customModeBtn: document.getElementById("customModeBtn"),
    stageScroll: document.getElementById("stageScroll"),
    customHpWrap: document.getElementById("customHpWrap"),
    customHpInput: document.getElementById("customHpInput"),

    currentStageBadge: document.getElementById("currentStageBadge"),

    shieldMinusBtn: document.getElementById("shieldMinusBtn"),
    shieldPlusBtn: document.getElementById("shieldPlusBtn"),
    shieldText: document.getElementById("shieldText"),

    monsterCurrentHpInput: document.getElementById("monsterCurrentHpInput"),
    monsterHpBar: document.getElementById("monsterHpBar"),
    monsterHpText: document.getElementById("monsterHpText"),

    nextAttackMinutesInput: document.getElementById("nextAttackMinutesInput"),

    nextAttackDisplay: document.getElementById("nextAttackDisplay"),
    fullAttackCycleDisplay: document.getElementById("fullAttackCycleDisplay"),
    soundToggleBtn: document.getElementById("soundToggleBtn"),

    monsterMaxHpResult: document.getElementById("monsterMaxHpResult"),
    monsterRemainingHpResult: document.getElementById("monsterRemainingHpResult"),
    nextAttackMinutesResult: document.getElementById("nextAttackMinutesResult"),
    shieldCountResult: document.getElementById("shieldCountResult"),
    expectedKillTokensResult: document.getElementById("expectedKillTokensResult"),
    fullAttackCycleResult: document.getElementById("fullAttackCycleResult"),

    attackTimer: document.querySelector(".attack-timer"),
    analysisMessage: document.getElementById("analysisMessage"),

    resetBtn: document.getElementById("resetBtn")
};

function t(key) {
    return i18n[state.language][key] || key;
}

function translateTemplate(key, data) {
    let text = t(key);

    Object.keys(data).forEach((name) => {
        text = text.replaceAll(`{${name}}`, data[name]);
    });

    return text;
}

function formatNumber(value) {
    const number = Number(value) || 0;
    return new Intl.NumberFormat().format(Math.round(number));
}

function formatTokenAmount(value) {
    const number = Number(value) || 0;

    return new Intl.NumberFormat(undefined, {
        minimumFractionDigits: 0,
        maximumFractionDigits: 1
    }).format(number);
}

function formatCountdown(totalSeconds) {
    const safeSeconds = Math.max(0, Math.ceil(Number(totalSeconds) || 0));
    const hours = Math.floor(safeSeconds / 3600);
    const minutes = Math.floor((safeSeconds % 3600) / 60);
    const seconds = safeSeconds % 60;

    if (hours > 0) {
        return `${String(hours).padStart(2, "0")}:${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
    }

    return `${String(minutes).padStart(2, "0")}:${String(seconds).padStart(2, "0")}`;
}

function getDisplayCountdown(seconds) {
    if (!state.hasStartedCountdown) {
        return "--:--";
    }

    return formatCountdown(seconds);
}

function clamp(value, min, max) {
    return Math.min(max, Math.max(min, value));
}

function getNumber(input) {
    return Number(input.value) || 0;
}

function getCurrentHpList() {
    return state.version === 12 ? HP_LEVELS_12 : HP_LEVELS_16;
}

function calculateFullAttackCycleMinutes() {
    const nextAttack = Math.max(0, Number(state.nextAttackMinutes) || 0);
    const shields = clamp(state.shields, 0, MAX_SHIELDS);

    return nextAttack + ATTACK_CYCLE_MINUTES * shields;
}

function shouldTriggerAlarm() {
    if (!state.hasStartedCountdown) return false;

    return state.fullAttackCycleRemainingSeconds > 0 &&
        state.fullAttackCycleRemainingSeconds < WARNING_THRESHOLD_MINUTES * 60;
}

function calculateExpectedKillTokens() {
    const currentHp = clamp(state.monsterCurrentHp, 0, state.monsterMaxHp);

    return currentHp / DAMAGE_PER_TOKEN;
}

function restartAttackCountdown() {
    if (state.nextAttackMinutes === null || state.nextAttackMinutes < 0) {
        resetCountdownOnly();
        return;
    }

    const now = Date.now();

    state.hasStartedCountdown = true;
    state.alarmMutedByUser = false;

    const nextAttackSeconds = Math.max(0, state.nextAttackMinutes * 60);
    const fullAttackCycleSeconds = Math.max(0, calculateFullAttackCycleMinutes() * 60);

    state.nextAttackRemainingSeconds = nextAttackSeconds;
    state.fullAttackCycleRemainingSeconds = fullAttackCycleSeconds;

    state.nextAttackEndTimestamp = now + nextAttackSeconds * 1000;
    state.fullAttackCycleEndTimestamp = now + fullAttackCycleSeconds * 1000;

    startTimerLoop();
    updateAll();
}

function resetCountdownOnly() {
    state.hasStartedCountdown = false;
    state.nextAttackEndTimestamp = null;
    state.fullAttackCycleEndTimestamp = null;
    state.nextAttackRemainingSeconds = 0;
    state.fullAttackCycleRemainingSeconds = 0;
    state.alarmMutedByUser = false;

    stopAlarmSound();
    stopTimerLoop();
    updateAll(false);
}

function clearNextAttackInputAndCountdown() {
    state.nextAttackMinutes = null;

    state.hasStartedCountdown = false;
    state.nextAttackEndTimestamp = null;
    state.fullAttackCycleEndTimestamp = null;

    state.nextAttackRemainingSeconds = 0;
    state.fullAttackCycleRemainingSeconds = 0;

    state.alarmMutedByUser = false;

    stopAlarmSound();
    stopTimerLoop();

    dom.nextAttackMinutesInput.value = "";

    updateAll(false);
}

function startTimerLoop() {
    if (timerInterval) return;

    timerInterval = setInterval(() => {
        tickCountdown();
    }, TIMER_TICK_MS);
}

function stopTimerLoop() {
    if (!timerInterval) return;

    clearInterval(timerInterval);
    timerInterval = null;
}

function tickCountdown() {
    if (!state.hasStartedCountdown) {
        stopTimerLoop();
        return;
    }

    const now = Date.now();

    if (state.fullAttackCycleEndTimestamp !== null) {
        state.fullAttackCycleRemainingSeconds = Math.max(
            0,
            Math.ceil((state.fullAttackCycleEndTimestamp - now) / 1000)
        );
    }

    if (state.nextAttackEndTimestamp !== null) {
        state.nextAttackRemainingSeconds = Math.max(
            0,
            Math.ceil((state.nextAttackEndTimestamp - now) / 1000)
        );
    }

    if (
        state.hasStartedCountdown &&
        state.fullAttackCycleRemainingSeconds > 0 &&
        state.nextAttackRemainingSeconds <= 0
    ) {
        const nextCycleSeconds = Math.min(
            ATTACK_CYCLE_MINUTES * 60,
            state.fullAttackCycleRemainingSeconds
        );

        state.nextAttackRemainingSeconds = nextCycleSeconds;
        state.nextAttackEndTimestamp = now + nextCycleSeconds * 1000;
    }

    syncAlarmWithCurrentState();

    if (state.fullAttackCycleRemainingSeconds <= 0) {
        state.nextAttackRemainingSeconds = 0;
        stopTimerLoop();
    }

    updateAll(false);
}

function applyLanguage() {
    document.documentElement.lang =
        state.language === "zh" ? "zh-TW" : state.language === "vi" ? "vi" : "en";

    document.querySelectorAll("[data-i18n]").forEach((node) => {
        const key = node.dataset.i18n;
        node.textContent = t(key);
    });

    renderStages();
    updateSoundButton();
    updateAll();
}

function setVersion(version) {
    state.customMode = false;
    state.version = version;
    state.stageIndex = 0;

    const hpList = getCurrentHpList();

    state.monsterMaxHp = hpList[0];
    state.monsterCurrentHp = hpList[0];

    dom.customHpWrap.classList.add("hidden");

    updateVersionButtons();
    renderStages();
    syncInputs();
    updateAll();
}

function enableCustomMode() {
    state.customMode = true;

    const customHp = Math.max(1, getNumber(dom.customHpInput) || state.monsterMaxHp || 3000);

    state.monsterMaxHp = customHp;
    state.monsterCurrentHp = customHp;

    dom.customHpWrap.classList.remove("hidden");

    updateVersionButtons();
    renderStages();
    syncInputs();
    updateAll();
}

function updateVersionButtons() {
    dom.version12Btn.classList.toggle("active", !state.customMode && state.version === 12);
    dom.version16Btn.classList.toggle("active", !state.customMode && state.version === 16);
    dom.customModeBtn.classList.toggle("active", state.customMode);
}

function renderStages() {
    dom.stageScroll.innerHTML = "";

    if (state.customMode) {
        const button = document.createElement("button");
        button.className = "stage-btn active";
        button.textContent = t("customStage");
        dom.stageScroll.appendChild(button);
        return;
    }

    const hpList = getCurrentHpList();

    hpList.forEach((hp, index) => {
        const button = document.createElement("button");
        button.className = `stage-btn ${index === state.stageIndex ? "active" : ""}`;
        button.textContent = index + 1;
        button.title = formatNumber(hp);

        button.addEventListener("click", () => {
            state.stageIndex = index;
            state.monsterMaxHp = hp;
            state.monsterCurrentHp = hp;

            renderStages();
            syncInputs();
            updateAll();
        });

        dom.stageScroll.appendChild(button);
    });
}

function syncInputs() {
    dom.monsterCurrentHpInput.value = state.monsterCurrentHp;

    if (state.nextAttackMinutes === null) {
        dom.nextAttackMinutesInput.value = "";
    } else {
        dom.nextAttackMinutesInput.value = state.nextAttackMinutes;
    }

    if (state.customMode) {
        dom.customHpInput.value = state.monsterMaxHp;
    }
}

function updateCurrentStageBadge() {
    if (state.customMode) {
        dom.currentStageBadge.textContent = "★";
    } else {
        dom.currentStageBadge.textContent = state.stageIndex + 1;
    }
}

function updateMonsterHp() {
    state.monsterCurrentHp = clamp(state.monsterCurrentHp, 0, state.monsterMaxHp);

    const percent = state.monsterMaxHp > 0
        ? clamp((state.monsterCurrentHp / state.monsterMaxHp) * 100, 0, 100)
        : 0;

    dom.monsterHpBar.style.width = `${percent}%`;
    dom.monsterHpText.textContent = `${formatNumber(state.monsterCurrentHp)} / ${formatNumber(state.monsterMaxHp)}`;
    dom.monsterCurrentHpInput.value = state.monsterCurrentHp;
}

function updateShield() {
    state.shields = clamp(state.shields, 0, MAX_SHIELDS);

    dom.shieldText.textContent = `${state.shields} / ${MAX_SHIELDS}`;
    dom.shieldCountResult.textContent = `${state.shields} / ${MAX_SHIELDS}`;
}

function updateAttackInfo() {
    const nextAttackText = getDisplayCountdown(state.nextAttackRemainingSeconds);
    const fullCycleText = getDisplayCountdown(state.fullAttackCycleRemainingSeconds);

    dom.nextAttackDisplay.textContent = nextAttackText;
    dom.fullAttackCycleDisplay.textContent = fullCycleText;

    dom.nextAttackMinutesResult.textContent = nextAttackText;
    dom.fullAttackCycleResult.textContent = fullCycleText;

    updateAnalysis();
    syncAlarmWithCurrentState();
}

function updateResults() {
    const expectedKillTokens = calculateExpectedKillTokens();

    dom.monsterMaxHpResult.textContent = formatNumber(state.monsterMaxHp);
    dom.monsterRemainingHpResult.textContent = formatNumber(state.monsterCurrentHp);

    if (dom.expectedKillTokensResult) {
        dom.expectedKillTokensResult.textContent = formatTokenAmount(expectedKillTokens);
    }
}

function updateAnalysis() {
    const message = dom.analysisMessage;
    const isAlarm = shouldTriggerAlarm();

    message.className = "analysis-message";
    dom.attackTimer.classList.remove("warning");

    if (!state.hasStartedCountdown) {
        message.textContent = t("analysisIdle");
        message.classList.add("warn");
        return;
    }

    if (state.fullAttackCycleRemainingSeconds <= 0) {
        message.textContent = t("analysisFinished");
        message.classList.add("warn");
        dom.attackTimer.classList.remove("warning");
        return;
    }

    if (isAlarm) {
        dom.attackTimer.classList.add("warning");

        if (state.alarmMutedByUser || !state.soundEnabled) {
            message.textContent = t("analysisAlarmMuted");
            message.classList.add("warn");
        } else {
            message.textContent = t("analysisAttackNow");
            message.classList.add("bad");
        }

        return;
    }

    message.textContent = translateTemplate("analysisCounting", {
        nextTime: formatCountdown(state.nextAttackRemainingSeconds),
        fullTime: formatCountdown(state.fullAttackCycleRemainingSeconds)
    });

    message.classList.add("good");
}

function syncAlarmWithCurrentState() {
    const isAlarm = shouldTriggerAlarm();

    if (!isAlarm) {
        stopAlarmSound();

        if (state.fullAttackCycleRemainingSeconds >= WARNING_THRESHOLD_MINUTES * 60) {
            state.alarmMutedByUser = false;
        }

        return;
    }

    if (!state.soundEnabled || state.alarmMutedByUser) {
        stopAlarmSound();
        return;
    }

    startAlarmSound();
}

function startAlarmSound() {
    if (alarmInterval) return;

    playBeep();

    alarmInterval = setInterval(() => {
        playBeep();

        if ("vibrate" in navigator) {
            navigator.vibrate([150, 80, 150]);
        }
    }, ALARM_INTERVAL_MS);
}

function stopAlarmSound() {
    if (!alarmInterval) return;

    clearInterval(alarmInterval);
    alarmInterval = null;
}

function updateSoundButton() {
    const isAlarm = shouldTriggerAlarm();

    if (
        isAlarm &&
        state.soundEnabled &&
        !state.alarmMutedByUser
    ) {
        dom.soundToggleBtn.textContent = t("stopAlarm");
        dom.soundToggleBtn.classList.remove("sound-off");
        dom.soundToggleBtn.classList.add("sound-on");
        return;
    }

    dom.soundToggleBtn.textContent = state.soundEnabled ? t("soundOn") : t("soundOff");
    dom.soundToggleBtn.classList.toggle("sound-on", state.soundEnabled);
    dom.soundToggleBtn.classList.toggle("sound-off", !state.soundEnabled);
}

function updateAll(syncInputValues = true) {
    updateCurrentStageBadge();
    updateMonsterHp();
    updateShield();
    updateResults();
    updateAttackInfo();
    updateSoundButton();

    if (syncInputValues) {
        syncInputs();
    }
}

function handleCustomHpChange() {
    const customHp = Math.max(1, getNumber(dom.customHpInput));

    state.customMode = true;
    state.monsterMaxHp = customHp;
    state.monsterCurrentHp = clamp(state.monsterCurrentHp, 0, customHp);

    if (state.monsterCurrentHp === 0 || state.monsterCurrentHp > customHp) {
        state.monsterCurrentHp = customHp;
    }

    updateVersionButtons();
    renderStages();
    syncInputs();
    updateAll();
}

function resetAll() {
    if (state.customMode) {
        const customHp = Math.max(1, getNumber(dom.customHpInput) || 3000);
        state.monsterMaxHp = customHp;
        state.monsterCurrentHp = customHp;
    } else {
        const hpList = getCurrentHpList();
        state.monsterMaxHp = hpList[state.stageIndex];
        state.monsterCurrentHp = state.monsterMaxHp;
    }

    state.shields = DEFAULT_SHIELDS;
    state.nextAttackMinutes = null;

    state.hasStartedCountdown = false;
    state.nextAttackEndTimestamp = null;
    state.fullAttackCycleEndTimestamp = null;

    state.nextAttackRemainingSeconds = 0;
    state.fullAttackCycleRemainingSeconds = 0;

    state.soundEnabled = true;
    state.alarmMutedByUser = false;

    stopAlarmSound();
    stopTimerLoop();

    syncInputs();
    updateAll();
}

function playBeep() {
    try {
        const AudioContext = window.AudioContext || window.webkitAudioContext;

        if (!AudioContext) return;

        audioContext = audioContext || new AudioContext();

        if (audioContext.state === "suspended") {
            audioContext.resume();
        }

        const oscillator = audioContext.createOscillator();
        const gain = audioContext.createGain();

        oscillator.type = "sine";
        oscillator.frequency.setValueAtTime(880, audioContext.currentTime);
        oscillator.frequency.exponentialRampToValueAtTime(520, audioContext.currentTime + 0.28);

        gain.gain.setValueAtTime(0.28, audioContext.currentTime);
        gain.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 0.32);

        oscillator.connect(gain);
        gain.connect(audioContext.destination);

        oscillator.start();
        oscillator.stop(audioContext.currentTime + 0.32);
    } catch (error) {
        console.error(error);
    }
}

function bindEvents() {
    dom.languageSelect.value = state.language;

    dom.languageSelect.addEventListener("change", (event) => {
        state.language = event.target.value;
        localStorage.setItem("monsterWarningLang", state.language);
        applyLanguage();
    });

    dom.version12Btn.addEventListener("click", () => setVersion(12));
    dom.version16Btn.addEventListener("click", () => setVersion(16));
    dom.customModeBtn.addEventListener("click", enableCustomMode);

    dom.customHpInput.addEventListener("input", handleCustomHpChange);

    dom.monsterCurrentHpInput.addEventListener("input", () => {
        state.monsterCurrentHp = getNumber(dom.monsterCurrentHpInput);
        updateAll(false);
    });

    dom.nextAttackMinutesInput.addEventListener("input", () => {
        const rawValue = dom.nextAttackMinutesInput.value.trim();

        if (rawValue === "") {
            state.nextAttackMinutes = null;
            resetCountdownOnly();
            return;
        }

        state.nextAttackMinutes = Math.max(0, Number(rawValue) || 0);
        restartAttackCountdown();
    });

    dom.shieldMinusBtn.addEventListener("click", () => {
        state.shields = clamp(state.shields - 1, 0, MAX_SHIELDS);

        if (state.nextAttackMinutes !== null) {
            restartAttackCountdown();
        } else {
            updateAll();
        }
    });

    dom.shieldPlusBtn.addEventListener("click", () => {
        state.shields = clamp(state.shields + 1, 0, MAX_SHIELDS);

        if (state.nextAttackMinutes !== null) {
            restartAttackCountdown();
        } else {
            updateAll();
        }
    });

    dom.soundToggleBtn.addEventListener("click", () => {
        const isAlarm = shouldTriggerAlarm();

        if (
            isAlarm &&
            state.soundEnabled &&
            !state.alarmMutedByUser
        ) {
            state.alarmMutedByUser = true;
            stopAlarmSound();

            clearNextAttackInputAndCountdown();

            return;
        }

        state.soundEnabled = !state.soundEnabled;

        if (!state.soundEnabled) {
            state.alarmMutedByUser = true;
            stopAlarmSound();
        } else if (!isAlarm) {
            state.alarmMutedByUser = false;
        }

        updateAll(false);
    });

    dom.resetBtn.addEventListener("click", resetAll);

    window.addEventListener("beforeunload", () => {
        stopAlarmSound();
        stopTimerLoop();
    });
}

function init() {
    bindEvents();
    updateVersionButtons();
    renderStages();
    syncInputs();
    applyLanguage();
    updateAll();
}

init();

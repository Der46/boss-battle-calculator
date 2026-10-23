<p align="center">
  <img src="icon.svg" width="128" height="128" alt="Boss Battle Calculator icon" />
</p>

<h1 align="center">怪物攻擊提醒工具 · Boss Battle Calculator</h1>

<p align="center">
  追蹤怪物攻擊倒數、盾牌數量與擊殺所需代幣的小工具。<br />
  A small web tool for tracking monster attack timers, shields, and tokens needed to defeat the boss.
</p>

---

## 功能 Features

- **關卡版本切換**：內建 12 關與 16 關的怪物血量表，也可自訂怪物總血量。
- **攻擊倒數**：輸入「下次攻擊時間（分鐘）」後開始倒數，倒數結束後每輪重新倒數 15 分鐘。
- **完整攻擊週期**：完整週期 = 下次攻擊時間 + 15 × 盾牌數量。
- **警報**：完整攻擊週期剩餘少於 10 分鐘時，持續響起警報直到手動關閉，可切換音效開關。
- **盾牌管理**：盾牌預設 3 個，可用 + / − 調整。
- **擊殺代幣預估**：以 3 倍倍率計算，1 代幣約等於 60 怪物血量。
- **多語系**：中文、English、Tiếng Việt。
- **響應式介面**：手機與桌機皆可使用，可加入主畫面當作 App 使用（附 SVG App icon 與 Web Manifest）。

## 使用方式 Usage

純前端靜態網頁，不需要安裝或建置。

1. 下載或 clone 此專案：

   ```bash
   git clone https://github.com/Der46/boss-battle-calculator.git
   ```

2. 用瀏覽器開啟 `index.html` 即可使用。

也可以直接部署到 GitHub Pages 等任何靜態網站服務。

## 專案結構 Project Structure

```
boss-battle-calculator/
├── index.html            # 頁面結構
├── style.css             # 遊戲風格樣式與響應式排版
├── app.js                # 倒數、警報、血量計算與多語系邏輯
├── icon.svg              # App icon / favicon
├── manifest.webmanifest  # PWA 設定（加入主畫面）
└── README.md
```

## 攻擊規則 Attack Rules

| 項目 | 規則 |
| --- | --- |
| 預設盾牌 | 3 |
| 每輪攻擊間隔 | 15 分鐘 |
| 完整攻擊週期 | 下次攻擊時間 + 15 × 盾牌數量 |
| 警報門檻 | 完整週期剩餘 < 10 分鐘 |
| 擊殺預估 | 1 代幣 ≈ 60 HP（3 倍倍率） |

## 版權 Copyright

Copyright © Coin999-長長久久 隊伍

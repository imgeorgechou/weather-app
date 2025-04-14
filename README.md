# Weather App 天氣應用

一個使用 React + Vite 開發的現代化天氣應用，提供即時天氣資訊和優雅的使用者體驗。

## 🌟 專案特色

- 使用 React 18 最新特性
- Vite 構建工具實現快速開發和打包
- Tailwind CSS 實現響應式設計
- 優雅的 UI/UX 設計
- 即時天氣資訊顯示
- 載入動畫優化使用體驗

## 🛠️ 技術棧

- **前端框架**: React 19.0.0
- **構建工具**: Vite 6.2.0
- **樣式解決方案**: Tailwind CSS 4.1.3
- **代碼質量**: ESLint
- **開發語言**: JavaScript/JSX

## 🔥 主要功能

- 天氣卡片組件（WeatherCard）展示詳細天氣資訊
- 載入動畫組件（Spinner）優化使用者體驗
- 多種天氣圖標展示不同天氣狀態
- 響應式設計，完美適配各種設備

## 📦 安裝與運行

```bash
# 安裝依賴
npm install

# 開發模式運行
npm run dev

# 打包專案
npm run build

# 預覽打包結果
npm run preview
```

## 🎯 專案亮點

1. **組件化設計**

   - 使用獨立的 WeatherCard 和 Spinner 組件
   - 組件之間低耦合，高內聚

2. **現代化工具鏈**

   - 使用 Vite 實現極速的開發體驗
   - ESLint 確保代碼質量

3. **優秀的使用者體驗**
   - 流暢的載入動畫
   - 清晰的天氣資訊展示
   - 直觀的天氣圖標

## 🔍 專案結構

```
weather-app/
├── src/
│   ├── component/
│   │   ├── Spinner.jsx
│   │   └── WeatherCard.jsx
│   ├── App.jsx
│   └── main.jsx
├── public/
│   ├── airflow.svg
│   ├── cloud.svg
│   ├── lesscloud.svg
│   ├── rain.svg
│   └── sunny.svg
└── package.json
```

## 🤝 貢獻

歡迎提出建議和改進意見！

## 📝 授權

[MIT](https://choosealicense.com/licenses/mit/)

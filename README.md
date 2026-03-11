# 🚜 Pixel Farm (像素农场)

> 🌱 A cozy, single-file farming simulation game built with React & Tailwind CSS.  
> 一个基于 React 的单文件田园经营游戏，零构建工具，即开即玩。

![License](https://img.shields.io/badge/license-MIT-green)
![React](https://img.shields.io/badge/React-18-blue)
![Style](https://img.shields.io/badge/Style-Pixel_Art-orange)
![Platform](https://img.shields.io/badge/Platform-Web%20%7C%20Mobile-lightgrey)

---

## 📖 简介 (Introduction)

**Pixel Farm** 是一个完全运行在浏览器中的模拟经营游戏。它抛弃了复杂的 `npm install` 和构建流程，所有的逻辑（游戏引擎、UI、状态管理）都封装在一个单独的 `index.html` 文件中。

无论是在电脑摸鱼，还是在手机上消遣，它都能提供丝滑的体验。游戏拥有完整的**季节系统**、**天气变化**、**市场经济**以及**图鉴收集**要素。

## ✨ 特性 (Features)

* **⚡ 单文件架构 (Single-File Architecture)**: 没有 Webpack，没有 Node_modules，只有一个 `.html` 文件。引用 CDN 版本的 React 和 Tailwind，简单纯粹。
* **🌦 动态天气与季节 (Dynamic Environment)**: 
    * 🌸☀️🍂❄️ 四季轮转，背景音乐随季节改变。
    * ☀️🌧️❄️ 晴雨霜冻实时天气系统，影响作物生长与土壤湿度。
* **💰 模拟经济 (Economy System)**: 
    * 波动的市场价格（80%~120%），考验你的低买高卖策略。
    * 包含种子、肥料、杀虫剂、抗冻剂等多种道具。
* **📱 移动端适配 (Mobile First)**: 针对触摸操作优化，支持长按查看详情，拥有精美的移动端 UI 布局。
* **💾 自动存档 (Auto Save)**: 基于 LocalStorage 的实时存档机制，随时关闭，随时继续。
* **🎵 沉浸式音效 (Immersive Audio)**: 包含环境音效（雨声、风声）和操作反馈音效。

## 🎮 如何开始 (How to Play)

🎮 方式 1: 在线体验 (Demo)
最快游玩本项目的方式，无需下载任何文件，点击即玩：
👉 点击这里开始游戏 (GitHub Pages)

🌐 方式 2: 直接运行 (免安装环境)
适合不想配置 Node.js 环境的普通玩家。

下载本仓库 main 分支中的所有文件。

解压后，直接使用现代浏览器（Chrome / Edge / Safari 等）双击打开 index.html 即可游玩！

💡 注： 由于部分基础运行库使用了 CDN 资源，首次打开该版本需要保持网络畅通。

💻 方式 3: 本地运行 (开发环境)
适合想要查看源码或进行简单修改的开发者。

下载本仓库 V1.1 分支中的所有文件。

在项目根目录打开终端，安装基础依赖并运行：

Bash
npm install
npm run preview
终端会输出一个本地服务地址（如 http://localhost:4173/），复制该网址到浏览器中打开即可。

📦 方式 4: 自行编译与打包 (进阶/安卓 APK)
适合想要深度定制、打包纯净网页版或将其打包为独立安卓 App 的开发者。请下载 V1.2 分支中的所有文件。

🔹 4.1 编译纯净网页版
Bash
# 1. 安装基础依赖
npm install

# 2. 安装 TailwindCSS 样式依赖
npm install -D tailwindcss @tailwindcss/vite

# 3. 执行生产环境打包
npm run build

# 4. 预览打包后的最终形态
npm run preview
📱 4.2 进阶：打包为安卓 APK (需安装 Android Studio)
如果你想把游戏装进手机里，可以利用 Capacitor 将其打包为原生 App。

环境初始化：

Bash
# 安装 Capacitor 核心及脚手架
npm install @capacitor/core
npm install @capacitor/cli --save-dev

# 初始化项目（按提示输入游戏名称和包名，例如 com.pixel.farm）
npx cap init 

# 添加 Android 平台支持
npm install @capacitor/android
npx cap add android
同步与打包：
以后每次修改游戏代码后，只需执行以下步骤即可生成新的 APK：

Bash
# 1. 重新生成最新版的前端构建文件 (dist)
npm run build 

# 2. 将网页文件同步注入到安卓工程中
npx cap sync

# 3. 唤起 Android Studio
npx cap open android 
在自动打开的 Android Studio 界面中：
等待底部进度条加载完毕 -> 点击顶部菜单栏的 Build -> 选择 Build Bundle(s) / APK(s) -> 点击 Build APK(s)，等待右下角提示成功即可获取你的专属游戏安装包！

## 🕹️ 游戏指南 (Game Guide)

1.  **耕种**: 购买种子 -> 播种 -> 浇水 -> 等待成熟。
2.  **维护**:
    * **干旱**: 需要浇水（或使用黄金喷壶）。
    * **虫害**: 使用杀虫剂保护作物。
    * **霜冻**: 冬季或恶劣天气需要使用抗冻剂，否则作物健康度会下降。
3.  **收获**: 使用镰刀收割成熟作物。
4.  **贸易**: 观察市场行情，在价格高点出售作物，扩建仓库，解锁更多土地！
5.  **成就**: 解锁图鉴，获得“神农再世”称号，最终解锁**黄金喷壶**。

## 🛠️ 技术栈 (Tech Stack)

虽然只是一个 HTML 文件，但内部结构严谨：

* **Core**: React 18 (通过 unpkg CDN 引入) + Babel Standalone。
* **Styling**: Tailwind CSS (通过 CDN 引入) + 内联 CSS 动画。
* **State Management**: 自定义 `GameStore` 类，实现了简单的发布订阅模式 (Observer Pattern) 和 React Hooks (`useStore`) 绑定。
* **Audio**: 自定义 `AudioManager`，处理多音轨混合与环境音效。

## 🤝 贡献 (Contributing)

如果你对这个小项目感兴趣，欢迎 Fork 并提交 PR！你可以尝试：
* 添加新的作物类型。
* 增加“加工厂”功能（如：小麦 -> 面粉）。
* 优化像素画素材。

## 📄 License

MIT License

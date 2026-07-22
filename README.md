# 
模仿女神异闻录3风格的个人页面

## 项目结构
N-Leon-Wesker-C.github.io/

├── index.html                    ← 主页（不再包含博客卡片）<br>
├── lang.js                       ← 英文翻译表 <br>
├── css/style.css                 ← 共享样式 <br>
├── js/app.js                     ← 共享逻辑（自动加载3个组件）  <br>
│ <br>
├── components/  <br>
│   ├── header.html               ← 导航栏 <br>
│   ├── footer.html               ← 页脚 <br>
│   └── blog-list.html           ← 🆕 技术博客卡片列表 <br>
    │ <br>
├── blog-template.html            ← 📝 技术博客模板（中英双语） <br>
├── blog1.html / blog2.html       ← 已有技术博客 <br>
│ <br>
└── life/                         ← 🔒 生活博客（导航栏不可见） <br>
    ├── index.html                ← 生活博客列表页 <br>
    └── template.html             ← 📝 生活博客模板（纯中文） <br>

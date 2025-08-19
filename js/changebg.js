// 实现在指定图片集中随机替换背景图片
// 优化版

(function() {
  // === 配置区 (请在此处修改您的图片URL) ===
  const backgroundImages = [
    "https://i.loli.net/2019/03/12/5c873603b8741.jpg",
    "https://i.loli.net/2019/03/12/5c873603ce3b7.jpg",
    "https://i.loli.net/2019/03/12/5c873603cfa76.jpg",
    "https://i.loli.net/2019/03/12/5c873603d064a.jpg",
    "https://i.loli.net/2019/03/12/5c873603d46fe.jpg",
    "https://i.loli.net/2019/03/12/5c873603d7715.jpg",
    "https://i.loli.net/2019/03/12/5c873603da0f2.jpg",
    "https://i.loli.net/2019/03/12/5c873603f3157.jpg",
    "https://i.loli.net/2019/03/12/5c87369c934eb.jpg",
    "https://i.loli.net/2019/03/12/5c87369c9f796.jpg",
    "https://i.loli.net/2019/03/12/5c87369ca6808.jpg",
    "https://i.loli.net/2019/03/12/5c87369cb2bcf.jpg",
    "https://i.loli.net/2019/03/12/5c87369cd5f1a.jpg",
    "https://i.loli.net/2019/03/12/5c87369d0b034.jpg",
    "https://i.loli.net/2019/03/12/5c87369d3417b.jpg",
    "https://i.loli.net/2019/03/12/5c87369d7dc30.jpg",
    "https://i.loli.net/2019/03/12/5c87369d8a1f0.jpg",
    "https://i.loli.net/2019/03/12/5c87369d998ac.jpg",
    "https://i.loli.net/2019/03/12/5c8736fb4fcf5.jpg",
    "https://i.loli.net/2019/03/12/5c8736fb5089f.jpg"
  ];
  // ===================================

  // 获取背景容器元素
  const backgroundArea = document.getElementById("BackgroundArea");

  // 安全检查：确保元素存在
  if (!backgroundArea) {
    console.warn("changebg.js: 未找到ID为 'BackgroundArea' 的元素。");
    return;
  }

  // 生成随机索引
  const randomIndex = Math.floor(Math.random() * backgroundImages.length);

  // 获取随机图片URL
  const randomBackground = backgroundImages[randomIndex];

  // 设置背景图
  backgroundArea.style.backgroundImage = `url(${randomBackground})`;

  // (可选) 调试信息
  // console.log(`已设置背景图: ${randomBackground}`);
})();
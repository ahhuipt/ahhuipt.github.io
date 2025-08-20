$(document).ready(function () {


  $('a.blog-button').click(function () {
    // If already in blog, return early without animate overlay panel again.
    if (location.hash && location.hash == "#blog") return;
    if ($('.panel-cover').hasClass('panel-cover--collapsed')) return;
    $('.main-post-list').removeClass('hidden');
    currentWidth = $('.panel-cover').width();
    if (currentWidth < 2000) {
      $('.panel-cover').addClass('panel-cover--collapsed');
    } else {
      $('.panel-cover').css('max-width', currentWidth);
      $('.panel-cover').animate({ 'max-width': '320px', 'width': '22%' }, 400, swing = 'swing', function () { });
    }


  });

  if (window.location.hash && window.location.hash == "#blog") {
    $('.panel-cover').addClass('panel-cover--collapsed');
    $('.main-post-list').removeClass('hidden');
  }

  if (window.location.pathname.substring(0, 5) == "/tag/") {
    $('.panel-cover').addClass('panel-cover--collapsed');
  }

  $('.btn-mobile-menu__icon').click(function () {
    // 导航按钮被点击
    // this.style.backgroundColor = '#fff'; 设置颜色后会自动消失
  });
});


// getBingImages 函数（淘汰）
// function getBingImages(imgUrls) {
//   /**
//    * 获取Bing壁纸
//    * 先使用 GitHub Action 每天获取 Bing 壁纸 URL 并更新 images.json 文件
//    * 然后读取 images.json 文件中的数据
//    */
//   const indexName = "bing-image-index";
//   let index = sessionStorage.getItem(indexName);

//   // 如果没有保存过索引，或者已达到最大数量（7），则重置为0
//   if (isNaN(index) || index >= imgUrls.length - 1) {
//     index = 0;
//   } else {
//     index++;
//   }

//   // 获取当前要显示的图片URL
//   const imageUrl = imgUrls[index];
//   const fullUrl = "https://www.cn.bing.com  " + imageUrl;

//   // 设置背景图
//   const backgroundArea = document.getElementById('BackgroundArea');
//   if (backgroundArea) {
//     backgroundArea.style.background = `url('${fullUrl}') center center no-repeat #666`;
//     backgroundArea.style.backgroundSize = "cover";
//   }

//   // 保存下一个索引，用于下次访问
//   sessionStorage.setItem(indexName, index);
// }


// getBingImages 函数优化版
function getBingImages(imgUrls) {
  /**
   * 获取Bing壁纸
   * 使用 GitHub Action 每天更新 images.json
   * 页面刷新时切换下一张背景图
   */
  const indexName = "bing-image-index";
  let index = sessionStorage.getItem(indexName);

  // 初始化或递增索引
  if (isNaN(index) || index >= imgUrls.length - 1) {
    index = 0;
  } else {
    index++;
  }

   // 获取当前要显示的图片URL
  const imageUrl = imgUrls[index];
  const fullUrl = `https://www.cn.bing.com${imageUrl}`;

  // 设置背景（根据你的 HTML 选择正确的选择器）
  const backgroundElement = document.getElementById('BackgroundArea') || document.getElementById('panel');
  if (backgroundElement) {
    backgroundElement.style.background = `url('${fullUrl}') center center no-repeat #666`;
    backgroundElement.style.backgroundSize = "cover";
  }

  // 保存索引
  sessionStorage.setItem(indexName, index);
}


// 鼠标特效
var a_idx = 0;
jQuery(document).ready(function ($) {
  var words = ["富强", "民主", "文明", "和谐", "自由", "平等", "公正", "法治", "爱国", "敬业", "诚信", "友善"];
  var colors = ["#ff6651", "#fed14c", "#40c4ff", "#8b79ec", "#ff83a8", "#63d89e"];

  $(document).on('click touchstart', function (e) {
    // 获取鼠标或触摸坐标
    var x, y;
    if (e.type === 'click') {
      x = e.pageX;
      y = e.pageY;
    } else if (e.type === 'touchstart' && e.originalEvent.touches.length > 0) {
      x = e.originalEvent.touches[0].pageX;
      y = e.originalEvent.touches[0].pageY;
    }

    if (!x || !y) return;

    var $i = $('<span>').text(words[a_idx]);
    a_idx = (a_idx + 1) % words.length;

    $i.css({
      'position': 'absolute',
      'top': y - 20,
      'left': x,
      'z-index': 2147483647,
      'font-weight': 'bold',
      'color': colors[Math.floor(Math.random() * colors.length)],
      'user-select': 'none',
      'cursor': 'default',
      'pointer-events': 'none',
      'font-family': 'Microsoft YaHei, sans-serif',
      'font-size': '16px'
    });

    $('body').append($i);

    $i.animate({
      'top': y - 180,
      'opacity': 0
    }, 1500, function () {
      $i.remove();
    });
  });
});
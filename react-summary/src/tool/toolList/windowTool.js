// 检查页面底部是否可见
const bottomVisible = () =>
  document.documentElement.clientHeight + window.scrollY >=
  (document.documentElement.scrollHeight ||
    document.documentElement.clientHeight);
bottomVisible(); // true

// 返回当前链接`url`
const currentURL = () => window.location.href;
currentURL(); // 'https://juejin.im'

// 检查是否包含子元素
const elementContains = (parent, child) =>
  parent !== child && parent.contains(child);
elementContains(
  document.querySelector("head"),
  document.querySelector("title")
); // true
elementContains(document.querySelector("body"), document.querySelector("body")); // false

// 返回指定元素的生效样式
const getStyle = (el, ruleName) => getComputedStyle(el)[ruleName];
getStyle(document.querySelector("p"), "font-size"); // '16px'

// 隐藏所有的指定标签
const hide = (...el) => [...el].forEach(e => (e.style.display = "none"));
hide(document.querySelectorAll("img")); // 隐藏所有<img>标签

// 在指定元素之后插入新元素
const insertAfter = (el, htmlString) =>
  el.insertAdjacentHTML("afterend", htmlString);
// <div id="myId">...</div> <p>after</p>
insertAfter(document.getElementById("myId"), "<p>after</p>");

// 在指定元素之前插入新元素
const insertBefore = (el, htmlString) =>
  el.insertAdjacentHTML("beforebegin", htmlString);
insertBefore(document.getElementById("myId"), "<p>before</p>"); // <p>before</p> <div id="myId">...</div>

// 平滑滚动到当前页面的顶部
const scrollToTop = () => {
  const c = document.documentElement.scrollTop || document.body.scrollTop;
  if (c > 0) {
    window.requestAnimationFrame(scrollToTop);
    window.scrollTo(0, c - c / 8);
  }
};

scrollToTop();

//   指定元素平滑滚动到浏览器窗口的可见区域
const smoothScroll = element =>
  document.querySelector(element).scrollIntoView({
    behavior: "smooth"
  });

smoothScroll("#fooBar");
smoothScroll(".fooBar");

// 检测移动/PC设备
const detectDeviceType = () =>
  /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(
    navigator.userAgent
  )
    ? "Mobile"
    : "Desktop";

// 返回当前的滚动位置
// 默认参数为window ，pageXOffset(pageYOffset)为第一选择，没有则用scrollLeft(scrollTop)
const getScrollPosition = (el = window) => ({
  x: el.pageXOffset !== undefined ? el.pageXOffset : el.scrollLeft,
  y: el.pageYOffset !== undefined ? el.pageYOffset : el.scrollTop
});

getScrollPosition(); // {x: 0, y: 200}

// 转义`HTML`
const escapeHTML = str =>
  str.replace(
    /[&<>'"]/g,
    tag =>
      ({
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        "'": '&#39;',
        '"': '&quot;'
      }[tag] || tag)
  );
escapeHTML('<a href="#">Me & you</a>'); // '&lt;a href=&quot;#&quot;&gt;Me &amp; you&lt;/a&gt;'
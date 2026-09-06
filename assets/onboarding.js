/*!
 * 灵界 1.2026810.915.Extremely unstable · 开箱教程
 * 逻辑：检查 localStorage 有无标记 → 有则什么都不做，无则进桌面时弹教程 → 完成后标记
 */
(function () {
  "use strict";

  var KEY = "lingjie-onboarding-done";

  // 已标记完成 → 什么都不做，直接退出
  try {
    if (localStorage.getItem(KEY) === "1") return;
  } catch (e) {}

  // ---------- DOM 查找辅助 ----------
  function cls(el) {
    var c = el && el.className;
    return typeof c === "string" ? c : "";
  }

  function findByText(tag, text) {
    var els = document.getElementsByTagName(tag);
    for (var i = 0; i < els.length; i++) {
      var t = (els[i].textContent || "").trim();
      if (t.indexOf(text) !== -1 && t.length < 60) return els[i];
    }
    return null;
  }

  function findCoreIsland() {
    var btns = document.getElementsByTagName("button");
    for (var i = 0; i < btns.length; i++) {
      if (cls(btns[i]).indexOf("animate-island-breathe") !== -1) return btns[i];
    }
    return findByText("button", "帮助台");
  }

  function findDock() {
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
      var c = cls(divs[i]);
      if (
        c.indexOf("left-1/2") !== -1 &&
        c.indexOf("bottom-5") !== -1 &&
        c.indexOf("h-16") !== -1 &&
        c.indexOf("rounded-full") !== -1
      )
        return divs[i];
    }
    return null;
  }

  function desktopAlive() {
    // 桌面元素必须存在
    if (!findCoreIsland() && !findDock()) return false;
    // 锁屏"滑动以解锁"文字不能存在
    if (document.body.innerHTML.indexOf("滑动以解锁") !== -1) return false;
    // 锁屏遮罩不能可见
    var divs = document.getElementsByTagName("div");
    for (var i = 0; i < divs.length; i++) {
      var d = divs[i];
      var c = cls(d);
      if (
        c.indexOf("fixed inset-0") !== -1 &&
        c.indexOf("flex-col items-center justify-center") !== -1
      ) {
        var style = window.getComputedStyle(d);
        var opacity = parseFloat(style.opacity);
        if (opacity > 0.1) return false;
      }
    }
    return true;
  }

  // ---------- 教程步骤 ----------
  var STEPS = [
    {
      find: findCoreIsland,
      title: "帮助台 · 功能问答指引",
      desc: "这是帮助台，位于屏幕顶部中央。点击它就能和助手「小灵」对话——问问题、查功能、记录灵感都可以。小灵基于本地规则匹配回复，不调用外部 AI 服务。",
      placement: "bottom",
    },
    {
      find: findDock,
      title: "应用星环 · 应用启动栏",
      desc: "这是应用星环，位于屏幕底部。点击任意图标即可打开对应应用，支持同时打开多个窗口，窗口可拖拽移动、最小化和关闭。",
      placement: "top",
    },
    {
      find: function () {
        return findByText("button", "添加小组件");
      },
      title: "添加小组件",
      desc: "点击这里，可以把倒计时、正计时、随机音乐、一键锁屏等实用小组件添加到桌面，随时查看。",
      placement: "bottom",
    },
    {
      find: function () {
        return findByText("button", "系统介绍");
      },
      title: "系统介绍",
      desc: "随时点击右上角的「系统介绍」可以查看完整的功能说明与操作指南。介绍到此结束，开始探索灵界 OS 吧！",
      placement: "bottom",
    },
  ];

  // ---------- 样式 ----------
  var styleEl = document.createElement("style");
  styleEl.id = "lingjie-onboarding-style";
  styleEl.textContent =
    "@keyframes lj-ob-fade{from{opacity:0}to{opacity:1}}" +
    "@keyframes lj-ob-pop{from{opacity:0;transform:scale(.92) translateY(6px)}to{opacity:1;transform:scale(1) translateY(0)}}" +
    "@keyframes lj-ob-pulse{0%,100%{opacity:.45}50%{opacity:1}}" +
    "@keyframes lj-ob-ring{0%,100%{box-shadow:0 0 0 9999px rgba(0,0,0,.72),0 0 0 2px rgba(255,255,255,.55),0 0 24px 4px rgba(56,189,248,.35)}50%{box-shadow:0 0 0 9999px rgba(0,0,0,.72),0 0 0 2px rgba(255,255,255,.75),0 0 30px 6px rgba(56,189,248,.55)}}" +
    ".lj-ob-root{position:fixed;inset:0;z-index:999999;cursor:pointer;-webkit-tap-highlight-color:transparent;animation:lj-ob-fade .25s ease}" +
    ".lj-ob-spot{position:fixed;border-radius:18px;pointer-events:none;animation:lj-ob-ring 1.8s ease-in-out infinite;transition:left .35s cubic-bezier(.4,0,.2,1),top .35s cubic-bezier(.4,0,.2,1),width .35s cubic-bezier(.4,0,.2,1),height .35s cubic-bezier(.4,0,.2,1)}" +
    ".lj-ob-card{position:fixed;z-index:1000000;max-width:328px;width:calc(100vw - 28px);padding:16px 18px 14px;border-radius:16px;background:rgba(15,16,22,.92);backdrop-filter:blur(20px) saturate(150%);-webkit-backdrop-filter:blur(20px) saturate(150%);border:1px solid rgba(255,255,255,.14);color:#fff;box-shadow:0 16px 48px rgba(0,0,0,.55);font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',system-ui,sans-serif;pointer-events:none;animation:lj-ob-pop .3s cubic-bezier(.34,1.56,.64,1)}" +
    ".lj-ob-title{display:flex;align-items:center;gap:8px;font-size:15px;font-weight:600;line-height:1.3;margin:0 0 8px}" +
    ".lj-ob-dot{width:8px;height:8px;border-radius:50%;background:linear-gradient(135deg,#67e8f9,#3b82f6 60%,#8b5cf6);box-shadow:0 0 8px rgba(56,189,248,.7)}" +
    ".lj-ob-desc{font-size:13.5px;line-height:1.6;margin:0;color:rgba(255,255,255,.82)}" +
    ".lj-ob-foot{display:flex;align-items:center;justify-content:space-between;margin-top:12px}" +
    ".lj-ob-step{font-size:11px;color:rgba(255,255,255,.45);letter-spacing:.5px}" +
    ".lj-ob-hint{font-size:11px;color:rgba(255,255,255,.6);display:flex;align-items:center;gap:5px;animation:lj-ob-pulse 1.6s ease-in-out infinite}" +
    ".lj-ob-arrow{position:absolute;width:0;height:0;border-left:11px solid transparent;border-right:11px solid transparent;filter:drop-shadow(0 -1px 1px rgba(0,0,0,.3))}" +
    ".lj-ob-arrow.up{border-bottom:12px solid rgba(15,16,22,.92)}" +
    ".lj-ob-arrow.down{border-top:12px solid rgba(15,16,22,.92)}" +
    "@keyframes lj-welcome-in{0%{opacity:0;transform:scale(.96)}40%{opacity:1;transform:scale(1)}75%{opacity:1;transform:scale(1)}100%{opacity:0;transform:scale(1.02)}}" +
    "@keyframes lj-welcome-bg{from{opacity:1}to{opacity:0}}" +
    ".lj-welcome-root{position:fixed;inset:0;z-index:9999999;background:#000;display:flex;align-items:center;justify-content:center;overflow:hidden}" +
    ".lj-welcome-text{color:#fff;font-family:-apple-system,BlinkMacSystemFont,'PingFang SC','Microsoft YaHei',system-ui,sans-serif;font-weight:300;text-align:center;animation:lj-welcome-in 3s ease-in-out forwards}";
  (document.head || document.documentElement).appendChild(styleEl);

  // ---------- 状态 ----------
  var started = false;
  var overlayRoot = null;
  var spotEl = null;
  var cardEl = null;
  var arrowEl = null;
  var currentStep = 0;
  var clickLock = false;
  var aliveTimer = null;
  var tryShowTimer = null;

  function teardown() {
    if (aliveTimer) {
      clearInterval(aliveTimer);
      aliveTimer = null;
    }
    if (tryShowTimer) {
      clearTimeout(tryShowTimer);
      tryShowTimer = null;
    }
    if (overlayRoot && overlayRoot.parentNode) overlayRoot.parentNode.removeChild(overlayRoot);
    overlayRoot = spotEl = cardEl = arrowEl = null;
    started = false;
    currentStep = 0;
    clickLock = false;
    window.removeEventListener("resize", onResize, true);
    window.removeEventListener("orientationchange", onResize, true);
  }

  function finish() {
    try {
      localStorage.setItem(KEY, "1");
    } catch (e) {}
    teardown();
  }

  function buildShell() {
    overlayRoot = document.createElement("div");
    overlayRoot.className = "lj-ob-root";

    spotEl = document.createElement("div");
    spotEl.className = "lj-ob-spot";

    cardEl = document.createElement("div");
    cardEl.className = "lj-ob-card";

    overlayRoot.appendChild(spotEl);
    overlayRoot.appendChild(cardEl);
    document.body.appendChild(overlayRoot);

    overlayRoot.addEventListener("click", onAdvance, true);
    overlayRoot.addEventListener("touchstart", onAdvance, true);
    window.addEventListener("resize", onResize, true);
    window.addEventListener("orientationchange", onResize, true);
  }

  function onResize() {
    if (!started) return;
    positionForStep(currentStep, true);
  }

  function onAdvance(e) {
    if (e) e.stopPropagation();
    if (e && e.type === 'touchstart') e.preventDefault();
    if (clickLock) return;
    clickLock = true;
    setTimeout(function () {
      clickLock = false;
    }, 350);
    showStep(currentStep + 1);
  }

  function positionSpot(target) {
    var r = target.getBoundingClientRect();
    var pad = 8;
    spotEl.style.left = Math.max(0, r.left - pad) + "px";
    spotEl.style.top = Math.max(0, r.top - pad) + "px";
    spotEl.style.width = Math.max(r.width + pad * 2, 36) + "px";
    spotEl.style.height = Math.max(r.height + pad * 2, 36) + "px";
  }

  function positionCard(target, placement, isLast) {
    var step = STEPS[currentStep];
    cardEl.innerHTML = "";

    var title = document.createElement("div");
    title.className = "lj-ob-title";
    var dot = document.createElement("span");
    dot.className = "lj-ob-dot";
    title.appendChild(dot);
    title.appendChild(document.createTextNode(step.title));

    var desc = document.createElement("p");
    desc.className = "lj-ob-desc";
    desc.textContent = step.desc;

    var foot = document.createElement("div");
    foot.className = "lj-ob-foot";

    var stp = document.createElement("span");
    stp.className = "lj-ob-step";
    stp.textContent = currentStep + 1 + " / " + STEPS.length;

    var hint = document.createElement("span");
    hint.className = "lj-ob-hint";
    hint.textContent = isLast ? "点击任意位置完成" : "点击任意位置继续";

    foot.appendChild(stp);
    foot.appendChild(hint);

    arrowEl = document.createElement("div");
    arrowEl.className = "lj-ob-arrow " + (placement === "top" ? "down" : "up");

    cardEl.appendChild(title);
    cardEl.appendChild(desc);
    cardEl.appendChild(foot);
    cardEl.appendChild(arrowEl);

    cardEl.style.visibility = "hidden";
    cardEl.style.left = "0px";
    cardEl.style.top = "0px";

    var r = target.getBoundingClientRect();
    var cardW = cardEl.offsetWidth;
    var cardH = cardEl.offsetHeight;
    var gap = 16;
    var targetCx = r.left + r.width / 2;
    var left = Math.max(14, Math.min(targetCx - cardW / 2, window.innerWidth - cardW - 14));

    var top;
    if (placement === "top") {
      top = r.top - cardH - gap;
      if (top < 14) top = r.bottom + gap;
    } else {
      top = r.bottom + gap;
      if (top + cardH > window.innerHeight - 14) top = r.top - cardH - gap;
    }
    top = Math.max(14, Math.min(top, window.innerHeight - cardH - 14));

    cardEl.style.left = left + "px";
    cardEl.style.top = top + "px";
    cardEl.style.visibility = "visible";

    var arrowSize = 11;
    var aimX = Math.max(arrowSize + 6, Math.min(targetCx - left, cardW - arrowSize - 6));
    if (placement === "top" && top < r.top) {
      arrowEl.style.left = aimX - arrowSize + "px";
      arrowEl.style.top = cardH - 1 + "px";
      arrowEl.className = "lj-ob-arrow down";
    } else {
      arrowEl.style.left = aimX - arrowSize + "px";
      arrowEl.style.top = -12 + "px";
      arrowEl.className = "lj-ob-arrow up";
    }
  }

  function positionForStep(i, skipAnim) {
    var step = STEPS[i];
    if (!step) return;
    var target = step.find();
    if (!target) return;
    if (skipAnim) spotEl.style.transition = "none";
    positionSpot(target);
    positionCard(target, step.placement, i === STEPS.length - 1);
    if (skipAnim) {
      requestAnimationFrame(function () {
        if (spotEl) spotEl.style.transition = "";
      });
    }
  }

  function showStep(i) {
    if (tryShowTimer) {
      clearTimeout(tryShowTimer);
      tryShowTimer = null;
    }
    if (i >= STEPS.length) {
      finish();
      return;
    }
    currentStep = i;
    var step = STEPS[i];
    var tries = 0;
    function tryShow() {
      if (!started) return;
      var target = step.find();
      if (target) {
        cardEl.style.animation = "none";
        cardEl.offsetHeight;
        cardEl.style.animation = "";
        positionForStep(i, false);
        return;
      }
      if (++tries >= 11) {
        if (!desktopAlive()) {
          teardown();
          armObserver();
          return;
        }
        showStep(i + 1);
        return;
      }
      tryShowTimer = setTimeout(tryShow, 80);
    }
    tryShow();
  }

  // ---------- 监听桌面出现 ----------
  var observer = null;

  // ---------- 欢迎动画 ----------
  var welcomeDone = false;
  var welcomePlaying = false;

  function playWelcome(callback) {
    if (welcomePlaying) return;
    welcomePlaying = true;

    var root = document.createElement("div");
    root.className = "lj-welcome-root";

    var textEl = document.createElement("div");
    textEl.className = "lj-welcome-text";
    root.appendChild(textEl);
    (document.body || document.documentElement).appendChild(root);

    // 阶段文案与时长
    var phases = [
      { text: "你好", dur: 3000 },
      { text: "欢迎使用灵界 OS", dur: 3200 }
    ];
    var phase = 0;

    function nextPhase() {
      if (phase < phases.length) {
        var p = phases[phase];
        textEl.textContent = p.text;
        // 重置动画以触发重新播放
        textEl.style.animation = "none";
        textEl.offsetHeight; // 触发重排
        textEl.style.animation = "lj-welcome-in " + (p.dur / 1000) + "s ease-in-out forwards";
        setTimeout(nextPhase, p.dur);
        phase++;
        return;
      }
      // 欢迎动画结束，淡出黑底
      root.style.animation = "lj-welcome-bg .4s ease forwards";
      setTimeout(function () {
        if (root.parentNode) root.parentNode.removeChild(root);
        welcomeDone = true;
        welcomePlaying = false;
        if (callback) callback();
      }, 400);
    }

    nextPhase();
  }

  function startTour() {
    if (started || welcomePlaying || !desktopAlive()) return;
    if (welcomeDone) {
      startTourInner();
    } else {
      playWelcome(startTourInner);
    }
  }

  function startTourInner() {
    if (started || !desktopAlive()) {
      if (!started && !desktopAlive()) armObserver();
      return;
    }
    started = true;
    buildShell();
    requestAnimationFrame(function () {
      requestAnimationFrame(function () {
        showStep(0);
      });
    });
    aliveTimer = setInterval(function () {
      if (started && !desktopAlive()) {
        teardown();
        armObserver();
      }
    }, 600);
  }

  function armObserver() {
    if (observer) return;
    if (desktopAlive()) {
      startTour();
      return;
    }
    observer = new MutationObserver(function () {
      if (!started && !welcomePlaying && desktopAlive()) {
        if (observer) {
          observer.disconnect();
          observer = null;
        }
        // 立即播放欢迎动画，黑色遮罩在桌面渲染的同帧出现，避免桌面闪现
        startTour();
      }
    });
    observer.observe(document.body, { childList: true, subtree: true });
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", armObserver);
  } else {
    armObserver();
  }
})();

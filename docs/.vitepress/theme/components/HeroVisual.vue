<script setup lang="ts">
/**
 * 首页主视觉：科技风机器人在操作电脑。
 *
 * 实现要点：
 * 1. 纯 SVG 矢量绘制，所有颜色走 CSS 变量（类名统一下发），因此 4 套主题
 *    （light / dark / soft / cyber）自动跟随，不会像位图那样在浅色主题下发灰；
 * 2. 分层视差：舞台跟随 --kk-pointer-rx / --kk-pointer-ry（归一化到 -0.5 ~ 0.5）
 *    做 3D 倾斜，机器人与粒子分别乘以不同振幅，形成纵深；
 * 3. 动效只用 transform / opacity，交给合成层；prefers-reduced-motion 下全部关闭。
 *
 * 装饰性元素，对辅助技术整体隐藏。
 */

/** 屏幕里的「代码行」：宽度与语气交替，避免看起来像色块 */
const CODE_LINES = [
  { id: 'line-1', y: 204, width: 92, tone: 'primary' },
  { id: 'line-2', y: 217, width: 58, tone: 'muted' },
  { id: 'line-3', y: 230, width: 116, tone: 'soft' },
  { id: 'line-4', y: 243, width: 74, tone: 'primary' },
  { id: 'line-5', y: 256, width: 104, tone: 'muted' },
  { id: 'line-6', y: 269, width: 52, tone: 'accent' },
  { id: 'line-7', y: 282, width: 88, tone: 'soft' },
]

/** 键盘按键：按梯形透视逐行外扩，宽度由行宽反推，保证贴边不溢出 */
const KEY_ROWS = 3
const KEY_COLS = 8
const KEYS = Array.from({ length: KEY_ROWS * KEY_COLS }, (_, index) => {
  const row = Math.floor(index / KEY_COLS)
  const col = index % KEY_COLS
  const left = 272 - row * 9
  const width = 176 + row * 18
  const gap = 5
  const keyWidth = (width - gap * (KEY_COLS - 1)) / KEY_COLS

  return {
    id: `key-${row}-${col}`,
    x: Number((left + col * (keyWidth + gap)).toFixed(2)),
    y: 305 + row * 10,
    width: Number(keyWidth.toFixed(2)),
  }
})

/** 漂浮的数据颗粒 */
const PARTICLES = [
  { id: 'p1', cx: 118, cy: 92, r: 4, delay: 0 },
  { id: 'p2', cx: 448, cy: 128, r: 5, delay: 1.4 },
  { id: 'p3', cx: 84, cy: 268, r: 3, delay: 2.6 },
  { id: 'p4', cx: 466, cy: 288, r: 4, delay: 3.8 },
  { id: 'p5', cx: 396, cy: 84, r: 3, delay: 5 },
]
</script>

<template>
  <div class="kk-visual" aria-hidden="true">
    <div class="kk-visual__stage">
      <svg class="kk-visual__svg" viewBox="0 0 520 420" role="img">
        <defs>
          <!-- 屏幕与面罩的裁剪区，动画元素都写在裁剪里 -->
          <clipPath id="kk-visual-screen-clip">
            <rect x="292" y="178" width="148" height="112" rx="6" />
          </clipPath>
          <clipPath id="kk-visual-visor-clip">
            <rect x="176" y="142" width="50" height="28" rx="12" />
          </clipPath>
          <linearGradient id="kk-visual-visor-gradient" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0" class="kk-visual__visor-from" />
            <stop offset="1" class="kk-visual__visor-to" />
          </linearGradient>
          <radialGradient id="kk-visual-glow-gradient" cx="0.5" cy="0.5" r="0.5">
            <stop offset="0" class="kk-visual__glow-from" />
            <stop offset="1" class="kk-visual__glow-to" />
          </radialGradient>
        </defs>

        <!-- 背景光晕与全息环 -->
        <g class="kk-visual__backdrop">
          <ellipse
            class="kk-visual__glow"
            cx="330"
            cy="248"
            rx="210"
            ry="150"
            fill="url(#kk-visual-glow-gradient)"
          />
          <circle
            class="kk-visual__ring kk-visual__ring--outer"
            cx="330"
            cy="246"
            r="176"
          />
          <circle
            class="kk-visual__ring kk-visual__ring--inner"
            cx="330"
            cy="246"
            r="134"
          />
        </g>

        <!-- 漂浮颗粒 -->
        <g class="kk-visual__particles">
          <circle
            v-for="particle in PARTICLES"
            :key="particle.id"
            class="kk-visual__particle"
            :cx="particle.cx"
            :cy="particle.cy"
            :r="particle.r"
            :style="{ animationDelay: `${particle.delay}s` }"
          />
        </g>

        <!-- 工作台 -->
        <g class="kk-visual__desk">
          <ellipse class="kk-visual__desk-glow" cx="300" cy="352" rx="196" ry="18" />
          <rect
            class="kk-visual__desk-top"
            x="52"
            y="336"
            width="416"
            height="13"
            rx="6.5"
          />
        </g>

        <!-- 电脑：屏幕（左后方）＋键盘（右前方） -->
        <g class="kk-visual__computer">
          <ellipse class="kk-visual__screen-aura" cx="366" cy="238" rx="118" ry="96" />

          <rect
            class="kk-visual__lid"
            x="282"
            y="168"
            width="168"
            height="136"
            rx="10"
          />
          <rect
            class="kk-visual__screen"
            x="292"
            y="178"
            width="148"
            height="112"
            rx="6"
          />

          <g clip-path="url(#kk-visual-screen-clip)">
            <g class="kk-visual__code">
              <rect
                class="kk-visual__code-bar"
                x="292"
                y="186"
                width="148"
                height="9"
              />
              <circle class="kk-visual__code-dot" cx="300" cy="190.5" r="2.2" />
              <circle class="kk-visual__code-dot" cx="308" cy="190.5" r="2.2" />
              <circle class="kk-visual__code-dot" cx="316" cy="190.5" r="2.2" />
              <rect
                v-for="line in CODE_LINES"
                :key="line.id"
                class="kk-visual__code-line"
                :class="`kk-visual__code-line--${line.tone}`"
                x="302"
                :y="line.y"
                :width="line.width"
                height="5"
                rx="2.5"
              />
              <rect
                class="kk-visual__caret"
                x="302"
                y="294"
                width="10"
                height="6"
                rx="2"
              />
            </g>
            <rect class="kk-visual__scanline" x="292" y="178" width="148" height="16" />
          </g>

          <g class="kk-visual__keyboard">
            <path class="kk-visual__keyboard-base" d="M268 300H452L472 336H248Z" />
            <rect
              v-for="key in KEYS"
              :key="key.id"
              class="kk-visual__key"
              :x="key.x"
              :y="key.y"
              :width="key.width"
              height="6.8"
              rx="2"
            />
          </g>
        </g>

        <!-- 机器人：侧身面向屏幕，手臂前伸操作键盘 -->
        <g class="kk-visual__robot">
          <g class="kk-visual__float">
            <ellipse
              class="kk-visual__robot-shadow"
              cx="196"
              cy="344"
              rx="70"
              ry="10"
            />

            <!-- 后侧手臂先画，形成前后关系 -->
            <path
              class="kk-visual__arm kk-visual__arm--back"
              d="M226 236C246 250 260 274 272 296"
            />

            <rect
              class="kk-visual__neck"
              x="186"
              y="190"
              width="18"
              height="20"
              rx="7"
            />
            <rect
              class="kk-visual__torso"
              x="152"
              y="206"
              width="78"
              height="106"
              rx="26"
            />
            <circle class="kk-visual__core-ring" cx="190" cy="248" r="19" />
            <circle class="kk-visual__core" cx="190" cy="248" r="12" />
            <circle class="kk-visual__core-dot" cx="190" cy="248" r="5" />

            <g class="kk-visual__head">
              <path class="kk-visual__antenna" d="M168 128C166 112 172 102 184 98" />
              <circle class="kk-visual__antenna-tip" cx="185" cy="97" r="5" />
              <circle class="kk-visual__antenna-wave" cx="185" cy="97" r="11" />

              <rect
                class="kk-visual__head-box"
                x="150"
                y="126"
                width="86"
                height="66"
                rx="20"
              />
              <rect
                class="kk-visual__visor"
                x="176"
                y="142"
                width="50"
                height="28"
                rx="12"
                fill="url(#kk-visual-visor-gradient)"
              />
              <g clip-path="url(#kk-visual-visor-clip)">
                <rect
                  class="kk-visual__visor-scan"
                  x="176"
                  y="142"
                  width="50"
                  height="7"
                />
              </g>
              <path class="kk-visual__vent" d="M160 150h10M160 160h10M160 170h10" />
              <circle class="kk-visual__ear" cx="152" cy="162" r="8" />
            </g>

            <circle class="kk-visual__shoulder" cx="232" cy="224" r="14" />
            <path class="kk-visual__arm" d="M236 230C264 240 280 264 296 288" />
            <g class="kk-visual__hand">
              <rect
                class="kk-visual__hand-box"
                x="290"
                y="282"
                width="20"
                height="14"
                rx="6"
              />
              <path class="kk-visual__finger" d="M296 296v6M304 296v6" />
            </g>
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>

<style>
/* ============================================================
   首页主视觉：科技风机器人操作电脑
   颜色全部走主题变量，4 套主题自动适配
   ============================================================ */
.kk-visual {
  display: grid;
  place-items: center;
  width: 100%;
  min-height: 340px;
  perspective: 1100px;
}

.kk-visual__stage {
  width: 100%;
  max-width: 460px;
  transform-style: preserve-3d;
  transform: rotateX(calc(var(--kk-pointer-ry, 0) * -7deg))
    rotateY(calc(var(--kk-pointer-rx, 0) * 13deg));
  transition: transform 0.3s var(--kk-ease-out, ease-out);
}

.kk-visual__svg {
  display: block;
  width: 100%;
  height: auto;
  overflow: visible;
}

/* ---------- 图层：不同振幅形成纵深 ---------- */
.kk-visual__backdrop,
.kk-visual__particles {
  transform: translate3d(
    calc(var(--kk-pointer-rx, 0) * -22px),
    calc(var(--kk-pointer-ry, 0) * -16px),
    0
  );
  transition: transform 0.45s var(--kk-ease-out, ease-out);
}

.kk-visual__computer {
  transform: translate3d(
    calc(var(--kk-pointer-rx, 0) * 8px),
    calc(var(--kk-pointer-ry, 0) * 6px),
    0
  );
  transition: transform 0.45s var(--kk-ease-out, ease-out);
}

.kk-visual__robot {
  transform: translate3d(
    calc(var(--kk-pointer-rx, 0) * 18px),
    calc(var(--kk-pointer-ry, 0) * 12px),
    0
  );
  transition: transform 0.45s var(--kk-ease-out, ease-out);
}

/* ---------- 背景光与全息环 ---------- */
.kk-visual__glow-from {
  stop-color: var(--kk-color-primary);
  stop-opacity: 0.22;
}

.kk-visual__glow-to {
  stop-color: var(--kk-color-primary);
  stop-opacity: 0;
}

.kk-visual__glow {
  animation: kk-visual-breathe 7s var(--kk-ease-in-out, ease-in-out) infinite;
}

.kk-visual__ring {
  fill: none;
  stroke: var(--kk-color-primary);
  transform-box: view-box;
  transform-origin: 330px 246px;
}

.kk-visual__ring--outer {
  stroke-width: 1.4;
  stroke-dasharray: 10 14;
  opacity: 0.32;
  animation: kk-visual-orbit 26s linear infinite;
}

.kk-visual__ring--inner {
  stroke-width: 1.2;
  stroke-dasharray: 3 9;
  opacity: 0.22;
  animation: kk-visual-orbit 34s linear infinite reverse;
}

/* ---------- 颗粒 ---------- */
.kk-visual__particle {
  fill: var(--kk-color-primary);
  opacity: 0.6;
  animation: kk-visual-drift 8s var(--kk-ease-in-out, ease-in-out) infinite;
}

/* ---------- 工作台 ---------- */
.kk-visual__desk-glow {
  fill: var(--kk-color-primary);
  opacity: 0.16;
  filter: blur(6px);
}

.kk-visual__desk-top {
  fill: var(--kk-bg-subtle);
  stroke: var(--kk-border-color);
  stroke-width: 1.6;
}

/* ---------- 电脑 ---------- */
.kk-visual__screen-aura {
  fill: var(--kk-color-primary);
  opacity: 0.14;
  filter: blur(18px);
  animation: kk-visual-breathe 5s var(--kk-ease-in-out, ease-in-out) infinite;
}

.kk-visual__lid {
  fill: var(--kk-bg-container);
  stroke: var(--kk-border-color-hover);
  stroke-width: 2.4;
}

.kk-visual__screen {
  fill: var(--kk-bg-page);
  stroke: var(--kk-border-color);
  stroke-width: 1.4;
}

.kk-visual__code-bar {
  fill: var(--kk-color-primary);
  opacity: 0.1;
}

.kk-visual__code-dot {
  fill: var(--kk-color-primary);
  opacity: 0.5;
}

.kk-visual__code {
  animation: kk-visual-code 9s var(--kk-ease-in-out, ease-in-out) infinite;
}

.kk-visual__code-line {
  opacity: 0.75;
}

.kk-visual__code-line--primary {
  fill: var(--kk-color-primary);
  opacity: 0.85;
}

.kk-visual__code-line--soft {
  fill: var(--kk-color-primary);
  opacity: 0.42;
}

.kk-visual__code-line--muted {
  fill: var(--kk-text-tertiary);
  opacity: 0.6;
}

.kk-visual__code-line--accent {
  fill: var(--kk-color-info);
  opacity: 0.85;
}

.kk-visual__caret {
  fill: var(--kk-color-primary);
  animation: kk-visual-blink 1.1s steps(2, jump-none) infinite;
}

.kk-visual__scanline {
  fill: var(--kk-color-primary);
  opacity: 0.14;
  animation: kk-visual-scan 5.5s var(--kk-ease-in-out, ease-in-out) infinite;
}

.kk-visual__keyboard-base {
  fill: var(--kk-bg-elevated);
  stroke: var(--kk-border-color-hover);
  stroke-width: 2.2;
}

.kk-visual__key {
  fill: var(--kk-bg-subtle);
  stroke: var(--kk-border-color);
  stroke-width: 1;
}

/* ---------- 机器人 ---------- */
.kk-visual__robot-shadow {
  fill: var(--kk-color-primary);
  opacity: 0.18;
  filter: blur(5px);
  transform-box: fill-box;
  transform-origin: center;
  animation: kk-visual-shadow 6s var(--kk-ease-in-out, ease-in-out) infinite;
}

.kk-visual__head-box,
.kk-visual__torso,
.kk-visual__shoulder {
  fill: var(--kk-bg-container);
  stroke: var(--kk-color-primary);
  stroke-width: 3;
}

.kk-visual__neck {
  fill: var(--kk-bg-subtle);
  stroke: var(--kk-color-primary);
  stroke-width: 2.4;
}

.kk-visual__ear {
  fill: var(--kk-bg-subtle);
  stroke: var(--kk-color-primary);
  stroke-width: 2.4;
}

.kk-visual__vent {
  fill: none;
  stroke: var(--kk-border-color-hover);
  stroke-width: 2.4;
  stroke-linecap: round;
}

.kk-visual__antenna {
  fill: none;
  stroke: var(--kk-color-primary);
  stroke-width: 2.6;
  stroke-linecap: round;
}

.kk-visual__antenna-tip {
  fill: var(--kk-color-primary-hover);
  animation: kk-visual-blink 1.6s var(--kk-ease-in-out, ease-in-out) infinite;
}

.kk-visual__antenna-wave {
  fill: none;
  stroke: var(--kk-color-primary);
  stroke-width: 1.4;
  transform-box: fill-box;
  transform-origin: center;
  animation: kk-visual-wave 2.6s var(--kk-ease-out, ease-out) infinite;
}

.kk-visual__visor-from {
  stop-color: var(--kk-color-primary);
}

.kk-visual__visor-to {
  stop-color: var(--kk-color-primary-hover);
}

.kk-visual__visor-scan {
  fill: var(--kk-text-inverse);
  opacity: 0.45;
  animation: kk-visual-visor 3.4s var(--kk-ease-in-out, ease-in-out) infinite;
}

.kk-visual__core-ring {
  fill: none;
  stroke: var(--kk-color-primary);
  stroke-width: 1.4;
  stroke-dasharray: 4 6;
  opacity: 0.5;
  transform-box: fill-box;
  transform-origin: center;
  animation: kk-visual-orbit 12s linear infinite;
}

.kk-visual__core {
  fill: var(--kk-color-primary);
  opacity: 0.18;
}

.kk-visual__core-dot {
  fill: var(--kk-color-primary);
  animation: kk-visual-core 2.4s var(--kk-ease-in-out, ease-in-out) infinite;
}

.kk-visual__arm {
  fill: none;
  stroke: var(--kk-color-primary);
  stroke-width: 13;
  stroke-linecap: round;
}

.kk-visual__arm--back {
  stroke-width: 11;
  opacity: 0.4;
}

.kk-visual__hand-box {
  fill: var(--kk-bg-container);
  stroke: var(--kk-color-primary);
  stroke-width: 2.6;
}

.kk-visual__finger {
  fill: none;
  stroke: var(--kk-color-primary);
  stroke-width: 2.4;
  stroke-linecap: round;
}

/* 手指敲击：只做极小的位移，避免抢注意力 */
.kk-visual__hand {
  transform-box: fill-box;
  transform-origin: center;
  animation: kk-visual-type 0.42s var(--kk-ease-in-out, ease-in-out) infinite alternate;
}

.kk-visual__head {
  transform-box: fill-box;
  transform-origin: 50% 100%;
  animation: kk-visual-head 7s var(--kk-ease-in-out, ease-in-out) infinite;
}

/* 机器人整体悬浮：包一层 .kk-visual__float，避免与视差用的 transform 互相覆盖
   （CSS 动画的 transform 会盖掉同元素上的普通声明） */
.kk-visual__float {
  transform-box: fill-box;
  transform-origin: center;
  animation: kk-visual-hover 6.5s var(--kk-ease-in-out, ease-in-out) infinite;
}

/* ---------- 关键帧 ---------- */
@keyframes kk-visual-breathe {
  0%,
  100% {
    opacity: 0.55;
  }

  50% {
    opacity: 1;
  }
}

@keyframes kk-visual-orbit {
  to {
    transform: rotate(360deg);
  }
}

@keyframes kk-visual-drift {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
    opacity: 0.35;
  }

  50% {
    transform: translate3d(0, -14px, 0);
    opacity: 0.85;
  }
}

@keyframes kk-visual-code {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(0, -5px, 0);
  }
}

@keyframes kk-visual-blink {
  0%,
  45% {
    opacity: 1;
  }

  55%,
  100% {
    opacity: 0.15;
  }
}

@keyframes kk-visual-scan {
  0% {
    transform: translate3d(0, 0, 0);
    opacity: 0;
  }

  15% {
    opacity: 0.2;
  }

  85% {
    opacity: 0.2;
  }

  100% {
    transform: translate3d(0, 104px, 0);
    opacity: 0;
  }
}

@keyframes kk-visual-visor {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(0, 21px, 0);
  }
}

@keyframes kk-visual-wave {
  0% {
    transform: scale(0.6);
    opacity: 0.8;
  }

  100% {
    transform: scale(1.7);
    opacity: 0;
  }
}

@keyframes kk-visual-core {
  0%,
  100% {
    opacity: 1;
  }

  50% {
    opacity: 0.45;
  }
}

@keyframes kk-visual-type {
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    transform: translate3d(0, 3px, 0);
  }
}

@keyframes kk-visual-head {
  0%,
  100% {
    transform: rotate(-1.6deg);
  }

  50% {
    transform: rotate(2.2deg);
  }
}

@keyframes kk-visual-hover {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }

  50% {
    transform: translate3d(0, -7px, 0);
  }
}

@keyframes kk-visual-shadow {
  0%,
  100% {
    transform: scale(1);
    opacity: 0.18;
  }

  50% {
    transform: scale(0.9);
    opacity: 0.1;
  }
}

/* ---------- 减少动效 ---------- */
@media (prefers-reduced-motion: reduce) {
  .kk-visual__stage,
  .kk-visual__backdrop,
  .kk-visual__particles,
  .kk-visual__computer,
  .kk-visual__robot {
    transform: none;
    transition: none;
  }

  .kk-visual__glow,
  .kk-visual__ring,
  .kk-visual__particle,
  .kk-visual__screen-aura,
  .kk-visual__code,
  .kk-visual__caret,
  .kk-visual__scanline,
  .kk-visual__antenna-tip,
  .kk-visual__antenna-wave,
  .kk-visual__visor-scan,
  .kk-visual__core-ring,
  .kk-visual__core-dot,
  .kk-visual__hand,
  .kk-visual__head,
  .kk-visual__float,
  .kk-visual__robot-shadow {
    animation: none;
  }
}
</style>

<script setup lang="ts">
/**
 * 首页 3D 视觉：柔光几何立方体 + 轨道环 + 漂浮光球。
 * 纯 CSS 3D（transform-style: preserve-3d），跟随鼠标视差倾斜，
 * 倾斜角度由父级写入的 --kk-tilt-x / --kk-tilt-y 驱动。
 * 装饰性元素，对辅助技术隐藏。
 */
const FACES = ['front', 'back', 'right', 'left', 'top', 'bottom']
</script>

<template>
  <div class="kk-visual" aria-hidden="true">
    <div class="kk-visual__stage">
      <div class="kk-visual__aura" />
      <div class="kk-visual__cube">
        <span
          v-for="face in FACES"
          :key="face"
          class="kk-visual__face"
          :class="`kk-visual__face--${face}`"
        />
      </div>
      <div class="kk-visual__ring kk-visual__ring--outer" />
      <div class="kk-visual__ring kk-visual__ring--inner" />
      <span class="kk-visual__orb kk-visual__orb--1" />
      <span class="kk-visual__orb kk-visual__orb--2" />
      <span class="kk-visual__orb kk-visual__orb--3" />
    </div>
  </div>
</template>

<style>
.kk-visual {
  --kk-visual-size: 168px;
  display: grid;
  place-items: center;
  min-height: 340px;
}

.kk-visual__stage {
  position: relative;
  width: var(--kk-visual-size);
  height: var(--kk-visual-size);
  perspective: 900px;
  transform-style: preserve-3d;
  transform: rotateX(var(--kk-tilt-y, 0deg)) rotateY(var(--kk-tilt-x, 0deg));
  transition: transform 0.25s var(--kk-ease-out, ease-out);
}

/* 立方体背后的柔光 */
.kk-visual__aura {
  position: absolute;
  inset: -46%;
  border-radius: 50%;
  background: radial-gradient(
    circle at 50% 50%,
    var(--kk-color-primary-soft) 0%,
    transparent 68%
  );
  filter: blur(6px);
  animation: kk-visual-breathe 6s var(--kk-ease-out, ease-in-out) infinite;
}

.kk-visual__cube {
  position: absolute;
  inset: 0;
  transform-style: preserve-3d;
  animation: kk-visual-spin 22s linear infinite;
}

.kk-visual__face {
  position: absolute;
  inset: 0;
  border: 1px solid var(--kk-color-primary);
  border-radius: 18px;
  background: linear-gradient(
    135deg,
    color-mix(in srgb, var(--kk-color-primary) 18%, transparent),
    color-mix(in srgb, var(--kk-color-primary-hover) 6%, transparent)
  );
  box-shadow: inset 0 0 24px
    color-mix(in srgb, var(--kk-color-primary) 22%, transparent);
  opacity: 0.9;
}

.kk-visual__face--front {
  transform: translateZ(84px);
}
.kk-visual__face--back {
  transform: rotateY(180deg) translateZ(84px);
}
.kk-visual__face--right {
  transform: rotateY(90deg) translateZ(84px);
}
.kk-visual__face--left {
  transform: rotateY(-90deg) translateZ(84px);
}
.kk-visual__face--top {
  transform: rotateX(90deg) translateZ(84px);
}
.kk-visual__face--bottom {
  transform: rotateX(-90deg) translateZ(84px);
}

/* 轨道环：两圈不同倾角的椭圆，反向缓慢旋转 */
.kk-visual__ring {
  position: absolute;
  inset: -18%;
  border-radius: 50%;
  border: 1px solid color-mix(in srgb, var(--kk-color-primary) 45%, transparent);
  transform-style: preserve-3d;
}

.kk-visual__ring--outer {
  animation: kk-visual-orbit-a 14s linear infinite;
}

.kk-visual__ring--inner {
  inset: -6%;
  border-style: dashed;
  border-color: color-mix(in srgb, var(--kk-color-primary) 30%, transparent);
  animation: kk-visual-orbit-b 18s linear infinite;
}

.kk-visual__orb {
  position: absolute;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background: var(--kk-color-primary);
  box-shadow: 0 0 14px color-mix(in srgb, var(--kk-color-primary) 70%, transparent);
}

.kk-visual__orb--1 {
  top: 4%;
  left: 78%;
  animation: kk-visual-float 5s ease-in-out infinite;
}

.kk-visual__orb--2 {
  top: 74%;
  left: 2%;
  width: 9px;
  height: 9px;
  animation: kk-visual-float 7s ease-in-out infinite reverse;
}

.kk-visual__orb--3 {
  top: 40%;
  left: 92%;
  width: 7px;
  height: 7px;
  animation: kk-visual-float 9s ease-in-out infinite;
}

@keyframes kk-visual-spin {
  0% {
    transform: rotateX(-18deg) rotateY(0deg);
  }
  100% {
    transform: rotateX(-18deg) rotateY(360deg);
  }
}

@keyframes kk-visual-orbit-a {
  0% {
    transform: rotateX(72deg) rotateZ(0deg);
  }
  100% {
    transform: rotateX(72deg) rotateZ(360deg);
  }
}

@keyframes kk-visual-orbit-b {
  0% {
    transform: rotateX(58deg) rotateY(12deg) rotateZ(360deg);
  }
  100% {
    transform: rotateX(58deg) rotateY(12deg) rotateZ(0deg);
  }
}

@keyframes kk-visual-float {
  0%,
  100% {
    transform: translate3d(0, 0, 0);
  }
  50% {
    transform: translate3d(0, -12px, 0);
  }
}

@keyframes kk-visual-breathe {
  0%,
  100% {
    opacity: 0.55;
    transform: scale(1);
  }
  50% {
    opacity: 0.9;
    transform: scale(1.06);
  }
}

@media (prefers-reduced-motion: reduce) {
  .kk-visual__cube,
  .kk-visual__ring,
  .kk-visual__orb,
  .kk-visual__aura {
    animation: none;
  }

  .kk-visual__stage {
    transition: none;
  }
}
</style>

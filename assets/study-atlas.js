// Standalone teaching illustrations: no external images, tracking, or framework.
(() => {
  'use strict';
  const names = ['桌面', '桌腿', '抽屉'];
  const $ = id => document.getElementById(id);
  const radio = name => document.querySelector(`input[name="${name}"]:checked`).value;
  const clamp = x => Math.max(0, Math.min(1, x));
  // A deterministic, non-periodic wood patch. Each surface reads this same function.
  function wood(u, v) {
    const bend = 0.028 * Math.sin(v * 17) + 0.012 * Math.sin(v * 39 + 0.7);
    const grain = Math.pow((Math.sin((u + bend) * 73 + Math.sin(v * 11) * 0.8) + 1) / 2, 10);
    const fine = Math.sin(u * 287 + v * 9) * 0.018;
    const shade = 0.55 + 0.17 * u + 0.07 * Math.sin(v * 5) - grain * 0.19 + fine;
    return [Math.round(222 * shade + 25), Math.round(145 * shade + 16), Math.round(80 * shade + 12)];
  }
  function scratch(u, v) {
    const line = Math.abs(v - (0.31 + u * 0.37));
    return u > 0.2 && u < 0.8 && line < 0.018 ? 1 : 0;
  }
  function drawWood(canvas, options = {}) {
    const ctx = canvas.getContext('2d');
    const { width: w, height: h } = canvas;
    const frame = ctx.createImageData(w, h);
    for (let y = 0; y < h; y++) {
      for (let x = 0; x < w; x++) {
        const u = x / (w - 1), v = 1 - y / (h - 1);
        // Keep sampling inside this patch; real atlases also need mip-safe padding.
        const readU = clamp(u + (options.warp || 0) * Math.sin(v * 13) * Math.sin(u * Math.PI));
        let c = wood(readU, v);
        const mark = (options.mark || 0) * scratch(u, v);
        c = c.map((value, i) => Math.round(value * (1 - mark) + [246, 217, 154][i] * mark));
        const k = (y * w + x) * 4;
        frame.data.set([...c, 255], k);
      }
    }
    ctx.putImageData(frame, 0, 0);
    return ctx;
  }
  function renderSampling() {
    const u = Number($('sample-u').value), v = Number($('sample-v').value);
    const target = Number(radio('sample-part'));
    const ctx = drawWood($('sample-texture'));
    const x = u * 319, y = (1 - v) * 319;
    ctx.lineWidth = 5; ctx.strokeStyle = '#102124';
    ctx.beginPath(); ctx.arc(x, y, 10, 0, Math.PI * 2); ctx.stroke();
    ctx.lineWidth = 2; ctx.strokeStyle = '#fff';
    ctx.beginPath(); ctx.arc(x, y, 10, 0, Math.PI * 2); ctx.moveTo(x - 17, y); ctx.lineTo(x + 17, y); ctx.moveTo(x, y - 17); ctx.lineTo(x, y + 17); ctx.stroke();
    $('sample-u-value').value = u.toFixed(2); $('sample-v-value').value = v.toFixed(2);
    document.querySelectorAll('[data-sample-part]').forEach((panel, i) => {
      panel.classList.toggle('current-part', i === target);
      panel.querySelector('.sample-chip').style.backgroundColor = `rgb(${wood(u, v).join(',')})`;
      panel.querySelector('.sample-coordinate').textContent = `UV (${u.toFixed(2)}, ${v.toFixed(2)})`;
    });
    $('sample-status').textContent = `当前绘制${names[target]}：用 UV (${u.toFixed(2)}, ${v.toFixed(2)}) 读取木纹，把颜色用于${names[target]}。另两个部位若读取同一坐标，也会得到相同颜色；UV 不包含部位身份。`;
  }
  function renderEffects() {
    const mode = radio('effect-mode'), target = Number(radio('effect-part'));
    const amount = Number($('effect-strength').value) / 100;
    $('effect-strength-value').value = `${Math.round(amount * 100)}%`;
    const shared = mode === 'shared';
    drawWood($('effect-source'), { mark: shared ? amount : 0 });
    $('source-status').textContent = shared ? '共享数据被写入划痕，所有复用者都会读到。' : '基础木纹保持原样；改变的是采样方式或独立的效果数据。';
    document.querySelectorAll('[data-effect-part]').forEach((panel, i) => {
      const affected = shared || mode === 'uv' || i === target;
      panel.classList.toggle('target-part', i === target);
      drawWood(panel.querySelector('canvas'), {
        warp: affected && (mode === 'uv' || mode === 'part') ? amount * 0.11 : 0,
        mark: affected && (shared || mode === 'mask') ? amount : 0
      });
      panel.querySelector('span').textContent = amount === 0 ? '原始木纹' : affected ? (shared || mode === 'mask' ? '出现划痕' : '采样位置扭曲') : '保持原样';
    });
    const explanations = {
      shared: `虽然希望只改${names[target]}，但划痕写进了共享纹理。三个部位读取同一份数据，所以都会变化。`,
      uv: '规则只看 UV，三个部位的 UV 完全重叠，所以都发生同样的扭曲。选择目标没有提供给这个规则。',
      part: `额外的部位标记选中了${names[target]}，只有它的 UV 参与扰动。另两个部位保持原样，基础纹理没有被修改。`,
      mask: `划痕保存在${names[target]}独有的遮罩区域，绘制时再叠加。基础木纹继续共享，差异有独立的存储位置。`
    };
    $('effect-status').textContent = amount === 0 ? '效果强度为 0，三个部位都显示原始木纹。提高强度后，可以观察当前模式的作用范围。' : explanations[mode];
  }
  document.querySelectorAll('input[name="sample-part"], #sample-u, #sample-v').forEach(input => input.addEventListener('input', renderSampling));
  document.querySelectorAll('input[name="effect-mode"], input[name="effect-part"], #effect-strength').forEach(input => input.addEventListener('input', renderEffects));
  $('effect-reset').addEventListener('click', () => {
    document.querySelector('input[name="effect-mode"][value="shared"]').checked = true;
    document.querySelector('input[name="effect-part"][value="0"]').checked = true;
    $('effect-strength').value = '70';
    renderEffects();
  });
  renderSampling();
  renderEffects();
  document.documentElement.classList.add('atlas-interactive');
})();

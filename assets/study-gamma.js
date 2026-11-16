// Exact sRGB transfer functions for the SDR, neutral-gray teaching examples.
(() => {
  const decode = value => value <= 0.04045 ? value / 12.92 : ((value + 0.055) / 1.055) ** 2.4;
  const encode = value => value <= 0.0031308 ? value * 12.92 : 1.055 * value ** (1 / 2.4) - 0.055;
  const slider = document.getElementById('gamma-light');
  const gray = value => `rgb(${value * 100}% ${value * 100}% ${value * 100}%)`;
  function render() {
    const linear = Number(slider.value) / 100;
    const encoded = encode(linear);
    document.getElementById('gamma-light-label').textContent = `${slider.value}%`;
    document.getElementById('gamma-direct').style.backgroundColor = gray(linear);
    document.getElementById('gamma-correct').style.backgroundColor = gray(encoded);
    document.getElementById('gamma-direct-value').textContent = `sRGB ${linear.toFixed(3)} → 光强 ${(decode(linear) * 100).toFixed(1)}%`;
    document.getElementById('gamma-correct-value').textContent = `sRGB ${encoded.toFixed(3)} → 光强 ${(linear * 100).toFixed(1)}%`;
    document.getElementById('gamma-demo-status').textContent = `目标是 ${slider.value}% 的相对白色光强。直接把线性数值当 sRGB 显示，得到约 ${(decode(linear) * 100).toFixed(1)}%；先编码再显示，得到 ${slider.value}%。`;
  }
  slider.addEventListener('input', render);
  document.getElementById('gamma-reset').addEventListener('click', () => { slider.value = '50'; render(); });
  render();
  const video = document.getElementById('gamma-video');
  let pendingTime = null;
  video.addEventListener('loadedmetadata', () => {
    if (pendingTime !== null) { video.currentTime = pendingTime; pendingTime = null; }
  });
  document.querySelectorAll('[data-video-time]').forEach(button => {
    button.addEventListener('click', () => {
      const time = Number(button.dataset.videoTime);
      if (video.readyState >= 1) video.currentTime = time;
      else { pendingTime = time; video.load(); }
      video.play().catch(() => {
        document.getElementById('gamma-video-status').textContent = '请使用视频下方的播放键开始；也可以直接打开 MP4 或阅读文字版。';
      });
    });
  });
  video.addEventListener('error', () => {
    document.getElementById('gamma-video-status').textContent = '视频暂时无法播放，可尝试直接打开 MP4，或阅读下方文字版。';
  });
})();

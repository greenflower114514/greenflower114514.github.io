(() => {
  const slider = document.getElementById('vat-frame');
  const frameLabel = document.getElementById('vat-frame-label');
  const row = document.getElementById('vat-row');
  const line = document.getElementById('vat-line');
  const points = document.getElementById('vat-points');
  function drawFrame() {
    const frame = Number(slider.value);
    frameLabel.textContent = `第 ${frame + 1} 帧`;
    row.style.top = `${frame * 12.5}%`;
    const vertices = Array.from({ length:8 }, (_, i) => ({
      x: i / 7 * 2 - 1,
      y: Math.sin(i * Math.PI / 3 + frame * Math.PI / 4) * 0.6,
      z: 0
    }));
    const screen = vertices.map((v, i) => [30 + i * 260 / 7, 120 - v.y * 90]);
    line.setAttribute('d', screen.map(([x,y],i) => `${i ? 'L' : 'M'}${x.toFixed(2)} ${y.toFixed(2)}`).join(' '));
    points.replaceChildren(...screen.map(([x,y]) => {
      const circle = document.createElementNS('http://www.w3.org/2000/svg','circle');
      circle.setAttribute('cx', x);
      circle.setAttribute('cy', y);
      circle.setAttribute('r', 4);
      return circle;
    }));
    document.getElementById('vat-mesh-title').textContent = `第${frame + 1}帧，8个顶点组成的波浪线`;
    const v = vertices[3];
    document.getElementById('vat-sample').textContent = `例如顶点 4：读第 ${frame + 1} 行、第 4 列，解码后位置为 (${v.x.toFixed(2)}, ${v.y.toFixed(2)}, 0)。`;
  }
  slider.addEventListener('input', drawFrame);
  drawFrame();

  document.querySelectorAll('.load-gif').forEach(button => {
    const slot = button.parentElement;
    let image;
    const stop = document.createElement('button');
    stop.type = 'button';
    stop.className = 'unload-gif';
    stop.textContent = '停止并收起动图';
    stop.hidden = true;
    const status = document.createElement('p');
    status.className = 'gif-status';
    status.setAttribute('role','status');
    slot.append(status, stop);
    function unload() {
      if (image) { image.removeAttribute('src'); image.remove(); image = null; }
      status.textContent = '';
      button.hidden = false;
      stop.hidden = true;
    }
    button.addEventListener('click', () => {
      image = document.createElement('img');
      image.alt = button.dataset.alt;
      image.referrerPolicy = 'no-referrer';
      image.onload = () => { status.textContent = ''; };
      image.onerror = () => {
        unload();
        status.textContent = '动图暂时无法加载，可以使用下方的原作者链接查看。';
      };
      status.textContent = '正在加载原作者动图…';
      button.hidden = true;
      stop.hidden = false;
      slot.prepend(image);
      image.src = button.dataset.gif;
    });
    stop.addEventListener('click', () => { unload(); button.focus(); });
    button.closest('details').addEventListener('toggle', event => {
      if (!event.currentTarget.open) unload();
    });
  });
})();

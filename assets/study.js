// Article text stays in study.html so notes can also be read without JavaScript.
(() => {
  let category = 'all';
  const search = document.getElementById('note-search');
  const title = document.getElementById('empty-title');
  const description = document.getElementById('empty-description');
  const empty = document.querySelector('.empty-state');
  const notes = [...document.querySelectorAll('.study-note')];
  const labels = { ai: 'AI', ta: '技术美术' };
  const filters = [...document.querySelectorAll('.filters [data-category]')];
  filters.forEach(button => {
    const count = notes.filter(note => button.dataset.category === 'all' || note.dataset.noteCategory === button.dataset.category).length;
    button.querySelector('span').textContent = String(count);
  });
  function render() {
    const query = search.value.trim();
    let visibleCount = 0;
    notes.forEach(note => {
      const matchesCategory = category === 'all' || note.dataset.noteCategory === category;
      const matchesSearch = note.textContent.toLocaleLowerCase().includes(query.toLocaleLowerCase());
      note.hidden = !(matchesCategory && matchesSearch);
      if (!note.hidden) visibleCount += 1;
    });
    filters.forEach(button => {
      const selected = button.dataset.category === category;
      button.classList.toggle('selected', selected);
      button.setAttribute('aria-pressed', String(selected));
    });
    document.querySelector('.entry-count').textContent = category === 'all' && !query
      ? `共 ${notes.length} 篇` : `找到 ${visibleCount} 篇`;
    empty.hidden = visibleCount > 0;
    if (query) {
      title.textContent = '还没有找到相关手记';
      description.textContent = `暂时没有与“${query}”相关的记录。`;
    } else if (category !== 'all') {
      title.textContent = `${labels[category]} 的第一篇手记，还在路上。`;
      description.textContent = '这个方向暂时没有文章，新的学习记录会在这里积累。';
    } else {
      title.textContent = '第一篇手记，留给下一次发现。';
      description.replaceChildren('这里还没有文章，先留一页空白。', document.createElement('br'), '新的知识与实践，会在这里慢慢积累。');
    }
  }
  document.querySelectorAll('[data-category]').forEach(button => {
    button.addEventListener('click', () => {
      category = button.dataset.category;
      render();
    });
  });
  search.addEventListener('input', render);
  render();
})();

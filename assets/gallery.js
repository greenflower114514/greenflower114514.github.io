(function () {
  const root = document.getElementById("gallery-app");
  if (!root) return;

  const dataPath = "assets/gallery-list.json";
  const pageSize = 6;
  let albums = [];
  let currentPage = 1;

  function escapeHtml(value) {
    return String(value ?? "")
      .replaceAll("&", "&amp;")
      .replaceAll("<", "&lt;")
      .replaceAll(">", "&gt;")
      .replaceAll('"', "&quot;")
      .replaceAll("'", "&#39;");
  }

  function normalizeText(value) {
    return String(value ?? "").trim();
  }

  function normalizeOrder(item) {
    const value = Number(item?.order);
    return Number.isFinite(value) ? value : Number.MAX_SAFE_INTEGER;
  }

  function sortByOrder(items) {
    return items.slice().sort((left, right) => normalizeOrder(left) - normalizeOrder(right));
  }

  function normalizePhoto(photo) {
    const id = normalizeText(photo.id);
    const title = normalizeText(photo.title);
    const imageSrc = normalizeText(photo.imageSrc);
    if (!id || !title || !imageSrc) return null;
    return {
      order: Number(photo.order),
      id,
      title,
      description: normalizeText(photo.description),
      imageSrc,
      date: normalizeText(photo.date),
      location: normalizeText(photo.location)
    };
  }

  function normalizeAlbum(album) {
    const id = normalizeText(album.id);
    const title = normalizeText(album.title);
    if (!id || !title) return null;
    const photos = Array.isArray(album.photos)
      ? sortByOrder(album.photos.map(normalizePhoto).filter(Boolean))
      : [];
    return {
      order: Number(album.order),
      id,
      title,
      description: normalizeText(album.description),
      coverSrc: normalizeText(album.coverSrc) || photos[0]?.imageSrc || "",
      photos
    };
  }

  function setHash(hash) {
    window.location.hash = hash;
  }

  function getRoute() {
    const value = decodeURIComponent(window.location.hash.replace(/^#/, ""));
    const parts = value.split("/").filter(Boolean);
    if (parts[0] === "album" && parts[1]) {
      return { view: "album", albumId: parts[1] };
    }
    if (parts[0] === "photo" && parts[1] && parts[2]) {
      return { view: "photo", albumId: parts[1], photoId: parts[2] };
    }
    return { view: "list" };
  }

  function findAlbum(albumId) {
    return albums.find((album) => album.id === albumId);
  }

  function findPhoto(album, photoId) {
    return album?.photos.find((photo) => photo.id === photoId);
  }

  function renderShell(title, summary, content, actions) {
    root.innerHTML = `
      <section class="gallery-stage" aria-live="polite">
        <div class="gallery-head">
          <div>
            <p class="gallery-kicker">Gallery / 相册</p>
            <h2 class="gallery-title">${escapeHtml(title)}</h2>
          </div>
          <p class="gallery-summary">${escapeHtml(summary)}</p>
        </div>
        ${content}
        ${actions || ""}
      </section>
    `;
  }

  function renderEmpty(message) {
    renderShell("相册", "这里会展示按组整理好的图片。", `<div class="gallery-empty">${escapeHtml(message)}</div>`);
  }

  function renderPagination(totalPages) {
    if (totalPages <= 1) return "";
    return `
      <div class="gallery-pagination">
        <button class="gallery-button" type="button" data-gallery-page="prev" ${currentPage === 1 ? "disabled" : ""}>上一页</button>
        <span class="gallery-page-indicator">第 ${currentPage} / ${totalPages} 页</span>
        <button class="gallery-button" type="button" data-gallery-page="next" ${currentPage === totalPages ? "disabled" : ""}>下一页</button>
      </div>
    `;
  }

  function renderAlbumCard(album) {
    const imageMarkup = album.coverSrc
      ? `<img class="gallery-card__image" src="${escapeHtml(album.coverSrc)}" alt="${escapeHtml(album.title)}">`
      : `<span class="gallery-card__image gallery-card__image--placeholder" aria-hidden="true"></span>`;
    return `
      <button class="gallery-card" type="button" data-gallery-album="${escapeHtml(album.id)}">
        ${imageMarkup}
        <span class="gallery-card__body">
          <span class="gallery-card__title">${escapeHtml(album.title)}</span>
          <span class="gallery-card__count">${album.photos.length} photos</span>
        </span>
        <span class="gallery-card__popover">${escapeHtml(album.description || "这一组照片还没有描述。")}</span>
      </button>
    `;
  }

  function renderList() {
    if (!albums.length) {
      renderEmpty("还没有相册。");
      return;
    }
    const totalPages = Math.max(1, Math.ceil(albums.length / pageSize));
    currentPage = Math.min(Math.max(currentPage, 1), totalPages);
    const pageAlbums = albums.slice((currentPage - 1) * pageSize, currentPage * pageSize);
    renderShell(
      "图片陈列室",
      "每一组照片先收进方形模块里，悬停可以看描述，点击进入对应相册。",
      `<div class="gallery-grid">${pageAlbums.map(renderAlbumCard).join("")}</div>`,
      renderPagination(totalPages)
    );
  }

  function renderPhotoCard(album, photo) {
    return `
      <button class="gallery-photo" type="button" data-gallery-photo="${escapeHtml(photo.id)}">
        <img class="gallery-photo__image" src="${escapeHtml(photo.imageSrc)}" alt="${escapeHtml(photo.title)}">
        <span class="gallery-photo__body">
          <span class="gallery-photo__title">${escapeHtml(photo.title)}</span>
          <span class="gallery-photo__meta">${escapeHtml([photo.date, photo.location].filter(Boolean).join(" / "))}</span>
        </span>
        <span class="gallery-photo__popover">${escapeHtml(photo.description || "这张照片还没有详细信息。")}</span>
      </button>
    `;
  }

  function renderAlbum(album) {
    if (!album) {
      renderEmpty("没有找到这一组照片。");
      return;
    }
    const content = album.photos.length
      ? `<div class="gallery-album-grid">${album.photos.map((photo) => renderPhotoCard(album, photo)).join("")}</div>`
      : `<div class="gallery-empty">这一组还没有照片。</div>`;
    renderShell(
      album.title,
      album.description || "这一组照片还没有描述。",
      content,
      `<div class="gallery-actions"><button class="gallery-button" type="button" data-gallery-home>返回 Gallery</button></div>`
    );
  }

  function renderPhotoDetail(album, photo) {
    if (!album || !photo) {
      renderEmpty("没有找到这张照片。");
      return;
    }
    const meta = [photo.date, photo.location].filter(Boolean);
    renderShell(
      photo.title,
      album.title,
      `
        <div class="gallery-detail">
          <div class="gallery-detail__image-wrap">
            <img class="gallery-detail__image" src="${escapeHtml(photo.imageSrc)}" alt="${escapeHtml(photo.title)}">
          </div>
          <div class="gallery-detail__copy">
            <h3>${escapeHtml(photo.title)}</h3>
            ${meta.length ? `<div class="gallery-detail__meta">${meta.map((item) => `<span>${escapeHtml(item)}</span>`).join("")}</div>` : ""}
            <p>${escapeHtml(photo.description || "这张照片还没有详细信息。")}</p>
          </div>
        </div>
      `,
      `
        <div class="gallery-actions">
          <button class="gallery-button" type="button" data-gallery-album="${escapeHtml(album.id)}">返回相册</button>
          <button class="gallery-button" type="button" data-gallery-home>返回 Gallery</button>
        </div>
      `
    );
  }

  function renderRoute() {
    const route = getRoute();
    if (route.view === "album") {
      renderAlbum(findAlbum(route.albumId));
      return;
    }
    if (route.view === "photo") {
      const album = findAlbum(route.albumId);
      renderPhotoDetail(album, findPhoto(album, route.photoId));
      return;
    }
    renderList();
  }

  root.addEventListener("click", (event) => {
    const pageButton = event.target.closest("[data-gallery-page]");
    if (pageButton) {
      currentPage += pageButton.dataset.galleryPage === "prev" ? -1 : 1;
      renderList();
      return;
    }

    const homeButton = event.target.closest("[data-gallery-home]");
    if (homeButton) {
      setHash("");
      renderList();
      return;
    }

    const photoButton = event.target.closest("[data-gallery-photo]");
    if (photoButton) {
      const albumId = getRoute().albumId;
      setHash(`photo/${encodeURIComponent(albumId)}/${encodeURIComponent(photoButton.dataset.galleryPhoto)}`);
      return;
    }

    const albumButton = event.target.closest("[data-gallery-album]");
    if (albumButton) {
      setHash(`album/${encodeURIComponent(albumButton.dataset.galleryAlbum)}`);
    }
  });

  window.addEventListener("hashchange", renderRoute);

  fetch(dataPath)
    .then((response) => {
      if (!response.ok) throw new Error("Failed to load gallery data");
      return response.json();
    })
    .then((data) => {
      albums = Array.isArray(data)
        ? sortByOrder(data.map(normalizeAlbum).filter(Boolean))
        : [];
      renderRoute();
    })
    .catch(() => {
      renderEmpty("Gallery 数据加载失败，请检查 assets/gallery-list.json。");
    });
})();

// Gallery page — lightbox + edition filter
document.addEventListener('DOMContentLoaded', function () {
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const galleryItems = document.querySelectorAll('.gallery-item img');
  const closeBtn = document.querySelector('.lightbox-close');

  galleryItems.forEach(function (img) {
    img.addEventListener('click', function () {
      lightboxImg.setAttribute('src', img.getAttribute('src'));
      lightbox.classList.add('active');
    });
  });

  if (closeBtn) {
    closeBtn.addEventListener('click', function () {
      lightbox.classList.remove('active');
    });
  }

  if (lightbox) {
    lightbox.addEventListener('click', function (e) {
      if (e.target === lightbox) {
        lightbox.classList.remove('active');
      }
    });
  }

  const filterTabs = document.querySelectorAll('.filter-tab');
  const galleryEntries = document.querySelectorAll('.gallery-item');

  filterTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const filter = tab.getAttribute('data-filter');

      filterTabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');

      galleryEntries.forEach(function (item) {
        if (filter === 'all' || item.getAttribute('data-edition') === filter) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

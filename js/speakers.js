// Speakers page — category filter
document.addEventListener('DOMContentLoaded', function () {
  const filterTabs = document.querySelectorAll('.filter-tab');
  const speakerCards = document.querySelectorAll('.speaker-card');

  filterTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const filter = tab.getAttribute('data-filter');

      filterTabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');

      speakerCards.forEach(function (card) {
        if (filter === 'all' || card.getAttribute('data-category') === filter) {
          card.style.display = 'block';
        } else {
          card.style.display = 'none';
        }
      });
    });
  });
});

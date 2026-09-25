// Program page — day tabs + filter tabs
document.addEventListener('DOMContentLoaded', function () {
  const dayTabs = document.querySelectorAll('.day-tab');
  const scheduleDays = document.querySelectorAll('.schedule-day');

  dayTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const target = tab.getAttribute('data-day');

      dayTabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');

      scheduleDays.forEach(function (day) {
        day.classList.toggle('active', day.getAttribute('data-day') === target);
      });
    });
  });

  const filterTabs = document.querySelectorAll('.filter-tab');
  const scheduleItems = document.querySelectorAll('.schedule-item');

  filterTabs.forEach(function (tab) {
    tab.addEventListener('click', function () {
      const filter = tab.getAttribute('data-filter');

      filterTabs.forEach(function (t) { t.classList.remove('active'); });
      tab.classList.add('active');

      scheduleItems.forEach(function (item) {
        if (filter === 'all' || item.getAttribute('data-type') === filter) {
          item.style.display = 'grid';
        } else {
          item.style.display = 'none';
        }
      });
    });
  });
});

var menuBtn = document.querySelector('#menu-btn');
var menu = document.querySelector('#menu');
var exitBtn = document.querySelector('#exit-btn');

menuBtn.addEventListener('click', function() {
  menu.style.display = 'block';
});

exitBtn.addEventListener('click', function() {
  menu.style.display = 'none';
});


const filters = document.querySelectorAll('.portfolio-filter');
const items = document.querySelectorAll('.portfolio-item');

filters.forEach(filter => {
  filter.addEventListener('click', () => {
    const filterValue = filter.dataset.filter;
    items.forEach(item => {
      if (item.classList.contains(filterValue) || filterValue === 'all') {
        item.style.display = 'inline-block';
      } else {
        item.style.display = 'none';
      }
    });
  });
});

const searchInput = document.querySelector('.search-img');

searchInput.addEventListener('input', () => {
  searchInput.classList.remove('search-img')
});

document.addEventListener('click', (event) => {
  if (!searchInput.contains(event.target)) {
    searchInput.classList.add('search-img');
  }
});
const $menuIcon = document.getElementById('menu-icon'),
  $closeIcon = document.getElementById('close-icon'),
  $menu = document.getElementById('menu'),
  $bgMenu = document.getElementById('bg-menu');

document.addEventListener('click', event => {
  if (event.target === $menuIcon || event.target === $closeIcon) {
    toggleMenu();
  }
});

function toggleMenu() {
  $menu.classList.toggle('-translate-x-[768px]');
  $bgMenu.classList.toggle('hidden');
  $menuIcon.classList.toggle('hidden');
  $closeIcon.classList.toggle('hidden');
}

const activeNavItem = () => {
  disabledActiveItem();

  const sectionHash = window.location.hash;
  if (sectionHash) {
    const navItem = document.querySelector(`[id-nav="${sectionHash.slice(1)}"]`);

    if (navItem) {
      navItem.classList.add('active');
    }
    return;
  }

  const path = window.location.pathname;
  const slicePath = path.split('/').pop();

  addActiveItem(slicePath);
};

const disabledActiveItem = () => {
  const activeItem = document.querySelector('.nav-item.active');
  if (activeItem) {
    activeItem.classList.remove('active');
  }
};

const addActiveItem = slicePath => {
  const navItems = document.querySelectorAll('.nav-item');
  navItems.forEach(item => {
    if (slicePath === '' && item.getAttribute('id-nav') === 'home-section') {
      item.classList.add('active');
      return;
    }
    if (slicePath === 'index.html' && item.getAttribute('id-nav') === 'home-section') {
      item.classList.add('active');
      return;
    }

    if (item.getAttribute('id-nav') === slicePath) {
      item.classList.add('active');
    }
  });
};

window.addEventListener('hashchange', activeNavItem);

window.onload = activeNavItem;

window.addEventListener('popstate', activeNavItem);

window.addEventListener('load', activeNavItem);

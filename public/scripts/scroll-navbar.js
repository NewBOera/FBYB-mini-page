document.addEventListener('DOMContentLoaded', () => {
  const navbar = document.getElementById('navbar');
  const whyDubaiSection = document.querySelector('#why-dubai-section');

  const handleScroll = () => {
    const sectionTop = whyDubaiSection.getBoundingClientRect().top + window.scrollY;

    if (window.scrollY >= sectionTop) {
      navbar.classList.remove('hidden');
      navbar.classList.remove('flex');
      navbar.classList.add('md:flex');
    } else {
      navbar.classList.remove('md:flex');
      navbar.classList.add('flex');
      navbar.classList.add('hidden');
    }
  };

  window.addEventListener('scroll', handleScroll);
});

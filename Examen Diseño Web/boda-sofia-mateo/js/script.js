document.addEventListener('DOMContentLoaded', () => {

  // Animaciones al hacer scroll
  if (window.AOS) {
    AOS.init({
      duration: 800,
      once: true,
      offset: 80
    });
  }

  const nav = document.getElementById('mainNav');
  const navMenu = document.getElementById('navMenu');

  // Navbar compacto al hacer scroll
  const onScroll = () => {
    if (window.scrollY > 60) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Cerrar el menú hamburguesa al hacer clic en un enlace (móvil)
  const navLinks = navMenu.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      if (navMenu.classList.contains('show')) {
        const collapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
        collapse.hide();
      }
    });
  });

  // Resaltar el enlace de la sección visible
  const sections = document.querySelectorAll('main section[id], .hero[id]');
  const links = document.querySelectorAll('.nav-link[href^="#"]');

  const spy = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const id = entry.target.getAttribute('id');
        links.forEach(l => {
          l.classList.toggle('active', l.getAttribute('href') === `#${id}`);
        });
      }
    });
  }, { rootMargin: '-45% 0px -45% 0px' });

  sections.forEach(sec => spy.observe(sec));
});

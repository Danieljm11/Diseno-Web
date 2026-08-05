document.addEventListener('DOMContentLoaded', () => {

  // Animaciones al hacer scroll
  if (window.AOS) {
    AOS.init({ duration: 800, once: true, offset: 80 });
  }

  const nav = document.getElementById('mainNav');
  const navMenu = document.getElementById('navMenu');

  // Navbar compacto al hacer scroll
  const onScroll = () => {
    if (window.scrollY > 60) nav.classList.add('scrolled');
    else nav.classList.remove('scrolled');
  };
  window.addEventListener('scroll', onScroll);
  onScroll();

  // Resaltar el enlace de la página actual
  const currentPage = (location.pathname.split('/').pop() || 'index.html');
  document.querySelectorAll('.nav-link, .dropdown-item').forEach(link => {
    const href = (link.getAttribute('href') || '').split('/').pop();
    if (href === currentPage) {
      link.classList.add('active');
      const parentToggle = link.closest('.dropdown')?.querySelector('.dropdown-toggle');
      if (parentToggle) parentToggle.classList.add('active');
    }
  });

  // Cerrar el menú hamburguesa al hacer clic en un enlace (móvil)
  if (navMenu) {
    const navLinks = navMenu.querySelectorAll('.nav-link:not(.dropdown-toggle), .dropdown-item');
    navLinks.forEach(link => {
      link.addEventListener('click', () => {
        if (navMenu.classList.contains('show') && window.bootstrap) {
          const collapse = bootstrap.Collapse.getOrCreateInstance(navMenu);
          collapse.hide();
        }
      });
    });
  }

  // Formulario de contacto (solo visual, sin backend)
  const contactForm = document.getElementById('contactForm');
  if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const successMsg = document.getElementById('formSuccessMsg');
      if (successMsg) {
        successMsg.classList.add('show');
        successMsg.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      contactForm.reset();
    });
  }
});

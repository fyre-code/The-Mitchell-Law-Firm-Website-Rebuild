/* ============================================================
   THE MITCHELL LAW FIRM — Main JS
   - Intersection Observer scroll animations
   - Active nav link highlighting
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

  /* ── Scroll-reveal animations (fade-up / fade-in) ───────── */
  const animatedEls = document.querySelectorAll('.fade-up, .fade-in');

  if (animatedEls.length > 0) {
    const observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // fire once
          }
        });
      },
      { threshold: 0.12 }
    );

    animatedEls.forEach(function (el) {
      observer.observe(el);
    });
  }

  /* ── Active nav link ─────────────────────────────────────── */
  var currentPage = window.location.pathname.split('/').pop() || 'index.html';
  document.querySelectorAll('.navbar-nav .nav-link').forEach(function (link) {
    var href = link.getAttribute('href');
    if (href === currentPage || (currentPage === '' && href === 'index.html')) {
      link.classList.add('active');
    }
  });

  /* ── Auto-update footer copyright year ───────────────────── */
  var yearEl = document.getElementById('footer-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }

});

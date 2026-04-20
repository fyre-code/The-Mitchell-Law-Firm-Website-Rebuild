/* ============================================================
   THE MITCHELL LAW FIRM — Main JS
   - Intersection Observer scroll animations
   - Active nav link highlighting
   ============================================================ */

document.addEventListener('DOMContentLoaded', function () {

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

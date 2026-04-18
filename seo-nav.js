// SEO / A11y enhancements shared across pages:
//   1. Prepends a skip-to-content link (visible on focus).
//   2. Marks the active navigation item with aria-current="page" + .nav-active.
//   3. Scrolls the nav link into view on narrow screens (mobile drawer).
(function () {
  try {
    var currentPath = (window.location.pathname || '/').replace(/\/+$/, '') || '/';
    if (currentPath === '/index.html') currentPath = '/';

    // Skip link.
    if (!document.getElementById('skip-to-content-link')) {
      var skip = document.createElement('a');
      skip.id = 'skip-to-content-link';
      skip.href = '#main-content';
      skip.textContent = 'Перейти к содержимому';
      skip.style.cssText =
        'position:absolute;left:-9999px;top:0;z-index:100000;background:#818cf8;' +
        'color:#0b0f1a;padding:10px 18px;font-family:Manrope,sans-serif;font-weight:700;' +
        'text-decoration:none;border-radius:0 0 8px 0;transition:left .15s';
      skip.addEventListener('focus', function () { skip.style.left = '0'; });
      skip.addEventListener('blur', function () { skip.style.left = '-9999px'; });
      document.body.insertBefore(skip, document.body.firstChild);
    }

    // aria-current on the active nav link.
    var links = document.querySelectorAll('nav a[href]');
    links.forEach(function (a) {
      try {
        var href = a.getAttribute('href') || '';
        if (!href || href.startsWith('#') || href.startsWith('mailto:') || href.startsWith('tel:')) return;
        var url = new URL(href, window.location.origin);
        var p = url.pathname.replace(/\/+$/, '') || '/';
        if (p === '/index.html') p = '/';
        if (p === currentPath) {
          a.setAttribute('aria-current', 'page');
          a.classList.add('nav-active');
        }
      } catch (e) { /* ignore malformed hrefs */ }
    });

    // Ensure there is a #main-content target. If not present, attach it to the
    // first <section> or to the first H1's parent.
    if (!document.getElementById('main-content')) {
      var target = document.querySelector('main, section, article');
      if (target) target.id = target.id || 'main-content';
      else {
        var h1 = document.querySelector('h1');
        if (h1 && h1.parentElement) h1.parentElement.id = h1.parentElement.id || 'main-content';
      }
    }
  } catch (err) {
    // Defensive — never break the page.
  }
})();

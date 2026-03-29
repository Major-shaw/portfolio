/* ============================================================
   CASE STUDY: Puzzle Screen UX Optimization
   JavaScript — Scroll Animations, Nav, Metrics Counter
   ============================================================ */

(function () {
  'use strict';

  /* ===== Scroll Reveal Animation ===== */
  const revealElements = document.querySelectorAll('.reveal');

  const revealObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
  );

  revealElements.forEach((el) => revealObserver.observe(el));

  /* ===== Back to Works — Tap Feedback ===== */
  const backBtn = document.getElementById('back-to-works');

  if (backBtn) {
    backBtn.addEventListener('click', () => {
      // Placeholder — no navigation for now
    });
  }

  /* ===== Scroll Progress Bar ===== */
  const scrollProgress = document.getElementById('scroll-progress');

  window.addEventListener('scroll', () => {
    const scrollTop = window.scrollY;
    const docHeight = document.documentElement.scrollHeight - window.innerHeight;
    const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
    scrollProgress.style.width = progress + '%';
  });

  /* ===== Active Nav Link Highlighting ===== */
  const navLinks = document.querySelectorAll('.site-nav__links a');
  const sections = document.querySelectorAll('section[id]');

  const navObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute('id');
          navLinks.forEach((link) => {
            link.classList.toggle('active', link.getAttribute('href') === '#' + id);
          });
        }
      });
    },
    { threshold: 0.2, rootMargin: '-60px 0px -50% 0px' }
  );

  sections.forEach((section) => navObserver.observe(section));

  /* ===== Mobile Nav Toggle ===== */
  const navToggle = document.getElementById('nav-toggle');
  const navLinksList = document.getElementById('nav-links');

  navToggle.addEventListener('click', () => {
    navLinksList.classList.toggle('open');
  });

  navLinksList.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navLinksList.classList.remove('open');
    }
  });

  /* ===== Metrics Counter Animation ===== */
  const metricValues = document.querySelectorAll('.metric-card__value[data-count]');

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  metricValues.forEach((el) => counterObserver.observe(el));

  function animateCounter(el) {
    const target = parseFloat(el.getAttribute('data-count'));
    const suffix = el.getAttribute('data-suffix') || '';
    const duration = 1500;
    const startTime = performance.now();

    function update(currentTime) {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = target * eased;

      if (Number.isInteger(target)) {
        el.textContent = Math.round(current) + suffix + '%';
      } else {
        el.textContent = current.toFixed(1) + suffix + '%';
      }

      if (progress < 1) {
        requestAnimationFrame(update);
      }
    }

    requestAnimationFrame(update);
  }

  /* ===== Zero metric special animation ===== */
  const zeroMetric = document.querySelector('.metric-card__value--zero');

  if (zeroMetric) {
    const zeroObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            animateZero(entry.target);
            zeroObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    zeroObserver.observe(zeroMetric);
  }

  function animateZero(el) {
    const numbers = [9, 7, 5, 3, 1, 0];
    let i = 0;
    const interval = setInterval(() => {
      el.textContent = numbers[i];
      i++;
      if (i >= numbers.length) {
        clearInterval(interval);
      }
    }, 200);
  }

})();

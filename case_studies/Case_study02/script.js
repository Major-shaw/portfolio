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

  /* ===== Nav Scrolled State ===== */
  const siteNav = document.getElementById('site-nav');

  function updateNavScrollState() {
    if (window.scrollY > 50) {
      siteNav.classList.add('scrolled');
    } else {
      siteNav.classList.remove('scrolled');
    }
  }

  window.addEventListener('scroll', updateNavScrollState);
  updateNavScrollState();

  /* ===== Hero Metric Counter Animation ===== */
  const heroMetricNumbers = document.querySelectorAll('.hero__metric-number[data-target]');

  function animateHeroCounter(el) {
    const target = parseFloat(el.getAttribute('data-target'));
    const duration = 1200;
    const steps = 40;
    const interval = duration / steps;
    let current = 0;
    const step = target / steps;

    const timer = setInterval(() => {
      current += step;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      const display = Number.isInteger(target) ? Math.round(current) : current.toFixed(1);
      el.textContent = display + '%';
    }, interval);
  }

  const heroCounterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const card = entry.target.closest('.hero__metric-card');
          const cardIndex = Array.from(card.parentElement.children).indexOf(card);
          setTimeout(() => animateHeroCounter(entry.target), cardIndex * 150);
          heroCounterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  heroMetricNumbers.forEach((el) => heroCounterObserver.observe(el));

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

  /* ===== Gameplay Feedback Scroll Carousel ===== */
  const carouselContainer = document.querySelector('.gameplay-carousel__scroll-container');
  const carouselContent = document.querySelector('.gameplay-carousel__content');

  if (carouselContainer && carouselContent) {
    const slides = carouselContent.querySelectorAll('.gameplay-carousel__slide');
    const dots = carouselContent.querySelectorAll('.gameplay-carousel__dot');
    const totalStates = 6;
    let currentState = 1;
    let previousState = 1;
    let isManualNavigation = false;

    function setCarouselState(newState, force = false) {
      if (newState === currentState && !force) return;
      
      const direction = newState > currentState ? 'forward' : 'backward';
      previousState = currentState;
      currentState = newState;

      // Update slides with directional animation
      slides.forEach((slide, index) => {
        const slideIndex = index + 1;
        
        // Remove all state classes first
        slide.classList.remove('gameplay-carousel__slide--active', 'gameplay-carousel__slide--exit-left', 'gameplay-carousel__slide--exit-right', 'gameplay-carousel__slide--enter-left', 'gameplay-carousel__slide--enter-right');
        
        if (slideIndex === newState) {
          // Entering slide
          if (direction === 'forward') {
            slide.classList.add('gameplay-carousel__slide--enter-right');
          } else {
            slide.classList.add('gameplay-carousel__slide--enter-left');
          }
          // Trigger reflow then add active
          void slide.offsetWidth;
          slide.classList.remove('gameplay-carousel__slide--enter-left', 'gameplay-carousel__slide--enter-right');
          slide.classList.add('gameplay-carousel__slide--active');
        } else if (slideIndex === previousState) {
          // Exiting slide
          if (direction === 'forward') {
            slide.classList.add('gameplay-carousel__slide--exit-left');
          } else {
            slide.classList.add('gameplay-carousel__slide--exit-right');
          }
        }
      });

      // Update dots
      dots.forEach((dot, index) => {
        dot.classList.toggle('gameplay-carousel__dot--active', index + 1 === newState);
      });
    }

    // Scroll-based state change
    function handleCarouselScroll() {
      if (isManualNavigation) return;
      
      const containerRect = carouselContainer.getBoundingClientRect();
      const scrolledIntoContainer = -containerRect.top;
      const scrollableRange = carouselContainer.offsetHeight - window.innerHeight;
      
      if (scrollableRange <= 0) return;
      
      const progress = Math.max(0, Math.min(1, scrolledIntoContainer / scrollableRange));
      const stateProgress = progress * totalStates;
      let newState = Math.floor(stateProgress) + 1;
      newState = Math.max(1, Math.min(totalStates, newState));
      
      setCarouselState(newState);
    }

    window.addEventListener('scroll', handleCarouselScroll);
    handleCarouselScroll(); // Initialize

    // Dot click handlers
    dots.forEach((dot) => {
      dot.addEventListener('click', () => {
        const index = parseInt(dot.getAttribute('data-index'), 10);
        
        isManualNavigation = true;
        setCarouselState(index, true);
        
        // Scroll to corresponding position
        const scrollableRange = carouselContainer.offsetHeight - window.innerHeight;
        const targetProgress = (index - 0.5) / totalStates;
        const containerTop = carouselContainer.getBoundingClientRect().top + window.scrollY;
        const targetScroll = containerTop + (scrollableRange * targetProgress);
        
        window.scrollTo({
          top: targetScroll,
          behavior: 'smooth'
        });
        
        setTimeout(() => {
          isManualNavigation = false;
        }, 600);
      });
    });
  }

})();

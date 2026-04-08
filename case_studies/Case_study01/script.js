/* ============================================================
   CASE STUDY: Daily/Weekly Quest System — Tile Match
   JavaScript — Scroll Animations, Nav Behavior, Flow Tabs
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

  /* ===== Impact Section — Number Animation ===== */
  const impactSection = document.querySelector('.impact');
  
  if (impactSection) {
    const impactObserver = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animate the impact numbers
            const impactNumbers = entry.target.querySelectorAll('.impact-metric__number[data-value]');
            impactNumbers.forEach((numEl, index) => {
              const targetValue = parseFloat(numEl.getAttribute('data-value'));
              animateImpactNumber(numEl, targetValue, index * 150);
            });
            
            impactObserver.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.3 }
    );
    
    impactObserver.observe(impactSection);
  }
  
  function animateImpactNumber(element, target, delay) {
    setTimeout(() => {
      const duration = 1200;
      const steps = 40;
      const stepTime = duration / steps;
      let current = 0;
      const increment = target / steps;
      
      const counter = setInterval(() => {
        current += increment;
        if (current >= target) {
          current = target;
          clearInterval(counter);
        }
        const display = Number.isInteger(target) ? Math.round(current) : current.toFixed(1);
        element.textContent = display + '%';
      }, stepTime);
    }, delay);
  }

  /* ===== Sticky Nav — Scrolled State ===== */
  const nav = document.getElementById('site-nav');

  window.addEventListener('scroll', () => {
    if (window.scrollY > 10) {
      nav.classList.add('scrolled');
    } else {
      nav.classList.remove('scrolled');
    }
  });

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

  // Close mobile nav when a link is clicked
  navLinksList.addEventListener('click', (e) => {
    if (e.target.tagName === 'A') {
      navLinksList.classList.remove('open');
    }
  });

  /* ===== Hero Metric Counter Roll-up ===== */
  const metricNumbers = document.querySelectorAll('.hero__metric-number[data-target]');

  function animateCounter(el) {
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

  const counterObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const delay = parseInt(entry.target.closest('.hero__metric-card').style.getPropertyValue('--card-delay')) || 0;
          setTimeout(() => animateCounter(entry.target), delay);
          counterObserver.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.5 }
  );

  metricNumbers.forEach((el) => counterObserver.observe(el));

  /* ===== Flow Tabs ===== */
  const flowTabs = document.querySelectorAll('.flow-tab');
  const flowContents = document.querySelectorAll('.flow-content');

  flowTabs.forEach((tab) => {
    tab.addEventListener('click', () => {
      const targetId = tab.getAttribute('data-tab');

      flowTabs.forEach((t) => t.classList.remove('active'));
      flowContents.forEach((c) => c.classList.remove('active'));

      tab.classList.add('active');
      document.getElementById(targetId).classList.add('active');
    });
  });

  /* ===== Image Lightbox ===== */
  const lightbox = document.getElementById('lightbox');
  const lightboxImg = document.getElementById('lightbox-img');
  const lightboxCaption = document.getElementById('lightbox-caption');
  const lightboxClose = document.querySelector('.lightbox__close');

  // Selectors for all clickable images
  const clickableImages = document.querySelectorAll(
    '.mock-img, .state-card__img, .iteration-screens img, .flow-diagram img, ' +
    '.feature-mechanics-imgs img, .reward-flow-visual img, .game-screenshots img, .phone-mockup img'
  );

  clickableImages.forEach((img) => {
    img.addEventListener('click', () => {
      lightboxImg.src = img.src;
      lightboxCaption.textContent = img.alt || '';
      lightbox.classList.add('active');
      document.body.style.overflow = 'hidden';
    });
  });

  // Close lightbox
  function closeLightbox() {
    lightbox.classList.remove('active');
    document.body.style.overflow = '';
  }

  lightboxClose.addEventListener('click', closeLightbox);
  lightbox.addEventListener('click', (e) => {
    if (e.target === lightbox) closeLightbox();
  });
  document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && lightbox.classList.contains('active')) {
      closeLightbox();
    }
  });

  /* ===== Animated Callouts — Scroll-Locked Multi-State ===== */
  const scrollContainer = document.querySelector('.final-mocks-animated__scroll-container');
  const annotAnimated = document.querySelector('.annot-animated');
  
  if (scrollContainer && annotAnimated) {
    const progressDots = annotAnimated.querySelectorAll('.annot-progress__dot');
    const phones = annotAnimated.querySelectorAll('.annot-animated__phone');
    const groups = annotAnimated.querySelectorAll('.annot-group');
    let currentState = 1;
    const totalStates = 4;
    let isClickScrolling = false;
    let clickScrollTimeout = null;
    
    function setState(newState) {
      if (newState < 1 || newState > totalStates) return;
      if (newState === currentState) return;
      currentState = newState;
      
      // Update phones
      phones.forEach((phone, index) => {
        phone.classList.toggle('annot-animated__phone--active', index + 1 === currentState);
      });
      
      // Update callout groups
      groups.forEach((group, index) => {
        group.classList.toggle('annot-group--active', index + 1 === currentState);
      });
      
      // Update dots
      progressDots.forEach((dot, index) => {
        dot.classList.toggle('annot-progress__dot--active', index + 1 === currentState);
      });
      
      annotAnimated.setAttribute('data-state', currentState);
    }
    
    // Click handlers for dots
    progressDots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        // Immediately set state (skip intermediate states)
        isClickScrolling = true;
        clearTimeout(clickScrollTimeout);
        setState(index + 1);
        
        // Scroll to the appropriate position within the container
        const containerHeight = scrollContainer.offsetHeight;
        const viewportHeight = window.innerHeight;
        const scrollableHeight = containerHeight - viewportHeight;
        const targetScrollWithinContainer = (index / (totalStates - 1)) * scrollableHeight;
        const containerTop = scrollContainer.offsetTop;
        window.scrollTo({
          top: containerTop + targetScrollWithinContainer,
          behavior: 'smooth'
        });
        
        // Resume scroll-based state changes after scroll animation completes
        clickScrollTimeout = setTimeout(() => {
          isClickScrolling = false;
        }, 800);
      });
    });
    
    // Scroll-based state change using scroll position within container
    let ticking = false;
    window.addEventListener('scroll', () => {
      // Skip if we're in a click-triggered scroll
      if (isClickScrolling) return;
      
      if (!ticking) {
        requestAnimationFrame(() => {
          const containerRect = scrollContainer.getBoundingClientRect();
          const containerHeight = scrollContainer.offsetHeight;
          const viewportHeight = window.innerHeight;
          
          // How far the container top is from viewport top (negative when scrolled past)
          const scrolledIntoContainer = -containerRect.top;
          const scrollableRange = containerHeight - viewportHeight;
          
          // Progress through the scroll container (0 to 1)
          const scrollProgress = Math.max(0, Math.min(1, scrolledIntoContainer / scrollableRange));
          
          // Map progress to states
          let newState;
          if (scrollProgress < 0.25) {
            newState = 1;
          } else if (scrollProgress < 0.5) {
            newState = 2;
          } else if (scrollProgress < 0.75) {
            newState = 3;
          } else {
            newState = 4;
          }
          
          setState(newState);
          ticking = false;
        });
        ticking = true;
      }
    });
  }

  /* ===== 3D Carousel — Continuous Rotation ===== */
  document.querySelectorAll('.carousel-3d').forEach(carousel => {
    const track = carousel.querySelector('.carousel-3d__track');
    const items = carousel.querySelectorAll('.carousel-3d__item');
    const dots = carousel.querySelectorAll('.carousel-3d__dot');
    const isIcons = carousel.classList.contains('carousel-3d--icons');
    
    const itemCount = items.length;
    const angleStep = 360 / itemCount;
    const radius = isIcons ? 100 : 180;
    let currentIndex = 0;
    let autoRotateInterval = null;
    let isPaused = false;
    
    // Position items in a circle (once, at initialization)
    function initializePositions() {
      items.forEach((item, index) => {
        const angle = index * angleStep;
        item.style.transform = `
          translate(-50%, -50%)
          rotateY(${angle}deg) 
          translateZ(${radius}px)
        `;
      });
    }
    
    // Update which item appears active based on current rotation
    function updateActiveStates() {
      items.forEach((item, index) => {
        const isActive = index === currentIndex;
        item.classList.toggle('carousel-3d__item--active', isActive);
      });
      
      dots.forEach((dot, index) => {
        dot.classList.toggle('carousel-3d__dot--active', index === currentIndex);
      });
    }
    
    // Rotate to show specific index in front
    function goToIndex(targetIndex) {
      currentIndex = targetIndex;
      const rotationAngle = -targetIndex * angleStep;
      track.style.transform = `translateZ(-${radius}px) rotateY(${rotationAngle}deg)`;
      updateActiveStates();
    }
    
    // Rotate to next item
    function rotateNext() {
      const nextIndex = (currentIndex + 1) % itemCount;
      goToIndex(nextIndex);
    }
    
    // Auto-rotate every 4.5 seconds
    function startAutoRotate() {
      if (autoRotateInterval) clearInterval(autoRotateInterval);
      autoRotateInterval = setInterval(() => {
        if (!isPaused) rotateNext();
      }, 4500);
    }
    
    // Pause on hover
    carousel.addEventListener('mouseenter', () => {
      isPaused = true;
    });
    
    carousel.addEventListener('mouseleave', () => {
      isPaused = false;
    });
    
    // Dot click handlers
    dots.forEach((dot, index) => {
      dot.addEventListener('click', () => {
        goToIndex(index);
      });
    });
    
    // Initialize
    initializePositions();
    track.style.transform = `translateZ(-${radius}px) rotateY(0deg)`;
    updateActiveStates();
    startAutoRotate();
  });
})();

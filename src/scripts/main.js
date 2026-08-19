// Shared client-side interactions for ajairu sites
// Nav toggle, dropdown, smooth scroll, scroll reveal, FAQ accordion, footer year

document.addEventListener('DOMContentLoaded', function () {
  // --- Mobile Nav Toggle ---
  var navToggle = document.querySelector('.nav-toggle');
  var navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    navLinks.querySelectorAll('a:not(.nav-dropdown-toggle)').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // --- Dropdowns (Industries + Free Tools) ---
  var dropdowns = document.querySelectorAll('.nav-dropdown');
  dropdowns.forEach(function (dd) {
    var toggle = dd.querySelector('.nav-dropdown-toggle');
    if (!toggle) return;

    function toggleDropdown(open) {
      if (typeof open === 'boolean') {
        if (open) dd.classList.add('open'); else dd.classList.remove('open');
      } else {
        dd.classList.toggle('open');
      }
      toggle.setAttribute('aria-expanded', dd.classList.contains('open'));
    }

    toggle.addEventListener('click', function (e) {
      e.preventDefault();
      e.stopPropagation();
      dropdowns.forEach(function (other) { if (other !== dd) other.classList.remove('open'); });
      toggleDropdown();
    });

    toggle.addEventListener('keydown', function (e) {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        toggleDropdown();
      }
      if (e.key === 'Escape') {
        toggleDropdown(false);
      }
    });

    document.addEventListener('click', function (e) {
      if (!dd.contains(e.target)) toggleDropdown(false);
    });
  });

  // --- Smooth Scroll ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      var targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#!') return;
      var target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        var headerOffset = 80;
        var elementPosition = target.getBoundingClientRect().top;
        var offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });

  // --- Scroll Reveal ---
  var revealElements = document.querySelectorAll('.reveal');
  if ('IntersectionObserver' in window && revealElements.length > 0) {
    var revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });
    revealElements.forEach(function (el) { revealObserver.observe(el); });
  } else {
    revealElements.forEach(function (el) { el.classList.add('visible'); });
  }

  // --- FAQ Accordion ---
  var faqItems = document.querySelectorAll('.faq-item');
  faqItems.forEach(function (item) {
    var question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function () {
        var isOpen = item.classList.contains('open');
        faqItems.forEach(function (other) { other.classList.remove('open'); });
        if (!isOpen) item.classList.add('open');
      });
      question.addEventListener('keydown', function (e) {
        if (e.key === 'Enter' || e.key === ' ') {
          e.preventDefault();
          question.click();
        }
      });
    }
  });

  // --- Footer Year ---
  var yearEls = document.querySelectorAll('.current-year');
  if (yearEls.length > 0) {
    var year = new Date().getFullYear();
    yearEls.forEach(function (el) { el.textContent = year; });
  }
});

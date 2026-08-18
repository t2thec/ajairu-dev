/* ============================================
   ajairu — Shared JavaScript
   Nav toggle, smooth scroll, scroll animations, FAQ accordion
   ============================================ */

document.addEventListener('DOMContentLoaded', function () {

  // --- Mobile Nav Toggle ---
  const navToggle = document.querySelector('.nav-toggle');
  const navLinks = document.querySelector('.nav-links');

  if (navToggle && navLinks) {
    navToggle.addEventListener('click', function () {
      navToggle.classList.toggle('open');
      navLinks.classList.toggle('open');
    });

    // Close menu when a link is clicked (mobile)
    navLinks.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        navToggle.classList.remove('open');
        navLinks.classList.remove('open');
      });
    });
  }

  // --- Smooth Scroll for in-page anchors ---
  document.querySelectorAll('a[href^="#"]').forEach(function (anchor) {
    anchor.addEventListener('click', function (e) {
      const targetId = this.getAttribute('href');
      if (targetId === '#' || targetId === '#!') return;
      const target = document.querySelector(targetId);
      if (target) {
        e.preventDefault();
        const headerOffset = 80;
        const elementPosition = target.getBoundingClientRect().top;
        const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        window.scrollTo({ top: offsetPosition, behavior: 'smooth' });
      }
    });
  });

  // --- Scroll Reveal Animation ---
  const revealElements = document.querySelectorAll('.reveal');

  if ('IntersectionObserver' in window && revealElements.length > 0) {
    const revealObserver = new IntersectionObserver(function (entries) {
      entries.forEach(function (entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          revealObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.12, rootMargin: '0px 0px -40px 0px' });

    revealElements.forEach(function (el) {
      revealObserver.observe(el);
    });
  } else {
    // Fallback: just show everything
    revealElements.forEach(function (el) {
      el.classList.add('visible');
    });
  }

  // --- FAQ Accordion ---
  const faqItems = document.querySelectorAll('.faq-item');

  faqItems.forEach(function (item) {
    const question = item.querySelector('.faq-question');
    if (question) {
      question.addEventListener('click', function () {
        const isOpen = item.classList.contains('open');
        // Optionally close all others for accordion effect
        faqItems.forEach(function (other) {
          other.classList.remove('open');
        });
        if (!isOpen) {
          item.classList.add('open');
        }
      });
    }
  });

  // --- Contact Form (mailto fallback) ---
  const contactForm = document.querySelector('#contact-form');
  if (contactForm) {
    contactForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const name = (contactForm.querySelector('#name') || {}).value || '';
      const email = (contactForm.querySelector('#email') || {}).value || '';
      const company = (contactForm.querySelector('#company') || {}).value || '';
      const service = (contactForm.querySelector('#service') || {}).value || '';
      const message = (contactForm.querySelector('#message') || {}).value || '';

      const subject = 'AI Consulting Enquiry — ' + (company || name);
      const body = 'Name: ' + name + '\n' +
        'Email: ' + email + '\n' +
        'Company: ' + company + '\n' +
        'Interest: ' + service + '\n\n' +
        'Message:\n' + message;

      window.location.href = 'mailto:hello@ajairu.ai?subject=' +
        encodeURIComponent(subject) + '&body=' + encodeURIComponent(body);
    });
  }

  // --- Newsletter form (no backend, just a thank you) ---
  const newsletterForm = document.querySelector('.newsletter-box form');
  if (newsletterForm) {
    newsletterForm.addEventListener('submit', function (e) {
      e.preventDefault();
      const btn = newsletterForm.querySelector('button');
      if (btn) {
        btn.textContent = '✓ Subscribed!';
        btn.disabled = true;
      }
      const input = newsletterForm.querySelector('input');
      if (input) input.value = '';
    });
  }

  // --- Update footer year ---
  const yearEls = document.querySelectorAll('.current-year');
  if (yearEls.length > 0) {
    const year = new Date().getFullYear();
    yearEls.forEach(function (el) { el.textContent = year; });
  }
});
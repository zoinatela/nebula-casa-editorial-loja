/**
 * Nébula Casa Editorial — loja
 * Sticky CTA + reveal on scroll
 */
(function () {
  "use strict";

  var sticky = document.querySelector("[data-sticky-cta]");
  var hero = document.querySelector(".hero");

  if (sticky && hero) {
    document.body.classList.add("has-sticky-cta");

    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            sticky.classList.remove("is-visible");
          } else {
            sticky.classList.add("is-visible");
          }
        });
      },
      { threshold: 0.15 }
    );

    observer.observe(hero);
  }

  var reveals = document.querySelectorAll(".reveal");
  if (reveals.length && "IntersectionObserver" in window) {
    var revealObs = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-in");
            revealObs.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -8% 0px" }
    );

    reveals.forEach(function (el) {
      revealObs.observe(el);
    });
  } else {
    reveals.forEach(function (el) {
      el.classList.add("is-in");
    });
  }
})();

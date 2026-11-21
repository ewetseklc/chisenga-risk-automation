// Shared site script: mobile menu, reveal-on-scroll, nav background, hero parallax.
// Content is visible without JavaScript: .reveal elements are only hidden when
// <html> has the "js" class, which an inline script in each page's <head> adds.
(function () {
  var toggle = document.getElementById("navToggle");
  var drawer = document.getElementById("navDrawer");

  if (toggle && drawer) {
    var closeMenu = function () {
      drawer.classList.remove("open");
      toggle.classList.remove("active");
      toggle.setAttribute("aria-expanded", "false");
      toggle.setAttribute("aria-label", "Open menu");
    };

    toggle.addEventListener("click", function () {
      var open = drawer.classList.toggle("open");
      toggle.classList.toggle("active", open);
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
      toggle.setAttribute("aria-label", open ? "Close menu" : "Open menu");
    });

    drawer.querySelectorAll("a").forEach(function (link) {
      link.addEventListener("click", closeMenu);
    });

    document.addEventListener("keydown", function (event) {
      if (event.key === "Escape") closeMenu();
    });
  }

  var reveals = document.querySelectorAll(".reveal");
  if ("IntersectionObserver" in window) {
    var observer = new IntersectionObserver(
      function (entries) {
        entries.forEach(function (entry) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1 }
    );
    reveals.forEach(function (el) { observer.observe(el); });
  } else {
    reveals.forEach(function (el) { el.classList.add("in-view"); });
  }

  var nav = document.querySelector(".nav");
  if (nav) {
    var updateNavState = function () {
      nav.classList.toggle("nav-scrolled", window.scrollY > 50);
    };
    updateNavState();
    window.addEventListener("scroll", updateNavState, { passive: true });
  }

  var heroVisual = document.querySelector(".hero-visual");
  var reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)");

  if (heroVisual && !reduceMotion.matches) {
    var frameRequested = false;
    var updateHeroParallax = function () {
      heroVisual.style.translate = "0 " + window.scrollY * 0.12 + "px";
      frameRequested = false;
    };
    var requestHeroParallax = function () {
      if (!frameRequested) {
        window.requestAnimationFrame(updateHeroParallax);
        frameRequested = true;
      }
    };
    updateHeroParallax();
    window.addEventListener("scroll", requestHeroParallax, { passive: true });
  }
})();

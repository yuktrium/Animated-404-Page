(function () {
  const scene = document.getElementById("scene");
  const rain = document.getElementById("rain");
  const mascotWrap = document.getElementById("mascotWrap");
  const homeBtnWrap = document.getElementById("homeBtnWrap");
  const homeBtn = document.getElementById("homeBtn");
  const redirectFade = document.getElementById("redirectFade");

  // Generate rain drops
  const DROP_COUNT = 60;
  for (let i = 0; i < DROP_COUNT; i++) {
    const d = document.createElement("div");
    d.className = "drop";
    const left = Math.random() * 100;
    const duration = 0.6 + Math.random() * 0.6;
    const delay = Math.random() * 2;
    d.style.left = left + "vw";
    d.style.animationDuration = duration + "s";
    d.style.animationDelay = delay + "s";
    d.style.opacity = (0.25 + Math.random() * 0.4).toFixed(2);
    rain.appendChild(d);
  }

  // Sequence timeline
  // Sequence timeline
  function at(ms, fn) {
    setTimeout(fn, ms);
  }

  // Walk in quickly
  at(200, () => scene.classList.add("walked-in"));

  // Look left
  at(1200, () => scene.classList.add("look-left"));

  // Look right
  at(1800, () => {
    scene.classList.remove("look-left");
    scene.classList.add("look-right");
  });

  // Show 404
  scene.classList.add("spotted"); // Show 404 instantly

  at(1200, () => scene.classList.add("look-left"));

  at(1800, () => {
    scene.classList.remove("look-left");
    scene.classList.add("look-right");
  });

  at(2400, () => scene.classList.add("sad"));

  at(2800, () => document.getElementById("dialogue").classList.add("show"));

  at(3400, () => scene.classList.add("ready"));

  // Become sad
  at(3000, () => scene.classList.add("sad"));

  // Show text
  at(3400, () => document.getElementById("dialogue").classList.add("show"));

  // Show button
  at(4200, () => scene.classList.add("ready"));

  // Hover -> excited mascot
  homeBtnWrap.addEventListener("mouseenter", () =>
    mascotWrap.classList.add("excited"),
  );
  homeBtnWrap.addEventListener("mouseleave", () =>
    mascotWrap.classList.remove("excited"),
  );
  homeBtnWrap.addEventListener("focusin", () =>
    mascotWrap.classList.add("excited"),
  );
  homeBtnWrap.addEventListener("focusout", () =>
    mascotWrap.classList.remove("excited"),
  );

  // Click -> wave, fade, redirect
  homeBtn.addEventListener("click", () => {
    homeBtn.disabled = true;
    mascotWrap.classList.add("waving");
    setTimeout(() => {
      redirectFade.classList.add("active");
    }, 500);
    setTimeout(() => {
      window.location.href = "/";
    }, 1500);
  });
})();

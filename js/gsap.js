let cazaTexto = document.querySelector(".ml12");
cazaTexto.innerHTML = cazaTexto.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

let cazaTexto1 = document.querySelector(".ml13");
cazaTexto1.innerHTML = cazaTexto1.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

let cazaTexxto2 = document.querySelector(".ml14");
cazaTexxto2.innerHTML = cazaTexxto2.textContent.replace(
  /\S/g,
  "<span class='letter'>$&</span>"
);

anime.timeline().add({
  targets: ".ml12 .letter",
  translateY: [100, 10],
  translateZ: [0],
  translateX: [7],
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 1000 + 60 * i,
});

anime.timeline().add({
  targets: ".ml13 .letter",
  translateY: [0, -367],
  translateZ: 0,
  translateX: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 1000 + 60 * i,
});

anime.timeline().add({
  targets: ".ml14 .letter",
  translateY: [0, 70],
  translateZ: 0,
  translateX: 0,
  opacity: [0, 1],
  easing: "easeOutExpo",
  duration: 1000,
  delay: (el, i) => 1000 + 60 * i,
});

TweenMax.from(".text-title", 1, {
  left: "-50%",
  ease: Expo.easeInOut,
  delay: 1.4,
});

TweenMax.from(".menux", 3, {
  left: "-50%",
  ease: Expo.easeInOut,
  delay: 1.4,
});

TweenMax.from(".left110", 4, {
  left: "-105%",
  ease: Expo.easeInOut,
  delay: 0.8,
});

TweenMax.from(".left100", 4, {
  left: "-105%",
  ease: Expo.easeInOut,
  delay: 0.8,
});

TweenMax.from(".table", 1, {
  left: "-105%",
  ease: Expo.easeInOut,
  delay: 1.4,
});

TweenMax.from(".fusion__padre", 4, {
  left: "-100%",
  ease: Expo.easeInOut,
  delay: 0.2,
});

TweenMax.from(
  ".left, .left1, .left2, .left3, .left4, .left5, .left6, .left7, .left8, .left9, .left10, .left11, .left12, .left13, .left14, .left15, .left16, .left17, .left18",
  3,
  {
    left: "-105%",
    ease: Expo.easeInOut,
    delay: 1.8,
  }
);

TweenMax.from(".header h1", 3, {
  left: "-140%",
  ease: Expo.easeInOut,
  delay: 1.4,
});

TweenMax.staggerFrom(
  ".images > div",
  1,
  {
    y: "60",
    opacity: 0,
    ease: Power2.easeOut,
    delay: 2.4,
  },
  0.2
);

TweenMax.staggerFrom(
  ".imagess > div",
  1,
  {
    y: "60",
    opacity: 0,
    ease: Power2.easeOut,
    delay: 0.9,
  },
  0.2
);

TweenMax.staggerFrom(
  ".subasos",
  1,
  {
    y: "2160",
    opacity: 0,
    ease: Power2.easeOut,
    delay: 20,
  },
  11.2
);

TweenMax.staggerFrom(
  ".column1",
  1,
  {
    y: "0",
    opacity: 0,
    ease: Power2.easeOut,
    delay: 0.2,
  },
  0.2
);

TweenMax.staggerFrom(
  ".column1 > h2",
  1,
  {
    y: "60",
    opacity: 0,
    ease: Power2.easeOut,
    delay: 2.6,
  },
  0.6
);

TweenMax.staggerFrom(
  ".add",
  1,
  {
    y: "260",
    opacity: 0,
    ease: Power2.easeOut,
    delay: 2.3,
  },
  0.6
);

TweenMax.staggerFrom(
  "#fab",
  1,
  {
    y: "260",
    opacity: 0,
    ease: Power2.easeOut,
    delay: 2.3,
  },
  0.6
);

TweenMax.staggerFrom(
  ".kill",
  1,
  {
    y: "260",
    opacity: 0,
    ease: Power2.easeOut,
    delay: 2.3,
  },
  0.2
);

TweenMax.staggerFrom(
  ".header > p",
  1,
  {
    y: "60",
    opacity: 0,
    ease: Power2.easeOut,
    delay: 2.6,
  },
  0.2
);

TweenMax.from(".link", 1, {
  opacity: 0,
  ease: SteppedEase.config(1),
  repeat: -1,
  repeatDelay: 0.2,
  delay: 2.8,
});

TweenMax.staggerFrom(
  ".quick",
  1,
  {
    y: "200",
    opacity: 0,
    ease: Power2.easeOut,
    delay: 2.6,
  },
  1.6
);

TweenMax.staggerFrom(
  ".quickness",
  1,
  {
    y: "260",
    opacity: 0,
    ease: Power2.easeOut,
    delay: 2.6,
  },
  1.6
);

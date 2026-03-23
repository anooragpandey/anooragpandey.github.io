const { animate, timeline } = Motion;

const monkey = document.querySelector(".inner-monkey");
const armLeft = document.querySelector(".arm-left");
const armRight = document.querySelector(".arm-right");
const legLeft = document.querySelector(".leg-left");
const legRight = document.querySelector(".leg-right");
const monolith = document.querySelector(".monolith");
const title = document.querySelector(".poster-title");
const credits = document.querySelector(".poster-credits");

const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

if (!prefersReducedMotion) {
  animate(
    monkey,
    {
      transform: [
        "translate(0%, 0%) rotate(10deg)",
        "translate(92%, 0%) rotate(8deg)",
        "translate(92%, 126%) rotate(12deg)",
        "translate(0%, 126%) rotate(7deg)",
        "translate(0%, 24%) rotate(9deg)",
        "translate(78%, 58%) rotate(10deg)"
      ]
    },
    {
      duration: 18,
      repeat: Infinity,
      repeatType: "mirror",
      ease: "linear"
    }
  );

  animate(
    armLeft,
    { rotate: [10, -8] },
    { duration: 2.6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
  );

  animate(
    armRight,
    { rotate: [-6, 10] },
    { duration: 2.6, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
  );

  animate(
    legLeft,
    { rotate: [6, -5] },
    { duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
  );

  animate(
    legRight,
    { rotate: [-6, 6] },
    { duration: 3, repeat: Infinity, repeatType: "mirror", ease: "easeInOut" }
  );

  timeline(
    [
      [monolith, { opacity: [0, 1], scale: [0.95, 1] }, { duration: 0.9, ease: "easeOut" }],
      [title, { opacity: [0, 1], y: [18, 0] }, { duration: 0.7, ease: "easeOut", at: 0.15 }],
      [credits, { opacity: [0, 1], y: [12, 0] }, { duration: 0.6, ease: "easeOut", at: 0.28 }]
    ]
  );
} else {
  monolith.style.opacity = "1";
  title.style.opacity = "1";
  credits.style.opacity = "1";
}

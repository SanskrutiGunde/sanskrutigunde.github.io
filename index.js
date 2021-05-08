gsap.registerPlugin(ScrollTrigger);
var tl = gsap.timeline();

tl.from(".content", {
  y: "-30%",
  opacity: 0,
  duration: 2,
  ease: Power4.easeOut,
});

tl.from(
  ".stagger1",
  {
    opacity: 0,
    y: -50,
    stagger: 0.3,
    duration: 2,
    ease: Power4.easeOut,
  },
  "-=1.5"
);

tl.from(
  ".hero-design",
  {
    opacity: 0,
    y: 50,
    duration: 1,
    ease: Power4.easeOut,
  },
  "-=2"
);

gsap.from(".square-anim", {
  stagger: 0.2,
  scale: 0.1,
  duration: 1,
  ease: Back.easeOut.config(1.7),
});

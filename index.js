const scroll = new LocomotiveScroll({
  el: document.querySelector(".main"),
  smooth: true,
});

gsap.from([".nav", ".heroName", ".content"], {
  x: "250vh",
  duration: 1,
  //   delay: 0.5,
  stagger: 0.25,
  ease: "power2.inOut",
});

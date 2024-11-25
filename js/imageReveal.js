gsap.registerPlugin(ScrollTrigger);

let revealContainers = document.querySelectorAll(".reveal");

revealContainers.forEach((container) => {
  let image = container.querySelector("img");
  let tl = gsap.timeline({
    scrollTrigger: {
      trigger: container,
      start: "top top",
      end: "bottom top",
      toggleActions: "play none none none"
    }
  });

  tl.set(container, { autoAlpha: 1 });
  tl.from(container, 1.5, {
    yPercent: -100,
    ease: Power2.out,
  });
  tl.from(image, 1.5, {
    yPercent: 100,
    delay: -1.5,
    ease: Power2.out
  });
});
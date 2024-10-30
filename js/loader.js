function startLoader() {
    var counterElement = document.querySelector(".counter");
    var currentValue = 0;

    function updateCounter() {
      if (currentValue === 100) {
        return;
      }

      currentValue += Math.floor(Math.random() * 10) + 1;

      if (currentValue > 100) {
        currentValue = 100;
      }

      counterElement.textContent = currentValue;

      var delay = Math.floor(Math.random() * 200) + 50;
      setTimeout(updateCounter, delay);
    }

    updateCounter();
  }

  startLoader();

  gsap.to(".counter", 0.25, {
    delay: 3.5,
    opacity: 0,
  });
  gsap.to(".bar", 1.5, {
    delay: 3.5,
    height: 0,
    stagger: {
      amount: 0.5,
    },
    ease: "power4.inOut",
  });
gsap.from(".h1", 1.5, {
  delay: 4,
  y: 300, 
  opacity: 0,  // Start from 0% opacity
  stagger: {
    amount: 1,
  },
  ease: "power4.inOut",
  onComplete: function() {
    gsap.to(".h1", {opacity: 1});  // Ensure it ends at 100% opacity
  }
});

  gsap.from(".hero", 2, {
    delay: 4.5,
    y: 400,
    ease: "power4.inOut",
  });
import { servicesCopy } from "./copy.js";
document.addEventListener("DOMContentLoaded", () => {
    gsap.registerPlugin(ScrollTrigger);

    const lenis = new Lenis();
    lenis.on("scroll", ScrollTrigger.update);
    gsap.ticker.add((time) => {
        lenis.raf(time * 1000);
    });

    gsap.ticker.lagSmoothing(0);

    const stickySection = document.querySelector(".about-background");
    const stickyHeight = window.innerHeight * 4;
    const title = document.querySelectorAll(".background-title");
    const indicator = document.querySelector(".background-indicator");
    const currentCount = document.querySelector("#current-count");
    const backgroundImg = document.querySelector(".title-images");
    const backgroundCopy = document.querySelector(".background-text p");
    const backgroundTitleHeight = 38;
    const imgHeight = 250;

    backgroundCopy.textContent = servicesCopy[0][0];
    let currentSplitText = new SplitType(backgroundCopy, { types: "lines" });

    const measureContainer = document.createElement("div");
    measureContainer.style.cssText = `
              position: absolute;
              visibility: hidden;
              height: auto;
              width: auto;
          `;
    document.body.appendChild(measureContainer);

    const serviceWidths = Array.from(title).map((service) => {
        measureContainer.textContent = service.querySelector("p").textContent;
        return measureContainer.offsetWidth + 4;
    });

    document.body.removeChild(measureContainer);

    gsap.set(indicator, {
        width: serviceWidths[0],
        xPercent: -50,
        left: "50%",
    });

    const scrollPerService = window.innerHeight;
    let currentIndex = 0;

    const animateTextChange = (index) => {
        return new Promise((resolve) => {
            gsap.to(currentSplitText.lines, {
                opacity: 0,
                y: -20,
                duration: 0.25,
                stagger: 0.025,
                ease: "power3.inOut",
                onComplete: () => {
                    currentSplitText.revert();

                    const newText = servicesCopy[index][0];
                    backgroundCopy.textContent = newText;

                    currentSplitText = new SplitType(backgroundCopy, {
                        types: "lines",
                    });

                    gsap.set(currentSplitText.lines, {
                        opacity: 0,
                        y: 20,
                    });

                    gsap.to(currentSplitText.lines, {
                        opacity: 1,
                        y: 0,
                        duration: 0.25,
                        stagger: 0.025,
                        ease: "power3.out",
                        onComplete: resolve,
                    });
                },
            });
        });
    };

    ScrollTrigger.create({
        trigger: stickySection,
        start: "top top",
        end: `${stickyHeight}px`,
        pin: true,
        onUpdate: async (self) => {
            const progress = self.progress;
            gsap.set(".progress", { scaleY: progress });

            const scrollPosition = Math.max(0, self.scroll() - window.innerHeight);
            const activeIndex = Math.floor(scrollPosition / scrollPerService);

            if (
                activeIndex >= 0 &&
                activeIndex < title.length &&
                currentIndex !== activeIndex
            ) {
                currentIndex = activeIndex;

                title.forEach((service) => service.classList.remove("active"));
                title[activeIndex].classList.add("active");

                await Promise.all([
                    gsap.to(indicator, {
                        y: activeIndex * backgroundTitleHeight,
                        width: serviceWidths[activeIndex],
                        duration: 0.3,
                        ease: "power3.inOut",
                        overwrite: true,
                    }),

                    gsap.to(backgroundImg, {
                        y: -(activeIndex * imgHeight),
                        duration: 0.3,
                        ease: "power3.inOut",
                        overwrite: true,
                    }),

                    gsap.to(currentCount, {
                        innerText: activeIndex + 1,
                        snap: { innerText: 1 },
                        duration: 0.3,
                        ease: "power3.out",
                    }),

                    animateTextChange(activeIndex),
                ]);
            }
        },
    });
});
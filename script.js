var tl = gsap.timeline();
var t2 = gsap.timeline();
document.addEventListener("DOMContentLoaded", function () {});

function loader() {
  const greetings = [
    "Hello",
    "Hola",
    "Bonjour",
    "Namaste",
    "Ciao",
    "Launching...",
    "click anywhere to continue",
  ];
  const container = document.getElementById("greetingsContainer");

  function animateGreeting(index) {
    if (index < greetings.length) {
      container.innerHTML = "";

      const p = document.createElement("p");
      p.textContent = greetings[index];
      container.appendChild(p);

      if (index === greetings.length - 1) {
        gsap.fromTo(p, { y: 20 }, { y: 0, duration: 0.35 });
      } else {
        gsap.fromTo(
          p,
          { y: 20 },
          {
            y: 0,
            duration: 0.35,
            onComplete: () =>
              gsap.to(p, {
                duration: 0.35,
                onComplete: () =>
                  setTimeout(() => animateGreeting(index + 1), 350),
              }),
          }
        );
      }
    }
  }
  animateGreeting(0);
  document.addEventListener("click", function () {
    tl.to("#loader", {
      border: "300px solid #365cc0",
      duration: 1,
      ease: "circ.inOut",
    });
    tl.to("#loader", {
      height: 0,
      top: "-100%",
      duration: 1,
      ease: "circ.inOut",
    });
    tl.to("#loader", {
      display: "none",
    });
    tl.to(".title h1", {
      y: 0,
      duration: 0.25,
      stagger: 0.05,
      ease: "circ.out",
    });
  });
}

function loco() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smoothMobile: true,
    smartphone: {
      smooth: true,
      multiplier: 0.8, // Adjusted from 0.7 to 0.8 for potentially smoother experience
    },
    smooth: true,
    getDirection: true,
    mobile: {
      smooth: true, // Ensure smooth is enabled for mobile
      getDirection: true,
    },
    tablet: {
      smooth: true, // Ensure smooth is enabled for tablets
      getDirection: true,
    },
  });

  // Update settings for smoother scrolling
  locoScroll.update({
    smooth: 5, // Increased smooth value for potentially smoother experience
  });

  locoScroll.update({
    multiplier: 0.9, // Adjusted multiplier for potentially smoother experience
  });

  locoScroll.on("scroll", ScrollTrigger.update);

  ScrollTrigger.scrollerProxy("#main", {
    scrollTop(value) {
      return arguments.length
        ? locoScroll.scrollTo(value, 0, 0)
        : locoScroll.scroll.instance.scroll.y;
    },
    getBoundingClientRect() {
      return {
        top: 0,
        left: 0,
        width: window.innerWidth,
        height: window.innerHeight,
      };
    },
    pinType: document.querySelector("#main").style.transform
      ? "transform"
      : "fixed",
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());

  ScrollTrigger.refresh();
}

function heroAnimation() {}

function menu() {
  var tl2 = gsap.timeline({});
  var flag;
  var add = document.querySelector("nav i");
  var stop = document.querySelector("#menu i");
  var menu = document.querySelector("#menu");
  add.addEventListener("click", function () {
    flag = 1;
    if (flag == 1) {
      tl2.to(menu, {
        y: "120%",
        duration: 1,
        ease: "power4.out",
      });
      tl2.to("#menu h1,#menu #menu-bar h2,#menu-bar h4, #socials h4, #menu i", {
        opacity: 1,
        y: -20,
        stagger: 0.15,
        duration: 0.2,
      });
      flag = 0;
    }
  });
  stop.addEventListener("click", function () {
    flag = 0;
    if (flag == 0) {
      tl2.to(menu, {
        y: "-100%",
        duration: 1,
        ease: "power4.in",
      });
      tl2.to("#menu h1, #menu #menu-bar h2,#socials h4, #menu i", {
        opacity: 0,
        y: 0,
        stagger: 0.15,
        duration: 0.2,
      });
    }
  });
}

function scrollerAnimation() {
  gsap.to("#scroller", {
    transform: "translateY(0) translateX(-50%) rotate(15deg)",
    ease: "power4.inOut",
    scrollTrigger: {
      trigger: "#scroller",
      scroller: "#main",
      start: "top 50%",
      end: "top 25%",
      // markers: true,
      scrub: 5,
    },
  });
  gsap.to("#scroller2", {
    transform: "translateY(0) translateX(-10%) rotate(0deg)",
    ease: "power4.inOut",
    scrollTrigger: {
      trigger: "#scroller",
      scroller: "#main",
      start: "top 50%",
      end: "top 25%",
      // markers: true,
      scrub: 5,
    },
  });
}

function crsr() {
  document.addEventListener("mousemove", function (dets) {
    gsap.to("#crsr", {
      x: dets.x,
      y: dets.y,
      duration: 1,
      ease: "elastic.out(1,1)",
    });
  });
}

function pg5HorizontalText() {
  gsap.to("#page5 h1", {
    transform: "translateX(-150%)",
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      start: "top 5%",
      end: "top -15%",
      scrub: 1,
      pin: true,
      // markers: true,
    },
  });
}

loco();
loader();
heroAnimation();
menu();
scrollerAnimation();
crsr();
pg5HorizontalText();

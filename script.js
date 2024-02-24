var tl = gsap.timeline();
var t2 = gsap.timeline();
function loader() {
  var loaderLogo = document.querySelector("#loader img");
  setInterval(() => {}, 2000);
  tl.from(loaderLogo, {
    opacity: 0,
    duration: 3,
  });
  tl.to(
    loaderLogo,
    {
      rotate: 720,
      duration: 1.4,
      ease: "circ.inOut",
    },
    "load"
  );
  tl.to(
    loaderLogo,
    {
      borderRadius: "10%",
      duration: 2,
      ease: "circ.Out",
    },
    "load"
  );
  tl.to(
    loaderLogo,
    {
      borderRadius: "25%",
      duration: 2,
      ease: "circ.Out",
    },
    "load"
  );
  tl.to(
    loaderLogo,
    {
      borderRadius: "50%",
      duration: 2,
      ease: "circ.Out",
    },
    "load"
  );
  tl.from("#loader p", {
    opacity: "0",
    duration: 2,
    ease: "circ.Out",
  });
  document.addEventListener("click", function () {
    tl.to(loaderLogo, {
      borderRadius: "100%",
      opacity: 0,
      duration: 0.5,
      ease: "circ.Out",
    });
    tl.to("#loader p", {
      opacity: "0",
      duration: 0.5,
      ease: "circ.Out",
    });
    tl.to("#loader", {
      y: -1000,
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
    tl.to(".title h1", {
      color: "transparent",
      webkitTextStroke: "1px #fff",
      scale: "1.3",
      duration: 0.5,
      stagger: 0.17,
      scrollTrigger: {
        trigger: ".hero",
        scroller: "#main",
        start: "top 25%",
        end: "top -15%",
        scrub: 3,
      },
    });
    tl.to("#page1", {
      backgroundColor: "#111111",
      duration: 0.5,
      scrollTrigger: {
        trigger: "#page2",
        scroller: "#main",
        start: "top bottom",
        end: "top top",
        scrub: 1,
        // markers: true,
      },
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
    },
    smooth: true,
    getDirection: true,
    mobile: {
      breakpoint: 0,
      smooth: false,
      getDirection: true,
    },
    tablet: {
      breakpoint: 0,
      smooth: false,
      getDirection: true,
    },
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
        y: "100%",
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
    transform: "translateY(0) translateX(-50%) rotate(10deg)",
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
      ease: "circ.out",
    });
  });
}

function pg5HorizontalText() {
  gsap.to("#page5 h1", {
    transform: "translateX(-625%)",
    scrollTrigger: {
      trigger: "#page5",
      scroller: "#main",
      start: "top 10%",
      end: "top -250%",
      pin: true,
      scrub: 3,
    },
  });
}

function page8BlenderProj() {
  gsap.to("#page8 #card1", {
    scale: 0.9,
    y: -50,
    // filter: "blur(10px)",
    // opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page8 #card1",
      scroller: "#main",
      start: "top 15%",
      end: "top top",
      scrub: 1,
    },
  });

  gsap.to("#page8 #card2", {
    y: -50,
    scale: 0.9,
    // filter: "blur(10px)",
    // opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page8 #card2",
      scroller: "#main",
      start: "top 15%",
      end: "top top",
      scrub: 1,
    },
  });

  gsap.to("#page8 #card3", {
    scale: 0.9,
    y: -50,
    // y: 300,
    // filter: "blur(10px)",
    // opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page8 #card3",
      scroller: "#main",
      start: "top 15%",
      end: "top top",
      scrub: 1,
    },
  });

  gsap.to("#page8 #card4", {
    scale: 0.9,
    y: -50,
    // y: 300,
    // filter: "blur(10px)",
    // opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page8 #card4",
      scroller: "#main",
      start: "top 15%",
      end: "top top",
      scrub: 1,
    },
  });

  gsap.to("#page8 #card5", {
    y: -50,
    scale: 0.9,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page8 #card5",
      scroller: "#main",
      start: "top 15%",
      end: "top top",
      scrub: 1,
    },
  });
  gsap.to("#page8 #card6", {
    scale: 0.9,
    y: -50,
    // filter: "blur(10px)",
    // opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page8 #card6",
      scroller: "#main",
      start: "top 15%",
      end: "top top",
      scrub: 1,
    },
  });

  gsap.to("#page8 #card7", {
    y: -50,
    scale: 0.9,
    // filter: "blur(10px)",
    // opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page8 #card7",
      scroller: "#main",
      start: "top 15%",
      end: "top top",
      scrub: 1,
    },
  });

  gsap.to("#page8 #card8", {
    scale: 0.9,
    y: -50,
    // y: 300,
    // filter: "blur(10px)",
    // opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page8 #card8",
      scroller: "#main",
      start: "top 15%",
      end: "top top",
      scrub: 1,
    },
  });

  gsap.to("#page8 #card9", {
    scale: 0.9,
    y: -50,
    // y: 300,
    // filter: "blur(10px)",
    // opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page8 #card9",
      scroller: "#main",
      start: "top 15%",
      end: "top top",
      scrub: 1,
    },
  });

  gsap.to("#page8 #card10", {
    y: -50,
    scale: 0.9,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page8 #card10",
      scroller: "#main",
      start: "top 15%",
      end: "top top",
      scrub: 1,
    },
  });

  gsap.to("#page8 #card11", {
    y: -50,
    scale: 0.9,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page8 #card11",
      scroller: "#main",
      start: "top 15%",
      end: "top top",
      scrub: 1,
    },
  });
  gsap.to("#page8 #card12", {
    scale: 0.9,
    y: -50,
    // filter: "blur(10px)",
    // opacity: 0,
    duration: 1.5,
    scrollTrigger: {
      trigger: "#page8 #card12",
      scroller: "#main",
      start: "top 15%",
      end: "top top",
      scrub: 1,
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
page8BlenderProj();

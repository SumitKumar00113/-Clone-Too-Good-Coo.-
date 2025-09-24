function locomotiveanimation() {
  gsap.registerPlugin(ScrollTrigger);

  const locoScroll = new LocomotiveScroll({
    el: document.querySelector("#main"),
    smooth: true,
    tablet: { smooth: true },
    smartphone: { smooth: true }
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
        height: window.innerHeight
      };
    }
  });

  ScrollTrigger.addEventListener("refresh", () => locoScroll.update());
  ScrollTrigger.refresh();
}
locomotiveanimation();


function navbaranimation() {
  gsap.to("#nav-1 svg", {
    transform: "translateY(-100%)",
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true
    }
  });

  gsap.to("#nav-2 #links", {
    transform: "translateY(-100%)",
    opacity: 0,
    scrollTrigger: {
      trigger: "#page1",
      scroller: "#main",
      start: "top 0",
      end: "top -5%",
      scrub: true
    }
  });
}
navbaranimation();


// function video() {
//   let video = document.querySelector('#video-container');
//   let play = document.querySelector('#video-container .play');

//   // video.addEventListener('mouseenter', function () {
//   //   gsap.to(play, { opacity: 1, scale: 1 });
//   // });

//   // video.addEventListener('mouseleave', function () {
//   //   gsap.to(play, { opacity: 0, scale: 0 });
//   // });

//   video.addEventListener('scroll', function (dets) {
//     gsap.to(play, {
//       top: dets.y
//     });
//   });
// }
// video();


function loadinganimation() {
  gsap.from("#page1 h1", {
    y: 100,
    opacity: 0,
    delay: 0.5,
    duration: 0.9,
    stagger: 0.2
  });
}
loadinganimation();

function loadingvideoanimation() {
  gsap.from("#page1 #video-container", {
    scale: 0.9,
    opacity: 0,
    delay: 1.3,
    duration: 0.5
  });
}
loadingvideoanimation();


function cursoranimation() {
  document.addEventListener('mousemove', function (dets) {
    gsap.to('#cursor', {
      left: dets.x,
      top: dets.y
    });
  });

  let child = document.querySelectorAll('.child');
  child.forEach(function (element) {
    element.addEventListener('mouseenter', function () {
      gsap.to('#cursor', {
        xPercent: -50,
        yPercent: -50,
        scale: 1
      });
    });

    element.addEventListener('mouseleave', function () {
      gsap.to('#cursor', {
        xPercent: -50,
        yPercent: -50,
        scale: 0
      });
    });
  });
}
cursoranimation();

const input = document.querySelector('#for-gmail input');

input.addEventListener('focus', function() {
  input.setAttribute('data-placeholder', input.getAttribute('placeholder'));
  input.setAttribute('placeholder', '');
});

input.addEventListener('blur', function() {
  input.setAttribute('placeholder', input.getAttribute('data-placeholder'));
});
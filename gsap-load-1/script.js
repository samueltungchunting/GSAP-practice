gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline( {default: {ease: "power1.out"}})

tl
    .to(".hiding-words", 1, { y: '0%', stagger: 0.25 })
    .to(".slider", 1.5, { y: '-100%', delay: 1 })
    .to(".first-bg", 1.1, { y: '-100%' }, '-=1')
    .to(".navOverlay", 1, { opacity: 0.1 }, '-=0.5')
    .fromTo(".coverText", 1, { x: 30, opacity:0 }, {x: 0, opacity: 1 }, "-=1")
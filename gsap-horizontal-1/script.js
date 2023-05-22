gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()

tl
    .fromTo('.scrollSection', {
        translateX: 0
    }, {
        translateX: '-200vw',
        ease: "none",
        scrollTrigger: {
            trigger: '.horizontalScroll',
            scrub: 0.5,
            start: 'top top',
            end: '4000 top',
            pin: true, // remember to add this too!
            markers: true
        },
        delay: 2
    })

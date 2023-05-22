gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline()

tl
    .fromTo(".cover", 1, { height: '0%' }, { height: '80%', ease: 'Power2.easeInOut' })
    .fromTo(".cover", 1, { width: '100%' }, { width: '80%', ease: 'Power2.easeInOut' }, "-=0.5")
    .fromTo(".slider", 1, { x: '-100%' }, { x: '0%', ease: 'Power2.easeInOut' }, "-=1")
    .fromTo(".coverText", 0.5, { opacity: 0, x: 30 }, { opacity: 1, x: 0 })
    .fromTo(".navOverlay", 1, { opacity: 0 }, {  opacity: 0.05 }, "-=0.5")
    .fromTo(".hamburger", 0.5, { opacity: 0, x: 10 }, { opacity: 1, x: 0 }, "-=1")
    .fromTo(".icon", 0.5, { opacity: 0, x: 10 }, { opacity: 1, x: 0 }, "-=1")
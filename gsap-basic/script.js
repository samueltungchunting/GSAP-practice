gsap.registerPlugin(ScrollTrigger)

const tl = gsap.timeline({
    value: 100,
    scrollTrigger: {
        trigger: ".box-1",
        markers: true,
        scrub: 1,
        start: "top 60%",
        end: "top 30%"
    }
})

tl.to(".box-1", {x: 300, duration: 2})
    .to(".box-1", {y:200, duration: 2})
    .to(".box-1", {x:0, duration: 2})

// gsap.to(".box-1", {
//     x: 300,
//     repeat: 1,
//     rotate: 720,
//     duration: 3,
//     scrollTrigger: {
//         trigger: ".box-1",
//         toggleClass: "box-1-toggleClass",
//         start: "top 60%",
//         markers: true
//     }
// })
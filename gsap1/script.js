// gsap.to("#box1",{
//     x:1000,
//     duration:2,
//     delay:1
// })

// gsap.to("#box2",{
//     x:500,
//     y:500,
//     duration:2,
//     delay:1
// })

//gsap.to: initial to final
//gsap.from: final ot initial

gsap.to("#box1",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    scale:0.5
})

gsap.from("#box2",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360

})
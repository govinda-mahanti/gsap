// timeline

// gsap.to("#box1",{
//     duration:1.5,
//     delay:1,
//     x:1200,
//     rotate:360,
// })
// gsap.to("#box2",{
//     duration:1,
//     delay:2.5,
//     x:1200,
//     backgroundColor:"yellow"

// })
// gsap.to("#box3",{
//     duration:1,
//     delay:3.5,
//     scale:0.5,
//     borderRadius:"50%",
//     x:1200,

// })

var tl = gsap.timeline();
tl.to("#box1", {
  duration: 1.5,
  delay: 1,
  x: 1200,
  rotate: 360,
})
  tl.to("#box2", {
    duration: 1,
    x: 1200,
    backgroundColor: "yellow",
  })
  tl.to("#box3", {
    duration: 1,
    scale: 0.5,
    borderRadius: "50%",
    x: 1200,
  });

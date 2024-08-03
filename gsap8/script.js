gsap.to("#page2 h1",{
    transform: "translate(-190%)",
    scrollTrigger:{// when aniamtion work during scrolling
        trigger:"#page2", // alwayes prefer when we use the 
        scroller:"body",
        markers:true,
        start:"top 0%",
        end:"top -150%",
        scrub:2, // it use when we need the animation work coresponding to scrolling
        pin:true // it use when the element is fix during the enimation
    }
})
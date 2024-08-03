function page1Animation(){

    
    var tl=gsap.timeline()
    
    tl.from("nav h1, nav h4, nav button",{
        y:-40,
        opacity:0,
        duration:0.7,
        delay:1,
        stagger:0.2
    })
    
    tl.from(".center-part1 h1",{
        x:-200,
        opacity:0,
        duration:0.5
    })
    tl.from(".center-part1 p",{
        x:-200,
        opacity:0,
        duration:0.5
    })
    tl.from(".center-part1 button",{
        opacity:0,
        duration:0.4
    })
    tl.from(".center-part2 img",{
        opacity:0,
        duration:0.4,
        x:200,
    },"-=0.6")
    tl.from(".section1bottom img",{
        opacity:0,
        duration:0.6,
        y:30,
        stagger:0.2
    })
}

function page2Animation(){
    
    var tl2=gsap.timeline({
        scrollTrigger:{
            trigger:".services h3",
            scroller:"body",
            // markers:true,
            start:"top 50%",
            end:"top 0",
            scrub:2
        }
    })
    tl2.from(".services",{
        y:30,
        opacity:0,
    })
    tl2.from(".elem.line1.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim1")
    tl2.from(".elem.line1.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim1")
    
    
    tl2.from(".elem.line2.left",{
        x:-300,
        opacity:0,
        duration:1
    },"anim2")
    tl2.from(".elem.line2.right",{
        x:300,
        opacity:0,
        duration:1
    },"anim2")
    
}
page1Animation()
page2Animation()
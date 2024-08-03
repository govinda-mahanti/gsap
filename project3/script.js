function breakTheText(){

    
    var h1 = document.querySelector("h1")
    var h1Text = h1.textContent
    
    var splitedText=h1Text.split("")
    var halfValue=splitedText.length/2
    
    var clutter=""
    splitedText.forEach(function(elem,idex){
        if(idex<halfValue){
            clutter+=`<span class="a">${elem}</span>`
        }
        else{
            clutter+=`<span class="b">${elem}</span>`

        }
    })

    h1.innerHTML=clutter
}

breakTheText()

gsap.from("h1 .a",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:0.15
})

gsap.from("h1 .b",{
    y:80,
    opacity:0,
    duration:0.6,
    delay:0.5,
    stagger:-0.15
})
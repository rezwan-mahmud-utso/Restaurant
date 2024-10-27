let timeline =gsap.timeline()

timeline.from("li",{
    x:400,
    
    opacity:0,
    stagger:.1,

})

gsap.from("header .logo",{
    
    y:-100,
    opacity:0,
    
})
gsap.from(".banner .food-image img",{
    opacity:0,
    scale:.2,
  
})
gsap.from("main .card",{
    opacity:0,
    scale:.1,
    duration:1,
    stagger:.5,
    scrollTrigger:{
        trigger:"main ",
        scroller:"body",
        start:"top 80%",
    }
})
gsap.from("main .menu-primary .description h2",{
    opacity:0,
    scale:.1,
    duration:1,
    x:200,
    stagger:1,
    scrollTrigger:{
        trigger:" main ",
        scroller:"body",
      
        start:"top 80%",
    }
  
})
gsap.from("main .menu-primary .description h5",{
    opacity:0,
    scale:.1,
    duration:1,
    x:200,
   delay:.5,
   scrollTrigger:{
    trigger:" main ",
    scroller:"body",
  
    start:"top 80%",
}

})
gsap.from("main .menu-primary .description p",{
    opacity:0,
    scale:.1,
    duration:1,
    x:200,
    delay:1,
    scrollTrigger:{
        trigger:" main ",
        scroller:"body",
    
        start:"top 80%",
    }
})



gsap.from("main .menu-second .description h2",{
    opacity:0,
    scale:.1,
    duration:.5,
    x:-200,
    stagger:1,
    scrollTrigger:{
        trigger:" main .menu-second ",
        scroller:"body",
     
        start:"top 80%",
    }
  
})
gsap.from("main .menu-second .description h5",{
    opacity:0,
    scale:.1,
    duration:1,
    x:-200,
    delay:.2,
    scrollTrigger:{
        trigger:" main .menu-second ",
        scroller:"body",
      
        start:"top 80%",
    }

})
gsap.from("main .menu-second .description p",{
    opacity:0,
    scale:.1,
    duration:1,
    x:-200,
    delay:.2,
    scrollTrigger:{
        trigger:" main .menu-second ",
        scroller:"body",
    
        start:"top 80%",
    }
})
gsap.from("main .menu-second img",{
    opacity:0,
    scale:.1,
    duration:1.5,
    scrollTrigger:{
        trigger:" main .menu-second ",
        scroller:"body",
    
        start:"top 80%",
    }
})
gsap.from(".booking ,.booking h3, main input,main .booking-date ,.booking-date h5,  main textarea",{
    opacity:0,
    // scale:.1,
    x:-100,
    duration:.3,
    stagger:.1,
    scrollTrigger:{
        trigger:".booking",
        scroller:"body",
   
        start:"top 90%",
    }
})
// let booking= gsap.timeline()



// booking.from("main .booking h3",{
//     opacity:-1,
//     duration:.5,
//     x: -100,
//     stagger:.2,
//     delay:.8,
    
// })

// booking.from("main input ",{
//     opacity:-1,
//     duration:.5,
//     x: -100,
//     stagger:.2,  
    
// })
// booking.from(" main .booking-date ,.booking-date h5,  main textarea",{
//     opacity:-1,
//     duration:.5,
//     x: -100,
//     stagger:.2,

// })
gsap.from(".app-download h3,.app-download h4,.app-download p",{
    opacity:0,
    scale:.1,
    duration:1,
    x:100,
    stagger:.2,
    scrollTrigger:{
        trigger:" .app-download h3,.app-download h4,.app-download p",
        scroller:"body",
     
        start:"top 90%",
    }
})
gsap.from("main .cupon",{
    opacity:0,
    duration:1,
    x:-100,
    scrollTrigger:{
        trigger:" main .cupon ",
        scroller:"body",
      
        start:"top 90%",
    }
    
    
})
gsap.from("footer .right h3,.right h4 ,.right h6",{
   y:50,
   opacity:0,
   scale:.1,
   duration:1,
   stagger:.2,
   scrollTrigger:{
    trigger:" footer .right h3,.right h4 ,.right h6",
    scroller:"body",
  
    start:"top 100%",
}

    
})

gsap.from("footer .left h3, .left p",{
    y:50,
    opacity:0,
    scale:.1,
    duration:1,
    stagger:.2,
    scrollTrigger:{
        trigger:" footer .left h3, .left p",
        scroller:"body",
       
        start:"top 100%",
    }
    
     
 })










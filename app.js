const loader = function(){
    var tl = gsap.timeline()
    tl.to(".white1",{
        top:"-100%",
        duration:1,
        delay:1
    },"anim")
    tl.from(".white1 h1",{
        scale:0,
        delay:.2,
        duration:0.8
    },"anim")
    tl.from(".white2",{
        top:"100%",
        duration:.8,
        delay:.4,
    },"anim2")
    tl.from(".white2 h1",{
        right:"100%",
        delay:0,
        duration:1.4
    },"anime2")
   tl.to(".loader",{
    delay:.3,
    display:"none",
    opacity:0
   },"anim3")
   tl.from(".navbar",{
    top:"-10%",
    delay:.3,
    duration:.7
    },"anim3")
}
loader()

const scroll = new LocomotiveScroll({
    el: document.querySelector('[data-scroll-container]'),
    smooth: true
});

const navbar_behaviour = function(){
    let lastScrollPosition = scroll.scroll.instance.scroll.y ;
    const navbar = document.getElementById("navbar");
    scroll.on("scroll", (scrollArgs) => {
        const currentScrollPosition = scrollArgs.scroll.y;
        if (currentScrollPosition > lastScrollPosition) {
            gsap.to(navbar, { top: "-80px", duration: 0.2, ease: "power2.out" });
        } else {
            gsap.to(navbar, { top: "0px", duration: 0.5, ease: "power2.out" });
        }
        lastScrollPosition = currentScrollPosition;
    });
}
navbar_behaviour();









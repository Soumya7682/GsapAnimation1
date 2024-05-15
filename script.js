gsap.to("#box",{
    x:1000,//move x axis 1000px
    duration:1,
    delay:1,
    rotate:360,
    backgroundColor:"white",
    borderRadius:"50%",
    repeat:-1,
        yoyo:true,
    scale:0.5
    })
    gsap.from("#box2",{
        x:1000,
       // y:500,
        duration:1,
        delay:1,
        rotate:360,
        backgroundColor:"violet",
        borderRadius:"50%",
        repeat:-1,
        yoyo:true,
        scale:0.5
    
        })
    
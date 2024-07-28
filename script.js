var main = document.querySelector("#page1");
var cursor = document.querySelector("#cursor");
var img = document.querySelector("img");

page1.addEventListener("mousemove",function(dets){
    cursor.style.left = `${dets.x +20}px`
    cursor.style.top = `${dets.y +20}px`
})
img.addEventListener("mouseenter",function(dets){
    cursor.style.scale = 3
})
img.addEventListener("mouseleave",function(dets){
    cursor.style.scale = 1
})

var t1 = gsap.timeline()

t1.from("#page3 img",{
    y: -30,
    opacity:0,
    delay: 0.5,
    
})
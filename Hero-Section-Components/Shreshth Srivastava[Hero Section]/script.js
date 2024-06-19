var tl = gsap.timeline()

tl.from('.block-1',{
    y: -300,
    duration: .75,
    opacity: 0
}, 'a');

tl.from('.block-2',{
    y: 300,
    duration: .75,
    opacity: 0
}, 'a');

tl.from('.Title',{
    duration: .75,
    opacity: 0
});

tl.from('.Images',{
    duration: .75,
    opacity: 0
});
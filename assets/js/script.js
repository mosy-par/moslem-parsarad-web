var typed = new Typed('#typed', {
    strings: [
        "FullStack Developer",
        "Designer",
        "Programmer",
        "Web Designer"
    ],
    loop: true,
    typeSpeed: 50,
    backSpeed: 50
});

$('.hamburger-menu button').click(()=>{
    $('.header .navigation-bar').fadeToggle(400)
})

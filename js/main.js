window.addEventListener('scroll', function(){
    if (window.scrollY > 150) {
        document.querySelector('#navbar-wrapper').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar-wrapper').style.opacity = 1;
    }
});

$('#navbar a, .btn').on('click', function(event) {
    if (this.hash != '') {
        event.preventDefault();

        const hash = this.hash;

        $('html, body').animate(
            {
                scrollTop: $(hash).offset().top - 60
            },
            800
        );
    }
});

window.addEventListener('scroll', function(){
    if (window.scrollY > 150) {
        document.querySelector('#navbar-wrapper').style.opacity = 0.9;
    } else {
        document.querySelector('#navbar-wrapper').style.opacity = 1;
    }
});
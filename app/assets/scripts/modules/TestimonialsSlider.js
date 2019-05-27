import $ from 'jquery';

class TestimonialsSlide{
    constructor(){
        this.slide=$(".slide");
        this.person=$(".testimonials__person");
        this.dots=$(".testimonials__dot");
        this.nextSlideBtn=$(".testimonials__arrows-right-arrow");
        this.prevSlideBtn=$(".testimonials__arrows-left-arrow");
        this.showFirstSlideInitially();
        this.autoSwitch();
        this.events();
    }

    showFirstSlideInitially(){
        this.slide.first().addClass('active');
        this.slide.hide();
        this.slide.each(function(){
            if ($(this).hasClass('active')) {
                $(this).show();
            }
        });

        this.person.first().addClass('active');
        this.person.hide();
        this.person.each(function(){
            if ($(this).hasClass('active')) {
                $(this).show();
            }
        });
    }

    events(){
        // this.autoSwitch();
        this.nextSlideBtn.click(this.nextSlide.bind(this));
        this.prevSlideBtn.click(this.prevSlide.bind(this));
    }
    
    autoSwitch(){
        setInterval(this.nextSlide.bind(this), 4000);
    }

    nextSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':last-child') && $(".testimonials__person").is(':last-child')) {
            $('.slide').first().addClass('active');
            $('.testimonials__person').first().addClass('active');
        } else {
            $('.oldActive').next().addClass('active');
        }
        this.showHideSlide();

    }

    prevSlide(){
        $('.active').removeClass('active').addClass('oldActive');
        if ($('.oldActive').is(':first-child')) {
            $('.slide').last().addClass('active');
            $('.testimonials__person').last().addClass('active');
        } else {
            $('.oldActive').prev().addClass('active');
        }
        this.showHideSlide();
    }

    showHideSlide(){
        $('.oldActive').removeClass('oldActive');
        $('.slide').hide();
        $('.testimonials__person').hide();
        $('.active').fadeIn(900);
    }

}

export default TestimonialsSlide;
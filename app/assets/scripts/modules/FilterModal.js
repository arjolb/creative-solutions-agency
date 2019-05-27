import $ from 'jquery';

class ProjectsModal{
    constructor(){
        this.btnCategories=$(".our-works__btn-categories h3");
        this.projects=$(".our-works__images li");
        this.activeCategory="our-works__btn-categories-active";
        this.linksPreventDefault=$(".our-works__images a");
        this.events();
    }

    events(){
        var that=this;
        this.btnCategories.first().addClass(this.activeCategory);
        this.btnCategories.click(function(){
            if (that.btnCategories.hasClass(that.activeCategory)) {
                that.btnCategories.removeClass(that.activeCategory);
                $(this).addClass(that.activeCategory);
            }
                let category = $(this).text().toLowerCase();
                if (category=='all') {
                 that.projects.fadeIn('slow');
             } else {
                 that.projects.each(function(){
                     if (!$(this).hasClass(category)) {
                         $(this).hide();
                     } else {
                         $(this).fadeIn('slow');
                     }
                 });
             }
        });

        this.linksPreventDefault.click(function(e){
            e.preventDefault();
        });

        this.projects.mouseover(function () { 
            let category=$(this).data('category');
            $(this).append('<div class="our-works__images-overlay">\
            <div class="our-works__images-overlay--zoom">\
                <img src="assets/images/icons/zoom.svg">\
            </div>\
            <div class="our-works__images-overlay--title">'+'<h3>'+category+'</h3>'+'</div></div>');
        });

        this.projects.mouseleave(function(){
           $('.our-works__images-overlay').css({
               "display":"none",
               "visibility":"hidden",
               "opacity":"0"
           });
        });
    }

}

export default ProjectsModal;
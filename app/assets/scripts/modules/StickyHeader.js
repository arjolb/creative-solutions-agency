import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';
import smoothScroll from "jquery-smooth-scroll";

class StickyHeader{
    constructor(){
    this.siteHeader=$(".site-header");
    this.triggerElement=$(".hero-section__title");
    this.pageSections=$(".page-section");
    this.headerLinks=$(".site-header__nav a");
    this.lazyImages=$(".lazyload");
    this.createHeaderWayPoint();
    this.createPageSectionsWayPoints(); 
    this.addSmothScrolling();
    this.fixWaypoints();
    }

    fixWaypoints(){
        this.lazyImages.on('load',function(){
            Waypoint.refreshAll();
        });
    }

    addSmothScrolling(){
        this.headerLinks.smoothScroll();
    }

    createHeaderWayPoint(){
        var that=this;
        new Waypoint({
            element: this.triggerElement[0],
            handler: function (direction) { 
                if (direction=='down') {
                    that.siteHeader.addClass("site-header--dark");
                } else {
                    that.siteHeader.removeClass("site-header--dark");
                }
             }
        });
    }

    createPageSectionsWayPoints(){
        var that=this;
        this.pageSections.each(function(){
            var currentPageSection=this;
            new Waypoint({
                element: currentPageSection,
                handler: function(direction){
                    if (direction=="down") {
                        var dataLink=currentPageSection.getAttribute('data-link');
                        that.headerLinks.removeClass("is-current-link");
                        $(dataLink).addClass("is-current-link");
                    }
                },
                offset:"35%"
            });

            new Waypoint({
                element: currentPageSection,
                handler: function(direction){
                    if (direction=="up") {
                        var dataLink=currentPageSection.getAttribute('data-link');
                        that.headerLinks.removeClass("is-current-link");
                        $(dataLink).addClass("is-current-link");
                    }
                },
                offset:"-40%"
            });

        });
    }
}

export default StickyHeader;
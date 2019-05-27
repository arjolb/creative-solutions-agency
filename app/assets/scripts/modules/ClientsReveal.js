import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';

class ClientsReveal{
    constructor(){
    this.clients=$(".clients");
    this.clientsText=$(".clients__text");
    this.hideInitially();
    this.createClientsWayPoint();
    this.createClientsTextWayPoints();
}
    hideInitially(){
        this.clients.addClass("reveal-item--clients");
        this.clientsText.addClass("reveal-item--clients");
    }

    createClientsWayPoint(){
        this.clients.each(function(){
            var currentItem=this;
            new Waypoint({
                element: currentItem,
                offset: "90%",
                handler: function () {
                    $(currentItem).addClass("reveal-item--clients--is-visible");
                }
            });
        });
    }

    createClientsTextWayPoints(){
        this.clientsText.each(function(){
            var currentItem=this;
            new Waypoint({
                element: currentItem,
                offset: "90%",
                handler: function () {
                    $(currentItem).addClass("reveal-item--clients--is-visible");
                }
            });
        });
    }

}

export default ClientsReveal;
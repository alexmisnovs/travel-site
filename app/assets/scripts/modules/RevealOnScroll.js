import $ from 'jquery';
import waypoints from '../../../../node_modules/waypoints/lib/noframework.waypoints';


class RevealOnScroll {

    // to make reusable need to pass params:
    // first: items to target for example .testimonials
    // Second: offset for new Waypoint
   
    constructor(className, offset){
       // this.itemsToReveal = $('.feature-item');
        this.itemsToReveal = $(className);
        this.offsetPercentage = offset;
        this.hideInitially();
        // the old way of doing things for me would be to pass data into the function
        // this.createWaypoints(offsetData);
       this.createWaypoints();
    }

    hideInitially(){
        this.itemsToReveal.addClass("reveal-item");
    }

    createWaypoints(){
    // Another way of doing it would be something like this: with that or any other variable.
    // without passing the data though the function parameters, though it is confusing to me
    var that = this;

        this.itemsToReveal.each(function(){
            var currentItem = this;
            new Waypoint({
                element: currentItem,
                handler: function(){
                    $(currentItem).addClass("reveal-item--is-visible");
                },
                // since we assigned current object to variable that, we can use it just like variable this.
                offset: that.offsetPercentage
            });
        });
    }

}

export default RevealOnScroll;
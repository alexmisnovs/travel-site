//var $ = require('jquery');
import $ from 'jquery';

class MobileMenu {

    constructor(){
        //console.log('hi from mobile menu');
        /** a bad example.. Spagetti way of coding Jquery.. 
         $('.site-header__menu-icon').click(function(){
            console.log('Top menu was clicked');
         });
         **/
        this.siteHeader = $('.site-header');
        this.menuContent = $('.site-header__menu-content');
        this.menuIcon = $('.site-header__menu-icon');
        this.events();
    }

    events(){
        //list all events we want to watch for in this case - Click.
        this.menuIcon.click(this.toggleTheMenu.bind(this));
      
    }
    toggleTheMenu(){
        
        this.menuContent.toggleClass("site-header__menu-content--is-visible");
        this.siteHeader.toggleClass("site-header--is-expanded");
        this.menuIcon.toggleClass("site-header__menu-icon--close-x");
    }

}

export default MobileMenu;

//People = require('./modules/Person'); old way of importing the module
//import {Person, Adult} from './modules/Person';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';

var mobileMenu = new MobileMenu();
var revealOnScrollFeatures = new RevealOnScroll(".feature-item", "85%");
var revealOnScrollTestimonials = new RevealOnScroll(".testimonial", "65%");

//People = require('./modules/Person'); old way of importing the module
//import {Person, Adult} from './modules/Person';
import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from './modules/RevealOnScroll';
import StickyHeader from './modules/StickyHeader';
import Modal from './modules/Modal';

var mobileMenu = new MobileMenu();
var revealOnScrollFeatures = new RevealOnScroll(".feature-item", "85%");
var revealOnScrollTestimonials = new RevealOnScroll(".testimonial", "65%");
var stickyHeader = new StickyHeader();
var modal = new Modal();
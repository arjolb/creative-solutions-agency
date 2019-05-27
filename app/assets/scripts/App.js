import MobileMenu from './modules/MobileMenu';
import RevealOnScroll from "./modules/RevealOnScroll";
import ClientsReveal from './modules/ClientsReveal';
import StickyHeader from './modules/StickyHeader';
import FilterModal from './modules/FilterModal';
import ContactModal from './modules/ContactModal';
import TestimonialsSlider from './modules/TestimonialsSlider';
import $ from 'jquery';
import lightbox2 from 'lightbox2/dist/js/lightbox-plus-jquery';

var mobileMenu=new MobileMenu();
var revealOnScroll=new RevealOnScroll($(".services__item"),"80%");
var revealOnScroll=new RevealOnScroll($(".team"),"90%");
var clientsReveal=new ClientsReveal();
var stickyHeader=new StickyHeader();
var filterModal=new FilterModal();
var contactModal=new ContactModal();
var testimonialsSlider=new TestimonialsSlider();
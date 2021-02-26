// IMPORTS
// Nav
import { navScroll } from './components/nav-bar.js'
import { ham } from './components/hamburger.js'
// Hero
// About
import { ProgressBar } from './components/Progress-bar.js'
import { leftProgressBar } from './data/progress-bars.js'
import { rightProgressBar } from './data/progress-bars.js'
// Services
import { services } from './components/services/services.js'
import { Services } from './components/services/ServicesOop.js'
import { topServices } from './data/servicesData.js'
import { bottomServices } from './data/servicesData.js'

// Statistics
import { Statistics } from './components/statistics/Statistics.js'
import { statistics } from './data/statistics.js'
import { countUp } from './components/statistics/counter.js'
// Education
import {renderEducationSection} from './components/education.js'
// Available Freelancer
// Work
import { renderWorkSection } from "./components/our-work.js"
// Client
import { owlKarousel } from './components/testimonials-carousel.js';
// Trusted Clients
import { renderImages } from './components/trusted-client-images.js';
// Subscribe
import { forms } from './components/subscribe-form.js';
// Blog
import { blogData } from './data/blogData.js'
import { renderBlog } from './components/renderBlog.js'
import { carousel } from './components/carousel.js'
// Contact
import { contactValidation } from './components/contactValidation.js'
// Footer
import { renderSocials } from './components/renderSocials.js'
import { socialsData } from './data/socialsData.js'
import { backToTop } from './components/backToTop.js'
// EXECUTION
// Nav
ham();
navScroll();
// Hero
particlesJS.load('particles-js', 'particles.json', function () { });
renderSocials('.hero-socials', socialsData)
// About
new ProgressBar('.left-progress', leftProgressBar)
new ProgressBar('.right-progress', rightProgressBar)
// Services
services(topServices)
services(bottomServices)
// new Services('.top-services', topServices)
// new Services('.bottom-services', bottomServices)

// Statistics
new Statistics(".counter", statistics)
countUp()
// Education
renderEducationSection()
// Available Freelancer
// Work
// import { renderWorkSection } from "./components/our-work.js"

renderWorkSection();
// Client
owlKarousel();
// Trusted Clients
renderImages();
// // Subscribe
forms();
// Blog
renderBlog(blogData);
carousel();
// Contact
contactValidation('.form');
// Footer
renderSocials('.socials', socialsData);
backToTop();
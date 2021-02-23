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
import { Services } from './components/Services.js'
import { topServices } from './data/services.js'
import { bottomServices } from './data/services.js'

// Statistics
// Education
// Available Freelancer
// Work
// Client
// Trusted Clients
// Subscribe
import { forms } from './components/subscribe-form.js';
// Blog
import { carousel } from './components/carousel.js'
import {renderBlog} from './components/renderBlog.js'
import {blogData} from './data/blogData.js'
// Contact
import { contactValidation } from './components/contactValidation.js'
// Footer
import { renderSocials } from './components/renderSocials.js'
import { socialsData } from './data/socialsData.js'
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
new Services('.top-services', topServices)
new Services('.bottom-services', bottomServices)

// Statistics
// Education
// Available Freelancer
// Work
import { renderWorkSection } from "./components/our-work.js"
import { owlKarouel } from './components/testimonials-carousel.js'



renderWorkSection();

// Client
owlKarouel();
// Trusted Clients
// // Subscribe
forms();
// Blog
carousel();
renderBlog(blogData);
// Contact
contactValidation('.form')
// Footer
renderSocials('.socials', socialsData)
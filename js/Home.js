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
import { Statistics } from './components/Statistics.js'
import { statistics } from './data/statistics.js'
// Education
// Available Freelancer
// Work
// Client
// Trusted Clients
// Subscribe
import { SubForm } from './components/subscribe-form.js'
// Blog
import { carousel } from './components/carousel.js'
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
new Statistics(".counter", statistics)
// Education
// Available Freelancer
// Work
import { renderWorkSection } from "./components/our-work.js"



renderWorkSection();

// Client
// Trusted Clients
// Subscribe
new SubForm('.sub-form');
// Blog
carousel();
// Contact
contactValidation('.form')
// Footer
renderSocials('.socials', socialsData)
// IMPORTS
// Nav
import { navScroll } from './components/nav-bar.js'
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
import { SubForm } from './components/subscribe-form.js'
// Blog
import { carousel } from './components/carousel.js'
// Contact
// Footer
// EXECUTION
// Nav
navScroll();
// Hero
particlesJS.load('particles-js', 'particles.json', function () { });
// About
new ProgressBar('.left-progress', leftProgressBar)
new ProgressBar('.right-progress', rightProgressBar)
// Services
new Services('.top-services', topServices)
console.log('labas');
// Statistics
// Education
// Available Freelancer
// Work
// Client
// Trusted Clients
// Subscribe
new SubForm('.sub-form');
// Blog
carousel();
// Contact
// Footer
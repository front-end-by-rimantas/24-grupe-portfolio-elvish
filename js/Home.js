// IMPORTS
// Nav
// Hero
// About
import { ProgressBar } from './components/Progress-bar.js'
import { leftProgressBar } from './data/progress-bars.js'
import { rightProgressBar } from './data/progress-bars.js'
// Services
// Statistics
// Education
// Available Freelancer
// Work
// Client
// Trusted Clients
// Subscribe
// Blog
import {carousel} from './components/carousel.js'
// Contact
// Footer
// EXECUTION
// Nav
import { navScroll } from './components/nav-bar.js'
navScroll();
// Hero
// About
new ProgressBar('.left-progress', leftProgressBar)
new ProgressBar('.right-progress', rightProgressBar)
// Services
// Statistics
// Education
// Available Freelancer
// Work
// Client
// Trusted Clients
// Subscribe
// Blog
carousel();
// Contact
// Footer
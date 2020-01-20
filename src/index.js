// SCSS bundling
import "./main.scss";

// JavaScript bundling
import CarouselTestimonial from "./javascript/components/carousel-testimonial";
import CarouselProfiles from "./javascript/components/carousel-profiles";

const carouselTestimonial = new CarouselTestimonial(
  "carousel-testimonial",
  "carousel-testimonial__testimonial-profile",
  "carousel-testimonial__icon",
  "carousel-testimonial__testimonial-profile--active"
);

const carouselProfiles = new CarouselProfiles(
  "home-carousel-profiles",
  "carousel-profiles__slider",
  "carousel-profiles__profile"
);

carouselTestimonial.init();
carouselProfiles.init();

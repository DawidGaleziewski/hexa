// SCSS bundling
import "./main.scss";

// JavaScript bundling
import CarouselTestimonial from "./javascript/components/carousel-testimonial";

const carouselTestimonial = new CarouselTestimonial(
  "carousel-testimonial",
  "carousel-testimonial__testimonial-profile",
  "carousel-testimonial__icon",
  "carousel-testimonial__testimonial-profile--active"
);

carouselTestimonial.init();

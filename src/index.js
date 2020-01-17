// SCSS bundling
import "./main.scss";

// JavaScript bundling

const carouselDOM = document.getElementById("carousel-testimonial");

const carouselTestimonial = UICarousel => {
  UICarousel.addEventListener("click", e => {
    const profiles = Array.from(
      UICarousel.querySelectorAll(".carousel-testimonial__testimonial-profile")
    );

    profiles.forEach(profile => {
      profile.classList.remove(
        "carousel-testimonial__testimonial-profile--active"
      );
    });

    const targetProfile = e.target.parentElement.parentElement.parentElement;

    targetProfile.classList.add(
      "carousel-testimonial__testimonial-profile--active"
    );
  });
};

carouselTestimonial(carouselDOM);

console.log(carouselDOM);

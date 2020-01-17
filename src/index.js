// SCSS bundling
import "./main.scss";

// JavaScript bundling

const carouselDOM = document.getElementById("carousel-testimonial");

const carouselTestimonial = UICarousel => {
  UICarousel.addEventListener("click", e => {
    const profiles = UICarousel.querySelectorAll(
      ".carousel-testimonial__testimonial-profile"
    );

    profiles.forEach(profile => {
      if (
        profile.classList.contains(
          ".carousel-testimonial__testimonial-profile--active"
        )
      ) {
        profile.classList.remove(
          ".carousel-testimonial__testimonial-profile--active"
        );
      }
    });

    const targetProfile = e.target.parentElement.parentElement;
    console.log(targetProfile);
  });
};

carouselTestimonial(carouselDOM);

console.log(carouselDOM);

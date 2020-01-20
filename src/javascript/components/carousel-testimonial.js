class CarouselTestimonial {
  constructor(
    carouselSelectorID,
    singleProfileQuerySelector,
    iconQuerySelector,
    activeProfileClass
  ) {
    // DOM selectors
    this.carouselSelectorID = carouselSelectorID;
    this.singleProfileQuerySelector = singleProfileQuerySelector;
    this.iconQuerySelector = iconQuerySelector;

    // DOM elements
    this.DOMcarousel = document.getElementById(this.carouselSelectorID);
    this.DOMProfiles = document.getElementsByClassName(
      singleProfileQuerySelector
    );
    this.activeProfileClass = activeProfileClass;
  }

  onClickHandler() {
    this.DOMcarousel.addEventListener("click", e => {
      if (e.target.parentElement.classList.contains(this.iconQuerySelector)) {
        Array.from(this.DOMProfiles).forEach(profile => {
          if (profile.classList.contains(this.activeProfileClass)) {
            profile.classList.remove(this.activeProfileClass);
          }
        });
        e.target.parentElement.parentElement.parentElement.classList.add(
          this.activeProfileClass
        );
      }
    });
  }

  init() {
    this.onClickHandler();
  }
}

export default CarouselTestimonial;

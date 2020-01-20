class CarouselProfiles {
  constructor(carouselID, sliderClassName, singleProfileClassName) {
    this.carouselID = carouselID;
    this.sliderClassName = sliderClassName;
    this.singleProfileClassName = singleProfileClassName;

    // DOM elements
    this.DOMcarousel = document.getElementById(this.carouselID);
    this.DOMslider = this.DOMcarousel.getElementsByClassName(
      this.sliderClassName
    );
    this.DOMProfiles = this.DOMcarousel.getElementsByClassName(
      this.singleProfileClassName
    );
  }

  positionProfilesAbsolute() {
    Array.from(this.DOMProfiles).forEach((profile, index) => {
      profile.style.left = `${profile.offsetWidth * index}px`;
      console.log(profile.offsetWidth);
    });
  }

  moveNext() {
    console.log(this.DOMslider);
    this.DOMslider[0].style.transform = "translateX(-500px)";
  }

  init() {
    this.positionProfilesAbsolute();
    // this.moveNext();
  }
}

export default CarouselProfiles;

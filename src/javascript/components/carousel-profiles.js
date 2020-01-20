class CarouselProfiles {
  constructor(
    carouselID,
    sliderClassName,
    singleProfileClassName,
    btnPreviousClassSelector,
    btnNextClassSelector
  ) {
    //  Input
    this.carouselID = carouselID;
    this.sliderClassName = sliderClassName;
    this.singleProfileClassName = singleProfileClassName;
    this.btnPreviousClassSelector = btnPreviousClassSelector;
    this.btnNextClassSelector = btnNextClassSelector;

    // DOM elements
    this.DOMcarousel = document.getElementById(this.carouselID);
    this.DOMslider = this.DOMcarousel.getElementsByClassName(
      this.sliderClassName
    );
    this.DOMProfiles = this.DOMcarousel.getElementsByClassName(
      this.singleProfileClassName
    );
    this.DOMBtnPrevious = this.DOMcarousel.getElementsByClassName(
      this.btnPreviousClassSelector
    );
    this.DOMBtnNext = this.DOMcarousel.getElementsByClassName(
      this.btnNextClassSelector
    );

    // App state
    this.translateXState = 0;

    // utils
    this.profileWidth = this.DOMProfiles[0].offsetWidth;
  }

  positionProfilesAbsolute() {
    Array.from(this.DOMProfiles).forEach((profile, index) => {
      profile.style.left = `${profile.offsetWidth * index}px`;
    });
  }

  movePreviousHandler() {
    this.DOMBtnPrevious[0].addEventListener("click", () => {
      if (this.translateXState - this.profileWidth <= 0) {
        this.translateXState += this.profileWidth;
        this.DOMslider[0].style.transform = `translateX(${this.translateXState}px)`;
      }
    });
  }

  moveNextHandler() {
    this.DOMBtnNext[0].addEventListener("click", () => {
      this.translateXState -= this.profileWidth;
      this.DOMslider[0].style.transform = `translateX(${this.translateXState}px)`;
    });
  }

  init() {
    this.positionProfilesAbsolute();
    this.movePreviousHandler();
    this.moveNextHandler();
  }
}

export default CarouselProfiles;

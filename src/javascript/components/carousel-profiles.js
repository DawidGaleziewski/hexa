/** Class creating logic for carousels */
class CarouselProfiles {
  /**
   *
   * @param {string} carouselID - id by which a carousel will be selected
   * @param {string} sliderClassName - class name by which a carousel will be selected
   * @param {string} singleProfileClassName - a single profile element class name - used to position the sildes in the slider
   * @param {string} btnPreviousClassSelector - element that will be used as previous button
   * @param {string} btnNextClassSelector - element that will be used as a next button
   */
  constructor(
    carouselID,
    sliderClassName,
    singleProfileClassName,
    btnPreviousClassSelector,
    btnNextClassSelector
  ) {
    //  params required by constructor
    this.carouselID = carouselID;
    this.sliderClassName = sliderClassName;
    this.singleProfileClassName = singleProfileClassName;
    this.btnPreviousClassSelector = btnPreviousClassSelector;
    this.btnNextClassSelector = btnNextClassSelector;

    // DOM elements created using selectors provided
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
    this.translateXState = 0; // Current slider transform property

    // Utils
    this.profileWidth = this.DOMProfiles[0].offsetWidth;
  }

  /**
   * Positions profiles ansolute in the silder
   */
  positionProfilesAbsolute() {
    Array.from(this.DOMProfiles).forEach((profile, index) => {
      profile.style.left = `${profile.offsetWidth * index}px`;
    });
  }

  /**
   * Listens on the previous button for a click and moves the slider to the left
   */
  movePreviousHandler() {
    this.DOMBtnPrevious[0].addEventListener("click", () => {
      if (this.translateXState - this.profileWidth <= 0) {
        this.translateXState += this.profileWidth;
        this.DOMslider[0].style.transform = `translateX(${this.translateXState}px)`;
      }
    });
  }

  /**
   * Listens on the previous button for a click and moves the slider to the right
   */
  moveNextHandler() {
    this.DOMBtnNext[0].addEventListener("click", () => {
      if (
        this.translateXState - this.profileWidth >=
        this.profileWidth * (this.DOMProfiles.length - 1) * -1
      ) {
        this.translateXState -= this.profileWidth;
        this.DOMslider[0].style.transform = `translateX(${this.translateXState}px)`;
      }
    });
  }

  /**
   * Bootstraps all the functions required by the carousel
   */
  init() {
    this.positionProfilesAbsolute();
    this.movePreviousHandler();
    this.moveNextHandler();
  }
}

export default CarouselProfiles;

class CarouselTestimonial {
  constructor(carouselSelectorID, singleProfileQuerySelector) {
    this.carouselSelectorID = carouselSelectorID;
    this.singleProfileQuerySelector = singleProfileQuerySelector;
  }

  showID() {
    console.log(this.carouselSelectorID);
  }
}

export default CarouselTestimonial;

const objectTest = {
  name: "test",
  surname: "test2"
};

const { name, surname } = objectTest;

console.log(name, surname);

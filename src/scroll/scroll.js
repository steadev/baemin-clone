export class Scroll {

  constructor(scrollClass, pages) {
    this._scrollElem = document.querySelector(`.${scrollClass}`);
    this._scrollPagesCount = pages;
  }

  addSectionScrollEvent() {
    this._scrollElem.addEventListener('scroll', (event) => {
      console.log('scroll');
    });
  }
}
import { Scroll } from './scroll/scroll.js';
import { Section } from './sections/section.js';

const app = () => {
    const scroll = new Scroll('app', 8);
    scroll.addSectionScrollEvent();
    const section = new Section('header');
    section.drawBase();
    section.drawHeaderContent();
    const mainPageCount = 6;
    for (let i = 0; i < mainPageCount; i++) {
        section.drawMainContent(i);
    }
    section.drawFooterContent();
}

document.addEventListener("DOMContentLoaded", () => {
    app();
});
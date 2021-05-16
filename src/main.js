import { Section } from './sections/section.js';

const app = () => {
    console.log('start');
    const section = new Section('header');
    section.drawBase();
    section.drawSection('header');
    const mainPageCount = 6;
    for (let i = 0; i < mainPageCount; i++) {
        section.drawSection('main', i);
    }
    section.drawSection('footer');
}

document.addEventListener("DOMContentLoaded", () => {
    app();
});
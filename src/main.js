import { Section } from './sections/section.js';

const app = () => {
    console.log('start');
    const section = new Section('header');
    section.drawBase();
    section.drawSection('header');
}

document.addEventListener("DOMContentLoaded", () => {
    app();
});
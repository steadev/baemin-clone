import { Section } from './sections/section.js';

const app = () => {
    console.log('start');
    const section = new Section('header');
}

document.addEventListener("DOMContentLoaded", () => {
    app();
});
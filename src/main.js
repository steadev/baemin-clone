import { Section } from './sections/section.js';

const app = () => {
    console.log('start');
    const section = new Section(1);
}

document.addEventListener("DOMContentLoaded", () => {
    app();
});
export class Section {
    constructor() { }
    appElem = document.querySelector('.app');

    createSection(type, page) {
        this.drawSection(type, page)
    }

    /**
     * type: 'header' | 'main' | 'footer'
     * page: 0 ~ 5
     */
    drawSection(type, page) {
        switch (type) {
            case 'header':
                this.drawHeaderContent();
                break;
            case 'main':
                this.drawMainContent(page);
                break;
            case 'footer':
                this.drawFooterContent();
                break;
            default:
                console.error(`ERROR: There is no section type - ${type}`);
        }
    }

    drawBase() {
        const html = `
        <div class="header">
            <img src="assets/images/logo.png">
        </div>
        <div class="footer">
            <img src="assets/images/scroll.png">
        </div>
        `;
        this.appElem.innerHTML = html;
    }

    drawHeaderContent() {
        const html = `
        <div class="header-content">
        </div>
        `;
        this.appElem.innerHTML += html;
    }

    drawFooterContent() {

    }

    drawMainContent(page) {

    }
}
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
            <img class="logo" src="assets/images/logo.png">
        </div>
        <div class="footer">
            <img src="assets/images/scroll.png">
        </div>
        `;
        this.appElem.innerHTML = html;
    }

    drawHeaderContent() {
        const html = `
        <div class="header-content-container content-container">
            <div class="header-content">
                <div class="title">
                    <img class="title-image" src="assets/images/header-content-text.png">
                </div>
                <div class="incruit-button">
                    <img class="incruit-button-image" src="assets/images/btn-rider.png">
                </div>
                <div class="app-download-button">
                    <img class="app-download-button-image" src="assets/images/btn-down-app.png">
                </div>
            </div>
        </div>
        `;
        this.appElem.innerHTML += html;
    }

    drawFooterContent() {

    }

    drawMainContent(page) {

    }
}
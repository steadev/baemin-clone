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
            <div class="header-content content">
                <div class="header-title">
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
        const html = `
        <div class="header-content-container content-container">
            <div class="footer-content content">
                <div class="main-title">
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

    drawMainContent(page) {
        const contentText = `main-text-${page + 1}.png`;
        const html = `
        <div class="main-content-container content-container">
            <div class="main-content content">
                <div class="main-title">
                    <img class="title-image" src="assets/images/${contentText}">
                </div>
                <div class="title-desc">
                    3천만 이상이 선택한 배달의민족,
                    <br>
                    업계 최다 배달가능 업소 보유 중!
                    <div class="title-sub-desc">
                    (2017년 11월 기준)
                    </div>
                </div>
                ${this.drawMainContentImage(page)}
            </div>
        </div>
        `;
        this.appElem.innerHTML += html;
    }

    drawMainContentImage(page) {
        switch (page) {
            case 0:
                return `
                <div class="animation">
                    <div class="road">
                        <img src="assets/images/road.png">
                    </div>
                    <div class="bike move-bike">
                        <img src="assets/images/bike.png">
                    </div>
                </div>`;
            case 1:
                return `
                <div class="animation people move-people">
                    <img src="assets/images/people.png">
                </div>`;
            case 2:
                return `
                <div class="animation present move-present">
                    <img src="assets/images/present.png">
                </div>`;
            case 3:
                return `
                <div class="animation shopping move-shopping">
                    <img src="assets/images/shoppinglive.png">
                </div>`;
            case 4:
                return `
                <div class="animation bmart-rider move-bmart-rider">
                    <img src="assets/images/bmart-rider.png">
                </div>`;
            case 5:
                return `
                <div class="animation flag move-flag">
                    <img src="assets/images/flag.png">
                </div>`;
        }
    }
}
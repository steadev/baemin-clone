export class Section {
    constructor(type, page = 0) {
        this.createSection(type, page);
    }

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
                this.drawHeader();
                break;
            case 'main':
                this.drawMain(page);
                break;
            case 'footer':
                this.drawFooter();
                break;
            default:
                console.error(`ERROR: There is no section type - ${type}`);
        }
    }

    drawHeader() {

    }

    drawFooter() {

    }

    drawMain(page) {

    }
}
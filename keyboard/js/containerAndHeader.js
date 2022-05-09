import Control from './control.js';

class ContainerAndHeader extends Control {
    constructor(parent) {
        super(parent, 'div', 'container');
        this.title = new Control(this.element, 'h1', 'title');
        this.title.element.innerHTML = 'Virtual Keyboard';
        this.changeLang = new Control(this.element, 'p', 'description');
        this.changeLang.element.innerHTML = 'ALT + CTRL to change the language';
    }
}

const createContainerAndHeader = () => new ContainerAndHeader(document.body);

export default createContainerAndHeader;
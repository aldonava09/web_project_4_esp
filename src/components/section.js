class Section {
    constructor({ items, renderer }, containerSelector) {
      this._items = items;
      this._renderer = renderer;
      this._container = document.querySelector(containerSelector);
    }
  
    addItem(element) {
      this._container.append(element);
    }

    addNewItem(element) {
      this._container.prepend(element);
    }
  
    render() {
      this._items.forEach((item) => {
        const cardElement = this._renderer(item);
        this.addItem(cardElement);
      });
    }

    renderNewItem() {
      this._items.forEach((item) => {
        const cardElement = this._renderer(item);
        this.addNewItem(cardElement);
      });
    }
};

export {Section};
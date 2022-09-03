import FindClothes from "./findClothes";

export class Shirt extends FindClothes {
  constructor(colors, size, mark, category) {
    super(category);
    this.colors = colors;
    this.size = size;
    this.mark = mark;
  }
  FindCategory() {
    return `${super.SearchCategory()}`;
  }
}

export class Shoes extends FindClothes {
  constructor(colors, size, mark, category) {
    super(category);
    this.colors = colors;
    this.size = size;
    this.mark = mark;
  }
}
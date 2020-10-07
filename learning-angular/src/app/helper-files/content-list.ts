import {Content} from './content-interface';

export class ContentList{
  static contentCount = 0;
  private items: Content[];
  constructor(item: Content) {
    this.items[0] = item;
    this.increaseCount();
  }
  increaseCount(): number{
    return ++ContentList.contentCount;
  }
  getContent(): Content[]{
    return this.items;
  }
  getSize(): number{
    return this.items.length;
  }
  getItem(val: number): Content{
    return this.items[val];
  }
}

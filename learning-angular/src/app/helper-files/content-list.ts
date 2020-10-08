import {Content} from './content-interface';

export class ContentList{
  static contentCount = 0;
  private items: Content[];
  constructor(item: Content) {
    // this.items[0] = item;
    this.items = [item];
    this.increaseCount();
  }
  increaseCount(): number{
    return ++ContentList.contentCount;
  }
  getContent(): string{
    return this.items.toString();
  }
  getSize(): number{
    return this.items.length;
  }
  getItem(val: number): Content{
    return this.items[val];
  }
}

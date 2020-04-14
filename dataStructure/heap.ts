//                   89 - 1
//        78 - 2                   45 - 3
//    34  - 4    53 - 5     43 - 6       8 - 7

export class Heap<T> {
  private data: T[];
  private size: number;

  constructor(arr?: T[]) {
    this.data = arr ? [null, ...arr] : [null];
    this.size = this.data.length - 1;

    let i = (this.size / 2) | 0;
    while (i > 0) {
      this.shiftDown(i--);
    }
  }

  private shiftDown(i: number) {
    const size = this.size;
    if (i > size || i < 0) return;

    const data = this.data;

    let max = i;
    while (2 * max <= size) {
      max = 2 * max;
      if (data[max + 1] && data[max] < data[max + 1]) max++;
      if (data[i] >= data[max]) break;

      [data[i], data[max]] = [data[max], data[i]];
      i = max;
    }
  }

  private shiftUp(i: number) {
    const size = this.size;
    if (i > size || i <= 0) return;

    const data = this.data;

    let fl = (i / 2) | 0;
    while (fl > 0 && data[fl] < data[i]) {
      [data[fl], data[i]] = [data[i], data[fl]];
      i = fl;
      fl = (i / 2) | 0;
    }
    console.log(this.data);
  }

  getMax() {
    const size = this.size;
    if (size <= 0) return null;

    const data = this.data;
    const max = data[1];

    data[1] = data[this.size - 1];
    this.shiftDown(1);
    this.size--;

    return max;
  }

  insert(val: T) {
    this.data.push(val);
    this.size++;
    console.log(this.size);

    this.shiftUp(this.size);
  }

  isEmpty() {
    return this.size === 0;
  }
}

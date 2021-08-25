export class IndexHeap<T> {
  private idx: number[];
  private data: T[];
  private count: number;

  private shiftUp(i: number) {
    const count = this.count;
    const idx = this.idx;
    const data = this.data;

    if (i < 0 || i > count) return;

    let f = (i / 2) | 0;
    let j = i;

    while (f > 0) {
      if (data[idx[f]] >= data[idx[j]]) return;

      [idx[f], idx[j]] = [idx[j], idx[f]];
      j = f;
      f = (f / 2) | 0;
    }
  }

  private shiftDown(i: number) {
    const count = this.count;
    const idx = this.idx;
    const data = this.data;

    if (i < 0 || i > count) return;

    let j = i;
    let cl = i * 2;

    while (cl <= count) {
      let max = cl;
      if (idx[cl + 1] && data[idx[cl]] < data[idx[cl + 1]]) {
        max = cl + 1;
      }

      if (data[idx[j]] > data[idx[max]]) {
        return;
      }

      [idx[max], idx[j]] = [idx[j], idx[max]];

      j = max;
      cl = max * 2;
    }
  }

  constructor(arr?: T[]) {
    arr = arr ? arr : [];
    this.idx = [null] as any;
    this.data = arr;
    this.count = arr.length;

    for (let i = 1; i < this.count; i++) {
      this.idx[i] = i;
    }

    for (let i = (this.count / 2) | 0; i > 0; i--) {
      this.shiftDown(i);
    }
  }

  insert(v: T) {
    const idx = ++this.count;

    this.data[idx - 1] = v;
    this.idx[idx] = idx - 1;
    this.shiftUp(idx);
  }

  pop() {
    const v = this.data[this.idx[1]];
    this.idx[1] = this.idx[this.count];
    this.count--;
    this.shiftDown(1);
    return v;
  }

  size() {
    return this.count;
  }
}

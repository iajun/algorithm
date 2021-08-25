class LinkNode<T> {
  public val: T | null;
  public next: LinkNode<T> | null;

  constructor(val: T | null) {
    this.val = val;
    this.next = null;
  }
}

class MyLinkedListWithPresuo<T> {
  private head: LinkNode<T>;
  private size: number;

  constructor() {
    this.head = new LinkNode<T>(null);
    this.size = 0;
  }

  get(idx: number): T | null {
    if (idx < 0 || idx >= this.size) return null;
    let node: LinkNode<T> | null = this.head;
    for (let i = 0; i < idx + 1; i++) {
      node = node!.next;
    }
    return node ? node.val : null;
  }

  addAtHead(val: T) {
    this.addAtIndex(0, val);
  }

  addAtTail(val: T) {
    this.addAtIndex(this.size, val);
  }

  addAtIndex(idx: number, val: T) {
    if (idx > this.size || idx < 0) return;
    if (this.size === 0) return void this.addAtHead(val);
    let node: LinkNode<T> | null = this.head;
    for (let j = 0; j < idx; j++) {
      node = node!.next!;
    }
    const newNode = new LinkNode(val);
    newNode.next = node.next;
    node.next = newNode;
    this.size++;
  }

  deleteAtIndex(idx: number) {
    if (idx >= this.size || idx < 0) return;

    let node = this.head;
    for (let j = 0; j < idx; j++) {
      node = node.next!;
    }
    node.next = node.next!.next;
    this.size--;
  }
}

class DoubleLinkedList<T> {
  public head: LinkNode<T>;
  public tail: LinkNode<T>;
  private size: number;

  constructor() {
    this.head = this.tail = new LinkNode<any>(null);
    this.size = 0;
  }

  addAtIndex(idx: number, val: T) {
    if (idx > this.size || idx < 0) return;
    const newNode = new LinkNode(val);

    let node: LinkNode<T> | null = this.head;
    for (let i = 0; i < idx; i++) {
      node = node!.next;
    }

    newNode.next = node;
    node = newNode;
    this.size++;
  }

  addAtHead(val: T) {
    return void this.addAtIndex(0, val);
  }

  addAtTail(val: T) {
    const newNode = new LinkNode(val);

    this.tail.next = newNode;
    this.tail = newNode;
    this.size++;
  }

  deleteAtIndex(idx: number) {
    if (idx < 0 || idx >= this.size) return;

    let node = this.head;
    for (let i = 0; i < idx - 1; i++) {
      node = node.next!;
    }
    node.next = node.next!.next;
    if (idx === this.size - 1) {
      this.tail = node;
    }
    this.size--;
  }
}

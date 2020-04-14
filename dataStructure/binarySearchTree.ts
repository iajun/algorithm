/**
 * A tree
 *
 * each parent node should be greater than its left child node
 *
 * each parent node should be less than its right child node
 *
 */

enum Order {
  OrderPreOrder,
  OrderInOrder,
  OrderPostOrder,
}

export class BinarySearchTreeNode<K, V> {
  public key: K;
  public value: V;
  public left: BinarySearchTreeNode<K, V>;
  public right: BinarySearchTreeNode<K, V>;
  public count: number;
  public subNodeCount: number;

  constructor(key: K, value: V) {
    this.key = key;
    this.value = value;
    this.left = this.right = null;
    this.count = 1;
    this.subNodeCount = 0;
  }
}

export class BinarySearchTree<K, V> {
  private root: BinarySearchTreeNode<K, V>;
  private count: number;

  private __insertAtNode(node: BinarySearchTreeNode<K, V>, key: K, value: V) {
    if (!node) {
      return new BinarySearchTreeNode(key, value);
    }

    node.subNodeCount++;

    if (node.key > key) {
      node.left = this.__insertAtNode(node.left, key, value);
    } else if (node.key < key) {
      node.right = this.__insertAtNode(node.right, key, value);
    } else {
      node.count++;
      node.subNodeCount--;
    }

    return node;
  }

  private __contain(node: BinarySearchTreeNode<K, V>, key: K) {
    if (!node) {
      return false;
    }
    if (node.key > key) {
      return this.__contain(node.left, key);
    } else if (node.key < key) {
      return this.__contain(node.right, key);
    } else {
      return true;
    }
  }

  private __search(node: BinarySearchTreeNode<K, V>, key: K) {
    if (!node) {
      return null;
    }
    if (node.key > key) {
      return this.__search(node.left, key);
    } else if (node.key < key) {
      return this.__search(node.right, key);
    } else {
      return node.value;
    }
  }

  private __traversePreOrder(
    node: BinarySearchTreeNode<K, V>,
    cb: (value: V, key: K, count: number) => any
  ) {
    if (node === null) return;

    cb(node.value, node.key, node.count);
    this.__traversePreOrder(node.left, cb);
    this.__traversePreOrder(node.right, cb);
  }

  private __traverseInOrder(
    node: BinarySearchTreeNode<K, V>,
    cb: (value: V, key: K, count: number) => any
  ) {
    if (node === null) return;

    this.__traverseInOrder(node.left, cb);
    cb(node.value, node.key, node.count);
    this.__traverseInOrder(node.right, cb);
  }

  private __traversePostOrder(
    node: BinarySearchTreeNode<K, V>,
    cb: (value: V, key: K, count: number) => any
  ) {
    if (node === null) return;

    this.__traversePostOrder(node.left, cb);
    this.__traversePostOrder(node.right, cb);
    cb(node.value, node.key, node.count);
  }

  private __searchItemAtOrder(node: BinarySearchTreeNode<K, V>, order: number) {
    if (!node) {
      return null;
    }
    console.log(node.subNodeCount, order);

    if (node.subNodeCount === order) return node.left;
    if (node.subNodeCount > order) {
      node.subNodeCount < 5 && console.log(node);

      if (!node.left) return null;
      if (node.left.subNodeCount < order) {
        return this.__searchItemAtOrder(node.right, node.subNodeCount - order);
      }
    }

    if (node.subNodeCount > order) {
      return this.__searchItemAtOrder(node.left, order);
    }
  }

  constructor() {
    this.root = null;
    this.count = 0;
  }

  size() {
    return this.count;
  }

  isEmpty() {
    return this.count === 0;
  }

  insert(key: K, value: V) {
    this.root = this.__insertAtNode(this.root, key, value);
    this.count++;
  }

  maximun(): V {
    let node = this.root;
    while (node.right !== null) {
      node = node.right;
    }

    return node.value;
  }

  minimun(): V {
    let node = this.root;
    while (node.left !== null) {
      node = node.left;
    }

    return node.value;
  }

  contain(key: K): boolean {
    return this.__contain(this.root, key);
  }

  search(key: K): V {
    return this.__search(this.root, key);
  }

  preOrder(cb: (value: V, key: K, count: number) => any) {
    this.__traversePreOrder(this.root, cb);
  }

  inOrder(cb: (value: V, key: K, count: number) => any) {
    this.__traverseInOrder(this.root, cb);
  }

  postOrder(cb: (value: V, key: K, count: number) => any) {
    this.__traversePostOrder(this.root, cb);
  }

  searchItemAtOrder(order: number) {
    const node = this.__searchItemAtOrder(this.root, order);
    return node;
  }
}

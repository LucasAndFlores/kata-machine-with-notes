type Node<T> = {
    value: T;
    prev?: Node<T>;
};

export default class Stack<T> {
    public length: number;
    private head?: Node<T>;

    constructor() {
        this.length = 0;
        this.head = undefined;
    }

    push(item: T): void {
        const insert = { value: item } as Node<T>;

        this.length++;
        if (!this.head) {
            this.head = insert;
            return;
        }

        insert.prev = this.head;
        this.head = insert;
    }
    pop(): T | undefined {
        if (this.length === 0) {
            this.head = undefined;
            return undefined;
        }

        this.length--;

        const element = this.head;
        this.head = element?.prev;

        return element?.value;
    }
    peek(): T | undefined {
        return this.head?.value;
    }
}

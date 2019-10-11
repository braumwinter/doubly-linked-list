const Node = require('./node');

class LinkedList {
    constructor() {
        // первый узел
        this._head = null;

        // последний узел
        this._tail = null;

        // длина
        this.length = 0;
    }

    append(data) {
        // новый узел
        const node = new Node(data);

        // если длина = 0, то добавляем head
        if (this.length === 0) {
            // узел всего один, поэтому начало и конец одинаковы
            this._head = node;
            this._tail = node;
        } else {
            // если есть head, то добавляем в конец
            // конец становится предпоследним узлом
            node.prev = this._tail;

            // ссылается на добавленный узел, который теперь в конце
            this._tail.next = node;

            // и новый конец - добавляемы узел
            this._tail = node;
        }

        // при добавлении узла, увеличивается длина списка
        this.length++;
    }

    head() {
        return this._head.data;
    }

    tail() {
        return this._tail.data;
    }

    at(index) {
        if (index > this.length - 1) {
            return false;
        } else {
            let current = this._head;

            for (let iter_list = 0; iter_list < this.length; iter_list++) {
                if (index === iter_list) {
                    return current.data;
                }

                current = current.next;
            }
        }
    }

    insertAt(index, data) {
        if (this.length === 0) {
            const node = new Node(data);
            this._head = node;
            this._tail = node;
            this.length++;
        } else {
            let current = this._head;
            const node = new Node(data);
            for (let iter_list = 0; iter_list < this.length; iter_list++) {
                if (index === 0) {
                    node.prev = null;
                    current.prev = node;
                    node.next = current;
                    this.length++;
                    break;
                } else if (index === iter_list) {

                    node.next = current;
                    node.prev = current.prev;
                    current.prev.next = node;
                    current.prev = node;
                    this.length++;
                    break;
                }

                if (current.next === 'null') {
                    break;
                }
                current = current.next;
            }
        }
    }

    isEmpty() {
        if (this.length === 0) {
            return true;
        }
        return false;
    }

    clear() {
        this._head.prev = null;
        this._head.data = null;
        this._head.next = null;
        this._tail.prev = null;
        this._tail.data = null;
        this._tail.next = null;
        this.length = 0;
    }

    deleteAt(index) {
        if (index > this.length - 1) {
            return false;
        } else if (this.length === 1) {
            this._head.prev = null;
            this._head.data = null;
            this._head.next = null;
            this._tail.prev = null;
            this._tail.data = null;
            this._tail.next = null;
            this.length = 0;
        } else {
            let current = this._head;

            for (let iter_list = 0; iter_list < this.length; iter_list++) {
                if (index === 0) {
                    current.next.prev = null;
                    this.length--;
                    break;
                } else if (index === iter_list) {
                    current.prev.next = current.next;
                    current.next.prev = current.prev;
                    this.length--;
                    break;
                }

                if (current.next === 'null') {
                    break;
                }
                current = current.next;
            }
        }
    }

    reverse() {
        if (this.length === 0) {
            return false;
        } else if (this.length === 1) {
            return true;
        } else {
            if (this.length > 1) {
                let current_head = this._head;
                let current_tail = this._tail;

                for (let iter_list = 0; iter_list < (this.length / 2); iter_list++) {
                    let temp = current_head.data;
                    current_head.data = current_tail.data;
                    current_tail.data = temp;

                    current_head = current_head.next;
                    current_tail = current_tail.prev;

                    if (current_head.next === 'null' || current_tail.prev === 'null') {
                        break;
                    }
                }
            }
        }

    }

    indexOf(data) {
        let current = this._head;

        for (let iter_list = 0; iter_list < this.length; iter_list++) {
            if (data === current.data) {
                return iter_list;
            }

            if (current.next === 'null') {
                break;
            }
            current = current.next;
        }

        return -1;
    }
}

module.exports = LinkedList;
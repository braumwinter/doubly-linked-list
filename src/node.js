class Node {
    constructor(data = null, prev = null, next = null) {
        // данные
        this.data = data;

        // ссылка на предыдущий узел
        this.prev = prev;

        // ссылка на следующий узел
        this.next = next;
    }
}

module.exports = Node;

class Node {
    #key;
    #value;
    #nextNode;

    constructor() {
        this.#value = null;
        this.#nextNode = null;
    }

    get value() { return this.#value; };
    get nextNode() { return this.#nextNode; };
    get key() { return this.#key; };
    set value(val) { this.#value = val; };
    set nextNode(node) { this.#nextNode = node; };
    set key(k) { this.#key = k; };
}

class ModifiedLinkedList {
    #headNode;

    constructor() {
        this.#headNode = null;
    }

    append(key, value) {
        // Initialize new node.
        const newNode = new Node();
        newNode.key = key;
        newNode.value = value;


        // Insert the node.
        if (this.#headNode === null) {
            this.#headNode = newNode;
        } else {
            let referenceNode = this.#headNode;
            let changedValue = false;
            if (referenceNode.key == key) {
                referenceNode.value = value;
                changedValue = true;
            } 
            while (referenceNode.nextNode !== null && !changedValue) {
                referenceNode = referenceNode.nextNode;
                if (referenceNode.key == key) {
                    referenceNode.value = value;
                    changedValue = true;
                } 
            }
            if (!changedValue) {
                referenceNode.nextNode = newNode;
            }
        }
    }

    prepend(key, value) {
        // Initialize new node.
        const newNode = new Node();
        newNode.key = key;
        newNode.value = value;

        // Insert the node as the new root node.
        if (this.#headNode !== null) {
            newNode.nextNode = this.#headNode;
        }
        this.#headNode = newNode;
    }

    size() {
        let count = 0;
        if (this.#headNode !== null) {
            let referenceNode = this.#headNode;
            while (referenceNode.nextNode !== null) {
                referenceNode = referenceNode.nextNode;
                count++;
            }
        }
        return count;
    }

    head() {
        return this.#headNode;
    }

    tail() {
        let referenceNode = null;
        if (this.#headNode !== null) {
            referenceNode = this.#headNode;
            while (referenceNode.nextNode !== null) {
                referenceNode = referenceNode.nextNode;
            }
        }

        return referenceNode;
    }

    at(index) {
        let referenceNode = this.#headNode;

        for (let i = 0; i < index; i++) {
            referenceNode = referenceNode.nextNode;
        }

        return referenceNode;
    }

    pop() {
        let referenceNode = null;
        let previousNode = null;
        if (this.#headNode !== null) {
            referenceNode = this.#headNode;
            while (referenceNode.nextNode !== null) {
                previousNode = referenceNode;
                referenceNode = referenceNode.nextNode;
            }
        }

        previousNode.nextNode = null;
    }

    contains(value) {
        let found = false;

        if (this.#headNode !== null) {
            if (this.#headNode.value === value) {
                found = true;
            } else {
                let referenceNode = this.#headNode;
                do {
                    if (referenceNode.value === value) {
                        found = true;
                        break;
                    }
                    referenceNode = referenceNode.nextNode;
                } while (referenceNode !== null);
            }
            
        }

        return found;
    }

    containsWithKey(key) {
        let found = false;

        if (this.#headNode !== null) {
            if (this.#headNode.key === key) {
                found = true;
            } else {
                let referenceNode = this.#headNode;
                do {
                    if (referenceNode.key === key) {
                        found = true;
                        break;
                    }
                    referenceNode = referenceNode.nextNode;
                } while (referenceNode !== null);
            }
            
        }

        return found;
    }

    find(value) {
        let index = 0

        if (this.#headNode !== null) {
            if (this.#headNode.value != value) {
                let referenceNode = this.#headNode;
                while (referenceNode.nextNode !== null) {
                    index++;
                    if (referenceNode.value == value) {
                        break;
                    }
                    referenceNode = referenceNode.nextNode;
                }
            }
        }

        return index;
    }

    findWithKey(key) {
        let index = 0

        if (this.#headNode !== null) {
            if (this.#headNode.key != key) {
                let referenceNode = this.#headNode;
                while (referenceNode.nextNode !== null) {
                    index++;
                    if (referenceNode.key == key) {
                        break;
                    }
                    referenceNode = referenceNode.nextNode;
                }
            }
        }

        return index;
    }

    remove(key) {
        let referenceNode = this.#headNode;
        if (referenceNode !== null) {
            let previousNode = null;
            for (let i = 0; i < this.findWithKey(key); i++) {
                previousNode = referenceNode;
                referenceNode = referenceNode.nextNode;
            }

            if (previousNode !== null) {
                previousNode.nextNode = null;
            } else {
                this.#headNode = null;
            }
            if (referenceNode.nextNode !== null) {
                previousNode.nextNode = referenceNode.nextNode;
            }
        }
    }

    getNodes() {
        let nodes = [];

        let referenceNode = null;
        if (this.#headNode !== null) {
            referenceNode = this.#headNode;
            nodes.push(referenceNode);
            while (referenceNode.nextNode !== null) {
                referenceNode = referenceNode.nextNode;
                nodes.push(referenceNode);
            }
        }

        return nodes;
    }

    toString() {
        let finalString = "";

        let referenceNode = null;
        if (this.#headNode !== null) {
            referenceNode = this.#headNode;
            finalString += `( ${referenceNode.value} )`;
            while (referenceNode.nextNode !== null) {
                referenceNode = referenceNode.nextNode;
                finalString += ` -> ( ${referenceNode.value} )`;
            }
        } else {
            finalString += "( no head node )";
        }

        finalString += " -> null";
        return finalString;
    }
}

export { ModifiedLinkedList };


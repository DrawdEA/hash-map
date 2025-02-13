import { ModifiedLinkedList } from "./modifiedLinkedList.js";

class HashMap {
    #loadFactor;
    #capacity;
    #buckets;

    constructor() {
        this.#loadFactor = 0.75;
        this.#capacity = 16;
        this.#buckets = [];
        for (let i = 0; i < this.#capacity; i++) { this.#buckets.push(new ModifiedLinkedList()) };
    }

    hash(key) {
        let hashCode = 0;
           
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
        
        return hashCode % this.#capacity;
    }

    set(key, value) {
        const index = this.hash(key);
        console.log(index);
        if (index < 0 || index >= this.#buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        this.#buckets[index].append(key, value);

        // If the amount of nodes have surpassed the load factor, expand the amount of buckets.
        if (this.length() / this.#capacity >= this.#loadFactor) {
            this.#capacity = this.#capacity * 2;
            const entries = this.entries();
            this.clear();
            entries.forEach(pair => {
                this.set(pair[0], pair[1]);
            })
        }
    }

    get(key) {
        const index = this.hash(key);
        if (index < 0 || index >= this.#buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        return this.#buckets[index].at(this.#buckets[index].findWithKey(key));
    }

    has(key) {
        const index = this.hash(key);
        if (index < 0 || index >= this.#buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        return this.#buckets[index].containsWithKey(key);
    }

    remove(key) {
        const index = this.hash(key);
        if (index < 0 || index >= this.#buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }

        this.#buckets[index].remove(key);
    }

    length() {
        let length = 0;

        this.#buckets.forEach(bucket => {
            bucket.getNodes().forEach(node => {
                length++;
            })
        })

        return length;
    }

    clear() {
        this.#buckets = [];
        for (let i = 0; i < this.#capacity; i++) { this.#buckets.push(new ModifiedLinkedList()) };
    }

    keys() {
        let keysArray = [];

        this.#buckets.forEach(bucket => {
            bucket.getNodes().forEach(node => {
                keysArray.push(node.key);
            })
        })

        return keysArray;
    }

    values() {
        let valuesArray = [];

        this.#buckets.forEach(bucket => {
            bucket.getNodes().forEach(node => {
                valuesArray.push(node.value);
            })
        })

        return valuesArray;
    }

    entries() {
        let entries = [];

        this.#buckets.forEach(bucket => {
            if (bucket.head() !== null) {
                bucket.getNodes().forEach(node => {
                    entries.push([node.key, node.value]);
                })
            }
        })

        return entries;
    }
}

// Testing the hash map.
const test = new HashMap();
test.set('apple', 'red');
test.set('banana', 'yellow');
test.set('carrot', 'orange');
test.set('dog', 'brown');
test.set('elephant', 'gray');
test.set('frog', 'green');
test.set('grape', 'purple');
test.set('hat', 'black');
test.set('ice cream', 'white');
test.set('jacket', 'blue');
test.set('kite', 'pink');
test.set('lion', 'golden');
console.log(test.entries());
test.set('bird', 'shirt');
console.log(test.entries());
test.set('bird', 'amazing'); // Should replace the key value pair bird - shirt
console.log(test.entries());

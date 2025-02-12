import { ModifiedLinkedList } from "./modifiedLinkedList";

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
     
        return hashCode;
    }

    set(key, value) {
        const index = hash(key);
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        this.#buckets[index].append(key, value);
    }

    get(key) {
        const index = hash(key);
        if (index < 0 || index >= this.#buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        return this.#buckets[index].at(this.#buckets[index].findWithKey(key));
    }

    has(key) {
        const index = hash(key);
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        return this.#buckets[index].containsWithKey(key);
    }

    remove(key) { // TODO: this and the future stuff
        const index = hash(key);
        if (index < 0 || index >= buckets.length) {
            throw new Error("Trying to access index out of bounds");
        }
        return this.#buckets[index].splice(this.#buckets[index].indexOf());
    }

    length() {

    }

    clear() {
        this.#buckets = [];
        for (let i = 0; i < this.#capacity; i++) { this.#buckets.push(new ModifiedLinkedList()) };
    }

    keys() {

    }

    values() {

    }

    entries() {
        
    }
     
}
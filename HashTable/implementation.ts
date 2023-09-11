class HashTable {
    private data: any;
    constructor(size: number) {
        this.data = new Array(size);
    } 
    private _hash(key: string) {
        let hash = 0;
        for (let i=0; i< key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length;
        }
        return hash;
    }

    set (key: any, value: any) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
        return this.data;
    }

    get(key: any): any {
        let address = this._hash(key);
        const currentBucket = this.data[address];
        if (currentBucket) {
            for(let i = 0; i < currentBucket.length; i++) {
                if (currentBucket[i][0] == key) {
                    return currentBucket[i][1];
                }
            }
        }
    }

    keys() {
        const keysArray: any = [];
        for (let i = 0; i< this.data.length; i++) {
            if (this.data[i]){
                keysArray.push(this.data[i][0][0]);
            }
        }
        return keysArray;
    }
}

const myHashTable = new HashTable(50);
myHashTable.set('apples', 20);
myHashTable.set('banana', 30);
myHashTable.set('orrange', 10);

console.log(myHashTable.get('apples'));
console.log(myHashTable.keys());
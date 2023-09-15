
class StackArray {
     private arr: Array<number | string>;
     constructor () {
        this.arr = [];
     }

     peek (): number | string | null {
        if (!this.arr.length) return null;
        return this.arr[this.arr.length - 1];
     }

     push(value: number | string) {
        this.arr.push(value);
     }

     pop(): number | string | null {
        if (!this.arr.length) return null;
        const top = this.arr[this.arr.length - 1];
        this.arr.pop();
        return top;
     }

     isEmpty(): boolean {
        if (this.arr.length == 0) return true;
        return false;
     }
}

const stackArr = new StackArray();
console.log(stackArr.isEmpty());
stackArr.push('Google');
stackArr.push('Udemy');
stackArr.push('Facebook');

console.log(stackArr.peek());
console.log(stackArr.pop());
console.log(stackArr.pop());
console.log(stackArr.pop());
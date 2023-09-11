//Find first recurring character 
// Given an array = [2,5,1,2,3,5,1,2,4] should return 2

class RecurringElement {
    naiveApproach(arr: number[]): number {
        for (let i = 0; i< arr.length; i++) {
            for (let j = i+1; j < arr.length; j++) {
                if(arr[i] == arr[j]) {
                    return arr[i];
                }
            }
        }
        return -1;
    }

    firstRecurringEleByMap(arr: number[]): number {
        const map = new Map<number, boolean>();
        for (let i = 0; i < arr.length; i++) {
            if (map.get(arr[i])) {
                return arr[i];
            }
            map.set(arr[i], true);
        }
        return -1;
    }

    firstRecurringEleByObj(arr: number[]): number {
        const map: any = {};
        for (let i = 0; i < arr.length; i++) {
            if (map[arr[i]]) {
                return arr[i];
            }
            map[arr[i]] = true;
        }
        return -1;
    }
}

const recurringElement = new RecurringElement();
console.log(recurringElement.naiveApproach([2,5,1,2,3,5,1,2,4]));
console.log(recurringElement.firstRecurringEleByMap([2,5,1,2,3,5,1,2,4]));
console.log(recurringElement.firstRecurringEleByObj([2,5,1,2,3,5,1,2,4]));
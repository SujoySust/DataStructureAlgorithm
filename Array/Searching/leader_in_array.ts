class FindLeader {

    // Naive approach
    findLeaderByNaiveApproach(arr: number[]): number[] {
        const leaders: number[] = [];

        for (let i = 0; i < arr.length; i++) {
            let flag = 0;
            for (let j = i; j < arr.length; j++) {
                if (arr[j] > arr[i]) {
                    flag = 1;
                    break;
                }
            }
            if (flag == 0) {
                leaders.push(arr[i]);
            }
        }

        return leaders;
    }

    // Suffix maximum
    findLeaderBySuffixMaximum(arr: number[]): number[] {
        const leaders: number[] = [];
        const len: number = arr.length;
        let max_from_right = arr[len - 1];
        leaders.push(max_from_right);
        for (let i = len - 2; i>=0; i--) {
            if (arr[i] > max_from_right) {
                max_from_right = arr[i];
                leaders.push(max_from_right);
            }
        }

        const _leaders: number [] = [];
        while(leaders.length > 0) { 
            const item = leaders.pop();
            if (item) {
                _leaders.push(item);
            }
        }

        return _leaders;
    }
}

const findLeader = new FindLeader();
console.log(findLeader.findLeaderByNaiveApproach([1, 2, 3, 4, 5, 2]));
console.log(findLeader.findLeaderBySuffixMaximum([1, 2, 3, 4, 5, 2]));
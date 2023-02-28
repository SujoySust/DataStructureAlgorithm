var solution = function(isBadVersion: any) {
    return function(n: number): number {
        let start = 1;
        let end = n;

        while (start <= end) {
            const mid = start + Math.floor((end - start)/2);
            const result = isBadVersion(mid);
            if (result) {
                end = mid;
            } else {
                start = mid + 1;
            }
        }
        return start;
    };
};
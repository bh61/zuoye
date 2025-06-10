var rotate = function(nums, k) {
    function reverse(i, j) {
        while (i < j) {
            [nums[i], nums[j]] = [nums[j], nums[i]];
            i++;
            j--;
        }
    }

    const n = nums.length;
    k %= n; // 轮转 k 次等于轮转 k % n 次
    reverse(0, n - 1);
    reverse(0, k - 1);
    reverse(k, n - 1);
};


var maxSlidingWindow = function(nums, k) {
    let ans = [];
    let queue = []; // 存储元素索引，维护单调递减队列

    for (let i = 0; i < nums.length; i++) {
        // 移除窗口外的元素,意思就是最大值如果不在滑动窗口内部就去掉他，同时每次移动一步，所以只需要判断一次。
        if (queue.length > 0 && queue[0] < i - k + 1) {
            queue.shift();
        }

        // 维护单调递减队列，移除比当前值小的元素
        while (queue.length > 0 && nums[queue[queue.length - 1]] < nums[i]){
            queue.pop();
        }

        //  加入当前元素索引
        queue.push(i);

        // 记录窗口最大值（窗口形成后）
        if (i >= k - 1) {
            ans.push(nums[queue[0]]);
        }
    }

    return ans;
};

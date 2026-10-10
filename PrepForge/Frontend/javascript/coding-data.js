/**
 * PrepForge - Placement Training & Assessment Platform
 * Curated Placement Coding Problems Suite (LeetCode-Style)
 * 15 Essential Placement Problems with Multi-Language Boilerplates and Test Suites
 */

const CODING_PROBLEMS = [
    {
        id: "code-prob-1",
        title: "Two Sum",
        slug: "two-sum",
        difficulty: "Easy",
        acceptanceRate: "49.8%",
        companies: ["amazon", "google", "tcs", "infosys", "microsoft"],
        companyNames: ["Amazon", "Google", "TCS Digital", "Infosys", "Microsoft"],
        tags: ["Array", "Hash Table", "Two Pointers"],
        functionName: "twoSum",
        paramNames: ["nums", "target"],
        description: `Given an array of integers \`nums\` and an integer \`target\`, return *indices of the two numbers such that they add up to \`target\`*.

You may assume that each input would have **exactly one solution**, and you may not use the same element twice.

You can return the answer in any order.

### Follow-up:
Can you come up with an algorithm that is less than $O(n^2)$ time complexity? (Hint: Use a Hash Map for $O(n)$ time).`,
        constraints: [
            "2 <= nums.length <= 10^4",
            "-10^9 <= nums[i] <= 10^9",
            "-10^9 <= target <= 10^9",
            "Only one valid answer exists."
        ],
        examples: [
            {
                input: "nums = [2, 7, 11, 15], target = 9",
                output: "[0, 1]",
                explanation: "Because nums[0] + nums[1] == 9, we return [0, 1]."
            },
            {
                input: "nums = [3, 2, 4], target = 6",
                output: "[1, 2]",
                explanation: "Because nums[1] + nums[2] == 6, we return [1, 2]."
            },
            {
                input: "nums = [3, 3], target = 6",
                output: "[0, 1]",
                explanation: "nums[0] + nums[1] == 3 + 3 == 6. Return [0, 1]."
            }
        ],
        starterTemplates: {
            javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
function twoSum(nums, target) {
    // Write your code here
    
}`,
            python: `class Solution:
    def twoSum(self, nums: list[int], target: int) -> list[int]:
        # Write your code here
        pass`,
            java: `class Solution {
    public int[] twoSum(int[] nums, int target) {
        // Write your code here
        return new int[]{};
    }
}`,
            cpp: `class Solution {
public:
    vector<int> twoSum(vector<int>& nums, int target) {
        // Write your code here
        return {};
    }
};`
        },
        referenceSolution: `function twoSum(nums, target) {
    const map = new Map();
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement)) {
            return [map.get(complement), i];
        }
        map.set(nums[i], i);
    }
    return [];
}`,
        sampleTestCases: [
            {
                input: [[2, 7, 11, 15], 9],
                inputDisplay: "nums = [2, 7, 11, 15], target = 9",
                expected: [0, 1],
                expectedDisplay: "[0, 1]"
            },
            {
                input: [[3, 2, 4], 6],
                inputDisplay: "nums = [3, 2, 4], target = 6",
                expected: [1, 2],
                expectedDisplay: "[1, 2]"
            },
            {
                input: [[3, 3], 6],
                inputDisplay: "nums = [3, 3], target = 6",
                expected: [0, 1],
                expectedDisplay: "[0, 1]"
            }
        ],
        hiddenTestCases: [
            {
                input: [[-1, -2, -3, -4, -5], -8],
                inputDisplay: "nums = [-1, -2, -3, -4, -5], target = -8",
                expected: [2, 4],
                expectedDisplay: "[2, 4]",
                description: "Negative numbers handling"
            },
            {
                input: [[0, 4, 3, 0], 0],
                inputDisplay: "nums = [0, 4, 3, 0], target = 0",
                expected: [0, 3],
                expectedDisplay: "[0, 3]",
                description: "Target sum with zeroes"
            },
            {
                input: [[1, 5, 8, 12, 19, 25], 37],
                inputDisplay: "nums = [1, 5, 8, 12, 19, 25], target = 37",
                expected: [3, 5],
                expectedDisplay: "[3, 5]",
                description: "Larger array lookup"
            }
        ]
    },
    {
        id: "code-prob-2",
        title: "Valid Parentheses",
        slug: "valid-parentheses",
        difficulty: "Easy",
        acceptanceRate: "40.3%",
        companies: ["amazon", "microsoft", "tcs", "accenture", "wipro"],
        companyNames: ["Amazon", "Microsoft", "TCS", "Accenture", "Wipro"],
        tags: ["String", "Stack"],
        functionName: "isValid",
        paramNames: ["s"],
        description: `Given a string \`s\` containing just the characters \`'('\`, \`')'\`, \`'{'\`, \`'}'\`, \`'['\` and \`']'\`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.`,
        constraints: [
            "1 <= s.length <= 10^4",
            "s consists of parentheses only '()[]{}'."
        ],
        examples: [
            {
                input: 's = "()"',
                output: "true",
                explanation: "The single opening bracket is closed by the corresponding closing bracket."
            },
            {
                input: 's = "()[]{}"',
                output: "true",
                explanation: "All brackets open and close in correct sequence."
            },
            {
                input: 's = "(]"',
                output: "false",
                explanation: "Parenthesis '(' is closed by a square bracket ']' which is invalid."
            }
        ],
        starterTemplates: {
            javascript: `/**
 * @param {string} s
 * @return {boolean}
 */
function isValid(s) {
    // Write your code here
    
}`,
            python: `class Solution:
    def isValid(self, s: str) -> bool:
        # Write your code here
        pass`,
            java: `class Solution {
    public boolean isValid(String s) {
        // Write your code here
        return false;
    }
}`,
            cpp: `class Solution {
public:
    bool isValid(string s) {
        // Write your code here
        return false;
    }
};`
        },
        referenceSolution: `function isValid(s) {
    const stack = [];
    const pairs = { ')': '(', '}': '{', ']': '[' };
    for (let char of s) {
        if (char === '(' || char === '{' || char === '[') {
            stack.push(char);
        } else if (pairs[char]) {
            if (stack.length === 0 || stack.pop() !== pairs[char]) {
                return false;
            }
        }
    }
    return stack.length === 0;
}`,
        sampleTestCases: [
            {
                input: ["()"],
                inputDisplay: 's = "()"',
                expected: true,
                expectedDisplay: "true"
            },
            {
                input: ["()[]{}"],
                inputDisplay: 's = "()[]{}"',
                expected: true,
                expectedDisplay: "true"
            },
            {
                input: ["(]"],
                inputDisplay: 's = "(]"',
                expected: false,
                expectedDisplay: "false"
            }
        ],
        hiddenTestCases: [
            {
                input: ["([)]"],
                inputDisplay: 's = "([)]"',
                expected: false,
                expectedDisplay: "false",
                description: "Interleaved incorrect brackets"
            },
            {
                input: ["{[]}"],
                inputDisplay: 's = "{[]}"',
                expected: true,
                expectedDisplay: "true",
                description: "Nested valid brackets"
            },
            {
                input: ["["],
                inputDisplay: 's = "["',
                expected: false,
                expectedDisplay: "false",
                description: "Unclosed single opening bracket"
            },
            {
                input: ["]"],
                inputDisplay: 's = "]"',
                expected: false,
                expectedDisplay: "false",
                description: "Single closing bracket without opening"
            }
        ]
    },
    {
        id: "code-prob-3",
        title: "Maximum Subarray (Kadane's)",
        slug: "maximum-subarray",
        difficulty: "Medium",
        acceptanceRate: "50.1%",
        companies: ["amazon", "tcs", "walmart", "flipkart"],
        companyNames: ["Amazon", "TCS Digital", "Walmart", "Flipkart"],
        tags: ["Array", "Divide and Conquer", "Dynamic Programming"],
        functionName: "maxSubArray",
        paramNames: ["nums"],
        description: `Given an integer array \`nums\`, find the subarray with the largest sum, and return *its sum*.

A **subarray** is a contiguous non-empty sequence of elements within an array.

### Optimal Complexity:
Aim for $O(n)$ time using Kadane's dynamic programming algorithm.`,
        constraints: [
            "1 <= nums.length <= 10^5",
            "-10^4 <= nums[i] <= 10^4"
        ],
        examples: [
            {
                input: "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
                output: "6",
                explanation: "The contiguous subarray [4, -1, 2, 1] has the largest sum = 6."
            },
            {
                input: "nums = [1]",
                output: "1",
                explanation: "The subarray [1] has the largest sum 1."
            },
            {
                input: "nums = [5, 4, -1, 7, 8]",
                output: "23",
                explanation: "The entire array has the largest sum 23."
            }
        ],
        starterTemplates: {
            javascript: `/**
 * @param {number[]} nums
 * @return {number}
 */
function maxSubArray(nums) {
    // Write your code here
    
}`,
            python: `class Solution:
    def maxSubArray(self, nums: list[int]) -> int:
        # Write your code here
        pass`,
            java: `class Solution {
    public int maxSubArray(int[] nums) {
        // Write your code here
        return 0;
    }
}`,
            cpp: `class Solution {
public:
    int maxSubArray(vector<int>& nums) {
        // Write your code here
        return 0;
    }
};`
        },
        referenceSolution: `function maxSubArray(nums) {
    let currentSum = nums[0];
    let maxSum = nums[0];
    for (let i = 1; i < nums.length; i++) {
        currentSum = Math.max(nums[i], currentSum + nums[i]);
        maxSum = Math.max(maxSum, currentSum);
    }
    return maxSum;
}`,
        sampleTestCases: [
            {
                input: [[-2, 1, -3, 4, -1, 2, 1, -5, 4]],
                inputDisplay: "nums = [-2, 1, -3, 4, -1, 2, 1, -5, 4]",
                expected: 6,
                expectedDisplay: "6"
            },
            {
                input: [[1]],
                inputDisplay: "nums = [1]",
                expected: 1,
                expectedDisplay: "1"
            },
            {
                input: [[5, 4, -1, 7, 8]],
                inputDisplay: "nums = [5, 4, -1, 7, 8]",
                expected: 23,
                expectedDisplay: "23"
            }
        ],
        hiddenTestCases: [
            {
                input: [[-5, -2, -8, -1, -4]],
                inputDisplay: "nums = [-5, -2, -8, -1, -4]",
                expected: -1,
                expectedDisplay: "-1",
                description: "All negative numbers (max should be -1)"
            },
            {
                input: [[-2, 0, -1]],
                inputDisplay: "nums = [-2, 0, -1]",
                expected: 0,
                expectedDisplay: "0",
                description: "Array containing zeros and negative numbers"
            },
            {
                input: [[-2, 1]],
                inputDisplay: "nums = [-2, 1]",
                expected: 1,
                expectedDisplay: "1",
                description: "Two-element array with transition"
            }
        ]
    },
    {
        id: "code-prob-4",
        title: "Best Time to Buy and Sell Stock",
        slug: "best-time-to-buy-and-sell-stock",
        difficulty: "Easy",
        acceptanceRate: "54.2%",
        companies: ["amazon", "infosys", "flipkart", "microsoft"],
        companyNames: ["Amazon", "Infosys", "Flipkart", "Microsoft"],
        tags: ["Array", "Dynamic Programming"],
        functionName: "maxProfit",
        paramNames: ["prices"],
        description: `You are given an array \`prices\` where \`prices[i]\` is the price of a given stock on the $i$-th day.

You want to maximize your profit by choosing a **single day** to buy one stock and choosing a **different day in the future** to sell that stock.

Return *the maximum profit you can achieve from this transaction*. If you cannot achieve any profit, return \`0\`.`,
        constraints: [
            "1 <= prices.length <= 10^5",
            "0 <= prices[i] <= 10^4"
        ],
        examples: [
            {
                input: "prices = [7, 1, 5, 3, 6, 4]",
                output: "5",
                explanation: "Buy on day 2 (price = 1) and sell on day 5 (price = 6), profit = 6 - 1 = 5."
            },
            {
                input: "prices = [7, 6, 4, 3, 1]",
                output: "0",
                explanation: "In this case, no transactions are done and the max profit = 0."
            }
        ],
        starterTemplates: {
            javascript: `/**
 * @param {number[]} prices
 * @return {number}
 */
function maxProfit(prices) {
    // Write your code here
    
}`,
            python: `class Solution:
    def maxProfit(self, prices: list[int]) -> int:
        # Write your code here
        pass`,
            java: `class Solution {
    public int maxProfit(int[] prices) {
        // Write your code here
        return 0;
    }
}`,
            cpp: `class Solution {
public:
    int maxProfit(vector<int>& prices) {
        // Write your code here
        return 0;
    }
};`
        },
        referenceSolution: `function maxProfit(prices) {
    let minPrice = Infinity;
    let maxProfit = 0;
    for (let price of prices) {
        if (price < minPrice) {
            minPrice = price;
        } else if (price - minPrice > maxProfit) {
            maxProfit = price - minPrice;
        }
    }
    return maxProfit;
}`,
        sampleTestCases: [
            {
                input: [[7, 1, 5, 3, 6, 4]],
                inputDisplay: "prices = [7, 1, 5, 3, 6, 4]",
                expected: 5,
                expectedDisplay: "5"
            },
            {
                input: [[7, 6, 4, 3, 1]],
                inputDisplay: "prices = [7, 6, 4, 3, 1]",
                expected: 0,
                expectedDisplay: "0"
            },
            {
                input: [[2, 4, 1]],
                inputDisplay: "prices = [2, 4, 1]",
                expected: 2,
                expectedDisplay: "2"
            }
        ],
        hiddenTestCases: [
            {
                input: [[3, 3, 3, 3]],
                inputDisplay: "prices = [3, 3, 3, 3]",
                expected: 0,
                expectedDisplay: "0",
                description: "Constant prices (zero profit)"
            },
            {
                input: [[1, 2, 3, 4, 5]],
                inputDisplay: "prices = [1, 2, 3, 4, 5]",
                expected: 4,
                expectedDisplay: "4",
                description: "Monotonically increasing prices"
            },
            {
                input: [[3, 2, 6, 5, 0, 3]],
                inputDisplay: "prices = [3, 2, 6, 5, 0, 3]",
                expected: 4,
                expectedDisplay: "4",
                description: "New minimum late in the array"
            }
        ]
    },
    {
        id: "code-prob-5",
        title: "Reverse a Singly Linked List",
        slug: "reverse-linked-list",
        difficulty: "Easy",
        acceptanceRate: "73.5%",
        companies: ["microsoft", "amazon", "cognizant", "google"],
        companyNames: ["Microsoft", "Amazon", "Cognizant", "Google"],
        tags: ["Linked List", "Recursion"],
        functionName: "reverseList",
        paramNames: ["head"],
        description: `Given the head of a singly linked list (represented as an array of values), reverse the list, and return *the reversed list*.

### Follow up:
A linked list can be reversed either iteratively or recursively. Could you implement it in $O(n)$ time and $O(1)$ space?`,
        constraints: [
            "The number of nodes in the list is the range [0, 5000].",
            "-5000 <= Node.val <= 5000"
        ],
        examples: [
            {
                input: "head = [1, 2, 3, 4, 5]",
                output: "[5, 4, 3, 2, 1]",
                explanation: "The pointers between adjacent elements are reversed."
            },
            {
                input: "head = [1, 2]",
                output: "[2, 1]",
                explanation: "Head and tail nodes swap positions."
            },
            {
                input: "head = []",
                output: "[]",
                explanation: "An empty list returns an empty list."
            }
        ],
        starterTemplates: {
            javascript: `/**
 * @param {number[]} head
 * @return {number[]}
 */
function reverseList(head) {
    // Write your code here
    
}`,
            python: `class Solution:
    def reverseList(self, head: list[int]) -> list[int]:
        # Write your code here
        pass`,
            java: `class Solution {
    public int[] reverseList(int[] head) {
        // Write your code here
        return new int[]{};
    }
}`,
            cpp: `class Solution {
public:
    vector<int> reverseList(vector<int>& head) {
        // Write your code here
        return {};
    }
};`
        },
        referenceSolution: `function reverseList(head) {
    if (!Array.isArray(head)) return [];
    const reversed = [];
    for (let i = head.length - 1; i >= 0; i--) {
        reversed.push(head[i]);
    }
    return reversed;
}`,
        sampleTestCases: [
            {
                input: [[1, 2, 3, 4, 5]],
                inputDisplay: "head = [1, 2, 3, 4, 5]",
                expected: [5, 4, 3, 2, 1],
                expectedDisplay: "[5, 4, 3, 2, 1]"
            },
            {
                input: [[1, 2]],
                inputDisplay: "head = [1, 2]",
                expected: [2, 1],
                expectedDisplay: "[2, 1]"
            },
            {
                input: [[]],
                inputDisplay: "head = []",
                expected: [],
                expectedDisplay: "[]"
            }
        ],
        hiddenTestCases: [
            {
                input: [[42]],
                inputDisplay: "head = [42]",
                expected: [42],
                expectedDisplay: "[42]",
                description: "Single element list"
            },
            {
                input: [[1, 1, 2, 1]],
                inputDisplay: "head = [1, 1, 2, 1]",
                expected: [1, 2, 1, 1],
                expectedDisplay: "[1, 2, 1, 1]",
                description: "List with duplicate values"
            }
        ]
    },
    {
        id: "code-prob-6",
        title: "Merge Two Sorted Lists",
        slug: "merge-two-sorted-lists",
        difficulty: "Easy",
        acceptanceRate: "62.8%",
        companies: ["microsoft", "cognizant", "tech-mahindra", "amazon"],
        companyNames: ["Microsoft", "Cognizant", "Tech Mahindra", "Amazon"],
        tags: ["Linked List", "Recursion", "Two Pointers"],
        functionName: "mergeTwoLists",
        paramNames: ["list1", "list2"],
        description: `You are given the heads of two sorted lists \`list1\` and \`list2\` (represented as sorted arrays).

Merge the two lists into one **sorted** list and return the result.`,
        constraints: [
            "The number of nodes in both lists is in the range [0, 50].",
            "-100 <= Node.val <= 100",
            "Both list1 and list2 are sorted in non-decreasing order."
        ],
        examples: [
            {
                input: "list1 = [1, 2, 4], list2 = [1, 3, 4]",
                output: "[1, 1, 2, 3, 4, 4]",
                explanation: "Elements are merged in non-decreasing order."
            },
            {
                input: "list1 = [], list2 = []",
                output: "[]",
                explanation: "Both lists empty results in empty list."
            },
            {
                input: "list1 = [], list2 = [0]",
                output: "[0]",
                explanation: "One empty list returns the non-empty list."
            }
        ],
        starterTemplates: {
            javascript: `/**
 * @param {number[]} list1
 * @param {number[]} list2
 * @return {number[]}
 */
function mergeTwoLists(list1, list2) {
    // Write your code here
    
}`,
            python: `class Solution:
    def mergeTwoLists(self, list1: list[int], list2: list[int]) -> list[int]:
        # Write your code here
        pass`,
            java: `class Solution {
    public int[] mergeTwoLists(int[] list1, int[] list2) {
        // Write your code here
        return new int[]{};
    }
}`,
            cpp: `class Solution {
public:
    vector<int> mergeTwoLists(vector<int>& list1, vector<int>& list2) {
        // Write your code here
        return {};
    }
};`
        },
        referenceSolution: `function mergeTwoLists(list1, list2) {
    const res = [];
    let i = 0, j = 0;
    while (i < list1.length && j < list2.length) {
        if (list1[i] <= list2[j]) {
            res.push(list1[i++]);
        } else {
            res.push(list2[j++]);
        }
    }
    while (i < list1.length) res.push(list1[i++]);
    while (j < list2.length) res.push(list2[j++]);
    return res;
}`,
        sampleTestCases: [
            {
                input: [[1, 2, 4], [1, 3, 4]],
                inputDisplay: "list1 = [1, 2, 4], list2 = [1, 3, 4]",
                expected: [1, 1, 2, 3, 4, 4],
                expectedDisplay: "[1, 1, 2, 3, 4, 4]"
            },
            {
                input: [[], []],
                inputDisplay: "list1 = [], list2 = []",
                expected: [],
                expectedDisplay: "[]"
            },
            {
                input: [[], [0]],
                inputDisplay: "list1 = [], list2 = [0]",
                expected: [0],
                expectedDisplay: "[0]"
            }
        ],
        hiddenTestCases: [
            {
                input: [[1, 2, 3], [4, 5, 6]],
                inputDisplay: "list1 = [1, 2, 3], list2 = [4, 5, 6]",
                expected: [1, 2, 3, 4, 5, 6],
                expectedDisplay: "[1, 2, 3, 4, 5, 6]",
                description: "Disjoint value intervals"
            },
            {
                input: [[-3, -1], [-2, 0]],
                inputDisplay: "list1 = [-3, -1], list2 = [-2, 0]",
                expected: [-3, -2, -1, 0],
                expectedDisplay: "[-3, -2, -1, 0]",
                description: "Negative numbers merging"
            }
        ]
    },
    {
        id: "code-prob-7",
        title: "Longest Substring Without Repeating Characters",
        slug: "longest-substring-without-repeating-characters",
        difficulty: "Medium",
        acceptanceRate: "34.1%",
        companies: ["amazon", "google", "microsoft", "infosys"],
        companyNames: ["Amazon", "Google", "Microsoft", "Infosys"],
        tags: ["Hash Table", "String", "Sliding Window"],
        functionName: "lengthOfLongestSubstring",
        paramNames: ["s"],
        description: `Given a string \`s\`, find the length of the **longest substring** without repeating characters.

A **substring** is a contiguous sequence of characters within a string.

### Optimal Approach:
Use the **Variable-Size Sliding Window** pattern with a frequency map or last-seen index map in $O(n)$ time.`,
        constraints: [
            "0 <= s.length <= 5 * 10^4",
            "s consists of English letters, digits, symbols and spaces."
        ],
        examples: [
            {
                input: 's = "abcabcbb"',
                output: "3",
                explanation: "The answer is 'abc', with the length of 3."
            },
            {
                input: 's = "bbbbb"',
                output: "1",
                explanation: "The answer is 'b', with the length of 1."
            },
            {
                input: 's = "pwwkew"',
                output: "3",
                explanation: "The answer is 'wke', with the length of 3. Note that 'pwke' is a subsequence and not a substring."
            }
        ],
        starterTemplates: {
            javascript: `/**
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    // Write your code here
    
}`,
            python: `class Solution:
    def lengthOfLongestSubstring(self, s: str) -> int:
        # Write your code here
        pass`,
            java: `class Solution {
    public int lengthOfLongestSubstring(String s) {
        // Write your code here
        return 0;
    }
}`,
            cpp: `class Solution {
public:
    int lengthOfLongestSubstring(string s) {
        // Write your code here
        return 0;
    }
};`
        },
        referenceSolution: `function lengthOfLongestSubstring(s) {
    let maxLen = 0;
    let left = 0;
    const map = new Map();
    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if (map.has(char) && map.get(char) >= left) {
            left = map.get(char) + 1;
        }
        map.set(char, right);
        maxLen = Math.max(maxLen, right - left + 1);
    }
    return maxLen;
}`,
        sampleTestCases: [
            {
                input: ["abcabcbb"],
                inputDisplay: 's = "abcabcbb"',
                expected: 3,
                expectedDisplay: "3"
            },
            {
                input: ["bbbbb"],
                inputDisplay: 's = "bbbbb"',
                expected: 1,
                expectedDisplay: "1"
            },
            {
                input: ["pwwkew"],
                inputDisplay: 's = "pwwkew"',
                expected: 3,
                expectedDisplay: "3"
            }
        ],
        hiddenTestCases: [
            {
                input: [""],
                inputDisplay: 's = ""',
                expected: 0,
                expectedDisplay: "0",
                description: "Empty string"
            },
            {
                input: [" "],
                inputDisplay: 's = " "',
                expected: 1,
                expectedDisplay: "1",
                description: "Single space character"
            },
            {
                input: ["tmmzuxt"],
                inputDisplay: 's = "tmmzuxt"',
                expected: 5,
                expectedDisplay: "5",
                description: "Duplicate within sliding window boundary"
            }
        ]
    },
    {
        id: "code-prob-8",
        title: "Binary Search",
        slug: "binary-search",
        difficulty: "Easy",
        acceptanceRate: "56.4%",
        companies: ["tcs", "infosys", "cognizant", "wipro"],
        companyNames: ["TCS", "Infosys", "Cognizant", "Wipro"],
        tags: ["Array", "Binary Search"],
        functionName: "search",
        paramNames: ["nums", "target"],
        description: `Given an array of integers \`nums\` which is sorted in ascending order, and an integer \`target\`, write a function to search \`target\` in \`nums\`.

If \`target\` exists, then return its index. Otherwise, return \`-1\`.

You must write an algorithm with $O(\\log n)$ runtime complexity.`,
        constraints: [
            "1 <= nums.length <= 10^4",
            "-10^4 < nums[i], target < 10^4",
            "All the integers in nums are unique.",
            "nums is sorted in ascending order."
        ],
        examples: [
            {
                input: "nums = [-1, 0, 3, 5, 9, 12], target = 9",
                output: "4",
                explanation: "9 exists in nums and its index is 4."
            },
            {
                input: "nums = [-1, 0, 3, 5, 9, 12], target = 2",
                output: "-1",
                explanation: "2 does not exist in nums so return -1."
            }
        ],
        starterTemplates: {
            javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function search(nums, target) {
    // Write your code here
    
}`,
            python: `class Solution:
    def search(self, nums: list[int], target: int) -> int:
        # Write your code here
        pass`,
            java: `class Solution {
    public int search(int[] nums, int target) {
        // Write your code here
        return -1;
    }
}`,
            cpp: `class Solution {
public:
    int search(vector<int>& nums, int target) {
        // Write your code here
        return -1;
    }
};`
        },
        referenceSolution: `function search(nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        if (nums[mid] === target) return mid;
        if (nums[mid] < target) low = mid + 1;
        else high = mid - 1;
    }
    return -1;
}`,
        sampleTestCases: [
            {
                input: [[-1, 0, 3, 5, 9, 12], 9],
                inputDisplay: "nums = [-1, 0, 3, 5, 9, 12], target = 9",
                expected: 4,
                expectedDisplay: "4"
            },
            {
                input: [[-1, 0, 3, 5, 9, 12], 2],
                inputDisplay: "nums = [-1, 0, 3, 5, 9, 12], target = 2",
                expected: -1,
                expectedDisplay: "-1"
            },
            {
                input: [[5], 5],
                inputDisplay: "nums = [5], target = 5",
                expected: 0,
                expectedDisplay: "0"
            }
        ],
        hiddenTestCases: [
            {
                input: [[1, 3, 5, 7, 9], 1],
                inputDisplay: "nums = [1, 3, 5, 7, 9], target = 1",
                expected: 0,
                expectedDisplay: "0",
                description: "Target is the first element"
            },
            {
                input: [[1, 3, 5, 7, 9], 9],
                inputDisplay: "nums = [1, 3, 5, 7, 9], target = 9",
                expected: 4,
                expectedDisplay: "4",
                description: "Target is the last element"
            },
            {
                input: [[2, 4, 6], 8],
                inputDisplay: "nums = [2, 4, 6], target = 8",
                expected: -1,
                expectedDisplay: "-1",
                description: "Target exceeds upper boundary"
            }
        ]
    },
    {
        id: "code-prob-9",
        title: "Contains Duplicate",
        slug: "contains-duplicate",
        difficulty: "Easy",
        acceptanceRate: "61.3%",
        companies: ["amazon", "infosys", "wipro", "capgemini"],
        companyNames: ["Amazon", "Infosys", "Wipro", "Capgemini"],
        tags: ["Array", "Hash Table", "Sorting"],
        functionName: "containsDuplicate",
        paramNames: ["nums"],
        description: `Given an integer array \`nums\`, return \`true\` if any value appears **at least twice** in the array, and return \`false\` if every element is distinct.`,
        constraints: [
            "1 <= nums.length <= 10^5",
            "-10^9 <= nums[i] <= 10^9"
        ],
        examples: [
            {
                input: "nums = [1, 2, 3, 1]",
                output: "true",
                explanation: "The element 1 appears twice at indices 0 and 3."
            },
            {
                input: "nums = [1, 2, 3, 4]",
                output: "false",
                explanation: "All elements in the array are distinct."
            },
            {
                input: "nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]",
                output: "true",
                explanation: "Multiple elements repeat."
            }
        ],
        starterTemplates: {
            javascript: `/**
 * @param {number[]} nums
 * @return {boolean}
 */
function containsDuplicate(nums) {
    // Write your code here
    
}`,
            python: `class Solution:
    def containsDuplicate(self, nums: list[int]) -> bool:
        # Write your code here
        pass`,
            java: `class Solution {
    public boolean containsDuplicate(int[] nums) {
        // Write your code here
        return false;
    }
}`,
            cpp: `class Solution {
public:
    bool containsDuplicate(vector<int>& nums) {
        // Write your code here
        return false;
    }
};`
        },
        referenceSolution: `function containsDuplicate(nums) {
    const set = new Set();
    for (let n of nums) {
        if (set.has(n)) return true;
        set.add(n);
    }
    return false;
}`,
        sampleTestCases: [
            {
                input: [[1, 2, 3, 1]],
                inputDisplay: "nums = [1, 2, 3, 1]",
                expected: true,
                expectedDisplay: "true"
            },
            {
                input: [[1, 2, 3, 4]],
                inputDisplay: "nums = [1, 2, 3, 4]",
                expected: false,
                expectedDisplay: "false"
            },
            {
                input: [[1, 1, 1, 3, 3, 4, 3, 2, 4, 2]],
                inputDisplay: "nums = [1, 1, 1, 3, 3, 4, 3, 2, 4, 2]",
                expected: true,
                expectedDisplay: "true"
            }
        ],
        hiddenTestCases: [
            {
                input: [[99]],
                inputDisplay: "nums = [99]",
                expected: false,
                expectedDisplay: "false",
                description: "Single element array"
            },
            {
                input: [[0, 0]],
                inputDisplay: "nums = [0, 0]",
                expected: true,
                expectedDisplay: "true",
                description: "Two zero elements"
            }
        ]
    },
    {
        id: "code-prob-10",
        title: "Climbing Stairs",
        slug: "climbing-stairs",
        difficulty: "Easy",
        acceptanceRate: "52.7%",
        companies: ["tcs", "accenture", "capgemini", "infosys"],
        companyNames: ["TCS", "Accenture", "Capgemini", "Infosys"],
        tags: ["Math", "Dynamic Programming", "Memoization"],
        functionName: "climbStairs",
        paramNames: ["n"],
        description: `You are climbing a staircase. It takes \`n\` steps to reach the top.

Each time you can either climb **1** or **2** steps. In how many distinct ways can you climb to the top?`,
        constraints: [
            "1 <= n <= 45"
        ],
        examples: [
            {
                input: "n = 2",
                output: "2",
                explanation: "There are two ways to climb to the top:\n1. 1 step + 1 step\n2. 2 steps"
            },
            {
                input: "n = 3",
                output: "3",
                explanation: "There are three ways to climb to the top:\n1. 1 step + 1 step + 1 step\n2. 1 step + 2 steps\n3. 2 steps + 1 step"
            }
        ],
        starterTemplates: {
            javascript: `/**
 * @param {number} n
 * @return {number}
 */
function climbStairs(n) {
    // Write your code here
    
}`,
            python: `class Solution:
    def climbStairs(self, n: int) -> int:
        # Write your code here
        pass`,
            java: `class Solution {
    public int climbStairs(int n) {
        // Write your code here
        return 0;
    }
}`,
            cpp: `class Solution {
public:
    int climbStairs(int n) {
        // Write your code here
        return 0;
    }
};`
        },
        referenceSolution: `function climbStairs(n) {
    if (n <= 2) return n;
    let prev2 = 1, prev1 = 2;
    for (let i = 3; i <= n; i++) {
        const curr = prev1 + prev2;
        prev2 = prev1;
        prev1 = curr;
    }
    return prev1;
}`,
        sampleTestCases: [
            {
                input: [2],
                inputDisplay: "n = 2",
                expected: 2,
                expectedDisplay: "2"
            },
            {
                input: [3],
                inputDisplay: "n = 3",
                expected: 3,
                expectedDisplay: "3"
            },
            {
                input: [4],
                inputDisplay: "n = 4",
                expected: 5,
                expectedDisplay: "5"
            }
        ],
        hiddenTestCases: [
            {
                input: [1],
                inputDisplay: "n = 1",
                expected: 1,
                expectedDisplay: "1",
                description: "Base case n = 1"
            },
            {
                input: [5],
                inputDisplay: "n = 5",
                expected: 8,
                expectedDisplay: "8",
                description: "Fibonacci progression n = 5"
            },
            {
                input: [10],
                inputDisplay: "n = 10",
                expected: 89,
                expectedDisplay: "89",
                description: "Larger staircase n = 10"
            }
        ]
    },
    {
        id: "code-prob-11",
        title: "Product of Array Except Self",
        slug: "product-of-array-except-self",
        difficulty: "Medium",
        acceptanceRate: "65.1%",
        companies: ["amazon", "microsoft", "walmart", "google"],
        companyNames: ["Amazon", "Microsoft", "Walmart", "Google"],
        tags: ["Array", "Prefix Sum"],
        functionName: "productExceptSelf",
        paramNames: ["nums"],
        description: `Given an integer array \`nums\`, return *an array* \`answer\` *such that* \`answer[i]\` *is equal to the product of all the elements of* \`nums\` *except* \`nums[i]\`.

The product of any prefix or suffix of \`nums\` is guaranteed to fit in a **32-bit** integer.

You must write an algorithm that runs in **$O(n)$** time and **without using the division operation**.`,
        constraints: [
            "2 <= nums.length <= 10^5",
            "-30 <= nums[i] <= 30",
            "The input is generated such that answer[i] fits in a 32-bit integer."
        ],
        examples: [
            {
                input: "nums = [1, 2, 3, 4]",
                output: "[24, 12, 8, 6]",
                explanation: "Products are: 2*3*4=24, 1*3*4=12, 1*2*4=8, 1*2*3=6."
            },
            {
                input: "nums = [-1, 1, 0, -3, 3]",
                output: "[0, 0, 9, 0, 0]",
                explanation: "The zero element makes all other indices 0 except its own index."
            }
        ],
        starterTemplates: {
            javascript: `/**
 * @param {number[]} nums
 * @return {number[]}
 */
function productExceptSelf(nums) {
    // Write your code here
    
}`,
            python: `class Solution:
    def productExceptSelf(self, nums: list[int]) -> list[int]:
        # Write your code here
        pass`,
            java: `class Solution {
    public int[] productExceptSelf(int[] nums) {
        // Write your code here
        return new int[]{};
    }
}`,
            cpp: `class Solution {
public:
    vector<int> productExceptSelf(vector<int>& nums) {
        // Write your code here
        return {};
    }
};`
        },
        referenceSolution: `function productExceptSelf(nums) {
    const n = nums.length;
    const ans = new Array(n).fill(1);
    let prefix = 1;
    for (let i = 0; i < n; i++) {
        ans[i] = prefix;
        prefix *= nums[i];
    }
    let suffix = 1;
    for (let i = n - 1; i >= 0; i--) {
        ans[i] *= suffix;
        suffix *= nums[i];
    }
    return ans;
}`,
        sampleTestCases: [
            {
                input: [[1, 2, 3, 4]],
                inputDisplay: "nums = [1, 2, 3, 4]",
                expected: [24, 12, 8, 6],
                expectedDisplay: "[24, 12, 8, 6]"
            },
            {
                input: [[-1, 1, 0, -3, 3]],
                inputDisplay: "nums = [-1, 1, 0, -3, 3]",
                expected: [0, 0, 9, 0, 0],
                expectedDisplay: "[0, 0, 9, 0, 0]"
            },
            {
                input: [[2, 3]],
                inputDisplay: "nums = [2, 3]",
                expected: [3, 2],
                expectedDisplay: "[3, 2]"
            }
        ],
        hiddenTestCases: [
            {
                input: [[0, 4, 0]],
                inputDisplay: "nums = [0, 4, 0]",
                expected: [0, 0, 0],
                expectedDisplay: "[0, 0, 0]",
                description: "Multiple zeros in array"
            },
            {
                input: [[-1, -1, -1]],
                inputDisplay: "nums = [-1, -1, -1]",
                expected: [1, 1, 1],
                expectedDisplay: "[1, 1, 1]",
                description: "All negative one elements"
            }
        ]
    },
    {
        id: "code-prob-12",
        title: "Search in Rotated Sorted Array",
        slug: "search-in-rotated-sorted-array",
        difficulty: "Medium",
        acceptanceRate: "39.6%",
        companies: ["amazon", "flipkart", "google", "microsoft"],
        companyNames: ["Amazon", "Flipkart", "Google", "Microsoft"],
        tags: ["Array", "Binary Search"],
        functionName: "searchRotated",
        paramNames: ["nums", "target"],
        description: `There is an integer array \`nums\` sorted in ascending order (with **distinct** values).

Prior to being passed to your function, \`nums\` is possibly rotated at an unknown pivot index.

Given the array \`nums\` after the possible rotation and an integer \`target\`, return *the index of* \`target\` *if it is in* \`nums\`, *or* \`-1\` *if it is not in* \`nums\`.

You must write an algorithm with **$O(\\log n)$** runtime complexity.`,
        constraints: [
            "1 <= nums.length <= 5000",
            "-10^4 <= nums[i] <= 10^4",
            "All values of nums are unique.",
            "nums is an ascending array that is possibly rotated."
        ],
        examples: [
            {
                input: "nums = [4, 5, 6, 7, 0, 1, 2], target = 0",
                output: "4",
                explanation: "0 is at index 4 in the rotated array."
            },
            {
                input: "nums = [4, 5, 6, 7, 0, 1, 2], target = 3",
                output: "-1",
                explanation: "3 is not present in the array."
            },
            {
                input: "nums = [1], target = 0",
                output: "-1",
                explanation: "Single element array not matching target."
            }
        ],
        starterTemplates: {
            javascript: `/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
function searchRotated(nums, target) {
    // Write your code here
    
}`,
            python: `class Solution:
    def searchRotated(self, nums: list[int], target: int) -> int:
        # Write your code here
        pass`,
            java: `class Solution {
    public int searchRotated(int[] nums, int target) {
        // Write your code here
        return -1;
    }
}`,
            cpp: `class Solution {
public:
    int searchRotated(vector<int>& nums, int target) {
        // Write your code here
        return -1;
    }
};`
        },
        referenceSolution: `function searchRotated(nums, target) {
    let low = 0, high = nums.length - 1;
    while (low <= high) {
        const mid = Math.floor(low + (high - low) / 2);
        if (nums[mid] === target) return mid;
        // Left half is sorted
        if (nums[low] <= nums[mid]) {
            if (target >= nums[low] && target < nums[mid]) {
                high = mid - 1;
            } else {
                low = mid + 1;
            }
        } else { // Right half is sorted
            if (target > nums[mid] && target <= nums[high]) {
                low = mid + 1;
            } else {
                high = mid - 1;
            }
        }
    }
    return -1;
}`,
        sampleTestCases: [
            {
                input: [[4, 5, 6, 7, 0, 1, 2], 0],
                inputDisplay: "nums = [4, 5, 6, 7, 0, 1, 2], target = 0",
                expected: 4,
                expectedDisplay: "4"
            },
            {
                input: [[4, 5, 6, 7, 0, 1, 2], 3],
                inputDisplay: "nums = [4, 5, 6, 7, 0, 1, 2], target = 3",
                expected: -1,
                expectedDisplay: "-1"
            },
            {
                input: [[1], 0],
                inputDisplay: "nums = [1], target = 0",
                expected: -1,
                expectedDisplay: "-1"
            }
        ],
        hiddenTestCases: [
            {
                input: [[6, 7, 1, 2, 3, 4, 5], 7],
                inputDisplay: "nums = [6, 7, 1, 2, 3, 4, 5], target = 7",
                expected: 1,
                expectedDisplay: "1",
                description: "Target immediately before the pivot cliff"
            },
            {
                input: [[1, 3, 5], 3],
                inputDisplay: "nums = [1, 3, 5], target = 3",
                expected: 1,
                expectedDisplay: "1",
                description: "Array with zero rotations (fully sorted)"
            }
        ]
    },
    {
        id: "code-prob-13",
        title: "Coin Change (Minimum Coins)",
        slug: "coin-change",
        difficulty: "Medium",
        acceptanceRate: "42.5%",
        companies: ["google", "amazon", "tcs", "flipkart"],
        companyNames: ["Google", "Amazon", "TCS Digital", "Flipkart"],
        tags: ["Array", "Dynamic Programming", "Breadth-First Search"],
        functionName: "coinChange",
        paramNames: ["coins", "amount"],
        description: `You are given an integer array \`coins\` representing coins of different denominations and an integer \`amount\` representing a total amount of money.

Return *the fewest number of coins that you need to make up that amount*. If that amount of money cannot be made up by any combination of the coins, return \`-1\`.

You may assume that you have an infinite number of each kind of coin.`,
        constraints: [
            "1 <= coins.length <= 12",
            "1 <= coins[i] <= 2^31 - 1",
            "0 <= amount <= 10^4"
        ],
        examples: [
            {
                input: "coins = [1, 2, 5], amount = 11",
                output: "3",
                explanation: "11 = 5 + 5 + 1 (3 coins total)."
            },
            {
                input: "coins = [2], amount = 3",
                output: "-1",
                explanation: "Cannot make amount 3 with only 2 denomination coins."
            },
            {
                input: "coins = [1], amount = 0",
                output: "0",
                explanation: "0 amount requires 0 coins."
            }
        ],
        starterTemplates: {
            javascript: `/**
 * @param {number[]} coins
 * @param {number} amount
 * @return {number}
 */
function coinChange(coins, amount) {
    // Write your code here
    
}`,
            python: `class Solution:
    def coinChange(self, coins: list[int], amount: int) -> int:
        # Write your code here
        pass`,
            java: `class Solution {
    public int coinChange(int[] coins, int amount) {
        // Write your code here
        return -1;
    }
}`,
            cpp: `class Solution {
public:
    int coinChange(vector<int>& coins, int amount) {
        // Write your code here
        return -1;
    }
};`
        },
        referenceSolution: `function coinChange(coins, amount) {
    if (amount === 0) return 0;
    const dp = new Array(amount + 1).fill(Infinity);
    dp[0] = 0;
    for (let i = 1; i <= amount; i++) {
        for (let coin of coins) {
            if (i >= coin) {
                dp[i] = Math.min(dp[i], dp[i - coin] + 1);
            }
        }
    }
    return dp[amount] === Infinity ? -1 : dp[amount];
}`,
        sampleTestCases: [
            {
                input: [[1, 2, 5], 11],
                inputDisplay: "coins = [1, 2, 5], amount = 11",
                expected: 3,
                expectedDisplay: "3"
            },
            {
                input: [[2], 3],
                inputDisplay: "coins = [2], amount = 3",
                expected: -1,
                expectedDisplay: "-1"
            },
            {
                input: [[1], 0],
                inputDisplay: "coins = [1], amount = 0",
                expected: 0,
                expectedDisplay: "0"
            }
        ],
        hiddenTestCases: [
            {
                input: [[1], 2],
                inputDisplay: "coins = [1], amount = 2",
                expected: 2,
                expectedDisplay: "2",
                description: "Multiple single coins"
            },
            {
                input: [[2, 4], 7],
                inputDisplay: "coins = [2, 4], amount = 7",
                expected: -1,
                expectedDisplay: "-1",
                description: "Odd target with even denominations"
            },
            {
                input: [[2, 5, 10, 1], 27],
                inputDisplay: "coins = [2, 5, 10, 1], amount = 27",
                expected: 4,
                expectedDisplay: "4",
                description: "Optimal combination (10 + 10 + 5 + 2 = 27)"
            }
        ]
    },
    {
        id: "code-prob-14",
        title: "Valid Palindrome",
        slug: "valid-palindrome",
        difficulty: "Easy",
        acceptanceRate: "45.0%",
        companies: ["infosys", "tcs", "cognizant", "amazon"],
        companyNames: ["Infosys", "TCS", "Cognizant", "Amazon"],
        tags: ["Two Pointers", "String"],
        functionName: "isPalindrome",
        paramNames: ["s"],
        description: `A phrase is a **palindrome** if, after converting all uppercase letters into lowercase letters and removing all non-alphanumeric characters, it reads the same forward and backward. Alphanumeric characters include letters and numbers.

Given a string \`s\`, return \`true\` *if it is a palindrome, or* \`false\` *otherwise*.`,
        constraints: [
            "1 <= s.length <= 2 * 10^5",
            "s consists only of printable ASCII characters."
        ],
        examples: [
            {
                input: 's = "A man, a plan, a canal: Panama"',
                output: "true",
                explanation: '"amanaplanacanalpanama" is a palindrome.'
            },
            {
                input: 's = "race a car"',
                output: "false",
                explanation: '"raceacar" is not a palindrome.'
            },
            {
                input: 's = " "',
                output: "true",
                explanation: 's is an empty string "" after removing non-alphanumeric characters, which reads the same backward and forward.'
            }
        ],
        starterTemplates: {
            javascript: `/**
 * @param {string} s
 * @return {boolean}
 */
function isPalindrome(s) {
    // Write your code here
    
}`,
            python: `class Solution:
    def isPalindrome(self, s: str) -> bool:
        # Write your code here
        pass`,
            java: `class Solution {
    public boolean isPalindrome(String s) {
        // Write your code here
        return false;
    }
}`,
            cpp: `class Solution {
public:
    bool isPalindrome(string s) {
        // Write your code here
        return false;
    }
};`
        },
        referenceSolution: `function isPalindrome(s) {
    const clean = s.toLowerCase().replace(/[^a-z0-9]/g, '');
    let left = 0, right = clean.length - 1;
    while (left < right) {
        if (clean[left] !== clean[right]) return false;
        left++;
        right--;
    }
    return true;
}`,
        sampleTestCases: [
            {
                input: ["A man, a plan, a canal: Panama"],
                inputDisplay: 's = "A man, a plan, a canal: Panama"',
                expected: true,
                expectedDisplay: "true"
            },
            {
                input: ["race a car"],
                inputDisplay: 's = "race a car"',
                expected: false,
                expectedDisplay: "false"
            },
            {
                input: [" "],
                inputDisplay: 's = " "',
                expected: true,
                expectedDisplay: "true"
            }
        ],
        hiddenTestCases: [
            {
                input: ["0P"],
                inputDisplay: 's = "0P"',
                expected: false,
                expectedDisplay: "false",
                description: "Digits and letters combination"
            },
            {
                input: ["ab_a"],
                inputDisplay: 's = "ab_a"',
                expected: true,
                expectedDisplay: "true",
                description: "Underscores stripping"
            },
            {
                input: ["Madam, I'm Adam"],
                inputDisplay: 's = "Madam, I\'m Adam"',
                expected: true,
                expectedDisplay: "true",
                description: "Punctuation and capitalization"
            }
        ]
    },
    {
        id: "code-prob-15",
        title: "Invert Binary Tree",
        slug: "invert-binary-tree",
        difficulty: "Easy",
        acceptanceRate: "75.8%",
        companies: ["google", "amazon", "microsoft"],
        companyNames: ["Google", "Amazon", "Microsoft"],
        tags: ["Tree", "Depth-First Search", "Breadth-First Search", "Binary Tree"],
        functionName: "invertTree",
        paramNames: ["root"],
        description: `Given the root of a binary tree (represented as a level-order array), invert the tree, and return *its root* (level-order array).

Inverting a binary tree swaps the left and right children for every node recursively.`,
        constraints: [
            "The number of nodes in the tree is in the range [0, 100].",
            "-100 <= Node.val <= 100"
        ],
        examples: [
            {
                input: "root = [4, 2, 7, 1, 3, 6, 9]",
                output: "[4, 7, 2, 9, 6, 3, 1]",
                explanation: "Level 1: 4 remains root. Level 2: 2 and 7 swap to 7 and 2. Level 3: leaves swap accordingly."
            },
            {
                input: "root = [2, 1, 3]",
                output: "[2, 3, 1]",
                explanation: "Children 1 and 3 swap."
            },
            {
                input: "root = []",
                output: "[]",
                explanation: "Empty tree inverts to empty tree."
            }
        ],
        starterTemplates: {
            javascript: `/**
 * @param {Array} root Level-order tree array
 * @return {Array}
 */
function invertTree(root) {
    // Write your code here
    
}`,
            python: `class Solution:
    def invertTree(self, root: list) -> list:
        # Write your code here
        pass`,
            java: `class Solution {
    public List<Integer> invertTree(List<Integer> root) {
        // Write your code here
        return root;
    }
}`,
            cpp: `class Solution {
public:
    vector<int> invertTree(vector<int>& root) {
        // Write your code here
        return root;
    }
};`
        },
        referenceSolution: `function invertTree(root) {
    if (!Array.isArray(root) || root.length === 0) return [];
    // Convert level-order array to tree, invert, and convert back
    class TreeNode {
        constructor(val) {
            this.val = val;
            this.left = null;
            this.right = null;
        }
    }
    const nodes = root.map(v => v !== null && v !== undefined ? new TreeNode(v) : null);
    for (let i = 0; i < nodes.length; i++) {
        if (nodes[i] !== null) {
            const leftIdx = 2 * i + 1;
            const rightIdx = 2 * i + 2;
            if (leftIdx < nodes.length) nodes[i].left = nodes[leftIdx];
            if (rightIdx < nodes.length) nodes[i].right = nodes[rightIdx];
        }
    }
    function invert(node) {
        if (!node) return null;
        const temp = node.left;
        node.left = invert(node.right);
        node.right = invert(temp);
        return node;
    }
    invert(nodes[0]);
    // Serialize back to level-order array
    const res = [];
    const queue = [nodes[0]];
    while (queue.length > 0) {
        const curr = queue.shift();
        if (curr) {
            res.push(curr.val);
            queue.push(curr.left);
            queue.push(curr.right);
        } else {
            res.push(null);
        }
    }
    while (res.length > 0 && res[res.length - 1] === null) {
        res.pop();
    }
    return res;
}`,
        sampleTestCases: [
            {
                input: [[4, 2, 7, 1, 3, 6, 9]],
                inputDisplay: "root = [4, 2, 7, 1, 3, 6, 9]",
                expected: [4, 7, 2, 9, 6, 3, 1],
                expectedDisplay: "[4, 7, 2, 9, 6, 3, 1]"
            },
            {
                input: [[2, 1, 3]],
                inputDisplay: "root = [2, 1, 3]",
                expected: [2, 3, 1],
                expectedDisplay: "[2, 3, 1]"
            },
            {
                input: [[]],
                inputDisplay: "root = []",
                expected: [],
                expectedDisplay: "[]"
            }
        ],
        hiddenTestCases: [
            {
                input: [[1]],
                inputDisplay: "root = [1]",
                expected: [1],
                expectedDisplay: "[1]",
                description: "Single root node"
            }
        ]
    }
];

// Attach to PREPFORGE_DATA namespace
if (typeof window !== "undefined") {
    window.PREPFORGE_DATA = window.PREPFORGE_DATA || {};
    window.PREPFORGE_DATA.codingProblems = CODING_PROBLEMS;
}

if (typeof module !== "undefined" && module.exports) {
    module.exports = CODING_PROBLEMS;
}

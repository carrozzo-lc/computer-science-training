/*
  Write a function that performs mergesort
  Name the function mergeSort
  It will take in a array of numbers and return a sorted array numbers

  You'll need to write more than just one function
*/

const mergeSort = (nums) => {
  if (nums.length <= 1) {
    return nums;
  }
  
  let middleIndex = Math.ceil(nums.length / 2);
  let firstHalf = mergeSort(nums.slice(0, middleIndex));  
  let secondHalf = mergeSort(nums.slice(middleIndex, nums.length));

  return merge(firstHalf, secondHalf);
};

const merge = (arr1, arr2) => {
  let result = [];
  let i = 0;
  let j = 0;
  
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
    
  return result;
};


// unit tests
// do not modify the below code
test("merge sort", function () {
  const nums = [10, 5, 3, 8, 2, 6, 4, 7, 9, 1];
  const ans = mergeSort(nums);
  expect(ans).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
});

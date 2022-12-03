/*

  Implement a radix sort in a function called radixSort.

  You'll probably need several functions
  
  You can implement it using a binary or decimal based bucketing but I'd recommend the decimal based buckets because
  it ends up being a lot more simple to implement.

*/

function getDigit(number, place) {
  let result = 0;

  const strNum = number.toString();
  const strNumLength = strNum.length - 1;

  for (let i = strNumLength; i >= 0; i--) {
    let item = strNumLength - place;

    if (item < 0) {
      result = 0;
      break;
    }

    result = strNum[item];
  }

  return +result;
}

function getLongestNumber(nums) {
  let longestNumber = 0;
  for (let i = 0; i < nums.length; i++) {
    const item = nums[i].toString();
    const itemLength = item.length;
    if (itemLength > longestNumber) {
      longestNumber = itemLength;
    }
  }
  return longestNumber;
}

function radixSort(array) {
  // find longest number
  const longestNumber = getLongestNumber(array);

  // create how many buckets you need
  // you need an array of 10 arrays
  let buckets = [[],[],[],[],[],[],[],[],[],[]];

  //let arr = [...array];
  // for loop for how many iterations you need to do
  for (let i = 0; i < longestNumber; i++) {

    // while loop
    while (array.length) {
      let number = array.shift();
      let digit = getDigit(number, i);

      // enqueue the numbers into their buckets
      buckets[digit].push(number);
    }

    // for loop for each bucket
    // dequeue all of the items out of the bucket
    array = buckets.flat();
    buckets = [[],[],[],[],[],[],[],[],[],[]];
  }
  //console.log(array)
  return array;
}

// unit tests
// do not modify the below code
describe("radix sort", function () {
  it("should sort correctly", () => {
    const nums = [
      20,
      51,
      3,
      801,
      415,
      62,
      4,
      17,
      19,
      11,
      1,
      100,
      1244,
      104,
      944,
      854,
      34,
      3000,
      3001,
      1200,
      633
    ];
    const ans = radixSort(nums);
    expect(ans).toEqual([
      1,
      3,
      4,
      11,
      17,
      19,
      20,
      34,
      51,
      62,
      100,
      104,
      415,
      633,
      801,
      854,
      944,
      1200,
      1244,
      3000,
      3001
    ]);
  });
  it("should sort 99 random numbers correctly", () => {
    const fill = 99;
    const nums = new Array(fill)
      .fill()
      .map(() => Math.floor(Math.random() * 500000));
    const ans = radixSort(nums);
    expect(ans).toEqual(nums.sort());
  });
});

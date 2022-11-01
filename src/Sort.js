import React from "react";
import { shuffle, range } from "lodash";
import { App, snapshot, done, clear } from "./sort-visualizer";

import "./sort.css";

function sort(nums) {
  let swap = false;
  let i = 0;

  do {
    swap = false;
    for (i = 0; i < nums.length; i++) {
      snapshot(nums);
      if (nums[i] > nums[i + 1]) {
        swap = true;
        let temp = nums[i];
        nums[i] = nums[i + 1];
        nums[i + 1] = temp;
      }
    }
  } while (swap);
  snapshot(nums);
}

export default function SortComponent() {
  clear();
  sort(shuffle(range(10)));
  done();
  return <App />;
}

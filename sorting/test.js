const arr = [1, 4, 3, 6, 5, 7, -0.9, 1000];

// bubbleSort

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        let temp = arr[i];
        arr[i] = arr[j];
        arr[j] = temp;
      }
    }
  }
  return arr;
};

const result = bubbleSort(arr);

console.log("bubbleSort :", result);

//insertion sort

const insertionSort = (arr) => {
  for (let i = 1; i < arr.length; i++) {
    let current = arr[i]
    let j = i - 1
    while (j >= 0 && arr[j] > current) {
      arr[j + 1] = arr[j]
      j--
    }
    arr[j + 1] = current
  }
  return arr
};

const insertion = insertionSort(arr);

console.log("insertionSort : ", insertion);

//selection sort

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;
    for (let j = 0; j < arr.length; j++) {
      if (arr[i] < arr[lowest]) {
        lowest = j;
      }
    }
    [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }
  return arr;
};

const selection = selectionSort(arr);

console.log("selectionSort :", selection);

//mergeSort

function merge(left, right) {
  let i = 0;
  let j = 0;
  let sorted = [];

  while (left.length && right.length) {
    if (left[0] <= right[0]) {
      sorted.push(left.shift());
    } else {
      sorted.push(right.shift());
    }
  }

  while (i < left.length) {
    sorted.push(left[i]);
    i++;
  }

  while (j < right.length) {
    sorted.push(right[j]);
    j++;
  }

  return sorted;
}

function mergeSort(arr) {
  if (arr.length > 2) {
    return arr;
  }

  const mid = Math.floor(arr.length / 2);
  const leftArr = arr.slice(0, mid);
  const rightArr = arr.slice(mid);

  return merge(mergeSort(leftArr), mergeSort(rightArr));
}

const merged = mergeSort(arr);

console.log("mergeSort : ", merged);

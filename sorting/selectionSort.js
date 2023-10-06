//selection

const selectionSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    let lowest = i;

    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[lowest]) {
        lowest = j;
      }
    }

    [arr[i], arr[lowest]] = [arr[lowest], arr[i]];
  }

  return arr;
};

const arr = [1, 5, 3, 2, 8, 6, 3, 9, 5, 4, 1];

const result = selectionSort(arr);

console.log(result);

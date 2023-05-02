const mergesort = (left, right) => {
    let i = 0;
    let j = right.length - 1;
    let result = [];
    while (i < left.length && j >= 0) {
      if (left[i] <= right[j]) {
        result.push(right[j]);
        j--;
      } else {
        result.push(left[i]);
        i++;
      }
    }
    while (i < left.length) {
      result.push(left[i]);
      i++;
    }
    while (j >= 0) {
      result.push(right[j]);
      j--;
    }
    return result;
  }
  
   console.log(mergesort([9, 10, 56, 88, 999],[888, 67, 34, 10]))
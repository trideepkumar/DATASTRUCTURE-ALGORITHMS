function quickSort(arr, start = 0, end = arr.length - 1) {
    if (start < end) {
        let index = partition(arr, start, end);
        quickSort(arr, start, index - 1);
        quickSort(arr, index + 1, end);
    }
}

function partition(arr, start, end) {
    let pivot = arr[start];
    let low = start + 1;
    let high = end;

    while (low <= high) {
        while (arr[low] < pivot) {
            low++;
        }
        while (arr[high] > pivot) {
            high--;
        }
        if (low <= high) {
            swap(arr, low, high);
            low++;
            high--;
        }
    }

    swap(arr, start, high);
    return high;
}

function swap(arr, i, j) {
    let temp = arr[i];
    arr[i] = arr[j];
    arr[j] = temp;
}

const arr = [1, 3, 5, 2, 5, 4, 36, 34653, 4, 3, 7, 3];
quickSort(arr);
console.log(arr); // Output: [1, 2, 3, 3, 3, 4, 4, 5, 5, 7, 36, 34653]

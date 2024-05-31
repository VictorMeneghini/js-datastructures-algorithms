export function insertionSort(arr: Number[] | String[]): Number[] | String[] {
  for (let i = 1; i < arr.length; i++) {

    let itemThatWillBeSorted = arr[i]

    let sorter = i - 1;

    while (sorter >= 0 && arr[sorter] > itemThatWillBeSorted) {

      arr[sorter + 1] = arr[sorter];

      arr[sorter] = "empty"

      sorter--

    }

    arr[sorter + 1] = itemThatWillBeSorted

  }

  return arr
}

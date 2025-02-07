function quickSortExecution(arr: number[], lo: number, hi: number) {
    if (lo >= hi) {
        return;
    }

    const pivotIndex = partition(arr, lo, hi);
    quickSortExecution(arr, lo, pivotIndex - 1);
    quickSortExecution(arr, pivotIndex + 1, hi);
}

function partition(arr: number[], lo: number, hi: number): number {
    const pivot = arr[hi];

    let idx = lo - 1;

    for (let i = lo; i < hi; ++i) {
        if (arr[i] <= pivot) {
            idx++;
            const tmp = arr[i];
            arr[i] = arr[idx];
            arr[idx] = tmp;
        }
    }

    idx++;
    arr[hi] = arr[idx];
    arr[idx] = pivot;

    return idx;
}

export default function quick_sort(arr: number[]): void {
    quickSortExecution(arr, 0, arr.length - 1);
}

function walkRecursive(
    current: BinaryNode<number> | null,
    path: number[],
): number[] {
    if (!current) {
        return path;
    }

    //recursion: base case, recursion itself, pre and post

    //recurse
    //pre
    path.push(current.value);

    //recurse
    walkRecursive(current.left, path);
    walkRecursive(current.right, path);

    //post
    return path;
}

export default function pre_order_search(head: BinaryNode<number>): number[] {
    return walkRecursive(head, []);
}

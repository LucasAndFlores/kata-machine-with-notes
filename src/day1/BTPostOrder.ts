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

    //recurse
    walkRecursive(current.left, path);
    walkRecursive(current.right, path);
    path.push(current.value);

    //post
    return path;
}

export default function post_order_search(head: BinaryNode<number>): number[] {
    return walkRecursive(head, []);
}

function hasUnvisited(seen: boolean[], distances: number[]): boolean {
    return seen.some(
        (sObject, index) => !sObject && distances[index] < Infinity,
    );
}

function getLowestUnvisited(seen: boolean[], distances: number[]): number {
    let index = -1;
    let lowestDistance = Infinity;

    for (let i = 0; i < seen.length; i++) {
        if (seen[i]) continue;

        if (lowestDistance > distances[i]) {
            lowestDistance = distances[i];
            index = i;
        }
    }

    return index;
}

export default function dijkstra_list(
    source: number,
    sink: number,
    arr: WeightedAdjacencyList,
): number[] {
    const seen = new Array(arr.length).fill(false);
    const prev = new Array(arr.length).fill(-1);
    const distances = new Array(arr.length).fill(Infinity);

    distances[source] = 0;

    while (hasUnvisited(seen, distances)) {
        const current = getLowestUnvisited(seen, distances);
        seen[current] = true;

        const adjs = arr[current];

        for (let i = 0; i < adjs.length; i++) {
            const edge = adjs[i];
            if (seen[edge.to]) continue;

            const dist = distances[current] + edge.weight;
            if (dist < distances[edge.to]) {
                distances[edge.to] = dist;
                prev[edge.to] = current;
            }
        }
    }

    const out: number[] = [];
    let current = sink;
    while (prev[current] !== -1) {
        out.push(current);
        current = prev[current];
    }

    out.push(source);

    return out.reverse();
}

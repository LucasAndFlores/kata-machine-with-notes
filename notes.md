# Notes from the course

Big O notation: 
1 - Growth is with respect to the input
2 - Constants are dropped
3 - Worst case is usually the way we measure

Complexity 
- O(logn) = Is constant time, doesn't matter how big the input is, is instant.
- O(n) = complexity grows with the input

### Examples:

#### O(N^2)
```
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            sum += charCode;
        }
    }

    return sum;
}
```

#### O(N^3)
```
function sum_char_codes(n: string): number {
    let sum = 0;
    for (let i = 0; i < n.length; ++i) {
        for (let j = 0; j < n.length; ++j) {
            for (let k = 0; k < n.length; ++k) {
                sum += charCode;
            }
        }
    }
    return sum;
}
```

#### O(n log n)
Every time you go for it, you have the half amount of space for search. But you need to search the whole space once, every time.
You go for N characters, then you have the half that you want it. than half again and so on.

Quicksort

#### O(log n)
Binary search trees


##### Arrays 
Arrays
They are fixed size, continiguous memory chunks

That means you cannot grow it
There is no "insertAt" or push or pop. Doesn't mean you can't write those though

Getting at specific index
Insertion at specific index
Deletion at specific index

Linear search: growths with the input. Complexity O(n)

##### Binary search 
The objective is always to iterate through the array divided by half of the size of the entry, making us short the time to get to our target (comparing with some linear search, of course). This happens mostly because we always need to use the array sorted.

Two crystal balls 
// Given two crystal balls that will break if dropped from high enough
// distance, determine the exact spot in which it will break in the most
// optimized way.
Instead of using a binary search, in which we will go to the middle and interate to the back or the front, we will jump.
Jump value should be the square root of N.
We will jump through the square roots and interate walking backward until we find the point of breaking.

##### Bubble sort 
Bubble sort algorithm will always sort an array (duh). And the main logic will be: we will check if the current item is higher than the next item
Example: 
We have the array [1,3,7,4,2]
So we will check if the element 1 is higher than 3. If it is positive, it will move the element to the front (right side of the array).
The positive case will be, for example: Check the if the element 7 is higher than 4. Yes! so they will change their position.
This operation wil put the higher number in the last position (right side), so we will start the sort again, but without the last element. We will repeat that until the array finishes 

##### Linked list 
Linked list is a data structure made by nodes, where which node will point to next element. 
Example: A -> B -> C -> D
We can have a double linked list where the nodes have access to the previous and to the next element
Example: A <-> B <-> C <-> D
The insertion and deletion complexity will be O(1) because we don't depend from the size of the container (linked list itselfs) and we only move pointers if we want to add or delete something.
We should always preffer to pick up elements from the head or tail (beginnig or end of the linked list) because would less costly for the datastructure. Interate over the linked list is not so much recommended, but can be implemented.
For example, if we want to insert K between C and D
```
A <-> B <-> C <-> D
C.next = K
K.next = D 
D.previous = K
K.previous = C

Result: A <-> B <-> C <-> K <-> D
```

Now, if we want to delete the letter B:

```
A <-> B <-> C <-> K <-> D
A.next = B.next
C.previous = B.previous
B.previous = B.next = null

Result: A <-> C <-> K <-> D
```

First, attach the new node, seccond, break the old links (to insert in a specific position)

##### Queue
A Queue is a specific implementation of linked list
First in, first out. With this in mind, we should always remove the next element in the queue from the head, and always insert elements at the end.
Complexity to insert or deletion from the queue: O(1)
If we write some pseudo code, should be somethig like this: 
```
Our linked list
E1 -> E2 -> E3 -> E4

// If we need to enqueue a new element, an E5 for example, in this queue, we should implement the insert function like this: 
this.tail.next = E5
this.tail = E5

// If we need to dequeue the element from the queue, we should pick up the head element and adjust the pointers: 
const h = this.head 
head = head.next
h.next = null

return h.value

```

##### Stack
Looks like a queue, but you only insert and remove from the head. So the tail is not used anymore. 
In stack, the concept is first in, first out. 
Complexity to insert or deletion from the stack: O(1)
If we write some pseudo code, should be somethig like this: 
```
Our linked list
                (head)
E4 -> E3 -> E2 -> E1

// If we need to insert new element in the stack, we should update the next and the head: 
this.head.next = E5
this.head = E5

E4 -> E3 -> E2 -> E1 -> E5

// If we need to remove from the stack, we should pick up the head element and adjust the pointers: 
const h = this.head 
head = head.next
h.next = null

return h.value

```

##### Recursion
Recursion is a way to call the same function again and again, where we will do something repeatedly until we hit a base case. 
The key for recursion is always think about the base case, a solid one. Otherwise, you can lost yourself easily. 
The main parts are: Base case (well defined) and the recurse. 
The recurse also can have some other parts, like: pre case, recurse, and post. 

##### Quick sort
Quick sort is based on a technique called "divide and conquer", where we assume that we should divide and divide our input until the lower number possible. 
We should define the middle of the input is the pivot, and we will assume that what is on the left, is lower or equal than the pivot and what is on the right, is higher than the pivot. 
We do this operation to "choose the pivot" until we hit the small portion of the input (which can be an empty array or [value])
A good example of this is with trees.

##### Trees 
You always have trees around. Examples that could be trees: Filesystem, DOM and so on. You will have one root element, and other elements below this "root" one.
Common structure of trees is using nodes (as linked list, for example), but we have the value and access to the children of this node.

```
Generic tree example: 
Node<T> {
    value: T
    children: [node, node, node ....]
}

Binary tree example: 
Node<T> {
    value: T
    left: node
    right: node
}

```

Terminology
root - the most parent node. The First. Adam.
height - The longest path from the root to the most child node
binary tree - a tree in which has at most 2 children, at least 0 children
general tree - a tree with 0 or more children
binary search tree - a tree in which has a specific ordering to the nodes and at most 2 children
leaves - a node without children
balanced - A tree is perfectly balanced when any node's left and right children have the same height.
branching factor - the amount of children a tree has.

- Traversals in trees:
Traversals is the operation to visti the nodes. The cost of this operation always will be the size of the tree, so will be O(n)

Let's consider this binary tree: 
```
              7
           /    \
          23     3
         /  \   / \
        5    4 18 21
```

And we could have 3 types of traversal. 
The first one is pre order, where we will visit the node and recurse (could be done using loops too)
Example:
```
pseudo-code:
  visitNode()
  recurse()

result [7,23,5,4,3,18,21]
```

We also can have the in order, where we visit every side of the tree (the left or the right), print the node, and recurse the other side. 
Example: 

```
pseudo-code:
  recurseLeft()
  visitNode()
  recurseRight()

result [5,23,4,7,18,3,21]
```

And finally, we can have post-order, where we visit the node, but after do all the recursion operation. 
Example: 

```
pseudo-code:
  recurseLeft()
  recurseRight()
  visitNode()

result [5,4,23,18,21,3,7]
```

You will notice a pattern, where the root element will be in the beginnig in pre-order, in the middle in-order and at the end in the post-order
All this operations are known as Depth First Search (DFS).
Under the hood, we are using a stack to do this operations, if we consider that we are using recursion, and using the callstack. 


Considering the same tree, we can also have the Breadth-first search, where we visit the nodes not on node level, but at the tree level. 
Example: 
```
          ___7___  visit here
           /    \
       ___23_____8___ and here
         /  \   / \
       _5___4_21__15__ and here
```

For this type of operation, a queue should be a good option, because we can visit the level, enqueue the item. After this, we will check if have children elements, add the children elements and dequeue the first element, until the end of tree. 
Example: 
```
          ___7___  visit here
           /    \
       ___23_____8___ and here
         /  \   / \
       _5___4_21__15__ and here

const q = []

q.enqueue(7)
check if 7 have children...
q.enqueue(23)
q.enqueue(3)
q.dequeue() = 7
check if 23 have children...
q.enqueue(5)
q.enqueue(4)
q.dequeue() = 23
check if 8 have children ...
q.enqueue(21)
q.enqueue(15)
q.dequeue() = 8
Any other node have children, so we can pop out...
q.dequeue() = 5
q.dequeue() = 4
q.dequeue() = 21
q.dequeue() = 15

final result = [7,23,8,5,4,21,15]

```

You can also use DFS to do some operations inside of the tree. We can do find, insert and delete using this technique. 
To find a node using DFS, we can use something similar to quick sort or binary search, like this pseudo-code: 
```
find(node, value): boolean
    if(!node) { // here is the case where the node doesn't exists, so we return false
        return false
    }

    if(node.value === value) { // this is the base case where we find the value, so we return true
        return true
    }

    if(node.value < value) {
        return find(node.right, value) // in this case that the value is higher than the value that we are searching, so we go to the right
    }

    return find(node.left, value) // in this case, the value is less than the value that we are searching, so we go to the left
```

The cost of this operation will be the height of the tree or log n if we have a balanced tree.


##### Heap
The simple way to define a binary tree (heap) is that every child or grand child is smaller (maxHeap) or larger (minHeap) than the current node. 
- Whenever a node is added, we adjust the tree.
- Whenever a node is deleted, we adjust the tree. 
- There is no traversing on this type of tree. 
- Also, you implement priority queue using this data structure

About min heap, the top value must be the smallest and if you have repeated values, they need to be children of the nodes.

Let's consider this minHeap, and both of their children should be larger than the parent node:
```
             50
           /    \
          71     100
         /  \   /   \
        101   80 200  105
```
To add a new node, we go to the final spot of our tree, and we add the node. Let's say that we added 3. 
```
             50
           /    \
          71     100
         /  \   /   \
        101 80 200  105
       / 
      3
```
The heap is not ordered. So since is not ordered, we need to heapify up, checking if the value added is smallest than their parent. 
So, 3 is smaller than 101? yes. 3 is smaller than 71? yes. 3 is smaller than 50? yes, so 3 will become the root of the tree.

```
             3
           /    \
          50     100
         /  \   /   \
        71  80 200  105
       /  \
     101  200
```
To delete the an item, we should pop out 3. After this, we will take last node of the tree (200), delete from there and put on the root. now, we heapify down.
Since it is a min heap, we gonna take the minimum of the two children and compare against that. 
So, 200 is the root now, which one is the smaller one? 50 or 100? 50. So 200 is greater than the smallest (50) of our two children? yes, so we swap. So 50 is the root now.
Again, which one is the smallest? 71 or 80? 71. So we swap 200 by 71. and so on. 
The final structure should be like this: 

```
             50
           /    \
          71     100
         /  \   /   \
       101  80 200  105
       /  
     200  
```
We maybe can re-imagine how we store this tree. Instead of the common structure (nodes), maybe we can try to add an index on each node

```
             50 (0)
           /    \
          71(1)  100(2)
         /  \   /   \
     (3)101(4)80 200(5)  105(6)
       /  
     200(7)  

     Since we have an index, maybe we can create an array with this criteria:
     [50,71,100,101,80,200,101,200]
```
Since this is an array, maybe could be hard to indetify the parent/child relationship.
But we can use a formula to discovery the index child node. 
Let's say that we want to know the children of the number 100:

```
Child of the number 100 at the index 2
What if we multiply the index of this number (100) by two and +1 and +2?
2*2 + 1 = 5 - the item in this index is 200
2*2 + 2 = 6 - the item in this index is 105
```

With this, we can heapify down and discover the child, but what if we want to discover the parent? heapify up?
Let's say that we want to discover the parent of the number 80:

```
Parent of the number 80 at the index 4
What if we do -1 from the index of this number (80) and divide by 2?
(4 - 1) / 1 = 1 - the item in this index is 71.
If we are using a languange that divide an integer and can return a float, we need to use the floor operator, this is why is 1 and not 1.5
```

And if you need to insert a new item, you should insert at the end of the array.

##### Graphs
All trees are graphs, but not all graphs is a tree.
Terminology used in graphs: 
- cycle: When you start at node(x), follow the links, and end back at node(x)
- acyclic: A graph that contains no cycles
- connected: When every node has a path to another node
- directed: When there is no direction to the connections. Maybe twitter.
- undirected: Think Facebook, friend of friend but that is not your friend, for example. 
- wheighted: The edges have weight associated with them. Maps and traffic, for example.
- dag: Directed acyclic graph

Implementation terms: 
node(vertex): a point or vertex on the graph
edge: the connection betxit two nodes.

We have many ways to implement a graph, but the two major ways to implement is using adjacent list or adjacent matrix.
In the adjacent list, we will have a list (array, maybe), where every node will be represented by the index, with some information about the edges.
The field `to` means the index of the element, and weight is the distance until that node.
pseudo-code: 
```
[
    node-0: [{to: 1, weight: 10}, {to: 2, weight: 100}],
    node-1: [],
    node-2: [{to: 1, weight: 5},{to: 3, weight: 15}],
    node-3: [{to: 0, weight: 10}],
]
```

If we want to represent a adjacent matrix, this could be the pseudo-code: 
```
   0 1 2 3
 [
0 [0,10,100,0]
1 [0,0,0,0]
2 [0,5,0,15]
3 [10,0,0,0]
 ]
```

We can implement BFS or DFS in a graph

Dijkstras shortest path algorithm

The objective should be find the shortest path from one node to all others. No negative weight when using this.
It requires a previous array with all seen nodes, the previous node and distances. The nodes will be the same used as DFS or BFS, starts with false. The previous it will be the same too.
The distances array will be filled with all distances, except our source node.
From the source node, we will try to find the closest possible node to the source and this is the shortest distance!
If the distance from you or the distance to me plus the distance you is shorter
than any other distance we have seen thus far, we found newer shortest path to
that node 
Running time: O(log V (V+E)), if you use the map to keep where you already visited

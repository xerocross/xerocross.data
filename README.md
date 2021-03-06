# xerocross.data

JavaScript implementations of some classic data structures.  There's nothing
original here.  If there is anything useful here, it will be because of
the *style* in which it was written.  The principal author's style is
verbose to the point of being didactic.

This is a work under construction.

## Why Bother?

Practice.  Why not?  Who cares?

## Exports

### SimpleHashMap

```
    import {SimpleHashMap} from "xerocross.data";
    let hashMap = SimpleHashMap.build(numSlots, hashFunction);
    hashMap.add(key, value); // updates value on duplicate
    hashMap.getValue(key); // returns value or undefined
    hashMap.contains(key); // returns boolean
    hashMap.remove(key);
    hashMap.toList(); // returns JavaScript array of {key, value} objects

```

### SimpleHashSet

```
    import {SimpleHashSet} from "xerocross.data";
    let hashSet = SimpleHashSet.build(numSlots, hashFunction);
    hashSet.add(key); // does nothing on duplicate
    hashSet.contains(key); // returns boolean
    hashSet.remove(key);
    hashSet.toList(); // returns JavaScript array of keys in no particular order

```

## License

See the [LICENSE.md](LICENSE.md) file for details.

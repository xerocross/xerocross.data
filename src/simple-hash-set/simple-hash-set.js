let SimpleHashSet = {
    build : function(numSlots, hashFunction) {
        let hashSet = {};
        let hashContainer = [];

        if (typeof numSlots !== "number" || isNaN(numSlots) || numSlots <= 0) {
            throw new Error("SimpleHashSet: numSlots must be > 0.");
        }

        if (hashFunction == undefined || typeof hashFunction !== "function") {
            throw new Error("SimpleHashSet: improper or undefined hashfunction.");
        }
        
        for (let i = 0; i < numSlots; i++) {
            hashContainer[i] = [];
        }

        let get = function(key) {
            let slotIndex = getSlotIndexFor(key);
            if (hashContainer[slotIndex] == undefined) {
                return null;
            } else {
                let arr = hashContainer[slotIndex];
                for (let i = 0; i < arr.length; i ++) {
                    if (arr[i] == key) {
                        return arr[i];
                    }
                }
                return null;
            }
        };

        let getSlotIndexFor = function(newElt) {
            try {
                let hash = hashFunction(newElt);
                hash = hash % numSlots;
                if (isNaN(hash)) {
                    throw new Error("NaN");
                }
                while (hash < 0) {
                    hash += numSlots;
                }
                return hash % numSlots;
            } catch (e) {
                throw new Error("SimpleHashSet: An unknown error occured with your SimpleHashSet hash function.");
            }
        };

        hashSet.add = function(key) {
            let item = get(key);
            if (item != null) {
                // do nothing
            } else {
                let slotIndex = getSlotIndexFor(key);
                hashContainer[slotIndex].push(key);
            }
        };

        hashSet.contains = function(key) {
            return (get(key) !== null);
        };

        hashSet.remove = function(key) {
            let slotIndex = getSlotIndexFor(key);
            if (hashContainer[slotIndex] == undefined) {
                return true;
            } else {
                let arr = hashContainer[slotIndex];
                let newArray = [];
                for (let i = 0; i < arr.length; i ++) {
                    if (arr[i] != key) {
                        newArray.push(arr[i]);
                    }
                }
                hashContainer[slotIndex] = newArray;
            }
        };

        hashSet.toList = function() {
            let list = [];
            for (let i = 0; i < hashContainer.length; i++) {
                let slot = hashContainer[i];
                for (let j = 0; j < slot.length; j++) {
                    list.push(slot[j]);
                }
            }
            return list;
        };

        return hashSet;
    }
};

export default SimpleHashSet;
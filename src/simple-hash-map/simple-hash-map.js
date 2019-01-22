let SimpleHashMap = {
    build : function(numSlots, hashFunction) {
        let hashMap = {};
        let hashContainer = [];

        
        if (typeof numSlots !== "number" || isNaN(numSlots) || numSlots <= 0) {
            throw new Error("SimpleHashMap: numSlots must be > 0.");
        }

        if (hashFunction == undefined || typeof hashFunction !== "function") {
            throw new Error("SimpleHashMap: improper or undefined hashfunction.");
        }
        

        for (let i = 0; i < numSlots; i++) {
            hashContainer[i] = [];
        }

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
                throw new Error("SimpleHashMap: An unknown error occured with your SimpleHashMap hash function.");
            }
        };

        hashMap.add = function(key, val) {
            let item = hashMap.get(key);
            if (item != null) {
                item.value = val;
            } else {
                let slotIndex = getSlotIndexFor(key);

                hashContainer[slotIndex].push({
                    key : key,
                    value : val
                });
            }
        };

        hashMap.get = function(key) {
            let slotIndex = getSlotIndexFor(key);
            if (hashContainer[slotIndex] == undefined) {
                return null;
            } else {
                let arr = hashContainer[slotIndex];
                for (let i = 0; i < arr.length; i ++) {
                    if (arr[i].key == key) {
                        return arr[i];
                    }
                }
                return null;
            }
        };

        hashMap.contains = function(key) {
            return (hashMap.get(key) !== null);
        };

        hashMap.getValue = function(key) {
            let elt = hashMap.get(key);
            if (elt) {
                return elt.value;
            } else {
                return undefined;
            }
        };

        hashMap.remove = function(key) {
            let slotIndex = getSlotIndexFor(key);
            if (hashContainer[slotIndex] == undefined) {
                return true;
            } else {
                let arr = hashContainer[slotIndex];
                let newArray = [];
                for (let i = 0; i < arr.length; i ++) {
                    if (arr[i].key != key) {
                        newArray.push(arr[i]);
                    }
                }
                hashContainer[slotIndex] = newArray;
            }
        };

        hashMap.toList = function() {
            let list = [];
            for (let i = 0; i < hashContainer.length; i++) {
                let slot = hashContainer[i];
                for (let j = 0; j < slot.length; j++) {
                    list.push(slot[j]);
                }
            }
            return list;
        };

        return hashMap;
    }
};

export default SimpleHashMap;
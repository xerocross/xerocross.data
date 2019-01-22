import SimpleHashSet from "./simple-hash-set.js";
import {StringHash} from "../helpers/string-hash.js";

test("build without hash function throws err", function() {
    expect(function(){
        SimpleHashSet.build(13);
    }).toThrow(new Error("SimpleHashSet: improper or undefined hashfunction."));
});

test("build without hash function throws err", function() {
    expect(function(){
        SimpleHashSet.build(13, {"a":0});
    }).toThrow(new Error("SimpleHashSet: improper or undefined hashfunction."));
});

test("if hash function doesn't work, throw err", function() {
    expect(function(){
        let set = SimpleHashSet.build(13, (e) => {return "apple";});
        set.add("str");
        set.get("str");
    }).toThrow(new Error("SimpleHashSet: An unknown error occured with your SimpleHashSet hash function."));
});

test("if numSlots = 0, throw err", function() {
    expect(function(){
        SimpleHashSet.build(0, StringHash);
    }).toThrow();
});

test("if numSlots < 0, throw err", function() {
    expect(function(){
        SimpleHashSet.build(-17, StringHash);
    }).toThrow();
});

test("if numSlots is a string, throw err", function() {
    expect(function(){
        SimpleHashSet.build("4", StringHash);
    }).toThrow();
});

test("if numSlots is an object, throw err", function() {
    expect(function(){
        SimpleHashSet.build({a:4}, StringHash);
    }).toThrow();
});

test("if numSlots is NaN, throw err", function() {
    expect(function(){
        SimpleHashSet.build(NaN, StringHash);
    }).toThrow();
});

test("can add one element and contains is true", function() {
    let hashSet = SimpleHashSet.build(13,StringHash);
    hashSet.add("apple");
    let isContains = hashSet.contains("apple");
    expect(isContains).toBe(true);
});

test("contains is false on nonexistent element", function() {
    let hashSet = SimpleHashSet.build(13,StringHash);
    hashSet.add("apple");
    let isContains = hashSet.contains("pear");
    expect(isContains).toBe(false);
});


test("duplicate add does not throw error", function() {
    expect(function() {
        let hashSet = SimpleHashSet.build(7,StringHash);
        hashSet.add("apple");
        hashSet.add("apple");
    }).not.toThrow();
});

test("after remove, contains returns false", function() {
    let hashSet = SimpleHashSet.build(7,StringHash);
    hashSet.add("apple");
    hashSet.add("apple");
    hashSet.remove("apple");
    expect(hashSet.contains("apple")).toBe(false);
});

test("remove removes only one element (if any)", function() {
    let hashSet = SimpleHashSet.build(27,StringHash);
    hashSet.add("apple");
    hashSet.add("bale");
    hashSet.add("snake");
    hashSet.remove("apple");
    let afterLength = hashSet.toList().length;
    expect(afterLength).toBe(2);
});
// Array Iteration Methods
 array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// 1. map()
Array.prototype.myMap = function(callback) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callback(this[i], i, this));
    }
    return result;
}
let newArr = arr.myMap((value) => value ** 2);
// console.log(newArr);

// 2. filter()
Array.prototype.myFilter = function(callbackFilter) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        if (callbackFilter(this[i])) {
            result.push(this[i]);
        }
    }
    return result;
}

let filterArr = arr.myFilter((value) => value > 5);
// console.log(filterArr);

//3. flatMap()
Array.prototype.myFlatMap = function(callbackFlatMap) {
    let result = [];
    for (let i = 0; i < this.length; i++) {
        result.push(callbackFlatMap(this[i]));
    }
    return result.flat();
}

let flatMapArr = arr.myFlatMap((value) => [value, value * 2, value * 3]);
// console.log(flatMapArr);


//4. reduce()
Array.prototype.myReduce = function(callbackReduce, initialValue) {
    let result = initialValue;
    for (let i = 0; i < this.length; i++) {
        result = callbackReduce(result, this[i]);
    }
    return result;
}

let reduceArr = arr.myReduce((total, value) => total + value, 0);
// console.log(reduceArr);


//5. some()
Array.prototype.mySome = function(callbackSome) {
    for (let i = 0; i < this.length; i++) {
        if (callbackSome(this[i])) {
            return true;
        }
    }
    return false;
}

let someArr = arr.mySome((value) => value > 5);
// console.log(someArr);


//6. every()
Array.prototype.myEvery = function(callbackEvery) {
    for (let i = 0; i < this.length; i++) {
        if (!callbackEvery(this[i])) {
            return false;
        }
    }
    return true;
}

let everyArr = arr.myEvery((value) => value > 5);
// console.log(everyArr);



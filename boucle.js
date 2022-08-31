let array = [1, 2, 3];
let object = {a: 1, b: 2, c: 3};

array.forEach((element) => {
    console.log(element, "break");
});

for (const iterator of array) {
    console.log(iterator, "break");
};

array.map(element => {
    console.log(element);
});

for (const key in object) {
    if (Object.hasOwnProperty.call(object, key)) {
        const element = object[key];
        console.log(element);
    };
};

let number = 1;

while (number < 5) {
    console.log(number++);
};

function Count() {
    this.count = 0;
    this.sum = 0;
};

Count.prototype.add = function(array) {
    array.forEach(function(element) {
        this.sum += element;
        this.count++;
    }, this)
};

let count = new Count();
count.add([8, 14, 16])
console.log("break", count.sum);

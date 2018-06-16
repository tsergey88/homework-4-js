// 1) Write largest and smallest functions 

function largest() {
    let number = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (number < arguments[i]) {
            number = arguments[i];
        }
    }
    return number;
}

function smallest() {
    let number = arguments[0];
    for (let i = 1; i < arguments.length; i++) {
        if (number > arguments[i]) {
            number = arguments[i];
        }
    }
    return number;
}

largest(2, 0.1, -5, 100, 3);
smallest(2, 0.1, -5, 100, 3);



// 2) Write function transform 

function transform(baseArray) {
    if (Array.isArray(baseArray)) {
        return baseArray.map(elem =>
            function() {
                return elem;
            }
        );
    }
}

const baseArray = [10, 20, 30, 40, 50];
const newArray = transform(baseArray);
console.log(newArray[3]());
console.log(newArray[4]());

// 3) Write function sum 


function sum(...args) {
    console.log(args.length > 0 ? args[args.length - 1] + sum(...args.slice(0, -1)) : 0);
};

sum(1, 3, 5, 7);


// 4) Write function countDown

function countDown(num) {

    for (let i = 0; i <= num; i++) {
        setTimeout(function() {
            console.log(i);
        }, (num - i) * 1000);

    };
}

countDown(20);

// 5) Write a polyfill for a .bind()
var Mybind = function(fn, context) {
    // обрезаем ненужные аргументы (функцию и контекст)
    var bindArgs = [].slice.call(arguments, 2);
    return function() {
        // здесь все аргументы будут необходимы
        var fnArgs = [].slice.call(arguments);
        // собираем все 
        return fn.apply(context, bindArgs.concat(fnArgs));
    };
};
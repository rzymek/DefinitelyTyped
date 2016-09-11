///<reference path="../index.d.ts"/>
declare module _ {
    interface LoDashStatic {
        foo(): void;
        bar(): void
    }
}
declare var stubGetTime: number;
declare var element: any, data: any, mainText: any;
declare function asyncSave(arg: any);
declare function jQuery(arg: any): {
    on(s: string, callback: { (...args: any[]): any })
}
declare function addContactToList();
declare function calculateLayout();
declare function batchLog();
declare function sendMail();
declare class EventSource {
    constructor(s: string)
}
declare class Buffer {
    constructor(arg: number)
}
declare function createApplication();
declare function updatePosition();
declare function renewToken();
// declare function
declare var fs: any, path: any, process: any;

//===============================

function runInContext0() {
    _.mixin({'foo': _.constant('foo')});

    var lodash = _.runInContext();
    lodash.mixin({'bar': lodash.constant('bar')});

    _.isFunction(_.foo);
// => true
    _.isFunction(_.bar);
// => false

    lodash.isFunction(lodash.foo);
// => false
    lodash.isFunction(lodash.bar);
// => true

// Use `context` to stub `Date#getTime` use in `_.now`.
    var stubbed = _.runInContext({
        'Date': function () {
            return {'getTime': stubGetTime};
        }
    });

// Create a suped-up `defer` in Node.js.
    var defer = _.runInContext({'setTimeout': setImmediate}).defer;
}

function _1() {
    function square(n) {
        return n * n;
    }

    var wrapped = _([1, 2, 3]);

// Returns an unwrapped value.
    wrapped.reduce(_.add);
// => 6

// Returns a wrapped value.
    var squares = wrapped.map(square);

    _.isArray(squares);
// => false

    _.isArray(squares.value());
// => true
}

function chunk2() {
    _.chunk(['a', 'b', 'c', 'd'], 2);
// => [['a', 'b'], ['c', 'd']]

    _.chunk(['a', 'b', 'c', 'd'], 3);
// => [['a', 'b', 'c'], ['d']]
}

function compact3() {
    _.compact([0, 1, false, 2, '', 3]);
// => [1, 2, 3]
}

function concat4() {
    var array = [1];
    var other = _.concat(array, 2, [3], [[4]]);

    console.log(other);
// => [1, 2, 3, [4]]

    console.log(array);
// => [1]
}

function difference5() {
    _.difference([2, 1], [2, 3]);
// => [1]
}

function differenceBy6() {
    _.differenceBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2]

// The `_.property` iteratee shorthand.
    _.differenceBy([{'x': 2}, {'x': 1}], [{'x': 1}], 'x');
// => [{ 'x': 2 }]
}

function differenceWith7() {
    var objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];

    _.differenceWith(objects, [{'x': 1, 'y': 2}], _.isEqual);
// => [{ 'x': 2, 'y': 1 }]
}

function drop8() {
    _.drop([1, 2, 3]);
// => [2, 3]

    _.drop([1, 2, 3], 2);
// => [3]

    _.drop([1, 2, 3], 5);
// => []

    _.drop([1, 2, 3], 0);
// => [1, 2, 3]
}

function dropRight9() {
    _.dropRight([1, 2, 3]);
// => [1, 2]

    _.dropRight([1, 2, 3], 2);
// => [1]

    _.dropRight([1, 2, 3], 5);
// => []

    _.dropRight([1, 2, 3], 0);
// => [1, 2, 3]
}

function dropRightWhile10() {
    var users = [
        {'user': 'barney', 'active': true},
        {'user': 'fred', 'active': false},
        {'user': 'pebbles', 'active': false}
    ];

    _.dropRightWhile(users, function (o) {
        return !o.active;
    });
// => objects for ['barney']

// The `_.matches` iteratee shorthand.
    _.dropRightWhile(users, {'user': 'pebbles', 'active': false});
// => objects for ['barney', 'fred']

// The `_.matchesProperty` iteratee shorthand.
    _.dropRightWhile(users, ['active', false]);
// => objects for ['barney']

// The `_.property` iteratee shorthand.
    _.dropRightWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
}

function dropWhile11() {
    var users = [
        {'user': 'barney', 'active': false},
        {'user': 'fred', 'active': false},
        {'user': 'pebbles', 'active': true}
    ];

    _.dropWhile(users, function (o) {
        return !o.active;
    });
// => objects for ['pebbles']

// The `_.matches` iteratee shorthand.
    _.dropWhile(users, {'user': 'barney', 'active': false});
// => objects for ['fred', 'pebbles']

// The `_.matchesProperty` iteratee shorthand.
    _.dropWhile(users, ['active', false]);
// => objects for ['pebbles']

// The `_.property` iteratee shorthand.
    _.dropWhile(users, 'active');
// => objects for ['barney', 'fred', 'pebbles']
}

function fill12() {
    var array = [1, 2, 3];

    _.fill(array, 'a');
    console.log(array);
// => ['a', 'a', 'a']

    _.fill(Array(3), 2);
// => [2, 2, 2]

    _.fill([4, 6, 8, 10], '*', 1, 3);
// => [4, '*', '*', 10]
}

function findIndex13() {
    var users = [
        {'user': 'barney', 'active': false},
        {'user': 'fred', 'active': false},
        {'user': 'pebbles', 'active': true}
    ];

    _.findIndex(users, function (o) {
        return o.user == 'barney';
    });
// => 0

// The `_.matches` iteratee shorthand.
    _.findIndex(users, {'user': 'fred', 'active': false});
// => 1

// The `_.matchesProperty` iteratee shorthand.
    _.findIndex(users, ['active', false]);
// => 0

// The `_.property` iteratee shorthand.
    _.findIndex(users, 'active');
// => 2
}

function findLastIndex14() {
    var users = [
        {'user': 'barney', 'active': true},
        {'user': 'fred', 'active': false},
        {'user': 'pebbles', 'active': false}
    ];

    _.findLastIndex(users, function (o) {
        return o.user == 'pebbles';
    });
// => 2

// The `_.matches` iteratee shorthand.
    _.findLastIndex(users, {'user': 'barney', 'active': true});
// => 0

// The `_.matchesProperty` iteratee shorthand.
    _.findLastIndex(users, ['active', false]);
// => 2

// The `_.property` iteratee shorthand.
    _.findLastIndex(users, 'active');
// => 0
}

function flatten15() {
    _.flatten([1, [2, [3, [4]], 5]]);
// => [1, 2, [3, [4]], 5]
}

function flattenDeep16() {
    _.flattenDeep([1, [2, [3, [4]], 5]]);
// => [1, 2, 3, 4, 5]
}

function flattenDepth17() {
    var array = [1, [2, [3, [4]], 5]];

    _.flattenDepth(array, 1);
// => [1, 2, [3, [4]], 5]

    _.flattenDepth(array, 2);
// => [1, 2, 3, [4], 5]
}

function fromPairs18() {
    _.fromPairs([['a', 1], ['b', 2]]);
// => { 'a': 1, 'b': 2 }
}

function first19() {
    _.head([1, 2, 3]);
// => 1

    _.head([]);
// => undefined
}

function indexOf20() {
    _.indexOf([1, 2, 1, 2], 2);
// => 1

// Search from the `fromIndex`.
    _.indexOf([1, 2, 1, 2], 2, 2);
// => 3
}

function initial21() {
    _.initial([1, 2, 3]);
// => [1, 2]
}

function intersection22() {
    _.intersection([2, 1], [2, 3]);
// => [2]
}

function intersectionBy23() {
    _.intersectionBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [2.1]

// The `_.property` iteratee shorthand.
    _.intersectionBy([{'x': 1}], [{'x': 2}, {'x': 1}], 'x');
// => [{ 'x': 1 }]
}

function intersectionWith24() {
    var objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
    var others = [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}];

    _.intersectionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }]
}

function join25() {
    _.join(['a', 'b', 'c'], '~');
// => 'a~b~c'
}

function last26() {
    _.last([1, 2, 3]);
// => 3
}

function lastIndexOf27() {
    _.lastIndexOf([1, 2, 1, 2], 2);
// => 3

// Search from the `fromIndex`.
    _.lastIndexOf([1, 2, 1, 2], 2, 2);
// => 1
}

function nth28() {
    var array = ['a', 'b', 'c', 'd'];

    _.nth(array, 1);
// => 'b'

    _.nth(array, -2);
// => 'c';
}

function pull29() {
    var array = ['a', 'b', 'c', 'a', 'b', 'c'];

    _.pull(array, 'a', 'c');
    console.log(array);
// => ['b', 'b']
}

function pullAll30() {
    var array = ['a', 'b', 'c', 'a', 'b', 'c'];

    _.pullAll(array, ['a', 'c']);
    console.log(array);
// => ['b', 'b']
}

function pullAllBy31() {
    var array = [{'x': 1}, {'x': 2}, {'x': 3}, {'x': 1}];

    _.pullAllBy(array, [{'x': 1}, {'x': 3}], 'x');
    console.log(array);
// => [{ 'x': 2 }]
}

function pullAllWith32() {
    var array = [{'x': 1, 'y': 2}, {'x': 3, 'y': 4}, {'x': 5, 'y': 6}];

    _.pullAllWith(array, [{'x': 3, 'y': 4}], _.isEqual);
    console.log(array);
// => [{ 'x': 1, 'y': 2 }, { 'x': 5, 'y': 6 }]
}

function pullAt33() {
    var array = ['a', 'b', 'c', 'd'];
    var pulled = _.pullAt(array, [1, 3]);

    console.log(array);
// => ['a', 'c']

    console.log(pulled);
// => ['b', 'd']
}

function remove34() {
    var array = [1, 2, 3, 4];
    var evens = _.remove(array, function (n) {
        return n % 2 == 0;
    });

    console.log(array);
// => [1, 3]

    console.log(evens);
// => [2, 4]
}

function reverse35() {
    var array = [1, 2, 3];

    _.reverse(array);
// => [3, 2, 1]

    console.log(array);
// => [3, 2, 1]
}

function sortedIndex36() {
    _.sortedIndex([30, 50], 40);
// => 1
}

function sortedIndexBy37() {
    var objects = [{'x': 4}, {'x': 5}];

    _.sortedIndexBy(objects, {'x': 4}, function (o) {
        return o.x;
    });
// => 0

// The `_.property` iteratee shorthand.
    _.sortedIndexBy(objects, {'x': 4}, 'x');
// => 0
}

function sortedIndexOf38() {
    _.sortedIndexOf([4, 5, 5, 5, 6], 5);
// => 1
}

function sortedLastIndex39() {
    _.sortedLastIndex([4, 5, 5, 5, 6], 5);
// => 4
}

function sortedLastIndexBy40() {
    var objects = [{'x': 4}, {'x': 5}];

    _.sortedLastIndexBy(objects, {'x': 4}, function (o) {
        return o.x;
    });
// => 1

// The `_.property` iteratee shorthand.
    _.sortedLastIndexBy(objects, {'x': 4}, 'x');
// => 1
}

function sortedLastIndexOf41() {
    _.sortedLastIndexOf([4, 5, 5, 5, 6], 5);
// => 3
}

function sortedUniq42() {
    _.sortedUniq([1, 1, 2]);
// => [1, 2]
}

function sortedUniqBy43() {
    _.sortedUniqBy([1.1, 1.2, 2.3, 2.4], Math.floor);
// => [1.1, 2.3]
}

function tail44() {
    _.tail([1, 2, 3]);
// => [2, 3]
}

function take45() {
    _.take([1, 2, 3]);
// => [1]

    _.take([1, 2, 3], 2);
// => [1, 2]

    _.take([1, 2, 3], 5);
// => [1, 2, 3]

    _.take([1, 2, 3], 0);
// => []
}

function takeRight46() {
    _.takeRight([1, 2, 3]);
// => [3]

    _.takeRight([1, 2, 3], 2);
// => [2, 3]

    _.takeRight([1, 2, 3], 5);
// => [1, 2, 3]

    _.takeRight([1, 2, 3], 0);
// => []
}

function takeRightWhile47() {
    var users = [
        {'user': 'barney', 'active': true},
        {'user': 'fred', 'active': false},
        {'user': 'pebbles', 'active': false}
    ];

    _.takeRightWhile(users, function (o) {
        return !o.active;
    });
// => objects for ['fred', 'pebbles']

// The `_.matches` iteratee shorthand.
    _.takeRightWhile(users, {'user': 'pebbles', 'active': false});
// => objects for ['pebbles']

// The `_.matchesProperty` iteratee shorthand.
    _.takeRightWhile(users, ['active', false]);
// => objects for ['fred', 'pebbles']

// The `_.property` iteratee shorthand.
    _.takeRightWhile(users, 'active');
// => []
}

function takeWhile48() {
    var users = [
        {'user': 'barney', 'active': false},
        {'user': 'fred', 'active': false},
        {'user': 'pebbles', 'active': true}
    ];

    _.takeWhile(users, function (o) {
        return !o.active;
    });
// => objects for ['barney', 'fred']

// The `_.matches` iteratee shorthand.
    _.takeWhile(users, {'user': 'barney', 'active': false});
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
    _.takeWhile(users, ['active', false]);
// => objects for ['barney', 'fred']

// The `_.property` iteratee shorthand.
    _.takeWhile(users, 'active');
// => []
}

function union49() {
    _.union([2], [1, 2]);
// => [2, 1]
}

function unionBy50() {
    _.unionBy([2.1], [1.2, 2.3], Math.floor);
// => [2.1, 1.2]

// The `_.property` iteratee shorthand.
    _.unionBy([{'x': 1}], [{'x': 2}, {'x': 1}], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
}

function unionWith51() {
    var objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
    var others = [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}];

    _.unionWith(objects, others, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
}

function uniq52() {
    _.uniq([2, 1, 2]);
// => [2, 1]
}

function uniqBy53() {
    _.uniqBy([2.1, 1.2, 2.3], Math.floor);
// => [2.1, 1.2]

// The `_.property` iteratee shorthand.
    _.uniqBy([{'x': 1}, {'x': 2}, {'x': 1}], 'x');
// => [{ 'x': 1 }, { 'x': 2 }]
}

function uniqWith54() {
    var objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}, {'x': 1, 'y': 2}];

    _.uniqWith(objects, _.isEqual);
// => [{ 'x': 1, 'y': 2 }, { 'x': 2, 'y': 1 }]
}

function unzip55() {
    var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]

    _.unzip(zipped);
// => [['a', 'b'], [1, 2], [true, false]]
}

function unzipWith56() {
    var zipped = _.zip([1, 2], [10, 20], [100, 200]);
// => [[1, 10, 100], [2, 20, 200]]

    _.unzipWith(zipped, _.add);
// => [3, 30, 300]
}

function without57() {
    _.without([2, 1, 2, 3], 1, 2);
// => [3]
}

function xor58() {
    _.xor([2, 1], [2, 3]);
// => [1, 3]
}

function xorBy59() {
    _.xorBy([2.1, 1.2], [2.3, 3.4], Math.floor);
// => [1.2, 3.4]

// The `_.property` iteratee shorthand.
    _.xorBy([{'x': 1}], [{'x': 2}, {'x': 1}], 'x');
// => [{ 'x': 2 }]
}

function xorWith60() {
    var objects = [{'x': 1, 'y': 2}, {'x': 2, 'y': 1}];
    var others = [{'x': 1, 'y': 1}, {'x': 1, 'y': 2}];

    _.xorWith(objects, others, _.isEqual);
// => [{ 'x': 2, 'y': 1 }, { 'x': 1, 'y': 1 }]
}

function zip61() {
    _.zip(['a', 'b'], [1, 2], [true, false]);
// => [['a', 1, true], ['b', 2, false]]
}

function zipObject62() {
    _.zipObject(['a', 'b'], [1, 2]);
// => { 'a': 1, 'b': 2 }
}

function zipObjectDeep63() {
    _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
// => { 'a': { 'b': [{ 'c': 1 }, { 'd': 2 }] } }
}

function zipWith64() {
    _.zipWith([1, 2], [10, 20], [100, 200], function (a, b, c) {
        return a + b + c;
    });
// => [111, 222]
}

function chain65() {
    var users = [
        {'user': 'barney', 'age': 36},
        {'user': 'fred', 'age': 40},
        {'user': 'pebbles', 'age': 1}
    ];

    var youngest = _
        .chain(users)
        .sortBy('age')
        .map(function (o) {
            return o.user + ' is ' + o.age;
        })
        .head()
        .value();
// => 'pebbles is 1'
}

function tap66() {
    _([1, 2, 3])
        .tap(function (array) {
            // Mutate input array.
            array.pop();
        })
        .reverse()
        .value();
// => [2, 1]
}

function thru67() {
    _('  abc  ')
        .chain()
        .trim()
        .thru(function (value) {
            return [value];
        })
        .value();
// => ['abc']
}

function at68() {
    var object = {'a': [{'b': {'c': 3}}, 4]};

    _(object).at(['a[0].b.c', 'a[1]']).value();
// => [3, 4]
}

function chain69() {
    var users = [
        {'user': 'barney', 'age': 36},
        {'user': 'fred', 'age': 40}
    ];

// A sequence without explicit chaining.
    _(users).head();
// => { 'user': 'barney', 'age': 36 }

// A sequence with explicit chaining.
    _(users)
        .chain()
        .head()
        .pick('user')
        .value();
// => { 'user': 'barney' }
}

function commit70() {
    var array = [1, 2];
    var wrapped = _(array).push(3);

    console.log(array);
// => [1, 2]

    wrapped = wrapped.commit();
    console.log(array);
// => [1, 2, 3]

    wrapped.last();
// => 3

    console.log(array);
// => [1, 2, 3]
}

function next71() {
    var wrapped = _([1, 2]);

    wrapped.next();
// => { 'done': false, 'value': 1 }

    wrapped.next();
// => { 'done': false, 'value': 2 }

    wrapped.next();
// => { 'done': true, 'value': undefined }
}

function iterator72() {
    var wrapped = _([1, 2]);

    wrapped[Symbol.iterator]() === wrapped;
// => true

    Array.from(wrapped);
// => [1, 2]
}

function plant73() {
    function square(n) {
        return n * n;
    }

    var wrapped = _([1, 2]).map(square);
    var other = wrapped.plant([3, 4]);

    other.value();
// => [9, 16]

    wrapped.value();
// => [1, 4]
}

function reverse74() {
    var array = [1, 2, 3];

    _(array).reverse().value()
// => [3, 2, 1]

    console.log(array);
// => [3, 2, 1]
}

function value75() {
    _([1, 2, 3]).value();
// => [1, 2, 3]
}

function countBy76() {
    _.countBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': 1, '6': 2 }

// The `_.property` iteratee shorthand.
    _.countBy(['one', 'two', 'three'], 'length');
// => { '3': 2, '5': 1 }
}

function every77() {
    _.every([true, 1, null, 'yes'], Boolean);
// => false

    var users = [
        {'user': 'barney', 'age': 36, 'active': false},
        {'user': 'fred', 'age': 40, 'active': false}
    ];

// The `_.matches` iteratee shorthand.
    _.every(users, {'user': 'barney', 'active': false});
// => false

// The `_.matchesProperty` iteratee shorthand.
    _.every(users, ['active', false]);
// => true

// The `_.property` iteratee shorthand.
    _.every(users, 'active');
// => false
}

function filter78() {
    var users = [
        {'user': 'barney', 'age': 36, 'active': true},
        {'user': 'fred', 'age': 40, 'active': false}
    ];

    _.filter(users, function (o) {
        return !o.active;
    });
// => objects for ['fred']

// The `_.matches` iteratee shorthand.
    _.filter(users, {'age': 36, 'active': true});
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
    _.filter(users, ['active', false]);
// => objects for ['fred']

// The `_.property` iteratee shorthand.
    _.filter(users, 'active');
// => objects for ['barney']
}

function find79() {
    var users = [
        {'user': 'barney', 'age': 36, 'active': true},
        {'user': 'fred', 'age': 40, 'active': false},
        {'user': 'pebbles', 'age': 1, 'active': true}
    ];

    _.find(users, function (o) {
        return o.age < 40;
    });
// => object for 'barney'

// The `_.matches` iteratee shorthand.
    _.find(users, {'age': 1, 'active': true});
// => object for 'pebbles'

// The `_.matchesProperty` iteratee shorthand.
    _.find(users, ['active', false]);
// => object for 'fred'

// The `_.property` iteratee shorthand.
    _.find(users, 'active');
// => object for 'barney'
}

function findLast80() {
    _.findLast([1, 2, 3, 4], function (n) {
        return n % 2 == 1;
    });
// => 3
}

function flatMap81() {
    function duplicate(n) {
        return [n, n];
    }

    _.flatMap([1, 2], duplicate);
// => [1, 1, 2, 2]
}

function flatMapDeep82() {
    function duplicate(n) {
        return [[[n, n]]];
    }

    _.flatMapDeep([1, 2], duplicate);
// => [1, 1, 2, 2]
}

function flatMapDepth83() {
    function duplicate(n) {
        return [[[n, n]]];
    }

    _.flatMapDepth([1, 2], duplicate, 2);
// => [[1, 1], [2, 2]]
}

function each84() {
    _.forEach([1, 2], function (value) {
        console.log(value);
    });
// => Logs `1` then `2`.

    _.forEach({'a': 1, 'b': 2}, function (value, key) {
        console.log(key);
    });
// => Logs 'a' then 'b' (iteration order is not guaranteed).
}

function eachRight85() {
    _.forEachRight([1, 2], function (value) {
        console.log(value);
    });
// => Logs `2` then `1`.
}

function groupBy86() {
    _.groupBy([6.1, 4.2, 6.3], Math.floor);
// => { '4': [4.2], '6': [6.1, 6.3] }

// The `_.property` iteratee shorthand.
    _.groupBy(['one', 'two', 'three'], 'length');
// => { '3': ['one', 'two'], '5': ['three'] }
}

function includes87() {
    _.includes([1, 2, 3], 1);
// => true

    _.includes([1, 2, 3], 1, 2);
// => false

    _.includes({'a': 1, 'b': 2}, 1);
// => true

    _.includes('abcd', 'bc');
// => true
}

function invokeMap88() {
    _.invokeMap([[5, 1, 7], [3, 2, 1]], 'sort');
// => [[1, 5, 7], [1, 2, 3]]

    _.invokeMap([123, 456], String.prototype.split, '');
// => [['1', '2', '3'], ['4', '5', '6']]
}

function keyBy89() {
    var array = [
        {'dir': 'left', 'code': 97},
        {'dir': 'right', 'code': 100}
    ];

    _.keyBy(array, function (o) {
        return String.fromCharCode(o.code);
    });
// => { 'a': { 'dir': 'left', 'code': 97 }, 'd': { 'dir': 'right', 'code': 100 } }

    _.keyBy(array, 'dir');
// => { 'left': { 'dir': 'left', 'code': 97 }, 'right': { 'dir': 'right', 'code': 100 } }
}

function map90() {
    function square(n) {
        return n * n;
    }

    _.map([4, 8], square);
// => [16, 64]

    _.map({'a': 4, 'b': 8}, square);
// => [16, 64] (iteration order is not guaranteed)

    var users = [
        {'user': 'barney'},
        {'user': 'fred'}
    ];

// The `_.property` iteratee shorthand.
    _.map(users, 'user');
// => ['barney', 'fred']
}

function orderBy91() {
    var users = [
        {'user': 'fred', 'age': 48},
        {'user': 'barney', 'age': 34},
        {'user': 'fred', 'age': 40},
        {'user': 'barney', 'age': 36}
    ];

// Sort by `user` in ascending order and by `age` in descending order.
    _.orderBy(users, ['user', 'age'], ['asc', 'desc']);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]
}

function partition92() {
    var users = [
        {'user': 'barney', 'age': 36, 'active': false},
        {'user': 'fred', 'age': 40, 'active': true},
        {'user': 'pebbles', 'age': 1, 'active': false}
    ];

    _.partition(users, function (o) {
        return o.active;
    });
// => objects for [['fred'], ['barney', 'pebbles']]

// The `_.matches` iteratee shorthand.
    _.partition(users, {'age': 1, 'active': false});
// => objects for [['pebbles'], ['barney', 'fred']]

// The `_.matchesProperty` iteratee shorthand.
    _.partition(users, ['active', false]);
// => objects for [['barney', 'pebbles'], ['fred']]

// The `_.property` iteratee shorthand.
    _.partition(users, 'active');
// => objects for [['fred'], ['barney', 'pebbles']]
}

function reduce93() {
    _.reduce([1, 2], function (sum, n) {
        return sum + n;
    }, 0);
// => 3

    _.reduce({'a': 1, 'b': 2, 'c': 1}, function (result, value, key) {
        (result[value] || (result[value] = [])).push(key);
        return result;
    }, {});
// => { '1': ['a', 'c'], '2': ['b'] } (iteration order is not guaranteed)
}

function reduceRight94() {
    var array = [[0, 1], [2, 3], [4, 5]];

    _.reduceRight(array, function (flattened, other) {
        return flattened.concat(other);
    }, []);
// => [4, 5, 2, 3, 0, 1]
}

function reject95() {
    var users = [
        {'user': 'barney', 'age': 36, 'active': false},
        {'user': 'fred', 'age': 40, 'active': true}
    ];

    _.reject(users, function (o) {
        return !o.active;
    });
// => objects for ['fred']

// The `_.matches` iteratee shorthand.
    _.reject(users, {'age': 40, 'active': true});
// => objects for ['barney']

// The `_.matchesProperty` iteratee shorthand.
    _.reject(users, ['active', false]);
// => objects for ['fred']

// The `_.property` iteratee shorthand.
    _.reject(users, 'active');
// => objects for ['barney']
}

function sample96() {
    _.sample([1, 2, 3, 4]);
// => 2
}

function sampleSize97() {
    _.sampleSize([1, 2, 3], 2);
// => [3, 1]

    _.sampleSize([1, 2, 3], 4);
// => [2, 3, 1]
}

function shuffle98() {
    _.shuffle([1, 2, 3, 4]);
// => [4, 1, 3, 2]
}

function size99() {
    _.size([1, 2, 3]);
// => 3

    _.size({'a': 1, 'b': 2});
// => 2

    _.size('pebbles');
// => 7
}

function some100() {
    _.some([null, 0, 'yes', false], Boolean);
// => true

    var users = [
        {'user': 'barney', 'active': true},
        {'user': 'fred', 'active': false}
    ];

// The `_.matches` iteratee shorthand.
    _.some(users, {'user': 'barney', 'active': false});
// => false

// The `_.matchesProperty` iteratee shorthand.
    _.some(users, ['active', false]);
// => true

// The `_.property` iteratee shorthand.
    _.some(users, 'active');
// => true
}

function sortBy101() {
    var users = [
        {'user': 'fred', 'age': 48},
        {'user': 'barney', 'age': 36},
        {'user': 'fred', 'age': 40},
        {'user': 'barney', 'age': 34}
    ];

    _.sortBy(users, [function (o) {
        return o.user;
    }]);
// => objects for [['barney', 36], ['barney', 34], ['fred', 48], ['fred', 40]]

    _.sortBy(users, ['user', 'age']);
// => objects for [['barney', 34], ['barney', 36], ['fred', 40], ['fred', 48]]
}

function now102() {
    _.defer(function (stamp) {
        console.log(_.now() - stamp);
    }, _.now());
// => Logs the number of milliseconds it took for the deferred invocation.
}

function after103() {
    var saves = ['profile', 'settings'];

    var done = _.after(saves.length, function () {
        console.log('done saving!');
    });

    _.forEach(saves, function (type) {
        asyncSave({'type': type, 'complete': done});
    });
// => Logs 'done saving!' after the two async saves have completed.
}

function ary104() {
    _.map(['6', '8', '10'], _.ary(parseInt, 1));
// => [6, 8, 10]
}

function before105() {
    jQuery(element).on('click', _.before(5, addContactToList));
// => Allows adding up to 4 contacts to the list.
}

function bind106() {
    function greet(greeting, punctuation) {
        return greeting + ' ' + this.user + punctuation;
    }

    var object = {'user': 'fred'};

    var bound = _.bind(greet, object, 'hi');
    bound('!');
// => 'hi fred!'

// Bound with placeholders.
    var bound = _.bind(greet, object, _, '!');
    bound('hi');
// => 'hi fred!'
}

function bindKey107() {
    var object = {
        'user': 'fred',
        'greet': function (greeting, punctuation) {
            return greeting + ' ' + this.user + punctuation;
        }
    };

    var bound = _.bindKey(object, 'greet', 'hi');
    bound('!');
// => 'hi fred!'

    object.greet = function (greeting, punctuation) {
        return greeting + 'ya ' + this.user + punctuation;
    };

    bound('!');
// => 'hiya fred!'

// Bound with placeholders.
    var bound = _.bindKey(object, 'greet', _, '!');
    bound('hi');
// => 'hiya fred!'
}

function curry108() {
    var abc = function (a, b, c) {
        return [a, b, c];
    };

    var curried = _.curry(abc);

    curried(1)(2)(3);
// => [1, 2, 3]

    curried(1, 2)(3);
// => [1, 2, 3]

    curried(1, 2, 3);
// => [1, 2, 3]

// Curried with placeholders.
    curried(1)(_, 3)(2);
// => [1, 2, 3]
}

function curryRight109() {
    var abc = function (a, b, c) {
        return [a, b, c];
    };

    var curried = _.curryRight(abc);

    curried(3)(2)(1);
// => [1, 2, 3]

    curried(2, 3)(1);
// => [1, 2, 3]

    curried(1, 2, 3);
// => [1, 2, 3]

// Curried with placeholders.
    curried(3)(1, _)(2);
// => [1, 2, 3]
}

function debounce110() {
    // Avoid costly calculations while the window size is in flux.
    jQuery(window).on('resize', _.debounce(calculateLayout, 150));

// Invoke `sendMail` when clicked, debouncing subsequent calls.
    jQuery(element).on('click', _.debounce(sendMail, 300, {
        'leading': true,
        'trailing': false
    }));

// Ensure `batchLog` is invoked once after 1 second of debounced calls.
    var debounced = _.debounce(batchLog, 250, {'maxWait': 1000});
    var source = new EventSource('/stream');
    jQuery(source).on('message', debounced);

// Cancel the trailing debounced invocation.
    jQuery(window).on('popstate', debounced.cancel);
}

function defer111() {
    _.defer(function (text) {
        console.log(text);
    }, 'deferred');
// => Logs 'deferred' after one millisecond.
}

function delay112() {
    _.delay(function (text) {
        console.log(text);
    }, 1000, 'later');
// => Logs 'later' after one second.
}

function memoize113() {
    var object = {'a': 1, 'b': 2};
    var other = {'c': 3, 'd': 4};

    var values = _.memoize(_.values);
    values(object);
// => [1, 2]

    values(other);
// => [3, 4]

    object.a = 2;
    values(object);
// => [1, 2]

// Modify the result cache.
    values.cache.set(object, ['a', 'b']);
    values(object);
// => ['a', 'b']

// Replace `_.memoize.Cache`.
    _.memoize.Cache = WeakMap;
}

function negate114() {
    function isEven(n) {
        return n % 2 == 0;
    }

    _.filter([1, 2, 3, 4, 5, 6], _.negate(isEven));
// => [1, 3, 5]
}

function once115() {
    var initialize = _.once(createApplication);
    initialize();
    initialize();
// => `createApplication` is invoked once
}

function overArgs116() {
    function doubled(n) {
        return n * 2;
    }

    function square(n) {
        return n * n;
    }

    var func = _.overArgs(function (x, y) {
        return [x, y];
    }, [square, doubled]);

    func(9, 3);
// => [81, 6]

    func(10, 5);
// => [100, 10]
}

function partial117() {
    function greet(greeting, name) {
        return greeting + ' ' + name;
    }

    var sayHelloTo = _.partial(greet, 'hello');
    sayHelloTo('fred');
// => 'hello fred'

// Partially applied with placeholders.
    var greetFred = _.partial(greet, _, 'fred');
    greetFred('hi');
// => 'hi fred'
}

function partialRight118() {
    function greet(greeting, name) {
        return greeting + ' ' + name;
    }

    var greetFred = _.partialRight(greet, 'fred');
    greetFred('hi');
// => 'hi fred'

// Partially applied with placeholders.
    var sayHelloTo = _.partialRight(greet, 'hello', _);
    sayHelloTo('fred');
// => 'hello fred'
}

function rearg119() {
    var rearged = _.rearg(function (a, b, c) {
        return [a, b, c];
    }, [2, 0, 1]);

    rearged('b', 'c', 'a')
// => ['a', 'b', 'c']
}

function rest120() {
    var say = _.rest(function (what, names) {
        return what + ' ' + _.initial(names).join(', ') +
            (_.size(names) > 1 ? ', & ' : '') + _.last(names);
    });

    say('hello', 'fred', 'barney', 'pebbles');
// => 'hello fred, barney, & pebbles'
}

function spread121() {
    var say = _.spread(function (who, what) {
        return who + ' says ' + what;
    });

    say(['fred', 'hello']);
// => 'fred says hello'

    var numbers = Promise.all([
        Promise.resolve(40),
        Promise.resolve(36)
    ]);

    numbers.then(_.spread(function (x, y) {
        return x + y;
    }));
// => a Promise of 76
}

function throttle122() {
    // Avoid excessively updating the position while scrolling.
    jQuery(window).on('scroll', _.throttle(updatePosition, 100));

// Invoke `renewToken` when the click event is fired, but not more than once every 5 minutes.
    var throttled = _.throttle(renewToken, 300000, {'trailing': false});
    jQuery(element).on('click', throttled);

// Cancel the trailing throttled invocation.
    jQuery(window).on('popstate', throttled.cancel);
}

function unary123() {
    _.map(['6', '8', '10'], _.unary(parseInt));
// => [6, 8, 10]
}

function wrap124() {
    var p = _.wrap(_.escape, function (func, text) {
        return '<p>' + func(text) + '</p>';
    });

    p('fred, barney, & pebbles');
// => '<p>fred, barney, &amp; pebbles</p>'
}

function castArray125() {
    _.castArray(1);
// => [1]

    _.castArray({'a': 1});
// => [{ 'a': 1 }]

    _.castArray('abc');
// => ['abc']

    _.castArray(null);
// => [null]

    _.castArray(undefined);
// => [undefined]

    _.castArray();
// => []

    var array = [1, 2, 3];
    console.log(_.castArray(array) === array);
// => true
}

function clone126() {
    var objects = [{'a': 1}, {'b': 2}];

    var shallow = _.clone(objects);
    console.log(shallow[0] === objects[0]);
// => true
}

function cloneWith127() {
    function customizer(value) {
        if (_.isElement(value)) {
            return value.cloneNode(false);
        }
    }

    var el = _.cloneWith(document.body, customizer);

    console.log(el === document.body);
// => false
    console.log(el.nodeName);
// => 'BODY'
    console.log(el.childNodes.length);
// => 0
}

function cloneDeep128() {
    var objects = [{'a': 1}, {'b': 2}];

    var deep = _.cloneDeep(objects);
    console.log(deep[0] === objects[0]);
// => false
}

function cloneDeepWith129() {
    function customizer(value) {
        if (_.isElement(value)) {
            return value.cloneNode(true);
        }
    }

    var el = _.cloneDeepWith(document.body, customizer);

    console.log(el === document.body);
// => false
    console.log(el.nodeName);
// => 'BODY'
    console.log(el.childNodes.length);
// => 20
}

function conformsTo130() {
    var object = {'a': 1, 'b': 2};

    _.conformsTo(object, {
        'b': function (n) {
            return n > 1;
        }
    });
// => true

    _.conformsTo(object, {
        'b': function (n) {
            return n > 2;
        }
    });
// => false
}

function eq131() {
    var object = {'a': 1};
    var other = {'a': 1};

    _.eq(object, object);
// => true

    _.eq(object, other);
// => false

    _.eq('a', 'a');
// => true

    _.eq('a', Object('a'));
// => false

    _.eq(NaN, NaN);
// => true
}

function gt132() {
    _.gt(3, 1);
// => true

    _.gt(3, 3);
// => false

    _.gt(1, 3);
// => false
}

function gte133() {
    _.gte(3, 1);
// => true

    _.gte(3, 3);
// => true

    _.gte(1, 3);
// => false
}

function isArguments134() {
    _.isArguments(function () {
        return arguments;
    }());
// => true

    _.isArguments([1, 2, 3]);
// => false
}

function isArray135() {
    _.isArray([1, 2, 3]);
// => true

    _.isArray(document.body.children);
// => false

    _.isArray('abc');
// => false

    _.isArray(_.noop);
// => false
}

function isArrayBuffer136() {
    _.isArrayBuffer(new ArrayBuffer(2));
// => true

    _.isArrayBuffer(new Array(2));
// => false
}

function isArrayLike137() {
    _.isArrayLike([1, 2, 3]);
// => true

    _.isArrayLike(document.body.children);
// => true

    _.isArrayLike('abc');
// => true

    _.isArrayLike(_.noop);
// => false
}

function isArrayLikeObject138() {
    _.isArrayLikeObject([1, 2, 3]);
// => true

    _.isArrayLikeObject(document.body.children);
// => true

    _.isArrayLikeObject('abc');
// => false

    _.isArrayLikeObject(_.noop);
// => false
}

function isBoolean139() {
    _.isBoolean(false);
// => true

    _.isBoolean(null);
// => false
}

function isBuffer140() {
    _.isBuffer(new Buffer(2));
// => true

    _.isBuffer(new Uint8Array(2));
// => false
}

function isDate141() {
    _.isDate(new Date);
// => true

    _.isDate('Mon April 23 2012');
// => false
}

function isElement142() {
    _.isElement(document.body);
// => true

    _.isElement('<body>');
// => false
}

function isEmpty143() {
    _.isEmpty(null);
// => true

    _.isEmpty(true);
// => true

    _.isEmpty(1);
// => true

    _.isEmpty([1, 2, 3]);
// => false

    _.isEmpty({'a': 1});
// => false
}

function isEqual144() {
    var object = {'a': 1};
    var other = {'a': 1};

    _.isEqual(object, other);
// => true

    object === other;
// => false
}

function isEqualWith145() {
    function isGreeting(value) {
        return /^h(?:i|ello)$/.test(value);
    }

    function customizer(objValue, othValue) {
        if (isGreeting(objValue) && isGreeting(othValue)) {
            return true;
        }
    }

    var array = ['hello', 'goodbye'];
    var other = ['hi', 'goodbye'];

    _.isEqualWith(array, other, customizer);
// => true
}

function isError146() {
    _.isError(new Error);
// => true

    _.isError(Error);
// => false
}

function isFinite147() {
    _.isFinite(3);
// => true

    _.isFinite(Number.MIN_VALUE);
// => true

    _.isFinite(Infinity);
// => false

    _.isFinite('3');
// => false
}

function isFunction148() {
    _.isFunction(_);
// => true

    _.isFunction(/abc/);
// => false
}

function isInteger149() {
    _.isInteger(3);
// => true

    _.isInteger(Number.MIN_VALUE);
// => false

    _.isInteger(Infinity);
// => false

    _.isInteger('3');
// => false
}

function isLength150() {
    _.isLength(3);
// => true

    _.isLength(Number.MIN_VALUE);
// => false

    _.isLength(Infinity);
// => false

    _.isLength('3');
// => false
}

function isObject151() {
    _.isObject({});
// => true

    _.isObject([1, 2, 3]);
// => true

    _.isObject(_.noop);
// => true

    _.isObject(null);
// => false
}

function isObjectLike152() {
    _.isObjectLike({});
// => true

    _.isObjectLike([1, 2, 3]);
// => true

    _.isObjectLike(_.noop);
// => false

    _.isObjectLike(null);
// => false
}

function isMap153() {
    _.isMap(new Map);
// => true

    _.isMap(new WeakMap);
// => false
}

function isMatch154() {
    var object = {'a': 1, 'b': 2};

    _.isMatch(object, {'b': 2});
// => true

    _.isMatch(object, {'b': 1});
// => false
}

function isMatchWith155() {
    function isGreeting(value) {
        return /^h(?:i|ello)$/.test(value);
    }

    function customizer(objValue, srcValue) {
        if (isGreeting(objValue) && isGreeting(srcValue)) {
            return true;
        }
    }

    var object = {'greeting': 'hello'};
    var source = {'greeting': 'hi'};

    _.isMatchWith(object, source, customizer);
// => true
}

function isNaN156() {
    _.isNaN(NaN);
// => true

    _.isNaN(new Number(NaN));
// => true

    isNaN(undefined);
// => true

    _.isNaN(undefined);
// => false
}

function isNative157() {
    _.isNative(Array.prototype.push);
// => true

    _.isNative(_);
// => false
}

function isNull158() {
    _.isNull(null);
// => true

    _.isNull(void 0);
// => false
}

function isNil159() {
    _.isNil(null);
// => true

    _.isNil(void 0);
// => true

    _.isNil(NaN);
// => false
}

function isNumber160() {
    _.isNumber(3);
// => true

    _.isNumber(Number.MIN_VALUE);
// => true

    _.isNumber(Infinity);
// => true

    _.isNumber('3');
// => false
}

function isPlainObject161() {
    function Foo() {
        this.a = 1;
    }

    _.isPlainObject(new Foo);
// => false

    _.isPlainObject([1, 2, 3]);
// => false

    _.isPlainObject({'x': 0, 'y': 0});
// => true

    _.isPlainObject(Object.create(null));
// => true
}

function isRegExp162() {
    _.isRegExp(/abc/);
// => true

    _.isRegExp('/abc/');
// => false
}

function isSafeInteger163() {
    _.isSafeInteger(3);
// => true

    _.isSafeInteger(Number.MIN_VALUE);
// => false

    _.isSafeInteger(Infinity);
// => false

    _.isSafeInteger('3');
// => false
}

function isSet164() {
    _.isSet(new Set);
// => true

    _.isSet(new WeakSet);
// => false
}

function isString165() {
    _.isString('abc');
// => true

    _.isString(1);
// => false
}

function isSymbol166() {
    _.isSymbol(Symbol.iterator);
// => true

    _.isSymbol('abc');
// => false
}

function isTypedArray167() {
    _.isTypedArray(new Uint8Array);
// => true

    _.isTypedArray([]);
// => false
}

function isUndefined168() {
    _.isUndefined(void 0);
// => true

    _.isUndefined(null);
// => false
}

function isWeakMap169() {
    _.isWeakMap(new WeakMap);
// => true

    _.isWeakMap(new Map);
// => false
}

function isWeakSet170() {
    _.isWeakSet(new WeakSet);
// => true

    _.isWeakSet(new Set);
// => false
}

function lt171() {
    _.lt(1, 3);
// => true

    _.lt(3, 3);
// => false

    _.lt(3, 1);
// => false
}

function lte172() {
    _.lte(1, 3);
// => true

    _.lte(3, 3);
// => true

    _.lte(3, 1);
// => false
}

function toArray173() {
    _.toArray({'a': 1, 'b': 2});
// => [1, 2]

    _.toArray('abc');
// => ['a', 'b', 'c']

    _.toArray(1);
// => []

    _.toArray(null);
// => []
}

function toFinite174() {
    _.toFinite(3.2);
// => 3.2

    _.toFinite(Number.MIN_VALUE);
// => 5e-324

    _.toFinite(Infinity);
// => 1.7976931348623157e+308

    _.toFinite('3.2');
// => 3.2
}

function toInteger175() {
    _.toInteger(3.2);
// => 3

    _.toInteger(Number.MIN_VALUE);
// => 0

    _.toInteger(Infinity);
// => 1.7976931348623157e+308

    _.toInteger('3.2');
// => 3
}

function toLength176() {
    _.toLength(3.2);
// => 3

    _.toLength(Number.MIN_VALUE);
// => 0

    _.toLength(Infinity);
// => 4294967295

    _.toLength('3.2');
// => 3
}

function toNumber177() {
    _.toNumber(3.2);
// => 3.2

    _.toNumber(Number.MIN_VALUE);
// => 5e-324

    _.toNumber(Infinity);
// => Infinity

    _.toNumber('3.2');
// => 3.2
}

function toPlainObject178() {
    function Foo() {
        this.b = 2;
    }

    Foo.prototype.c = 3;

    _.assign({'a': 1}, new Foo);
// => { 'a': 1, 'b': 2 }

    _.assign({'a': 1}, _.toPlainObject(new Foo));
// => { 'a': 1, 'b': 2, 'c': 3 }
}

function toSafeInteger179() {
    _.toSafeInteger(3.2);
// => 3

    _.toSafeInteger(Number.MIN_VALUE);
// => 0

    _.toSafeInteger(Infinity);
// => 9007199254740991

    _.toSafeInteger('3.2');
// => 3
}

function toString180() {
    _.toString(null);
// => ''

    _.toString(-0);
// => '-0'

    _.toString([1, 2, 3]);
// => '1,2,3'
}

function assign181() {
    function Foo() {
        this.a = 1;
    }

    function Bar() {
        this.c = 3;
    }

    Foo.prototype.b = 2;
    Bar.prototype.d = 4;

    _.assign({'a': 0}, new Foo, new Bar);
// => { 'a': 1, 'c': 3 }
}

function extend182() {
    function Foo() {
        this.a = 1;
    }

    function Bar() {
        this.c = 3;
    }

    Foo.prototype.b = 2;
    Bar.prototype.d = 4;

    _.assignIn({'a': 0}, new Foo, new Bar);
// => { 'a': 1, 'b': 2, 'c': 3, 'd': 4 }
}

function extendWith183() {
    function customizer(objValue, srcValue) {
        return _.isUndefined(objValue) ? srcValue : objValue;
    }

    var defaults = _.partialRight(_.assignInWith, customizer);

    defaults({'a': 1}, {'b': 2}, {'a': 3});
// => { 'a': 1, 'b': 2 }
}

function assignWith184() {
    function customizer(objValue, srcValue) {
        return _.isUndefined(objValue) ? srcValue : objValue;
    }

    var defaults = _.partialRight(_.assignWith, customizer);

    defaults({'a': 1}, {'b': 2}, {'a': 3});
// => { 'a': 1, 'b': 2 }
}

function at185() {
    var object = {'a': [{'b': {'c': 3}}, 4]};

    _.at(object, ['a[0].b.c', 'a[1]']);
// => [3, 4]
}

function create186() {
    function Shape() {
        this.x = 0;
        this.y = 0;
    }

    function Circle() {
        Shape.call(this);
    }

    Circle.prototype = _.create(Shape.prototype, {
        'constructor': Circle
    });

    var circle = new Circle;
    circle instanceof Circle;
// => true

    circle instanceof Shape;
// => true
}

function defaults187() {
    _.defaults({'a': 1}, {'b': 2}, {'a': 3});
// => { 'a': 1, 'b': 2 }
}

function defaultsDeep188() {
    _.defaultsDeep({'a': {'b': 2}}, {'a': {'b': 1, 'c': 3}});
// => { 'a': { 'b': 2, 'c': 3 } }
}

function findKey189() {
    var users = {
        'barney': {'age': 36, 'active': true},
        'fred': {'age': 40, 'active': false},
        'pebbles': {'age': 1, 'active': true}
    };

    _.findKey(users, function (o) {
        return o.age < 40;
    });
// => 'barney' (iteration order is not guaranteed)

// The `_.matches` iteratee shorthand.
    _.findKey(users, {'age': 1, 'active': true});
// => 'pebbles'

// The `_.matchesProperty` iteratee shorthand.
    _.findKey(users, ['active', false]);
// => 'fred'

// The `_.property` iteratee shorthand.
    _.findKey(users, 'active');
// => 'barney'
}

function findLastKey190() {
    var users = {
        'barney': {'age': 36, 'active': true},
        'fred': {'age': 40, 'active': false},
        'pebbles': {'age': 1, 'active': true}
    };

    _.findLastKey(users, function (o) {
        return o.age < 40;
    });
// => returns 'pebbles' assuming `_.findKey` returns 'barney'

// The `_.matches` iteratee shorthand.
    _.findLastKey(users, {'age': 36, 'active': true});
// => 'barney'

// The `_.matchesProperty` iteratee shorthand.
    _.findLastKey(users, ['active', false]);
// => 'fred'

// The `_.property` iteratee shorthand.
    _.findLastKey(users, 'active');
// => 'pebbles'
}

function forIn191() {
    function Foo() {
        this.a = 1;
        this.b = 2;
    }

    Foo.prototype.c = 3;

    _.forIn(new Foo, function (value, key) {
        console.log(key);
    });
// => Logs 'a', 'b', then 'c' (iteration order is not guaranteed).
}

function forInRight192() {
    function Foo() {
        this.a = 1;
        this.b = 2;
    }

    Foo.prototype.c = 3;

    _.forInRight(new Foo, function (value, key) {
        console.log(key);
    });
// => Logs 'c', 'b', then 'a' assuming `_.forIn` logs 'a', 'b', then 'c'.
}

function forOwn193() {
    function Foo() {
        this.a = 1;
        this.b = 2;
    }

    Foo.prototype.c = 3;

    _.forOwn(new Foo, function (value, key) {
        console.log(key);
    });
// => Logs 'a' then 'b' (iteration order is not guaranteed).
}

function forOwnRight194() {
    function Foo() {
        this.a = 1;
        this.b = 2;
    }

    Foo.prototype.c = 3;

    _.forOwnRight(new Foo, function (value, key) {
        console.log(key);
    });
// => Logs 'b' then 'a' assuming `_.forOwn` logs 'a' then 'b'.
}

function functions195() {
    function Foo() {
        this.a = _.constant('a');
        this.b = _.constant('b');
    }

    Foo.prototype.c = _.constant('c');

    _.functions(new Foo);
// => ['a', 'b']
}

function functionsIn196() {
    function Foo() {
        this.a = _.constant('a');
        this.b = _.constant('b');
    }

    Foo.prototype.c = _.constant('c');

    _.functionsIn(new Foo);
// => ['a', 'b', 'c']
}

function get197() {
    var object = {'a': [{'b': {'c': 3}}]};

    _.get(object, 'a[0].b.c');
// => 3

    _.get(object, ['a', '0', 'b', 'c']);
// => 3

    _.get(object, 'a.b.c', 'default');
// => 'default'
}

function has198() {
    var object = {'a': {'b': 2}};
    var other = _.create({'a': _.create({'b': 2})});

    _.has(object, 'a');
// => true

    _.has(object, 'a.b');
// => true

    _.has(object, ['a', 'b']);
// => true

    _.has(other, 'a');
// => false
}

function hasIn199() {
    var object = _.create({'a': _.create({'b': 2})});

    _.hasIn(object, 'a');
// => true

    _.hasIn(object, 'a.b');
// => true

    _.hasIn(object, ['a', 'b']);
// => true

    _.hasIn(object, 'b');
// => false
}

function invert200() {
    var object = {'a': 1, 'b': 2, 'c': 1};

    _.invert(object);
// => { '1': 'c', '2': 'b' }
}

function invertBy201() {
    var object = {'a': 1, 'b': 2, 'c': 1};

    _.invertBy(object);
// => { '1': ['a', 'c'], '2': ['b'] }

    _.invertBy(object, function (value) {
        return 'group' + value;
    });
// => { 'group1': ['a', 'c'], 'group2': ['b'] }
}

function invoke202() {
    var object = {'a': [{'b': {'c': [1, 2, 3, 4]}}]};

    _.invoke(object, 'a[0].b.c.slice', 1, 3);
// => [2, 3]
}

function keys203() {
    function Foo() {
        this.a = 1;
        this.b = 2;
    }

    Foo.prototype.c = 3;

    _.keys(new Foo);
// => ['a', 'b'] (iteration order is not guaranteed)

    _.keys('hi');
// => ['0', '1']
}

function keysIn204() {
    function Foo() {
        this.a = 1;
        this.b = 2;
    }

    Foo.prototype.c = 3;

    _.keysIn(new Foo);
// => ['a', 'b', 'c'] (iteration order is not guaranteed)
}

function mapKeys205() {
    _.mapKeys({'a': 1, 'b': 2}, function (value, key) {
        return key + value;
    });
// => { 'a1': 1, 'b2': 2 }
}

function mapValues206() {
    var users = {
        'fred': {'user': 'fred', 'age': 40},
        'pebbles': {'user': 'pebbles', 'age': 1}
    };

    _.mapValues(users, function (o) {
        return o.age;
    });
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)

// The `_.property` iteratee shorthand.
    _.mapValues(users, 'age');
// => { 'fred': 40, 'pebbles': 1 } (iteration order is not guaranteed)
}

function merge207() {
    var object = {
        'a': [{'b': 2}, {'d': 4}]
    };

    var other = {
        'a': [{'c': 3}, {'e': 5}]
    };

    _.merge(object, other);
// => { 'a': [{ 'b': 2, 'c': 3 }, { 'd': 4, 'e': 5 }] }
}

function mergeWith208() {
    function customizer(objValue, srcValue) {
        if (_.isArray(objValue)) {
            return objValue.concat(srcValue);
        }
    }

    var object = {'a': [1], 'b': [2]};
    var other = {'a': [3], 'b': [4]};

    _.mergeWith(object, other, customizer);
// => { 'a': [1, 3], 'b': [2, 4] }
}

function omit209() {
    var object = {'a': 1, 'b': '2', 'c': 3};

    _.omit(object, ['a', 'c']);
// => { 'b': '2' }
}

function omitBy210() {
    var object = {'a': 1, 'b': '2', 'c': 3};

    _.omitBy(object, _.isNumber);
// => { 'b': '2' }
}

function pick211() {
    var object = {'a': 1, 'b': '2', 'c': 3};

    _.pick(object, ['a', 'c']);
// => { 'a': 1, 'c': 3 }
}

function pickBy212() {
    var object = {'a': 1, 'b': '2', 'c': 3};

    _.pickBy(object, _.isNumber);
// => { 'a': 1, 'c': 3 }
}

function result213() {
    var object = {'a': [{'b': {'c1': 3, 'c2': _.constant(4)}}]};

    _.result(object, 'a[0].b.c1');
// => 3

    _.result(object, 'a[0].b.c2');
// => 4

    _.result(object, 'a[0].b.c3', 'default');
// => 'default'

    _.result(object, 'a[0].b.c3', _.constant('default'));
// => 'default'
}

function set214() {
    var object = {'a': [{'b': {'c': 3}}]};

    _.set(object, 'a[0].b.c', 4);
    console.log(object.a[0].b.c);
// => 4

    _.set(object, ['x', '0', 'y', 'z'], 5);
    console.log(object.x[0].y.z);
// => 5
}

function setWith215() {
    var object = {};

    _.setWith(object, '[0][1]', 'a', Object);
// => { '0': { '1': 'a' } }
}

function entries216() {
    function Foo() {
        this.a = 1;
        this.b = 2;
    }

    Foo.prototype.c = 3;

    _.toPairs(new Foo);
// => [['a', 1], ['b', 2]] (iteration order is not guaranteed)
}

function entriesIn217() {
    function Foo() {
        this.a = 1;
        this.b = 2;
    }

    Foo.prototype.c = 3;

    _.toPairsIn(new Foo);
// => [['a', 1], ['b', 2], ['c', 3]] (iteration order is not guaranteed)
}

function transform218() {
    _.transform([2, 3, 4], function (result, n) {
        result.push(n *= n);
        return n % 2 == 0;
    }, []);
// => [4, 9]

    _.transform({'a': 1, 'b': 2, 'c': 1}, function (result, value, key) {
        (result[value] || (result[value] = [])).push(key);
    }, {});
// => { '1': ['a', 'c'], '2': ['b'] }
}

function unset219() {
    var object = {'a': [{'b': {'c': 7}}]};
    _.unset(object, 'a[0].b.c');
// => true

    console.log(object);
// => { 'a': [{ 'b': {} }] };

    _.unset(object, ['a', '0', 'b', 'c']);
// => true

    console.log(object);
// => { 'a': [{ 'b': {} }] };
}

function update220() {
    var object = {'a': [{'b': {'c': 3}}]};

    _.update(object, 'a[0].b.c', function (n) {
        return n * n;
    });
    console.log(object.a[0].b.c);
// => 9

    _.update(object, 'x[0].y.z', function (n) {
        return n ? n + 1 : 0;
    });
    console.log(object.x[0].y.z);
// => 0
}

function updateWith221() {
    var object = {};

    _.updateWith(object, '[0][1]', _.constant('a'), Object);
// => { '0': { '1': 'a' } }
}

function values222() {
    function Foo() {
        this.a = 1;
        this.b = 2;
    }

    Foo.prototype.c = 3;

    _.values(new Foo);
// => [1, 2] (iteration order is not guaranteed)

    _.values('hi');
// => ['h', 'i']
}

function valuesIn223() {
    function Foo() {
        this.a = 1;
        this.b = 2;
    }

    Foo.prototype.c = 3;

    _.valuesIn(new Foo);
// => [1, 2, 3] (iteration order is not guaranteed)
}

function clamp224() {
    _.clamp(-10, -5, 5);
// => -5

    _.clamp(10, -5, 5);
// => 5
}

function inRange225() {
    _.inRange(3, 2, 4);
// => true

    _.inRange(4, 8);
// => true

    _.inRange(4, 2);
// => false

    _.inRange(2, 2);
// => false

    _.inRange(1.2, 2);
// => true

    _.inRange(5.2, 4);
// => false

    _.inRange(-3, -2, -6);
// => true
}

function random226() {
    _.random(0, 5);
// => an integer between 0 and 5

    _.random(5);
// => also an integer between 0 and 5

    _.random(5, true);
// => a floating-point number between 0 and 5

    _.random(1.2, 5.2);
// => a floating-point number between 1.2 and 5.2
}

function camelCase227() {
    _.camelCase('Foo Bar');
// => 'fooBar'

    _.camelCase('--foo-bar--');
// => 'fooBar'

    _.camelCase('__FOO_BAR__');
// => 'fooBar'
}

function capitalize228() {
    _.capitalize('FRED');
// => 'Fred'
}

function deburr229() {
    _.deburr('déjà vu');
// => 'deja vu'
}

function endsWith230() {
    _.endsWith('abc', 'c');
// => true

    _.endsWith('abc', 'b');
// => false

    _.endsWith('abc', 'b', 2);
// => true
}

function escape231() {
    _.escape('fred, barney, & pebbles');
// => 'fred, barney, &amp; pebbles'
}

function escapeRegExp232() {
    _.escapeRegExp('[lodash](https://lodash.com/)');
// => '\[lodash\]\(https://lodash\.com/\)'
}

function kebabCase233() {
    _.kebabCase('Foo Bar');
// => 'foo-bar'

    _.kebabCase('fooBar');
// => 'foo-bar'

    _.kebabCase('__FOO_BAR__');
// => 'foo-bar'
}

function lowerCase234() {
    _.lowerCase('--Foo-Bar--');
// => 'foo bar'

    _.lowerCase('fooBar');
// => 'foo bar'

    _.lowerCase('__FOO_BAR__');
// => 'foo bar'
}

function lowerFirst235() {
    _.lowerFirst('Fred');
// => 'fred'

    _.lowerFirst('FRED');
// => 'fRED'
}

function pad236() {
    _.pad('abc', 8);
// => '  abc   '

    _.pad('abc', 8, '_-');
// => '_-abc_-_'

    _.pad('abc', 3);
// => 'abc'
}

function padEnd237() {
    _.padEnd('abc', 6);
// => 'abc   '

    _.padEnd('abc', 6, '_-');
// => 'abc_-_'

    _.padEnd('abc', 3);
// => 'abc'
}

function padStart238() {
    _.padStart('abc', 6);
// => '   abc'

    _.padStart('abc', 6, '_-');
// => '_-_abc'

    _.padStart('abc', 3);
// => 'abc'
}

function parseInt239() {
    _.parseInt('08');
// => 8

    _.map(['6', '08', '10'], _.parseInt);
// => [6, 8, 10]
}

function repeat240() {
    _.repeat('*', 3);
// => '***'

    _.repeat('abc', 2);
// => 'abcabc'

    _.repeat('abc', 0);
// => ''
}

function replace241() {
    _.replace('Hi Fred', 'Fred', 'Barney');
// => 'Hi Barney'
}

function snakeCase242() {
    _.snakeCase('Foo Bar');
// => 'foo_bar'

    _.snakeCase('fooBar');
// => 'foo_bar'

    _.snakeCase('--FOO-BAR--');
// => 'foo_bar'
}

function split243() {
    _.split('a-b-c', '-', 2);
// => ['a', 'b']
}

function startCase244() {
    _.startCase('--foo-bar--');
// => 'Foo Bar'

    _.startCase('fooBar');
// => 'Foo Bar'

    _.startCase('__FOO_BAR__');
// => 'FOO BAR'
}

function startsWith245() {
    _.startsWith('abc', 'a');
// => true

    _.startsWith('abc', 'b');
// => false

    _.startsWith('abc', 'b', 1);
// => true
}

function template246() {
    // Use the "interpolate" delimiter to create a compiled template.
    var compiled = _.template('hello <%= user %>!');
    compiled({'user': 'fred'});
// => 'hello fred!'

// Use the HTML "escape" delimiter to escape data property values.
    var compiled = _.template('<b><%- value %></b>');
    compiled({'value': '<script>'});
// => '<b>&lt;script&gt;</b>'

// Use the "evaluate" delimiter to execute JavaScript and generate HTML.
    var compiled = _.template('<% _.forEach(users, function(user) { %><li><%- user %></li><% }); %>');
    compiled({'users': ['fred', 'barney']});
// => '<li>fred</li><li>barney</li>'

// Use the internal `print` function in "evaluate" delimiters.
    var compiled = _.template('<% print("hello " + user); %>!');
    compiled({'user': 'barney'});
// => 'hello barney!'

// Use the ES template literal delimiter as an "interpolate" delimiter.
// Disable support by replacing the "interpolate" delimiter.
    var compiled = _.template('hello ${ user }!');
    compiled({'user': 'pebbles'});
// => 'hello pebbles!'

// Use backslashes to treat delimiters as plain text.
    var compiled = _.template('<%= "\\<%- value %\\>" %>');
    compiled({'value': 'ignored'});
// => '<%- value %>'

// Use the `imports` option to import `jQuery` as `jq`.
    var text = '<% jq.each(users, function(user) { %><li><%- user %></li><% }); %>';
    var compiled = _.template(text, {'imports': {'jq': jQuery}});
    compiled({'users': ['fred', 'barney']});
// => '<li>fred</li><li>barney</li>'

// Use the `sourceURL` option to specify a custom sourceURL for the template.
    var compiled = _.template('hello <%= user %>!', {'sourceURL': '/basic/greeting.jst'});
    compiled(data);
// => Find the source of "greeting.jst" under the Sources tab or Resources panel of the web inspector.

// Use the `variable` option to ensure a with-statement isn't used in the compiled template.
    var compiled = _.template('hi <%= data.user %>!', {'variable': 'data'});
    compiled.source;
// => function(data) {
//   var __t, __p = '';
//   __p += 'hi ' + ((__t = ( data.user )) == null ? '' : __t) + '!';
//   return __p;
// }

// Use custom template delimiters.
    _.templateSettings.interpolate = /{{([\s\S]+?)}}/g;
    var compiled = _.template('hello {{ user }}!');
    compiled({'user': 'mustache'});
// => 'hello mustache!'

// Use the `source` property to inline compiled templates for meaningful
// line numbers in error messages and stack traces.
    fs.writeFileSync(path.join(process.cwd(), 'jst.js'), '\
  var JST = {\
    "main": ' + _.template(mainText).source + '\
  };\
');
}

function toLower247() {
    _.toLower('--Foo-Bar--');
// => '--foo-bar--'

    _.toLower('fooBar');
// => 'foobar'

    _.toLower('__FOO_BAR__');
// => '__foo_bar__'
}

function toUpper248() {
    _.toUpper('--foo-bar--');
// => '--FOO-BAR--'

    _.toUpper('fooBar');
// => 'FOOBAR'

    _.toUpper('__foo_bar__');
// => '__FOO_BAR__'
}

function trim249() {
    _.trim('  abc  ');
// => 'abc'

    _.trim('-_-abc-_-', '_-');
// => 'abc'

    _.map(['  foo  ', '  bar  '], _.trim);
// => ['foo', 'bar']
}

function trimEnd250() {
    _.trimEnd('  abc  ');
// => '  abc'

    _.trimEnd('-_-abc-_-', '_-');
// => '-_-abc'
}

function trimStart251() {
    _.trimStart('  abc  ');
// => 'abc  '

    _.trimStart('-_-abc-_-', '_-');
// => 'abc-_-'
}

function truncate252() {
    _.truncate('hi-diddly-ho there, neighborino');
// => 'hi-diddly-ho there, neighbo...'

    _.truncate('hi-diddly-ho there, neighborino', {
        'length': 24,
        'separator': ' '
    });
// => 'hi-diddly-ho there,...'

    _.truncate('hi-diddly-ho there, neighborino', {
        'length': 24,
        'separator': /,? +/
    });
// => 'hi-diddly-ho there...'

    _.truncate('hi-diddly-ho there, neighborino', {
        'omission': ' [...]'
    });
// => 'hi-diddly-ho there, neig [...]'
}

function unescape253() {
    _.unescape('fred, barney, &amp; pebbles');
// => 'fred, barney, & pebbles'
}

function upperCase254() {
    _.upperCase('--foo-bar');
// => 'FOO BAR'

    _.upperCase('fooBar');
// => 'FOO BAR'

    _.upperCase('__foo_bar__');
// => 'FOO BAR'
}

function upperFirst255() {
    _.upperFirst('fred');
// => 'Fred'

    _.upperFirst('FRED');
// => 'FRED'
}

function words256() {
    _.words('fred, barney, & pebbles');
// => ['fred', 'barney', 'pebbles']

    _.words('fred, barney, & pebbles', /[^, ]+/g);
// => ['fred', 'barney', '&', 'pebbles']
}

function attempt257() {
    // Avoid throwing errors for invalid selectors.
    var elements = _.attempt(function (selector) {
        return document.querySelectorAll(selector);
    }, '>_>');

    if (_.isError(elements)) {
        elements = [];
    }
}

function bindAll258() {
    var view = {
        'label': 'docs',
        'click': function () {
            console.log('clicked ' + this.label);
        }
    };

    _.bindAll(view, ['click']);
    jQuery(element).on('click', view.click);
// => Logs 'clicked docs' when clicked.
}

function cond259() {
    var func = _.cond([
        [_.matches({'a': 1}), _.constant('matches A')],
        [_.conforms({'b': _.isNumber}), _.constant('matches B')],
        [_.stubTrue, _.constant('no match')]
    ]);

    func({'a': 1, 'b': 2});
// => 'matches A'

    func({'a': 0, 'b': 1});
// => 'matches B'

    func({'a': '1', 'b': '2'});
// => 'no match'
}

function conforms260() {
    var objects = [
        {'a': 2, 'b': 1},
        {'a': 1, 'b': 2}
    ];

    _.filter(objects, _.conforms({
        'b': function (n) {
            return n > 1;
        }
    }));
// => [{ 'a': 1, 'b': 2 }]
}

function constant261() {
    var objects = _.times(2, _.constant({'a': 1}));

    console.log(objects);
// => [{ 'a': 1 }, { 'a': 1 }]

    console.log(objects[0] === objects[1]);
// => true
}

function defaultTo262() {
    _.defaultTo(1, 10);
// => 1

    _.defaultTo(undefined, 10);
// => 10
}

function flow263() {
    function square(n) {
        return n * n;
    }

    var addSquare = _.flow([_.add, square]);
    addSquare(1, 2);
// => 9
}

function flowRight264() {
    function square(n) {
        return n * n;
    }

    var addSquare = _.flowRight([square, _.add]);
    addSquare(1, 2);
// => 9
}

function identity265() {
    var object = {'a': 1};

    console.log(_.identity(object) === object);
// => true
}

function iteratee266() {
    var users = [
        {'user': 'barney', 'age': 36, 'active': true},
        {'user': 'fred', 'age': 40, 'active': false}
    ];

// The `_.matches` iteratee shorthand.
    _.filter(users, _.iteratee({'user': 'barney', 'active': true}));
// => [{ 'user': 'barney', 'age': 36, 'active': true }]

// The `_.matchesProperty` iteratee shorthand.
    _.filter(users, _.iteratee(['user', 'fred']));
// => [{ 'user': 'fred', 'age': 40 }]

// The `_.property` iteratee shorthand.
    _.map(users, _.iteratee('user'));
// => ['barney', 'fred']

// Create custom iteratee shorthands.
    _.iteratee = _.wrap(_.iteratee, function (iteratee, func) {
        return !_.isRegExp(func) ? iteratee(func) : function (string) {
            return func.test(string);
        };
    });

    _.filter(['abc', 'def'], /ef/);
// => ['def']
}

function matches267() {
    var objects = [
        {'a': 1, 'b': 2, 'c': 3},
        {'a': 4, 'b': 5, 'c': 6}
    ];

    _.filter(objects, _.matches({'a': 4, 'c': 6}));
// => [{ 'a': 4, 'b': 5, 'c': 6 }]
}

function matchesProperty268() {
    var objects = [
        {'a': 1, 'b': 2, 'c': 3},
        {'a': 4, 'b': 5, 'c': 6}
    ];

    _.find(objects, _.matchesProperty('a', 4));
// => { 'a': 4, 'b': 5, 'c': 6 }
}

function method269() {
    var objects = [
        {'a': {'b': _.constant(2)}},
        {'a': {'b': _.constant(1)}}
    ];

    _.map(objects, _.method('a.b'));
// => [2, 1]

    _.map(objects, _.method(['a', 'b']));
// => [2, 1]
}

function methodOf270() {
    var array = _.times(3, _.constant),
        object = {'a': array, 'b': array, 'c': array};

    _.map(['a[2]', 'c[0]'], _.methodOf(object));
// => [2, 0]

    _.map([['a', '2'], ['c', '0']], _.methodOf(object));
// => [2, 0]
}

function mixin271() {
    function vowels(string) {
        return _.filter(string, function (v) {
            return /[aeiou]/i.test(v);
        });
    }

    _.mixin({'vowels': vowels});
    _.vowels('fred');
// => ['e']

    _('fred').vowels().value();
// => ['e']

    _.mixin({'vowels': vowels}, {'chain': false});
    _('fred').vowels();
// => ['e']
}

function noConflict272() {
    var lodash = _.noConflict();
}

function noop273() {
    _.times(2, _.noop);
// => [undefined, undefined]
}

function nthArg274() {
    var func = _.nthArg(1);
    func('a', 'b', 'c', 'd');
// => 'b'

    var func = _.nthArg(-2);
    func('a', 'b', 'c', 'd');
// => 'c'
}

function over275() {
    var func = _.over([Math.max, Math.min]);

    func(1, 2, 3, 4);
// => [4, 1]
}

function overEvery276() {
    var func = _.overEvery([Boolean, isFinite]);

    func('1');
// => true

    func(null);
// => false

    func(NaN);
// => false
}

function overSome277() {
    var func = _.overSome([Boolean, isFinite]);

    func('1');
// => true

    func(null);
// => true

    func(NaN);
// => false
}

function property278() {
    var objects = [
        {'a': {'b': 2}},
        {'a': {'b': 1}}
    ];

    _.map(objects, _.property('a.b'));
// => [2, 1]

    _.map(_.sortBy(objects, _.property(['a', 'b'])), 'a.b');
// => [1, 2]
}

function propertyOf279() {
    var array = [0, 1, 2],
        object = {'a': array, 'b': array, 'c': array};

    _.map(['a[2]', 'c[0]'], _.propertyOf(object));
// => [2, 0]

    _.map([['a', '2'], ['c', '0']], _.propertyOf(object));
// => [2, 0]
}

function range280() {
    _.range(4);
// => [0, 1, 2, 3]

    _.range(-4);
// => [0, -1, -2, -3]

    _.range(1, 5);
// => [1, 2, 3, 4]

    _.range(0, 20, 5);
// => [0, 5, 10, 15]

    _.range(0, -4, -1);
// => [0, -1, -2, -3]

    _.range(1, 4, 0);
// => [1, 1, 1]

    _.range(0);
// => []
}

function rangeRight281() {
    _.rangeRight(4);
// => [3, 2, 1, 0]

    _.rangeRight(-4);
// => [-3, -2, -1, 0]

    _.rangeRight(1, 5);
// => [4, 3, 2, 1]

    _.rangeRight(0, 20, 5);
// => [15, 10, 5, 0]

    _.rangeRight(0, -4, -1);
// => [-3, -2, -1, 0]

    _.rangeRight(1, 4, 0);
// => [1, 1, 1]

    _.rangeRight(0);
// => []
}

function stubArray282() {
    var arrays = _.times(2, _.stubArray);

    console.log(arrays);
// => [[], []]

    console.log(arrays[0] === arrays[1]);
// => false
}

function stubFalse283() {
    _.times(2, _.stubFalse);
// => [false, false]
}

function stubObject284() {
    var objects = _.times(2, _.stubObject);

    console.log(objects);
// => [{}, {}]

    console.log(objects[0] === objects[1]);
// => false
}

function stubString285() {
    _.times(2, _.stubString);
// => ['', '']
}

function stubTrue286() {
    _.times(2, _.stubTrue);
// => [true, true]
}

function times287() {
    _.times(3, String);
// => ['0', '1', '2']

    _.times(4, _.constant(0));
// => [0, 0, 0, 0]
}

function toPath288() {
    _.toPath('a.b.c');
// => ['a', 'b', 'c']

    _.toPath('a[0].b.c');
// => ['a', '0', 'b', 'c']
}

function uniqueId289() {
    _.uniqueId('contact_');
// => 'contact_104'

    _.uniqueId();
// => '105'
}

function add290() {
    _.add(6, 4);
// => 10
}

function ceil291() {
    _.ceil(4.006);
// => 5

    _.ceil(6.004, 2);
// => 6.01

    _.ceil(6040, -2);
// => 6100
}

function divide292() {
    _.divide(6, 4);
// => 1.5
}

function floor293() {
    _.floor(4.006);
// => 4

    _.floor(0.046, 2);
// => 0.04

    _.floor(4060, -2);
// => 4000
}

function max294() {
    _.max([4, 2, 8, 6]);
// => 8

    _.max([]);
// => undefined
}

function maxBy295() {
    var objects = [{'n': 1}, {'n': 2}];

    _.maxBy(objects, function (o) {
        return o.n;
    });
// => { 'n': 2 }

// The `_.property` iteratee shorthand.
    _.maxBy(objects, 'n');
// => { 'n': 2 }
}

function mean296() {
    _.mean([4, 2, 8, 6]);
// => 5
}

function meanBy297() {
    var objects = [{'n': 4}, {'n': 2}, {'n': 8}, {'n': 6}];

    _.meanBy(objects, function (o) {
        return o.n;
    });
// => 5

// The `_.property` iteratee shorthand.
    _.meanBy(objects, 'n');
// => 5
}

function min298() {
    _.min([4, 2, 8, 6]);
// => 2

    _.min([]);
// => undefined
}

function minBy299() {
    var objects = [{'n': 1}, {'n': 2}];

    _.minBy(objects, function (o) {
        return o.n;
    });
// => { 'n': 1 }

// The `_.property` iteratee shorthand.
    _.minBy(objects, 'n');
// => { 'n': 1 }
}

function multiply300() {
    _.multiply(6, 4);
// => 24
}

function round301() {
    _.round(4.006);
// => 4

    _.round(4.006, 2);
// => 4.01

    _.round(4060, -2);
// => 4100
}

function subtract302() {
    _.subtract(6, 4);
// => 2
}

function sum303() {
    _.sum([4, 2, 8, 6]);
// => 20
}

function sumBy304() {
    var objects = [{'n': 4}, {'n': 2}, {'n': 8}, {'n': 6}];

    _.sumBy(objects, function (o) {
        return o.n;
    });
// => 20

// The `_.property` iteratee shorthand.
    _.sumBy(objects, 'n');
// => 20
}

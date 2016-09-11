    
    95     var other = _.concat(array, 2, [3], [[4]]);
                       ~~~~~~~~
    
    examples.ts(95,17): error TS2453: The type argument for type parameter 'T' cannot be inferred from the usage. Consider specifying the type arguments explicitly.
      Type argument candidate 'number' is not a valid type argument because it is not a supertype of candidate 'number[]'.
    
    
    358     _.nth(array, 1);
              ~~~
    
    examples.ts(358,7): error TS2339: Property 'nth' does not exist on type 'LoDashStatic'.
    
    
    361     _.nth(array, -2);
              ~~~
    
    examples.ts(361,7): error TS2339: Property 'nth' does not exist on type 'LoDashStatic'.
    
    
    392     _.pullAllWith(array, [{'x': 3, 'y': 4}], _.isEqual);
              ~~~~~~~~~~~
    
    examples.ts(392,7): error TS2339: Property 'pullAllWith' does not exist on type 'LoDashStatic'.
    
    
    614     var zipped = _.zip(['a', 'b'], [1, 2], [true, false]);
                         ~~~~~
    
    examples.ts(614,18): error TS2453: The type argument for type parameter 'T' cannot be inferred from the usage. Consider specifying the type arguments explicitly.
      Type argument candidate 'string' is not a valid type argument because it is not a supertype of candidate 'number'.
    
    
    657     _.zip(['a', 'b'], [1, 2], [true, false]);
            ~~~~~
    
    examples.ts(657,5): error TS2453: The type argument for type parameter 'T' cannot be inferred from the usage. Consider specifying the type arguments explicitly.
      Type argument candidate 'string' is not a valid type argument because it is not a supertype of candidate 'number'.
    
    
    667     _.zipObjectDeep(['a.b[0].c', 'a.b[1].d'], [1, 2]);
              ~~~~~~~~~~~~~
    
    examples.ts(667,7): error TS2339: Property 'zipObjectDeep' does not exist on type 'LoDashStatic'.
    
    
    692         .value();
                 ~~~~~
    
    examples.ts(692,10): error TS2339: Property 'value' does not exist on type '{}'.
    
    
    739         .pick('user')
                 ~~~~
    
    examples.ts(739,10): error TS2339: Property 'pick' does not exist on type '{}'.
    
    
    765     wrapped.next();
                    ~~~~
    
    examples.ts(765,13): error TS2339: Property 'next' does not exist on type 'LoDashImplicitNumberArrayWrapper'.
    
    
    768     wrapped.next();
                    ~~~~
    
    examples.ts(768,13): error TS2339: Property 'next' does not exist on type 'LoDashImplicitNumberArrayWrapper'.
    
    
    771     wrapped.next();
                    ~~~~
    
    examples.ts(771,13): error TS2339: Property 'next' does not exist on type 'LoDashImplicitNumberArrayWrapper'.
    
    
    781     Array.from(wrapped);
                       ~~~~~~~
    
    examples.ts(781,16): error TS2345: Argument of type 'LoDashImplicitNumberArrayWrapper' is not assignable to parameter of type 'ArrayLike<{}>'.
      Property 'length' is missing in type 'LoDashImplicitNumberArrayWrapper'.
    
    
    916     _.flatMapDeep([1, 2], duplicate);
              ~~~~~~~~~~~
    
    examples.ts(916,7): error TS2339: Property 'flatMapDeep' does not exist on type 'LoDashStatic'.
    
    
    925     _.flatMapDepth([1, 2], duplicate, 2);
              ~~~~~~~~~~~~
    
    examples.ts(925,7): error TS2339: Property 'flatMapDepth' does not exist on type 'LoDashStatic'.
    
    
    1256     curried(1)(_, 3)(2);
             ~~~~~~~~~~~~~~~~~~~
    
    examples.ts(1256,5): error TS2349: Cannot invoke an expression whose type lacks a call signature.
    
    
    1277     curried(3)(1, _)(2);
             ~~~~~~~~~~~~~~~~~~~
    
    examples.ts(1277,5): error TS2349: Cannot invoke an expression whose type lacks a call signature.
    
    
    1330     values.cache.set(object, ['a', 'b']);
                              ~~~~~~
    
    examples.ts(1330,22): error TS2345: Argument of type '{ 'a': number; 'b': number; }' is not assignable to parameter of type 'string'.
    
    
    1335     _.memoize.Cache = WeakMap;
             ~~~~~~~~~~~~~~~
    
    examples.ts(1335,5): error TS2322: Type 'WeakMapConstructor' is not assignable to type 'MapCache'.
      Property 'delete' is missing in type 'WeakMapConstructor'.
    
    
    1436     numbers.then(_.spread(function (x, y) {
                          ~~~~~~~~~~~~~~~~~~~~~~~~~~
    1437         return x + y;
         ~~~~~~~~~~~~~~~~~~~~~
    1438     }));
         ~~~~~~
    
    examples.ts(1436,18): error TS2345: Argument of type 'Function' is not assignable to parameter of type '(value: [number, number]) => {} | PromiseLike<{}>'.
      Type 'Function' provides no match for the signature '(value: [number, number]): {} | PromiseLike<{}>'
    
    
    1484     _.castArray();
             ~~~~~~~~~~~~~
    
    examples.ts(1484,5): error TS2346: Supplied parameters do not match any signature of call target.
    
    
    1488     console.log(_.castArray(array) === array);
                         ~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    examples.ts(1488,17): error TS2365: Operator '===' cannot be applied to types 'number[][]' and 'number[]'.
    
    
    1545     _.conformsTo(object, {
               ~~~~~~~~~~
    
    examples.ts(1545,7): error TS2339: Property 'conformsTo' does not exist on type 'LoDashStatic'.
    
    
    1552     _.conformsTo(object, {
               ~~~~~~~~~~
    
    examples.ts(1552,7): error TS2339: Property 'conformsTo' does not exist on type 'LoDashStatic'.
    
    
    1982     _.isTypedArray(new Uint8Array);
                            ~~~~~~~~~~~~~~
    
    examples.ts(1982,20): error TS2346: Supplied parameters do not match any signature of call target.
    
    
    2050     _.toFinite(3.2);
               ~~~~~~~~
    
    examples.ts(2050,7): error TS2339: Property 'toFinite' does not exist on type 'LoDashStatic'.
    
    
    2053     _.toFinite(Number.MIN_VALUE);
               ~~~~~~~~
    
    examples.ts(2053,7): error TS2339: Property 'toFinite' does not exist on type 'LoDashStatic'.
    
    
    2056     _.toFinite(Infinity);
               ~~~~~~~~
    
    examples.ts(2056,7): error TS2339: Property 'toFinite' does not exist on type 'LoDashStatic'.
    
    
    2059     _.toFinite('3.2');
               ~~~~~~~~
    
    examples.ts(2059,7): error TS2339: Property 'toFinite' does not exist on type 'LoDashStatic'.
    
    
    2183     defaults({'a': 1}, {'b': 2}, {'a': 3});
             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    examples.ts(2183,5): error TS2346: Supplied parameters do not match any signature of call target.
    
    
    2194     defaults({'a': 1}, {'b': 2}, {'a': 3});
             ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
    
    examples.ts(2194,5): error TS2346: Supplied parameters do not match any signature of call target.
    
    
    2245         return o.age < 40;
                          ~~~
    
    examples.ts(2245,18): error TS2339: Property 'age' does not exist on type '{}'.
    
    
    2270         return o.age < 40;
                          ~~~
    
    examples.ts(2270,18): error TS2339: Property 'age' does not exist on type '{}'.
    
    
    2568     console.log(object.x[0].y.z);
                                ~
    
    examples.ts(2568,24): error TS2339: Property 'x' does not exist on type '{ 'a': { 'b': { 'c': number; }; }[]; }'.
    
    
    2611         (result[value] || (result[value] = [])).push(key);
                                                         ~~~~
    
    examples.ts(2611,49): error TS2339: Property 'push' does not exist on type '{}'.
    
    
    2643     console.log(object.x[0].y.z);
                                ~
    
    examples.ts(2643,24): error TS2339: Property 'x' does not exist on type '{ 'a': { 'b': { 'c': number; }; }[]; }'.
    
    
    2650     _.updateWith(object, '[0][1]', _.constant('a'), Object);
               ~~~~~~~~~~
    
    examples.ts(2650,7): error TS2339: Property 'updateWith' does not exist on type 'LoDashStatic'.
    
    
    3070         elements = [];
                 ~~~~~~~~
    
    examples.ts(3070,9): error TS2322: Type 'undefined[]' is not assignable to type 'Error | NodeListOf<HTMLAnchorElement>'.
      Type 'undefined[]' is not assignable to type 'NodeListOf<HTMLAnchorElement>'.
        Property 'item' is missing in type 'undefined[]'.
    
    
    3088     var func = _.cond([
                          ~~~~
    
    examples.ts(3088,18): error TS2339: Property 'cond' does not exist on type 'LoDashStatic'.
    
    
    3090         [_.conforms({'b': _.isNumber}), _.constant('matches B')],
                    ~~~~~~~~
    
    examples.ts(3090,12): error TS2339: Property 'conforms' does not exist on type 'LoDashStatic'.
    
    
    3091         [_.stubTrue, _.constant('no match')]
                    ~~~~~~~~
    
    examples.ts(3091,12): error TS2339: Property 'stubTrue' does not exist on type 'LoDashStatic'.
    
    
    3110     _.filter(objects, _.conforms({
                                 ~~~~~~~~
    
    examples.ts(3110,25): error TS2339: Property 'conforms' does not exist on type 'LoDashStatic'.
    
    
    3129     _.defaultTo(1, 10);
               ~~~~~~~~~
    
    examples.ts(3129,7): error TS2339: Property 'defaultTo' does not exist on type 'LoDashStatic'.
    
    
    3132     _.defaultTo(undefined, 10);
               ~~~~~~~~~
    
    examples.ts(3132,7): error TS2339: Property 'defaultTo' does not exist on type 'LoDashStatic'.
    
    
    3141     var addSquare = _.flow([_.add, square]);
                                    ~~~~~~~~~~~~~~~
    
    examples.ts(3141,28): error TS2345: Argument of type '((augend: number, addend: number) => number)[]' is not assignable to parameter of type 'Function'.
      Property 'apply' is missing in type '((augend: number, addend: number) => number)[]'.
    
    
    3151     var addSquare = _.flowRight([square, _.add]);
                                         ~~~~~~~~~~~~~~~
    
    examples.ts(3151,33): error TS2345: Argument of type '((augend: number, addend: number) => number)[]' is not assignable to parameter of type 'Function'.
    
    
    3182     _.iteratee = _.wrap(_.iteratee, function (iteratee, func) {
             ~~~~~~~~~~
    
    examples.ts(3182,5): error TS2322: Type 'Function' is not assignable to type '{ <TResult>(func: Function): (...args: any[]) => TResult; <TResult>(func: string): (object: any) ...'.
      Type 'Function' provides no match for the signature '<TResult>(func: Function): (...args: any[]) => TResult'
    
    
    3239             return /[aeiou]/i.test(v);
                                            ~
    
    examples.ts(3239,36): error TS2345: Argument of type '{}' is not assignable to parameter of type 'string'.
    
    
    3244     _.vowels('fred');
               ~~~~~~
    
    examples.ts(3244,7): error TS2339: Property 'vowels' does not exist on type 'LoDashStatic'.
    
    
    3247     _('fred').vowels().value();
                       ~~~~~~
    
    examples.ts(3247,15): error TS2339: Property 'vowels' does not exist on type 'LoDashImplicitStringWrapper'.
    
    
    3251     _('fred').vowels();
                       ~~~~~~
    
    examples.ts(3251,15): error TS2339: Property 'vowels' does not exist on type 'LoDashImplicitStringWrapper'.
    
    
    3378     var arrays = _.times(2, _.stubArray);
                                       ~~~~~~~~~
    
    examples.ts(3378,31): error TS2339: Property 'stubArray' does not exist on type 'LoDashStatic'.
    
    
    3388     _.times(2, _.stubFalse);
                          ~~~~~~~~~
    
    examples.ts(3388,18): error TS2339: Property 'stubFalse' does not exist on type 'LoDashStatic'.
    
    
    3393     var objects = _.times(2, _.stubObject);
                                        ~~~~~~~~~~
    
    examples.ts(3393,32): error TS2339: Property 'stubObject' does not exist on type 'LoDashStatic'.
    
    
    3403     _.times(2, _.stubString);
                          ~~~~~~~~~~
    
    examples.ts(3403,18): error TS2339: Property 'stubString' does not exist on type 'LoDashStatic'.
    
    
    3408     _.times(2, _.stubTrue);
                          ~~~~~~~~
    
    examples.ts(3408,18): error TS2339: Property 'stubTrue' does not exist on type 'LoDashStatic'.
    
    
    3453     _.divide(6, 4);
               ~~~~~~
    
    examples.ts(3453,7): error TS2339: Property 'divide' does not exist on type 'LoDashStatic'.
    
    
    3497     _.meanBy(objects, function (o) {
               ~~~~~~
    
    examples.ts(3497,7): error TS2339: Property 'meanBy' does not exist on type 'LoDashStatic'.
    
    
    3503     _.meanBy(objects, 'n');
               ~~~~~~
    
    examples.ts(3503,7): error TS2339: Property 'meanBy' does not exist on type 'LoDashStatic'.
    
    
    3529     _.multiply(6, 4);
               ~~~~~~~~
    
    examples.ts(3529,7): error TS2339: Property 'multiply' does not exist on type 'LoDashStatic'.
    
    
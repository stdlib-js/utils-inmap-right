<!--

@license Apache-2.0

Copyright (c) 2018 The Stdlib Authors.

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

   http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.

-->


<details>
  <summary>
    About stdlib...
  </summary>
  <p>We believe in a future in which the web is a preferred environment for numerical computation. To help realize this future, we've built stdlib. stdlib is a standard library, with an emphasis on numerical and scientific computation, written in JavaScript (and C) for execution in browsers and in Node.js.</p>
  <p>The library is fully decomposable, being architected in such a way that you can swap out and mix and match APIs and functionality to cater to your exact preferences and use cases.</p>
  <p>When you use stdlib, you can be absolutely certain that you are using the most thorough, rigorous, well-written, studied, documented, tested, measured, and high-quality code out there.</p>
  <p>To join us in bringing numerical computing to the web, get started by checking us out on <a href="https://github.com/stdlib-js/stdlib">GitHub</a>, and please consider <a href="https://opencollective.com/stdlib">financially supporting stdlib</a>. We greatly appreciate your continued support!</p>
</details>

# inmapRight

[![NPM version][npm-image]][npm-url] [![Build Status][test-image]][test-url] [![Coverage Status][coverage-image]][coverage-url] <!-- [![dependencies][dependencies-image]][dependencies-url] -->

> Invoke a function for each element in a collection and update the collection in-place, iterating from right to left.

<!-- Section to include introductory text. Make sure to keep an empty line after the intro `section` element and another before the `/section` close. -->

<section class="intro">

</section>

<!-- /.intro -->

<!-- Package usage documentation. -->

<section class="installation">

## Installation

```bash
npm install @stdlib/utils-inmap-right
```

Alternatively,

-   To load the package in a website via a `script` tag without installation and bundlers, use the [ES Module][es-module] available on the [`esm`][esm-url] branch (see [README][esm-readme]).
-   If you are using Deno, visit the [`deno`][deno-url] branch (see [README][deno-readme] for usage intructions).
-   For use in Observable, or in browser/node environments, use the [Universal Module Definition (UMD)][umd] build available on the [`umd`][umd-url] branch (see [README][umd-readme]).

The [branches.md][branches-url] file summarizes the available branches and displays a diagram illustrating their relationships.

To view installation and usage instructions specific to each branch build, be sure to explicitly navigate to the respective README files on each branch, as linked to above.

</section>

<section class="usage">

## Usage

```javascript
var inmapRight = require( '@stdlib/utils-inmap-right' );
```

#### inmapRight( collection, fcn\[, thisArg ] )

Invokes a `function` for each element in a `collection` and updates the `collection` in-place, iterating from right to left.

```javascript
function scale( value, index ) {
    return value * index;
}

var arr = [ 1, 2, 3, 4 ];

var out = inmapRight( arr, scale );
// returns [ 0, 2, 6, 12 ]

var bool = ( out === arr );
// returns true
```

The invoked `function` is provided three arguments:

-   **value**: collection element.
-   **index**: collection index.
-   **collection**: input collection.

Basic support for dynamic collections is provided. Note, however, that index incrementation is **not** guaranteed to be monotonically **decreasing**.

```javascript
var arr = [ 1, 2, 3, 4 ];
var i = 0;

function scale1( value, index, collection ) {
    i += 1;
    if ( index === 0 && collection.length < 10 ) {
        collection.unshift( i+1 );
    }
    return value * index;
}

var out = inmapRight( arr, scale1 );
// returns [ 0, 0, 0, 0, 0, 0, 0, 2, 6, 12 ]

function scale2( value, index, collection ) {
    collection.shift();
    return value * index;
}

arr = [ 1, 2, 3, 4 ];

out = inmapRight( arr, scale2 );
// returns [ 3, 12 ]
```

To set the function execution context, provide a `thisArg`.

```javascript
function sum( value ) {
    this.sum += value;
    this.count += 1;
    return value;
}

var arr = [ 1, 2, 3, 4 ];

var context = {
    'sum': 0,
    'count': 0
};

var out = inmapRight( arr, sum, context );
// returns [ 1, 2, 3, 4 ]

var mean = context.sum / context.count;
// returns 2.5
```

</section>

<!-- /.usage -->

<!-- Package usage notes. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="notes">

## Notes

-   A `collection` may be either an [`Array`][mdn-array], [`Typed Array`][mdn-typed-array], or an array-like [`Object`][mdn-object] (excluding `strings` and `functions`).

-   The function differs from [`Array.prototype.map`][mdn-array-map] in the following ways:

    -   The function returns the input `collection`.

    -   The function modifies `collection` elements in-place.

    -   The function does **not** skip `undefined` elements.

        <!-- eslint-disable no-sparse-arrays, stdlib/doctest-marker -->

        ```javascript
        function log( value, index ) {
            console.log( '%s: %s', index, value );
            return value;
        }

        var arr = [ 1, , , 4 ];

        var out = inmapRight( arr, log );
        /* =>
            3: 4
            2: undefined
            1: undefined
            0: 1
        */
        ```

    -   The function provides limited support for dynamic collections (i.e., collections whose `length` changes during execution).

</section>

<!-- /.notes -->

<!-- Package usage examples. -->

<section class="examples">

## Examples

<!-- eslint no-undef: "error" -->

```javascript
var isEven = require( '@stdlib/assert-is-even' ).isPrimitive;
var inmapRight = require( '@stdlib/utils-inmap-right' );

var bool;
var arr;
var out;
var i;

function scale( value, index, collection ) {
    i += 1;
    if ( isEven( i ) ) {
        collection.pop();
    } else {
        collection.unshift( i+1 );
    }
    return value * index;
}

arr = new Array( 100 );
for ( i = 0; i < arr.length; i++ ) {
    arr[ i ] = i;
}

i = 0;
out = inmapRight( arr, scale );

bool = ( out === arr );
console.log( bool );

console.log( out );
```

</section>

<!-- /.examples -->

<!-- Section to include cited references. If references are included, add a horizontal rule *before* the section. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="references">

</section>

<!-- /.references -->

<!-- Section for related `stdlib` packages. Do not manually edit this section, as it is automatically populated. -->

<section class="related">

* * *

## See Also

-   <span class="package-name">[`@stdlib/utils-for-each-right`][@stdlib/utils/for-each-right]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection, iterating from right to left.</span>
-   <span class="package-name">[`@stdlib/utils-inmap`][@stdlib/utils/inmap]</span><span class="delimiter">: </span><span class="description">invoke a function for each element in a collection and update the collection in-place.</span>
-   <span class="package-name">[`@stdlib/utils-map-right`][@stdlib/utils/map-right]</span><span class="delimiter">: </span><span class="description">apply a function to each element in an array and assign the result to an element in an output array, iterating from right to left.</span>

</section>

<!-- /.related -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->


<section class="main-repo" >

* * *

## Notice

This package is part of [stdlib][stdlib], a standard library for JavaScript and Node.js, with an emphasis on numerical and scientific computing. The library provides a collection of robust, high performance libraries for mathematics, statistics, streams, utilities, and more.

For more information on the project, filing bug reports and feature requests, and guidance on how to develop [stdlib][stdlib], see the main project [repository][stdlib].

#### Community

[![Chat][chat-image]][chat-url]

---

## License

See [LICENSE][stdlib-license].


## Copyright

Copyright &copy; 2016-2025. The Stdlib [Authors][stdlib-authors].

</section>

<!-- /.stdlib -->

<!-- Section for all links. Make sure to keep an empty line after the `section` element and another before the `/section` close. -->

<section class="links">

[npm-image]: http://img.shields.io/npm/v/@stdlib/utils-inmap-right.svg
[npm-url]: https://npmjs.org/package/@stdlib/utils-inmap-right

[test-image]: https://github.com/stdlib-js/utils-inmap-right/actions/workflows/test.yml/badge.svg?branch=main
[test-url]: https://github.com/stdlib-js/utils-inmap-right/actions/workflows/test.yml?query=branch:main

[coverage-image]: https://img.shields.io/codecov/c/github/stdlib-js/utils-inmap-right/main.svg
[coverage-url]: https://codecov.io/github/stdlib-js/utils-inmap-right?branch=main

<!--

[dependencies-image]: https://img.shields.io/david/stdlib-js/utils-inmap-right.svg
[dependencies-url]: https://david-dm.org/stdlib-js/utils-inmap-right/main

-->

[chat-image]: https://img.shields.io/gitter/room/stdlib-js/stdlib.svg
[chat-url]: https://app.gitter.im/#/room/#stdlib-js_stdlib:gitter.im

[stdlib]: https://github.com/stdlib-js/stdlib

[stdlib-authors]: https://github.com/stdlib-js/stdlib/graphs/contributors

[umd]: https://github.com/umdjs/umd
[es-module]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules

[deno-url]: https://github.com/stdlib-js/utils-inmap-right/tree/deno
[deno-readme]: https://github.com/stdlib-js/utils-inmap-right/blob/deno/README.md
[umd-url]: https://github.com/stdlib-js/utils-inmap-right/tree/umd
[umd-readme]: https://github.com/stdlib-js/utils-inmap-right/blob/umd/README.md
[esm-url]: https://github.com/stdlib-js/utils-inmap-right/tree/esm
[esm-readme]: https://github.com/stdlib-js/utils-inmap-right/blob/esm/README.md
[branches-url]: https://github.com/stdlib-js/utils-inmap-right/blob/main/branches.md

[stdlib-license]: https://raw.githubusercontent.com/stdlib-js/utils-inmap-right/main/LICENSE

[mdn-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array

[mdn-typed-array]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/TypedArray

[mdn-object]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object

[mdn-array-map]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map

<!-- <related-links> -->

[@stdlib/utils/for-each-right]: https://github.com/stdlib-js/utils-for-each-right

[@stdlib/utils/inmap]: https://github.com/stdlib-js/utils-inmap

[@stdlib/utils/map-right]: https://github.com/stdlib-js/utils-map-right

<!-- </related-links> -->

</section>

<!-- /.links -->

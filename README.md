visible.js [![Build Status](https://travis-ci.org/mvader/visible.js.svg)](https://travis-ci.org/mvader/visible.js)
===========================

Simple library with no dependencies to check if an element is visible on the current viewport.

### Usage
```javascript
visible(document.getElementById('my-elem')); // Returns true if the element is visible!

visible(document.getElementById('my-elem'), true); // Returns true if the element is partially or completely visible!

visible(document.getElementById('my-elem'), false, true); // Returns true if the element is visible even if it's hidden!

visible(document.getElementById('my-elem'), false, false, 'vertical'); // Returns true if the element is visible vertically!

visible(document.getElementById('my-elem'), false, false, 'vertical'); // Returns true if the element is visible horizontally!
```

Blog article
-----------

- [Checking if an element is visible on-screen using jQuery](http://www.teamdf.com/web/jquery-element-onscreen-visibility/194/)


Limitations
-----------

Currently, this plugin will not check for visibility in nested scrollable areas, only on the main viewport (window object).

Disclaimer
----------

Based on customd jquery.visible https://github.com/customd/jquery-visible

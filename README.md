# compose-redux-reducers
This module provides a function for composing several redux reducers into a single reducer. Intended to be used when each reducer returns the entire state.

## Installation
This module can be installed using npm:

```
npm install --save compose-redux-reducers
```

## Usage

An example (using the ES6 import syntax):

```javascript
import composeReducers from "compose-redux-reducers";

function reducer1(state, action) { /*...*/ }
function reducer2(state, action) { /*...*/ }
function reducer3(state, action) { /*...*/ }

const rootReducer = composeReducers(reducer1, reducer2, reducer3);
```

## Behavior

In the above example, calling `rootReducer(state, action)` is equivalent to calling `reducer3(reducer2(reducer1(state, action), action), action)`

If composeReducers is called without any arguments, the resulting function will simply return the state it is called with.


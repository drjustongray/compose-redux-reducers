# compose-redux-reducers
This module provides a function for composing several redux reducers into a single reducer. Useful if you intend for each reducer to return the entire application's state.

# Installation
This module can be installed using npm:

```
npm install --save compose-redux-reducers
```

# Usage

An example using the ES6 import syntax:

```
import composeReducers from "compose-redux-reducers";

function reducer1(state, action) { /*...*/ }
function reducer2(state, action) { /*...*/ }
function reducer3(state, action) { /*...*/ }

const rootReducer = composeReducers(reducer1, reducer2, reducer3);
```

# Behavior

Calling the resulting reducer with the state and an action will call each of the reducers in turn with the state returned by the previous reducer as well as the action, and then return the state produced by the final reducer.

If composeReducer is called without any arguments, the resulting reducer will simply return the state passed in to it.
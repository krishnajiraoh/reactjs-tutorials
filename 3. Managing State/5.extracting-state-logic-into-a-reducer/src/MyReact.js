import { useState } from 'react';

export function useReducer(reducer, initialState) {
  const [state, setState] = useState(initialState);

  function dispatch(action){
      setState(reducer(state, action));
      // Though it doesn’t matter in most cases, a slightly more accurate implementation looks like this:
      // setState((s) => reducer(s, action));      
  }

  return [state, dispatch];
}

export function getFinalState(baseState, queue) {
    let finalState = baseState;
  
    // TODO: do something with the queue...
    queue.map(q => {
        
        if(typeof q === 'function')
            finalState = q(finalState)
        if(typeof q === 'number')
            finalState = q
    })
    
    return finalState;
  }
  
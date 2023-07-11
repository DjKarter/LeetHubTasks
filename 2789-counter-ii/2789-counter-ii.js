/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    const val = init;
    let state = init;
    return {
        increment: () => ++state,
        decrement: () => --state,
        reset: () => {
            state = val;
            return state;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */

//Selectors are functions that know how to extract specific pieces of information from a store state value. 
//As an application grows bigger, this can help avoid repeating logic as different parts of the app need to
// read the same data

export const getElementSelector = (rootReducer) => rootReducer.elementReducer.element;

export const getElementPromiseSelector = (rootReducer) => rootReducer.elementReducer.promise;
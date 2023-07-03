// import {configureStore} from '@reduxjs/toolkit'
// import Reducers from '../reducers/index';
// function configureStoreObj(preloadedState){
//     const store = configureStore({
//         reducer: Reducers,
//         devTools: process.env.NODE_ENV !== 'production',
//         preloadedState
//     });
// }

// const store = configureStoreObj();

// export default store;


import { configureStore } from '@reduxjs/toolkit';
import Reducers from '../reducers';
function configureStoreObj(preloadedState){
    const store = configureStore({
        reducer: Reducers,
        devTools: process.env.NODE_ENV !== 'production',
        preloadedState
    });
    return store;
}

const store = configureStoreObj();
export default store;
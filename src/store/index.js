import { createStore } from 'vuex';

import requestModule from './modules/requestModule';

const store = createStore({
    modules: {
        request: requestModule,
    }
})

export default store;